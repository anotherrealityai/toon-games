"""Ten independent Blob Shop props. Blender 5.1.2, CPU studio renders.

Run with -- --only duck for the first art sample; -- --remaining continues.
No game scene, customer, room, or physics is built here.
"""
import bpy
import bmesh
import math
import json
import hashlib
import struct
import sys
from pathlib import Path
from mathutils import Vector

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'assets/models/props'
SRC=ROOT/'blender/source/props'
QA=ROOT/'qa/props/v01'
for p in (OUT,SRC,QA): p.mkdir(parents=True,exist_ok=True)
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
ONLY=args[args.index('--only')+1] if '--only' in args else None
manifest_path=OUT/'manifest.json'
manifest=json.loads(manifest_path.read_text()) if manifest_path.exists() else {'assets':{}}
manifest.update({'version':1,'unit_contract':{'B':1.0,'definition':'normalized undeformed blob diameter; not solver constants','metres_assigned':False,'runtime_scale':'one uniform scale relative to unchanged SoftBody radius'},'axes':{'Blender_up':'+Z','Blender_front':'-Y','glTF_up':'+Y','glTF_front':'+Z'},'blender_version':bpy.app.version_string,'purpose':'separate modeled props; scene assembled later in engine','not_tested':['Chrome rendering','touch','SoftBody contacts','FPS','real phone viewport']})

def srgb(h):
    v=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    return tuple(x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v)

def mat(name,h,rough=.35,metal=0,transmission=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*srgb(h),1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*srgb(h),1)
    p.inputs['Roughness'].default_value=rough; p.inputs['Metallic'].default_value=metal
    p.inputs['Coat Weight'].default_value=.25 if metal==0 else .05
    p.inputs['Coat Roughness'].default_value=.18
    p.inputs['Transmission Weight'].default_value=transmission
    p.inputs['IOR'].default_value=1.35 if transmission else 1.46
    return m

def init():
    bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
    for c in list(bpy.data.collections): bpy.data.collections.remove(c)
    for d in list(bpy.data.materials): bpy.data.materials.remove(d)
    global prop,studio,M
    prop=bpy.data.collections.new('PROP_ONLY'); bpy.context.scene.collection.children.link(prop)
    studio=bpy.data.collections.new('STUDIO_NOT_EXPORTED'); bpy.context.scene.collection.children.link(studio)
    M={k:mat(*v) for k,v in {
        'yellow':('toy_yellow','FFD45C',.24),'wing':('toy_wing_yellow','F4BE43',.29),
        'orange':('duck_beak_orange','F79332',.26),'mouth':('duck_beak_seam','B7551F',.38),
        'ink':('eye_cocoa','251C20',.20),'white':('eye_glint','FFF5DC',.19),
        'pink':('ear_pink','F89BBF',.28),'inner':('ear_inner_pink','E971A4',.42),
        'purple':('horn_lilac','B79AE1',.28),'ridge':('horn_ridge_lilac','C8ACE9',.28),
        'cream':('warm_cream','FFF0D6',.42),'peach':('soft_apricot','F5AD87',.36),
        'coral':('counter_coral','F6A18D',.32),'lavender':('tray_lavender','C9B7E7',.40),
        'mint':('mat_mint','A5D9C8',.64),'mintedge':('mat_edge','80C6B4',.60),
        'liner':('basket_liner_cream','F8EBD7',.82),'gold':('bell_pale_brass','E8BF70',.29,.72),
        'aqua':('capsule_aqua','50CAD7',.14,0,.20),'cherry':('capsule_cherry','F16E88',.14,0,.20),
        'studio':('studio_neutral','ECE7DF',.78)}.items()}

def assign(o,name,material):
    o.name=name
    for c in list(o.users_collection): c.objects.unlink(o)
    prop.objects.link(o)
    if material: o.data.materials.append(material)
    return o

def smooth(o):
    for p in o.data.polygons: p.use_smooth=True
    return o

def apply(o,modifier):
    bpy.context.view_layer.objects.active=o
    bpy.ops.object.modifier_apply(modifier=modifier.name)

