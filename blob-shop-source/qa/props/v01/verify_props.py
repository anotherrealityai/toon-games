"""Read-only binary/geometry verification; writes only this QA directory."""
from pathlib import Path
import hashlib
import json
import math
import struct

ROOT=Path(__file__).resolve().parents[3]
MANIFEST=ROOT/'assets/models/props/manifest.json'
data=json.loads(MANIFEST.read_text())
EXPECTED={'duck','star','ear','horn','capsule','tray','mat','basket','bell','counter','eye','capsule-coconut'}
assert set(data['assets'])==EXPECTED

def sha(b):return hashlib.sha256(b).hexdigest()
def dot(a,b):return sum(x*y for x,y in zip(a,b))
def cross(a,b):return (a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0])
def identity():return [[int(r==c) for c in range(4)] for r in range(4)]
def multiply(a,b):return [[sum(a[r][k]*b[k][c] for k in range(4)) for c in range(4)] for r in range(4)]
def transform(m,p):return [sum(m[r][k]*(*p,1)[k] for k in range(4)) for r in range(3)]

def matrix(node):
    if 'matrix' in node:return [[node['matrix'][c*4+r] for c in range(4)] for r in range(4)]
    x,y,z,w=node.get('rotation',(0,0,0,1));s=node.get('scale',(1,1,1));t=node.get('translation',(0,0,0))
    r=[[1-2*y*y-2*z*z,2*x*y-2*z*w,2*x*z+2*y*w],
       [2*x*y+2*z*w,1-2*x*x-2*z*z,2*y*z-2*x*w],
       [2*x*z-2*y*w,2*y*z+2*x*w,1-2*x*x-2*y*y]]
    m=identity()
    for i in range(3):
        for j in range(3):m[i][j]=r[i][j]*s[j]
        m[i][3]=t[i]
    return m

def glb(path):
    raw=path.read_bytes();magic,version,length=struct.unpack_from('<4sII',raw,0)
    assert magic==b'glTF' and version==2 and length==len(raw)
    n,kind=struct.unpack_from('<I4s',raw,12);assert kind==b'JSON';d=json.loads(raw[20:20+n])
    bn,bkind=struct.unpack_from('<I4s',raw,20+n);assert bkind==b'BIN\0';binary=raw[28+n:28+n+bn]
    assert not d.get('cameras') and not d.get('animations') and not d.get('skins')
    assert 'KHR_lights_punctual' not in d.get('extensions',{})
    def accessor(index):
        a=d['accessors'][index];v=d['bufferViews'][a['bufferView']]
        counts={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4};formats={5121:'B',5123:'H',5125:'I',5126:'f'}
        fmt='<'+formats[a['componentType']]*counts[a['type']];size=struct.calcsize(fmt);stride=v.get('byteStride',size)
        offset=v.get('byteOffset',0)+a.get('byteOffset',0)
        return [struct.unpack_from(fmt,binary,offset+i*stride) for i in range(a['count'])]
    triangles=0;normals=0;volumes={};geom=hashlib.sha256();allpoints=[]
    parents={c:i for i,n in enumerate(d['nodes']) for c in n.get('children',[])}
    worlds={}
    def world(i):
        if i not in worlds:worlds[i]=multiply(world(parents[i]) if i in parents else identity(),matrix(d['nodes'][i]))
        return worlds[i]
    for ni,node in enumerate(d['nodes']):
        if 'mesh' not in node:continue
        volume=0
        for p in d['meshes'][node['mesh']]['primitives']:
            assert p.get('mode',4)==4
            ps=accessor(p['attributes']['POSITION']);ns=accessor(p['attributes']['NORMAL']);ids=[a[0] for a in accessor(p['indices'])]
            assert len(ps)==len(ns) and len(ids)%3==0
            for n in ns:assert all(math.isfinite(x) for x in n) and abs(dot(n,n)-1)<.001
            normals+=len(ns);triangles+=len(ids)//3
            for pnt in ps:
                assert all(math.isfinite(x) for x in pnt)
                allpoints.append(transform(world(ni),pnt));geom.update(struct.pack('<3f',*pnt))
            for i in ids:geom.update(struct.pack('<I',i))
            for i in range(0,len(ids),3):volume+=dot(ps[ids[i]],cross(ps[ids[i+1]],ps[ids[i+2]]))/6
        assert volume>0,(path.name,node.get('name'),volume)
        volumes[node.get('name',str(ni))]=volume
    lo=[min(p[i] for p in allpoints) for i in range(3)];hi=[max(p[i] for p in allpoints) for i in range(3)]
    return {'bytes':len(raw),'sha256':sha(raw),'version':version,'mesh_nodes':len(volumes),'materials':[m['name'] for m in d['materials']],
            'triangles':triangles,'finite_unit_normals':normals,'positive_signed_volume_per_mesh':True,'geometry_sha256':geom.hexdigest(),
            'dimensions_glTF_B':[round(hi[i]-lo[i],6) for i in range(3)],'source_without_studio':True}

report={'scope':'asset file, closed source mesh and GLB structural checks; not runtime QA','assets':{},'previews':{}}
for name,a in data['assets'].items():
    assert a['validation']['GLB_Blender_roundtrip'] and a['nonmanifold_edges']==0
    for f in ('source','glb'):
        raw=(ROOT/a[f]['path']).read_bytes();assert len(raw)==a[f]['bytes'] and sha(raw)==a[f]['sha256'],(name,f)
    g=glb(ROOT/a['glb']['path']);assert g['triangles']==a['triangles']
    expected=[a['dimensions_B'][0],a['dimensions_B'][2],a['dimensions_B'][1]]
    assert max(abs(x-y) for x,y in zip(g['dimensions_glTF_B'],expected))<.00001
    assert abs(a['bounds_B']['min'][2])<.00001
    report['assets'][name]=g
    if name=='capsule':
        v=glb(ROOT/a['variant_files']['cherry']['path']);assert v['geometry_sha256']==g['geometry_sha256'];report['capsule_cherry']=v
for p in sorted(Path(__file__).parent.glob('*.png')):
    raw=p.read_bytes();assert raw[:8]==b'\x89PNG\r\n\x1a\n'
    dims=struct.unpack('>II',raw[16:24]);report['previews'][p.name]={'pixels':dims,'bytes':len(raw),'sha256':sha(raw)}
report['total_canonical_GLb_bytes']=sum(a['bytes'] for a in report['assets'].values())
report['total_canonical_triangles']=sum(a['triangles'] for a in report['assets'].values())
report['status']='PASS'
(Path(__file__).parent/'verification.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'status':report['status'],'canonical_assets':len(report['assets']),'triangles':report['total_canonical_triangles'],'bytes':report['total_canonical_GLb_bytes'],'variant_geometry_identical':True},indent=2))
