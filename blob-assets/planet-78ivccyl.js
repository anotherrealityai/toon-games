(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,ee=1027,D=1028,te=1029,O=1030,ne=1031,re=1033,k=33776,ie=33777,ae=33778,A=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,j=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,Ie=36286,M=2300,Le=2301,Re=2302,ze=2303,N=2400,Be=2401,P=2402,Ve=2500,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,F(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function L(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*lt}function Tt(e){return e*ut}function Et(e){return(e&e-1)==0&&e!==0}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var R={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:L,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(L(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this.z=L(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this.z=L(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new B,Pt=new Mt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new V,It=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Qe(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}else return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new B,Yt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=dt(),this.name=``,this.source=new Gt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this.z=L(this.z,e.z,t.z),this.w=L(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this.z=L(this.z,e,t),this.w=L(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},H=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],ee=r[9],D=r[13],te=r[2],O=r[6],ne=r[10],re=r[14],k=r[3],ie=r[7],ae=r[11],A=r[15];return i[0]=a*x+o*T+s*te+c*k,i[4]=a*S+o*E+s*O+c*ie,i[8]=a*C+o*ee+s*ne+c*ae,i[12]=a*w+o*D+s*re+c*A,i[1]=l*x+u*T+d*te+f*k,i[5]=l*S+u*E+d*O+f*ie,i[9]=l*C+u*ee+d*ne+f*ae,i[13]=l*w+u*D+d*re+f*A,i[2]=p*x+m*T+h*te+g*k,i[6]=p*S+m*E+h*O+g*ie,i[10]=p*C+m*ee+h*ne+g*ae,i[14]=p*w+m*D+h*re+g*A,i[3]=_*x+v*T+y*te+b*k,i[7]=_*S+v*E+y*O+b*ie,i[11]=_*C+v*ee+y*ne+b*ae,i[15]=_*w+v*D+y*re+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,ee=u*g-f*m,D=d*g-f*h,te=_*D-v*ee+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*D-s*ee+c*E)*O,e[1]=(r*ee-n*D-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*D-c*w)*O,e[5]=(t*D-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*ee-o*T+c*C)*O,e[9]=(n*T-t*ee-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new B,nn=new H,rn=new B(0,0,0),an=new B(1,1,1),on=new B,sn=new B,cn=new B,ln=new H,un=new Mt,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(L(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-L(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(L(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-L(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(L(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-L(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},pn=0,mn=new B,hn=new Mt,gn=new H,_n=new B,vn=new B,yn=new B,bn=new Mt,xn=new B(1,0,0),Sn=new B(0,1,0),Cn=new B(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new dn,r=new Mt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new V}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};On.DEFAULT_UP=new B(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=ft(e,1),t=L(t,0,1),n=L(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=jn[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return zt.workingToColorSpace(Fn.copy(this),e),Math.round(L(Fn.r*255,0,255))*65536+Math.round(L(Fn.g*255,0,255))*256+Math.round(L(Fn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ue){zt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ht(Mn.h,Nn.h,t),r=ht(Mn.s,Nn.s,t),i=ht(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new W;W.NAMES=jn;var In=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new B,Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new Xt,Jn=new Xt,Yn=new Xt,Xn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ln.subVectors(r,t),Rn.subVectors(n,t),zn.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(Rn),s=Ln.dot(zn),c=Rn.dot(Rn),l=Rn.dot(zn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Bn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Bn.x),s.addScaledVector(a,Bn.y),s.addScaledVector(o,Bn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qn.setScalar(0),Jn.setScalar(0),Yn.setScalar(0),qn.fromBufferAttribute(e,t),Jn.fromBufferAttribute(e,n),Yn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qn,i.x),a.addScaledVector(Jn,i.y),a.addScaledVector(Yn,i.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Rn.subVectors(e,t),Ln.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vn.subVectors(r,n),Hn.subVectors(i,n),Wn.subVectors(e,n);let s=Vn.dot(Wn),c=Hn.dot(Wn);if(s<=0&&c<=0)return t.copy(n);Gn.subVectors(e,r);let l=Vn.dot(Gn),u=Hn.dot(Gn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Vn,a);Kn.subVectors(e,i);let f=Vn.dot(Kn),p=Hn.dot(Kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$n):$n.fromBufferAttribute(r,t),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),cr.subVectors(this.max,sr),tr.subVectors(e.a,sr),nr.subVectors(e.b,sr),rr.subVectors(e.c,sr),ir.subVectors(nr,tr),ar.subVectors(rr,nr),or.subVectors(tr,rr);let t=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-or.z,or.y,ir.z,0,-ir.x,ar.z,0,-ar.x,or.z,0,-or.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-or.y,or.x,0];return!dr(t,tr,nr,rr,cr)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,tr,nr,rr,cr))?!1:(lr.crossVectors(ir,ar),t=[lr.x,lr.y,lr.z],dr(t,tr,nr,rr,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new B,new B,new B,new B,new B,new B,new B,new B],$n=new B,er=new Zn,tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B;function dr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ur.fromArray(e,a);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),s=t.dot(ur),c=n.dot(ur),l=r.dot(ur);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var fr=new B,pr=new z,mr=0,hr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix4(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyNormalMatrix(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.transformDirection(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},gr=class extends hr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_r=class extends hr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends hr{constructor(e,t,n){super(new Float32Array(e),t,n)}},vr=new Zn,yr=new B,br=new B,xr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(br)),this.expandByPoint(yr.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sr=0,Cr=new H,wr=new On,Tr=new B,Er=new Zn,Dr=new Zn,Or=new B,kr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xe(e)?_r:gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(this.boundingBox.min,Er.min),this.boundingBox.expandByPoint(Or),Or.addVectors(this.boundingBox.max,Er.max),this.boundingBox.expandByPoint(Or)):(this.boundingBox.expandByPoint(Er.min),this.boundingBox.expandByPoint(Er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Er.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(Er.min,Dr.min),Er.expandByPoint(Or),Or.addVectors(Er.max,Dr.max),Er.expandByPoint(Or)):(Er.expandByPoint(Dr.min),Er.expandByPoint(Dr.max))}Er.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Or.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Or));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Or.fromBufferAttribute(a,t),o&&(Tr.fromBufferAttribute(e,t),Or.add(Tr)),r=Math.max(r,n.distanceToSquared(Or))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new hr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new hr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Or.fromBufferAttribute(e,t),Or.normalize(),e.setXYZ(t,Or.x,Or.y,Or.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new hr(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Je,this.updateRanges=[],this.version=0,this.uuid=dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jr=new B,Mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix4(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyNormalMatrix(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.transformDirection(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=At(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=At(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=At(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=At(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new hr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nr=0,Pr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fr=class extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,Lr=new B,Rr=new B,zr=new B,Br=new z,Vr=new z,Hr=new H,Ur=new B,Wr=new B,Gr=new B,Kr=new z,qr=new z,Jr=new z,Yr=class extends On{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type=`Sprite`,Ir===void 0){Ir=new kr;let e=new Ar(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute(`position`,new Mr(e,3,0,!1)),Ir.setAttribute(`uv`,new Mr(e,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new z(.5,.5),this.count=1}raycast(e,t){e.camera===null&&I(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Rr.setFromMatrixScale(this.matrixWorld),Hr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-zr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Xr(Ur.set(-.5,-.5,0),zr,a,Rr,r,i),Xr(Wr.set(.5,-.5,0),zr,a,Rr,r,i),Xr(Gr.set(.5,.5,0),zr,a,Rr,r,i),Kr.set(0,0),qr.set(1,0),Jr.set(1,1);let o=e.ray.intersectTriangle(Ur,Wr,Gr,!1,Lr);if(o===null&&(Xr(Wr.set(-.5,.5,0),zr,a,Rr,r,i),qr.set(0,1),o=e.ray.intersectTriangle(Ur,Gr,Wr,!1,Lr),o===null))return;let s=e.ray.origin.distanceTo(Lr);s<e.near||s>e.far||t.push({distance:s,point:Lr.clone(),uv:Xn.getInterpolation(Lr,Ur,Wr,Gr,Kr,qr,Jr,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xr(e,t,n,r,i,a){Br.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Vr.copy(Br):(Vr.x=a*Br.x-i*Br.y,Vr.y=i*Br.x+a*Br.y),e.copy(t),e.x+=Vr.x,e.y+=Vr.y,e.applyMatrix4(Hr)}var Zr=new B,Qr=new B,$r=new B,ei=new B,ti=new B,ni=new B,ri=new B,ii=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Qr);let i=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=ei.dot(this.direction),s=-ei.dot($r),c=ei.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qr).addScaledVector($r,d),f}intersectSphere(e,t){Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),r=Zr.dot(Zr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,r,i){ti.subVectors(t,e),ni.subVectors(n,e),ri.crossVectors(ti,ni);let a=this.direction.dot(ri),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);let s=o*this.direction.dot(ni.crossVectors(ei,ni));if(s<0)return null;let c=o*this.direction.dot(ti.cross(ei));if(c<0||s+c>a)return null;let l=-o*ei.dot(ri);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oi=new H,si=new ii,ci=new xr,li=new B,ui=new B,di=new B,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,K=class extends On{constructor(e=new kr,t=new ai){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){mi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(pi.fromBufferAttribute(s,e),a?mi.addScaledVector(pi,r):mi.addScaledVector(pi.sub(t),r))}t.add(mi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(i),si.copy(e.ray).recast(e.near),!(ci.containsPoint(si.origin)===!1&&(si.intersectSphere(ci,li)===null||si.origin.distanceToSquared(li)>(e.far-e.near)**2))&&(oi.copy(i).invert(),si.copy(e.ray).applyMatrix4(oi),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=vi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=vi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=vi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=vi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function _i(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;gi.copy(s),gi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(gi);return l<n.near||l>n.far?null:{distance:l,point:gi.clone(),object:e}}function vi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ui),e.getVertexPosition(c,di),e.getVertexPosition(l,fi);let u=_i(e,t,n,r,ui,di,fi,hi);if(u){let e=new B;Xn.getBarycoord(hi,ui,di,fi,e),i&&(u.uv=Xn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Xn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Xn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Xn.getNormal(ui,di,fi,t.normal),u.face=t,u.barycoord=e}return u}var yi=new Xt,bi=new Xt,xi=new Xt,Si=new Xt,Ci=new H,wi=new B,Ti=new xr,Ei=new H,Di=new ii,Oi=class extends K{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new H,this.bindMatrixInverse=new H,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,wi),this.boundingBox.expandByPoint(wi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,wi),this.boundingSphere.expandByPoint(wi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ti.copy(this.boundingSphere),Ti.applyMatrix4(r),e.ray.intersectsSphere(Ti)!==!1&&(Ei.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Ei),!(this.boundingBox!==null&&Di.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():F(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;bi.fromBufferAttribute(r.attributes.skinIndex,e),xi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(yi.copy(t),t.set(0,0,0,0)):(yi.set(...t,1),t.set(0,0,0)),yi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=xi.getComponent(e);if(r!==0){let i=bi.getComponent(e);Ci.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Si.copy(yi).applyMatrix4(Ci),r)}}return t.isVector4&&(t.w=yi.w),t.applyMatrix4(this.bindMatrixInverse)}},ki=class extends On{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ai=class extends Yt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ji=new H,Mi=new H,Ni=class e{constructor(e=[],t=[]){this.uuid=dt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){F(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new H)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new H;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Mi;ji.multiplyMatrices(i,t[r]),ji.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ai(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(F(`Skeleton: No bone found with UUID:`,r),i=new ki),this.bones.push(i),this.boneInverses.push(new H().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Pi=class extends hr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new H,Ii=new H,Li=[],Ri=new Zn,zi=new H,Bi=new K,Vi=new xr,Hi=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ri.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Vi.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Fi),Ii.multiplyMatrices(n,Fi),Bi.matrixWorld=Ii,Bi.raycast(e,Li);for(let e=0,n=Li.length;e<n;e++){let n=Li[e];n.instanceId=i,n.object=this,t.push(n)}Li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(r*this.count),r,this.count,D,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new B,Wi=new B,Gi=new V,Ki=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ui.subVectors(n,t).cross(Wi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ui),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gi.getNormalMatrix(e),r=this.coplanarPoint(Ui).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new xr,Ji=new z(.5,.5),Yi=new B,Xi=class{constructor(e=new Ki,t=new Ki,n=new Ki,r=new Ki,i=new Ki,a=new Ki){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476+Ji.distanceTo(e.center),qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Yi.x=r.normal.x>0?e.max.x:e.min.x,Yi.y=r.normal.y>0?e.max.y:e.min.y,Yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zi=class extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qi=new B,$i=new B,ea=new H,ta=new ii,na=new xr,ra=new B,ia=new B,aa=class extends On{constructor(e=new kr,t=new Zi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Qi.fromBufferAttribute(t,e-1),$i.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Qi.distanceTo($i);e.setAttribute(`lineDistance`,new G(n,1))}else F(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),na.radius+=i,e.ray.intersectsSphere(na)===!1)return;ea.copy(r).invert(),ta.copy(e.ray).applyMatrix4(ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=oa(this,e,ta,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=oa(this,e,ta,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=oa(this,e,ta,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=oa(this,e,ta,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function oa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Qi.fromBufferAttribute(s,i),$i.fromBufferAttribute(s,a),n.distanceSqToSegment(Qi,$i,ra,ia)>r)return;ra.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ra);if(!(c<t.near||c>t.far))return{distance:c,point:ia.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var sa=new B,ca=new B,la=class extends aa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)sa.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+sa.distanceTo(ca);e.setAttribute(`lineDistance`,new G(n,1))}else F(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ua=class extends aa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},da=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fa=new H,pa=new ii,ma=new xr,ha=new B,ga=class extends On{constructor(e=new kr,t=new da){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=i,e.ray.intersectsSphere(ma)===!1)return;fa.copy(r).invert(),pa.copy(e.ray).applyMatrix4(fa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ha.fromBufferAttribute(l,n),_a(ha,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ha.fromBufferAttribute(l,a),_a(ha,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _a(e,t,n,r,i,a,o){let s=pa.distanceSqToPoint(e);if(s<n){let n=new B;pa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var va=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ya=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ba=class extends Yt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xa=class extends ba{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ca=class e extends kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,ee=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)ee[e]=(s*v-b)*r,ee[t]=o*i,ee[n]=S,c.push(ee.x,ee.y,ee.z),ee[e]=0,ee[t]=0,ee[n]=m>0?1:-1,l.push(ee.x,ee.y,ee.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wa=class e extends kr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new G(o,3)),this.setAttribute(`normal`,new G(s,3)),this.setAttribute(`uv`,new G(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ta=class e extends kr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ea=class e extends kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Da=class e extends Ea{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oa=class e extends kr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ka=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){F(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new H;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(L(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(L(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Aa=class extends ka{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends Aa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ma(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Na=new B,Pa=new B,Fa=new Ma,Ia=new Ma,La=new Ma,Ra=class extends ka{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Pa.subVectors(r[0],r[1]).add(r[0]),c=Pa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Na.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Na),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Fa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ia.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),La.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Fa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ia.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),La.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Fa.calc(s),Ia.calc(s),La.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function za(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ba(e,t){let n=1-e;return n*n*t}function Va(e,t){return 2*(1-e)*e*t}function Ha(e,t){return e*e*t}function Ua(e,t,n,r){return Ba(e,t)+Va(e,n)+Ha(e,r)}function Wa(e,t){let n=1-e;return n*n*n*t}function Ga(e,t){let n=1-e;return 3*n*n*e*t}function Ka(e,t){return 3*(1-e)*e*e*t}function qa(e,t){return e*e*e*t}function Ja(e,t,n,r,i){return Wa(e,t)+Ga(e,n)+Ka(e,r)+qa(e,i)}var Ya=class extends ka{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ja(e,r.x,i.x,a.x,o.x),Ja(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends ka{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ja(e,r.x,i.x,a.x,o.x),Ja(e,r.y,i.y,a.y,o.y),Ja(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends ka{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends ka{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends ka{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ua(e,r.x,i.x,a.x),Ua(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends ka{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ua(e,r.x,i.x,a.x),Ua(e,r.y,i.y,a.y),Ua(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Ra,CubicBezierCurve:Ya,CubicBezierCurve3:Xa,EllipseCurve:Aa,LineCurve:Za,LineCurve3:Qa,QuadraticBezierCurve:$a,QuadraticBezierCurve3:eo,SplineCurve:class extends ka{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(za(o,s.x,c.x,l.x,u.x),za(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}}}),no=class e extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ro=class e extends Oa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},io=class e extends kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ao=class e extends kr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new G(s,3)),this.setAttribute(`normal`,new G(c,3)),this.setAttribute(`uv`,new G(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},q=class e extends kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends kr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},so=class e extends kr{constructor(e=new eo(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new to[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function co(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(uo(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(uo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function lo(e){let t={};for(let n=0;n<e.length;n++){let r=co(e[n]);for(let e in r)t[e]=r[e]}return t}function uo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function po(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var mo={clone:co,merge:lo},ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_o=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vo=class extends _o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yo=class extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bo=class extends yo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return L(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},xo=class extends Pr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new W(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},So=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function To(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Eo(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Do(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var Oo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ko=class extends Oo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:N,endingEnd:N}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case P:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case P:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ao=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},jo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends Oo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},No=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case M:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case ze:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return M;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return ze}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};No.prototype.ValueTypeName=``,No.prototype.TimeBufferType=Float32Array,No.prototype.ValueBufferType=Float32Array,No.prototype.DefaultInterpolation=Le;var Po=class extends No{constructor(e,t,n){super(e,t,n)}};Po.prototype.ValueTypeName=`bool`,Po.prototype.ValueBufferType=Array,Po.prototype.DefaultInterpolation=M,Po.prototype.InterpolantFactoryMethodLinear=void 0,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName=`color`;var Io=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`number`;var Lo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ro=class extends No{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};Ro.prototype.ValueTypeName=`quaternion`,Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends No{constructor(e,t,n){super(e,t,n)}};zo.prototype.ValueTypeName=`string`,zo.prototype.ValueBufferType=Array,zo.prototype.DefaultInterpolation=M,zo.prototype.InterpolantFactoryMethodLinear=void 0,zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Bo.prototype.ValueTypeName=`vector`;var Vo=class{constructor(e=``,t=-1,n=[],r=Ve){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Uo(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(No.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=To(o);o=Eo(o,1,c),s=Eo(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Io(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ho(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Io;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Bo;case`color`:return Fo;case`quaternion`:return Ro;case`bool`:case`boolean`:return Po;case`string`:return zo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Uo(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Ho(e.type);if(e.times===void 0){let t=[],n=[];Do(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Wo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Go(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Go(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Go(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ko=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},qo=class{constructor(e){this.manager=e===void 0?Ko:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Jo={},Yo=class extends Error{constructor(e,t){super(e),this.response=t}},Xo=class extends qo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Wo.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Jo[e]!==void 0){Jo[e].push({onLoad:t,onProgress:n,onError:r});return}Jo[e]=[],Jo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&F(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Jo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new Yo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Wo.add(`file:${e}`,t);let n=Jo[e];delete Jo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Jo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Jo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zo=new WeakMap,Qo=class extends qo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Wo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Zo.get(a);e===void 0&&(e=[],Zo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Qe(`img`);function s(){l(),t&&t(this);let n=Zo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Zo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Wo.remove(`image:${e}`);let n=Zo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Zo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},$o=class extends qo{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new Qo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},es=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ts=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ns=new H,rs=new B,is=new B,as=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rs.setFromMatrixPosition(e.matrixWorld),t.position.copy(rs),is.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(is),t.updateMatrixWorld(),ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},os=new B,ss=new Mt,cs=new B,ls=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new B,ds=new z,fs=new z,ps=class extends ls{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,ds,fs),t.subVectors(fs,ds)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=class extends as{constructor(){super(new ps(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ut*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},hs=class extends es{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ms}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gs=class extends as{constructor(){super(new ps(90,1,.5,500)),this.isPointLightShadow=!0}},_s=class extends es{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new gs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends ls{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ys=class extends as{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new ys}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xs=class extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Ss=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Cs=new WeakMap,ws=class extends qo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&F(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&F(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Wo.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Cs.has(a)===!0?(r&&r(Cs.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){Wo.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),Cs.set(s,t),Wo.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Wo.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ts=-90,Es=1,Ds=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ps(Ts,Es,e,t);r.layers=this.layers,this.add(r);let i=new ps(Ts,Es,e,t);i.layers=this.layers,this.add(i);let a=new ps(Ts,Es,e,t);a.layers=this.layers,this.add(a);let o=new ps(Ts,Es,e,t);o.layers=this.layers,this.add(o);let s=new ps(Ts,Es,e,t);s.layers=this.layers,this.add(s);let c=new ps(Ts,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Os=class extends ps{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ks=`\\[\\]\\.:\\/`,As=RegExp(`[\\[\\]\\.:\\/]`,`g`),js=`[^\\[\\]\\.:\\/]`,Ms=`[^`+ks.replace(`\\.`,``)+`]`,Ns=`((?:WC+[\\/:])*)`.replace(`WC`,js),Ps=`(WCOD+)?`.replace(`WCOD`,Ms),Fs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,js),Is=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,js),Ls=RegExp(`^`+Ns+Ps+Fs+Is+`$`),Rs=[`material`,`materials`,`bones`,`map`],zs=class{constructor(e,t,n){let r=n||Bs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(As,``)}static parseTrackName(e){let t=Ls.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Rs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bs.Composite=zs,Bs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bs.prototype.GetterByBindingType=[Bs.prototype._getValue_direct,Bs.prototype._getValue_array,Bs.prototype._getValue_arrayElement,Bs.prototype._getValue_toArray],Bs.prototype.SetterByBindingTypeAndVersioning=[[Bs.prototype._setValue_direct,Bs.prototype._setValue_direct_setNeedsUpdate,Bs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bs.prototype._setValue_array,Bs.prototype._setValue_array_setNeedsUpdate,Bs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bs.prototype._setValue_arrayElement,Bs.prototype._setValue_arrayElement_setNeedsUpdate,Bs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bs.prototype._setValue_fromArray,Bs.prototype._setValue_fromArray_setNeedsUpdate,Bs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vs=new H,Hs=class{constructor(e,t,n=0,r=1/0){this.ray=new ii(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Vs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vs),this}intersectObject(e,t=!0,n=[]){return Ws(e,this,n,t),n.sort(Us),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ws(e[r],this,n,t);return n.sort(Us),n}};function Us(e,t){return e.distance-t.distance}function Ws(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ws(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Gs(e,t,n,r){let i=Ks(r);switch(n){case C:return e*t;case D:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case k:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case j:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ks(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function qs(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Ys={basic:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:lo([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:lo([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new W(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:lo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:lo([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:lo([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:lo([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:lo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:lo([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:lo([Y.common,Y.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:lo([Y.lights,Y.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Ys.physical={uniforms:lo([Ys.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Xs={r:0,b:0,g:0},Zs=new H,Qs=new V;Qs.set(-1,0,0,0,1,0,0,0,1);function $s(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new Ca(1,1,1),new _o({name:`BackgroundCubeMaterial`,uniforms:co(Ys.backgroundCube.uniforms),vertexShader:Ys.backgroundCube.vertexShader,fragmentShader:Ys.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qs),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new io(2,2),new _o({name:`BackgroundMaterial`,uniforms:co(Ys.background.uniforms),vertexShader:Ys.background.vertexShader,fragmentShader:Ys.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xs,po(e)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ec(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function tc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function nc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function rc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ki,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ic=4,ac=[.125,.215,.35,.446,.526,.582],oc=20,sc=256,cc=new vs,lc=new W,uc=null,dc=0,fc=0,pc=!1,mc=new B,hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mc}=i;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:We,depthBuffer:!1},r=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gc(r)),this._blurMaterial=bc(r,e,t),this._ggxMaterial=yc(r,e,t)}return r}_compileMaterial(e){let t=new K(new kr,e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,r,i){let a=new ps(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Ca,new ai({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;vc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;vc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ic?n-d+ic:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,vc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,cc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,vc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,cc)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&I(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*oc-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):oc;m>oc&&F(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oc}`);let h=[],g=0;for(let e=0;e<oc;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];vc(t,3*v*(r>_-ic?r-_+ic:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,cc)}};function gc(e){let t=[],n=[],r=[],i=e,a=e-ic+1+ac.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ic?s=ac[o-e+ic-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new kr;h.setAttribute(`position`,new hr(f,3)),h.setAttribute(`uv`,new hr(p,2)),h.setAttribute(`faceIndex`,new hr(m,1)),r.push(new K(h,null)),i>ic&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function _c(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function vc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function yc(e,t,n){return new _o({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:sc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(e,t,n){let r=new Float32Array(oc),i=new B(0,1,0);return new _o({name:`SphericalGaussianBlur`,defines:{n:oc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return new _o({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return new _o({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new va(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ca(5,5,5),i=new _o({name:`CubemapFromEquirect`,uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Ds(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new wc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ec(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Dc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?_r:gr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Oc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function kc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ac(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new $t(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new z(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function jc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Mc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Nc(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ba(t,n):void 0}),s=new Qt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new kr;c.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new K(c,l),d=new vs(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},zt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Mc[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Pc=new Yt,Fc=new ba(1,1),Ic=new $t,Lc=new en,Rc=new va,zc=[],Bc=[],Vc=new Float32Array(16),Hc=new Float32Array(9),Uc=new Float32Array(4);function Wc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zc[i];if(a===void 0&&(a=new Float32Array(i),zc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Kc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qc(e,t){let n=Bc[t];n===void 0&&(n=new Int32Array(t),Bc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2fv(this.addr,t),Kc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gc(n,t))return;e.uniform3fv(this.addr,t),Kc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4fv(this.addr,t),Kc(n,t)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Uc.set(r),e.uniformMatrix2fv(this.addr,!1,Uc),Kc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Hc.set(r),e.uniformMatrix3fv(this.addr,!1,Hc),Kc(n,r)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Vc.set(r),e.uniformMatrix4fv(this.addr,!1,Vc),Kc(n,r)}}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2iv(this.addr,t),Kc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3iv(this.addr,t),Kc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4iv(this.addr,t),Kc(n,t)}}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2uiv(this.addr,t),Kc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3uiv(this.addr,t),Kc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4uiv(this.addr,t),Kc(n,t)}}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Fc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Fc):a=Pc,n.setTexture2D(t||a,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Lc,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Rc,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ic,i)}function pl(e){switch(e){case 5126:return Jc;case 35664:return Yc;case 35665:return Xc;case 35666:return Zc;case 35674:return Qc;case 35675:return $c;case 35676:return el;case 5124:case 35670:return tl;case 35667:case 35671:return nl;case 35668:case 35672:return rl;case 35669:case 35673:return il;case 5125:return al;case 36294:return ol;case 36295:return sl;case 36296:return cl;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return ul;case 35680:case 36300:case 36308:case 36293:return dl;case 36289:case 36303:case 36311:case 36292:return fl}}function ml(e,t){e.uniform1fv(this.addr,t)}function hl(e,t){let n=Wc(t,this.size,2);e.uniform2fv(this.addr,n)}function gl(e,t){let n=Wc(t,this.size,3);e.uniform3fv(this.addr,n)}function _l(e,t){let n=Wc(t,this.size,4);e.uniform4fv(this.addr,n)}function vl(e,t){let n=Wc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yl(e,t){let n=Wc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bl(e,t){let n=Wc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xl(e,t){e.uniform1iv(this.addr,t)}function Sl(e,t){e.uniform2iv(this.addr,t)}function Cl(e,t){e.uniform3iv(this.addr,t)}function wl(e,t){e.uniform4iv(this.addr,t)}function Tl(e,t){e.uniform1uiv(this.addr,t)}function El(e,t){e.uniform2uiv(this.addr,t)}function Dl(e,t){e.uniform3uiv(this.addr,t)}function Ol(e,t){e.uniform4uiv(this.addr,t)}function kl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fc:Pc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Lc,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Rc,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ic,a[e])}function Nl(e){switch(e){case 5126:return ml;case 35664:return hl;case 35665:return gl;case 35666:return _l;case 35674:return vl;case 35675:return yl;case 35676:return bl;case 5124:case 35670:return xl;case 35667:case 35671:return Sl;case 35668:case 35672:return Cl;case 35669:case 35673:return wl;case 5125:return Tl;case 36294:return El;case 36295:return Dl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return kl;case 35679:case 36299:case 36307:return Al;case 35680:case 36300:case 36308:case 36293:return jl;case 36289:case 36303:case 36311:case 36292:return Ml}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pl(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nl(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Rl(e,t){e.seq.push(t),e.map[t.id]=t}function zl(e,t,n){let r=e.name,i=r.length;for(Ll.lastIndex=0;;){let a=Ll.exec(r),o=Ll.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rl(n,l===void 0?new Pl(s,e,t):new Fl(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Il(s),Rl(n,e)),n=e}}}var Bl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hl=37297,Ul=0;function Wl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gl=new V;function Kl(e){zt._getMatrix(Gl,zt.workingColorSpace,e);let t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ql(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wl(e.getShaderSource(t),r)}else return i}function Jl(e,t){let n=Kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Yl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xl(e,t){let n=Yl[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zl=new B;function Ql(){return zt.getLuminanceCoefficients(Zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zl.x.toFixed(4)}, ${Zl.y.toFixed(4)}, ${Zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $l(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nu).join(`
`)}function eu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nu(e){return e!==``}function ru(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var au=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(e){return e.replace(au,cu)}var su=new Map;function cu(e,t){let n=J[t];if(n===void 0){let e=su.get(t);if(e!==void 0)n=J[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ou(n)}var lu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(e){return e.replace(lu,du)}function du(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mu(e){return pu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function gu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:hu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var _u={302:`ENVMAP_MODE_REFRACTION`};function vu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_u[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yu[e.combine]||`ENVMAP_BLENDING_NONE`}function xu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mu(n),l=gu(n),u=vu(n),d=bu(n),f=xu(n),p=$l(n),m=eu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),_.length>0&&(_+=`
`)):(g=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nu).join(`
`),_=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Xl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Jl(`linearToOutputTexel`,n.outputColorSpace),Ql(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nu).join(`
`)),o=ou(o),o=ru(o,n),o=iu(o,n),s=ou(s),s=ru(s,n),s=iu(s,n),o=uu(o),s=uu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Vl(i,i.VERTEX_SHADER,y),S=Vl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ql(i,x,`vertex`),n=ql(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Bl(i,h),T=tu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Hl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Cu=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=Cu++,this.code=e,this.usedTimes=0}};function Eu(e){return e===1030||e===37490||e===36285}function Du(e,t,n,r,i,a){let o=new fn,s=new wu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let ee,D,te,O;if(C){let e=Ys[C];ee=e.vertexShader,D=e.fragmentShader}else{ee=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,A=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,j=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=me&&!!i.anisotropyMap,xe=he&&!!i.clearcoatMap,Se=he&&!!i.clearcoatNormalMap,Ce=he&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,M=!!i.extensions,Le=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:ee,fragmentShader:D,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:A,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&Eu(i.normalMap.format),metalnessMap:j,roughnessMap:pe,anisotropy:me,anisotropyMap:be,clearcoat:he,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:j&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:M&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(M&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ys[t];n=mo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||ku),r.length>1&&r.sort(t||Au),i.length>1&&i.sort(t||Au),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ju,e.set(t,[i])):n>=r.length?(i=new ju,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new W};break;case`SpotLight`:n={position:new B,direction:new B,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Fu=0;function Iu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Lu(e){let t=new Nu,n=Pu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Iu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Fu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ru(e){let t=new Lu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function zu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ru(e),t.set(n,[a])):r>=i.length?(a=new Ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hu=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Uu=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wu=new H,Gu=new B,Ku=new B;function qu(e,t,n){let r=new Xi,a=new z,o=new z,c=new Xt,l=new So,u=new Co,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Bu,fragmentShader:Vu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new kr;y.setAttribute(`position`,new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){F(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:O,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ba(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new wc(a.x),p.map.depthTexture=new xa(a.x,h)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new ba(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Gu),Ku.copy(e.position),Ku.add(Hu[t]),e.up.copy(Uu[t]),e.lookAt(Ku),e.updateMatrixWorld(),n.makeTranslation(-Gu.x,-Gu.y,-Gu.z),Wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Wu,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qt(a.x,a.y,{format:O,type:_})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,ee)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function ee(e){e.target.removeEventListener(`dispose`,ee);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ju(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?j(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?j(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,ee=null,D=null,te=null,O=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let A=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Xt().fromArray(se),ue=new Xt().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),j(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),j(e.CULL_FACE),ye(0);function j(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(j(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):j(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function Se(t){t===0?pe(e.CULL_FACE):(j(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function Ce(t){t!==te&&(k&&e.lineWidth(t),te=t)}function we(t,n,r){t?(j(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?j(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+re-1),A!==t&&(e.activeTexture(t),A=t)}function De(t,n,r){r===void 0&&(r=A===null?e.TEXTURE0+re-1:A);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(A!==r&&(e.activeTexture(r),A=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function Oe(){let t=oe[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function P(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},A=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,ee=null,D=null,te=null,O=null,ne=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:j,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:P,uniformBlockBinding:Ve,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:He}}function Yu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function te(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ge:zt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function re(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),ae(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),oe(t)}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function A(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function oe(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&F(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(t,n){let r=f.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function he(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){we(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ge={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},_e={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},ve={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ye(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ge[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ge[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ge[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,_e[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,_e[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,ve[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,k));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=fe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=xe(r.start,n.width,4),c=xe(t.start,n.width,4);r.start<=i+1&&s===c&&xe(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Ce(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=be(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=zt.getPrimaries(zt.workingColorSpace),r=n.colorSpace===``?null:zt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Le(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=O(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ye(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=re(n,t);if(n.isDepthTexture)u=ne(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Se(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=Gs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=Gs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Re(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Re(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r){if(n.image.length!==6)return;let i=be(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=zt.getPrimaries(zt.workingColorSpace),s=n.colorSpace===``?null:zt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Le(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=O(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=re(n,h);ye(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Re(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Te(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=O(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Fe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=O(a.internalFormat,o,s,a.normalized,a.colorSpace);Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,k)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ye(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else j(n.depthTexture,0);let o=a.__webglTexture,s=Fe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)De(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?De(n.__webglFramebuffer[0],t,0):De(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ee(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){let i=f.get(t);n!==void 0&&Te(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Oe(t)}function Ae(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,ie);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ie(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=O(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ye(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Te(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Te(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ye(s,i),Te(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ye(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Te(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Te(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&Oe(t)}function je(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let Me=[],Ne=[];function Pe(t){if(t.samples>0){if(Ie(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Me.length=0,Ne.length=0,Me.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Me.push(o),Ne.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function Ie(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function M(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=j,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Xu(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _o({vertexShader:Zu,fragmentShader:Qu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new $u,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],D=new z,te=null,O=new ps;O.viewport=new Xt;let ne=new ps;ne.viewport=new Xt;let re=[O,ne],k=new Os,ie=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function A(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,ae=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(D),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new ba(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new B,le=new B;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=ne.near=O.near=t,k.far=ne.far=O.far=n,(ie!==k.near||ae!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ie=k.near,ae=k.far),k.layers.mask=e.layers.mask|6,O.layers.mask=k.layers.mask&-5,ne.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;de(k,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(k,O,ne):k.projectionMatrix.copy(O.projectionMatrix),fe(e,k,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let j=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new ps,o.layers.enable(n),o.viewport=new Xt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Sa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}j&&j(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new qs;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){j=e},this.dispose=function(){}}},td=new H,nd=new V;nd.set(-1,0,0,0,1,0,0,0,1);function rd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,po(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function id(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ad=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),od=null;function sd(){return od===null&&(od=new Ai(ad,16,16,O,_),od.name=`DFG_LUT`,od.minFilter=s,od.magFilter=s,od.wrapS=n,od.wrapT=n,od.generateMipmaps=!1,od.needsUpdate=!0),od}var cd=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([re,ne,te]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),ee=new B,D=null,O=null,k=[],ie=[],ae=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,oe=!1,se=null,ce=null,le=null,ue=null;this._outputColorSpace=Ue;let de=0,fe=0,j=null,pe=-1,me=null,he=new Xt,ge=new Xt,_e=null,ve=new W(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new Xt(0,0,be,xe),Ee=new Xt(0,0,be,xe),De=!1,Oe=new Xi,ke=!1,Ae=!1,je=new H,Me=new B,Ne=new Xt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return j===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,L,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw I(`WebGLRenderer: `+e.message),e}let Re,ze,N,Be,P,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st,ct,lt;function ut(){Re=new Ec(M),Re.init(),st=new Xu(M,Re),ze=new nc(M,Re,e,st),N=new Ju(M,Re),ze.reversedDepthBuffer&&m&&N.buffers.depth.setReversed(!0),ce=M.createFramebuffer(),le=M.createFramebuffer(),ue=M.createFramebuffer(),Be=new kc(M),P=new Ou,Ve=new Yu(M,Re,N,P,ze,st,Be),He=new Tc(A),We=new Js(M),ct=new ec(M,We),Ge=new Dc(M,We,Be,ct),Ke=new jc(M,Ge,We,ct,Be),rt=new Ac(M,ze,Ve),Qe=new rc(P),qe=new Du(A,He,Re,ze,ct,Qe),Je=new rd(A,P),Xe=new Mu,Ze=new zu(Re),nt=new $s(A,He,N,Ke,x,s),et=new qu(A,Ke,ze),lt=new id(M,Be,ze,N),at=new tc(M,Re,Be),ot=new Oc(M,Re,Be),Be.programs=qe.programs,A.capabilities=ze,A.extensions=Re,A.properties=P,A.renderLists=Xe,A.shadowMap=et,A.state=N,A.info=Be}ut(),S!==1009&&(ae=new Nc(S,t.width,t.height,o,r,i));let dt=new ed(A,M);this.xr=dt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){if(dt.isPresenting){F(`WebGLRenderer: Can't change size while VR device is presenting.`);return}be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ae!==null&&ae.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ae.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=C.has(t)}if(e){let e=j.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,M.clearBufferuiv(M.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,M.clearBufferiv(M.COLOR,0,E))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),se=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,L,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),nt.dispose(),Xe.dispose(),Ze.dispose(),P.dispose(),He.dispose(),Ke.dispose(),ct.dispose(),lt.dispose(),qe.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,bt),dt.removeEventListener(`sessionend`,xt),St.stop()};function L(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),oe=!0}function ft(){tt(`WebGLRenderer: Context Restored.`),oe=!1;let e=Be.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;ut(),Be.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function pt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),P.remove(e)}function gt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=R(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh)if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,n),e.side=0,e.needsUpdate=!0,Ot(e,t,n),e.side=2):Ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Ze.get(n),O.init(t),ie.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];_t(a,n,e),r.add(a)}else _t(t,n,e),r.add(t)}),O=ie.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new qs;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,dt.setAnimationLoop(e),e===null?St.stop():St.start()},dt.addEventListener(`sessionstart`,bt),dt.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(oe===!0)return;se!==null&&se.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=ae!==null&&(j===null||n)&&ae.begin(A,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(ae===null||ae.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,j),O=Ze.get(e,ie.length),O.init(t),O.state.textureUnits=Ve.getTextureUnits(),ie.push(O),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,Ye,t.reversedDepth),Ae=this.localClippingEnabled,ke=Qe.init(this.clippingPlanes,Ae),D=Xe.get(e,k.length),D.init(),k.push(D),dt.enabled===!0&&dt.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,A.sortObjects)}Ct(e,t,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(Ce,we,t.reversedDepth),Fe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Fe&&nt.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Qe.beginShadows();let i=O.state.shadowsArray;if(et.render(i,e,t),ke===!0&&Qe.endShadows(),(r&&ae.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Fe&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(D,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Fe&&nt.render(e),wt(D,e,t)}j!==null&&fe===0&&(Ve.updateMultisampleRenderTarget(j),Ve.updateRenderTargetMipmap(j)),r&&ae.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),ct.resetDefaultState(),pe=-1,me=null,ie.pop(),ie.length>0?(O=ie[ie.length-1],Ve.setTextureUnits(O.state.textureUnits),ke===!0&&Qe.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,k.pop(),D=k.length>0?k[k.length-1]:null,se!==null&&se.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Oe.intersectsSprite(e)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let t=Ke.update(e),i=e.material;i.visible&&D.push(e,t,i,n,Ne.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Oe.intersectsObject(e))){let t=Ke.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ne.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&D.push(e,t,s,n,Ne.z,o)}}else i.visible&&D.push(e,t,i,n,Ne.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),ke===!0&&Qe.setGlobalState(A.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),d=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(ve),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&nt.render(n);let f=A.toneMapping;A.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),ke===!0&&Qe.setGlobalState(A.clippingPlanes,r),Et(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,d),A.setClearColor(ve,ye),p!==void 0&&(r.viewport=p),A.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Pe);let r=P.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=qe.getUniforms(e),se!==null&&e.isNodeMaterial&&se.build(e,n,s),e.onBeforeCompile(s,A),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),At(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];ee.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(ee))return n}return null}function R(e,t,n,r,i){t.isScene!==!0&&(t=Pe),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=O.state.lights;if(ke===!0&&(Ae===!0||e!==me)){let t=e===me&&r.id===pe;Qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),se&&r.isNodeMaterial&&se.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=jt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(M,`projectionMatrix`,e.projectionMatrix),T.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&T.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&T.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){T.setOptional(M,i,`bindMatrix`),T.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(M,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(T.setOptional(M,i,`batchingTexture`),T.setValue(M,`batchingTexture`,i._matricesTexture,Ve),T.setOptional(M,i,`batchingIdTexture`),T.setValue(M,`batchingIdTexture`,i._indirectTexture,Ve),T.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(M,`batchingColorTexture`,i._colorsTexture,Ve));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&rt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=sd()),C){if(T.setValue(M,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&z(E,w),a&&r.fog===!0&&Je.refreshFogUniforms(E,a),Je.refreshMaterialUniforms(E,r,Se,xe,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Bl.upload(M,kt(v),E,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bl.upload(M,kt(v),E,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(M,`center`,i.center),T.setValue(M,`modelViewMatrix`,i.modelViewMatrix),T.setValue(M,`normalMatrix`,i.normalMatrix),T.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,x),lt.bind(n,x)}}return x}function z(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,de=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}else if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ce),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(c)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ze.textureTypeReadable(l)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ze.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,st.convert(l),st.convert(u),0);let f=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,f);let p=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await it(M,p,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(d),M.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,le),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,ue);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){de=0,fe=0,j=null,N.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},ld=[16739179,16767293,5164484,16752451,15952096,10349935],ud=1710638;function dd(e=4){let t=new Uint8Array(e);for(let n=0;n<e;n++)t[n]=Math.round(n/(e-1)*255);let n=new Ai(t,e,1,D);return n.minFilter=i,n.magFilter=i,n.generateMipmaps=!1,n.needsUpdate=!0,n}var fd=dd(4);function pd(e=24){let t=new Uint8Array(e);for(let n=0;n<e;n++)t[n]=Math.round(n/(e-1)*255);let n=new Ai(t,e,1,D);return n.minFilter=s,n.magFilter=s,n.generateMipmaps=!1,n.needsUpdate=!0,n}var md=pd(24);function hd(e,t={}){return new xo({color:e,gradientMap:md,...t})}var gd=new Map;function _d(e){if(gd.has(e))return gd.get(e);let t=new xo({color:e,gradientMap:fd});return gd.set(e,t),t}function vd(e,t={}){return new xo({color:e,gradientMap:fd,...t})}var yd=null;function bd(){return yd||=new ai({color:ud,side:1}),yd}function xd(e,t,n=1.05){let r=new U,i=new K(e,_d(t));i.castShadow=!0,i.receiveShadow=!0;let a=new K(e,bd());return a.scale.setScalar(n),r.add(i),r.add(a),r}function Sd(e,t,n,r){e.background=Cd(n,r),new $o().load(t,t=>{t.mapping=303,t.colorSpace=Ue,e.background=t})}function Cd(e,t){let n=document.createElement(`canvas`);n.width=2,n.height=256;let r=n.getContext(`2d`),i=r.createLinearGradient(0,0,0,256);i.addColorStop(0,e),i.addColorStop(1,t),r.fillStyle=i,r.fillRect(0,0,2,256);let a=new ya(n);return a.colorSpace=Ue,a}function wd(e,t=900){let n=new K(new q(t,32,20),new ai({color:16777215,side:1,transparent:!0,opacity:1,depthWrite:!1}));return n.renderOrder=1,e.add(n),n}function Td(e,{count:t=600,near:n=60,far:r=150}={}){let i=new Float32Array(t*3),a=new Float32Array(t);for(let e=0;e<t;e++){let t=n+Math.random()*(r-n),o=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1);i[e*3]=t*Math.sin(s)*Math.cos(o),i[e*3+1]=t*Math.cos(s),i[e*3+2]=t*Math.sin(s)*Math.sin(o),a[e]=.4+Math.random()*1.4}let o=new kr;o.setAttribute(`position`,new hr(i,3)),o.setAttribute(`size`,new hr(a,1));let s=new ga(o,new da({color:16777215,size:1.1,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1}));return s.renderOrder=2,e.add(s),s}function Ed(e,t){let n=t||[{r:7,color:16752451,position:[-45,22,-70]},{r:4,color:15952096,position:[55,-8,-60]}],r=[];for(let t of n){let n=xd(new q(t.r,32,24),t.color,1.03);n.position.set(t.position[0],t.position[1],t.position[2]),n.traverse(e=>{e.renderOrder=2,e.material&&(e.material=e.material.clone(),e.material.transparent=!0,e.material.depthWrite=!1,e.castShadow=!1,e.receiveShadow=!1,r.push(e.material))}),e.add(n)}return r}var Dd=``+new URL(`nebula-6ckb_XRn.jpg`,import.meta.url).href,Od=class{constructor(){this.ctx=null,this.master=null,this.muted=!1,this._noiseBuf=null,this._lastSquish=0}ensure(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.1,this.master.connect(this.ctx.destination),this._buildNoise(),this._startAmbient()}_buildNoise(){let e=this.ctx.sampleRate*.5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=Math.random()*2-1;this._noiseBuf=t}_startAmbient(){let e=this.ctx.createGain();e.gain.value=.5;let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.value=620,e.connect(t).connect(this.master);for(let t of[-6,0,7]){let n=this.ctx.createOscillator();n.type=`sine`,n.frequency.value=110,n.detune.value=t,n.connect(e),n.start()}let n=this.ctx.createOscillator();n.frequency.value=.07;let r=this.ctx.createGain();r.gain.value=.18,n.connect(r).connect(e.gain),n.start()}squish(e){if(!this.ctx||this.muted)return;let t=this.ctx.currentTime;if(t-this._lastSquish<.07)return;this._lastSquish=t;let n=.25+.6*Math.min(1,e),r=this.ctx.createBufferSource();r.buffer=this._noiseBuf;let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(900+Math.random()*400,t),i.frequency.exponentialRampToValueAtTime(180,t+.14);let a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.5*n,t+.012),a.gain.exponentialRampToValueAtTime(1e-4,t+.16),r.connect(i).connect(a).connect(this.master),r.start(t),r.stop(t+.18);let o=this.ctx.createOscillator();o.type=`sine`;let s=240+Math.random()*260;o.frequency.setValueAtTime(s,t),o.frequency.exponentialRampToValueAtTime(s*.6,t+.13);let c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(.32*n,t+.02),c.gain.exponentialRampToValueAtTime(1e-4,t+.19),o.connect(c).connect(this.master),o.start(t),o.stop(t+.2)}chime(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(.5,e+.01),t.gain.exponentialRampToValueAtTime(1e-4,e+.7),t.connect(this.master);for(let[n,r]of[[1318,1],[1976,.5],[2637,.28]]){let i=this.ctx.createOscillator();i.type=`sine`,i.frequency.value=n;let a=this.ctx.createGain();a.gain.value=r,i.connect(a).connect(t),i.start(e),i.stop(e+.72)}}gate(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`sawtooth`,t.frequency.setValueAtTime(70,e),t.frequency.exponentialRampToValueAtTime(150,e+.5);let n=this.ctx.createBiquadFilter();n.type=`lowpass`,n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(600,e+.5);let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.32,e+.06),r.gain.exponentialRampToValueAtTime(1e-4,e+.75),t.connect(n).connect(r).connect(this.master),t.start(e),t.stop(e+.8)}splat(e=1){if(!this.ctx||this.muted)return;let t=this.ctx.currentTime,n=.4+.6*Math.min(1,e),r=this.ctx.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(42,t+.18);let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.value=240;let a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.55*n,t+.014),a.gain.exponentialRampToValueAtTime(1e-4,t+.34),r.connect(i).connect(a).connect(this.master),r.start(t),r.stop(t+.36),this.squish(.5+.5*e)}splash(e=1){if(!this.ctx||this.muted)return;let t=this.ctx.currentTime,n=.35+.65*Math.min(1,e),r=this.ctx.createBufferSource();r.buffer=this._noiseBuf;let i=this.ctx.createBiquadFilter();i.type=`bandpass`,i.Q.value=.9,i.frequency.setValueAtTime(400,t),i.frequency.exponentialRampToValueAtTime(2600,t+.22);let a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.42*n,t+.015),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),r.connect(i).connect(a).connect(this.master),r.start(t),r.stop(t+.32);let o=this.ctx.createBufferSource();o.buffer=this._noiseBuf;let s=this.ctx.createBiquadFilter();s.type=`lowpass`,s.frequency.setValueAtTime(520,t),s.frequency.exponentialRampToValueAtTime(120,t+.26);let c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(.5*n,t+.02),c.gain.exponentialRampToValueAtTime(1e-4,t+.34),o.connect(s).connect(c).connect(this.master),o.start(t),o.stop(t+.36)}nom(){if(!this.ctx||this.muted)return;this.squish(.5);let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`triangle`,t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(560,e+.12);let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.34,e+.02),n.gain.exponentialRampToValueAtTime(1e-4,e+.24),t.connect(n).connect(this.master),t.start(e),t.stop(e+.26)}pop(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(680,e),t.frequency.exponentialRampToValueAtTime(240,e+.09);let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+.008),n.gain.exponentialRampToValueAtTime(1e-4,e+.12),t.connect(n).connect(this.master),t.start(e),t.stop(e+.14)}pew(e=1){if(!this.ctx||this.muted)return;let t=this.ctx.currentTime,n=Math.min(1,Math.max(0,e)),r=380+260*n,i=r*(2.4+1.2*n),a=.26-.09*n,o=this.ctx.createOscillator();o.type=`triangle`,o.frequency.setValueAtTime(r,t),o.frequency.exponentialRampToValueAtTime(i,t+a);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.16+.16*n,t+.012),s.gain.exponentialRampToValueAtTime(1e-4,t+a),o.connect(s).connect(this.master),o.start(t),o.stop(t+a+.02)}pum(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(165,e+.07),t.frequency.exponentialRampToValueAtTime(62,e+.24);let n=this.ctx.createBiquadFilter();n.type=`lowpass`,n.frequency.value=320;let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.34,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.28),t.connect(n).connect(r).connect(this.master),t.start(e),t.stop(e+.3);let i=this.ctx.createBufferSource();i.buffer=this._noiseBuf;let a=this.ctx.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(700,e),a.frequency.exponentialRampToValueAtTime(220,e+.16);let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.14,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+.18),i.connect(a).connect(o).connect(this.master),i.start(e),i.stop(e+.2)}ding(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(.42,e+.008),t.gain.exponentialRampToValueAtTime(1e-4,e+.38),t.connect(this.master);for(let[n,r]of[[1568,1],[2349,.45],[3136,.22]]){let i=this.ctx.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(n*1.33,e+.3);let a=this.ctx.createGain();a.gain.value=r,i.connect(a).connect(t),i.start(e),i.stop(e+.4)}}setPurr(e){if(!this.ctx)return;if(!this._purr){let e=this.ctx.createOscillator();e.type=`sine`,e.frequency.value=58;let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.value=320;let n=this.ctx.createGain();n.gain.value=.5;let r=this.ctx.createOscillator();r.frequency.value=22;let i=this.ctx.createGain();i.gain.value=.5,r.connect(i).connect(n.gain);let a=this.ctx.createGain();a.gain.value=0,e.connect(t).connect(n).connect(a).connect(this.master),e.start(),r.start(),this._purr={g:a}}let t=this.muted?0:Math.min(1,e)*.16;this._purr.g.gain.setTargetAtTime(t,this.ctx.currentTime,.12)}setSnore(e){if(!this.ctx)return;if(!this._snore){let e=this.ctx.createBufferSource();e.buffer=this._noiseBuf,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.value=380;let n=this.ctx.createGain();n.gain.value=.5;let r=this.ctx.createOscillator();r.type=`sine`,r.frequency.value=.13;let i=this.ctx.createGain();i.gain.value=.5,r.connect(i).connect(n.gain);let a=this.ctx.createGain();a.gain.value=0,e.connect(t).connect(n).connect(a).connect(this.master),e.start(),r.start(),this._snore={g:a}}let t=this.muted?0:Math.min(1,e)*.06;this._snore.g.gain.setTargetAtTime(t,this.ctx.currentTime,.4)}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.1,this.ctx.currentTime,.05)}},kd=.94,Ad=.9,jd=.92;function Md(e,t,n,r,i,a,o){let s=e.x-r.x,c=e.y-r.y,l=e.z-r.z,u=Math.sqrt(s*s+c*c+l*l),d=i+n;if(u>=d)return;let f,p,m;u<1e-6?(f=0,p=1,m=0,u=1e-6):(f=s/u,p=c/u,m=l/u),e.x=r.x+f*d,e.y=r.y+p*d,e.z=r.z+m*d;let h=o?a:1,g=e.x-t.x,_=e.y-t.y,v=e.z-t.z,y=g*f+_*p+v*m,b=g-f*y,x=_-p*y,S=v-m*y;t.x=e.x-b*h,t.y=e.y-x*h,t.z=e.z-S*h}var Nd=new B,Pd=new B;function Fd(e,t,n,r=new B){return Nd.set(-e.z,0,e.x),Nd.lengthSq()<1e-8&&Nd.set(1,0,0),Nd.normalize(),Pd.crossVectors(e,Nd).normalize(),r.copy(e).multiplyScalar(Math.cos(t)).addScaledVector(Nd,Math.cos(n)*Math.sin(t)).addScaledVector(Pd,Math.sin(n)*Math.sin(t)).normalize()}var Id=class{constructor({center:e=new B(0,0,0),radius:t=14,sea:n=null}={}){this.center=e.clone(),this.radius=t,this.obstacles=[],this.sea=null,this.waterZone=null,this._u=new B,this._t=new B,n&&this.setSea(n)}setSea({dir:e,radius:t,depth:n,shoreBand:r=t,buoyancy:i,drag:a,maxDepth:o,island:s=null}){if(!Number.isFinite(i)||!Number.isFinite(a)||!Number.isFinite(o))throw Error(`setSea: buoyancy/drag/maxDepth обязательны (конечные числа) — иначе солвер тихо взрывается в NaN`);let c=t/this.radius;if(this.sea={dir:e.clone().normalize(),radius:t,depth:n,angRadius:c,shoreBand:Math.min(Math.max(r,1e-6),t),cosAng:Math.cos(c),level:this.radius,island:null},s){let e=s.arc/this.radius;this.sea.island={dir:s.dir.clone().normalize(),arc:s.arc,flat:s.flat,rise:s.rise,angArc:e,cosAng:Math.cos(e),dryArc:0},this.sea.island.dryArc=this._measureDryArc()}return this.waterZone={center:this.center,dir:this.sea.dir,cosAng:this.sea.cosAng,level:this.sea.level,buoyancy:i,drag:a,maxDepth:o},this.sea}_measureDryArc(){let e=this.sea.island,t=new B,n=(n,r)=>(Fd(e.dir,n/this.radius,r,t).multiplyScalar(this.radius).add(this.center),this.floorRadius(t)>=this.sea.level),r=1/0;for(let t=0;t<16;t++){let i=t/16*Math.PI*2;if(!n(0,i))return 0;let a=0,o=e.arc;for(let e=0;e<24;e++){let e=(a+o)/2;n(e,i)?a=e:o=e}r=Math.min(r,a)}return r}addObstacle(e,t){return this.obstacles.push({center:e.clone(),radius:t}),this.obstacles[this.obstacles.length-1]}floorRadius(e){let t=this.sea;if(!t)return this.radius;let n=e.x-this.center.x,r=e.y-this.center.y,i=e.z-this.center.z,a=Math.sqrt(n*n+r*r+i*i);if(a<1e-6)return this.radius;let o=(n*t.dir.x+r*t.dir.y+i*t.dir.z)/a;if(o<=t.cosAng)return this.radius;let s=Math.acos(o>1?1:o)*this.radius,c=Math.min(1,(t.radius-s)/t.shoreBand),l=this.radius-t.depth*c*c*(3-2*c),u=t.island;if(u){let e=(n*u.dir.x+r*u.dir.y+i*u.dir.z)/a;if(e>u.cosAng){let t=Math.acos(e>1?1:e)/u.angArc,n=Math.min(1,Math.max(0,(1-t)/(1-u.flat))),r=n*n*(3-2*n);l+=(this.radius+u.rise-l)*r}}return l}isWater(e){let t=this.sea;if(!t)return!1;let n=e.x-this.center.x,r=e.y-this.center.y,i=e.z-this.center.z,a=Math.sqrt(n*n+r*r+i*i)||1e-6;return a<t.level&&(n*t.dir.x+r*t.dir.y+i*t.dir.z)/a>t.cosAng}waterInfo(e,t){let n=this.sea;if(!n)return null;let r=e.distanceTo(this.center),i=this._u.copy(e).sub(this.center).multiplyScalar(1/(r||1e-6)),a=Math.acos(R.clamp(i.dot(n.dir),-1,1))*this.radius,o=n.radius-a,s=!1,c=n.island;if(c){let e=Math.acos(R.clamp(i.dot(c.dir),-1,1))*this.radius-c.dryArc;e<o&&(o=e,s=!0)}if(t){let e=s?c.dir:n.dir;this._t.copy(e).addScaledVector(i,-i.dot(e)),s||this._t.negate(),this._t.lengthSq()<1e-8&&(this._t.set(-i.z,0,i.x),this._t.lengthSq()<1e-8&&this._t.set(1,0,0)),t.copy(this._t).normalize()}return{over:r-n.level,depth:n.level-this.floorRadius(e),dist:o,toIsland:s}}resolveParticle(e,t,n,r=!0){Md(e,t,n,this.center,this.floorRadius(e),kd,r);for(let i of this.obstacles)Md(e,t,n,i.center,i.radius,Ad,r)}},Ld=class{constructor(e,t=[]){this.world=e,this.others=t,this.center=e.center,this.radius=e.radius}resolveParticle(e,t,n,r=!0){this.world.resolveParticle(e,t,n,r);for(let i of this.others)Md(e,t,n,i.com,i.radius,jd,r)}},Rd=class{constructor(e,{minV:t,fullV:n,cooldown:r=.5}={}){this.world=e,this.minV=t,this.fullV=n,this.cooldown=r,this.inWater=!1,this.splash=0,this._cd=0}update(e,t,n){this.splash=0,this._cd=Math.max(0,this._cd-e);let r=this.world.sea;if(!r)return this.inWater=!1,0;let i=this.world.center,a=t.x-i.x,o=t.y-i.y,s=t.z-i.z,c=Math.sqrt(a*a+o*o+s*s)||1e-6,l=c<r.level&&(a*r.dir.x+o*r.dir.y+s*r.dir.z)/c>r.cosAng;if(l&&!this.inWater&&this._cd===0){let e=-(a*n.x+o*n.y+s*n.z)/c;if(e>=this.minV){let t=Math.min(1,(e-this.minV)/Math.max(1e-6,this.fullV-this.minV));this.splash=.25+.75*t,this._cd=this.cooldown}}return this.inWater=l,this.splash}},zd=typeof location<`u`&&new URLSearchParams(location.search).has(`big`)?105:35,Bd=14/zd,Vd=2.2,Hd=3.5*Vd,Ud=2.9,Wd=3*Vd,Gd=.55,Kd=.4,qd=2*Vd,Jd=.25,Yd=.12,Xd=3.5,Zd=7.5,Qd=[1.1,3.6],$d=2.1,ef=2.1,tf=.37,nf=1.2,rf=1.6,af=.55,of=4.5,sf=8*Vd,cf=.34,lf=new B(.15,1,.35).normalize(),uf=new B;function df(e,t=new B){let n=uf.copy(e).normalize(),r=R.clamp(lf.dot(n),-1,1),i=Math.acos(r);if(i<1e-6)return t.copy(lf);n.addScaledVector(lf,-r).normalize();let a=i*Bd;return t.copy(lf).multiplyScalar(Math.cos(a)).addScaledVector(n,Math.sin(a)).normalize()}var ff=46,pf=R.degToRad(60),mf=R.degToRad(200);function hf(e,t,n){let r=e.clone().normalize(),i=new B(-r.z,0,r.x);i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();let a=new B().crossVectors(r,i).normalize(),o=t/zd;return r.multiplyScalar(Math.cos(o)).addScaledVector(i,Math.cos(n)*Math.sin(o)).addScaledVector(a,Math.sin(n)*Math.sin(o)).normalize()}var gf=hf(lf,ff,pf),_f=hf(lf,22.75,R.degToRad(139)),vf=16.4,yf=_f.clone(),bf=[5,114];function xf(){return hf(_f,bf[0],R.degToRad(bf[1]))}var Sf=hf(gf,7,mf);function Cf(){let e=lf,t=new B(-e.z,0,e.x).normalize(),n=new B().crossVectors(e,t).normalize(),r=R.degToRad(65)*Bd,i=R.degToRad(18)*Bd,a=[e.clone()];for(let o=0;o<3;o++){let s=i+o*2*Math.PI/3;a.push(e.clone().multiplyScalar(Math.cos(r)).addScaledVector(t,Math.cos(s)*Math.sin(r)).addScaledVector(n,Math.sin(s)*Math.sin(r)).normalize())}return a}var wf=[[13.61,7],[13.61,76],[13.61,145],[13.61,245]],Tf=[[24,157],[24,337],[42,18],[55,228]],Ef=[[24,293],[40,201],[52,339]];function Df(e,t,n=lf){let r=[];for(let i=0;i<t;i++){let[t,a]=e[i%e.length];r.push(hf(n,t,R.degToRad(a)))}return r}function Of(){return Df(wf,4,_f)}function kf(){return Df(Tf,4)}function Af(){return Df(Ef,3)}var jf=[[23.28,28.1],[79.32,113.1],[70.98,304.7],[40.47,212.5]],Mf=[`kisel`,`popryg`,`lipuchka`,`dichok`];function Nf(){return Df(jf,jf.length)}function Pf(e){let t=Mf.indexOf(e);return t<0?null:Nf()[t]}var Ff=9;function If(e,t,n=null){let r=[];if(!e)return r;let i=e=>!n||!n.isWater?!1:n.isWater(e.clone().multiplyScalar(n.radius).add(n.center));for(let n=0;r.length<t&&n<t*12;n++){let a=hf(e,Ff,n*2*Math.PI/Math.max(1,t)+n*.37);i(a)||r.push(a)}for(;r.length<t;)r.push(e.clone());return r}var Lf=18,Rf=4;function zf(e,t=null){let n=[],r=e=>{if(!t||!t.isWater)return!0;let n=e.clone().multiplyScalar(t.radius).add(t.center);return!t.isWater(n)};for(let t=0;n.length<e&&t<e*40;t++){let i=Math.acos(1-2*(t+.5)/(e*3)),a=Math.PI*(1+Math.sqrt(5))*t,o=new B(Math.sin(i)*Math.cos(a),Math.cos(i),Math.sin(i)*Math.sin(a)).normalize();Math.acos(R.clamp(o.dot(lf),-1,1))*zd<Lf||Math.acos(R.clamp(o.dot(gf),-1,1))*zd<16+Rf||r(o)&&n.push(o)}let i=Cf();for(;n.length<e;)n.push(i[n.length%i.length].clone());return n}function Bf(e,t,n=new B(0,0,0),r=4){let i=new B(-e.z,0,e.x).normalize(),a=new B().crossVectors(e,i).normalize(),o=Number.isFinite(r)&&r>0?r:4,s=Vd*.6*Math.max(1,o/4)/zd,c=t*2*Math.PI/o,l=e.clone().multiplyScalar(Math.cos(s)).addScaledVector(i,Math.cos(c)*Math.sin(s)).addScaledVector(a,Math.sin(c)*Math.sin(s)).normalize();return{nestDir:l,nestPos:l.clone().multiplyScalar(zd).add(n)}}var X={ground:11061414,meadow:12573864,groundShade:9417362,yard:14271628,path:12559479,sand:15720372,sandHi:16182222,soil:9071434,soilDark:7230008,patch:11047794,penSoil:10981478,burrow:3812902,sea:5219256,seaDeep:3502218,leaf:7648634,leafHi:9685900,leafDeep:5475167,grass:8371838,conifer:4881770,moss:9416808,trunk:9067067,trunkDark:7226928,wood:10120005,woodHi:11567957,board:15255698,boardEdge:13213791,rock:10923426,coral:15231582,coralSoft:15770262,yellow:16767293,yellowSoft:16771491,pink:15047616,berry:14703180,berryCalyx:4086842,berryStem:7648634,carrot:15238970,carrotTop:5941317,nestBed:10469516,nestCore:8562804,nestStraw:12032610,flower:16446428,lantern:5916210,lanternGlass:16767370,cushions:[15976894,13623486,15193058,16114352,16305586,14280402],skyDay:16182733,skyNight:3358552},Vf={kisel:{bed:10206869,core:8167546,accent:12113819},popryg:{bed:11977871,core:10136686,accent:15916686},lipuchka:{bed:11125666,core:8956289,accent:15314630},dichok:{bed:9417362,core:7245944,accent:10274752}};function Hf(e){return Vf[e]||Vf.kisel}var Uf=`modulepreload`,Wf=function(e,t){return new URL(e,t).href},Gf={},Kf=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Wf(t,n),t=s(t),t in Gf)return;Gf[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Uf,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},qf={trunk:{role:`trunk`,outline:1.05},trunkDark:{role:`trunkDark`,outline:1.05},wood:{role:`wood`,outline:1.045},leaf:{role:`leaf`,outline:1.045},leafHi:{role:`leafHi`,outline:1.045},leafDeep:{role:`leafDeep`,outline:1.045},berry:{role:`berry`,outline:1.07},nestStraw:{role:`nestStraw`,outline:1.03},flower:{role:`flower`,outline:0},lantern:{role:`lantern`,outline:1.05},lanternGlass:{role:`lanternGlass`,outline:0,lamp:!0}},Jf={bush:()=>Kf(()=>import(`./bush-texBG46d.js`),[],import.meta.url),sprout:()=>Kf(()=>import(`./sprout-CONSflTU.js`),[],import.meta.url),nest:()=>Kf(()=>import(`./nest-BgG-ocoX.js`),[],import.meta.url),lantern:()=>Kf(()=>import(`./lantern-74iS9vxg.js`),[],import.meta.url),tree:()=>Kf(()=>import(`./tree-DnsgsGZ-.js`),[],import.meta.url),palm:()=>Kf(()=>import(`./palm-Dy08nnhJ.js`),[],import.meta.url)};Object.keys(Jf);var Yf=.05,Xf=1.25,Zf=[],Qf=0;function $f(e){Qf=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0;let t=Yf+(Xf-Yf)*Qf;for(let e of Zf)e.emissiveIntensity=t}var ep=new Map;function tp(e){let t=e.material;return(t&&t.name||e.name||``).split(`.`)[0]}function np(e,t){let n=new U;n.name=`prop:`+e,t.updateMatrixWorld(!0);let r=[];t.traverse(e=>{e.isMesh&&e.geometry&&r.push(e)});for(let t of r){let r=tp(t),i=qf[r];i||console.error(`[props] «${e}»: неизвестный слот материала «${r}» — добавь его в PROP_SLOTS (props.js) или переименуй в Blender. Известные: ${Object.keys(qf).join(`, `)}`);let a=X[i?i.role:`rock`],o=t.geometry.clone();o.applyMatrix4(t.matrixWorld),o.computeBoundingBox();let s=o.boundingBox.getCenter(new B);o.translate(-s.x,-s.y,-s.z);let c;if(i&&i.lamp){let e=vd(a,{emissive:new W(a),emissiveIntensity:Yf});Zf.push(e),c=new K(o,e)}else i&&i.outline?(c=xd(o,a,i.outline),c.children[0].castShadow=!0,c.children[0].receiveShadow=!0):(c=new K(o,vd(a)),c.castShadow=!0);c.position.copy(s),c.name=r,n.add(c)}return $f(Qf),n}function rp(e){if(ep.has(e))return ep.get(e);let t=Jf[e],n;return t?n=typeof document>`u`||!document.createElement?Promise.resolve(null):Promise.all([Kf(()=>import(`./GLTFLoader-CNFMIGqP.js`),[],import.meta.url),t()]).then(([t,n])=>new Promise((r,i)=>{new t.GLTFLoader().load(n.default,t=>r(np(e,t.scene)),void 0,i)})).catch(t=>(console.error(`[props] пропс «${e}» не доехал:`,t),null)):(console.error(`[props] нет такого пропса: «${e}»`),n=Promise.resolve(null)),ep.set(e,n),n}function ip(e,t={}){let n=new U;return t.scale!==void 0&&(typeof t.scale==`number`?n.scale.setScalar(t.scale):n.scale.copy(t.scale)),t.spin&&(n.rotation.y=t.spin),t.tilt&&(n.rotation.z=t.tilt),rp(e).then(e=>{e&&n.add(e.clone())}),n}var ap=new B(0,1,0),op=new Mt,sp=new B;function cp(e,t,n,r=40){let i=new K(new q(e,r,Math.max(8,Math.round(r*.5)),0,Math.PI*2,0,t),hd(n));return i.receiveShadow=!0,i}function lp(e){return ip(`tree`,{scale:.92+e%3*.11,spin:e*2.399%(Math.PI*2)})}function up(e){return ip(`palm`,{scale:1.05+e%3*.12,spin:(e*2.399+.7)%(Math.PI*2)})}function dp(e){let t=new U,n=2.5+e%3*.35,r=xd(new Ea(.13,.19,n*.32,8),X.trunkDark,1.06);r.position.y=n*.16,t.add(r);for(let e=0;e<3;e++){let r=xd(new Da(.82-e*.2,n*(.42-e*.05),9),X.conifer,1.05);r.children[0].castShadow=!0,r.position.y=n*(.3+e*.24),t.add(r)}return t.rotation.y=e*1.732%(Math.PI*2),t}var fp=.16,pp=.18;function mp(e,t,n,r){let i=r*1.7;return fp*(.55*Math.sin(2.3*e+i)*Math.sin(1.9*t-i*.7)+.3*Math.sin(3.7*n+i*1.3)*Math.sin(3.1*e-i)+.15*Math.sin(5.3*t+i*2.1))}function hp(e,t){let n=new no(e,1),r=n.attributes.position,i=new B;for(let n=0;n<r.count;n++){i.fromBufferAttribute(r,n);let a=1+mp(i.x/e,i.y/e,i.z/e,t);r.setXYZ(n,i.x*a,i.y*a,i.z*a)}return n.computeVertexNormals(),n}function gp(e,t){let n=hp(e,t),r=n.attributes.position,i=new B;for(let t=0;t<r.count;t++){i.fromBufferAttribute(r,t);let n=i.y>pp*e?1.02:.88;r.setXYZ(t,i.x*n,i.y*n,i.z*n)}return n.computeVertexNormals(),n}var _p=[new B(-1,.2,.3).normalize(),new B(.9,-.3,.4).normalize(),new B(.2,-1,-.15).normalize(),new B(-.5,-.6,.8).normalize(),new B(.3,.35,-1).normalize(),new B(-.8,.5,-.6).normalize()],vp=[{dir:new B(-.9,-.4,-.3).normalize(),r:1.2},{dir:new B(.55,-.85,.5).normalize(),r:.95},{dir:new B(1,.25,-.5).normalize(),r:1.3},{dir:new B(-.2,.55,-1).normalize(),r:1}],yp=[{dir:df(new B(.9,1,.6)),r:1.4},{dir:df(new B(-.35,1,-.6)),r:1.1},{dir:df(new B(.2,.85,-.7)),r:.9}],bp=[df(new B(-.4,1,.5)),df(new B(.1,1,.75)),df(new B(-.7,.9,-.2)),df(new B(.45,1,.55)),..._p];function xp(e,t){let n=t.radius,r=t.center,i=new U;i.position.copy(r),e.add(i);let a=(e,t)=>{sp.copy(t).normalize(),op.setFromUnitVectors(ap,sp),e.quaternion.copy(op)},o=(e,t,r=0)=>{sp.copy(t).normalize(),e.position.copy(sp).multiplyScalar(n+r),a(e,sp),i.add(e)},s=0,c=(e,o)=>{let c=xd(hp(o,s),X.rock,1.05);c.children[0].castShadow=!0,c.children[0].receiveShadow=!0,sp.copy(e).normalize(),c.position.copy(sp).multiplyScalar(n+o*.35),a(c,sp),c.scale.set(1,.8,1.1);let l=new K(gp(o,s),vd(X.moss));c.add(l),i.add(c);let u=new K(new Ea(o*1.02,o*.94,.07,12),vd(X.path));u.receiveShadow=!0,u.position.copy(sp).multiplyScalar(n+.03),a(u,sp),u.scale.set(1,1,1.1),i.add(u),s+=1;let d=sp.clone().multiplyScalar(n+o*.35).add(r);t.addObstacle(d,o*.85)},l=xd(new q(n,n>50?144:72,n>50?104:52),X.ground,1.015);l.children[0].material=hd(X.ground),l.children[0].receiveShadow=!0,i.add(l);let u=cp(n+.05,.44*Bd,X.meadow);a(u,df(new B(.15,1,.35))),i.add(u);let d=vf/n,f=cp(n+.02,d*1.05,X.path);a(f,_f),i.add(f);let p=cp(n+.03,d,X.yard);a(p,_f),i.add(p);let m=16/n,h=cp(n+.06,m*1.12,X.sand);a(h,gf),i.add(h);let g=cp(n+.08,m,X.sea);a(g,gf),i.add(g);let _=cp(n+.1,12/16*m,X.seaDeep);a(_,gf),i.add(_);let v=t.sea&&t.sea.island;if(v){let e=cp(n+Kd+.05,v.dryArc*1.05/n,X.sandHi);a(e,Sf),i.add(e),o(up(0),Sf,Kd)}for(let e=0;e<3;e++)o(up(e+1),hf(gf,16.96,e/3*Math.PI*2+.6),0);let y=bp.length-_p.length;for(let e=0;e<bp.length;e++)o(e<y?lp(e):dp(e),bp[e],0);let b=[df(new B(-.15,1,.55)),df(new B(.28,1,.62)),df(new B(-.5,1,.2))],x=[X.coral,X.yellow,X.pink];for(let e=0;e<b.length;e++){let t=new U,n=xd(new Ea(.05,.06,.7,8),X.grass,1.08);n.position.y=.35,t.add(n);let r=xd(new q(.26,14,12),x[e%x.length],1.08);r.scale.set(1,.55,1),r.position.y=.72,t.add(r);let i=new K(new q(.12,10,8),vd(X.yellowSoft));i.position.y=.78,t.add(i),o(t,b[e],0)}for(let{dir:e,r:t}of yp)c(e,t);for(let{dir:e,r:t}of vp)c(e,t);let S=wp(i,t,a);o(Sp(),xf(),0);let C=Nf();for(let e=0;e<C.length;e++)Cp(i,t,a,o,C[e],Mf[e]);return{group:i,nestDir:S.dir,nestPos:S.pos}}function Sp(){let e=new U,t=xd(new Ea(.16,.2,1.1,9),X.trunk,1.06);t.position.y=.55,e.add(t);for(let t of[-1,1]){let n=xd(new Ea(.11,.14,.9,8),X.trunk,1.06);n.position.set(t*.22,1.45,0),n.rotation.z=-t*.42,e.add(n)}let n=new K(new q(.5,10,8),vd(X.coralSoft));return n.scale.set(.9,.12,.14),n.position.y=1.85,e.add(n),e}function Cp(e,t,n,r,i,a){let o=t.radius,s=4/o,c=Hf(a),l=new K(new q(o+.07,26,14,0,Math.PI*2,0,s),vd(c.bed));l.receiveShadow=!0,n(l,i),e.add(l);let u=new U;if(a===`kisel`){let t=new K(new q(o+.09,22,12,0,Math.PI*2,0,s*.6),vd(c.core));n(t,i),e.add(t);for(let e=0;e<3;e++){let t=xd(new q(.55,12,9),c.accent,1.06);t.scale.set(1.2,.45,1.2),t.position.set(Math.cos(e/3*6.28)*2.2,.1,Math.sin(e/3*6.28)*2.2),u.add(t)}}else if(a===`popryg`){let e=xd(new q(1.5,16,12),c.core,1.05);e.scale.set(1.35,.62,1.35),e.position.y=.35,u.add(e);for(let e=0;e<3;e++){let t=new K(new oo(.75-e*.16,.11,6,16),vd(c.accent));t.rotation.x=Math.PI/2,t.position.y=1.05+e*.34,u.add(t)}}else if(a===`lipuchka`){let e=xd(new q(1.25,16,12),c.core,1.05);e.position.y=1,u.add(e);let t=vd(c.accent);for(let e=0;e<7;e++){let n=new K(new Da(.1,1.4,5),t);n.geometry.translate(0,.7,0);let r=new U;r.position.y=1,r.rotation.y=e/7*6.28,r.rotation.z=.5+e%3*.18,r.add(n),u.add(r)}}else{let e=new K(new q(.9,14,10),vd(X.burrow));e.scale.set(1.1,.35,1.1),e.position.set(-.6,.12,0),u.add(e);for(let e=0;e<3;e++){let t=xd(new q(.85-e*.12,14,11),c.accent,1.06);t.position.set(1.15+e*.1,.75+e*.45,(e-1)*.35),u.add(t)}}r(u,i,0)}function wp(e,t,n){let r=t.radius,i=t.center,a=yf,o=2.86,s=o/r,c=new B(-a.z,0,a.x);c.lengthSq()<1e-5&&c.set(1,0,0),c.normalize();let l=new B().crossVectors(a,c).normalize(),u=(e,t,n)=>{let r=s*e,i=Math.cos(r),o=Math.sin(r);return n.copy(a).multiplyScalar(i).addScaledVector(c,o*Math.cos(t)).addScaledVector(l,o*Math.sin(t)).normalize()},d=new B,f=new K(new q(r+.07,30,16,0,Math.PI*2,0,s*1.08),vd(X.nestBed));f.receiveShadow=!0,n(f,a),e.add(f);let p=new K(new q(r+.09,26,14,0,Math.PI*2,0,s*.66),vd(X.nestCore));n(p,a),e.add(p);let m=ip(`nest`,{scale:o});m.position.copy(a).multiplyScalar(r+.06),n(m,a),e.add(m);let h=.5;for(let e=0;e<12;e++){u(1,e/12*Math.PI*2,d);let n=d.clone().multiplyScalar(r+h*.3).add(i);t.addObstacle(n,h*.55)}let g=vd(X.grass);for(let t of[Math.PI*.3,Math.PI*1.15]){u(1.02,t,d);let i=new K(new Da(.06,.7,6),g);i.geometry.translate(0,.35,0),i.position.copy(d).multiplyScalar(r+.02),n(i,d),i.rotation.x+=.25,e.add(i)}let _=ip(`lantern`);return u(1.24,Math.PI*1.62,d),_.position.copy(d).multiplyScalar(r),n(_,d),e.add(_),{dir:a.clone(),pos:a.clone().multiplyScalar(r).add(i)}}function Tp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new kr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ep(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ep(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Ep(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new hr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Dp(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${~~(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function Op(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var kp=1/120,Ap=6,jp=8,Mp=.02,Np=.005,Pp=6,Fp=.25,Ip=-6.5,Lp=.986,Rp=.45;function zp(e,t=1){let n=(1+Math.sqrt(5))/2,r=[[-1,n,0],[1,n,0],[-1,-n,0],[1,-n,0],[0,-1,n],[0,1,n],[0,-1,-n],[0,1,-n],[n,0,-1],[n,0,1],[-n,0,-1],[-n,0,1]].map(e=>new B(e[0],e[1],e[2])),i=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let e=0;e<t;e++){let e=new Map,t=(t,n)=>{let i=t<n?t+`_`+n:n+`_`+t;if(e.has(i))return e.get(i);let a=r[t].clone().add(r[n]).multiplyScalar(.5),o=r.length;return r.push(a),e.set(i,o),o},n=[];for(let[e,r,a]of i){let i=t(e,r),o=t(r,a),s=t(a,e);n.push([e,i,s],[r,o,i],[a,s,o],[i,o,s])}i=n}return r=r.map(t=>t.normalize().multiplyScalar(e)),{verts:r,faces:i}}var Bp=class{constructor(e,t,n=2,r={}){this.scene=e,this.radius=n,this.volumeUnits=r.volumeUnits??n**3,this.particleRadius=r.particleRadius??.22,this.shellStiffness=r.shellStiffness??Mp,this.centerStiffness=r.centerStiffness??Np,this.pressureK=r.pressureK??Pp,this.shellStiffScale=1,this.velDamp=r.velDamp??Lp,this.gravityCenter=r.gravityCenter??null,this.gravityStrength=r.gravityStrength??Math.abs(Ip),this.gravityFalloffR=r.gravityFalloffR??null,this.gravityFalloffP=r.gravityFalloffP??2,this.waterZone=r.waterZone??null,this.gelColor=r.gelColor??16753592,this.coreColor=r.coreColor??16726883,this.outlineColor=r.outlineColor??3809072,this.gelOpacity=r.gelOpacity??.8,this.externalFace=r.externalFace??!1,this.subdivisions=r.subdivisions??2;let{verts:i,faces:a}=zp(n,this.subdivisions);this.faces=a,this.shellCount=i.length,this.pos=[],this.prev=[],this.ext=[];for(let e of i){let n=e.clone().add(t);this.pos.push(n),this.prev.push(n.clone()),this.ext.push(new B)}this.centerIdx=this.pos.length,this.pos.push(t.clone()),this.prev.push(t.clone()),this.ext.push(new B);let o=new Set;this.springs=[];let s=(e,t,n,r)=>{let i=e<t?e+`_`+t:t+`_`+e;o.has(i)||(o.add(i),this.springs.push({a:e,b:t,rest:this.pos[e].distanceTo(this.pos[t]),stiff:n,shell:r}))};for(let[e,t,n]of a)s(e,t,this.shellStiffness,!0),s(t,n,this.shellStiffness,!0),s(n,e,this.shellStiffness,!0);for(let e=0;e<this.shellCount;e++)s(e,this.centerIdx,this.centerStiffness,!1);this.restVolume=this._volume(),this.com=t.clone(),this.prevCom=t.clone(),this.velocity=new B,this.compression=0,this.grabActive=!1,this.grabParticles=[],this.grabLook=null,this.grabPoint=new B,this.grabStiff=0,this.grabbedMask=null,this.neckSoft=r.neckSoft??.12,this.returnRadius=r.returnRadius??null,this.returnStrength=r.returnStrength??1.5,this._buildMesh(),this._t1=new B,this._t2=new B,this._t3=new B,this._n=new B,this._up=new B(0,1,0),this._right=new B,this._dir=new B,this._acc=0,this._volGrad=[];for(let e=0;e<this.shellCount;e++)this._volGrad.push(new B)}_projectVolume(e){let t=this._volume(),n=this.restVolume-t;if(Math.abs(n)<1e-6*this.restVolume)return;for(let e of this._volGrad)e.set(0,0,0);for(let[e,t,n]of this.faces)this._volGrad[e].addScaledVector(this._t1.crossVectors(this.pos[t],this.pos[n]),1/6),this._volGrad[t].addScaledVector(this._t1.crossVectors(this.pos[n],this.pos[e]),1/6),this._volGrad[n].addScaledVector(this._t1.crossVectors(this.pos[e],this.pos[t]),1/6);let r=1e-9;for(let e of this._volGrad)r+=e.lengthSq();let i=e*n/r;for(let e=0;e<this.shellCount;e++)this.pos[e].addScaledVector(this._volGrad[e],i)}_volume(){let e=0;for(let[t,n,r]of this.faces){let i=this.pos[t],a=this.pos[n],o=this.pos[r];e+=i.x*(a.y*o.z-o.y*a.z)-i.y*(a.x*o.z-o.x*a.z)+i.z*(a.x*o.y-o.x*a.y)}return e/6}_buildMesh(){this.group=new U;let e=new q(this.radius,26,18);e.deleteAttribute(`uv`),e.deleteAttribute(`normal`),this.geo=Dp(e);let t=vd(this.gelColor,{transparent:!0,opacity:this.gelOpacity,depthWrite:!1});this.mesh=new K(this.geo,t),this.mesh.castShadow=!0,this.mesh.renderOrder=2,this.group.add(this.mesh);let n=new ai({color:this.outlineColor,side:1});if(this.outline=new K(this.geo,n),this.outline.scale.setScalar(1.04),this.outline.renderOrder=0,this.group.add(this.outline),this.core=new K(new q(this.radius*.46,16,12),vd(this.coreColor)),this.core.renderOrder=1,this.group.add(this.core),this.eyeWhites=[],this.eyePupils=[],!this.externalFace){let e=new xo({color:16777215}),t=new ai({color:1710638});for(let n of[-1,1]){let r=new K(new q(.34,14,12),e),i=new K(new q(.17,12,10),t);r.userData.side=n,r.renderOrder=3,i.renderOrder=4,this.eyeWhites.push(r),this.eyePupils.push(i),this.group.add(r,i)}}this.front=new B(0,0,1),this.scene.add(this.group),this._bindMesh()}_bindMesh(){let e=this.geo.attributes.position,t=e.count;this.binds=Array(t);let n=new B;for(let r=0;r<t;r++){n.fromBufferAttribute(e,r).add(this.com);let t=[];for(let e=0;e<this.shellCount;e++)t.push({j:e,d:n.distanceTo(this.pos[e])});t.sort((e,t)=>e.d-t.d);let i=t.slice(0,6),a=this.radius*.12,o=0;for(let e of i)e.w=1/(e.d*e.d+a*a*4),o+=e.w;for(let e of i)e.w/=o;this.binds[r]=i}}clearForces(){for(let e of this.ext)e.set(0,0,0)}addWind(e){for(let t=0;t<this.shellCount;t++)this.ext[t].add(e)}addPointerPull(e,t,n){let r=this._t1;for(let i=0;i<this.shellCount;i++){r.copy(e).sub(this.pos[i]);let a=r.length();if(a>t)continue;let o=1-a/t;r.multiplyScalar(n*o/(a+.001));let s=n;r.length()>s&&r.setLength(s),this.ext[i].add(r)}}beginGrab(e,t=5){let n=[];for(let t=0;t<this.shellCount;t++)n.push({i:t,d:e.distanceToSquared(this.pos[t])});n.sort((e,t)=>e.d-t.d),this.grabParticles=n.slice(0,t).map(e=>e.i),this.grabActive=!0,this.grabbedMask?this.grabbedMask.fill(0):this.grabbedMask=new Uint8Array(this.pos.length);for(let e of this.grabParticles)this.grabbedMask[e]=1}pullGrab(e,t=9){if(!this.grabActive)return;let n=this._t1,r=t*1.25;for(let i of this.grabParticles){n.copy(e).sub(this.pos[i]);let a=n.length(),o=t*Math.min(a,1.2);n.multiplyScalar(o/(a+.001)),n.length()>r&&n.setLength(r),this.ext[i].add(n)}this.grabLook=e}setGrabTarget(e,t=.5){this.grabPoint.copy(e),this.grabStiff=t,this.grabLook=e}endGrab(){this.grabActive=!1,this.grabStiff=0,this.grabLook=null,this.grabbedMask&&this.grabbedMask.fill(0)}addVelocity(e){for(let t=0;t<=this.centerIdx;t++)this.prev[t].addScaledVector(e,-.008333333333333333)}stretchAlong(e,t){let n=Math.hypot(e.x,e.y,e.z)||1,r=e.x/n,i=e.y/n,a=e.z/n,o=this.shellCount,s=0;for(let e=0;e<o;e++){let t=this.pos[e];s+=(t.x-this.com.x)*r+(t.y-this.com.y)*i+(t.z-this.com.z)*a}s/=o;for(let e=0;e<o;e++){let n=this.pos[e],o=t*((n.x-this.com.x)*r+(n.y-this.com.y)*i+(n.z-this.com.z)*a-s)*kp;this.prev[e].x-=r*o,this.prev[e].y-=i*o,this.prev[e].z-=a*o}}hop(e){for(let t=0;t<=this.centerIdx;t++)this.prev[t].y-=e*(.6+Math.random()*.4)*kp}_step(e){let t=this._volume(),n=this.pressureK*(this.restVolume-t)/this.restVolume;if(n!==0)for(let[e,t,r]of this.faces){let i=this.pos[e],a=this.pos[t],o=this.pos[r];this._t1.subVectors(a,i),this._t2.subVectors(o,i),this._n.crossVectors(this._t1,this._t2),this._n.multiplyScalar(n/6),this.ext[e].add(this._n),this.ext[t].add(this._n),this.ext[r].add(this._n)}let r=this.gravityCenter,i=this.gravityStrength,a=this.waterZone,o=a?a.center:null,s=a?a.drag/kp:0;for(let e=0;e<=this.centerIdx;e++){let t=this.pos[e],n=this.prev[e],c=(t.x-n.x)*this.velDamp,l=(t.y-n.y)*this.velDamp,u=(t.z-n.z)*this.velDamp;n.copy(t);let d=this.ext[e].x,f=this.ext[e].y,p=this.ext[e].z;if(r){let e=r.x-t.x,n=r.y-t.y,a=r.z-t.z,o=Math.sqrt(e*e+n*n+a*a)||1e-6,s=this.gravityFalloffR,c=s!==null&&o>s?i*(s/o)**+this.gravityFalloffP/o:i/o;this.returnRadius&&o>this.returnRadius&&(c+=this.returnStrength*(o-this.returnRadius)/o),d+=e*c,f+=n*c,p+=a*c}else f+=Ip;if(a){let e=t.x-o.x,n=t.y-o.y,r=t.z-o.z,i=Math.sqrt(e*e+n*n+r*r)||1e-6;if(i<a.level&&(e*a.dir.x+n*a.dir.y+r*a.dir.z)/i>a.cosAng){let t=Math.min(a.level-i,a.maxDepth),o=a.buoyancy*t/(a.maxDepth*i);d+=e*o,f+=n*o,p+=r*o,d-=c*s,f-=l*s,p-=u*s}}let m=c+d*kp*kp,h=l+f*kp*kp,g=u+p*kp*kp,_=m*m+h*h+g*g;if(_>Rp*Rp){let e=Rp/Math.sqrt(_);m*=e,h*=e,g*=e}t.x+=m,t.y+=h,t.z+=g}for(let t=0;t<jp;t++){if(this.grabActive&&this.grabStiff>0){let e=this.grabPoint,t=this.grabStiff;for(let n of this.grabParticles){let r=this.pos[n];r.x+=(e.x-r.x)*t,r.y+=(e.y-r.y)*t,r.z+=(e.z-r.z)*t}}let n=this.grabActive?this.grabbedMask:null;for(let e of this.springs){let t=this.pos[e.a],r=this.pos[e.b],i=r.x-t.x,a=r.y-t.y,o=r.z-t.z,s=Math.sqrt(i*i+a*a+o*o)||1e-6,c=n&&(n[e.a]||n[e.b])?this.neckSoft:1,l=(s-e.rest)/s*.5*e.stiff*this.shellStiffScale*c,u=i*l,d=a*l,f=o*l;t.x+=u,t.y+=d,t.z+=f,r.x-=u,r.y-=d,r.z-=f}if(this._projectVolume(Fp),e){let n=t===jp-1;for(let t=0;t<=this.centerIdx;t++)e.resolveParticle(this.pos[t],this.prev[t],this.particleRadius,n)}}}update(e,t){this._acc+=Math.min(e,.05);let n=0;for(;this._acc>=kp&&n<Ap;)this._step(t),this._acc-=kp,n++;this.prevCom.copy(this.com),this.com.set(0,0,0);for(let e=0;e<this.shellCount;e++)this.com.add(this.pos[e]);this.com.multiplyScalar(1/this.shellCount),e>0&&this.velocity.copy(this.com).sub(this.prevCom).multiplyScalar(1/e);let r=this._volume();this.compression=(this.restVolume-r)/this.restVolume,this._syncMesh()}_syncMesh(){let e=this.geo.attributes.position,t=this._t1;for(let n=0;n<e.count;n++){t.set(0,0,0);for(let e of this.binds[n])t.addScaledVector(this.pos[e.j],e.w);e.setXYZ(n,t.x-this.com.x,t.y-this.com.y,t.z-this.com.z)}e.needsUpdate=!0,this.geo.computeVertexNormals(),this.group.position.copy(this.com),this._t2.copy(this.pos[this.centerIdx]).sub(this.com),this.core.position.copy(this._t2),this.externalFace||this._updateEyes()}surfaceAlong(e,t,n){let r=Math.hypot(e.x,e.y,e.z)||1,i=e.x/r,a=e.y/r,o=e.z/r,s=0,c=-2;for(let e=0;e<this.shellCount;e++){let t=this.pos[e].x-this.com.x,n=this.pos[e].y-this.com.y,r=this.pos[e].z-this.com.z,l=Math.hypot(t,n,r)||1,u=(t*i+n*a+r*o)/l;u>c&&(c=u,s=e)}return n.set(this.pos[s].x-this.com.x+i*t,this.pos[s].y-this.com.y+a*t,this.pos[s].z-this.com.z+o*t),n}_updateEyes(){let e=this._t3.copy(this.velocity);if(e.y=0,e.lengthSq()>.05&&(e.normalize(),this.front.lerp(e,.12).normalize()),this.grabLook){let e=this._t3.copy(this.grabLook).sub(this.com);e.y=0,e.lengthSq()>.02&&(e.normalize(),this.front.lerp(e,.3).normalize())}let t=this._right.crossVectors(this._up,this.front).normalize();for(let e=0;e<2;e++){let n=this.eyeWhites[e].userData.side,r=this._dir.copy(this.front).addScaledVector(t,.42*n).addScaledVector(this._up,.34).normalize(),i=0,a=-2;for(let e=0;e<this.shellCount;e++){let t=this.pos[e].x-this.com.x,n=this.pos[e].y-this.com.y,o=this.pos[e].z-this.com.z,s=Math.hypot(t,n,o)||1,c=(t*r.x+n*r.y+o*r.z)/s;c>a&&(a=c,i=e)}let o=this._t2.copy(this.pos[i]).sub(this.com).addScaledVector(r,.16);this.eyeWhites[e].position.copy(o),this.eyePupils[e].position.copy(o).addScaledVector(r,.26)}}dispose(){this.scene.remove(this.group),this.geo.dispose()}},Vp=.5,Hp=1.3,Up={shellScale:1,pressureMul:1},Wp={restMul:1,jumpUpMul:1,jumpTangMul:1,idleMul:1,energyDecayMul:1,sleepTrigger:.2,lowEnergy:.3,clingy:!1,shy:!1};function Gp(e,t,n,r,i={},a={}){let o={...Up,...i};return o.shellScale=Math.min(Hp,Math.max(Vp,o.shellScale)),{id:e,name:t,emoji:n,palette:r,body:o,brain:{...Wp,...a}}}var Kp=Gp(`neutral`,`Обычный`,`🙂`,{gel:16769610,core:16773280,lid:16173375,outline:5915664}),qp={kisel:Gp(`kisel`,`Кисель`,`🍮`,{gel:16763299,core:16773341,lid:16101763,outline:7028509},{shellScale:.6,pressureMul:.75},{restMul:1.6,jumpUpMul:.75,jumpTangMul:.8,idleMul:1.8,energyDecayMul:.8,sleepTrigger:.3,lowEnergy:.45}),popryg:Gp(`popryg`,`Попрыгун`,`⚡`,{gel:13168730,core:15925184,lid:11460170,outline:4151824},{shellScale:1.25,pressureMul:1.15},{restMul:.6,jumpUpMul:1.3,jumpTangMul:1.15,idleMul:.35,energyDecayMul:1.3}),lipuchka:Gp(`lipuchka`,`Липучка`,`💗`,{gel:16753602,core:16769260,lid:16092080,outline:5902384},{},{restMul:.9,clingy:!0}),dichok:Gp(`dichok`,`Дичок`,`🌱`,{gel:10733823,core:14740991,lid:9155573,outline:1915499},{},{shy:!0})},Jp=6041378,Yp=class{constructor(e,t,n,r=2.2,i=Kp){this.world=t,this.traits=i,this.id=i.id,this.brain=null;let a=i.palette;this.body=new Bp(e,n.clone(),r,{subdivisions:2,gravityCenter:t.center,gravityStrength:6.5,returnRadius:t.radius*5,returnStrength:1.5,externalFace:!0,volumeUnits:r**3,gelColor:a.gel,coreColor:a.core,outlineColor:a.outline,gelOpacity:.82,waterZone:t.waterZone??null}),this.body.core.material.emissive=new W(a.gel),this.body.core.material.emissiveIntensity=.5,this.body.core.scale.setScalar(.78),this.basePressureK=this.body.pressureK,this.body.pressureK=this.basePressureK*i.body.pressureMul,this.body.shellStiffScale=i.body.shellScale,this.group=this.body.group,this.R=r,this.up=new B(0,1,0),this.front=new B(0,0,1),this.right=new B(1,0,0),this.faceDir=new B(0,.4,1).normalize(),this._fr=new B,this._fu=new B,this.faceRig=new U,this.faceR=r,this.t=0,this.blinkTimer=2+Math.random()*3,this.blink=0,this.lidClose=0,this.mouthOpen=0,this.yawnTimer=10+Math.random()*8,this.yawn=0,this.squeeze=0,this.sleepiness=0,this.asleepTarget=0,this.sleep=0,this.sleepFaceDir=new B(0,1,0),this.breathPhase=0,this.grabbed=!1,this.grabTime=0,this.surprise=0,this.joy=0,this.landSquint=0,this.eyeScale=1,this.flying=!1,this.moodExcited=0,this.moodSad=0,this.angry=0,this.sick=0,this._sickMix=0,this.mouthDrive=0,this.sproutPerk=0,this.lookTarget=null,this.landImpact=0,this.prevRadial=0,this.wasAir=!1,this.landCooldown=0,this._m=new H,this._x=new B,this._y=new B,this._z=new B,this._p=new B,this._d=new B,this._tf=new B,this._buildFace(),this.isActive=!1}setActive(e){this.isActive=!!e}get com(){return this.body.com}_setBasis(e,t,n,r){this._z.copy(n).normalize(),this._x.crossVectors(r,this._z),this._x.lengthSq()<1e-5&&this._x.set(1,0,0),this._x.normalize(),this._y.crossVectors(this._z,this._x).normalize(),this._m.makeBasis(this._x,this._y,this._z),e.position.copy(t),e.quaternion.setFromRotationMatrix(this._m)}_buildFace(){let e=this.group;e.add(this.faceRig);let t=(e,t,n,r,i=0,a=!0)=>{let o=new B(t,n,r).normalize();if(e.position.copy(o).multiplyScalar(this.R+i),a){let t=o.clone(),n=new B().crossVectors(new B(0,1,0),t);n.lengthSq()<1e-5&&n.set(1,0,0),n.normalize();let r=new B().crossVectors(t,n).normalize();e.quaternion.setFromRotationMatrix(new H().makeBasis(n,r,t))}this.faceRig.add(e)},n=this.R*.095,r=new ai({color:2825748}),i=new ai({color:16777215}),a=new xo({color:this.traits.palette.lid});this._lidMat=a,this.eyes=[];for(let e of[-1,1]){let o=new U,s=new K(new q(n,14,12),r);s.renderOrder=4;let c=new K(new q(n*.28,8,8),i);c.position.set(n*.3,n*.35,n*.75),c.renderOrder=5;let l=new U,u=new K(new q(n*1.25,16,10,0,Math.PI*2,0,Math.PI*.62),a);u.renderOrder=6,l.add(u),l.rotation.x=-1.45,o.add(s,c,l),t(o,.3*e,.16,1,n*.5,!1),this.eyes.push({rig:o,lidPivot:l,dot:s,side:e,wR:n})}let o=new ai({color:2825748});this.brows=[];for(let e of[-1,1]){let n=new K(new Ca(this.R*.19,this.R*.045,this.R*.03),o);n.renderOrder=6,n.visible=!1,t(n,.3*e,.34,1,this.R*.02,!1),this.brows.push({mesh:n,side:e,y0:n.position.y})}let s=new ai({color:Jp}),c=new U,l=new K(new oo(this.R*.09,this.R*.018,8,20,Math.PI),s);l.rotation.z=Math.PI,l.position.z=.02,l.renderOrder=4;let u=new K(new Ta(this.R*.085,20),s);u.position.z=.015,u.renderOrder=3;let d=new K(new Ta(this.R*.045,12),new ai({color:16743066}));d.position.set(0,-this.R*.03,.02),d.renderOrder=4,u.visible=!1,d.visible=!1,c.add(u,d,l),t(c,0,-.22,1,this.R*.03,!1),this.mouthRig=c,this.mouthO=u,this.mouthTongue=d,this.mouthSmile=l;let f=new ai({color:16751280,transparent:!0,opacity:.6});this.cheeks=[];for(let e of[-1,1]){let n=new K(new Ta(this.R*.12,16),f);n.renderOrder=3,t(n,.5*e,-.08,1,.045),this.cheeks.push({mesh:n,side:e})}let p=new xo({color:9099370});this.antennae=[];{let t=new K(new Ea(.035,.075,1,8),p);t.geometry.translate(0,.5,0);let n=new U;for(let e of[-1,1]){let t=new K(new q(.16,12,10),p);t.scale.set(.55,1,.3),t.position.set(e*.16,.12,0),t.rotation.z=-e*.7,n.add(t)}e.add(t,n),this.antennae.push({stalk:t,tip:n,az:0,len:.72,off:new B,vel:new B})}}_dir(e,t,n){return this._d.copy(this.front).multiplyScalar(e).addScaledVector(this.right,t).addScaledVector(this.up,n).normalize()}update(e,t){this.t+=e;let n=this.body;this.sleep+=(this.asleepTarget-this.sleep)*(1-Math.exp(-e*.9)),this.up.copy(this.com).sub(this.world.center).normalize(),this._d.copy(t.position).sub(this.com),this.camEl=R.clamp(this._d.dot(this.up)/(this._d.length()+1e-6),0,.85);let r=this._d.dot(this.up);if(this.front.copy(this._d).addScaledVector(this.up,-r),this.front.lengthSq()<1e-4&&this.front.set(1,0,0),this.front.normalize(),this.lookTarget){this._d.copy(this.lookTarget).sub(this.com);let e=this._d.dot(this.up);this._d.addScaledVector(this.up,-e),this._d.lengthSq()>1e-4&&this.front.copy(this._d).normalize()}this.right.crossVectors(this.up,this.front).normalize(),this._d.copy(this.front).addScaledVector(this.up,.3+this.camEl*.9).normalize(),this.sleep>.001&&this._d.lerp(this.sleepFaceDir,this.sleep).normalize();let i=5*(1-this.sleep)+.6*this.sleep;this.faceDir.lerp(this._d,1-Math.exp(-e*i)).normalize();let a=1e-6,o=0,s=1e-6,c=0;for(let e=0;e<n.shellCount;e++){this._x.copy(n.pos[e]).sub(this.com);let t=this._x.length()+1e-6,r=this._x.dot(this.faceDir)/t;if(r>.55){let e=(r-.55)*(r-.55);a+=e,o+=t*e}let i=this._x.dot(this.up)/t;if(i>.55){let e=(i-.55)*(i-.55);s+=e,c+=t*e}}this.faceR+=((o>0?o/a:this.R)-this.faceR)*Math.min(1,e*10),this.crownR=(this.crownR??this.R)+((c>0?c/s:this.R)-(this.crownR??this.R))*Math.min(1,e*10);let l=this.com.distanceTo(this.world.center)-this.world.radius,u=R.clamp((l-this.R*.9)/this.R,0,1),d=n.velocity.length(),f=Math.max(0,n.compression),p=n.velocity.dot(this.up);if(this.landCooldown=Math.max(0,this.landCooldown-e),u>.5&&(this.wasAir=!0),this.wasAir&&this.landCooldown===0&&l<this.R*.7&&this.prevRadial<-2&&p>this.prevRadial+1.5){let e=R.clamp(-this.prevRadial/12,.25,1);this.landImpact=e,this.landSquint=1,this.joy=1.5,this.surprise=0,this.wasAir=!1,this.landCooldown=.4}this.prevRadial=p,this.grabTime=this.grabbed?this.grabTime+e:0,this.surprise=Math.max(0,this.surprise-e*1.5),this.joy=Math.max(0,this.joy-e),this.landSquint=Math.max(0,this.landSquint-e*3.5);let m=this.grabbed&&d<.7?R.clamp((this.grabTime-1.2)*.4,0,.32):0;this.blinkTimer-=e,this.blinkTimer<=0&&this.blink===0&&(this.blink=.001,this.blinkTimer=3+Math.random()*3),this.blink>0&&(this.blink+=e*7,this.blink>=2&&(this.blink=0));let h=this.blink===0?0:Math.sin(Math.min(this.blink,1)*Math.PI);this.yawnTimer-=e,this.yawnTimer<=0&&this.yawn===0&&this.sleep<.5&&(this.yawn=.001,this.yawnTimer=this.sleepiness>.3?4+Math.random()*4:12+Math.random()*10),this.yawn>0&&(this.yawn+=e*.9,this.yawn>=2&&(this.yawn=0));let g=this.yawn===0?0:Math.sin(Math.min(this.yawn,1)*Math.PI),_=d<.25&&f<.02&&u<.05?.28:0,v=Math.max(h,this.squeeze,f*4,_,g*.6,this.landSquint,m,this.sleepiness*.55,this.sleep);this.lidClose+=(v-this.lidClose)*Math.min(1,e*16),this.mouthDrive=Math.max(0,this.mouthDrive-e*2),this.sproutPerk=Math.max(0,this.sproutPerk-e*1.5);let y=Math.max(u*.9,f*5,this.squeeze*.8,this.surprise*.35,this.mouthDrive,+!!this.flying)*(1-this.sleep);y=Math.max(y,g);let b=Math.min(1,y);this.mouthOpen+=(b-this.mouthOpen)*Math.min(1,e*14);let x=1+.4*Math.max(this.surprise,u*.8,+!!this.flying)+.3*this.moodExcited;this.eyeScale+=(x-this.eyeScale)*Math.min(1,e*12),this.squeeze=Math.max(0,this.squeeze-e*2.5);let S=1.6*(1-.5*this.sleep),C=.018*(1+this.sleep)*(1-u);this.breathPhase+=e*S;let w=1+Math.sin(this.breathPhase)*C;this.group.scale.setScalar(w),this.sick=Math.max(0,this.sick-e);let T=+(this.sick>0);if(this._sickMix!==T){this._sickMix+=(T-this._sickMix)*Math.min(1,e*6),Math.abs(this._sickMix-T)<.01&&(this._sickMix=T);let t=this.traits.palette;this._c1=this._c1||new W,this._c2=this._c2||new W(9428074),this._c1.setHex(t.gel).lerp(this._c2,this._sickMix*.75),this.body.mesh.material.color.copy(this._c1)}this._layoutFace(h,e)}_layoutFace(e,t){this._setBasis(this.faceRig,this._p.set(0,0,0),this.faceDir,this.up),this.faceRig.scale.setScalar(this.faceR/this.R);for(let e of this.eyes)e.lidPivot.rotation.x=R.lerp(-1.45,.55,this.lidClose),e.dot.scale.setScalar(this.eyeScale);for(let e of this.brows){let t=R.clamp(this.angry,0,1);e.mesh.visible=t>.02,e.mesh.visible&&(e.mesh.rotation.z=-e.side*.55*t,e.mesh.scale.set(1,1,1),e.mesh.position.y=e.y0-this.R*.055*t)}{let e=this.mouthOpen,t=R.clamp(this.joy,0,1),n=e>.3;if(this.mouthSmile.visible=!n,this.mouthO.visible=n,this.mouthTongue.visible=n&&e>.45,n){let t=.55+e*.75;this.mouthO.scale.set(t,t*(.9+e*.25),1),this.mouthTongue.scale.setScalar(.6+e*.5)}else{let e=1-.45*this.sleep;this.mouthSmile.scale.set((1+t*.35)*e,(1+t*.2)*e,1)}}this._d.copy(this.body.velocity);let n=this._d.dot(this.up);this._d.addScaledVector(this.up,-n).multiplyScalar(-.12),this._d.addScaledVector(this.up,-n*.05);for(let e of this.antennae){this._p.copy(this.up).addScaledVector(this.faceDir,.15).normalize().multiplyScalar((this.crownR??this.R)-.02);let n=this._d;e.vel.addScaledVector(this._x.copy(n).sub(e.off),Math.min(1,t*9)),e.vel.multiplyScalar(.86),e.off.addScaledVector(e.vel,1),this._y.copy(this.up).addScaledVector(e.off,1),this.moodSad>.001&&(this._tf.copy(this.faceDir).addScaledVector(this.up,-this.faceDir.dot(this.up)),this._tf.lengthSq()>1e-6&&this._tf.normalize(),this._y.addScaledVector(this._tf,this.moodSad*.6).addScaledVector(this.up,-this.moodSad*.32)),this._y.normalize();let r=1+this.moodExcited*.25+this.sproutPerk*.45;this._m.identity();let i=this._z.set(1,0,0);this._x.crossVectors(this._y,i),this._x.lengthSq()<1e-5&&this._x.set(0,0,1),this._x.normalize(),this._z.crossVectors(this._x,this._y).normalize(),this._m.makeBasis(this._x,this._y,this._z);let a=e.len*r;e.stalk.position.copy(this._p),e.stalk.quaternion.setFromRotationMatrix(this._m),e.stalk.scale.set(1,a,1),e.tip.position.copy(this._p).addScaledVector(this._y,a),e.tip.quaternion.setFromRotationMatrix(this._m)}}poke(e=1){this.squeeze=Math.min(1,this.squeeze+e)}mouthPop(e=1){this.mouthDrive=Math.max(this.mouthDrive,Math.min(1,e))}sproutBoost(){this.sproutPerk=1}chomp(){this.mouthDrive=1,this.squeeze=.15,this.joy=Math.max(this.joy,1.2)}lookAt(e){this.lookTarget=e?this._look?this._look.copy(e):this._look=e.clone():null}mouthWorld(e){return this.mouthRig.getWorldPosition(e)}crownWorld(e){return e.copy(this.com).addScaledVector(this.up,this.crownR??this.R)}setTemperament(e){this.traits=e;let t=e.palette;this.body.mesh.material.color.setHex(t.gel),this.body.core.material.color.setHex(t.core),this.body.core.material.emissive.setHex(t.gel),this.body.outline.material.color.setHex(t.outline),this._lidMat.color.setHex(t.lid);let n=this.basePressureK*e.body.pressureMul;this.body.pressureK=n,this.brain&&this.brain._pressK0!=null&&(this.brain._pressK0=n),this.body.shellStiffScale=e.body.shellScale}setGrabbed(e){this.grabbed=e,e&&(this.surprise=1,this.grabTime=0,this.wasAir=!1)}dispose(){this.body.dispose()}};function Xp(e,t,n,r=0){let i=t.clone().normalize(),a=i.clone().multiplyScalar(n.floorRadius(i.clone().multiplyScalar(n.radius).add(n.center))+e.R+r).add(n.center),o=e.body,s=a.clone().sub(o.com);for(let e=0;e<o.pos.length;e++)o.pos[e].add(s),o.prev[e].add(s);return o.com.add(s),o.group&&o.group.position.copy(o.com),e}var Zp=(e,t,n)=>new W(e).lerp(new W(t),n).getHex(),Qp=[{id:`original`,name:`Голубой ручеёк`,description:`Исходный текучий слайм с мягким гребнем.`,color:null,shape:{width:1.1,skirt:.3,height:.76,crest:.18,crestX:.25,crestSpread:.38},face:{gap:.27,y:-.015,eyeX:.86,eyeY:1.2,mouthY:-.16,smileX:1,smileY:1},material:{roughness:.18,clearcoat:1,clearcoatRoughness:.13,emissiveIntensity:.11}},{id:`mint`,name:`Мятная лужица`,description:`Широкий низкий силуэт, маленькие глазки и влажный блеск.`,color:Zp(X.leafHi,X.sea,.38),shape:{width:1.3,skirt:.38,height:.58,crest:0,crestX:0,crestSpread:.38},face:{gap:.35,y:-.12,eyeX:.82,eyeY:.9,mouthY:-.25,smileX:1.25,smileY:.65,mouthOffset:.09},material:{roughness:.11,clearcoat:1,clearcoatRoughness:.08,emissiveIntensity:.09}},{id:`amber`,name:`Медовый купол`,description:`Высокий гладкий купол, близкие глазки и густой глянец.`,color:Zp(X.carrot,X.yellowSoft,.42),shape:{width:.92,skirt:.12,height:1.14,crest:0,crestX:0,crestSpread:.38},face:{gap:.21,y:.12,eyeX:.78,eyeY:1.45,mouthY:-.025,smileX:.8,smileY:1.15},material:{roughness:.1,clearcoat:1,clearcoatRoughness:.06,emissiveIntensity:.15}},{id:`lilac`,name:`Лиловая капля`,description:`Вытянутая капля с боковым гребнем и нежным перламутром.`,color:Zp(X.pink,X.seaDeep,.4),shape:{width:1.02,skirt:.2,height:.88,crest:.48,crestX:.42,crestSpread:.28},face:{gap:.25,y:.035,eyeX:.9,eyeY:1.3,mouthY:-.12,smileX:.85,smileY:1.25},material:{roughness:.3,clearcoat:.8,clearcoatRoughness:.22,emissiveIntensity:.13}},{id:`rose`,name:`Розовое желе`,description:`Круглое пухлое желе, большие глазки и мягкий сатиновый свет.`,color:Zp(X.pink,X.coralSoft,.25),shape:{width:1.13,skirt:.06,height:.97,crest:0,crestX:0,crestSpread:.38},face:{gap:.31,y:.01,eyeX:1.12,eyeY:1.5,mouthY:-.18,smileX:1.15,smileY:1.2},material:{roughness:.4,clearcoat:.55,clearcoatRoughness:.32,emissiveIntensity:.1}}];function $p(e){let t=e.attributes.position.count,n=[],r=new Map,i=[];function a(e,i){let a=e<i?`${e}:${i}`:`${i}:${e}`;return r.has(a)||(r.set(a,t+n.length),n.push([e,i])),r.get(a)}let o=e.index.array;for(let e=0;e<o.length;e+=3){let t=o[e],n=o[e+1],r=o[e+2],s=a(t,n),c=a(n,r),l=a(r,t);i.push(t,s,l,s,n,c,l,c,r,s,c,l)}let s=t+n.length,c=Array.from({length:s},()=>new Set);for(let e=0;e<i.length;e+=3){let[t,n,r]=i.slice(e,e+3);c[t].add(n).add(r),c[n].add(t).add(r),c[r].add(t).add(n)}let l=new kr;return l.setAttribute(`position`,new G(new Float32Array(s*3),3)),l.setAttribute(`color`,new G(new Float32Array(s*3),3)),l.setIndex(i),{geometry:l,edges:n,adjacent:c.map(e=>[...e]),sourceCount:t}}var em=class{constructor(e,t,n=`original`,{color:r,outlineColor:i}={}){this.colorOverride=r,this.outlineOverride=i,this.body=t,this.group=new U,this.group.name=`slime-01`,this.radius=t.radius,this.time=0,this.disposed=!1,this.up=new B(0,1,0),this.front=new B(0,0,1),this.right=new B(1,0,0),this._v=new B,this._dir=new B,this._basis=new H,this._faceUp=new B,this._lookFront=new B,this._lookRight=new B,this._lookUp=new B,this._faceRight=new B,this._base=new W(t.gelColor),this._light=this._base.clone().lerp(new W(1,1,1),.32),this._shade=this._base.clone().multiplyScalar(.9),this._color=new W,this._shell=$p(t.geo);let a=this._shell.geometry;this._smoothBuffer=new Float32Array(a.attributes.position.array.length);let o=new bo({vertexColors:!0,roughness:.18,metalness:0,clearcoat:1,clearcoatRoughness:.13,emissive:this._base,emissiveIntensity:.11});this.mesh=new K(a,o),this.mesh.name=`slime-shell`,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.group.add(this.mesh);let s=new ai({color:new W(t.outlineColor).multiplyScalar(.32)}),c=new ai({color:this._light}),l=new q(this.radius*.066,16,12),u=new q(this.radius*.02,10,8);this.eyes=[];for(let e of[-1,1]){let t=new U,n=new K(l,s);n.scale.set(.86,1.2,.6);let r=new K(u,c);r.position.set(-this.radius*.018,this.radius*.026,this.radius*.036),t.add(n,r),t.name=`slime-eye-${e}`,this.group.add(t),this.eyes.push({rig:t,eye:n,glint:r,side:e})}let d=new eo(new B(-this.radius*.08,0,0),new B(0,-this.radius*.1,this.radius*.008),new B(this.radius*.08,0,0));this.mouth=new K(new so(d,20,this.radius*.015,8,!1),s),this.mouth.name=`slime-smile`,this.group.add(this.mouth),this.setVariant(n),e.add(this.group)}setVariant(e){if(this.disposed)return this;let t=Qp.find(t=>t.id===e);if(!t)throw RangeError(`Unknown slime variant: ${e}`);this.variant=t,this._base.set(t.color??this.colorOverride??this.body.gelColor),this._light.copy(this._base).lerp(new W(1,1,1),.32),this._shade.copy(this._base).multiplyScalar(.9),Object.assign(this.mesh.material,t.material),this.mesh.material.emissive.copy(this._base);let n=new W(t.id===`original`?this.outlineOverride??this.body.outlineColor:X.skyNight).multiplyScalar(.32);this.mouth.material.color.copy(n);for(let{eye:e,glint:n}of this.eyes)e.scale.set(t.face.eyeX,t.face.eyeY,.6),n.material.color.copy(this._light);return this.mouth.scale.set(t.face.smileX,t.face.smileY,1),this}_placeFace(e,t,n,r,i){let a=i?this._dir.copy(this._lookFront).addScaledVector(this._lookRight,t).addScaledVector(this._lookUp,n).normalize():this._dir.copy(this.front).addScaledVector(this.right,t).addScaledVector(this.up,n).normalize(),o=this.mesh.geometry.attributes.position,s=0,c=0;for(let e=0;e<o.count;e++){this._v.fromBufferAttribute(o,e);let t=this._v.length(),n=Math.max(0,this._v.dot(a)/Math.max(t,1e-8)-.94)**2;s+=n,c+=n*t}c=s>0?c/s:this.radius,e.position.copy(a).multiplyScalar(c+r),this._faceRight.crossVectors(i?this._lookUp:this.up,a).normalize(),this._faceUp.crossVectors(a,this._faceRight).normalize(),this._basis.makeBasis(this._faceRight,this._faceUp,a),e.quaternion.setFromRotationMatrix(this._basis)}update(e,t=0,{squeeze:n=0,blob:r}={}){if(this.disposed)return;let i=this.body,a=this.radius,{shape:o,face:s}=this.variant;if(this.time+=Math.max(0,Math.min(t,.1)),this.group.position.copy(i.com),i.gravityCenter?this.up.copy(i.com).sub(i.gravityCenter).normalize():this.up.set(0,1,0),this._v.copy(e.position).sub(i.com),this._v.addScaledVector(this.up,-this._v.dot(this.up)),this._v.lengthSq()>1e-8&&this.front.copy(this._v).normalize(),this.front.addScaledVector(this.up,-this.front.dot(this.up)),this.front.lengthSq()<1e-8&&(this.front.set(+(Math.abs(this.up.x)<.8),Math.abs(this.up.x)<.8?0:1,0),this.front.addScaledVector(this.up,-this.front.dot(this.up))),this.front.normalize(),this.right.crossVectors(this.up,this.front).normalize(),r){this._lookFront.copy(r.faceDir).normalize(),this._lookRight.crossVectors(this.up,this._lookFront),this._lookRight.lengthSq()<1e-8&&this._lookRight.copy(this.right),this._lookRight.normalize(),this._lookUp.crossVectors(this._lookFront,this._lookRight).normalize(),this._base.set(this.variant.color??this.colorOverride??i.gelColor),this._base.lerp(r._c2??new W(X.leafHi),(r._sickMix??0)*.75),this._light.copy(this._base).lerp(new W(1,1,1),.32),this._shade.copy(this._base).multiplyScalar(.9),this.mesh.material.emissive.copy(this._base);for(let{glint:e}of this.eyes)e.material.color.copy(this._light);if(!this.brows){let e=new wa(a*.015,a*.1,4,8);this.brows=this.eyes.map(({side:t})=>{let n=new U,r=new K(e,this.mouth.material);return n.add(r),this.group.add(n),{rig:n,mesh:r,side:t}}),this.mouthO=new K(new q(a*.08,16,12),this.mouth.material),this.group.add(this.mouthO)}}let c=i.geo.attributes.position,l=this.mesh.geometry.attributes.position,u=this.mesh.geometry.attributes.color,d=1/0;for(let e=0;e<c.count;e++)this._v.fromBufferAttribute(c,e),d=Math.min(d,this._v.dot(this.up));for(let e=0;e<c.count;e++){this._v.fromBufferAttribute(c,e);let t=this._v.dot(this.right),n=this._v.dot(this.up),r=this._v.dot(this.front),i=n/a,s=Math.exp(-(((i+.45)/.4)**2)),f=o.width+o.skirt*s,p=a*o.crest*Math.exp(-((t/a-o.crestX)**2+(r/a)**2)/o.crestSpread)*R.smoothstep(i,.15,.75),m=d+(n-d)*o.height+p;this._v.copy(this.right).multiplyScalar(t*f).addScaledVector(this.up,m).addScaledVector(this.front,r*f),l.setXYZ(e,this._v.x,this._v.y,this._v.z);let h=R.smoothstep(i,-.6,1);this._color.copy(this._shade).lerp(this._base,.45+h*.55).lerp(this._light,h*.16),u.setXYZ(e,this._color.r,this._color.g,this._color.b)}for(let e=0;e<this._shell.edges.length;e++){let[t,n]=this._shell.edges[e],r=this._shell.sourceCount+e;l.setXYZ(r,(l.getX(t)+l.getX(n))/2,(l.getY(t)+l.getY(n))/2,(l.getZ(t)+l.getZ(n))/2),u.setXYZ(r,(u.getX(t)+u.getX(n))/2,(u.getY(t)+u.getY(n))/2,(u.getZ(t)+u.getZ(n))/2)}let f=l.array;for(let e of[.6,-.58,.6,-.58]){for(let t=0;t<l.count;t++){let n=this._shell.adjacent[t];for(let r=0;r<3;r++){let i=0;for(let e of n)i+=f[e*3+r];let a=t*3+r;this._smoothBuffer[a]=f[a]+e*(i/n.length-f[a])}}f.set(this._smoothBuffer)}let p=1/0;for(let e=0;e<l.count;e++)this._v.fromBufferAttribute(l,e),p=Math.min(p,this._v.dot(this.up));for(let e=0;e<l.count;e++)this._v.fromBufferAttribute(l,e).addScaledVector(this.up,d-p),l.setXYZ(e,this._v.x,this._v.y,this._v.z);l.needsUpdate=!0,u.needsUpdate=!0,this.mesh.geometry.computeVertexNormals(),this.mesh.geometry.computeBoundingSphere();let m=this.time%4.7,h=m>4.45?Math.sin((m-4.45)/.25*Math.PI):0,g=r?R.clamp(r.lidClose,0,1):Math.max(h,R.clamp(n,0,1)*.7);for(let{rig:e,eye:t,glint:n,side:i}of this.eyes){this._placeFace(e,i*s.gap,s.y,a*.036,r);let o=r?r.eyeScale:1;t.scale.x=s.eyeX*o,t.scale.y=s.eyeY*o*(1-g*.88),n.visible=g<.65}if(this._placeFace(this.mouth,0,s.mouthY,a*(s.mouthOffset??.042),r),r){let e=R.clamp(r.angry,0,1);for(let{rig:t,mesh:n,side:i}of this.brows)t.visible=e>.02,this._placeFace(t,i*s.gap,s.y+.17-.055*e,a*.05,r),n.rotation.z=Math.PI/2-i*.55*e;let t=r.mouthOpen,n=R.clamp(r.joy,0,1);this.mouth.visible=t<=.3,this.mouthO.visible=t>.3;let i=1-.45*r.sleep;this.mouth.scale.set(s.smileX*(1+n*.35)*i,s.smileY*(1+n*.2)*i,1),this._placeFace(this.mouthO,0,s.mouthY,a*(s.mouthOffset??.042),r);let o=.55+t*.75;this.mouthO.scale.set(o,o*(.9+t*.25),.35)}}dispose(){if(this.disposed)return;this.disposed=!0,this.group.removeFromParent();let e=new Set,t=new Set;this.group.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)});for(let t of e)t.dispose();for(let e of t)e.dispose()}};function tm(e,t,n){let r=new Map;for(let[i,a]of t.entries()){let t=new em(e,a.blob.body,Qp[i%Qp.length].id,{color:X.sea,outlineColor:X.skyNight});r.set(a,{view:t,visible:a.blob.group.visible}),a.slimeView=t,a.blob.group.visible=!1,t.update(n,0,{blob:a.blob})}return{update(e,t){for(let[n,{view:i}]of r)n.blob.group.visible=!1,n.alive&&i.update(e,t,{blob:n.blob})},pick(e,t){let n=r.get(t);if(!n)return null;n.view.mesh.updateWorldMatrix(!0,!1);let i=e.intersectObject(n.view.mesh,!1)[0];return i?i.distance:null},dispose(){for(let[e,{view:t,visible:n}]of r)t.dispose(),e.blob.group.visible=n,e.slimeView===t&&delete e.slimeView;r.clear()}}}var nm=R.degToRad(75),rm=.006,im=.98,am=class{constructor(e,t,{dist:n=34,minDist:r=6,maxDist:i=40}={}){this.camera=e,this.target=t.clone(),this.yaw=.5,this.pitch=.35,this.dist=n,this.minDist=r,this.maxDist=i,this.yawVel=0,this.pitchVel=0,this.dragging=!1,this._p=new B,this.apply()}startDrag(){this.dragging=!0,this.yawVel=0,this.pitchVel=0}endDrag(){this.dragging=!1}drag(e,t){let n=-e*rm,r=t*rm;this.yaw+=n,this.pitch=R.clamp(this.pitch+r,-nm,nm),this.yawVel=n,this.pitchVel=r}zoom(e){this.dist=R.clamp(this.dist+e,this.minDist,this.maxDist)}update(e){if(!this.dragging){this.yaw+=this.yawVel,this.pitch=R.clamp(this.pitch+this.pitchVel,-nm,nm);let t=im**(e*60);this.yawVel*=t,this.pitchVel*=t}this.apply()}apply(){let e=this._p,t=Math.cos(this.pitch),n=Math.sin(this.pitch);e.set(this.target.x+this.dist*t*Math.sin(this.yaw),this.target.y+this.dist*n,this.target.z+this.dist*t*Math.cos(this.yaw)),this.camera.position.copy(e),this.camera.up.set(0,1,0),this.camera.lookAt(this.target)}},om={berry:{id:`berry`,product:`berry`,seed:`seed`,icon:`🫐`,name:`Ягоды`,seedIcon:`🌰`,seedName:`Семечко`,yield:3,wildYield:2},carrot:{id:`carrot`,product:`carrot`,seed:`seedCarrot`,icon:`🥕`,name:`Морковка`,seedIcon:`🌱`,seedName:`Семечко моркови`,yield:2,wildYield:3}},sm=`berry`;function cm(e){return om[e]||om.berry}var lm={plot:{id:`plot`,icon:`🫐`,name:`Грядка ягод`,ready:!0,seed:`seed`,bush:!0,crop:`berry`,cost:25},plotCarrot:{id:`plotCarrot`,icon:`🥕`,name:`Грядка моркови`,ready:!0,seed:`seedCarrot`,bush:!0,crop:`carrot`,cost:25},pen:{id:`pen`,icon:`🏠`,name:`Загон`,ready:!0,seed:!1,bush:!1,trough:!0,cost:40},feedPen:{id:`feedPen`,icon:`🐔`,name:`Загон живой еды`,ready:!1},trap:{id:`trap`,icon:`🪤`,name:`Ловушка`,ready:!1}};function um(e){return Object.prototype.hasOwnProperty.call(lm,e)}function dm(e){let t=lm[e],n=t&&t.cost;return Number.isFinite(n)&&n>0?Math.floor(n):0}var fm=[`sprout`,`bush`,`ripen`,`ripe`],pm={sprout:60,bush:120,ripen:60,ripe:1/0},mm=(e,t=0)=>Number.isFinite(e)?e:t;function hm(e){return!!(e&&lm[e]&&lm[e].trough)}function gm(){let e={};for(let t of Object.keys(om))e[t]=0;return e}function _m(e,t){let n=gm();if(!hm(e))return n;let r=Number.isFinite(t)?{berry:t}:t;if(!r||typeof r!=`object`)return n;let i=0;for(let e of Object.keys(n)){let t=Math.max(0,Math.floor(mm(r[e],0))),a=Math.min(t,12-i);n[e]=a,i+=a}return n}function vm(e){let t={};for(let n of Object.keys(om)){let r=bm(e,n);r>0&&(t[n]=r)}return t}function ym(e){let t=e&&e.trough;if(!t||typeof t!=`object`)return 0;let n=0;for(let e of Object.keys(om))n+=Math.max(0,Math.floor(mm(t[e],0)));return n}function bm(e,t=sm){let n=e&&e.trough;return!n||typeof n!=`object`?0:Math.max(0,Math.floor(mm(n[cm(t).id],0)))}function xm(e,t=sm){return!e||!hm(e.building)||!om[t]||ym(e)>=12?!1:((!e.trough||typeof e.trough!=`object`)&&(e.trough=gm()),e.trough[t]=bm(e,t)+1,!0)}function Sm(e,t=null){if(!e||!hm(e.building))return!1;if(!e.trough||typeof e.trough!=`object`)return e.trough=gm(),!1;let n=t&&om[t]?[t]:Object.keys(om);for(let t of n){let n=bm(e,t);if(n>0)return e.trough[t]=n-1,!0}return!1}var Cm=class{constructor(e={}){this.wild=!!e.wild,this.kind=om[e.kind]?e.kind:sm;let t=this.wild?`ripe`:`sprout`,n=fm.includes(e.stage)?e.stage:t;this.wild&&n===`sprout`&&(n=`bush`),this.stage=n,this.t=Math.max(0,mm(e.t,0));let r=this.yield;this.n=this.stage===`ripe`?Math.min(r,Math.max(1,Math.floor(mm(e.n,r)))):0}get crop(){return cm(this.kind)}get product(){return this.crop.product}get yield(){let e=this.crop;return this.wild?e.wildYield:e.yield}get ripe(){return this.stage===`ripe`}get stageTime(){let e=pm[this.stage];return e===1/0?1/0:e*(this.wild?2:1)}advance(e){if(!Number.isFinite(e)||e<=0)return this;for(this.t+=e;;){let e=this.stageTime;if(!(this.t>=e))break;if(this.t-=e,this.stage=fm[fm.indexOf(this.stage)+1],this.stage===`ripe`){this.n=this.yield,this.t=0;break}}return this}offlineAdvance(e){return this.advance(Number.isFinite(e)&&e>0?e:0)}pick(){return!this.ripe||this.n<=0?0:(--this.n,this.n===0&&(this.stage=`bush`,this.t=0),1)}harvest(){let e=0;for(;this.pick();)e+=1;return e}toJSON(){let e={stage:this.stage,t:this.t};return this.n>0&&(e.n=this.n),e}},wm=class{constructor(e={}){let t=e&&typeof e==`object`?e:{},n=Array.isArray(t.slots)?t.slots:[];this.slots=[];for(let e=0;e<4;e++){let t=n[e];if(t&&typeof t==`object`&&um(t.b)){let e=lm[t.b].bush?new Cm({stage:t.stage,t:t.t,n:t.n,kind:lm[t.b].crop}):null;this.slots.push({building:t.b,bush:e,trough:_m(t.b,t.f)})}else this.slots.push({building:null,bush:null,trough:gm()})}let r=Array.isArray(t.wild)?t.wild:[];this.wild=[];for(let e=0;e<4;e++){let t=r[e]&&typeof r[e]==`object`?r[e]:{};this.wild.push(new Cm({wild:!0,stage:t.stage,t:t.t,n:t.n}))}let i=Array.isArray(t.wildC)?t.wildC:[];this.wildCarrot=[];for(let e=0;e<3;e++){let t=i[e]&&typeof i[e]==`object`?i[e]:{};this.wildCarrot.push(new Cm({wild:!0,kind:`carrot`,stage:t.stage,t:t.t,n:t.n}))}let a=t.seedProg,o=Number.isFinite(a)?{berry:a}:a;this.seedProg={};for(let e of Object.keys(om)){let t=Math.floor(mm(o&&typeof o==`object`?o[e]:0,0));this.seedProg[e]=t>0&&t<6?t:0}}slot(e){return e>=0&&e<this.slots.length?this.slots[e]:null}plant(e,t,n=`plot`,r=null){let i=this.slot(e);if(!i||i.building!==null)return!1;let a=lm[n];if(!a||!a.ready)return!1;let o=dm(n);return o>0&&!(r&&r.canAfford(o))||a.seed&&(!t||t.count(a.seed)<1)?!1:(o>0&&r.spend(o),a.seed&&t.remove(a.seed,1),i.building=n,i.bush=a.bush?new Cm({wild:!1,kind:a.crop}):null,i.trough=gm(),!0)}demolish(e){let t=this.slot(e);return!t||t.building===null?!1:(t.building=null,t.bush=null,t.trough=gm(),!0)}bushes(){let e=[];for(let t of this.slots)t.bush&&e.push(t.bush);for(let t of this.wild)e.push(t);for(let t of this.wildCarrot)e.push(t);return e}advance(e){for(let t of this.bushes())t.advance(e);return this}offlineAdvance(e){for(let t of this.bushes())t.offlineAdvance(e);return this}harvest(e,t){if(!e)return 0;let n=0;for(;e.pick();)t&&t.add(e.product,1),this.collected(t,1,e.kind),n+=1;return n}collected(e,t=1,n=sm){let r=cm(n),i=0,a=Math.floor(Number.isFinite(t)?t:0);for(let t=0;t<a;t++)this.seedProg[r.id]+=1,this.seedProg[r.id]>=6&&(this.seedProg[r.id]=0,e&&e.add(r.seed,1),i+=1);return i}toJSON(){return{seedProg:{...this.seedProg},slots:this.slots.map(e=>e.building?{b:e.building,...e.bush?e.bush.toJSON():{},...ym(e)>0?{f:vm(e)}:{}}:null),wild:this.wild.map(e=>e.toJSON()),wildC:this.wildCarrot.map(e=>e.toJSON())}}};function Tm(e,t,n){let r=n.r*n.r,i=e=>{let t=e.x-n.center.x,r=e.y-n.center.y,i=e.z-n.center.z;return t*t+r*r+i*i};return i(e)<r==i(t)<r}function Em(e,t,n=[]){if(!e||!t)return!1;for(let r of n)if(!Tm(e,t,r))return!1;return!0}function Dm(e){if(!e||typeof e!=`object`)return new wm;let t=e.farm;return!t||typeof t!=`object`||Array.isArray(t)?new wm:new wm(t)}function Om(e,t=[],n){if(!e)return;e.parent?e.parent.remove(e):n&&n.remove(e);let r=new Set;e.traverse(e=>{e.isMesh&&r.add(e.geometry)});for(let e of r)e.dispose();for(let e of new Set(t))e.dispose()}var km=X.berry,Am=X.carrot,jm=X.carrotTop,Mm=6.5,Nm=.34,Pm=.995,Fm=.35,Im=26,Lm=3,Rm=class{constructor(e,t,n,r={}){this.world=t,this.R=r.radius??.57,this.dish=r.dish||null,this.boostMul=Number.isFinite(r.boostMul)?r.boostMul:0,this.boostDur=Number.isFinite(r.boostDur)?r.boostDur:0,this.kind=r.kind===`carrot`?`carrot`:`berry`,this.color=Number.isFinite(r.color)?r.color:this.kind===`carrot`?Am:km;let i=t.center,a=n.clone().normalize(),o=r.startDist??t.radius+this.R*12;this.pos=i.clone().addScaledVector(a,o),this.vel=new B,this.age=0,this.settled=!1,this.restedAt=null,this.beingEaten=!1,this.dead=!1,this.scale=1,this.bobPhase=Math.random()*Math.PI*2,this._t=new B,this._surfN=new B,this._build(e),this._sync()}_build(e){if(this.group=new U,this._ownedMaterials=[],this.kind===`carrot`&&!this.dish){let t=xd(new Ea(this.R*.62,.03,this.R*2.1,10),this.color,1.06);t.children[0].castShadow=!0,t.position.y=this.R*.05,this.group.add(t);let n=vd(jm);this._ownedMaterials.push(n);for(let e=0;e<3;e++){let t=new K(new q(this.R*.34,8,6),n);t.scale.set(.5,1.1,.5);let r=e/3*Math.PI*2;t.position.set(Math.cos(r)*this.R*.24,this.R*1.35,Math.sin(r)*this.R*.24),t.rotation.z=-Math.cos(r)*.45,t.rotation.x=Math.sin(r)*.45,this.group.add(t)}e.add(this.group);return}let t=xd(new q(this.R,18,14),this.color,1.06);if(t.children[0].castShadow=!0,this.group.add(t),this.dish){e.add(this.group);return}let n=new K(new q(this.R*.28,10,8),new ai({color:X.berryCalyx}));n.position.y=this.R*.92,n.scale.set(1,.5,1),this._ownedMaterials.push(n.material),this.group.add(n);let r=vd(X.berryStem);this._ownedMaterials.push(r);let i=new K(new Ea(.03,.04,this.R*.7,6),r);i.position.y=this.R*1.2,this.group.add(i);let a=new K(new q(this.R*.42,10,8),r);a.scale.set(1,.28,.6),a.position.set(this.R*.28,this.R*1.35,0),a.rotation.z=-.5,this.group.add(a),e.add(this.group)}update(e){if(this.dead)return;this.age+=e;let t=this.world.center;if(this.beingEaten){this._sync();return}this._t.copy(t).sub(this.pos);let n=this._t.length()||1e-6;if(this.vel.addScaledVector(this._t,Mm/n*e),this.vel.multiplyScalar(Pm),this.world.isWater&&this.world.isWater(this.pos)){let n=this.pos.distanceTo(t)||1e-6,r=this.R*2,i=Math.min(this.world.sea.level-n,r);this._t.copy(this.pos).sub(t).multiplyScalar(1/n),this.vel.addScaledVector(this._t,i/r*Im*e),this.vel.multiplyScalar(Math.max(0,1-Lm*e)),this.vel.length()<Fm&&!this.settled&&(this.settled=!0,this.restedAt=this.age)}this.pos.addScaledVector(this.vel,e);let r=this.pos.distanceTo(t),i=(this.world.floorRadius?this.world.floorRadius(this.pos):this.world.radius)+this.R;if(r<i){let e=(this.pos.x-t.x)/(r||1e-6),n=(this.pos.y-t.y)/(r||1e-6),a=(this.pos.z-t.z)/(r||1e-6);this.pos.set(t.x+e*i,t.y+n*i,t.z+a*i);let o=this.vel.x*e+this.vel.y*n+this.vel.z*a,s=this.vel.x-e*o,c=this.vel.y-n*o,l=this.vel.z-a*o,u=o<0?-o*Nm:0;this.vel.set(s*.6+e*u,c*.6+n*u,l*.6+a*u),this.vel.length()<Fm&&(this.vel.set(0,0,0),this.settled||(this.settled=!0,this.restedAt=this.age))}this._sync()}_sync(){this._surfN.copy(this.pos).sub(this.world.center).normalize();let e=this.group;if(!e)return;e.position.copy(this.pos),e.quaternion.setFromUnitVectors(zm,this._surfN);let t=this.scale;if(this.settled&&!this.beingEaten){let n=Math.sin(this.age*2.2+this.bobPhase);t*=1+n*.04,e.position.addScaledVector(this._surfN,n*.03)}let n=Math.max(.001,t);this.dish?e.scale.set(n*1.05,n*.72,n*1.05):e.scale.setScalar(n)}startEat(){this.beingEaten=!0,this.settled=!1,this.vel.set(0,0,0)}magnetize(e,t){this.pos.lerp(e,.35),this.scale=Math.max(0,1-t)}finishEat(){this.dead=!0}cancelEat(){this.beingEaten=!1,this.scale=1,this.settled=!1,this.vel.set(0,0,0)}dispose(e){Om(this.group,this._ownedMaterials,e),this.group=null,this._ownedMaterials.length=0}},zm=new B(0,1,0);function Bm(e,t=[]){if(!e||e.dead||e.beingEaten)return!1;for(let n of t)if(n&&n.phase===`eat`&&n.eatBerry===e)return!1;return!0}function Vm(e,t,n,r=[]){let i=e.indexOf(t);return i<0||!Bm(t,r)?!1:(e.splice(i,1),t.dead=!0,n.add(cm(t.kind).product,1),!0)}var Hm={spiceSugar:{id:`spiceSugar`,icon:`✨`,name:`Сахарная пыльца`,price:10},spiceMint:{id:`spiceMint`,icon:`🌿`,name:`Мятная искра`,price:15}};function Um(e){return Object.prototype.hasOwnProperty.call(Hm,e)}function Wm(e){let t=e&&typeof e==`object`?e:Hm[e],n=t&&t.price;return Number.isFinite(n)&&n>0?Math.floor(n):0}var Gm=`ember`,Km=`🪨`,qm=`Уголёк`,Jm={crush:{id:`crush`,icon:`✊`,name:`Размять`,tool:`hand`},cut:{id:`cut`,icon:`🔪`,name:`Нарезать`,tool:`knife`},stir:{id:`stir`,icon:`🥄`,name:`Мешать`,tool:`spoon`},sprinkle:{id:`sprinkle`,icon:`🧂`,name:`Посыпать`,tool:`shaker`},fry:{id:`fry`,icon:`🍳`,name:`Жарить`,tool:`spatula`,canBurn:!0}};function Ym(e){return Object.prototype.hasOwnProperty.call(Jm,e)}function Xm(e){let t=$m(e);return t?(t.steps||[]).some(e=>Ym(e.type)&&!!Jm[e.type].canBurn):!1}var Zm={jam:{id:`jam`,dish:`dishJam`,icon:`🍯`,name:`Ягодный джем`,ingredients:{berry:2,spiceSugar:1},steps:[{type:`crush`,param:`berry`},{type:`stir`},{type:`sprinkle`,param:`spiceSugar`}],boostMul:2,boostDur:180},mousse:{id:`mousse`,dish:`dishMousse`,icon:`🍧`,name:`Мятный мусс`,ingredients:{berry:2,spiceMint:1},steps:[{type:`crush`,param:`berry`},{type:`stir`},{type:`sprinkle`,param:`spiceMint`}],boostMul:2,boostDur:300},cake:{id:`cake`,dish:`dishCake`,icon:`🎂`,name:`Праздничный пирог`,ingredients:{berry:2,carrot:1,spiceSugar:1,spiceMint:1},steps:[{type:`crush`,param:`berry`},{type:`cut`,param:`carrot`},{type:`stir`},{type:`sprinkle`,param:`spiceSugar`},{type:`sprinkle`,param:`spiceMint`},{type:`fry`}],boostMul:3,boostDur:180}};function Qm(e){return Object.prototype.hasOwnProperty.call(Zm,e)}function $m(e){return e&&typeof e==`object`?Qm(e.id)?Zm[e.id]:null:Qm(e)?Zm[e]:null}function eh(e,t){let n=$m(t);if(!n||!e)return!1;for(let[t,r]of Object.entries(n.ingredients))if(e.count(t)<r)return!1;return!0}function th(e,t){let n=$m(t);if(!eh(e,n))return null;for(let[t,r]of Object.entries(n.ingredients))e.remove(t,r);return n}function nh(e,t){let n=$m(e);return n&&(t===`ok`||t===`burnt`&&!Xm(n))?{dish:n.dish}:{ember:Gm}}function rh(e){let t={mul:1,t:0};if(!e||typeof e!=`object`)return t;let n=Number(e.mul??e.m),r=Number(e.t);return!Number.isFinite(n)||!Number.isFinite(r)||!(n>1)||!(r>0)?t:{mul:n,t:r}}function ih(e,t,n){let r=Number(t),i=Number(n);return!Number.isFinite(r)||!Number.isFinite(i)||!(r>1)||!(i>0)?(e.mul=1,e.t=0,e):(e.mul=r,e.t=i,e)}function ah(e,t){if(!e)return e;let n=Number.isFinite(t)&&t>0?t:0;return e.t>0?(e.t-=n,e.t<=0&&(e.t=0,e.mul=1),e):(e.mul=1,e.t=0,e)}function oh(e,t){let n=Number.isFinite(e)&&e>0?e:1,r=t&&t.t>0&&Number.isFinite(t.mul)&&t.mul>1?t.mul:1;return Math.max(n,r)}var sh={};for(let e of Object.values(om))sh[e.product]={id:e.product,icon:e.icon,name:e.name},sh[e.seed]={id:e.seed,icon:e.seedIcon,name:e.seedName};for(let e of Object.values(Hm))sh[e.id]={id:e.id,icon:e.icon,name:e.name};for(let e of Object.values(Zm))sh[e.dish]={id:e.dish,icon:e.icon,name:e.name};sh[Gm]={id:Gm,icon:Km,name:qm};function ch(e){return Object.prototype.hasOwnProperty.call(sh,e)}function lh(){return{berry:5}}function uh(e){return!Number.isFinite(e)||e<=0?0:Math.floor(e)}var dh=class{constructor(e={}){if(this.items={},e&&typeof e==`object`)for(let[t,n]of Object.entries(e)){if(!ch(t))continue;let e=uh(n);e>0&&(this.items[t]=e)}}count(e){return this.items[e]||0}add(e,t=1){if(!ch(e))return 0;let n=uh(t);return n===0?this.count(e):(this.items[e]=this.count(e)+n,this.items[e])}remove(e,t=1){if(!ch(e))return 0;let n=uh(t),r=this.count(e),i=Math.min(n,r);return i<=0?0:(i===r?delete this.items[e]:this.items[e]=r-i,i)}toJSON(){return{...this.items}}};function fh(e){if(!e||typeof e!=`object`)return new dh(lh());let t=e.inv;return!t||typeof t!=`object`||Array.isArray(t)?new dh(lh()):new dh(t)}function ph(e,t,n,r={}){let i=r.radius??3.5,a=r.pull??6,o=r.boost??1,s=r.eatR??.9,c=r.damp??8,l=[];if(!t||!Number.isFinite(e)||e<=0)return l;for(let r of n){if(!r||r.dead||r.beingEaten)continue;let n=t.x-r.pos.x,u=t.y-r.pos.y,d=t.z-r.pos.z,f=Math.sqrt(n*n+u*u+d*d);if(f>i)continue;if(f<s){l.push(r);continue}let p=a*(1+o*(1-f/i)),m=Math.min(p*e,f),h=m/f;r.pos.x+=n*h,r.pos.y+=u*h,r.pos.z+=d*h,r.vel&&r.vel.multiplyScalar(Math.max(0,1-c*e)),f-m<s&&l.push(r)}return l}function mh(e,t,n,r,i,a){return{id:e,name:t,icon:n,temperament:e,tastes:{fruit:r,dish:i},habit:a}}var hh={kisel:mh(`kisel`,`Пуддинг`,`🍮`,`berry`,`dishJam`,`Мягче всех: почти не держит форму, прыгает низко и подолгу отдыхает.`),popryg:mh(`popryg`,`Прыгль`,`⚡`,`carrot`,`dishMousse`,`Тугой и неугомонный: прыгает выше всех и быстрее всех устаёт.`),lipuchka:mh(`lipuchka`,`Ласкун`,`💗`,`berry`,`dishMousse`,`Скучает без рук: если долго не трогать, сам придёт и попросится.`),dichok:mh(`dichok`,`Тихоня`,`🌱`,`carrot`,`dishCake`,`Самый недоверчивый: пугается захвата и дольше всех привыкает к игроку.`)},gh=[`kisel`,`popryg`,`lipuchka`,`dichok`];function _h(e){return Object.prototype.hasOwnProperty.call(hh,e)}function vh(e){let t=e&&typeof e==`object`?e.id:e;return _h(t)?hh[t]:null}function yh(e){let t=vh(e);return t?t.tastes.fruit:null}function bh(e,t){let n=yh(e);return!n||!t||t.dish?!1:(t.kind||`berry`)===n}var xh=`unknown`,Sh=`seen`,Ch=`tamed`;function wh(e){let t=new Set,n=e instanceof Set?[...e]:Array.isArray(e)?e:[];for(let e of n)_h(e)&&t.add(e);return t}function Th(){return{seen:new Set,dish:new Set}}function Eh(e){let t=e&&typeof e==`object`?e.pedia===void 0?e:e.pedia:null;return!t||typeof t!=`object`?Th():{seen:wh(t.seen),dish:wh(t.dish)}}function Dh(e){let t=e&&e.seen instanceof Set&&e.dish instanceof Set?e:Eh(e);return{seen:gh.filter(e=>t.seen.has(e)),dish:gh.filter(e=>t.dish.has(e))}}function Oh(e,t){return!e||!_h(t)||e.seen.has(t)?!1:(e.seen.add(t),!0)}function kh(e,t){return!e||!_h(t)||e.dish.has(t)?!1:(e.dish.add(t),!0)}function Ah(e,t){if(typeof e!=`function`)return!1;try{return!!e(t)}catch{return!1}}function jh(e,t,n){return _h(e)?Ah(n,e)?Ch:(t&&t.seen instanceof Set?t:Eh(t)).seen.has(e)?Sh:xh:xh}function Mh(e,t,n){let r=jh(e,t,n),i={id:e,status:r,name:null,icon:null,habit:null,fruit:null,dish:null};if(r===`unknown`)return i;let a=vh(e);return a?(i.name=a.name,i.icon=a.icon,i.habit=a.habit,r===`tamed`&&(i.fruit=a.tastes.fruit),(t&&t.dish instanceof Set?t:Eh(t)).dish.has(e)&&(i.dish=a.tastes.dish),i):i}function Nh(e,t){return gh.map(n=>Mh(n,e,t))}function Ph(e,t,n=6,r=null){let i=new Set;if(!Array.isArray(e)||!e.length)return i;let a=Number.isFinite(n)&&n>0?Math.floor(n):0,o=[];for(let t of e){if(r&&r(t)){i.add(t);continue}o.push(t)}if(t){let e=e=>{let n=Fh(e);if(!n)return 1/0;let r=n.x-t.x,i=n.y-t.y,a=n.z-t.z;return r*r+i*i+a*a};o.sort((t,n)=>e(t)-e(n))}for(let e=0;e<o.length&&e<a;e++)i.add(o[e]);return i}function Fh(e){return e?e.blob&&e.blob.com?e.blob.com:e.com?e.com:e.pos||null:null}var Ih=.3,Lh=.7,Rh=.22,zh=9,Bh=7,Vh=9,Hh=R.degToRad(10),Uh=4.5,Wh=6,Gh=12,Kh=.002,qh=.25,Jh=.85,Yh=.5,Xh=.9,Zh=1.2,Qh=.6,$h=.1,eg=4,tg=.14,ng=.3,rg=1,ig=.004,ag=.005,og=.02,sg=.004,cg=.04,lg=.12,ug=.95,dg=1.5,fg=.6,pg=.35,mg=1.15,hg=.08,gg=.2,_g=2.4,vg=.35,yg=.55,bg=10,xg=.45,Sg=.35,Cg=5,wg=1.12,Tg=1,Eg=.95,Dg=5.2,Og=.4,kg=.35,Ag=1.2,jg=1.2,Mg=6.5,Ng=5.5,Pg=1.2,Fg=.5,Ig=1.4,Lg=9,Rg=.4,zg=1.2,Bg=1.12,Vg=1,Hg=25,Ug=1.5,Wg=3,Gg=6,Kg=2,qg=.34,Jg=.3,Yg=5.5,Xg=6.5,Zg=.35,Qg=5,$g=2.2,e_=.4,t_=new B(0,0,1),n_=class{constructor(e,t,n={}){this.blob=e,this.world=t,e.brain=this,this.satiety=n.satiety??.6,this.energy=n.energy??.85,this.nestDir=n.nestDir?n.nestDir.clone().normalize():null,this.nestPos=n.nestPos?n.nestPos.clone():null,this.sleepState=`awake`,this.forcedSleep=!1,this.nightSleep=!1,this.fallTimer=0,this.wakeTimer=0,this.wakeNatural=!1,this._sleepLerp=0,this._pressK0=null,this._stretched=!1,this._sleepyMood=0,this.phase=`rest`,this.timer=this._restTime(),this.idleTimer=this._idleTime(),this.mode=`idle`,this.inPlaceLeft=0,this.hopCount=0,this.attentionPoint=null,this.sinceTouch=0,this.pleadTimer=r_(Wg,Gg),this.returnHops=0,this.trust=0,this.lifePhase=n.wild?`wild`:`tamed`,this.species=n.species||e.traits&&e.traits.id||null,this.tameTimeout=0,this.wanderDir=null,this.homeDir=n.homeDir?n.homeDir.clone().normalize():null,this.homeArc=Number.isFinite(n.homeArc)?n.homeArc:45,this.homeHops=0,this.tameEvent=null,this.sickEvent=null,this.breakEvent=null,this.avoidZones=null,this.fleeHops=0,this._scarePoint=null,this._fleeDir=new B,this.targetBerry=null,this.eatBerry=null,this.eatTimer=0,this.gulpTimer=0,this.stun=0,this.askTimer=r_(2,4),this.inWater=!1,this.waterTime=0,this.strokeTimer=0,this.swimDist=1/0,this.swimAshore=!1,this.shakeTimer=0,this.shakePhase=0,this.shakeEvent=null,this._swimTang=new B,this._probe=new B,this.time=0,this.danceT0=0,this.danceEnd=0,this.danceBeat=-1,this.danceStep=0,this.danceAz=0,this.crystalTimer=this._crystalTime(),this.boost={mul:1,t:0},this.crystalBlocked=!1,this.crystalCount=0,this._cUp=new B,this._cBack=new B,this.chompEvent=null,this.danceHeartEvent=null,this.crystalEvent=null,this.boostEvent=null,this._excited=0,this._sad=0,this._up=new B,this._goal=new B,this._tang=new B,this._imp=new B,this._m=new B,this._mouth=new B,this._wgoal=new B,this._wprobe=new B,this._wpath=new B}isHopping(){return this.phase===`windup`||this.phase===`air`}get isWild(){return this.lifePhase===`wild`}get isTamed(){return this.lifePhase===`tamed`}get wish(){return this.isWild?this.tameTimeout>0?`timeout`:yh(this.species):null}tame(){return this.isTamed?!1:(this.lifePhase=`tamed`,this.trust=1,this.tameTimeout=0,this.wanderDir=null,this.homeDir=null,this.fleeHops=0,this.mode===`flee`&&(this.mode=`idle`),this.homeHops=this.nestPos?Qg:0,this.tameEvent={pos:this.blob.com.clone()},this.blob.joy=Math.max(this.blob.joy,1.5),this.blob.mouthPop(1),!0)}get traits(){return this.blob.traits||Kp}_restTime(){let e=this.traits.brain.restMul;return r_(Ih*e,Lh*e)}_idleTime(){let e=this.traits.brain.idleMul;return r_(Wh*e,Gh*e)}notifyPoke(){this.sinceTouch=0,this.mode===`attention`&&(this.mode=`idle`),this.traits.brain.clingy&&(this.blob.joy=Math.max(this.blob.joy,1.2),this.mode=`inplace`,this.inPlaceLeft=2)}_greatCircle(e,t){let n=R.clamp(e.dot(t),-1,1);return Math.acos(n)*this.world.radius}_nearestVisible(e,t){let n=null,r=1/0,i=Yh*14,a=Xh*14;for(let o of e){if(o.beingEaten||o.dead)continue;this._m.copy(o.pos).sub(this.world.center).normalize();let e=this._greatCircle(t,this._m);e<(o.visionLim?o.visionLim(t,this.world,i):this.world.isWater&&this.world.isWater(o.pos)?a:i)&&e<r&&(r=e,n=o)}return n}update(e,t=[]){let n=this.blob,r=n.body,i=this.world.center,a=this.world.radius;this.chompEvent=null,this.danceHeartEvent=null,this.shakeEvent=null,this.crystalEvent=null,this.tameEvent=null,this.sickEvent=null,this.breakEvent=null,this.boostEvent=null,this.time+=e;let o=e*(this.ecoTimeScale||1);if(this.satiety=R.clamp(this.satiety-Kh*o,0,1),this.tameTimeout>0&&(this.tameTimeout=Math.max(0,this.tameTimeout-o)),ah(this.boost,o),this._updateCrystal(o),this.sleepState===`sleeping`)this.energy=R.clamp(this.energy+cg*o,0,1);else{let e=ig*this.traits.brain.energyDecayMul;this.energy=R.clamp(this.energy-e*o,0,1)}let s=n.com;this._up.copy(s).sub(i);let c=this._up.length()||1e-6;this._up.multiplyScalar(1/c);let l=c-a,u=r.velocity.length(),d=r.velocity.dot(this._up),f=l>n.R*1.15,p=this._up;this.stun=Math.max(0,this.stun-e),this.sinceTouch+=e;let m=this.traits.brain.lowEnergy,h=this.energy<m?(m-this.energy)/m:0,g=this.sleepState===`awake`||this.sleepState===`going`?h:0;if(this._sleepyMood+=(g-this._sleepyMood)*(1-Math.exp(-e*3)),n.sleepiness=this._sleepyMood,this.gulpTimer>0&&(this.gulpTimer-=e,r.addWind(this._imp.copy(this._up).multiplyScalar(-26))),n.grabbed){if(this.sinceTouch=0,this.isWild){this._breakFree();return}(this.sleepState===`going`||this.sleepState===`falling`||this.sleepState===`sleeping`)&&(this.forcedSleep=!1,this._wakeUp(!1)),this.mode===`dance`&&this._stopDance(),this.phase===`eat`&&this._cancelEat(!1),this.phase!==`held`&&this.traits.brain.shy&&(this._scarePoint=s.clone(),n.surprise=1.5),this.phase=`held`,this.timer=this._restTime(),this.targetBerry=null,this._updateSleepPhysics(e),this._applyMood(e,!1,!1);return}this.phase===`held`&&(this.phase=`rest`,this.stun=.4,this._afterRelease(s));let _=this.world.waterInfo?this.world.waterInfo(s,this._swimTang):null,v=!!_&&_.depth>0&&_.over<n.R*2.5;if(this._updateWater(e,v,s),v){(this.sleepState===`falling`||this.sleepState===`sleeping`)&&this._wakeUp(!1),this.sleepState===`waking`&&this._runSleep(e,this._up,f,u),this.mode===`dance`&&this._stopDance(),this.phase===`eat`&&this._cancelEat(!0),this._runSwim(e,l,t,_),this._updateSleepPhysics(e),this._applyMood(e,!1,this.satiety<ng);return}if(!this.forcedSleep&&!this.nightSleep&&(this.sleepState===`sleeping`||this.sleepState===`falling`)&&t.length){let e=vg*14;for(let n of t)if(!n.dead&&(this._m.copy(n.pos).sub(i).normalize(),this._greatCircle(p,this._m)<e)){this._wakeUp(!1);break}}if(this.sleepState===`awake`&&this.nestPos&&this.phase!==`thrown`&&(this.forcedSleep||this.nightSleep||this.energy<this.traits.brain.sleepTrigger)&&(!(!this.forcedSleep&&!this.nightSleep&&(this.targetBerry||this.phase===`eat`))||this.energy<lg)&&(this.phase===`eat`&&this._cancelEat(!0),this.mode===`dance`&&this._stopDance(),this.sleepState=`going`,this.targetBerry=null,this.mode=`approach`),this.sleepState===`going`){if(this._greatCircle(p,this.nestDir)<_g&&!f&&u<Uh){this._enterFalling(),this._updateSleepPhysics(e),this._applyMood(e,!1,!1);return}}else if(this.sleepState!==`awake`){this._runSleep(e,this._up,f,u),this._updateSleepPhysics(e),this._applyMood(e,!1,!1);return}if(this.mode===`dance`){let t=l<n.R*wg&&d<Tg;this._runDance(!t),this._updateSleepPhysics(e),this._applyMood(e,!1,!1);return}if(this.phase===`rest`&&f&&l>n.R*1.5&&d>3&&(this.phase=`thrown`,this.energy=R.clamp(this.energy-og,0,1),this.stun=Math.max(this.stun,rg)),this.phase===`thrown`){!f&&u<1.5&&(this.phase=`rest`,this.energy=R.clamp(this.energy-sg,0,1),this.timer=this._restTime(),this.stun=Math.max(this.stun,rg)),this._applyMood(e,!1,!1);return}if(this.phase===`eat`){this._runEat(e),this._applyMood(e,!0,!1);return}let y=this.isWild&&this.tameTimeout>0,b=this.sleepState===`going`||this.satiety>=Jh||y?null:this._nearestVisible(t,p),x=!!b,S=this.satiety<ng;if(b){if(this.targetBerry!==b&&(this.mode===`idle`&&(this.mode=`inplace`,this.inPlaceLeft=2),this.targetBerry=b,n.sproutBoost()),s.distanceTo(b.pos)<n.R+Zh&&this.phase!==`windup`){this._startEat(b),this._applyMood(e,!0,S);return}}else this.targetBerry=null,!(this.mode===`attention`||this.mode===`flee`||this.mode===`inplace`&&this.inPlaceLeft>0&&this.traits.brain.clingy)&&this.mode!==`idle`&&(this.mode=`idle`);switch(S&&!b&&(this.askTimer-=e,this.askTimer<=0&&(n.mouthPop(.7),this.askTimer=r_(3,6))),this.traits.brain.clingy&&this.attentionPoint&&!b&&this.returnHops===0&&this.sinceTouch>Hg?(this.mode=`attention`,this.pleadTimer-=e,this.pleadTimer<=0&&(n.mouthPop(.8),this.pleadTimer=r_(Wg,Gg))):this.mode===`attention`&&(this.mode=`idle`),this.isWild&&!b&&this.sleepState===`awake`&&this.mode!==`dance`?this._updateWander(p):this.isWild||(this.wanderDir=null),this.phase){case`rest`:this.timer-=e,this.timer<=0&&this.stun<=0&&u<Uh&&!f&&(this.mode===`inplace`&&this.inPlaceLeft>0?this._beginWindup(`inplace`):this.mode===`flee`&&this.fleeHops>0?this._beginWindup(`flee`):this.targetBerry||this.sleepState===`going`||this.homeHops>0&&this.nestPos?this._beginWindup(`approach`):this.wanderDir?this._beginWindup(`wander`):this.returnHops>0&&this.attentionPoint||this.mode===`attention`&&this.attentionPoint&&this._greatCircle(p,this._m.copy(this.attentionPoint).sub(i).normalize())>Ug*n.R?this._beginWindup(`approach`):(this.idleTimer-=1*.5*this.traits.brain.restMul,this.idleTimer<=0?(this.mode===`attention`?(this.inPlaceLeft=1,this._beginWindup(`inplace`)):this._beginWindup(`idle`),this.idleTimer=this._idleTime()):this.timer=this._restTime()));break;case`windup`:this.timer-=e,this._imp.copy(this._up).multiplyScalar(-34),r.addWind(this._imp),this.timer<=0&&this._launch();break;case`air`:!f&&d<=.5&&u<3&&(this.phase=`rest`,this.timer=this._restTime());break}this._updateSleepPhysics(e),this._applyMood(e,x,S)}_beginWindup(e){this.launchMode=e,this.phase=`windup`,this.timer=Rh,this.blob.poke(.3)}_launch(){let e=this.blob,t=e.body,n=this.world.center,r=e.com;this._up.copy(r).sub(n).normalize();let i=this.traits.brain,a=zh*i.jumpUpMul,o=Bh*i.jumpTangMul;if(this.satiety<ng&&(a*=.7,o*=.8),this.energy<i.lowEnergy&&(a*=.7,o*=.75),this.energy=R.clamp(this.energy-ag,0,1),this.hopCount++,this.launchMode===`inplace`)this._tang.set(0,0,0),a=Vh,o=0,this.inPlaceLeft=Math.max(0,this.inPlaceLeft-1),this.inPlaceLeft===0&&this.targetBerry&&(this.mode=`approach`);else if(this.launchMode===`flee`){this._tang.copy(this._fleeDir),this._tang.addScaledVector(this._up,-this._tang.dot(this._up)),this._tang.lengthSq()<1e-6&&this._basisTangent(this._up,Math.random()*6.28,this._tang),this._tang.normalize();let e=1+Jg*(1-this.trust);a*=e,o*=e,this.fleeHops=Math.max(0,this.fleeHops-1),this.fleeHops===0&&(this.mode=`idle`)}else{let e=null;if(this.launchMode===`approach`?(e=this.sleepState===`going`?this.nestPos:this.targetBerry?this.targetBerry.pos:this.homeHops>0&&this.nestPos?this.nestPos:this.attentionPoint,this.homeHops>0&&!this.targetBerry&&this.homeHops--):this.launchMode===`wander`&&this.wanderDir&&(e=this._wgoal.copy(this.wanderDir).multiplyScalar(this.world.radius).add(n)),this.launchMode===`approach`&&this.returnHops>0&&this.returnHops--,e){this._goal.copy(e).sub(n).normalize();let t=this._goal.dot(this._up);this._tang.copy(this._goal).addScaledVector(this._up,-t);let r=this._greatCircle(this._up,this._goal),i=R.clamp(r/(14*.25),.45,1);o*=i}else{let e=Math.random()*Math.PI*2;this._basisTangent(this._up,e,this._tang)}this._tang.lengthSq()<1e-6&&this._basisTangent(this._up,Math.random()*6.28,this._tang),this._tang.normalize();let t=(Math.random()*2-1)*Hh;this._rotateAround(this._tang,this._up,t)}this._imp.copy(this._up).multiplyScalar(a).addScaledVector(this._tang,o),t.addVelocity(this._imp),this.phase=`air`,this.blob.mouthPop(.4)}_afterRelease(e){let t=this.traits.brain;(t.shy||this.isWild)&&this.trust<1?(this.fleeHops=2-Math.floor(this.trust*2),this.mode=`flee`,this._up.copy(e).sub(this.world.center).normalize(),this._goal.set(0,0,0),this._scarePoint&&(this._goal.copy(e).sub(this._scarePoint),this._goal.addScaledVector(this._up,-this._goal.dot(this._up))),this._goal.lengthSq()>1e-4?this._fleeDir.copy(this._goal).normalize():this._basisTangent(this._up,Math.random()*6.28,this._fleeDir)):t.clingy&&this.attentionPoint&&(this.returnHops=Kg,this.sinceTouch=0)}_breakFree(){let e=this.blob,t=e.body;this._up.copy(e.com).sub(this.world.center).normalize(),t.endGrab(),e.setGrabbed(!1),this._basisTangent(this._up,Math.random()*Math.PI*2,this._tang),this._imp.copy(this._up).multiplyScalar(Yg).addScaledVector(this._tang,Xg),t.addVelocity(this._imp),this.phase===`eat`&&this._cancelEat(!0),this.phase=`rest`,this.timer=this._restTime(),this.stun=Zg,this.targetBerry=null,this.mode=`flee`,this.fleeHops=2,this._fleeDir.copy(this._tang),this.wanderDir=null,e.surprise=1.5,this.breakEvent={pos:e.com.clone()}}notifyScare(e){return!this.isWild||!e||this.blob.grabbed||(this._up.copy(this.blob.com).sub(this.world.center).normalize(),this._m.copy(e).sub(this.world.center).normalize(),this._greatCircle(this._up,this._m)>14*.5)?!1:(this._goal.copy(this.blob.com).sub(e),this._goal.addScaledVector(this._up,-this._goal.dot(this._up)),this._goal.lengthSq()>1e-4?this._fleeDir.copy(this._goal).normalize():this._basisTangent(this._up,Math.random()*6.28,this._fleeDir),this.mode=`flee`,this.fleeHops=Math.max(this.fleeHops,2),this.blob.surprise=Math.max(this.blob.surprise,1),!0)}_updateWander(e){this.wanderDir&&this._greatCircle(e,this.wanderDir)>3.5&&!this.inWater||(this.wanderDir=this._pickWander(e))}_pickWander(e){let t=this.world,n=t.radius,r=this.homeDir?this._greatCircle(e,this.homeDir):0;for(let i=0;i<24;i++){let i=12+Math.random()*28;this._basisTangent(e,Math.random()*Math.PI*2,this._tang);let a=i/n,o=this._wgoal.copy(e).multiplyScalar(Math.cos(a)).addScaledVector(this._tang,Math.sin(a)).normalize();if(this._wprobe.copy(o).multiplyScalar(n).add(t.center),!this._wetSpot(this._wprobe)&&!this._inAvoid(this._wprobe)&&!this._pathWet(e,o,i)){if(this.homeDir){let e=this._greatCircle(o,this.homeDir);if(e>this.homeArc&&e>=r)continue}return o.clone()}}return null}_wetSpot(e){let t=this.world;if(!t.waterInfo)return!1;let n=t.waterInfo(e);return!!n&&n.depth>0}_pathWet(e,t,n){let r=this.world,i=r.radius;if(!r.waterInfo)return!1;let a=Math.acos(Math.min(1,Math.max(-1,e.dot(t))));if(a<1e-4)return!1;let o=Math.sin(a),s=Math.ceil(n/2.5);for(let n=1;n<s;n++){let c=n/s;if(this._wpath.copy(e).multiplyScalar(Math.sin((1-c)*a)/o).addScaledVector(t,Math.sin(c*a)/o),this._wpath.multiplyScalar(i).add(r.center),this._wetSpot(this._wpath))return!0}return!1}_inAvoid(e){let t=this.avoidZones;if(!t||!t.length)return!1;for(let n of t){let t=n.center,r=(n.r||0)+this.blob.R,i=e.x-t.x,a=e.y-t.y,o=e.z-t.z;if(i*i+a*a+o*o<r*r)return!0}return!1}_foodTrust(e){if(!this.isWild){this.trust=Math.min(1,this.trust+qg);return}if(!(e&&(e.onBush||e.onTrough))){if(bh(this.species,e)){this.trust=Math.min(1,this.trust+cf),this.trust>=.999999&&this.tame();return}this.tameTimeout=60,this.targetBerry=null,this.sickEvent={pos:this.blob.com.clone()},this.blob.surprise=Math.max(this.blob.surprise,.8)}}forceSleep(){this.forcedSleep=!0,this._goToBed()}_goToBed(){this.phase===`eat`&&this._cancelEat(!0),this.mode===`dance`&&this._stopDance(),this.targetBerry=null,this.sleepState===`awake`&&!this.blob.grabbed&&this.nestPos&&this.phase!==`thrown`&&this.phase!==`held`&&(this.sleepState=`going`,this.mode=`approach`)}setNightSleep(e){let t=!!e;t!==this.nightSleep&&(this.nightSleep=t,t?this._goToBed():this.sleepState!==`awake`&&!this.forcedSleep&&this._wakeUp(!0))}forceWake(){this.forcedSleep=!1,this.sleepState!==`awake`&&this._wakeUp(!1)}startDance(e,t=bg){this.danceT0=e??this.time,this.danceEnd=this.danceT0+t,this.danceBeat=-1,this.danceStep=0,this.danceAz=Math.random()*Math.PI*2,this.targetBerry=null,this.phase===`eat`&&this._cancelEat(!0),this.mode=`dance`}_danceActive(){return this.time<this.danceEnd}_stopDance(){this.danceEnd=0,this.mode===`dance`&&(this.mode=`idle`),this.phase=`rest`,this.timer=this._restTime()}_runDance(e){let t=this.blob,n=t.body;if(!this._danceActive()){this._stopDance();return}let r=Math.floor((this.time-this.danceT0)/yg);if(r>=0&&r>this.danceBeat){if(this.danceBeat=r,e){t.joy=Math.max(t.joy,.9);return}let i=this.traits.brain;this._up.copy(t.com).sub(this.world.center).normalize(),this._basisTangent(this._up,this.danceAz,this._tang);let a=zh*xg*i.jumpUpMul,o=Bh*Sg*i.jumpTangMul*(this.danceStep%2?1:-1);this.danceStep++,this._imp.copy(this._up).multiplyScalar(a).addScaledVector(this._tang,o),n.addVelocity(this._imp),this.energy=R.clamp(this.energy-ag,0,1),this.hopCount++,this.phase=`air`,t.sproutBoost(),this.danceStep%2==0&&t.mouthPop(.5),this.danceStep%Cg===0&&(this.danceHeartEvent={pos:t.com.clone()})}t.joy=Math.max(t.joy,.9)}_crystalTime(){let e=Jd;return 75*r_(1-e,1+e)}_updateCrystal(e){if(this.isWild||this.crystalBlocked||this.satiety<.6)return;if(this.crystalTimer>0){let t=this.sleepState===`sleeping`?2:1;if(this.crystalTimer-=e*oh(t,this.boost),this.crystalTimer>0)return}let t=this.blob,n=this.world.center;if(t.grabbed||this.inWater)return;let r=this._cUp.copy(t.com).sub(n),i=r.length()||1e-6;if(r.multiplyScalar(1/i),i-(this.world.floorRadius?this.world.floorRadius(t.com):this.world.radius)>t.R*1.15||t.body.velocity.length()>Uh)return;let a=this._cBack.copy(t.faceDir||t_);a.addScaledVector(r,-a.dot(r)).negate(),a.lengthSq()<1e-6&&this._basisTangent(r,Math.random()*6.28,a),a.normalize();let o=t.com.clone().addScaledVector(a,t.R*.85).addScaledVector(r,-t.R*.5),s=this.world.floorRadius?this.world.floorRadius(o)+t.R*.25:0,c=o.distanceTo(n);c<s&&o.sub(n).multiplyScalar(s/(c||1e-6)).add(n),this.crystalEvent={pos:o,vel:a.clone().multiplyScalar($g).addScaledVector(r,e_),kind:this.traits.id},this.satiety=R.clamp(this.satiety-Yd,0,1),this.crystalTimer=this._crystalTime(),this.crystalCount++,t.mouthPop(.6),t.poke(.35)}_updateWater(e,t,n){t?(this.inWater||(this.strokeTimer=.15,this.wanderDir=null),this.waterTime+=e):(this.inWater&&(this.phase===`swim`&&(this.phase=`rest`,this.timer=this._restTime()),this.waterTime>Fg&&(this.shakeTimer=Ig,this.shakePhase=0,this._basisTangent(this._up,Math.random()*Math.PI*2,this._swimTang),this.shakeEvent={pos:n.clone()})),this.waterTime=0,this.shakeTimer>0&&this._runShake(e)),this.inWater=t}_runShake(e){if(this.shakeTimer-=e,this.shakePhase+=e*Lg*Math.PI*2,this.shakeTimer<=0){this.shakeTimer=0;return}let t=this.blob,n=t.com.distanceTo(this.world.center)-this.world.radius,r=t.body.velocity.dot(this._up);n>t.R*Bg||r>Vg||t.body.addWind(this._imp.copy(this._swimTang).multiplyScalar(Math.sin(this.shakePhase)*zg))}_runSwim(e,t,n,r){let i=this.blob,a=i.body,o=this.world.center,s=i.com;this.phase=`swim`,this.mode=`idle`,this.targetBerry=null,this.swimDist=r?r.dist:1/0,this.sleepState===`going`&&this.nestDir&&(this._goal.copy(this.nestDir),this._swimTang.copy(this._goal).addScaledVector(this._up,-this._goal.dot(this._up)),this._swimTang.lengthSq()>1e-8&&this._swimTang.normalize());let c=null;if(!this.forcedSleep&&this.sleepState===`awake`&&this.satiety<Jh&&!(this.isWild&&this.tameTimeout>0)){let e=this._nearestVisible(n,this._up);e&&this.world.isWater(e.pos)&&(c=e)}if(c){if(this.targetBerry=c,s.distanceTo(c.pos)<i.R+Pg){this._swallowFloating(c);return}this._goal.copy(c.pos).sub(o).normalize(),this._swimTang.copy(this._goal).addScaledVector(this._up,-this._goal.dot(this._up)),this._swimTang.lengthSq()<1e-8&&this._basisTangent(this._up,Math.random()*6.28,this._swimTang),this._swimTang.normalize(),i.lookAt(c.pos)}else i.lookAt(null);let l=t+(r?r.depth:0);this._probe.copy(s).addScaledVector(this._swimTang,i.R);let u=s.distanceTo(o)-this.world.floorRadius(this._probe),d=Math.min(l,u)<i.R*1.15;this.swimAshore=d;let f=d?a.velocity.length()<Uh:t<=i.R*kg&&t>-i.R*Ag&&a.velocity.length()<jg;if(this.strokeTimer-=e,this.strokeTimer<=0&&f){let e=this.traits.brain,t=d?Mg*e.jumpUpMul:Og,n=(d?Ng:Dg)*e.jumpTangMul;this._imp.copy(this._up).multiplyScalar(t).addScaledVector(this._swimTang,n),a.addVelocity(this._imp),this.strokeTimer=Eg*(.7+.3*e.restMul)*r_(.9,1.1),this.energy=R.clamp(this.energy-ag,0,1),i.mouthPop(.35)}}_swallowFloating(e){e.startEat(),e.finishEat(),this._foodBoost(e),this.satiety=R.clamp(this.satiety+qh,0,1),this._foodTrust(e),this.chompEvent={pos:this.blob.com.clone()},this.gulpTimer=tg,this.blob.joy=Math.max(this.blob.joy,1.2),this.blob.mouthPop(1),this.blob.lookAt(null),this.targetBerry=null}_foodBoost(e){!e||!e.boostMul||(ih(this.boost,e.boostMul,e.boostDur),this.boostEvent={mul:e.boostMul})}_startEat(e){let t=this.blob;this.phase=`eat`,this.eatTimer=Qh,this.eatBerry=e,e.startEat(),t.mouthWorld(this._mouth),t.body.beginGrab(this._mouth,eg),t.mouthPop(1),t.sproutBoost()}_runEat(e){let t=this.blob,n=t.body,r=this.eatBerry;if(!r||r.dead){this._cancelEat(!0);return}this.eatTimer-=e,t.lookAt(r.pos),t.mouthPop(1),n.setGrabTarget(r.pos,$h),t.mouthWorld(this._mouth);let i=R.clamp(1-this.eatTimer/Qh,0,1);r.magnetize(this._mouth,i),this.eatTimer<=0&&this._swallow()}_swallow(){let e=this.blob;e.body.endGrab(),e.lookAt(null);let t=this.eatBerry;t&&t.finishEat(),this._foodBoost(t),this.satiety=R.clamp(this.satiety+qh,0,1),this._foodTrust(t),this.chompEvent={pos:e.com.clone()},this.gulpTimer=tg,e.joy=Math.max(e.joy,1.2),this.eatBerry=null,this.targetBerry=null,this.mode=`idle`,this.phase=`rest`,this.timer=this._restTime()}_cancelEat(e){e&&this.blob.body.endGrab(),this.blob.lookAt(null),this.eatBerry&&this.eatBerry.cancelEat(),this.eatBerry=null,this.targetBerry=null,this.mode=`idle`,this.phase===`eat`&&(this.phase=`rest`)}_applyMood(e,t,n){let r=1-Math.exp(-e*4),i=Math.max(+!!n,this.mode===`attention`?.5:0);this._excited+=(+!!t-this._excited)*r,this._sad+=(i-this._sad)*r,this.blob.moodExcited=this._excited,this.blob.moodSad=this._sad}_enterFalling(){this.sleepState=`falling`,this.fallTimer=dg,this.phase=`rest`,this.timer=999,this.mode=`idle`,this.targetBerry=null,this.blob.blink=.001,this.blob.yawn=.001}_enterSleeping(e){this.sleepState=`sleeping`,this.blob.asleepTarget=1,this._pressK0??=this.blob.body.pressureK;let t=this._tang&&this._tang.lengthSq()>1e-6?this._imp.copy(this._tang).normalize():this._imp.set(0,0,0);this.blob.sleepFaceDir.copy(e).addScaledVector(t,.35).normalize()}_runSleep(e,t,n,r){let i=this.blob.body;this.sleepState===`falling`?(this.fallTimer-=e,i.addWind(this._imp.copy(t).multiplyScalar(-26*.6)),this.fallTimer<=0&&this._enterSleeping(t)):this.sleepState===`sleeping`?(i.addWind(this._imp.copy(t).multiplyScalar(-26)),!this.forcedSleep&&!this.nightSleep&&this.energy>=ug&&this._wakeUp(!0)):this.sleepState===`waking`&&(this.wakeTimer-=e,this.wakeNatural&&!this._stretched&&(i.addVelocity(this._imp.copy(t).multiplyScalar(3.2)),this.blob.yawn=.001,this._stretched=!0),this.wakeTimer<=0&&this._finishWake(t))}_wakeUp(e){this.sleepState===`awake`||this.sleepState===`waking`||(this.sleepState=`waking`,this.wakeNatural=e,this.wakeTimer=mg,this._stretched=!1,this.blob.asleepTarget=0,this.blob.blink=.001)}_finishWake(e){let t=this.blob.body;this.sleepState=`awake`,t.shellStiffScale=this.traits.body.shellScale,this._pressK0!=null&&(t.pressureK=this._pressK0),this._sleepLerp=0,this.blob.asleepTarget=0,this.phase=`rest`,this.timer=this._restTime(),this.stun=.3,this.mode=this._danceActive()?`dance`:`idle`,this.wakeNatural&&t.addVelocity(this._imp.copy(e).multiplyScalar(zh*.5)),this.wakeNatural=!1}_updateSleepPhysics(e){let t=this.blob.body,n=+(this.sleepState===`sleeping`||this.sleepState===`falling`),r=n>this._sleepLerp?fg:pg;this._sleepLerp+=(n-this._sleepLerp)*(1-Math.exp(-e/r)),n===0&&this._sleepLerp<.001&&(this._sleepLerp=0);let i=this._sleepLerp,a=this.shakeTimer>0?1-Rg*.5*(1-Math.cos(this.shakePhase)):1;t.shellStiffScale=this.traits.body.shellScale*(1-i+hg*i)*a,this._pressK0!=null&&(t.pressureK=this._pressK0*(1-i+gg*i))}_basisTangent(e,t,n){let r=-e.z,i=0,a=e.x;r*r+i*i+a*a<1e-6&&(r=1,i=0,a=0);let o=Math.hypot(r,i,a);r/=o,i/=o,a/=o;let s=e.y*a-e.z*i,c=e.z*r-e.x*a,l=e.x*i-e.y*r,u=Math.cos(t),d=Math.sin(t);n.set(r*u+s*d,i*u+c*d,a*u+l*d)}_rotateAround(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=e.x*t.x+e.y*t.y+e.z*t.z,o=t.y*e.z-t.z*e.y,s=t.z*e.x-t.x*e.z,c=t.x*e.y-t.y*e.x;e.set(e.x*r+o*i+t.x*a*(1-r),e.y*r+s*i+t.y*a*(1-r),e.z*r+c*i+t.z*a*(1-r))}};function r_(e,t){return e+Math.random()*(t-e)}var i_=6.5,a_=.22,o_=.995,s_=.3,c_=.6,l_=1.8,u_=2.5,d_=26,f_=3;function p_(e,t){return{id:e,color:t.palette.lid,glow:t.palette.core,name:t.name,price:5}}var m_={};for(let[e,t]of Object.entries(qp))m_[e]=p_(e,t);var h_=p_(`neutral`,Kp);function g_(e){return m_[e]||h_}function __(e){let t=e&&typeof e==`object`?e:g_(e),n=t&&t.price;return Number.isFinite(n)&&n>0?Math.floor(n):0}var v_=2.2,y_=.55,b_=null,x_=!1;function S_(){if(x_)return b_;if(x_=!0,typeof document>`u`||!document.createElement)return null;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);if(!t)return null;let n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.55)`),n.addColorStop(.6,`rgba(255,255,255,0.16)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),b_=new ya(e),b_.colorSpace=Ue,b_}var C_=class{constructor(e,t,n={}){this.world=t,this.kind=g_(n.kind),this.R=n.radius??.55,this.pos=n.pos?n.pos.clone():t.center.clone().addScaledVector(new B(0,1,0),t.radius+this.R),this.vel=n.vel?n.vel.clone():new B,this.age=0,this.settled=!1,this.dead=!1,this.scale=1,this.pulsePhase=Math.random()*Math.PI*2,this._t=new B,this._surfN=new B,this._build(e),this._sync()}_build(e){this.group=new U;let t=xd(new ro(this.R,0),this.kind.color,1.1);t.children[0].castShadow=!0,t.scale.set(.78,1.25,.78),this.group.add(t);let n=new K(new ro(this.R*.5,0),vd(this.kind.glow,{emissive:new W(this.kind.glow),emissiveIntensity:.9}));n.scale.set(.78,1.25,.78),this.group.add(n),this.core=n;let r=S_();r&&(this.halo=new Yr(new Fr({map:r,color:this.kind.glow,transparent:!0,blending:2,depthWrite:!1,opacity:y_})),this.halo.scale.setScalar(this.R*v_*2),this.group.add(this.halo)),e.add(this.group)}update(e){if(this.dead)return;this.age+=e;let t=this.world.center;this._t.copy(t).sub(this.pos);let n=this._t.length()||1e-6;if(this.vel.addScaledVector(this._t,i_/n*e),this.vel.multiplyScalar(o_),this.world.isWater&&this.world.isWater(this.pos)){let n=this.pos.distanceTo(t)||1e-6,r=this.R*2,i=Math.min(this.world.sea.level-n,r);this._t.copy(this.pos).sub(t).multiplyScalar(1/n),this.vel.addScaledVector(this._t,i/r*d_*e),this.vel.multiplyScalar(Math.max(0,1-f_*e)),this.vel.length()<s_&&!this.settled&&(this.settled=!0)}this.pos.addScaledVector(this.vel,e);let r=this.pos.distanceTo(t),i=(this.world.floorRadius?this.world.floorRadius(this.pos):this.world.radius)+this.R;if(r<i){let n=(this.pos.x-t.x)/(r||1e-6),a=(this.pos.y-t.y)/(r||1e-6),o=(this.pos.z-t.z)/(r||1e-6);this.pos.set(t.x+n*i,t.y+a*i,t.z+o*i);let s=this.vel.x*n+this.vel.y*a+this.vel.z*o,c=this.vel.x-n*s,l=this.vel.y-a*s,u=this.vel.z-o*s;s<-.6&&(c*=c_,l*=c_,u*=c_);let d=Math.max(0,1-l_*e);c*=d,l*=d,u*=d;let f=Math.sqrt(c*c+l*l+u*u);if(f>1e-9){let t=Math.max(0,f-u_*e)/f;c*=t,l*=t,u*=t}let p=s<0?-s*a_:0;this.vel.set(c+n*p,l+a*p,u+o*p),this.vel.length()<s_&&(this.settled=!0)}this._sync()}_sync(){this._surfN.copy(this.pos).sub(this.world.center).normalize();let e=this.group;if(!e)return;e.position.copy(this.pos),e.quaternion.setFromUnitVectors(w_,this._surfN);let t=1+Math.sin(this.age*2.4+this.pulsePhase)*.05;if(e.scale.setScalar(Math.max(.001,this.scale*t)),this.core&&(this.core.material.emissiveIntensity=.7+.4*(1-Math.sin(this.age*2.4+this.pulsePhase))),this.halo){let e=1+(t-1)*2.4;this.halo.scale.setScalar(this.R*v_*2*e),this.halo.material.opacity=y_*(.82+(t-1)*3.6)}}collect(){this.dead=!0}dispose(e){let t=this.core?[this.core.material]:[];this.halo&&t.push(this.halo.material),Om(this.group,t,e),this.group=null,this.core=null,this.halo=null}},w_=new B(0,1,0);function T_(e,t,n){let r=e.indexOf(t);return r<0?n:(e.splice(r,1),t.collect(),n+1)}function E_(e,t,n={}){let r=n.decay??.002,i=n.period??75,a=n.floor??.3,o=n.minSatiety??.6,s=n.cap??40,c=Array.isArray(e)?e:[],l=Number.isFinite(t)&&t>0?t:0,u=0,d=[];for(let e of c){let t=Number.isFinite(e&&e.satiety)?Math.min(1,Math.max(0,e.satiety)):0;d.push(Math.max(a,t-r*l));let n=0;a>o?n=l:t>o&&r>0&&(n=Math.min(l,(t-o)/r)),n>0&&i>0&&(u+=Math.floor(n/i))}return{crystals:Math.min(s,u),satiety:d}}function D_(e){return!Number.isFinite(e)||e<=0?0:Math.floor(e)}var O_=class{constructor(e=0){this.coins=D_(e)}add(e=1){return this.coins+=D_(e),this.coins}canAfford(e){return this.coins>=D_(e)}spend(e){let t=D_(e);return this.coins<t?!1:(this.coins-=t,!0)}toJSON(){return this.coins}};function k_(e,t,n=null){let r={sold:{},coins:0};if(!e||typeof e!=`object`||!t)return r;let i=Object.keys(n&&typeof n==`object`?n:e);for(let t of i){let i=D_(e[t]),a=n?D_(n[t]):i,o=Math.min(i,a);o<=0||(e[t]=i-o,e[t]===0&&delete e[t],r.sold[t]=(r.sold[t]||0)+o,r.coins+=o*__(t))}return r.coins>0&&t.add(r.coins),r}function A_(e,t,n,r=1){if(!e||!t||!Um(n))return!1;let i=D_(r);if(i<=0)return!1;let a=Wm(n)*i;return a<=0||!e.spend(a)?!1:(t.add(n,i),!0)}function j_(){return Object.values(Hm)}var M_=13,N_=15,P_={x:0,z:3.6,w:5.6,d:3.6,y:.36},F_={x:0,z:-.2,r:2.1,floor:.16,rim:1.5},I_={x:0,z:-4.7,r:2,top:.42},L_=-4.3,R_=1.6,z_=-2,B_=4.3,V_={knife:2.4,spoon:.4,spatula:-1.7},H_=7.8,U_=.92,W_=1.15,G_=1.25,K_=.92,q_=.5,J_=2.2,Y_=3,X_=.55,Z_=10251077,Q_=14200963,$_=5164484,ev=3816014,tv=7031349,nv=13621480,rv=16752451,iv=7232452,av=15229851,ov=14256954,sv=3090212,cv=9145238,lv={spiceSugar:{color:16773828,grain:16771496},spiceMint:{color:10349935,grain:8377422}};function uv(e,t){let n=lv[e];if(n)return n;let r=ld[t%ld.length];return{color:r,grain:r}}var dv={berry:X.berry,carrot:X.carrot};function fv(e){return dv[e]?dv[e]:lv[e]?lv[e].color:iv}var pv=.9,mv=.94,hv=.86,gv=class{constructor(){this.mode=`bowl`,this.tool={pos:new B,r:q_,on:!1}}resolveParticle(e,t,n,r=!0){let i=this.mode===`pan`?I_:F_,a=(this.mode===`pan`?I_.top:F_.floor)+n;if(e.y<a){e.y=a;let n=e.x-t.x,i=e.y-t.y,o=e.z-t.z,s=r?pv:1;t.x=e.x-n*s,t.y=e.y-i,t.z=e.z-o*s}let o=e.x-i.x,s=e.z-i.z,c=Math.sqrt(o*o+s*s),l=i.r-n;if(c>l&&c>1e-6){let n=o/c,a=s/c;e.x=i.x+n*l,e.z=i.z+a*l;let u=e.x-t.x,d=e.y-t.y,f=e.z-t.z,p=u*n+f*a,m=r?mv:1;t.x=e.x-(u-n*p)*m-n*p,t.z=e.z-(f-a*p)*m-a*p,t.y=e.y-d*m}this.tool.on&&Md(e,t,n,this.tool.pos,this.tool.r,hv,r)}},_v=class{constructor(e={}){this.host=e.host||null,this.labelHost=e.labelHost||null,this.icons=e.icons||{},this.sfx=e.sfx||{},this.onStep=e.onStep||(()=>{}),this.onFinish=e.onFinish||(()=>{}),this.active=!1,this.scene=null,this.camera=null,this.recipe=null,this.mass=null,this._w=390,this._h=700,this._ray=new Hs,this._ndc=new z,this._p=new B,this._q=new B,this._proj=new B,this._col=new W,this._col2=new W}open(e){return this.active&&this.close(),!e||!Array.isArray(e.steps)||!e.steps.length?!1:(this.recipe=e,this.scene=new In,this.scene.background=new W(2827088),this._geos=[],this._mats=[],this._props=[],this._parts=[],this._labels=[],this._shakers=[],this._tools={},this._surface=new gv,this._t=0,this._hand=null,this._finger=new B,this._fingerPrev=new B,this._fingerVel=new B,this._down=!1,this._finished=null,this._partGeo=null,this._buildCamera(),this._buildTable(),this._buildShakers(),this._buildTools(),this._buildLabels(),this.stepIndex=0,this._beginStep(),this.active=!0,this.host&&(this.host.hidden=!1,this._bindPointer()),!0)}close(){if(!this.scene){this.active=!1;return}if(this.mass){let e=this.mass;e.dispose(),e.mesh&&e.mesh.material.dispose(),e.outline&&e.outline.material.dispose(),e.core&&(e.core.geometry.dispose(),e.core.material.dispose()),this.mass=null}for(let e of this._geos)e.dispose();for(let e of this._mats)e.dispose();this._geos.length=0,this._mats.length=0;for(let e of this._labels)e.el&&e.el.remove&&e.el.remove();this._labels.length=0,this._props.length=0,this._parts.length=0,this._shakers.length=0,this._tools={},this.scene=null,this.camera=null,this.recipe=null,this.step=null,this.active=!1,this.host&&(this.host.hidden=!0,this._unbindPointer())}stats(){return{objects:this.scene?this.scene.children.length:0,geometries:this._geos?this._geos.length:0,materials:this._mats?this._mats.length:0,bodies:+!!this.mass,labels:this._labels?this._labels.length:0}}_mat(e,t){let n=vd(e,t);return this._mats.push(n),n}_geo(e){return this._geos.push(e),e}_piece(e,t,n,r=1.05){let i=xd(this._geo(e),t,r);return(n||this.scene).add(i),i}_buildCamera(){this.camera=new ps(46,this._w/this._h,.1,200),this.resize(this._w,this._h);let e=new bs(16773856,2.1);e.position.set(6,12,7),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=1,e.shadow.camera.far=60,e.shadow.camera.left=-11,e.shadow.camera.right=11,e.shadow.camera.top=11,e.shadow.camera.bottom=-11,e.shadow.bias=-6e-4,this.scene.add(e,e.target),this.scene.add(new xs(14209023,.95)),this.scene.add(new ts(16771570,7035546,.5))}_buildTable(){let e=this._piece(new Ca(M_,.7,N_),Z_,null,1.02);e.position.y=-.35,e.children[0].receiveShadow=!0;let t=this._piece(new Ca(P_.w,P_.y,P_.d),Q_,null,1.04);t.position.set(P_.x,P_.y/2,P_.z),t.children[0].receiveShadow=!0;let n=new K(this._geo(new Ea(F_.r+.16,F_.r*.72,F_.rim,26,1,!0)),this._mat($_,{side:2}));n.position.set(F_.x,F_.rim/2,F_.z),n.receiveShadow=!0,this.scene.add(n);let r=this._piece(new Ea(F_.r*.72,F_.r*.72,.24,24),3912619,null,1.03);r.position.set(F_.x,F_.floor-.1,F_.z),r.children[0].receiveShadow=!0;let i=this._piece(new Ea(I_.r+.2,I_.r,.44,26),ev,null,1.04);i.position.set(I_.x,I_.top-.22,I_.z),i.children[0].receiveShadow=!0,this._piece(new Ca(2.6,.26,.44),tv,null,1.06).position.set(I_.x+I_.r+1.3,I_.top-.14,I_.z)}_buildShakers(){Object.values(Hm).forEach((e,t)=>{let n=uv(e.id,t),r=new U,i=this._piece(new Ea(.42,.5,1.15,14),n.color,r,1.07);i.position.y=.58,i.children[0].castShadow=!0;let a=this._piece(new Ea(.3,.44,.34,14),nv,r,1.08);a.position.y=1.3,r.position.set(L_,0,R_+t*z_),this.scene.add(r),this._shakers.push({id:e.id,icon:e.icon,group:r,look:n,home:r.position.clone(),wobble:0})})}_buildTools(){let e=new U;this._piece(new Ca(.16,.5,2),nv,e,1.06).position.set(0,.5,-.3),this._piece(new Ca(.26,.34,1),tv,e,1.07).position.set(0,.5,1.1),e.position.set(B_,0,V_.knife),this.scene.add(e);let t=new U,n=new K(this._geo(new q(.46,14,10)),this._mat(Q_));n.scale.set(1,.42,1.25),n.position.set(0,.4,-.5),n.castShadow=!0,t.add(n),this._piece(new Ca(.2,.2,1.7),Q_,t,1.08).position.set(0,.42,.75),t.position.set(B_,0,V_.spoon),this.scene.add(t);let r=new U;this._piece(new Ca(1,.12,1.2),rv,r,1.06).position.set(0,.4,-.6),this._piece(new Ca(.2,.2,1.5),tv,r,1.08).position.set(0,.42,.65),r.position.set(B_,0,V_.spatula),this.scene.add(r),this._tools={knife:{group:e,home:e.position.clone()},spoon:{group:t,home:t.position.clone()},spatula:{group:r,home:r.position.clone()}}}_buildLabels(){if(!(!this.labelHost||typeof document>`u`))for(let e of this._shakers){let t=document.createElement(`span`);t.className=`kitchen-label`;let n=this.icons[e.id];if(n){let e=document.createElement(`img`);e.className=`kitchen-label-ico`,e.src=n,e.alt=``,e.draggable=!1,t.appendChild(e)}else t.textContent=e.icon;this.labelHost.appendChild(t),this._labels.push({el:t,obj:e.group,dy:1.9})}}resize(e,t){if(this._w=e>0?e:390,this._h=t>0?t:700,!this.camera)return;let n=this._w/this._h;this.camera.aspect=n;let r=R.degToRad(this.camera.fov)/2,i=Math.atan(Math.tan(r)*n),a=H_/Math.sin(Math.max(.08,Math.min(r,i)));this.camera.position.set(0,a*Math.sin(U_),a*Math.cos(U_)),this.camera.lookAt(0,0,-.4),this.camera.updateProjectionMatrix()}render(e){this.active&&this.scene&&e.render(this.scene,this.camera)}_step(){return this.recipe.steps[this.stepIndex]||null}_beginStep(){let e=this._step();if(!e){this._finish(`ok`);return}let t=this.recipe.ingredients||{};this.step={type:e.type,param:e.param,progress:0,shakes:0,dirX:0,dirRun:0,pieces:null,angle:0,flipLock:0},this._hand=null,this._handShaker=null,this._pressing=null,e.type===`crush`&&this._spawnCrushProps(e.param,t[e.param]||1),e.type===`cut`&&this._spawnCarrot(),e.type===`stir`&&this._spawnMass(),e.type===`fry`&&this._massToPan(),this._emitStep()}_stepDone(){if(this.sfx.ding&&this.sfx.ding(),this.stepIndex++,this.stepIndex>=this.recipe.steps.length){this._finish(`ok`);return}this._beginStep()}_emitStep(){let e=this.step;if(!e)return;let t=Jm[e.type]||{icon:`🍳`,name:``};this.onStep({icon:t.icon,name:t.name,text:this._hintText(e),index:this.stepIndex,total:this.recipe.steps.length})}_hintText(e){let t=(Jm[e.type]||{}).tool;if(e.type===`crush`)return`прижми ягоду пальцем`;if(e.type===`cut`)return this._hand===`knife`?`проведи ножом поперёк морковки`:`возьми нож`;if(e.type===`stir`)return this._hand===`spoon`?`мешай по кругу в чаше`:`возьми ложку`;if(e.type===`sprinkle`){let t=Hm[e.param];return this._hand===`shaker`?`потряси над чашей`:`возьми солонку ${t?t.icon:`🧂`}`}return e.type===`fry`?this._hand===`spatula`?this._fryReady()?`снимай — готово!`:`переверни, когда зарумянится`:`возьми лопатку`:t||``}_finish(e){this._finished||(this._finished=e,this.onFinish(e))}abandon(){this._finish(`abandoned`)}_spawnCrushProps(e,t){let n=fv(e);for(let r=0;r<t;r++){let i=new U,a=this._piece(new q(.44,16,12),n,i,1.07);a.children[0].castShadow=!0;let o=P_.x+(r-(t-1)/2)*1.4;i.position.set(o,P_.y+.42,P_.z),this.scene.add(i),this._props.push({kind:`crush`,id:e,group:i,press:0,color:n,home:i.position.clone()})}}_spawnCarrot(){let e=1.5;this.step.pieces=[],this.step.span=e,this._addCarrotPiece(-1.5,e)}_carrotR(e){return .46-.3*((e+this.step.span)/(2*this.step.span))}_addCarrotPiece(e,t){let n=t-e,r=new U,i=new Ea(this._carrotR(t),this._carrotR(e),n,12),a=this._piece(i,fv(`carrot`),r,1.06);a.rotation.z=Math.PI/2,a.children[0].castShadow=!0,r.position.set(P_.x+(e+t)/2,P_.y+.44,P_.z),this.scene.add(r);let o={x0:e,x1:t,group:r,fly:0};return this.step.pieces.push(o),o}_spawnMass(){this.mass||(this._p.set(F_.x,F_.floor+K_+.35,F_.z),this.mass=new Bp(this.scene,this._p,K_,{subdivisions:1,particleRadius:.12,externalFace:!0,gelColor:iv,coreColor:iv,outlineColor:2760506,gelOpacity:.96}),this._surface.mode=`bowl`,this._massColor(iv),this.sfx.squish&&this.sfx.squish(.4))}_massColor(e){this.mass&&(this.mass.mesh.material.color.setHex(e),this.mass.core.material.color.setHex(e))}_massToPan(){this.mass||this._spawnMass();let e=this.mass;this._p.set(I_.x,I_.top+K_+.05,I_.z).sub(e.com);for(let t=0;t<=e.centerIdx;t++)e.pos[t].add(this._p),e.prev[t].add(this._p);e.com.add(this._p),e.prevCom.copy(e.com),this._surface.mode=`pan`,this.step.cook=[0,0],this.step.side=0,this.step.sizzle=0,this.sfx.splash&&this.sfx.splash(.4)}_fryReady(){let e=this.step&&this.step.cook;return!!e&&e[0]>=4.5&&e[1]>=4.5}_bindPointer(){!this.host||this._onDown||(this._onDown=e=>{this.pointerDown(e.clientX,e.clientY),e.preventDefault()},this._onMove=e=>this.pointerMove(e.clientX,e.clientY),this._onUp=()=>this.pointerUp(),this.host.addEventListener(`pointerdown`,this._onDown),this.host.addEventListener(`pointermove`,this._onMove),this.host.addEventListener(`pointerup`,this._onUp),this.host.addEventListener(`pointercancel`,this._onUp))}_unbindPointer(){!this.host||!this._onDown||(this.host.removeEventListener(`pointerdown`,this._onDown),this.host.removeEventListener(`pointermove`,this._onMove),this.host.removeEventListener(`pointerup`,this._onUp),this.host.removeEventListener(`pointercancel`,this._onUp),this._onDown=null,this._onMove=null,this._onUp=null)}_plane(e,t,n,r){this._ndc.set(e/this._w*2-1,-(t/this._h)*2+1),this._ray.setFromCamera(this._ndc,this.camera);let i=this._ray.ray.origin,a=this._ray.ray.direction,o=Math.abs(a.y)<1e-5?0:(n-i.y)/a.y;return r.set(i.x+a.x*o,n,i.z+a.z*o)}_near(e,t,n=G_){let r=e.x-t.position.x,i=e.z-t.position.z;return r*r+i*i<=n*n}pointerDown(e,t){if(!this.active||this._finished)return;this._down=!0;let n=this.step;if(!n)return;this._plane(e,t,n.type===`crush`?P_.y+.4:W_,this._finger),this._fingerPrev.copy(this._finger),this._fingerVel.set(0,0,0);let r=(Jm[n.type]||{}).tool;if(r===`shaker`&&this._hand!==`shaker`){let e=null;for(let t of this._shakers)this._near(this._finger,t.group)&&(e=t);e&&(e.id===n.param?(this._hand=`shaker`,this._handShaker=e,this.sfx.pop&&this.sfx.pop()):e.wobble=.5,this._emitStep());return}if(r&&r!==`hand`&&r!==`shaker`&&this._hand!==r){let e=this._tools[r];e&&this._near(this._finger,e.group,G_*1.3)&&(this._hand=r,this.sfx.pop&&this.sfx.pop(),this._emitStep());return}if(n.type===`crush`){let e=null,t=1/0;for(let n of this._props){if(n.done)continue;let r=this._finger.x-n.group.position.x,i=this._finger.z-n.group.position.z,a=r*r+i*i;a<t&&a<=G_*G_&&(t=a,e=n)}this._pressing=e}}pointerMove(e,t){if(!this.active||!this._down||this._finished||!this.step)return;let n=this.step.type===`crush`?P_.y+.4:W_;this._plane(e,t,n,this._finger)}pointerUp(){this._down=!1,this._pressing=null,this._surface&&(this._surface.tool.on=!1)}update(e){if(!this.active||!this.scene)return;this._t+=e;let t=Math.min(e,.05);t>0&&this._fingerVel.copy(this._finger).sub(this._fingerPrev).multiplyScalar(1/t);let n=this.step;n&&!this._finished&&(n.type===`crush`?this._updCrush(t):n.type===`cut`?this._updCut(t):n.type===`stir`?this._updStir(t):n.type===`sprinkle`?this._updSprinkle(t):n.type===`fry`&&this._updFry(t)),this.mass&&this.mass.update(t,this._surface),this._updTools(t),this._updParts(t),this._updLabels(),this._fingerPrev.copy(this._finger)}_updCrush(e){for(let t of this._props){if(t.done)continue;let n=this._pressing===t&&this._down;t.press+=n?e/af:-e*1.6,t.press=Math.max(0,Math.min(1,t.press));let r=t.press;t.group.scale.set(1+.4*r,1-.62*r,1+.4*r),t.group.position.y=t.home.y-.42*.62*r,r>=1&&(t.done=!0,t.group.visible=!1,this._burst(t.group.position,t.color,16,2.6),this.sfx.pop&&this.sfx.pop(),this.sfx.squish&&this.sfx.squish(.7))}this._props.every(e=>e.done)&&(this._pressing=null,this._stepDone())}_updCut(e){let t=this.step;if(this._hand!==`knife`)return;let n=this._tools.knife.group;if(n.position.lerp(this._q.copy(this._finger).setY(W_),1-Math.exp(-e*22)),n.rotation.x=-.35,!this._down||Math.hypot(this._fingerVel.x,this._fingerVel.z)<J_)return;let r=this._fingerPrev.z-P_.z,i=this._finger.z-P_.z;if(r===0||r*i>0)return;let a=this._finger.x-P_.x;for(let e of t.pieces){if(e.gone||a<=e.x0+.28||a>=e.x1-.28)continue;e.gone=!0,e.group.visible=!1;let t=this._addCarrotPiece(e.x0,a),n=this._addCarrotPiece(a,e.x1);t.group.position.x-=.12,n.group.position.x+=.12,this.sfx.splat&&this.sfx.splat(.35),this._burst(this._q.set(P_.x+a,P_.y+.5,P_.z),fv(`carrot`),7,1.8);break}let o=t.pieces.filter(e=>!e.gone);if(o.length>=3){for(let e of o)e.group.visible=!1;this._burst(this._q.set(F_.x,F_.floor+.7,F_.z),fv(`carrot`),10,2.2),this._stepDone()}}_updStir(e){let t=this.step;if(this._hand!==`spoon`)return;let n=this._tools.spoon.group;this._q.copy(this._finger);let r=this._q.x-F_.x,i=this._q.z-F_.z,a=Math.hypot(r,i),o=F_.r*.66;if(a>o&&a>1e-6&&(this._q.x=F_.x+r/a*o,this._q.z=F_.z+i/a*o),this._q.y=F_.floor+.75,n.position.lerp(this._q,1-Math.exp(-e*20)),n.rotation.x=.25,this._surface.tool.pos.copy(n.position).add(this._p.set(0,.1,-.5)),this._surface.tool.on=this._down,!this._down)return;let s=Math.atan2(n.position.z-F_.z,n.position.x-F_.x);if(t.hasAng){let e=s-t.angPrev;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;Math.abs(e)<1.2&&(t.angle+=Math.abs(e))}t.angPrev=s,t.hasAng=!0,t.progress=Math.min(1,t.angle/(Math.PI*2*2)),this._col.setHex(iv).lerp(this._col2.setHex(av),t.progress),this._massColor(this._col.getHex()),t.progress>=1&&(this._surface.tool.on=!1,this._stepDone())}_updSprinkle(e){let t=this.step;if(this._hand!==`shaker`)return;let n=this._handShaker;this._q.copy(this._finger).setY(1.8499999999999999),n.group.position.lerp(this._q,1-Math.exp(-e*20));let r=Math.hypot(n.group.position.x-F_.x,n.group.position.z-F_.z)<F_.r*1.25,i=r?2.2:0;if(n.group.rotation.z+=(i-n.group.rotation.z)*Math.min(1,e*8),!this._down||!r)return;let a=this._fingerVel.x,o=a>1.2?1:a<-1.2?-1:0;o!==0&&(t.dirX!==0&&o!==t.dirX&&t.dirRun>X_&&(t.shakes++,t.dirRun=0,this._burst(this._q.copy(n.group.position).setY(n.group.position.y-.4),n.look.grain,9,1.1,.45),this.sfx.pop&&this.sfx.pop()),o===t.dirX?t.dirRun+=Math.abs(this._finger.x-this._fingerPrev.x):(t.dirX=o,t.dirRun=0)),t.progress=Math.min(1,t.shakes/3),t.progress>=1&&this._stepDone()}_updFry(e){let t=this.step;t.sizzle-=e,t.sizzle<=0&&this.mass&&(t.sizzle=.28,this._burst(this._q.copy(this.mass.com).setY(I_.top+.1),16769704,3,1.4,.4),this.sfx.splash&&this.sfx.splash(.12)),t.cook[t.side]+=e;let n=t.cook[t.side];if(n<=4.5)this._col.setHex(av).lerp(this._col2.setHex(ov),n/of);else{let e=Math.min(1,(n-of)/(9-of));this._col.setHex(ov).lerp(this._col2.setHex(sv),e)}if(this._massColor(this._col.getHex()),n>=9){for(let e=0;e<3;e++)this._burst(this._q.copy(this.mass.com),cv,8,1.6,1.5);this.sfx.splat&&this.sfx.splat(.8),this._finish(`burnt`);return}if(this._hand!==`spatula`)return;let r=this._tools.spatula.group;if(this._q.copy(this._finger).setY(I_.top+.35),r.position.lerp(this._q,1-Math.exp(-e*22)),r.rotation.x=-.2,this._surface.tool.pos.copy(r.position),this._surface.tool.on=this._down,!this._down||!this.mass)return;let i=Math.hypot(this._fingerVel.x,this._fingerVel.z),a=Math.hypot(r.position.x-this.mass.com.x,r.position.z-this.mass.com.z);if(!(i<Y_||a>1.82)&&!(t.flipLock>0)){if(t.flipLock=.4,this._fryReady()){this.sfx.ding&&this.sfx.ding(),this._burst(this._q.copy(this.mass.com),ov,14,2.4),this._finish(`ok`);return}t.side^=1,this.mass.addVelocity(this._p.set(0,3.4,0)),this.sfx.splat&&this.sfx.splat(.45),this._burst(this._q.copy(this.mass.com),16769704,6,1.8,.5),this._emitStep()}}_updTools(e){let t=this.step;t&&t.flipLock>0&&(t.flipLock-=e);let n=t?(Jm[t.type]||{}).tool:null;for(let[t,r]of Object.entries(this._tools))this._hand!==t&&(r.group.position.lerp(r.home,1-Math.exp(-e*8)),r.group.rotation.set(0,0,0),r.group.position.y=n===t?Math.sin(this._t*4)*.09+.09:0);for(let n of this._shakers){if(this._hand===`shaker`&&this._handShaker===n)continue;n.group.position.lerp(n.home,1-Math.exp(-e*8)),n.group.rotation.z+=(0-n.group.rotation.z)*Math.min(1,e*8),n.wobble>0&&(n.wobble=Math.max(0,n.wobble-e),n.group.rotation.z=Math.sin(n.wobble*40)*n.wobble*.5);let r=t&&t.type===`sprinkle`&&t.param===n.id;n.group.position.y=r?Math.sin(this._t*4)*.09+.09:0}}_burst(e,t,n,r,i=.8){for(let a=0;a<n;a++){let n=this._parts.find(e=>e.life<=0);if(!n){if(this._parts.length>=90)return;this._partGeo||=this._geo(new q(.1,6,5));let e=this._partGeo,r=new ai({color:t,transparent:!0});this._mats.push(r);let i=new K(e,r);this.scene.add(i),n={mesh:i,vel:new B,life:0,max:1},this._parts.push(n)}n.mesh.material.color.setHex(t),n.mesh.visible=!0,n.mesh.position.copy(e);let a=Math.random()*Math.PI*2,o=.4+Math.random()*.9,s=r*(.4+Math.random()*.8);n.vel.set(Math.cos(a)*s*.6,o*s,Math.sin(a)*s*.6),n.life=i*(.7+Math.random()*.6),n.max=n.life;let c=.6+Math.random()*.8;n.mesh.scale.setScalar(c)}}_updParts(e){for(let t of this._parts)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}t.vel.y-=9*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.material.opacity=Math.max(0,Math.min(1,t.life/t.max))}}dishScreen(){return!this.mass||!this.camera||(this._proj.copy(this.mass.com),this._proj.y+=1.4,this._proj.project(this.camera),!Number.isFinite(this._proj.x)||!Number.isFinite(this._proj.y))?null:{x:(this._proj.x*.5+.5)*this._w,y:(-this._proj.y*.5+.5)*this._h}}_updLabels(){if(this._labels.length)for(let e of this._labels)this._proj.copy(e.obj.position),this._proj.y+=e.dy,this._proj.project(this.camera),e.el.style.left=((this._proj.x*.5+.5)*this._w).toFixed(1)+`px`,e.el.style.top=((-this._proj.y*.5+.5)*this._h).toFixed(1)+`px`}},vv=new B(0,1,0),yv=X.berry,bv=X.soil,xv=.43,Sv=1.3,Cv={sprout:.35,bush:.84,ripen:1.03,ripe:1.12},wv=1,Tv=X.carrot,Ev=X.carrotTop,Dv=X.leafHi,Ov=class{constructor(e,t,n,r=`berry`){this.bush=t,this.kind=r===`carrot`?`carrot`:`berry`,this.pos=n.clone(),this.vel=new B,this.onBush=!0,this.dead=!1,this.beingEaten=!1,this.scale=1,this.R=xv,this._build(e)}_build(e){if(this.group=new U,this._ownedMaterials=[],this.kind===`carrot`){let t=xd(new Ea(this.R*.66,.03,this.R*2,10),Tv,1.07);t.children[0].castShadow=!0,this.group.add(t);let n=vd(Ev);this._ownedMaterials.push(n);for(let e=0;e<3;e++){let t=new K(new q(this.R*.36,8,6),n);t.scale.set(.5,1.1,.5);let r=e/3*Math.PI*2;t.position.set(Math.cos(r)*this.R*.26,this.R*1.3,Math.sin(r)*this.R*.26),t.rotation.z=-Math.cos(r)*.45,t.rotation.x=Math.sin(r)*.45,this.group.add(t)}this.group.position.copy(this.pos),e.add(this.group);return}let t=xd(new q(this.R,14,11),yv,1.07);t.children[0].castShadow=!0,this.group.add(t);let n=new K(new q(this.R*.3,8,6),new ai({color:X.berryCalyx}));n.position.y=this.R*.9,n.scale.set(1,.5,1),this._ownedMaterials.push(n.material),this.group.add(n),this.group.position.copy(this.pos),e.add(this.group)}update(){this._sync()}_sync(){this.group&&(this.group.position.copy(this.pos),this.group.scale.setScalar(Math.max(.001,this.scale)))}startEat(){this.beingEaten=!0}magnetize(e,t){this.pos.lerp(e,.35),this.scale=Math.max(0,1-t),this._sync()}finishEat(){this.dead=!0}cancelEat(){this.beingEaten=!1,this.scale=1,this._sync()}dispose(e){Om(this.group,this._ownedMaterials,e),this.group=null,this._ownedMaterials.length=0}},kv=class{constructor(e,t,n,r,i={}){this.scene=e,this.world=t,this.bush=n,this.dir=r.clone().normalize(),this.plot=i.plot!==!1,this.kind=n.kind===`carrot`?`carrot`:`berry`,this.carrot=this.kind===`carrot`,this.berries=[],this.base=this.dir.clone().multiplyScalar(t.radius).add(t.center),this.t1=new B(-this.dir.z,0,this.dir.x),this.t1.lengthSq()<1e-6&&this.t1.set(1,0,0),this.t1.normalize(),this.t2=new B().crossVectors(this.dir,this.t1).normalize(),this._stage=null,this._build()}_build(){if(this.group=new U,this.group.position.copy(this.base),this.group.quaternion.setFromUnitVectors(vv,this.dir),this.scene.add(this.group),this.plot){let e=new K(new Ea(Sv*.92,Sv*.92,.12,20),vd(bv));e.position.y=.06,e.receiveShadow=!0,this.group.add(e)}if(this.plant=new U,this.carrot){let e=vd(Dv);for(let t=0;t<5;t++){let n=t/5*Math.PI*2,r=new K(new q(.34,10,8),e);r.scale.set(.45,1.5,.45),r.position.set(Math.cos(n)*.3,.5,Math.sin(n)*.3),r.rotation.z=-Math.cos(n)*.5,r.rotation.x=Math.sin(n)*.5,r.castShadow=!0,this.plant.add(r)}this.group.add(this.plant),this._applyStage();return}let e=+!this.plot,t=Math.abs(this.dir.x*7.13+this.dir.z*3.71);this.body=ip(`bush`,{scale:new B(1+e*.08,1-e*.07,1+e*.04),spin:t*6.283%(Math.PI*2),tilt:e*(t*3%1-.5)*.24}),this.plant.add(this.body),this.sprout=ip(`sprout`,{spin:t*4.1%(Math.PI*2)}),this.plant.add(this.sprout),this.group.add(this.plant),this._applyStage()}berryPos(e,t){let n=e/Math.max(1,t)*Math.PI*2+.4,r=this.carrot?.72:.52;return this.base.clone().addScaledVector(this.t1,Math.cos(n)*r).addScaledVector(this.t2,Math.sin(n)*r).addScaledVector(this.dir,this.carrot?.45:1.05)}_applyStage(){let e=this.bush.stage,t=!this.carrot&&e===`sprout`;this.body&&(this.body.visible=!t),this.sprout&&(this.sprout.visible=t),this.plant.scale.setScalar(t?wv:Cv[e]??1),this._stage=e}update(e){let t=[];for(let n=this.berries.length-1;n>=0;n--){let r=this.berries[n];r.update(e),r.dead&&(this.berries.splice(n,1),this.bush.pick(),r.dispose(),t.push(r))}let n=this.bush.n;if(this.berries.length<n){let e=this.bush.yield;for(let t=this.berries.length;t<n;t++)this.berries.push(new Ov(this.scene,this.bush,this.berryPos(t,e),this.kind))}return this.bush.stage!==this._stage&&this._applyStage(),t}dispose(){for(let e of this.berries)e.dispose();this.berries.length=0,this.group&&this.group.parent&&this.group.parent.remove(this.group),this.group=null}};function Av(e,t,n){let r=n.clone().normalize(),i=new U;i.position.copy(r).multiplyScalar(t.radius+.06).add(t.center),i.quaternion.setFromUnitVectors(vv,r);let a=new K(new Ea(Sv,Sv,.08,22),vd(X.patch));a.receiveShadow=!0,i.add(a);let o=new K(new Ea(Sv*.68,Sv*.68,.1,20),vd(X.soilDark));return i.add(o),e.add(i),i}function jv(e,t,n=[]){return!e||!Bm(e,n)?!1:(e.dead=!0,t.add(cm(e.kind).product,1),!0)}var Mv=new B(0,1,0),Nv=X.wood,Pv=X.woodHi,Fv=X.penSoil,Iv=X.board,Lv=X.boardEdge,Rv=X.soil,zv=X.berry,Bv=X.carrot;function Vv(e,t,n=new B){return n.copy(e).normalize().multiplyScalar(t.radius).add(t.center)}function Hv(e,t){let n=e.clone().normalize(),r=new B(-n.z,0,n.x);r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize();let i=new B().crossVectors(n,r).normalize(),a=[];for(let e=0;e<29;e++){let o=e/29*Math.PI*2,s=Zd/t.radius,c=n.clone().multiplyScalar(Math.cos(s)).addScaledVector(r,Math.cos(o)*Math.sin(s)).addScaledVector(i,Math.sin(o)*Math.sin(s)).normalize();for(let e of Qd)a.push({com:c.clone().multiplyScalar(t.radius+e).add(t.center),radius:1})}return a}function Uv(e){let t=e.clone().normalize(),n=new B(-t.z,0,t.x);return n.lengthSq()<1e-6&&n.set(1,0,0),n.normalize(),{d:t,t1:n,t2:new B().crossVectors(t,n).normalize()}}function Wv(e,t,n){let r=lf.clone().addScaledVector(e,-lf.dot(e));return r.lengthSq()<1e-8?0:(r.normalize(),Math.atan2(r.dot(n),r.dot(t)))}function Gv(e,t){let{d:n,t1:r,t2:i}=Uv(e),a=Wv(n,r,i),o=(Zd-$d)/t.radius,s=n.clone().multiplyScalar(Math.cos(o)).addScaledVector(r,Math.cos(a)*Math.sin(o)).addScaledVector(i,Math.sin(a)*Math.sin(o)).normalize(),c=t.radius*(1-Math.cos(o))+.02,l=n.clone().addScaledVector(s,-n.dot(s));l.lengthSq()<1e-8&&l.copy(r),l.normalize();let u=l.clone().negate(),d=new B().crossVectors(s,u).normalize();return{dir:s,pos:s.clone().multiplyScalar(t.radius+c).add(t.center),n:s,away:u,along:d}}function Kv(e,t,n=12){let r=Math.max(1,Math.ceil(n/2)),i=t%r,a=Math.floor(t/r)%2,o=ef-tf-.14,s=r>1?i/(r-1)*2-1:0,c=(a/1*2-1)*(1*.5);return e.pos.clone().addScaledVector(e.along,s*o).addScaledVector(e.away,c).addScaledVector(e.n,tf+.22)}function qv(e,t,n=Zd){let r=e.x-t.x,i=e.y-t.y,a=e.z-t.z;return r*r+i*i+a*a<n*n}var Jv=class{constructor(e,t,n,r=`berry`){this.pos=t.clone(),this.kind=om[r]?r:`berry`,this.penDir=(n||t).clone().normalize(),this.vel=new B,this.onTrough=!0,this.dead=!1,this.beingEaten=!1,this.scale=1,this.R=tf,this._build(e)}_build(e){this.group=new U;let t=this.kind===`carrot`,n=xd(t?new Da(this.R*.75,this.R*2.4,9):new q(this.R,12,9),t?Bv:zv,1.08);n.children[0].castShadow=!0,t&&(n.rotation.x=Math.PI*.5),this.group.add(n),this.group.position.copy(this.pos),e.add(this.group)}update(){this._sync()}_sync(){this.group&&(this.group.position.copy(this.pos),this.group.scale.setScalar(Math.max(.001,this.scale)))}visionLim(e,t,n){let r=t&&t.radius||1,i=Math.max(-1,Math.min(1,e.dot(this.penDir)));return Math.acos(i)*r<7.5?2*Zd:n}startEat(){this.beingEaten=!0}magnetize(e,t){this.pos.lerp(e,.35),this.scale=Math.max(0,1-t),this._sync()}finishEat(){this.dead=!0}cancelEat(){this.beingEaten=!1,this.scale=1,this._sync()}dispose(e){Om(this.group,[],e),this.group=null}},Yv=.13,Xv=1*.2,Zv=87,Qv=1*.3,$v=.15,ey=null;function ty(){return ey||=new ai({color:ud,side:1}),ey}function ny(e,t){let n=e.clone();n.computeBoundingBox();let r=n.boundingBox.getCenter(new B);return n.translate(-r.x,-r.y,-r.z),n.scale(t,t,t),n.translate(r.x,r.y,r.z),n}function ry(e,t=0){let n=[],r=e-Qv;for(let e=0;e<29;e++){let i=e/29*Math.PI*2,a=Math.cos(i)*Zd,o=Math.sin(i)*Zd,s=new Ea(1*.4,1*.5,r,6);s.rotateY(-i),s.translate(a,r/2,o);let c=new q(Qv*1.55,8,6);c.translate(a,r+Qv*.55,o),n.push(t?ny(s,t):s,t?ny(c,t):c)}return Tp(n)}function iy(e,t){let n=new oo(Zd,t,4,Zv);n.rotateX(Math.PI/2);let r=n.attributes.position,i=new B;for(let e=0;e<r.count;e++){i.fromBufferAttribute(r,e);let t=Math.atan2(i.z,i.x);r.setXYZ(e,i.x,i.y-Yv*(.5-.5*Math.cos(t*29)),i.z)}return n.computeVertexNormals(),n.translate(0,e,0),n}var ay=class{constructor(e,t,n){this.scene=e,this.world=t,this.dir=n.clone().normalize(),this.center=Vv(this.dir,t),this.trough=Gv(this.dir,t),this.berries=[],this._build()}_build(){this.group=new U,this.group.position.copy(this.center),this.group.quaternion.setFromUnitVectors(Mv,this.dir),this.scene.add(this.group);let e=new K(new Ea(Zd,Zd,.12,32),vd(Fv));e.position.y=.06,e.receiveShadow=!0,this.group.add(e);let t=Qd[Qd.length-1]+1*.4,n=new K(ry(t),vd(Nv));n.castShadow=!0,this.group.add(n);let r=[],i=[];for(let e of Qd)r.push(iy(e,Xv)),i.push(iy(e,Xv*2.3));this.group.add(new K(Tp(r),vd(Pv))),this.group.add(new K(Tp([ry(t,1.07),...i]),ty())),this._buildTrough()}_buildTrough(){let e=this.trough,t=this.group.quaternion.clone().invert(),n=e=>e.clone().applyQuaternion(t),r=e.pos.clone().sub(this.center).applyQuaternion(t),i=n(e.along),a=n(e.n),o=n(e.away),s=new U;s.position.copy(r),s.quaternion.setFromRotationMatrix(new H().makeBasis(i,a,o));let c=.13,l=.36,u=new Ca(ef*2,.14,2);u.translate(0,.07,0);let d=new K(u,vd(Iv));d.receiveShadow=!0,s.add(d);let f=[];for(let e of[-1,1]){let t=new Ca(ef*2,l,c);t.translate(0,l/2,e*(1-c/2));let n=new Ca(c,l,2);n.translate(e*(ef-c/2),l/2,0),f.push(t,n)}s.add(new K(Tp(f),vd(Lv))),s.add(new K(Tp([ny(u,1.05),...f.map(e=>ny(e,1.05))]),ty()));let p=new K(new q(1,12,7),vd(Rv));p.position.y=.14,p.scale.set(ef*.82,.001,1*.78),p.visible=!1,s.add(p),this.feed=p,this.troughGroup=s,this.group.add(s)}_applyFeed(e){if(!this.feed)return;let t=Math.max(0,Math.min(1,e/12));this.feed.visible=t>0,this.feed.scale.y=.02+$v*t}update(e,t){let n=[];for(let r=this.berries.length-1;r>=0;r--){let i=this.berries[r];i.update(e),i.dead&&(this.berries.splice(r,1),Sm(t,i.kind),i.dispose(),n.push(i))}let r={},i=0;for(let e of Object.keys(om)){let n=Math.max(0,Math.min(12,t?bm(t,e):0));r[e]=n,i+=n}for(let e of Object.keys(om)){let t=this.berries.filter(t=>t.kind===e).length;for(;t>r[e];){let r=this.berries.map(e=>e.kind).lastIndexOf(e),i=this.berries.splice(r,1)[0];i.dead=!0,i.dispose(),n.push(i),--t}}for(let e of Object.keys(om)){let t=this.berries.filter(t=>t.kind===e).length;for(;t<r[e];)this.berries.push(new Jv(this.scene,Kv(this.trough,this.berries.length),this.dir,e)),t+=1}if(this._applyFeed(i),i>0)for(let e=0;e<this.berries.length;e++){let t=this.berries[e];t.beingEaten||(t.pos.copy(Kv(this.trough,e)),t._sync())}return n}dispose(){for(let e of this.berries)e.dead=!0,e.dispose();this.berries.length=0,this.group&&this.group.parent&&this.group.parent.remove(this.group),this.group=null}},oy=450,sy=[{len:280,m0:0,m1:0,night:!1},{len:20,m0:0,m1:1,night:!1},{len:130,m0:1,m1:1,night:!0},{len:20,m0:1,m1:0,night:!0}],cy=(e,t=0)=>Number.isFinite(e)?e:t;function ly(e){let t=e&&typeof e==`object`?e.t:e,n=cy(typeof t==`number`?t:NaN,0);if(!(n>0))return 0;let r=n%oy;return Number.isFinite(r)&&r>=0?r:0}function uy(e){let t=e;for(let e=0;e<sy.length;e++){let n=sy[e];if(t<n.len||e===sy.length-1)return{s:n,u:Math.min(t,n.len)};t-=n.len}return{s:sy[0],u:0}}function dy(e){let{s:t,u:n}=uy(ly(e));return t.m0+(t.m1-t.m0)*(t.len>0?n/t.len:0)}function fy(e){return ly(e)<300?`day`:`night`}function py(e){return 1+1*Math.max(0,Math.min(1,cy(e,0)))}var my=sy.reduce((e,t)=>e+t.len*py((t.m0+t.m1)/2),0);function hy(e){let t=Math.max(0,Math.min(oy,e)),n=0;for(let e of sy){if(t<=0)break;let r=Math.min(t,e.len),i=e.m0+(e.m1-e.m0)*(e.len>0?r/e.len:0)/2;n+=r*py(i),t-=r}return n}function gy(e,t){let n=cy(t,0);if(!(n>0))return 0;let r=ly(e),i=Math.floor(n/oy),a=r+(n-i*oy),o=a<=oy?hy(a)-hy(r):my-hy(r)+hy(a-oy);return i*my+o}var _y=class{constructor(e){this.t=ly(e)}advance(e){let t=cy(e,0);if(t>0){let e=(this.t+t)%oy;this.t=Number.isFinite(e)&&e>=0?e:0}return this}phase(){return fy(this.t)}mix(){return dy(this.t)}isNight(){return this.phase()===`night`}growthMul(){return py(this.mix())}toJSON(){return this.t}},vy={sun:{color:16774372,intensity:2.2},ambient:{color:15260864,intensity:.85},hemi:{sky:X.skyDay,ground:12175258,intensity:.45},background:1,stars:0,sky:X.skyDay,veil:1,lamp:0},yy={sun:{color:16758903},ambient:{color:14264716},hemi:{sky:15907210,ground:9337450},sky:15311236},by={sun:{color:10335999,intensity:.5},ambient:{color:6517672,intensity:.62},hemi:{sky:8293576,ground:4864580,intensity:.5},background:.42,stars:1,sky:X.skyNight,veil:.45,lamp:1};function xy(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=Math.round(r+(o-r)*n),u=Math.round(i+(s-i)*n),d=Math.round(a+(c-a)*n);return l<<16|u<<8|d}var Sy=(e,t,n)=>e+(t-e)*n,Cy=(e,t,n,r)=>r<=.5?xy(e,t,r*2):xy(t,n,r*2-1);function wy(e){let t=Math.max(0,Math.min(1,cy(e,0)));return{sun:{color:Cy(vy.sun.color,yy.sun.color,by.sun.color,t),intensity:Sy(vy.sun.intensity,by.sun.intensity,t)},ambient:{color:Cy(vy.ambient.color,yy.ambient.color,by.ambient.color,t),intensity:Sy(vy.ambient.intensity,by.ambient.intensity,t)},hemi:{sky:Cy(vy.hemi.sky,yy.hemi.sky,by.hemi.sky,t),ground:Cy(vy.hemi.ground,yy.hemi.ground,by.hemi.ground,t),intensity:Sy(vy.hemi.intensity,by.hemi.intensity,t)},background:Sy(vy.background,by.background,t),stars:Sy(vy.stars,by.stars,t),sky:Cy(vy.sky,yy.sky,by.sky,t),veil:Sy(vy.veil,by.veil,t),lamp:Sy(vy.lamp,by.lamp,t)}}var Ty=R.degToRad(60),Ey=R.degToRad(10),Dy=26.3,Oy=Dy/11,ky=.35,Ay=1.2,jy=.9,My=1.3,Ny=zd+Hd,Py=Ud,Fy=.15,Iy=(e,t,n)=>e<t?t:e>n?n:e,Ly=new B,Ry=new B,zy=new B,By=new B,Vy=new B,Hy=new B;function Uy(e,t,n){let r=Ly.copy(t).normalize(),i=Ry.copy(n).sub(e),a=i.length()||1e-6;i.multiplyScalar(1/a);let o=Math.acos(Iy(r.dot(i),-1,1)),s=zy.copy(i).addScaledVector(r,-i.dot(r)),c=s.lengthSq()<1e-12?null:s.normalize();return{grabR:a,ang:o,s:a*o,tang:c}}function Wy(e,t,n){let r=ky*t,i=n/Oy;return Iy((e-r)/(i-r),0,1)}function Gy({center:e,anchorDir:t,fingerPoint:n,R:r,throwMax:i},a=null){let{s:o,tang:s}=Uy(e,t,n);if(o<.35*r||!s)return null;let c=Math.min(Oy*o,i),l=Wy(o,r,i),u=Ty+(Ey-Ty)*l;return{v0:(a||new B).copy(s).multiplyScalar(-Math.cos(u)*c).addScaledVector(Ly,Math.sin(u)*c),s:o,elev:u,pull:l}}function Ky({center:e,anchorDir:t,fingerPoint:n,maxArc:r},i){let{grabR:a,ang:o,tang:s}=Uy(e,t,n),c=Math.min(o,r/a);return!s||c<=1e-6?i.copy(e).addScaledVector(Ly,a):i.copy(e).addScaledVector(Ly,Math.cos(c)*a).addScaledVector(s,Math.sin(c)*a)}function qy({center:e,startPos:t,v0:n,gravityStrength:r,velDamp:i,landRadius:a,falloffR:o=null,falloffP:s=2,dt:c=1/120,maxT:l=40},u=null){let d=u?u.pts:[];d.length=0;let f=0,p=()=>{if(!u){let e=new B;return d.push(e),e}for(;u.pool.length<=f;)u.pool.push(new B);let e=u.pool[f++];return d.push(e),e},m=By.copy(t),h=Vy.copy(n);p().copy(m);let g=0,_=0,v=My,y=!1,b=null,x=l;for(;g<l;){Hy.copy(e).sub(m);let t=Hy.length()||1e-6,n=o!==null&&t>o?r*(o/t)**+s:r;Hy.multiplyScalar(n/t),h.multiplyScalar(i).addScaledVector(Hy,c),m.addScaledVector(h,c),g+=c,_+=h.length()*c;let l=m.distanceTo(e);if(!y)l>a&&(y=!0);else if(l<=a){b=p().copy(m).sub(e).setLength(a).add(e),x=g;break}if(_>=v&&(_=0,p().copy(m),d.length>=192)){let e=1;for(let t=2;t<d.length;t+=2)d[e++].copy(d[t]);d.length=e,f=e,v*=2,_=v/2}}return{points:d,landPos:b,flightT:x}}function Jy(e){let t={damp0:e.velDamp,fall0:e.gravityFalloffR,fallP0:e.gravityFalloffP,grav0:e.gravityStrength,t:0,rose:!1};return e.velDamp=1,e.gravityFalloffR=Ny,e.gravityFalloffP=Py,e.gravityStrength=t.grav0*2,t}function Yy(e,t){e.velDamp=t.damp0,e.gravityFalloffR=t.fall0,e.gravityFalloffP=t.fallP0,e.gravityStrength=t.grav0}var Xy={gravityStrength:0,velDamp:1,falloffR:Ny,falloffP:Py};function Zy(e){return Xy.gravityStrength=e.gravityStrength*2,Xy}function Qy(e,t){let n=Jy(e);return e.addVelocity(t),e.stretchAlong(t,3),n}function $y(e,t,n,r,i){t.t+=n;let a=e.com.x-r.x,o=e.com.y-r.y,s=e.com.z-r.z,c=Math.sqrt(a*a+o*o+s*s),l=i+Fy;if(!t.rose)c>l&&(t.rose=!0);else if(c<=l&&a*e.velocity.x+o*e.velocity.y+s*e.velocity.z<=0)return Yy(e,t),!1;return t.t>=40?(Yy(e,t),!1):!0}var eb=`blob-planet-progress`;function tb(e){return!!e&&typeof e==`object`&&e.v===2}var nb=e=>e<0?0:e>1?1:e;function rb(e,t){if(!e)return null;let n=t?.x??0,r=t?.y??0,i=t?.z??0,a=e.x-n,o=e.y-r,s=e.z-i,c=Math.sqrt(a*a+o*o+s*s);return!Number.isFinite(c)||c<1e-6?null:[a/c,o/c,s/c]}function ib(e,t={}){let n={v:2,blobs:{}};for(let r of e){let e={satiety:r.brain.satiety,energy:r.brain.energy,trust:r.brain.trust};r.brain.lifePhase===`wild`&&(e.wild=1,r.brain.tameTimeout>0&&(e.to=r.brain.tameTimeout));let i=rb(r.blob.com,t.center);i&&(e.dir=i);let a=r.brain.boost;a&&a.t>0&&a.mul>1&&(e.boost={mul:a.mul,t:a.t}),n.blobs[r.blob.id||r.blob.traits.id]=e}n.crystals=Number.isFinite(t.crystals)?Math.max(0,Math.floor(t.crystals)):0,n.coins=Number.isFinite(t.coins)?Math.max(0,Math.floor(t.coins)):0,n.lastSeen=Number.isFinite(t.lastSeen)?t.lastSeen:Date.now(),n.ground=[];for(let e of Array.isArray(t.ground)?t.ground:[]){let t=e&&e.pos;!t||!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.z)||n.ground.push({kind:String(e.kind??``),pos:[t.x,t.y,t.z]})}return t.inv!=null&&(n.inv=(t.inv instanceof dh?t.inv:new dh(t.inv)).toJSON()),t.farm!=null&&(n.farm=(t.farm instanceof wm?t.farm:new wm(t.farm)).toJSON()),n.day=ly(t.day),t.pedia!=null&&(n.pedia=Dh(t.pedia)),n}function ab(e){let t={crystals:0,coins:0,lastSeen:null,ground:[],inv:fh(e),farm:Dm(e),day:ly(e&&typeof e==`object`?e.day:void 0),pedia:Eh(e)};if(!e||typeof e!=`object`)return t;if(Number.isFinite(e.crystals)&&(t.crystals=Math.max(0,Math.floor(e.crystals))),Number.isFinite(e.coins)&&(t.coins=Math.max(0,Math.floor(e.coins))),Number.isFinite(e.lastSeen)&&(t.lastSeen=e.lastSeen),Array.isArray(e.ground))for(let n of e.ground){if(!n||typeof n!=`object`)continue;let e=n.pos;!Array.isArray(e)||e.length!==3||!e.every(Number.isFinite)||t.ground.push({kind:typeof n.kind==`string`?n.kind:``,pos:[e[0],e[1],e[2]]})}return t}function ob(e){let t={};if(!e||typeof e!=`object`||!e.blobs||typeof e.blobs!=`object`)return t;for(let[n,r]of Object.entries(e.blobs)){if(!r||typeof r!=`object`)continue;let e=r.dir;if(!Array.isArray(e)||e.length!==3||!e.every(Number.isFinite))continue;let i=Math.hypot(e[0],e[1],e[2]);i>1e-6&&(t[n]=[e[0]/i,e[1]/i,e[2]/i])}return t}function sb(e,t){if(!t||typeof t!=`object`||t.v!==2||!t.blobs||typeof t.blobs!=`object`)return!1;for(let n of e){let e=t.blobs[n.blob.id||n.blob.traits.id];if(!(!e||typeof e!=`object`)&&(Number.isFinite(e.satiety)&&(n.brain.satiety=nb(e.satiety)),Number.isFinite(e.energy)&&(n.brain.energy=nb(e.energy)),Number.isFinite(e.trust)&&(n.brain.trust=nb(e.trust)),n.brain.lifePhase=e.wild?`wild`:`tamed`,n.brain.tameTimeout=e.wild&&Number.isFinite(e.to)&&e.to>0?e.to:0,n.brain.boost)){let t=rh(e.boost);n.brain.boost.mul=t.mul,n.brain.boost.t=t.t}}return!0}var cb=`blob-mvp-premium`,lb=`blob-mvp-premium-bonus`,ub=`199 ₽`,db=`https://ig.me/m/vitalykharrr`,fb=new Set(`d13d0f0f28eb17e6031fe9dae423b2190d43c13c435f08f1cf9e6696b8628161.993a02c4b56e01af43eda40e7879fc0b3d02db3aa92f6bfd56f86fa2e51eeb96.f672928328f129539d6d8d77ab703379df2e93c5b7799bc57e681e1253cda8e3.afe5f5ff57dc28fd3193ee224c655a091c98c1e470fce233775ee5be2be6cad8.36db4bb703fb3abdbb5a5b2a2d4aaa192357e3257366d1be2b0478a8fdc17796.54281e13089590cc42f6707c4ad629e1b030f1d93aa9550fe280f645ad5a2a9d.df42f976b5845905b063df6b2476c0384155cd7345d164de2d2cc1459dc539ad.5d862ea6f61e2aeccb4155af5858a6e302414e983e36276e04652e00bd4980c5.7fafb1483531e3667576513bc3f455a36281dbf63833dc14dbae84db25cacafc.6c20455fedd47966b28e800a4045e08318091bfbebbd2c359c331f1377398807.b6a05e636f9cc558049c1d89ecc53cfe5f812bc25dfc32bb48dc2fbd51c7a237.4355878e6efcc662d4ecafad6b951b92b0d3b15676318b6dc19a2f04ad8f957b.2419b819ecf43cac4885f0f793f6ca25d1fbfac8fc2433ee6a2c2883734a624a.2f92975584864d67739148bb5d8216eae03b3f6a507ee4b58065cbefb05e2100.b49cdbbcb31468b2c28e17c1079dac2729da0bf60e2b0a2d889e19300bac89bc.0bfceb69a897f98c18c93f00bdfb211cef1e05039ca9e6459104306f38ee7d34.128eb5a6a790ff839853725ab8bdd0b55f41f77eaeed14307836cf0c10879a53.7b9b3f1b42ea76185de9443bbaafbed84e6b41f87dad4118276afc3b18244847.d34d88b983cbbac42358d3b61d9f1e9ad8bff33c9b0b6812e6c309dcd05f93e2.5b38a24ab3b1a7d9e6825ec5f11e1364ec6a4da9089b61e7c25beacf1cfe3afd.7b9c2c3d3ffd9b88c45c530fa9e5939bcafef2efda735ebb5da977b78f79e144.f08b5ebca2454efdcc88ae8c25a1bff4c0ca9965126128232c163d353d61efac.11ffd58028f2d3582e89b8b05d4e6cdf5b924d52fbd3a7ec09f32c7d5871a05d.df7d632373bf841333b335d3431ca8f5f4247405ce72e4de806028792453ec20.498b9761c1aed577c355c189649779788f1294c58229d683bc6fbc84ba2a8ab0.35cc690fa23d28aefef5aa06bbea213b69e11c2f68bcf30f9d4a647aa3dc28e7.543cd837b6583bae8f1f95cd18c2ed29b7dd64fa7e3ea8dc2f075f7e7d1c7e8a.92d2986ec0dd70fcb0e4c3cded590a4f9dc332cc3f380f012b2d6f71d8561812.fbd0dea8ffcef79ce2c196914ec95c29bbfa57ca0f5dee37d62586cbc96bfee1.ce04ea2688583a0c7f189c63a3bdbeb985dea453ac5fc7e0b4645f166317fac7`.split(`.`));function pb(){try{return localStorage.getItem(cb)===`1`}catch{return!1}}async function mb(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function hb(e){let t=String(e||``).trim().toUpperCase();if(!t||!fb.has(await mb(t)))return!1;try{localStorage.setItem(cb,`1`)}catch{}return!0}function gb(){try{return localStorage.getItem(lb)===`1`?!1:(localStorage.setItem(lb,`1`),!0)}catch{return!1}}var _b=[{id:`berry`,icon:`🧺`,text:`Собери 3 плода`,n:3,reward:10,hint:`Тапай спелые ягоды и морковки на диких кустах`},{id:`tame`,icon:`💚`,text:`Приручи блоба`,n:1,reward:20,hint:`Корми любимым из облачка — три раза, и блоб ручной`},{id:`cuddle`,icon:`🤲`,text:`Потискай блоба`,n:1,reward:5,hint:`Ручной блоб подпускает руку — ткни в него пальцем`},{id:`feed`,icon:`🫐`,text:`Угости блоба из лотка`,n:1,reward:5,hint:`Возьми ягоду в лотке внизу и поставь её у блоба`},{id:`crystal`,icon:`💠`,text:`Собери кристалл`,n:1,reward:5,hint:`Сытый блоб роняет кристалл — подбери его тапом`},{id:`sell`,icon:`🛒`,text:`Продай кристалл`,n:1,reward:10,hint:`Загляни в магазин: кристаллы там меняют на монеты`},{id:`plot`,icon:`🌱`,text:`Посади грядку`,n:1,reward:15,hint:`Тапни пустой пятачок у двора и посади грядку`},{id:`pen`,icon:`🏡`,text:`Построй загон`,n:1,reward:20,hint:`Загон в пустом слоте: у приручённых будет свой двор`},{id:`dish`,icon:`🍳`,text:`Приготовь блюдо`,n:1,reward:30,hint:`На кухне из урожая выходит блюдо — попробуй`}],vb=class{constructor(e){if(this.i=0,this.n=0,e&&typeof e==`object`){let t=Number.isFinite(e.i)?Math.floor(e.i):0;this.i=Math.min(Math.max(t,0),_b.length);let n=Number.isFinite(e.n)?Math.floor(e.n):0,r=this.current?this.current.n-1:0;this.n=Math.min(Math.max(n,0),r)}}get done(){return this.i>=_b.length}get current(){return this.done?null:_b[this.i]}notify(e,t=1){let n=this.current;if(!n||n.id!==e)return null;let r=Number.isFinite(t)?Math.max(1,Math.floor(t)):1;return this.n+=r,this.n<n.n?null:(this.i+=1,this.n=0,n)}toJSON(){return{i:this.i,n:this.n}}},yb=[{coins:5,crystals:0},{coins:8,crystals:0},{coins:12,crystals:1},{coins:16,crystals:1},{coins:20,crystals:2},{coins:25,crystals:2},{coins:30,crystals:3}];function bb(e,t=0){return Number.isFinite(e)?Math.floor((e-(Number.isFinite(t)?t:0)*6e4)/864e5):0}function xb(e,t){let n=e&&typeof e==`object`?e:{},r=Number.isFinite(n.last)?Math.floor(n.last):-1/0,i=Number.isFinite(n.streak)&&n.streak>0?Math.floor(n.streak):0;if(t<=r)return{state:{last:r,streak:i},gift:null};let a=i+1,o=yb[Math.min(a,yb.length)-1];return{state:{last:t,streak:a},gift:{...o,day:a}}}var Sb=``+new URL(`лого-блобы-DdRDrpKY.png`,import.meta.url).href,Cb=`nomenu`;function wb(e){try{return new URLSearchParams(e||``).has(Cb)}catch{return!1}}function Tb(e,t){let n=t||(typeof localStorage<`u`?localStorage:null);if(!n||!e)return!1;try{return n.getItem(e)!==null}catch{return!1}}function Eb(e={}){let{hasSave:t=!1,onStart:n=null,onGone:r=null}=e,i=typeof document<`u`?document:null;if(!i)return null;let a=i.createElement(`div`);a.className=`menu-veil`,a.id=`main-menu`;let o=i.createElement(`img`);o.className=`menu-logo`,o.src=Sb,o.alt=`Планета блобов`,o.draggable=!1;let s=i.createElement(`button`);s.className=`ui-btn ui-btn-primary menu-play`,s.textContent=t?`Продолжить`:`Играть`,a.appendChild(o),a.appendChild(s),i.body.appendChild(a);let c=!1;function l(){c||(c=!0,n&&n(),a.classList.add(`closing`),setTimeout(()=>{a.remove(),r&&r()},350))}return s.addEventListener(`click`,l),a.addEventListener(`pointerdown`,e=>e.stopPropagation()),{el:a,close:l}}``+new URL(`гид-указывает-DTvCP3C7.png`,import.meta.url).href;var Db=null,Ob=null,kb=null,Ab=null,jb=null;function Mb(){if(!Db)return;let e=Db;Db=null,Ob=null,kb=null,Ab&&=(Ab.classList.remove(`guide-glow`),null),e.classList.add(`closing`),clearTimeout(jb),jb=setTimeout(()=>e.remove(),150)}function Nb(e,t={}){let n=typeof document<`u`?document:null;if(!n)return null;let{onClose:r=null,image:i=null,anchor:a=null}=t;if(Db&&Ob)return Ob.textContent=String(e),kb&&(kb.src=i||``+new URL(`гид-указывает-DTvCP3C7.png`,import.meta.url).href),Ab&&Ab!==a&&Ab.classList.remove(`guide-glow`),Ab=a||null,Pb(Db,Ab),Db;let o=n.createElement(`div`);o.className=`guide-bubble`;let s=n.createElement(`img`);s.className=`guide-face`,s.src=i||``+new URL(`гид-указывает-DTvCP3C7.png`,import.meta.url).href,s.alt=``,s.draggable=!1;let c=n.createElement(`div`);return c.className=`guide-text`,c.textContent=String(e),o.appendChild(s),o.appendChild(c),n.body.appendChild(o),o.addEventListener(`pointerdown`,e=>{e.stopPropagation(),Mb(),r&&r()}),Db=o,Ob=c,kb=s,Ab=a||null,Pb(o,Ab),o}function Pb(e,t){if(!t||!t.getBoundingClientRect){e.style.removeProperty(`--g-bottom`),e.style.removeProperty(`--g-tail-x`);return}t.classList.add(`guide-glow`);let n=t.getBoundingClientRect();e.style.setProperty(`--g-bottom`,`${Math.round(window.innerHeight-n.top+14)}px`);let r=e.getBoundingClientRect(),i=Math.max(18,Math.min(r.width-42,n.left+n.width/2-r.left-10));e.style.setProperty(`--g-tail-x`,`${Math.round(i)}px`)}var Fb=``+new URL(`berry-OdP3zHSb.png`,import.meta.url).href,Ib=``+new URL(`tame-D8X4c58W.png`,import.meta.url).href,Lb=``+new URL(`cuddle-Dm843XGC.png`,import.meta.url).href,Rb=``+new URL(`feed-CA4uPzPJ.png`,import.meta.url).href,zb=``+new URL(`crystal-BGmo8HDV.png`,import.meta.url).href,Bb=``+new URL(`sell-DOMiSpMa.png`,import.meta.url).href,Vb=``+new URL(`plot-BaJp0bR9.png`,import.meta.url).href,Hb=``+new URL(`pen-BNS9IVqL.png`,import.meta.url).href,Ub=``+new URL(`dish-CHAtzs-n.png`,import.meta.url).href,Wb=``+new URL(`звезда-C2TwZfOD.png`,import.meta.url).href,Gb=``+new URL(`hud-пылесос-DG7AkOca.png`,import.meta.url).href,Kb=``+new URL(`hud-танец-D9ceUCi7.png`,import.meta.url).href,qb=``+new URL(`hud-турбо-BNBUiPHe.png`,import.meta.url).href,Jb=``+new URL(`hud-книга-X654WeBD.png`,import.meta.url).href,Yb=``+new URL(`hud-звук-вкл-DExVwS3_.png`,import.meta.url).href,Xb=``+new URL(`hud-звук-выкл-gZY2ZisC.png`,import.meta.url).href,Zb=``+new URL(`res-монета-B9zi40zc.png`,import.meta.url).href,Qb=``+new URL(`res-кристалл-бирюза-CwFwU43A.png`,import.meta.url).href,$b=``+new URL(`res-ягода-BHevkhI-.png`,import.meta.url).href,ex=``+new URL(`res-морковь-3sSUPCu9.png`,import.meta.url).href,tx=``+new URL(`res-семечко-BDGASHrS.png`,import.meta.url).href,nx=``+new URL(`res-семечко-моркови-CnffzDGP.png`,import.meta.url).href,rx=``+new URL(`res-специя-сахар-DOJ7bHpl.png`,import.meta.url).href,ix=``+new URL(`res-специя-мята-C7iWzmWM.png`,import.meta.url).href,ax=``+new URL(`блюдо-джем-BXliPFDp.png`,import.meta.url).href,ox=``+new URL(`блюдо-мусс-DawegTZe.png`,import.meta.url).href,sx=``+new URL(`блюдо-пирог-66jdiSwc.png`,import.meta.url).href,cx=``+new URL(`ui-кухня-ChTriZJW.png`,import.meta.url).href,lx=``+new URL(`hud-магазин-BPsZw7xL.png`,import.meta.url).href,ux=``+new URL(`стикер-звезда-Cwfu1LIk.png`,import.meta.url).href,dx=``+new URL(`подарок-wDKP9PDf.png`,import.meta.url).href,fx=``+new URL(`вид-пудинг-giosw6pi.png`,import.meta.url).href,px=``+new URL(`вид-прыгль-wiinEg7T.png`,import.meta.url).href,mx=``+new URL(`вид-ласкун-NupyK6CR.png`,import.meta.url).href,hx=``+new URL(`вид-тихоня-DqbGk5MP.png`,import.meta.url).href,gx=``+new URL(`бейдж-дурнота-DSEzgdyG.png`,import.meta.url).href,_x=``+new URL(`бейдж-сон-RaQyWc3O.png`,import.meta.url).href,vx=``+new URL(`бейдж-вопрос-DQ9GdB_K.png`,import.meta.url).href,yx=``+new URL(`бабл-круглый-C0atsd6D.png`,import.meta.url).href,bx=``+new URL(`сердце-CfkfO5F1.png`,import.meta.url).href,xx=``+new URL(`искра-Bno9rr4c.png`,import.meta.url).href,Sx={berry:Fb,tame:Ib,cuddle:Lb,feed:Rb,crystal:zb,sell:Bb,plot:Vb,pen:Hb,dish:Ub},Cx={sell:`btn-shop`,dish:`btn-kitchen`};function wx(e){let t=Cx[e],n=t?document.getElementById(t):null;return n&&!n.hidden?n:null}var Tx=`<img class="coin-inline" src="${Zb}" alt="монеты">`,Ex={berry:$b,carrot:ex},Dx={berry:$b,carrot:ex,seed:tx,seedCarrot:nx,spiceSugar:rx,spiceMint:ix,dishJam:ax,dishMousse:ox,dishCake:sx},Ox={kisel:fx,popryg:px,lipuchka:mx,dichok:hx};function kx(){return{w:window.innerWidth||document.body.clientWidth||390,h:window.innerHeight||document.body.clientHeight||700}}var Ax=new cd({antialias:!0});{let{w:e,h:t}=kx();Ax.setSize(e,t)}Ax.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ax.outputColorSpace=Ue,Ax.toneMapping=0,Ax.shadowMap.enabled=!0,Ax.shadowMap.type=2,document.getElementById(`app`).appendChild(Ax.domElement);var Z=new In;Sd(Z,Dd,`#1a1436`,`#2c2154`);var jx=3,Mx=[];for(let e=0;e<jx;e++)Mx.push(Td(Z,{count:Math.round(520/jx),near:175,far:550}));var Nx=Ed(Z,[{r:7,color:16752451,position:[-120,65,-200]},{r:4.5,color:7069904,position:[145,-35,-175]},{r:3,color:15952096,position:[100,85,-237.5]}]),Px=wd(Z,900),Fx=new bs(16774372,2.2);Fx.position.set(55,85,45),Fx.castShadow=!0,Fx.shadow.mapSize.set(1024,1024),Fx.shadow.camera.near=1,Fx.shadow.camera.far=400,Fx.shadow.camera.left=-75,Fx.shadow.camera.right=75,Fx.shadow.camera.top=75,Fx.shadow.camera.bottom=-75,Fx.shadow.bias=-4e-4,Fx.shadow.radius=4,Z.add(Fx,Fx.target);var Ix=new xs(15260864,.85),Lx=new ts(16182733,12175258,.45);Z.add(Ix,Lx);var Q=new Id({center:new B(0,0,0),radius:zd,sea:{dir:gf,radius:16,depth:Wd,shoreBand:4,buoyancy:30,drag:2,maxDepth:qd,island:{dir:Sf,arc:5,flat:Gd,rise:Kd}}}),{nestDir:Rx,nestPos:zx}=xp(Z,Q),Bx=.85,Vx=[];for(let e of gh)for(let t=0;t<3;t++)Vx.push({id:e,k:t});var Hx={};for(let e of gh)Hx[e]=If(Pf(e),3,Q);var Ux=Vx.map((e,t)=>{let n=Pf(e.id),r=new Yp(Z,Q,Hx[e.id][e.k].clone().multiplyScalar(zd+3),Vd,qp[e.id]);return r.id=`${e.id}-${e.k}`,{blob:r,brain:new n_(r,Q,{...Bf(n,e.k,Q.center,3),wild:!0,species:e.id,homeDir:n}),view:null,flight:null,trailTimer:0,water:new Rd(Q,{minV:rf,fullV:8}),ringTimer:0,alive:!0}});for(let e of Ux){e.baseOthers=[],e.view=new Ld(Q,e.baseOthers);let t=Ux.indexOf(e);e.wildHome=Pf(Vx[t].id)||Rx,e.wildNest={...Bf(e.wildHome,Vx[t].k,Q.center,3)},e.farmNest={...Bf(Rx,t,Q.center,Vx.length)},e.homeNest=e.brain.isTamed?e.farmNest:e.wildNest,e.wasTamed=e.brain.isTamed,e.penSleep=!1}function Wx(){for(let e of Ux){let t=e.brain.isTamed;if(t===e.wasTamed||(e.wasTamed=t,t&&EE(`tame`),e.homeNest=t?e.farmNest:e.wildNest,e.brain.homeDir=t?null:e.wildHome.clone(),e.penSleep))continue;let n=e.brain.sleepState;(n===`awake`||n===`going`)&&e.brain.nestDir&&(e.brain.nestDir.copy(e.homeNest.nestDir),e.brain.nestPos.copy(e.homeNest.nestPos))}}var Gx=[];{let e=typeof location<`u`?Number(new URLSearchParams(location.search).get(`stress`)):0,t=Math.max(0,Math.min(32,Number.isFinite(e)?Math.floor(e):0));if(t>0){let e=zf(t+Vx.length,Q).slice(Vx.length);for(let n=0;n<t;n++){let t=gh[n%gh.length],r=new Yp(Z,Q,e[n].clone().multiplyScalar(zd+3),Vd,qp[t]);r.id=`stress-${n}`;let i=new n_(r,Q,{satiety:.5,energy:.8,wild:!0,species:t});Gx.push({blob:r,brain:i,view:new Ld(Q,[]),ringTimer:0,flight:null,trailTimer:0,alive:!1,water:new Rd(Q,{minV:rf,fullV:8})})}console.log(`[stress] +${t} диких тел, всего ${Ux.length+t}, лимит живых 6`)}}var Kx=Ux.concat(Gx),qx=null,Jx=sf*sf,Yx=[],Xx=0,Zx=0,Qx=new O_(0),$x=h_.id,eS=new dh(lh()),tS=new wm,nS=new _y,rS=Th();try{let e=localStorage.getItem(eb),t=e?JSON.parse(e):null;if(tb(t)){sb(Ux,t);let e=ob(t);for(let t of Ux){let n=e[t.blob.id]||e[t.blob.traits.id];n&&Xp(t.blob,new B(n[0],n[1],n[2]),Q)}let n=ab(t);Xx=n.crystals,Qx=new O_(n.coins),eS=n.inv,tS=n.farm,nS=new _y(n.day),rS=n.pedia;for(let e of n.ground){if(Yx.length>=20)break;Yx.push(new C_(Z,Q,{kind:e.kind,pos:new B(e.pos[0],e.pos[1],e.pos[2])}))}if(n.lastSeen!=null){let e=(Date.now()-n.lastSeen)/1e3,t=Ux.filter(e=>e.brain.isTamed),r=t.length?E_(t.map(e=>({satiety:e.brain.satiety})),e):{crystals:0},i=E_(Ux.map(e=>({satiety:e.brain.satiety})),e);Ux.forEach((e,t)=>{e.brain.satiety=i.satiety[t]}),Zx=r.crystals,Xx+=Zx;for(let t of Ux)ah(t.brain.boost,e);let a=nS.t;nS.advance(e),tS.offlineAdvance(gy(a,e))}}}catch{}function iS(){try{localStorage.setItem(eb,JSON.stringify(ib(Ux,{crystals:Xx,coins:Qx.coins,lastSeen:Date.now(),ground:Yx.map(e=>({kind:e.kind.id,pos:e.pos})),inv:eS,farm:tS,day:nS.t,pedia:rS,center:Q.center})))}catch{}}window.addEventListener(`pagehide`,()=>{if(ZC(),iE.active){oE(`abandoned`);return}iS()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(ZC(),iS())});var aS=Ux[0];aS.blob.setActive(!0);var oS=[],sS=12;function cS(e){e.dispose(Z)}function lS(e,t=`berry`){oS.length>=sS&&(cS(oS.shift()),$.pop()),oS.push(new Rm(Z,Q,e,{startDist:zd+Vd*4,kind:t}))}var uS={dishJam:14717231,dishMousse:9429181,dishCake:15907023,[Gm]:4867666};function dS(e,t){let n=Object.values(Zm).find(e=>e.dish===t);oS.length>=sS&&(cS(oS.shift()),$.pop()),oS.push(new Rm(Z,Q,e,{startDist:zd+Vd*4,dish:t,color:uS[t],boostMul:n?n.boostMul:0,boostDur:n?n.boostDur:0}))}var fS=Of(),pS=kf(),mS=fS.map(e=>e.clone().multiplyScalar(zd).add(Q.center)),hS=fS.map(e=>Av(Z,Q,e)),gS=fS.map(()=>null),_S=fS.map(()=>null),vS=[],yS=pS.map((e,t)=>new kv(Z,Q,tS.wild[t],e,{plot:!1})),bS=Af().map((e,t)=>new kv(Z,Q,tS.wildCarrot[t],e,{plot:!1})),xS=[],SS=[],CS=[],wS=-1,TS=1;function ES(e){let t=tS.slot(e),n=t.building===`pen`;if(n&&!_S[e])_S[e]=new ay(Z,Q,fS[e]),vS.push({slot:e,center:mS[e],r:Zd,spheres:Hv(fS[e],Q)});else if(!n&&_S[e]){_S[e].dispose(),_S[e]=null;let t=vS.findIndex(t=>t.slot===e);t>=0&&vS.splice(t,1)}if(t.bush&&!gS[e])gS[e]=new kv(Z,Q,t.bush,fS[e],{plot:!0});else if(!t.bush&&gS[e]){for(let t of gS[e].berries)t.dead=!0;gS[e].dispose(),gS[e]=null}hS[e].visible=!t.building}for(let e=0;e<tS.slots.length;e++)ES(e);function DS(){for(let e of Kx){if(!e.alive)continue;if(!vS.length){e.view.others=e.baseOthers;continue}let t=e.baseOthers;for(let n of vS)e.blob.com.distanceToSquared(n.center)>11.9*11.9||(t=(t===e.baseOthers?e.baseOthers.slice():t).concat(n.spheres));e.view.others=t}}var OS=e=>e===gC||!!e.flight;function kS(){let e=Ph(Kx,qS.position,6,OS);for(let t of Kx)t.alive=e.has(t);for(let e of Kx){if(!e.alive){e.baseOthers=e.view.others=AS;continue}let t=[];for(let n of Kx)n!==e&&(n.blob.com.distanceToSquared(e.blob.com)>Jx||t.push({com:n.blob.body.com,radius:n.blob.R*Bx}));e.baseOthers=t,e.view.others=t}}var AS=[],jS=new B;function MS(){for(let e of Ux)if(e.alive)if(vS.length&&vS.some(t=>qv(e.blob.com,t.center,t.r))){let t=e.brain.sleepState;if(t!==`awake`&&t!==`going`||!e.brain.nestDir)continue;jS.copy(e.blob.com).sub(Q.center).normalize(),e.brain.nestDir.copy(jS),e.brain.nestPos.copy(jS).multiplyScalar(zd).add(Q.center),e.penSleep=!0}else e.penSleep&&(e.brain.sleepState===`awake`||e.brain.sleepState===`going`)&&(e.brain.nestDir.copy(e.homeNest.nestDir),e.brain.nestPos.copy(e.homeNest.nestPos),e.penSleep=!1)}function NS(e){tS.advance(e*TS*nS.growthMul());for(let t of gS)t&&t.update(e);for(let t of yS)t.update(e);for(let t of bS)t.update(e);xS.length=0;for(let e of gS)if(e)for(let t of e.berries)xS.push(t);for(let e of yS)for(let t of e.berries)xS.push(t);for(let e of bS)for(let t of e.berries)xS.push(t);SS.length=0;for(let t=0;t<_S.length;t++){let n=_S[t];if(n){n.update(e,tS.slot(t));for(let e of n.berries)SS.push(e)}}}var PS=null;function FS(){let e=nS.isNight();if(e!==PS){PS=e;for(let t of Kx)t.brain.setNightSleep(e)}}var IS=new W,LS=new W,RS=new W,zS=new W,BS=new W,VS=0,HS=.22,US=[.11,.17,.23];function WS(e=0){let t=wy(nS.mix());Fx.intensity=t.sun.intensity,Fx.color.copy(IS.setHex(t.sun.color)),Ix.intensity=t.ambient.intensity,Ix.color.copy(LS.setHex(t.ambient.color)),Lx.intensity=t.hemi.intensity,Lx.color.copy(RS.setHex(t.hemi.sky)),Lx.groundColor.copy(zS.setHex(t.hemi.ground)),Z.backgroundIntensity=t.background,VS+=e;for(let e=0;e<Mx.length;e++){let n=Mx[e].material;if(!n)continue;let r=Math.sin(VS*US[e]*Math.PI*2+e*2.1);n.opacity=t.stars*(1-HS*(.5-.5*r))}for(let e of Nx)e.opacity=t.stars;Px&&(Px.material.color.copy(BS.setHex(t.sky)),Px.material.opacity=t.veil),$f(t.lamp)}var $=new Od,GS=!0,KS={nom:()=>{GS&&$.nom()},pum:()=>{GS&&$.pum()},splat:e=>{GS&&$.splat(e)},splash:e=>{GS&&$.splash(e)},squish:e=>{GS&&$.squish(e)}},qS=new ps(54,kx().w/kx().h,.1,2e3),JS=new am(qS,Q.center,{dist:zd*2.6,minDist:6,maxDist:zd*3.4});JS.yaw=Math.atan2(lf.x,lf.z),JS.pitch=Math.asin(lf.y)-.17;var YS=22;function XS(e=!1){let{w:t,h:n}=kx(),r=t/n,i=R.degToRad(qS.fov)/2,a=Math.atan(Math.tan(i)*r),o=Math.min(i,a),s=zd*1.4/Math.tan(o);JS.maxDist=Math.max(zd*2.2,s),e&&(JS.dist=R.clamp(zd+YS/2/Math.tan(o),JS.minDist,JS.maxDist)),JS.dist=R.clamp(JS.dist,JS.minDist,JS.maxDist)}var ZS=new Hs,QS=new z,$S=new xr(Q.center,zd),eC=new B,tC=new B,nC=new B,rC=new B,iC=`idle`,aC=null,oC=0,sC=0,cC=0,lC=0,uC=0,dC=0,fC=0,pC=Vd*2.4,mC=.55,hC=42,gC=null,_C=0,vC=0,yC=new B,bC=new B,xC=new B,SC=0,CC=.3,wC=8,TC=`undecided`,EC=new B,DC=new B,OC=new B,kC=new B,AC=null,jC={pool:[],pts:[]},MC=0,NC=0;function PC(e,t){QS.x=e/window.innerWidth*2-1,QS.y=-(t/window.innerHeight)*2+1}var FC=new xr,IC=new B,LC=1/0;function RC(){ZS.setFromCamera(QS,qS);let e=null,t=1/0;for(let n of Ux){if(qx){let r=qx.pick(ZS,n);r!==null&&r<t&&(t=r,e=n);continue}if(FC.set(n.blob.com,n.blob.R*1.25),!ZS.ray.intersectSphere(FC,IC))continue;let r=IC.distanceTo(ZS.ray.origin);r<t&&(t=r,e=n)}return LC=t,e}var zC=1.1;function BC(){ZS.setFromCamera(QS,qS);let e=null,t=1/0;for(let n of Yx){if(n.dead||(FC.set(n.pos,zC),!ZS.ray.intersectSphere(FC,IC)))continue;let r=IC.distanceTo(ZS.ray.origin);r<t&&(t=r,e=n)}return e?{c:e,t}:null}var VC=1.35;function HC(){ZS.setFromCamera(QS,qS);let e=null,t=1/0,n=Ux.map(e=>e.brain);for(let r of oS.concat(xS)){if(r.dish||!Bm(r,n)||(FC.set(r.pos,VC),!ZS.ray.intersectSphere(FC,IC)))continue;let i=IC.distanceTo(ZS.ray.origin);i<t&&(t=i,e=r)}return e?{b:e,t}:null}function UC(){ZS.setFromCamera(QS,qS);let e=-1,t=1/0;for(let n=0;n<_S.length;n++){let r=_S[n];if(!r||(FC.set(r.trough.pos,nf),!ZS.ray.intersectSphere(FC,IC)))continue;let i=IC.distanceTo(ZS.ray.origin);i<t&&(t=i,e=n)}return e}var WC=Sv+.4;function GC(){ZS.setFromCamera(QS,qS);let e=-1,t=1/0;for(let n=0;n<mS.length;n++){if(FC.set(mS[n],WC),!ZS.ray.intersectSphere(FC,IC))continue;let r=IC.distanceTo(ZS.ray.origin);r<t&&(t=r,e=n)}return e}function KC(e){aS!==e&&(aS.blob.setActive(!1),aS=e,aS.blob.setActive(!0),fD())}function qC(e,t){if(ZS.setFromCamera(QS,qS),$S.radius=e,ZS.ray.intersectSphere($S,t))return t;let n=ZS.ray.origin,r=ZS.ray.direction,i=nC.copy(Q.center).sub(n).dot(r);return rC.copy(n).addScaledVector(r,Math.max(i,0)),t.copy(rC).sub(Q.center).setLength(e).add(Q.center)}var JC=new B;function YC(){qC(zd,JC);for(let e of Kx)e.alive&&e.brain.isWild&&e.brain.notifyScare(JC)}Ax.domElement.addEventListener(`pointerdown`,e=>{if(aC!==null)return;aC=e.pointerId,$.ensure(),PC(e.clientX,e.clientY),oC=e.clientX,sC=e.clientY,lC=performance.now(),uC=e.clientX,dC=e.clientY,fC=0,cT||YC();{let e=UC();if(e>=0){yT(e),iC=`idle`;return}}let t=cT?null:RC(),n=GE?null:BC();if(n&&(!t||n.t<LC)){Kw(n.c,e.clientX,e.clientY),iC=`idle`;return}if(wS=-1,!t&&!GE){let t=HC();if(t){bT(t.b,e.clientX,e.clientY),iC=`idle`;return}wS=GC()}if(t){iC=`grab`,gC=t,KC(t);let e=t.blob;t.flight&&(Yy(e.body,t.flight),t.flight=null,e.flying=!1),SC=performance.now(),ZS.setFromCamera(QS,qS);let n=ZS.ray.intersectSphere(new xr(e.com,e.R),nC)?nC.clone():e.com.clone();e.body.beginGrab(n,5),_C=e.com.distanceTo(Q.center),vC=0,TC=`undecided`,AC=null,yC.copy(n),bC.copy(n),xC.set(0,0,0),e.setGrabbed(!0),e.poke(.5),t.brain.notifyPoke(),$.squish(.6)}else GE?(iC=`vacuum`,KE=!0):(iC=`rotate`,JS.startDrag())}),window.addEventListener(`pointermove`,e=>{if(e.pointerId!==aC||iC===`idle`)return;let t=e.clientX-oC,n=e.clientY-sC;if(oC=e.clientX,sC=e.clientY,PC(e.clientX,e.clientY),fC=Math.max(fC,Math.hypot(e.clientX-uC,e.clientY-dC)),iC===`rotate`){JS.drag(t,n);let e=Math.sign(t);e!==0&&(e===-NC&&Math.abs(t)>7&&(MC=Math.min(1.6,MC+Math.abs(t)*.012)),NC=e)}else iC===`grab`&&(cC=Math.min(1,cC+Math.hypot(t,n)*.02))});function XC(e){if(e.pointerId===aC){if(aC=null,KE=!1,iC===`rotate`&&(JS.endDrag(),performance.now()-lC<250&&fC<6&&(cT?mT(e):!GE&&wS>=0&&AT(wS))),iC===`grab`&&gC){let e=gC.blob,t=e.grabbed;if(EE(`cuddle`),e.body.endGrab(),e.setGrabbed(!1),!t){AC=null,RD(),gC=null,iC=`idle`;return}if(TC===`sling`){AC&&(gC.flight=Qy(e.body,AC.v0),$.pew(AC.pull)),AC=null,RD(),gC=null,iC=`idle`;return}if(xC.length()>.4){nC.copy(xC).clampLength(0,hC);let t=rC.copy(e.com).sub(Q.center).normalize(),n=nC.length(),r=nC.dot(t);tC.copy(nC).addScaledVector(t,-r);let i=tC.length();i>.001&&tC.multiplyScalar(1/i);let a=Math.max(r,0)+n*.25*(i/n);nC.copy(tC).multiplyScalar(i).addScaledVector(t,a).clampLength(0,hC),e.body.addVelocity(nC)}gC=null}iC=`idle`}}window.addEventListener(`pointerup`,XC);function ZC(e){if(e&&e.pointerId!=null&&e.pointerId!==aC)return;let t=aC;aC=null,gC&&=(gC.blob.body.endGrab(),gC.blob.setGrabbed(!1),null),iC===`rotate`&&(JS.endDrag(),JS.yawVel=0,JS.pitchVel=0),iC=`idle`,KE=!1,AC=null,TC=`undecided`,xC.set(0,0,0),vC=0,cC=0,MC=0,NC=0,wS=-1,RD(),t!==null&&Ax.domElement.hasPointerCapture(t)&&Ax.domElement.releasePointerCapture(t)}window.addEventListener(`pointercancel`,ZC),window.addEventListener(`blur`,ZC);var QC=!1;Ax.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),QC=!0,JS.zoom(e.deltaY*.0012*JS.dist)},{passive:!1});var $C=0;Ax.domElement.addEventListener(`touchstart`,e=>{e.touches.length===2&&($C=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),ZC(),GE&&XE(!1),KE=!1)},{passive:!1}),Ax.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length===2){e.preventDefault();let t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);QC=!0,JS.zoom(($C-t)*.003*JS.dist),$C=t}},{passive:!1});function ew(e,t,n=``){let r=document.createElement(`img`);return r.className=t,r.src=e,r.alt=n,r.draggable=!1,r}function tw(e,t,n=``){if(!e)return null;let r=ew(t,`hud-tile`,n);return e.classList.add(`has-tile`),e.replaceChildren(r),r}function nw(e,t,n=``){e&&e.replaceChildren(ew(t,`hud-ico`,n))}function rw(e,t=`ui-ico-img`,n=``){return`<img class="${t}" src="${e}" alt="${n}" draggable="false">`}function iw(e,t=`ui-ico-img`,n=`ui-ico`){let r=sh[e],i=Dx[e];return i?rw(i,t,r&&r.name||``):`<span class="${n}">${r?r.icon:`•`}</span>`}function aw(e,t,n,r=``){e&&e.replaceChildren(ew(t,`title-ico`,r||n),document.createTextNode(n))}var ow=document.getElementById(`btn-mute`),sw=document.getElementById(`sat-fill`),cw=document.getElementById(`energy-fill`),lw=document.getElementById(`hud-temper`),uw=document.getElementById(`temper-label`),dw=!1,fw=tw(ow,Yb,`Звук`);ow.addEventListener(`click`,()=>{dw=!dw,fw?fw.src=dw?Xb:Yb:ow.textContent=dw?`🔇`:`🔊`,ow.title=dw?`Звук выключен`:`Звук`,$.setMuted(dw)});var pw=1;function mw(e){pw=Math.min(e,10);for(let t of Kx)t.brain.ecoTimeScale=e/pw;TS=e/pw}var hw=document.getElementById(`btn-timescale`),gw=typeof location<`u`&&(location.pathname.indexOf(`planet-test`)!==-1||new URLSearchParams(location.search).has(`debug`)),_w=!1;function vw(){if(!hw||_w)return;_w=!0;let e=[1,10,50],t=0;hw.hidden=!1;let n=document.createElement(`span`);n.textContent=`×1`,hw.replaceChildren(ew(qb,`hud-ico`,`Ускорение`),n),hw.addEventListener(`click`,()=>{t=(t+1)%e.length;let r=e[t];mw(r),n.textContent=`×${r}`,hw.classList.toggle(`active`,r>1)})}(gw||pb())&&vw();var yw=document.getElementById(`fps-badge`),bw=2,xw=0,Sw=0,Cw=0,ww=0;function Tw(e){if(!yw||!gw||(xw+=1,Sw+=e,Sw<bw))return;let t=xw/Sw,n=Ax.info.render;yw.textContent=`${t.toFixed(0)} fps · s${(Cw/Math.max(1,xw)).toFixed(1)} r${(ww/Math.max(1,xw)).toFixed(1)} · dc${n.calls} · ${Kx.length}/6`,xw=0,Sw=0,Cw=0,ww=0}yw&&gw&&(yw.hidden=!1);var Ew=Tb(eb),Dw=!wb(location.search),Ow=[];function kw(e){Dw?Ow.push(e):e()}Dw&&Eb({hasSave:Ew,onStart:()=>{$.ensure()},onGone:()=>{for(Dw=!1;Ow.length;)Ow.shift()()}});var Aw=document.getElementById(`hud-crystals`),jw=document.getElementById(`crystal-count`),Mw=document.getElementById(`offline-pop`),Nw=document.getElementById(`offline-n`),Pw=document.getElementById(`hud-coins`),Fw=document.getElementById(`coin-count`);nw(document.querySelector(`#hud-crystals .crystal-ico`),Qb,`Кристаллы`),nw(document.querySelector(`#hud-coins .coin-ico`),Zb,`Монеты`);{let e=document.querySelector(`#hud-satiety .hud-label`);e&&e.replaceChildren(ew($b,`hud-ico`,``),document.createTextNode(`Сытость`))}function Iw(){jw&&(jw.textContent=String(Xx))}function Lw(){Fw&&(Fw.textContent=String(Qx.coins))}function Rw(e){e&&(e.classList.remove(`bump`),e.offsetWidth,e.classList.add(`bump`))}Iw(),Lw();var zw=150,Bw=new Map;function Vw(e){return!!e&&!e.hidden&&!e.classList.contains(`ui-out`)}function Hw(e){if(!e)return;clearTimeout(Bw.get(e)),Bw.delete(e),e.classList.remove(`ui-out`),e.hidden=!1;let t=e.querySelector(`.ui-card`);t&&(t.classList.remove(`ui-pop`),t.offsetWidth,t.classList.add(`ui-pop`))}function Uw(e){Vw(e)&&(e.classList.add(`ui-out`),clearTimeout(Bw.get(e)),Bw.set(e,setTimeout(()=>{e.classList.remove(`ui-out`),e.hidden=!0,Bw.delete(e)},zw)))}if(Mw&&Zx>0){Nw&&(Nw.textContent=String(Zx));let e=Mw.querySelector(`.offline-crystal`);e&&e.replaceChildren(ew(Qb,`gain-ico`,`кристаллы`)),kw(()=>{Hw(Mw)}),Mw.addEventListener(`pointerdown`,e=>{e.stopPropagation(),Uw(Mw)})}var Ww=.55,Gw=[];function Kw(e,t,n){let r=Xx;Xx=T_(Yx,e,Xx),Xx!==r&&(EE(`crystal`),e.dispose(),Iw(),$.ensure(),$.ding(),qw(t,n,{target:Aw,glyph:`◆`,color:`#`+e.kind.color.toString(16).padStart(6,`0`)}))}function qw(e,t,n={}){let r=n.target;if(!r||typeof document>`u`)return;let i=r.getBoundingClientRect();Yw(e,t,i.left+i.width/2,i.top+i.height/2,r,n)}function Jw(e,t,n,r={}){if(!e||typeof document>`u`)return;let i=e.getBoundingClientRect();Yw(i.left+i.width/2,i.top+i.height/2,t,n,e,r)}function Yw(e,t,n,r,i,a){let o=document.createElement(`div`);o.className=`crystal-fly`+(a.cls?` `+a.cls:``),a.ico?o.appendChild(ew(a.ico,`hud-ico`)):o.textContent=a.glyph||`◆`,a.color&&(o.style.color=a.color),document.body.appendChild(o),Gw.push({el:o,life:-(a.delay||0),bump:i,x0:e,y0:t,x1:n,y1:r,cx:(e+n)/2,cy:Math.min(t,r)-90})}function Xw(e){for(let t=Gw.length-1;t>=0;t--){let n=Gw[t];if(n.life+=e,n.life<0){n.el.style.opacity=`0`;continue}let r=n.life/Ww;if(r>=1){n.el.remove(),Gw.splice(t,1),Rw(n.bump);continue}let i=1-r,a=i*i*n.x0+2*i*r*n.cx+r*r*n.x1,o=i*i*n.y0+2*i*r*n.cy+r*r*n.y1;n.el.style.transform=`translate(${a-11}px, ${o-14}px) scale(${1-r*.55})`,n.el.style.opacity=String(r>.8?(1-r)/.2:1)}}var Zw=24,Qw=780,$w=[],eT=0;if(typeof document<`u`)for(let e=0;e<Zw;e++){let e=document.createElement(`div`);e.className=`pop-bit`;let t=document.createElement(`img`);t.className=`pop-img`,t.alt=``,t.draggable=!1,t.hidden=!0,e.appendChild(t),document.body.appendChild(e),$w.push({el:e,img:t,active:!1,life:0,ttl:0,x:0,y:0,vx:0,vy:0,rot:0,spin:0,size:1})}function tT(){for(let e of $w)if(!e.active)return e;let e=$w[eT];return eT=(eT+1)%$w.length,e}function nT(e,t,n,r={}){if(!$w.length||!Number.isFinite(e)||!Number.isFinite(t))return 0;let{color:i=null,sticker:a=null,size:o=1,ttl:s=.3,dir:c=-Math.PI/2,spread:l=Math.PI*2,speed:u=200}=r,d=Math.max(1,Math.min(n,Zw));for(let n=0;n<d;n++){let r=tT(),f=c+(d>1?n/(d-1)-.5:0)*l,p=u*(.75+Math.random()*.5);r.x=e,r.y=t,r.vx=Math.cos(f)*p,r.vy=Math.sin(f)*p,r.rot=Math.random()*Math.PI,r.spin=(Math.random()-.5)*9,r.size=o,r.life=0,r.ttl=s,r.active=!0,r.el.style.background=a?`none`:i||`#fff`,r.img.hidden=!a,a&&r.img.src!==a&&(r.img.src=a),r.el.style.opacity=`1`}return d}function rT(e){for(let t of $w){if(!t.active)continue;t.life+=e;let n=t.life/t.ttl;if(n>=1){t.active=!1,t.el.style.opacity=`0`;continue}t.vy+=Qw*e,t.x+=t.vx*e,t.y+=t.vy*e,t.rot+=t.spin*e,t.el.style.transform=`translate(${(t.x-9).toFixed(1)}px, ${(t.y-9).toFixed(1)}px) rotate(${t.rot.toFixed(2)}rad) scale(${(t.size*(1-n*.35)).toFixed(3)})`,t.el.style.opacity=(1-n*n).toFixed(3)}}var iT=document.getElementById(`hud-tray`),aT=document.getElementById(`tray-slots`),oT=document.getElementById(`tray-head`),sT=new Map,cT=null;if(aT)for(let e of Object.values(sh)){let t=document.createElement(`button`);t.className=`tray-slot`,t.dataset.product=e.id,t.title=e.name,t.innerHTML=`${iw(e.id,`slot-ico-img`,`slot-ico`)}<span class="slot-n">0</span>`,t.addEventListener(`click`,()=>{$.ensure(),uT(cT===e.id?null:e.id)}),aT.appendChild(t),sT.set(e.id,t)}oT&&iT&&oT.addEventListener(`click`,()=>{iT.classList.toggle(`collapsed`),uT(null)});function lT(){for(let[e,t]of sT){let n=eS.count(e);t.querySelector(`.slot-n`).textContent=String(n),t.classList.toggle(`empty`,n===0)}}lT();function uT(e){let t=e&&eS.count(e)>0?e:null;if(t!==cT){cT=t;for(let[e,t]of sT)t.classList.toggle(`armed`,e===cT)}}typeof document<`u`&&document.addEventListener(`pointerdown`,e=>{if(!cT)return;let t=e.target;t!==Ax.domElement&&(t&&t.closest&&t.closest(`.tray-slot`)||uT(null))},!0);var dT={};for(let e of Object.values(lm))e.seed&&e.bush&&(dT[e.seed]=e.id);var fT={};for(let e of Object.values(om))fT[e.product]=t=>lS(t,e.id);for(let e of Object.values(Zm))fT[e.dish]=t=>dS(t,e.dish);fT[Gm]=e=>dS(e,Gm);var pT=new B;function mT(e){let t=cT;if(!t)return;e&&PC(e.clientX,e.clientY);let n=dT[t];if(n){let e=GC();if(e<0){uT(null);return}ST(e,n),uT(eS.count(t)>0?t:null);return}if(!fT[t]){uT(null);return}if(ZS.setFromCamera(QS,qS),ZS.ray.intersectSphere(new xr(Q.center,zd),pT)){if(eS.remove(t,1)!==1){uT(null);return}fT[t](pT.clone().sub(Q.center)),EE(`feed`),lT(),$.ensure(),$.squish(.25),uT(eS.count(t)>0?t:null)}}function hT(e,t,n,r=`berry`){let i=cm(r),a=n?tS.collected(eS,1,i.id):0;EE(`berry`),lT(),$.ensure(),$.pop(),nT(e,t,4,{color:`#`+(X[i.id]||X.berry).toString(16).padStart(6,`0`),speed:210,ttl:.3}),qw(e,t,{target:sT.get(i.product)||iT,glyph:i.icon,cls:`berry-fly`}),a>0&&($.ding(),qw(e,t,{target:sT.get(i.seed)||iT,glyph:i.seedIcon,cls:`seed-fly`}))}function gT(e,t=`berry`){let n=tS.slot(e),r=cm(t);if(!n||!hm(n.building)||ym(n)>=12||eS.count(r.product)<=0||!xm(n,r.id))return!1;eS.remove(r.product,1),lT(),$.ensure(),$.pop();let i=_S[e];if(i){let e=ZE(i.trough.pos);Jw(sT.get(r.product)||iT,e.x,e.y,{glyph:r.icon,cls:`berry-fly`})}return!0}var _T=document.getElementById(`trough-menu`);function vT(){Uw(_T)}function yT(e){let t=tS.slot(e);if(!_T||!t||!hm(t.building))return;_T.innerHTML=``;let n=document.createElement(`div`);n.className=`ui-card`;let r=document.createElement(`div`);r.className=`ui-title`;let i=ym(t);r.textContent=`🥣 Кормушка · ${i}/12`,n.appendChild(r);for(let r of Object.values(om)){let a=eS.count(r.product),o=bm(t,r.id),s=a>0&&i<12,c=kT(`<span class="ui-ico">${r.icon}</span><span>${r.name} ${o}/12</span><span class="ui-note">в лотке ${a} · добавить</span>`,s?``:`disabled`);s&&c.addEventListener(`click`,()=>{gT(e,r.id)&&yT(e)}),n.appendChild(c)}let a=document.createElement(`div`);a.className=`ui-hint`,a.textContent=`блобы едят из кормушки любой корм`,n.appendChild(a),n.addEventListener(`pointerdown`,e=>e.stopPropagation()),_T.appendChild(n),Hw(_T)}_T&&_T.addEventListener(`pointerdown`,()=>vT());function bT(e,t,n){let r=Ux.map(e=>e.brain);if(e&&e.onBush){if(!jv(e,eS,r))return}else{if(!Vm(oS,e,eS,r))return;cS(e)}hT(t,n,!!(e&&e.onBush),e&&e.kind)}var xT=document.getElementById(`slot-menu`);function ST(e,t=`plot`){return tS.plant(e,eS,t,Qx)?(ES(e),EE(lm[t].bush?`plot`:t),Lw(),lT(),$.ensure(),$.squish(.35),TT(e),!0):!1}var CT=.32,wT=[];function TT(e){pO(mS[e],{color:X.soil,life:.35,r1:1.4,alpha:.85});let t=gS[e];t&&t.plant&&wT.push({view:t,t:0})}function ET(e){for(let t=wT.length-1;t>=0;t--){let n=wT[t],r=n.view.plant;if(!r||!n.view.group){wT.splice(t,1);continue}n.t+=e;let i=Math.min(1,n.t/CT),a=r.scale.x;if(i>=1){r.scale.y=a,wT.splice(t,1);continue}let o=Math.sin(Math.min(1,i/.66)*Math.PI*.5),s=i<.66?.15+1*o:1.15-.15*((i-.66)/.34);r.scale.y=a*s}}function DT(e){return tS.demolish(e)?(ES(e),$.ensure(),$.pop(),!0):!1}function OT(){Uw(xT)}function kT(e,t){let n=document.createElement(`button`);return n.className=`ui-row`+(t?` `+t:``),n.innerHTML=e,n}function AT(e){let t=tS.slot(e);if(!xT||!t)return;xT.innerHTML=``;let n=document.createElement(`div`);n.className=`ui-card`;let r=document.createElement(`div`);if(r.className=`ui-title`,n.appendChild(r),t.building){let i=lm[t.building];r.textContent=`${i.icon} ${i.name}`;let a=kT(`<span class="ui-ico">🗑</span><span>Снести</span>`);a.addEventListener(`click`,()=>{DT(e),OT()}),n.appendChild(a)}else{r.textContent=`Что построить?`;for(let t of Object.values(lm)){if(!t.ready){let e=kT(`<span class="ui-ico">${t.icon}</span><span>${t.name}</span><span class="ui-note">🔒 скоро</span>`,`disabled`);n.appendChild(e);continue}let r=dm(t.id),i=t.seed?eS.count(t.seed):0,a=t.seed&&sh[t.seed]?sh[t.seed].icon:``,o=Qx.canAfford(r)&&(!t.seed||i>0),s=`<span class="ui-price">${r} ${Tx}</span>`,c=kT(`<span class="ui-ico">${t.icon}</span><span>${t.name}</span><span class="ui-note">${s}${t.seed?` · ${a} ${i}`:``}</span>`,o?``:`disabled`);o&&c.addEventListener(`click`,()=>{ST(e,t.id),OT()}),n.appendChild(c)}}n.addEventListener(`pointerdown`,e=>e.stopPropagation()),xT.appendChild(n),Hw(xT)}xT&&xT.addEventListener(`pointerdown`,()=>OT());var jT=document.getElementById(`shop-panel`),MT=document.getElementById(`btn-shop`);function NT(){Uw(jT)}function PT(e){let t={[$x]:Xx},n=k_(t,Qx,e===null?null:{[$x]:e});n.coins<=0||(EE(`sell`,Object.values(n.sold).reduce((e,t)=>e+t,0)),Xx=t[$x]||0,Iw(),Lw(),Rw(Pw),$.ensure(),$.ding(),LT(n.coins),RT(),iS())}var FT=5,IT=.07;function LT(e){if(!jT||typeof document>`u`)return 0;let t=(jT.querySelector(`.ui-card`)||jT).getBoundingClientRect(),n=Math.max(1,Math.min(FT,e));for(let e=0;e<n;e++)qw(t.left+t.width*(.35+Math.random()*.3),t.top+t.height*(.3+Math.random()*.2),{target:Pw,ico:Zb,cls:`coin-fly`,delay:e*IT});return n}function RT(){if(!jT)return;jT.innerHTML=``;let e=document.createElement(`div`);e.className=`ui-card`;let t=document.createElement(`div`);t.className=`ui-title`,aw(t,Zb,`Магазин`,`Магазин`),e.appendChild(t);let n=document.createElement(`div`);n.className=`ui-sub`,n.textContent=`Продать`,e.appendChild(n);let r=__($x),i=document.createElement(`div`);i.className=`ui-row shop-item`,i.innerHTML=`<span class="shop-line">${rw(Qb,`ui-ico-img`,`Кристаллы`)}<span>Кристаллы</span><span class="ui-note">× ${Xx}</span></span><span class="shop-rate"><span class="ui-price">${r} ${Tx}</span> за штуку</span>`,e.appendChild(i);let a=Xx>0,o=document.createElement(`div`);o.className=`ui-btns`;let s=document.createElement(`button`);s.className=`ui-btn`+(a?``:` disabled`),s.textContent=`Продать 1`;let c=document.createElement(`button`);c.className=`ui-btn ui-btn-primary`+(a?``:` disabled`),c.textContent=`Продать всё`,a&&(s.addEventListener(`click`,()=>PT(1)),c.addEventListener(`click`,()=>PT(null))),o.appendChild(s),o.appendChild(c),e.appendChild(o);let l=document.createElement(`div`);l.className=`ui-sub`,l.textContent=`Специи`,e.appendChild(l);for(let t of j_()){let n=Wm(t.id),r=Qx.canAfford(n),i=kT(`${iw(t.id)}<span>${t.name}</span><span class="ui-note"><span class="ui-price">${n} ${Tx}</span> · ${eS.count(t.id)}</span>`,r?``:`disabled`);r&&i.addEventListener(`click`,()=>{A_(Qx,eS,t.id)&&(Lw(),lT(),Rw(Pw),$.ensure(),$.ding(),RT(),iS())}),e.appendChild(i)}let u=document.createElement(`div`);if(u.className=`ui-sub`,u.textContent=`Премиум`,e.appendChild(u),pb()){let t=document.createElement(`div`);t.className=`ui-row shop-item`,t.innerHTML=`<span class="shop-line">${rw(ux,`ui-ico-img`,`Премиум`)}<span>Премиум активен</span><span class="ui-note">турбо ⏩ в игре</span></span>`,e.appendChild(t)}else{let t=document.createElement(`div`);t.className=`ui-row shop-item`,t.innerHTML=`<span class="shop-line">${rw(ux,`ui-ico-img`,`Премиум`)}<span>Премиум</span><span class="ui-note">турбо ⏩ + 250 ${Tx}</span></span><span class="shop-rate"><span class="ui-price">${ub}</span></span>`,e.appendChild(t);let n=document.createElement(`div`);n.className=`ui-btns`;let r=document.createElement(`a`);r.className=`ui-btn ui-btn-primary`,r.href=db,r.target=`_blank`,r.rel=`noopener`,r.textContent=`Купить код`,n.appendChild(r),e.appendChild(n);let i=document.createElement(`div`);i.className=`ui-btns`;let a=document.createElement(`input`);a.className=`ui-input`,a.placeholder=`код из переписки`,a.autocapitalize=`characters`;let o=document.createElement(`button`);o.className=`ui-btn`,o.textContent=`Активировать`,o.addEventListener(`click`,async()=>{if(!await hb(a.value)){a.value=``,a.placeholder=`неверный код`;return}gb()&&(Qx.add(250),Lw(),Rw(Pw)),vw(),$.ensure(),$.ding(),iS(),RT()}),i.appendChild(a),i.appendChild(o),e.appendChild(i)}let d=document.createElement(`div`);d.className=`ui-hint`,d.textContent=`постройки покупаются на пятачках базы`,e.appendChild(d),e.addEventListener(`pointerdown`,e=>e.stopPropagation()),jT.appendChild(e),Hw(jT)}jT&&jT.addEventListener(`pointerdown`,()=>NT()),MT&&MT.addEventListener(`click`,()=>{$.ensure(),Vw(jT)?NT():RT()});var zT=document.getElementById(`kitchen-panel`),BT=document.getElementById(`btn-kitchen`);function VT(){Uw(zT)}function HT(e){let t=[];for(let[n,r]of Object.entries(e.ingredients)){let e=eS.count(n);t.push(`${iw(n,`need-ico`)} ${e}/${r}`)}return t.join(` · `)}function UT(){if(!zT)return;zT.innerHTML=``;let e=document.createElement(`div`);e.className=`ui-card`;let t=document.createElement(`div`);t.className=`ui-title`,aw(t,cx,`Кухня`),e.appendChild(t);let n=document.createElement(`div`);n.className=`ui-sub`,n.textContent=`Рецепты`,e.appendChild(n);for(let t of Object.values(Zm)){let n=eh(eS,t),r=kT(`${iw(t.dish)}<span class="kitchen-line"><span>${t.name}</span><span class="kitchen-need">${HT(t)}</span></span><span class="ui-note">${rw(Qb,`need-ico`,`кристаллы`)} ×${t.boostMul} · ${t.boostDur} c</span>`,n?``:`disabled`);n&&r.addEventListener(`click`,()=>{VT(),aE(t)}),e.appendChild(r)}let r=document.createElement(`div`);r.className=`ui-hint`,r.textContent=`блюдо ускоряет кристаллы · специи покупаются в магазине`,e.appendChild(r),e.addEventListener(`pointerdown`,e=>e.stopPropagation()),zT.appendChild(e),Hw(zT)}zT&&zT.addEventListener(`pointerdown`,()=>VT()),BT&&BT.addEventListener(`click`,()=>{$.ensure(),Vw(zT)?VT():UT()});var WT=document.getElementById(`pedia-panel`),GT=document.getElementById(`btn-pedia`);tw(GT,Jb,`Блобопедия`);function KT(){Uw(WT)}function qT(e){return Ux.some(t=>t.brain.species===e&&t.brain.isTamed)}function JT(e){let t=vh(e),n=t&&qp[t.temperament];return n?`#`+n.palette.gel.toString(16).padStart(6,`0`):`#9a8f80`}var YT={unknown:`не встречен`,seen:`встречен`,tamed:`приручён`};function XT(e){if(!e)return`<span class="pedia-hidden">?</span>`;let t=sh[e];return`${iw(e,`taste-ico`)} ${t?t.name:e}`}function ZT(){if(!WT)return;WT.innerHTML=``;let e=document.createElement(`div`);e.className=`ui-card pedia-list`;let t=document.createElement(`div`);t.className=`ui-title`,aw(t,Jb,`Блобопедия`),e.appendChild(t);let n=Nh(rS,qT);for(let t of n){let n=t.status===xh,r=document.createElement(`div`);r.className=`ui-row pedia-card`+(n?` pedia-unknown`:``);let i=Ox[t.id],a=i?rw(i,`pedia-portrait`,n?`не встречен`:t.name):n?`?`:t.icon,o=n?`???`:t.name,s=n?``:`<span class="pedia-habit">${t.habit}</span><span class="pedia-tastes"><span class="pedia-taste">${XT(t.fruit)}</span><span class="pedia-taste">${XT(t.dish)}</span></span>`;r.innerHTML=`<span class="pedia-face" style="background:${n?``:JT(t.id)}">${a}</span><span class="pedia-body"><span class="pedia-head"><span class="pedia-name">${o}</span><span class="pedia-badge">${YT[t.status]}</span></span>`+s+`</span>`,e.appendChild(r)}let r=n.filter(e=>e.status!==xh).length,i=document.createElement(`div`);i.className=`pedia-total`,i.textContent=`Встречено ${r}/${n.length}`,e.appendChild(i);let a=document.createElement(`div`);a.className=`ui-hint`,a.textContent=`вкус открывается приручением · блюдо — первым угощением`,e.appendChild(a),e.addEventListener(`pointerdown`,e=>e.stopPropagation()),WT.appendChild(e),Hw(WT)}WT&&WT.addEventListener(`pointerdown`,()=>KT()),GT&&GT.addEventListener(`click`,()=>{$.ensure(),Vw(WT)?KT():ZT()});var QT=document.getElementById(`kitchen-scene`),$T=document.getElementById(`kitchen-hint`),eE=document.getElementById(`kitchen-labels`),tE=document.getElementById(`kitchen-exit`),nE=document.getElementById(`kitchen-confirm`),rE=null,iE=new _v({host:QT,labelHost:eE,icons:Dx,sfx:{pop:()=>$.pop(),ding:()=>$.ding(),squish:e=>$.squish(e),splat:e=>$.splat(e),splash:e=>$.splash(e)},onStep:e=>{$T&&($T.innerHTML=`<span class="ui-ico">${e.icon}</span><span>${e.text}</span>`)},onFinish:e=>oE(e)});function aE(e){let t=th(eS,e);if(!t)return;lT(),rE=t;let{w:n,h:r}=kx();if(iE.resize(n,r),!iE.open(t)){rE=null;return}document.body.classList.add(`cooking`),sE(),$.ensure(),$.pop()}function oE(e){let t=rE;rE=null,sE();let n=iE.dishScreen();if(iE.close(),document.body.classList.remove(`cooking`),!t)return;let r=nh(t,e);r.dish&&EE(`dish`);let i=r.dish||r.ember;eS.add(i,1),lT(),Rw(sT.get(i)||iT),$.ensure(),r.dish?$.ding():$.pop(),r.dish&&n&&nT(n.x,n.y,4,{sticker:xx,size:1.5,ttl:.7,spread:Math.PI*1.6,speed:200}),iS()}function sE(){Uw(nE)}function cE(){if(!nE)return;nE.innerHTML=``;let e=document.createElement(`div`);e.className=`ui-card`;let t=document.createElement(`div`);t.className=`ui-title`,t.textContent=`Бросить готовку?`,e.appendChild(t);let n=document.createElement(`div`);n.className=`ui-note`,n.textContent=`ингредиенты уже потрачены — останется уголёк`,e.appendChild(n);let r=kT(`${iw(Gm)}<span>Бросить</span>`);r.addEventListener(`click`,()=>iE.abandon()),e.appendChild(r);let i=kT(`${rw(cx)}<span>Готовить дальше</span>`,`ui-btn-primary`);i.addEventListener(`click`,()=>sE()),e.appendChild(i),e.addEventListener(`pointerdown`,e=>e.stopPropagation()),nE.appendChild(e),Hw(nE)}tE&&(tE.addEventListener(`pointerdown`,e=>e.stopPropagation()),tE.addEventListener(`click`,()=>{$.ensure(),Vw(nE)?sE():cE()})),nE&&nE.addEventListener(`pointerdown`,e=>{e.stopPropagation(),sE()});var lE=document.getElementById(`btn-sleep`),uE=document.getElementById(`btn-dance`);tw(uE,Kb,`Танец`),tw(document.getElementById(`btn-shop`),lx,`Магазин`),tw(document.getElementById(`btn-kitchen`),cx,`Кухня`);var dE=10,fE=0,pE=0,mE=5,hE=null;function gE(){return Ux.some(e=>e.brain.forcedSleep)}function _E(){if(!lE)return;let e=gE();e!==hE&&(hE=e,lE.textContent=e?`☀️`:`😴`,lE.title=e?`Подъём`:`Сон`)}_E();var vE=`blob-planet-goals`,yE=null;try{yE=JSON.parse(localStorage.getItem(vE)||`null`)}catch{}var bE=new vb(yE),xE=document.getElementById(`goal-chip`),SE=!1,CE=document.getElementById(`goals-panel`);function wE(){try{localStorage.setItem(vE,JSON.stringify(bE))}catch{}}function TE(){if(!xE)return;let e=bE.current;if(!e){xE.hidden=!0;return}xE.hidden=!1,xE.innerHTML=`${e.n>1?`${e.icon} ${e.text} · ${bE.n}/${e.n}`:`${e.icon} ${e.text}`}<span class="goal-chip-more">▾</span>`,xE.classList.toggle(`goal-shine`,!SE)}function EE(e,t=1){let n=bE.notify(e,t);wE(),n&&(Mb(),NE(AE),Qx.add(n.reward),Lw(),Rw(Pw),$.ensure(),$.ding(),iS()),TE(),n&&xE&&(Rw(xE),xE.classList.remove(`goal-flash`),xE.offsetWidth,xE.classList.add(`goal-flash`))}function DE(){Uw(CE)}function OE(){if(!CE)return;CE.innerHTML=``;let e=document.createElement(`div`);e.className=`ui-card`;let t=document.createElement(`div`);t.className=`ui-title`,aw(t,ux,`Цели`),e.appendChild(t),_b.forEach((t,n)=>{let r=n<bE.i,i=document.createElement(`div`);i.className=`ui-row shop-item`+(r?` goal-done`:n>bE.i?` goal-future`:``);let a=Sx[t.id]?rw(Sx[t.id],`goal-ico`,t.text):`<span class="ui-ico">${t.icon}</span>`,o=r?rw(ux,`goal-stamp`,`выполнено`):n===bE.i&&t.n>1?`${bE.n}/${t.n}`:``;i.innerHTML=`<span class="shop-line">${a}<span>${t.text}</span><span class="ui-note">${o}</span></span><span class="shop-rate"><span class="ui-price">+${t.reward} ${Tx}</span></span>`,e.appendChild(i)});let n=document.createElement(`div`);n.className=`ui-hint`,n.textContent=bE.done?`все цели выполнены — планета твоя`:`тап по затемнению — закрыть`,e.appendChild(n),e.addEventListener(`pointerdown`,e=>e.stopPropagation()),CE.appendChild(e),Hw(CE)}CE&&CE.addEventListener(`pointerdown`,()=>DE()),xE&&xE.addEventListener(`click`,()=>{SE=!0,xE.classList.remove(`goal-shine`),Vw(CE)?DE():OE()}),TE();var kE=3e3,AE=1200,jE=null,ME=null;function NE(e){clearTimeout(jE),jE=setTimeout(()=>{if([...document.querySelectorAll(`.ui-card`)].some(e=>!e.closest(`[hidden]`)&&!e.classList.contains(`ui-out`))){NE(1500);return}let e=bE.current;!e||!e.hint||e.id===ME||(ME=e.id,Nb(e.hint,{image:Sx[e.id]||null,anchor:wx(e.id)}))},e)}kw(()=>NE(kE));var PE=`blob-planet-daily`,FE=document.getElementById(`daily-pop`);(()=>{let e=null;try{e=JSON.parse(localStorage.getItem(PE)||`null`)}catch{}let t=xb(e,bb(Date.now(),new Date().getTimezoneOffset()));try{localStorage.setItem(PE,JSON.stringify(t.state))}catch{}let n=t.gift;if(!n||!FE)return;Qx.add(n.coins),n.crystals>0&&(Xx+=n.crystals),Lw(),Iw(),iS();let r=document.createElement(`div`);r.className=`ui-card offline-card`,r.innerHTML=`<div class="offline-faces">${rw(dx,`pop-sticker`,`подарок`)}${rw(bx,`pop-sticker`,`планета скучала`)}</div><div class="ui-title">Планета скучала!</div><div class="offline-gain">+${n.coins} ${Tx}${n.crystals?` +${n.crystals} ${rw(Qb,`gain-ico`,`кристаллы`)}`:``}</div><div class="ui-note">встреча №${n.day}${n.day<yb.length?` — завтра подарок подрастёт`:``}</div><div class="ui-hint">тап, чтобы закрыть</div>`,FE.appendChild(r),kw(()=>{Hw(FE)}),FE.addEventListener(`pointerdown`,()=>{Uw(FE)})})();var IE=75,LE=150,RE=5200,zE=null,BE=20+Math.random()*25;function VE(){BE=IE+Math.random()*(LE-IE)}function HE(){if(zE)return;let{w:e,h:t}=kx(),n=document.createElement(`div`);n.id=`shooting-star`,n.appendChild(ew(Wb,`star-ico`,``));let r=Math.random()<.5,i=t*(.1+Math.random()*.25),a=i+t*(.12+Math.random()*.22),o=r?-48:e+48,s=r?e+48:-48;n.style.transform=`translate(${o}px, ${i}px) scaleX(${r?-1:1})`,document.body.appendChild(n),zE=n,n.offsetWidth,n.style.transition=`transform ${RE}ms linear`,n.style.transform=`translate(${s}px, ${a}px) scaleX(${r?-1:1})`;let c=setTimeout(()=>{zE===n&&(n.remove(),zE=null,VE())},5450);n.addEventListener(`pointerdown`,e=>{e.stopPropagation(),clearTimeout(c),Xx+=1,Iw(),dD(),qw(e.clientX,e.clientY,{target:Aw,glyph:`◆`,color:`#ffd65a`}),$.ensure(),$.ding(),iS(),n.remove(),zE===n&&(zE=null),VE()},{once:!0})}function UE(e){zE||(BE-=e,BE<=0&&HE())}if(gw&&(window.__spawnStar=HE),lE&&gw&&(lE.hidden=!1),lE&&gw){let e=document.createElement(`button`);e.id=`btn-phase`,e.title=`День/ночь (тест)`,e.textContent=`🌙`,lE.insertAdjacentElement(`afterend`,e),e.addEventListener(`click`,()=>{let t=nS.t%oy,n=t<300,r=n?301:oy;nS.advance(r-t),e.textContent=n?`☀️`:`🌙`,$.ensure(),$.pop()})}lE&&lE.addEventListener(`click`,()=>{$.ensure();let e=gE();for(let t of Ux)e?t.brain.forceWake():t.brain.forceSleep();$.pop(),_E()}),uE&&uE.addEventListener(`click`,()=>{$.ensure();for(let e of Ux)e.brain.forceWake(),e.brain.startDance(fE,dE);$.pop(),_E()});var WE=document.getElementById(`btn-vacuum`);tw(WE,Gb,`Пылесос`);var GE=!1,KE=!1,qE=new B,JE=[],YE=new B;function XE(e){GE=!!e,GE?uT(null):KE=!1,WE&&WE.classList.toggle(`active`,GE)}WE&&WE.addEventListener(`click`,()=>{$.ensure(),XE(!GE),$.pop()});function ZE(e){YE.copy(e).project(qS);let{w:t,h:n}=kx();return{x:(YE.x*.5+.5)*t,y:(-YE.y*.5+.5)*n}}var QE=20,$E=.5,eD=7,tD=.035,nD=[];{let e=AD();for(let t=0;t<QE;t++){let t=new Yr(new Fr({map:e,color:13625599,transparent:!0,depthWrite:!1,opacity:0}));t.visible=!1,Z.add(t),nD.push({spr:t,ang:0,rad:0,up:0,life:0,active:!1})}}var rD=0,iD=0;function aD(){let e=-1;for(let t=0;t<nD.length;t++)if(!nD[t].active){e=t;break}e<0&&(e=iD,iD=(iD+1)%nD.length);let t=nD[e];t.ang=Math.random()*Math.PI*2,t.rad=Xd*(.75+Math.random()*.3),t.up=.3+Math.random()*1.2,t.life=0,t.active=!0,t.spr.visible=!0,t.spr.scale.setScalar(.22+Math.random()*.16)}function oD(e,t){t&&(rD-=e,rD<=0&&(aD(),rD=tD));let n=!1;for(let e of nD)if(e.active){n=!0;break}if(n){iO(qE);for(let t of nD){if(!t.active)continue;t.life+=e,t.rad-=6*e,t.ang+=eD*e,t.up*=Math.max(0,1-3*e);let n=t.life/$E;if(n>=1||t.rad<=.15){t.active=!1,t.spr.visible=!1;continue}t.spr.position.copy(qE).addScaledVector(nO,Math.cos(t.ang)*t.rad).addScaledVector(rO,Math.sin(t.ang)*t.rad).addScaledVector(tO,t.up+.2),t.spr.material.opacity=.75*(1-n)}}}function sD(e){let t=GE&&KE;if(t){qC(zd,qE),JE.length=0;for(let e of oS)e.dish||JE.push(e);for(let e of xS)JE.push(e);for(let e of Yx)JE.push(e);if(vS.length)for(let e=JE.length-1;e>=0;e--)Em(JE[e].pos,qE,vS)||JE.splice(e,1);let t=ph(e,qE,JE);for(let e of t){let t=ZE(e.pos);e.onBush||oS.indexOf(e)>=0?bT(e,t.x,t.y):Kw(e,t.x,t.y)}}oD(e,t)}var cD=[[`btn-dance`,()=>Ux.some(e=>e.brain.isTamed)],[`btn-vacuum`,()=>Ux.some(e=>e.brain.isTamed)],[`btn-shop`,()=>Xx>0||Yx.length>0||Qx.coins>0],[`btn-kitchen`,()=>Qx.coins>0||Object.values(lD).some(e=>eS.count(e)>0)],[`btn-pedia`,()=>rS.seen.size>0]],lD={};for(let e of j_())lD[e.id]=e.id;var uD=new Set;function dD(){for(let[e,t]of cD){if(uD.has(e)||!t())continue;uD.add(e);let n=document.getElementById(e);n&&(n.hidden=!1,Rw(n))}}function fD(){if(!uw)return;let e=vh(aS.blob.traits.id),t=e?e.name:aS.blob.traits.name;uw.textContent=`${e?e.icon:aS.blob.traits.emoji} ${t}${aS.brain.isWild?` · дикий`:``}`}fD(),lw&&lw.addEventListener(`click`,()=>{KC(Ux[(Ux.indexOf(aS)+1)%Ux.length]),gD(aS.blob.com,.7),$.ensure(),$.pop()});function pD(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.translate(64/2,64/2),t.fillStyle=`#fff2a0`,t.beginPath();for(let e=0;e<8;e++){let n=e/8*Math.PI*2,r=e%2==0?64*.46:64*.17;t[e===0?`moveTo`:`lineTo`](Math.cos(n)*r,Math.sin(n)*r)}t.closePath(),t.fill();let n=new ya(e);return n.colorSpace=Ue,n}var mD=pD(),hD=[];function gD(e,t){let n=5+Math.round(t*3),r=nC.copy(e).sub(Q.center).normalize().clone(),i=new B(-r.z,0,r.x);i.lengthSq()<1e-4&&i.set(1,0,0),i.normalize();let a=new B().crossVectors(r,i);for(let t=0;t<n;t++){let t=new Yr(new Fr({map:mD,color:16769610,transparent:!0,depthWrite:!1}));t.scale.setScalar(.55+Math.random()*.45),t.position.copy(e).addScaledVector(r,Vd*.9);let n=Math.random()*Math.PI*2,o=2+Math.random()*2.5,s=r.clone().multiplyScalar(3+Math.random()*2).addScaledVector(i,Math.cos(n)*o).addScaledVector(a,Math.sin(n)*o);Z.add(t),hD.push({spr:t,vel:s,life:0,ttl:.8+Math.random()*.35})}}function _D(e){for(let t=hD.length-1;t>=0;t--){let n=hD[t];n.life+=e;let r=n.life/n.ttl;if(r>=1){Z.remove(n.spr),n.spr.material.dispose(),hD.splice(t,1);continue}n.spr.position.addScaledVector(n.vel,e),n.vel.multiplyScalar(.9),n.spr.material.opacity=1-r,n.spr.scale.setScalar(.75*(1-r*.5))}}var vD=24,yD=.08,bD=.5,xD=[];for(let e=0;e<vD;e++){let e=new Yr(new Fr({map:mD,color:16773296,transparent:!0,depthWrite:!1,opacity:0}));e.visible=!1,Z.add(e),xD.push({spr:e,life:0,active:!1})}var SD=0;function CD(e){let t=-1;for(let e=0;e<xD.length;e++)if(!xD[e].active){t=e;break}t<0&&(t=SD,SD=(SD+1)%xD.length);let n=xD[t];n.spr.position.copy(e),n.life=0,n.active=!0,n.spr.visible=!0}function wD(e){for(let t of xD){if(!t.active)continue;t.life+=e;let n=t.life/bD;if(n>=1){t.active=!1,t.spr.visible=!1;continue}t.spr.material.opacity=.85*(1-n),t.spr.scale.setScalar(.5*(1-n*.55))}}function TD(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5c8a`,t.beginPath(),t.arc(64*.32,64*.34,64*.2,Math.PI,0),t.arc(64*.68,64*.34,64*.2,Math.PI,0),t.lineTo(64*.5,64*.82),t.closePath(),t.fill();let n=new ya(e);return n.colorSpace=Ue,n}var ED=TD(),DD=[];function OD(e){let t=3+Math.floor(Math.random()*3),n=nC.copy(e).sub(Q.center).normalize().clone(),r=new B(-n.z,0,n.x);r.lengthSq()<1e-4&&r.set(1,0,0),r.normalize();let i=new B().crossVectors(n,r);for(let a=0;a<t;a++){let t=new Yr(new Fr({map:ED,color:16745896,transparent:!0,depthWrite:!1}));t.scale.setScalar(.5+Math.random()*.3);let a=Math.random()*Math.PI*2,o=.6+Math.random()*.8;t.position.copy(e).addScaledVector(n,Vd*.7).addScaledVector(r,Math.cos(a)*o).addScaledVector(i,Math.sin(a)*o);let s=n.clone().multiplyScalar(2.2+Math.random()*1.2).addScaledVector(r,Math.cos(a)*.6).addScaledVector(i,Math.sin(a)*.6);Z.add(t),DD.push({spr:t,vel:s,up:n.clone(),life:0,ttl:1.2+Math.random()*.3})}}function kD(e){for(let t=DD.length-1;t>=0;t--){let n=DD[t];n.life+=e;let r=n.life/n.ttl;if(r>=1){Z.remove(n.spr),n.spr.material.dispose(),DD.splice(t,1);continue}n.spr.position.addScaledVector(n.vel,e),n.vel.multiplyScalar(.96),n.spr.material.opacity=(1-r)*.95,n.spr.scale.setScalar(.65*(1+r*.4))}}function AD(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,250,226,1)`),n.addColorStop(.4,`rgba(255,231,150,0.9)`),n.addColorStop(1,`rgba(255,214,110,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ya(e);return r.colorSpace=Ue,r}var jD=44,MD=[];{let e=AD();for(let t=0;t<jD;t++){let t=new Yr(new Fr({map:e,color:16773309,transparent:!0,depthWrite:!1,opacity:0}));t.visible=!1,Z.add(t),MD.push(t)}}var ND=new K(new ao(Vd*.5,Vd*.72,30),new ai({color:16765286,transparent:!0,opacity:.8,side:2,depthWrite:!1}));ND.visible=!1,Z.add(ND);var PD=new B(0,0,1),FD=new B,ID=!1;function LD(e){let t=e.points,n=Math.min(jD,t.length);for(let e=0;e<jD;e++){let r=MD[e];if(n<2||e>=n){r.visible=!1;continue}let i=Math.round(e*(t.length-1)/(n-1));r.position.copy(t[i]);let a=e/(n-1);r.material.opacity=.9*(1-a*.7),r.scale.setScalar(.5-a*.16),r.visible=!0}e.landPos?(FD.copy(e.landPos).sub(Q.center).normalize(),ND.position.copy(Q.center).addScaledVector(FD,zd+.08),ND.quaternion.setFromUnitVectors(PD,FD),ND.visible=!0):ND.visible=!1,ID=!0}function RD(){if(ID){for(let e of MD)e.visible=!1;ND.visible=!1,ID=!1}}var zD=4,BD=.9,VD=.6,HD=2.2,UD=.55,WD=.3,GD=[];{let e=new ao(.84,1,40);for(let t=0;t<zD;t++){let t=new K(e,new ai({color:16769958,transparent:!0,opacity:0,side:2,depthWrite:!1}));t.visible=!1,Z.add(t),GD.push({mesh:t,life:0,active:!1,R:Vd})}}var KD=0,qD=0,JD=new B;function YD(e,t){let n=-1;for(let e=0;e<GD.length;e++)if(!GD[e].active){n=e;break}n<0&&(n=qD,qD=(qD+1)%GD.length);let r=GD[n];JD.copy(e).sub(Q.center).normalize(),r.mesh.position.copy(Q.center).addScaledVector(JD,zd+.06),r.mesh.quaternion.setFromUnitVectors(PD,JD),r.R=t,r.life=0,r.active=!0,r.mesh.visible=!0}function XD(e,t){for(let n of GD){if(!n.active)continue;n.life+=e*(t?1:3);let r=n.life/BD;if(r>=1){n.active=!1,n.mesh.visible=!1;continue}n.mesh.scale.setScalar(n.R*(VD+(HD-VD)*r)),n.mesh.material.opacity=.5*(1-r)}}var ZD=30,QD=.7,$D=[];{let e=AD();for(let t=0;t<ZD;t++){let t=new Yr(new Fr({map:e,color:12577279,transparent:!0,depthWrite:!1,opacity:0}));t.visible=!1,Z.add(t),$D.push({spr:t,vel:new B,up:new B,life:0,active:!1})}}var eO=0,tO=new B,nO=new B,rO=new B;function iO(e){tO.copy(e).sub(Q.center).normalize(),nO.set(-tO.z,0,tO.x),nO.lengthSq()<1e-4&&nO.set(1,0,0),nO.normalize(),rO.crossVectors(tO,nO)}function aO(e,t){iO(e);let n=5+Math.round(t*9);for(let e=0;e<n;e++){let e=-1;for(let t=0;t<$D.length;t++)if(!$D[t].active){e=t;break}e<0&&(e=eO,eO=(eO+1)%$D.length);let n=$D[e],r=Math.random()*Math.PI*2,i=(1.6+Math.random()*2.4)*(.6+t);n.spr.position.copy(Q.center).addScaledVector(tO,zd+.2).addScaledVector(nO,Math.cos(r)*.6).addScaledVector(rO,Math.sin(r)*.6),n.vel.copy(tO).multiplyScalar((3.5+Math.random()*3)*(.6+t)).addScaledVector(nO,Math.cos(r)*i).addScaledVector(rO,Math.sin(r)*i),n.up.copy(tO),n.life=0,n.active=!0,n.spr.visible=!0,n.spr.scale.setScalar(.28+Math.random()*.22)}}function oO(e){for(let t of $D){if(!t.active)continue;t.life+=e;let n=t.life/QD;if(n>=1){t.active=!1,t.spr.visible=!1;continue}t.spr.position.addScaledVector(t.vel,e),t.vel.addScaledVector(t.up,-24*e),t.spr.material.opacity=.95*(1-n*n)}}var sO=6,cO=1.2,lO=.5,uO=3,dO=[];{let e=new ao(.9,1,44);for(let t=0;t<sO;t++){let t=new K(e,new ai({color:14677247,transparent:!0,opacity:0,side:2,depthWrite:!1}));t.visible=!1,Z.add(t),dO.push({mesh:t,life:0,active:!1,ttl:cO,r1:uO,a0:.45})}}var fO=0;function pO(e,t={}){let n=-1;for(let e=0;e<dO.length;e++)if(!dO[e].active){n=e;break}n<0&&(n=fO,fO=(fO+1)%dO.length);let r=dO[n];JD.copy(e).sub(Q.center).normalize(),r.mesh.position.copy(Q.center).addScaledVector(JD,zd+.12),r.mesh.quaternion.setFromUnitVectors(PD,JD),r.mesh.material.color.setHex(t.color??14677247),r.ttl=t.life??cO,r.r1=t.r1??uO,r.a0=t.alpha??.45,r.life=0,r.active=!0,r.mesh.visible=!0}function mO(e){for(let t of dO){if(!t.active)continue;t.life+=e;let n=t.life/t.ttl;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}t.mesh.scale.setScalar(Vd*(lO+(t.r1-lO)*n)),t.mesh.material.opacity=t.a0*(1-n)}}var hO=AD(),gO=[];function _O(e){let t=6+Math.floor(Math.random()*3);iO(e);let n=tO.clone(),r=nO.clone(),i=rO.clone();for(let a=0;a<t;a++){let t=new Yr(new Fr({map:hO,color:15920344,transparent:!0,depthWrite:!1,opacity:.7})),a=.4+Math.random()*.35;t.scale.setScalar(a);let o=Math.random()*Math.PI*2,s=.9+Math.random()*1.1;t.position.copy(e).addScaledVector(r,Math.cos(o)*.2).addScaledVector(i,Math.sin(o)*.2);let c=r.clone().multiplyScalar(Math.cos(o)*s).addScaledVector(i,Math.sin(o)*s).addScaledVector(n,.5+Math.random()*.5);Z.add(t),gO.push({spr:t,vel:c,size:a,life:0,ttl:.55+Math.random()*.3})}}function vO(e){for(let t=gO.length-1;t>=0;t--){let n=gO[t];n.life+=e;let r=n.life/n.ttl;if(r>=1){Z.remove(n.spr),n.spr.material.dispose(),gO.splice(t,1);continue}n.spr.position.addScaledVector(n.vel,e),n.vel.multiplyScalar(.88),n.spr.material.opacity=.7*(1-r),n.spr.scale.setScalar(n.size*(1+r*.8))}}var yO={},bO=null;function xO(e){if(yO[e])return yO[e];bO||=new $o;let t=bO.load(e);return t.colorSpace=Ue,yO[e]=t,t}function SO(e){let t=`wish:`+e;if(yO[t])return yO[t];let n=document.createElement(`canvas`);n.width=n.height=192;let r=n.getContext(`2d`),i=new ya(n);i.colorSpace=Ue;let a=new Image,o=new Image,s=2,c=()=>{if(--s>0)return;r.drawImage(a,0,0,192,192);let e=o.width*.18;r.save(),r.beginPath(),r.arc(192*.5,192*.42,192*.29,0,Math.PI*2),r.clip(),r.drawImage(o,e,e,o.width-e*2,o.height-e*2,192*.21,192*.13,192*.58,192*.58),r.restore(),i.needsUpdate=!0};return a.onload=c,o.onload=c,a.src=yx,o.src=e,yO[t]=i,i}function CO(e){if(e.blob.sleep>.5)return`sleep`;let t=e.brain.wish;return t?t===`timeout`?`sick`:TO.has(e.brain.species)?`wish:`+cm(t).id:`ask`:null}function wO(e){return e===`sleep`?xO(_x):e===`sick`?xO(gx):e===`ask`?xO(vx):SO(Ex[e.slice(5)]||``+new URL(`res-ягода-BHevkhI-.png`,import.meta.url).href)}var TO=new Set,EO=.26,DO=.55,OO=new B;function kO(e){for(let t of Ux){t.brain.isTamed&&TO.add(t.brain.species);let n=t.alive?CO(t):null;if(!(n&&t.blob.com.distanceTo(HO)<18.4)){t.emoteSprite&&(t.emoteSprite.visible=!1),t.emoteKey=null;continue}t.emoteSprite||(t.emoteSprite=new Yr(new Fr({transparent:!0,depthWrite:!1,opacity:.95})),t.emoteSprite.center.set(.5,-.2),Z.add(t.emoteSprite)),(n===`ask`||n.startsWith(`wish:`))&&Oh(rS,t.brain.species)&&(dD(),iS()),t.emoteKey!==n&&(t.emoteSprite.material.map=wO(n),t.emoteSprite.material.needsUpdate=!0,t.emoteKey=n,t.emoteT=0),t.emoteT+=e;let r=Math.min(1,t.emoteT/EO),i=r<.7?1.1*Math.sin(r/.7*Math.PI*.5):1.1-.1*((r-.7)/.3),a=Math.sin(t.emoteT*DO*Math.PI*2)*.07;t.emoteSprite.scale.setScalar(Vd*1.3*i),OO.copy(t.blob.com).sub(Q.center).normalize(),t.emoteSprite.position.copy(t.blob.com).addScaledVector(OO,Vd*(2.1+a)),t.emoteSprite.visible=!0}}function AO(){TC=`sling`;let e=gC.blob;EC.copy(e.com).sub(Q.center).normalize(),AC=null,xC.set(0,0,0),KD=0,e.poke(.55),$.squish(.5)}function jO(e){let t=gC.blob;if(vC+=(0-vC)*Math.min(1,e*6),qC(_C+vC,OC),Ky({center:Q.center,anchorDir:EC,fingerPoint:OC,maxArc:Ay*t.R},kC),t.body.setGrabTarget(kC,mC),AC=Gy({center:Q.center,anchorDir:EC,fingerPoint:OC,R:t.R,throwMax:Dy},DC),KD-=e,KD<=0){YD(t.com,t.R);let e=AC?AC.pull:0;KD=UD+(WD-UD)*e}if(!AC){RD();return}LD(qy({center:Q.center,startPos:t.com,v0:AC.v0,...Zy(t.body),landRadius:zd+jy*t.R},jC))}var MO=1.75*Vd,NO=6,PO=1,FO=new Map,IO=new B,LO=new B;function RO(e){for(let t=0;t<Ux.length;t++)for(let n=t+1;n<Ux.length;n++){let r=t*Ux.length+n,i=Math.max(0,(FO.get(r)||0)-e),a=Ux[t].blob,o=Ux[n].blob;IO.copy(a.com).sub(o.com);let s=IO.length()||1e-6,c=-LO.copy(a.body.velocity).sub(o.body.velocity).dot(IO)/s;i<=0&&s<MO&&c>NO?(a.poke(.5),o.poke(.5),KS.squish(.4),FO.set(r,PO)):FO.set(r,i)}}var zO=performance.now(),BO=new B,VO=new B,HO=new B,UO=0,WO=0;function GO(e,t){GS=t===0,fE+=e,nS.advance(e*TS),FS();for(let e of Kx)e.alive&&e.blob.body.clearForces();for(let t=oS.length-1;t>=0;t--)oS[t].update(e),oS[t].dead&&(cS(oS[t]),oS.splice(t,1));NS(e),CS.length=0;for(let e of oS)CS.push(e);for(let e of xS)CS.push(e);for(let e of SS)CS.push(e);for(let t=Yx.length-1;t>=0;t--)Yx[t].update(e),Yx[t].dead&&(Yx[t].dispose(),Yx.splice(t,1));let n=Yx.length>=20;HO.copy(qS.position).sub(Q.center).setLength(zd).add(Q.center),MC=Math.max(0,MC-e*2),DS(),Wx(),MS(),UO=0,WO=0;for(let t of Kx){if(!t.alive)continue;let r=t.blob,i=t.brain;if(i.attentionPoint=HO,i.crystalBlocked=n,i.avoidZones=vS,i.update(e,CS),i.chompEvent&&(KS.nom(),i.sickEvent||OD(i.chompEvent.pos)),i.danceHeartEvent&&OD(i.danceHeartEvent.pos),i.crystalEvent){let e=i.crystalEvent;Yx.push(new C_(Z,Q,e)),_O(e.pos),KS.pum()}if(r.angry=+!!i.isWild,i.breakEvent&&(gD(i.breakEvent.pos,.8),KS.squish(.7)),i.sickEvent&&(r.sick=1.2,_O(i.sickEvent.pos),KS.splat(.25)),i.boostEvent&&kh(rS,i.species)&&iS(),i.tameEvent){gD(i.tameEvent.pos,1.4),OD(i.tameEvent.pos);{let e=ZE(i.tameEvent.pos);nT(e.x,e.y,5,{sticker:bx,size:1.7,ttl:.8,dir:-Math.PI/2,spread:1.9,speed:260})}KS.nom(),fD(),dD()}if(MC>.4){let e=tC.copy(r.com).sub(Q.center).normalize(),t=nC.set(-e.z,0,e.x);t.lengthSq()<1e-4&&t.set(1,0,0),t.normalize();let n=rC.crossVectors(e,t),i=Math.random()*Math.PI*2;BO.copy(t).multiplyScalar(Math.cos(i)).addScaledVector(n,Math.sin(i)),r.body.addWind(BO.multiplyScalar(MC*13))}r.body.update(e,t.view),r.update(e,qS),t.flight&&($y(r.body,t.flight,e,Q.center,zd+.9*r.R)?(r.flying=!0,t.trailTimer-=e,t.trailTimer<=0&&(CD(r.com),t.trailTimer=yD)):(t.flight=null,r.flying=!1));let a=t.water.update(e,r.com,r.body.velocity);if(a>0&&(aO(r.com,a),KS.splash(a)),i.shakeEvent&&(aO(i.shakeEvent.pos,.35),KS.splash(.3)),t.water.inWater){let n=r.body.velocity.length();n>.6?(t.ringTimer-=e,t.ringTimer<=0&&(pO(r.com),t.ringTimer=.6-.35*Math.min(1,n/6))):t.ringTimer=0}r.landImpact>0&&(i.phase===`air`?KS.splat(r.landImpact*.35):(KS.splat(r.landImpact),gD(r.com,r.landImpact)),r.landImpact=0),i.boost&&i.boost.t>0?(t.boostTimer=(t.boostTimer||0)-e,t.boostTimer<=0&&(gD(r.com,.15),t.boostTimer=1.4)):t.boostTimer=0,i.satiety>.8&&i.sleepState===`awake`&&(UO=.4),i.sleepState===`sleeping`&&(WO=1)}sD(e),RO(e),XD(e,iC===`grab`&&TC===`sling`),oO(e),mO(e),wD(e),_D(e),kD(e),vO(e),Xw(e),rT(e),ET(e)}function KO(){requestAnimationFrame(KO);let e=performance.now(),t=Math.min((e-zO)/1e3,.05);if(zO=e,pE+=t,pE>=mE&&(pE=0,iS()),iC===`grab`&&gC&&!gC.blob.grabbed&&(gC=null,AC=null,RD(),iC=`idle`),iC===`grab`&&gC){let e=(performance.now()-SC)/1e3;if(TC===`undecided`&&(fC>wC?TC=`carry`:e>=CC&&AO()),TC===`sling`)jO(t);else{e>.12&&(vC+=(pC-vC)*Math.min(1,t*4));let n=qC(_C+vC,eC);yC.lerp(n,1-Math.exp(-t*10)),t>0&&(nC.copy(yC).sub(bC).multiplyScalar(1/t),xC.lerp(nC,.5)),bC.copy(yC),gC.blob.body.setGrabTarget(yC,mC)}}else RD();kS();let n=performance.now();for(let e=0;e<pw&&(GO(t,e),!(performance.now()-n>24));e++);Cw+=performance.now()-n,cC=Math.max(0,cC-t*.8);let r=iC===`grab`&&TC!==`sling`,i=r&&xC.length()<.7?.75:0,a=r?Math.max(cC,i):0;$.setPurr(Math.max(a,UO)),$.setSnore(WO),WS(t),iE.update(t),_E(),dD(),kO(t),UE(t),Tw(t),sw&&(sw.style.width=(aS.brain.satiety*100).toFixed(1)+`%`),cw&&(cw.style.width=(aS.brain.energy*100).toFixed(1)+`%`);let o=R.clamp((JS.maxDist-JS.dist)/(JS.maxDist-JS.minDist),0,1),s=o*o*o*o;VO.copy(Q.center).lerp(aS.blob.com,s),JS.target.lerp(VO,1-Math.exp(-t*5)),JS.update(t),qx&&qx.update(qS,t);let c=performance.now();iE.active?iE.render(Ax):Ax.render(Z,qS),ww+=performance.now()-c}qx=tm(Z,Kx,qS),XS(!0),KO();function qO(){let{w:e,h:t}=kx(),n=!Number.isFinite(JS.dist)||!Number.isFinite(qS.position.x);!n&&Ax.domElement.width===Math.floor(e*Ax.getPixelRatio())&&Ax.domElement.height===Math.floor(t*Ax.getPixelRatio())||(n&&(JS.dist=JS.maxDist=zd*2.6),qS.aspect=e/t,qS.updateProjectionMatrix(),Ax.setSize(e,t),Ax.setPixelRatio(Math.min(window.devicePixelRatio,2)),XS(n||!QC),iE.resize(e,t),JS.update(0),iE.active?iE.render(Ax):Ax.render(Z,qS))}window.addEventListener(`resize`,qO),new ResizeObserver(qO).observe(document.body);export{Ue as $,Ss as A,o as B,ua as C,c as D,l as E,ai as F,ps as G,Io as H,bo as I,da as J,_s as K,yo as L,R as M,H as N,We as O,K as P,t as Q,r as R,Zi as S,s as T,On as U,a as V,vs as W,Mt as X,Bs as Y,Ro as Z,Mr as _,hr as a,$o as at,Le as b,W as c,Bo as ct,Xo as d,Ni as et,U as f,Ar as g,Hi as h,Zn as i,Yt as it,Pr as j,qo as k,zt as l,Pi as m,Vo as n,xr as nt,kr as o,z as ot,ws as p,ga as q,ki as r,hs as rt,n as s,B as st,Op as t,Oi as tt,bs as u,Oo as v,la as w,aa as x,M as y,i as z};