def ell(name,xyz,r,material,segments=32,rings=16):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,location=xyz)
    o=assign(bpy.context.object,name,material); o.scale=r
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    return smooth(o)

def bevel(o,width,segments=3):
    m=o.modifiers.new('Rounded edges','BEVEL'); m.width=width; m.segments=segments
    m.limit_method='ANGLE'; apply(o,m)
    return o

def cyl(name,xyz,r,depth,material,edge=.004):
    bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=r,depth=depth,location=xyz)
    o=assign(bpy.context.object,name,material)
    if edge: bevel(o,edge)
    return smooth(o)

def join(objects,name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0]; bpy.ops.object.join()
    objects[0].name=name
    return objects[0]

def recalc(o):
    bm=bmesh.new(); bm.from_mesh(o.data); bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces)); bm.to_mesh(o.data);bm.free()

def mesh(name,verts,faces,material,shaded=True):
    d=bpy.data.meshes.new(name);d.from_pydata(verts,[],faces);d.update()
    o=bpy.data.objects.new(name,d);prop.objects.link(o);o.data.materials.append(material);recalc(o)
    return smooth(o) if shaded else o

def lathe(name,profile,material,N=64):
    # profile ordered along a closed cross section; entries z, radius, optional x/y centre.
    closed=profile[0]==profile[-1]
    if closed:profile=profile[:-1]
    vs=[]
    for row in profile:
        z,r=row[:2];cx=row[2] if len(row)>2 else 0;cy=row[3] if len(row)>3 else 0
        vs.extend((cx+r*math.cos(i*2*math.pi/N),cy+r*math.sin(i*2*math.pi/N),z) for i in range(N))
    fs=[]
    for j in range(len(profile) if closed else len(profile)-1):
        nj=(j+1)%len(profile)
        fs.extend((j*N+i,j*N+(i+1)%N,nj*N+(i+1)%N,nj*N+i) for i in range(N))
    if not closed:fs.extend([tuple(range(N-1,-1,-1)),tuple((len(profile)-1)*N+i for i in range(N))])
    o=mesh(name,vs,fs,material)
    # Merge coincident poles, so the resulting surface has no degenerate cap rings.
    bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001);bm.to_mesh(o.data);bm.free();recalc(o)
    return o

def curve(name,points,r,material):
    d=bpy.data.curves.new(name,'CURVE');d.dimensions='3D';d.bevel_depth=r;d.bevel_resolution=2;d.resolution_u=12
    closed=(Vector(points[0])-Vector(points[-1])).length<.000001
    if closed:points=points[:-1]
    s=d.splines.new('POLY');s.points.add(len(points)-1)
    s.use_cyclic_u=closed
    for p,v in zip(s.points,points):p.co=(*v,1)
    d.use_fill_caps=True
    o=bpy.data.objects.new(name,d);prop.objects.link(o);o.data.materials.append(material)
    bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False)
    bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001);bm.to_mesh(o.data);bm.free();recalc(o)
    return o

def rr(w,d,r,n=10):
    pts=[]
    for x,y,start in [(w/2-r,d/2-r,0),(-w/2+r,d/2-r,90),(-w/2+r,-d/2+r,180),(w/2-r,-d/2+r,270)]:
        for i in range(n):
            a=math.radians(start+90*i/n);pts.append((x+r*math.cos(a),y+r*math.sin(a)))
    return pts

def rounded_loft(name,profiles,material,closed_cross=False):
    # Every profile is (z,width,depth,corner radius), including outer and inner loops.
    loops=[rr(w,d,r) for z,w,d,r in profiles];N=len(loops[0])
    vs=[(x,y,profiles[j][0]) for j,p in enumerate(loops) for x,y in p]
    fs=[] if closed_cross else [tuple(range(N-1,-1,-1))]
    for j in range(len(loops) if closed_cross else len(loops)-1):
        nj=(j+1)%len(loops)
        fs.extend((j*N+i,j*N+(i+1)%N,nj*N+(i+1)%N,nj*N+i) for i in range(N))
    if not closed_cross:fs.append(tuple((len(loops)-1)*N+i for i in range(N)))
    o=mesh(name,vs,fs,material)
    if not closed_cross:o.data.polygons[0].use_smooth=False;o.data.polygons[-1].use_smooth=False
    return o

def box(name,xyz,dims,material,edge=.03):
    bpy.ops.mesh.primitive_cube_add(size=1,location=xyz);o=assign(bpy.context.object,name,material);o.dimensions=dims
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    bevel(o,edge,4)
    m=o.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL');apply(o,m)
    return o

def duck():
    body=ell('duck_body_core',(0,.015,.093),(.121,.137,.093),M['yellow'])
    head=ell('duck_head_core',(0,-.062,.208),(.087,.083,.089),M['yellow'])
    neck=ell('duck_neck_core',(0,-.043,.144),(.070,.068,.061),M['yellow'])
    tail=ell('duck_tail_core',(0,.104,.142),(.046,.038,.051),M['yellow'])
    tail.rotation_euler[0]=-.35
    core=join([body,head,neck,tail],'duck_body')
    rem=core.modifiers.new('Unified smooth toy body','REMESH');rem.mode='VOXEL';rem.voxel_size=.0045;rem.use_smooth_shade=True;apply(core,rem)
    sm=core.modifiers.new('Gentle surface smoothing','SMOOTH');sm.factor=.65;sm.iterations=10;apply(core,sm)
    dec=core.modifiers.new('Economical body mesh','DECIMATE');dec.ratio=.23;apply(core,dec);smooth(core)
    for v in core.data.vertices:v.co.z=max(v.co.z,.014-core.location.z)
    for side in (-1,1):
        wing=ell('duck_wing_left' if side<0 else 'duck_wing_right',(side*.112,.023,.109),(.024,.082,.047),M['wing'])
        wing.rotation_euler[0]=-.20
    ell('duck_beak_upper',(0,-.151,.191),(.053,.048,.021),M['orange'])
    ell('duck_beak_lower',(0,-.153,.176),(.047,.041,.013),M['orange'])
    curve('duck_beak_smile',[(-.041,-.180,.183),(-.025,-.194,.181),(0,-.198,.179),(.025,-.194,.181),(.041,-.180,.183)],.0018,M['mouth'])
    for side in (-1,1):
        ell('duck_eye_left' if side<0 else 'duck_eye_right',(side*.052,-.127,.227),(.014,.011,.018),M['ink'])
        ell('duck_glint',(side*.049,-.137,.234),(.004,.0025,.0045),M['white'],16,8)
    return {'authoring_uniform_scale':.92,'notes':['Single unified remeshed core with flat support; separate modeled bill, eyes and wings. Opaque toy.']}

def star():
    points=[]
    for i in range(10):
        a=math.pi/2+i*2*math.pi/10;r=.173 if i%2==0 else .087
        points.append(Vector((r*math.cos(a),r*math.sin(a))))
    outline=[]
    for i in range(10):
        p0,p1,p2,p3=[points[(i+k)%10] for k in (-1,0,1,2)]
        for j in range(8):
            t=j/8
            q=.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t)
            outline.append(q)
    N=len(outline);vs=[]
    rings=[(.001,-.051),(.43,-.048),(.80,-.035),(.98,-.015),(1.0,0),(.98,.015),(.80,.035),(.43,.048),(.001,.051)]
    for s,y in rings:vs.extend((p.x*s,y,p.y*s+.150) for p in outline)
    fs=[]
    for j in range(len(rings)-1):fs.extend((j*N+i,j*N+(i+1)%N,(j+1)*N+(i+1)%N,(j+1)*N+i) for i in range(N))
    fs+=[tuple(range(N-1,-1,-1)),tuple((len(rings)-1)*N+i for i in range(N))]
    mesh('star_body',vs,fs,M['yellow'])
    return {'notes':['Closed puffy star volume, front -Y; slight rounded Catmull-Rom outline.']}

def ear():
    vs=[];N=40
    profiles=[(0,.040,.023,0),(.025,.047,.028,.002),(.09,.058,.029,.006),(.17,.055,.026,.012),(.24,.036,.020,.017),(.285,.012,.010,.018),(.30,0,0,.018)]
    for z,rx,ry,cx in profiles:vs.extend((cx+rx*math.cos(i*2*math.pi/N),ry*math.sin(i*2*math.pi/N),z) for i in range(N))
    fs=[]
    for j in range(len(profiles)-1):fs.extend((j*N+i,j*N+(i+1)%N,(j+1)*N+(i+1)%N,(j+1)*N+i) for i in range(N))
    fs+=[tuple(range(N-1,-1,-1)),tuple((len(profiles)-1)*N+i for i in range(N))]
    o=mesh('ear_outer',vs,fs,M['pink'])
    bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001);bm.to_mesh(o.data);bm.free();recalc(o)
    # Inner patch follows the curved face; it is a small closed volume, no decal quad.
    inner=ell('ear_inner',( .010,-.026,.143),(.031,.007,.098),M['inner'])
    for v in inner.data.vertices:
        localz=v.co.z/.098
        v.co.y+=.006*abs(localz)**2
    foot=cyl('ear_attachment_base',(0,0,.008),.043,.016,M['pink'],.004);foot.scale.y=.65
    return {'attachment_axis':'+Z','notes':['One ear, origin at attachment base. Inner pink patch is modeled geometry.']}

def horn():
    cyl('horn_attachment_base',(0,0,.022),.066,.044,M['cream'],.010)
    N=48;steps=32;vs=[]
    for j in range(steps+1):
        t=j/steps;z=.036+.194*t;rad=.052*(1-t)**.85+.002;cx=.018*t*t
        for i in range(N):
            a=i*2*math.pi/N;r=rad*(1+.10*math.sin(a-6*math.pi*t))
            vs.append((cx+r*math.cos(a),r*math.sin(a),z))
    fs=[]
    for j in range(steps):fs.extend((j*N+i,j*N+(i+1)%N,(j+1)*N+(i+1)%N,(j+1)*N+i) for i in range(N))
    fs+=[tuple(range(N-1,-1,-1)),tuple(steps*N+i for i in range(N))]
    mesh('horn_spiral',vs,fs,M['purple'])
    pts=[]
    for i in range(181):
        t=i/180;z=.046+.176*t;r=.052*(1-t)**.85+.001;a=6*math.pi*t
        pts.append((.018*t*t+r*math.cos(a),r*math.sin(a),z))
    curve('horn_spiral_ridge',pts,.0035,M['ridge'])
    return {'attachment_axis':'+Z','notes':['One horn with integral helical contour and a fine modeled spiral ridge.']}

def capsule():
    o=lathe('capsule_body',[(0,.118),(.006,.145),(.018,.163),(.040,.170),(.080,.161),(.123,.137),(.160,.095),(.181,.043),(.185,0)],M['aqua'])
    for v in o.data.vertices:v.co.y*=.93;v.co.x+=.012*v.co.z/.185
    return {'variants':{'aqua':'capsule.glb','cherry':'capsule-cherry.glb'},'notes':['Identical geometry in both color variants. Modest PBR transmission; runtime appearance needs Chrome verification.']}

def tray():
    rounded_loft('tray_shell',[(0,.84,.94,.12),(.012,.87,.97,.135),(.12,.90,1.00,.15),(.15,.88,.98,.14),(.15,.79,.89,.105),(.12,.77,.87,.095),(.060,.75,.85,.095),(.050,.71,.81,.085)],M['lavender'])
    return {'inner_floor_z_B':.050,'inner_opening_xy_B':[.79,.89],'notes':['Single closed shell with real open top, inner walls and floor; repeatable tray.']}

def mat_prop():
    o=cyl('mat_body',(0,0,.0125),1,.025,M['mint'],.008);o.scale=(.775,.65,1)
    pts=[(.743*math.cos(i*2*math.pi/96),.618*math.sin(i*2*math.pi/96),.026) for i in range(97)]
    curve('mat_soft_edge',pts,.006,M['mintedge'])
    return {'working_surface_z_B':.025,'notes':['Oval flexible-looking mat; actual deformation is not modeled.']}

def basket():
    shell=rounded_loft('basket_shell',[(0,1.29,1.33,.14),(.025,1.33,1.37,.155),(.32,1.38,1.42,.175),(.35,1.38,1.42,.175),(.35,1.27,1.31,.12),(.32,1.27,1.31,.12),(.065,1.23,1.27,.10),(.055,1.19,1.23,.085)],M['peach'])
    cutters=[]
    for side in (-1,1):
        for pos in (-.48,-.24,0,.24,.48):
            for z in (.14,.25):
                c=cyl('temporary_hole',(pos,side*.69,z),.041,.22,M['peach'],0);c.rotation_euler[0]=math.pi/2;cutters.append(c)
                c=cyl('temporary_hole',(side*.67,pos,z),.041,.22,M['peach'],0);c.rotation_euler[1]=math.pi/2;cutters.append(c)
    cutter=join(cutters,'temporary_holes')
    mod=shell.modifiers.new('True basket perforations','BOOLEAN');mod.operation='DIFFERENCE';mod.solver='EXACT';mod.object=cutter;apply(shell,mod)
    bpy.data.objects.remove(cutter,do_unlink=True)
    bevel(shell,.004,2);smooth(shell)
    rounded_loft('basket_liner',[(.059,1.18,1.22,.085),(.074,1.24,1.28,.11),(.27,1.255,1.295,.12),(.292,1.245,1.285,.115),(.292,1.205,1.245,.095),(.26,1.202,1.242,.095),(.105,1.19,1.23,.09),(.095,1.15,1.19,.075)],M['liner'])
    return {'inner_opening_xy_B':[1.205,1.245],'inner_floor_z_B':.095,'rim_z_B':.35,'notes':['40 genuine through-holes (10 per side), rounded edges. Separate closed-shell cream liner; untextured cloth approximation.']}

def bell():
    cyl('bell_base_foot',(0,0,.012),.18,.024,M['coral'],.009)
    lathe('bell_base',[(.017,.167),(.025,.174),(.058,.164),(.068,.153),(.068,0)],M['cream'])
    lathe('bell_shell',[(.067,.145),(.09,.141),(.125,.123),(.156,.088),(.177,.042),(.18,.018),(.174,.014),(.168,.035),(.151,.080),(.121,.115),(.086,.133),(.067,.137),(.067,.145)],M['gold'])
    stem=cyl('button_stem',(0,0,.193),.012,.048,M['gold'],.003)
    foot=cyl('button_peach_edge',(0,0,.221),.072,.023,M['coral'],.010)
    top=ell('button_cream_top',(0,0,.234),(.071,.071,.023),M['cream'])
    button=join([stem,foot,top],'bell_button')
    return {'movable_nodes':{'bell_button':{'axis_Blender':'-Z','axis_glTF':'-Y','suggested_max_travel_B':.014,'pivot_B':[0,0,.176]}},'notes':['Open underside brass shell and separate pressable button assembly; no animation or sound baked.']}

def counter():
    for x in (-1.34,1.34):
        o=rounded_loft('counter_support',[(0,.44,1.82,.21),(.04,.48,1.86,.23),(1.075,.48,1.86,.23)],M['cream']);o.location.x=x
        o=rounded_loft('counter_foot_trim',[(.015,.46,1.84,.22),(.045,.49,1.87,.235)],M['cream']);o.location.x=x
    box('counter_front_apron',(0,-.87,.68),(2.76,.16,.78),M['peach'],.12)
    rounded_loft('counter_top_base',[(1.06,3.68,2.33,.45),(1.09,3.80,2.45,.51),(1.18,3.80,2.45,.51)],M['coral'])
    rounded_loft('counter_top_cream',[(1.175,3.60,2.25,.41),(1.185,3.60,2.25,.41)],M['cream'])
    # A thin raised colored border, with no roof across the working inset.
    ring=rounded_loft('counter_rim',[(1.18,3.80,2.45,.51),(1.205,3.78,2.43,.50),(1.205,3.61,2.26,.415),(1.18,3.61,2.26,.415)],M['coral'],closed_cross=True)
    return {'working_surface_z_B':1.185,'notes':['Wide rounded counter per sheet03, not the stopped long scene blockout. Separate cream inset and peach border, two supports, front apron.']}

BUILDERS={'duck':duck,'star':star,'ear':ear,'horn':horn,'capsule':capsule,'tray':tray,'mat':mat_prop,'basket':basket,'bell':bell,'counter':counter}

def geometry_metrics(objects):
    allpts=[];triangles=0;vertices=0;bad=0;parts=[]
    for o in objects:
        pts=[o.matrix_world@v.co for v in o.data.vertices];allpts+=pts
        o.data.calc_loop_triangles();triangles+=len(o.data.loop_triangles);vertices+=len(o.data.vertices)
        bm=bmesh.new();bm.from_mesh(o.data);nonman=sum(not e.is_manifold for e in bm.edges);bad+=nonman;bm.free()
        parts.append({'node':o.name,'materials':[m.name for m in o.data.materials],'vertices':len(o.data.vertices),'triangles':len(o.data.loop_triangles),'nonmanifold_edges':nonman})
    lo=[min(p[i] for p in allpts) for i in range(3)];hi=[max(p[i] for p in allpts) for i in range(3)]
    return {'bounds_B':{'min':[round(v,6) for v in lo],'max':[round(v,6) for v in hi]},'dimensions_B':[round(hi[i]-lo[i],6) for i in range(3)],'vertices':vertices,'triangles':triangles,'nonmanifold_edges':bad,'parts':parts}

def stage(name,dims):
    scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=16;scene.cycles.use_denoising=True;scene.cycles.device='CPU'
    scene.render.threads_mode='FIXED';scene.render.threads=4
    scene.render.resolution_x=560;scene.render.resolution_y=560;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG'
    scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs['Color'].default_value=(.55,.58,.62,1);scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.35
    scene.view_settings.view_transform='AgX';scene.view_settings.look='AgX - Medium High Contrast'
    s=max(dims);target=Vector((0,0,dims[2]*.46))
    def move_to_studio(o):
        for c in list(o.users_collection):c.objects.unlink(o)
        studio.objects.link(o)
    bpy.ops.mesh.primitive_plane_add(size=s*200,location=(0,0,-.0007));floor=bpy.context.object;floor.name='STUDIO_ground';floor.data.materials.append(M['studio']);move_to_studio(floor)
    for label,pos,power,size in [('key',(-2.2,-3.1,4.6),380,3.0),('rim',(2.8,2,3.4),240,2.5),('fill',(2,-3,1.8),85,3.0)]:
        d=bpy.data.lights.new('STUDIO_'+label,'AREA');d.energy=power*s*s;d.shape='DISK';d.size=size*s;o=bpy.data.objects.new(d.name,d);studio.objects.link(o);o.location=Vector(pos)*s;o.rotation_euler=(target-o.location).to_track_quat('-Z','Y').to_euler()
    cams=[]
    for label,pos in [('3q',(2.4,-3.5,2.4)),('back',(-2.8,3.2,2.3))]:
        d=bpy.data.cameras.new('STUDIO_'+label);d.type='ORTHO';d.ortho_scale=s*1.52;o=bpy.data.objects.new(d.name,d);studio.objects.link(o);o.location=Vector(pos)*s+target;o.rotation_euler=(target-o.location).to_track_quat('-Z','Y').to_euler();cams.append(o)
    scene.camera=cams[0];return cams

def render(name,cam,suffix):
    scene=bpy.context.scene;scene.camera=cam;scene.render.filepath=str(QA/(name+'-'+suffix+'.png'))
    print('PROP_RENDER',name,suffix,flush=True);bpy.ops.render.render(write_still=True)

def export(name,objects,root):
    bpy.ops.object.select_all(action='DESELECT');root.select_set(True)
    for o in objects:o.select_set(True)
    path=OUT/(name+'.glb')
    bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',use_selection=True,export_apply=True,export_yup=True,export_extras=True,export_cameras=False,export_lights=False,export_animations=False)
    return path

def fileinfo(path):
    b=path.read_bytes();return {'path':str(path.relative_to(ROOT)),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()}

for name,builder in BUILDERS.items():
    if ONLY and name!=ONLY:continue
    if '--remaining' in args and name in manifest['assets']:continue
    print('PROP_START',name,flush=True);init();details=builder();bpy.context.view_layer.update()
    objects=[o for o in prop.objects if o.type=='MESH']
    # Apply final transforms, then put the support / attachment origin on the base.
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
    authoring_scale=details.get('authoring_uniform_scale',1.0)
    for o in objects:
        for v in o.data.vertices:v.co*=authoring_scale
    minz=min(v.co.z for o in objects for v in o.data.vertices)
    for o in objects:
        for v in o.data.vertices:v.co.z-=minz
        recalc(o)
    root=bpy.data.objects.new(name,None);root.empty_display_type='PLAIN_AXES';root.empty_display_size=.08;root['unit_B']=1.0;root['front']='-Y';root['asset_id']=name;prop.objects.link(root)
    for o in objects:
        o.parent=root;o['asset_part']=o.name
    if name=='bell':
        o=bpy.data.objects['bell_button'];pivot=Vector((0,0,.176))
        for v in o.data.vertices:v.co-=pivot
        o.location=pivot
    bpy.context.view_layer.update();metrics=geometry_metrics(objects)
    if metrics['nonmanifold_edges']:
        print('NONMANIFOLD_PARTS',json.dumps([p for p in metrics['parts'] if p['nonmanifold_edges']]),flush=True)
    assert metrics['nonmanifold_edges']==0,(name,metrics['nonmanifold_edges'])
    glb=export(name,objects,root)
    if name=='capsule':
        o=bpy.data.objects['capsule_body'];o.data.materials[0]=M['cherry'];variant=export('capsule-cherry',objects,root);o.data.materials[0]=M['aqua'];details['variant_files']={'cherry':fileinfo(variant)}
    cams=stage(name,metrics['dimensions_B'])
    render(name,cams[0],'3q');render(name,cams[1],'back')
    if name=='basket':
        bpy.data.objects['basket_liner'].hide_render=True;render(name,cams[0],'empty');bpy.data.objects['basket_liner'].hide_render=False
    if name=='capsule':
        bpy.data.objects['capsule_body'].data.materials[0]=M['cherry'];render(name,cams[0],'cherry');bpy.data.objects['capsule_body'].data.materials[0]=M['aqua']
    bpy.context.scene.camera=cams[0]
    bpy.ops.object.select_all(action='DESELECT');root.select_set(True);bpy.context.view_layer.objects.active=root
    blend=SRC/(name+'.blend')
    if blend.exists():blend.unlink()
    bpy.ops.wm.save_as_mainfile(filepath=str(blend))
    # Round-trip GLB in Blender memory. Source is already saved and is not overwritten.
    before=set(bpy.data.objects);bpy.ops.import_scene.gltf(filepath=str(glb));imported=[o for o in bpy.data.objects if o not in before and o.type=='MESH']
    imported_metrics=geometry_metrics(imported)
    assert max(abs(a-b) for a,b in zip(metrics['dimensions_B'],imported_metrics['dimensions_B']))<.00001
    entry={'id':name,'root_node':name,'pivot_B':[0,0,0],'pivot_meaning':'attachment base' if name in ('ear','horn') else 'support/base centre','front_Blender':'-Y','up_Blender':'+Z',**metrics,**details,'source':fileinfo(blend),'glb':fileinfo(glb),'previews':[str((QA/(name+'-'+a+'.png')).relative_to(ROOT)) for a in ('3q','back')],'validation':{'GLB_Blender_roundtrip':True,'dimensions_preserved':True,'closed_mesh_parts':True,'no_studio_cameras_lights_in_GLB':True}}
    manifest['assets'][name]=entry;manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
    print('PROP_DONE',name,json.dumps({'dimensions_B':metrics['dimensions_B'],'triangles':metrics['triangles'],'glb_bytes':glb.stat().st_size,'preview':entry['previews'][0]}),flush=True)
print('PROPS_COMPLETE',','.join(manifest['assets']),flush=True)
