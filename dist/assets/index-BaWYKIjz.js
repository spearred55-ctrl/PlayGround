(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Vo="187",mu=0,Tl=1,gu=2,Fa=1,Wo=2,Us=3,Ln=0,je=1,me=2,cs=0,Bs=1,di=2,wl=3,Al=4,xu=5,rs=100,_u=101,vu=102,yu=103,Mu=104,Su=200,bu=201,Eu=202,Tu=203,Zc=204,Jc=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Lu=211,Iu=212,Du=213,Nu=214,$r=0,Kr=1,Zr=2,Hs=3,Jr=4,Qr=5,jr=6,to=7,Qc=0,Uu=1,Ou=2,Zi=0,jc=1,th=2,eh=3,Xo=4,ih=5,nh=6,sh=7,ah=300,ps=301,Gs=302,cr=303,hr=304,Oi=1e3,Ki=1001,eo=1002,Ve=1003,Fu=1004,na=1005,si=1006,ur=1007,pn=1008,li=1009,rh=1010,oh=1011,Vs=1012,qo=1013,Fi=1014,wi=1015,Bi=1016,Yo=1017,$o=1018,ms=1020,lh=35902,ch=35899,hh=1021,uh=1022,Di=1023,_n=1026,mn=1027,Ko=1028,Zo=1029,In=1030,Jo=1031,Qo=1033,Ba=33776,za=33777,ka=33778,Ha=33779,io=35840,no=35841,so=35842,ao=35843,ro=36196,oo=37492,lo=37496,co=37488,ho=37489,Wa=37490,uo=37491,fo=37808,po=37809,mo=37810,go=37811,xo=37812,_o=37813,vo=37814,yo=37815,Mo=37816,So=37817,bo=37818,Eo=37819,To=37820,wo=37821,Ao=36492,Ro=36494,Co=36495,Po=36283,Lo=36284,Xa=36285,Io=36286,Bu=3200,Do=0,zu=1,fn="",ve="srgb",qa="srgb-linear",Ya="linear",fe="srgb",dr=7680,ku=519,Hu=512,Gu=513,Vu=514,dh=515,Wu=516,Xu=517,fh=518,ph=519,mh=35044,Rl=35048,Cl="300 es",Ai=2e3,Ws=2001;function qu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yu(){const n=$a("canvas");return n.style.display="block",n}const Pl={};function Ka(...n){const t="THREE."+n.shift();console.log(t,...n)}function gh(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=gh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function re(...n){n=gh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ga(...n){const t=n.join(" ");t in Pl||(Pl[t]=!0,Ht(...n))}function $u(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Ku={[$r]:$r,[Zr]:jr,[Jr]:Jr,[Hs]:Qr,[Kr]:Kr,[jr]:Zr,[to]:to,[Qr]:Hs};class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Za=180/Math.PI;function yn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function Zu(n,t){return(n%t+t)%t}function pr(n,t,e){return(1-e)*n+e*t}function Ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function er(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xh(n,t){if(t.constructor===Float32Array)return n;const e=er(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _h(n,t){if(t.constructor===Float32Array)return n;const e=er(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}const hl=class hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hl.prototype.isVector2=!0;let at=hl;class Fn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,o=Math.sin(o*v)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),u=l(i/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ul=class ul{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*e-a*s),d=2*(a*i-r*e);return this.x=e+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ul.prototype.isVector3=!0;let R=ul;const mr=new R,Ll=new Fn,dl=class dl{constructor(t,e,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c)}set(t,e,i,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],v=s[1],E=s[4],M=s[7],T=s[2],w=s[5],x=s[8];return a[0]=r*_+o*v+l*T,a[3]=r*p+o*E+l*w,a[6]=r*m+o*M+l*x,a[1]=c*_+h*v+d*T,a[4]=c*p+h*E+d*w,a[7]=c*m+h*M+d*x,a[2]=u*_+f*v+g*T,a[5]=u*p+f*E+g*w,a[8]=u*m+f*M+g*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,f=c*a-r*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return Ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gr.makeScale(t,e)),this}rotate(t){return Ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return Ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;let Vt=dl;const gr=new Vt,Il=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){const n={enabled:!0,workingColorSpace:qa,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===fe&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qa]:{primaries:t,whitePoint:i,transfer:Ya,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),n}const se=Qu();function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let kn;class ju{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{kn===void 0&&(kn=$a("canvas")),kn.width=t.width,kn.height=t.height;const s=kn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=kn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ji(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let td=0;class jo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(xr(s[r].image)):a.push(xr(s[r]))}else a=xr(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function xr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let ed=0;const _r=new R;class $e extends On{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=Ki,s=Ki,a=si,r=pn,o=Di,l=li,c=$e.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=yn(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_r).x}get height(){return this.source.getSize(_r).y}get depth(){return this.source.getSize(_r).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=ah;$e.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(f+1)/2,T=(m+1)/2,w=(h+u)/4,x=(d+_)/4,b=(g+p)/4;return E>M&&E>T?E<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(E),s=w/i,a=x/i):M>T?M<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),i=w/s,a=b/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=x/a,s=b/a),this.set(i,s,a,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let we=fl;class id extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=new $e({width:t,height:e,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends id{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vh extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nd extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const tr=class tr{constructor(t,e,i,s,a,r,o,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c,h,d,u,f,g,_,p)}set(t,e,i,s,a,r,o,l,c,h,d,u,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Hn.setFromMatrixColumn(t,0).length(),a=1/Hn.setFromMatrixColumn(t,1).length(),r=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,f=r*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=_-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,ad)}lookAt(t,e,i){const s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),an.crossVectors(i,ai),an.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),an.crossVectors(i,ai)),an.normalize(),sa.crossVectors(ai,an),s[0]=an.x,s[4]=sa.x,s[8]=ai.x,s[1]=an.y,s[5]=sa.y,s[9]=ai.y,s[2]=an.z,s[6]=sa.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],E=i[7],M=i[11],T=i[15],w=s[0],x=s[4],b=s[8],U=s[12],C=s[1],L=s[5],N=s[9],V=s[13],I=s[2],B=s[6],X=s[10],F=s[14],it=s[3],G=s[7],$=s[11],j=s[15];return a[0]=r*w+o*C+l*I+c*it,a[4]=r*x+o*L+l*B+c*G,a[8]=r*b+o*N+l*X+c*$,a[12]=r*U+o*V+l*F+c*j,a[1]=h*w+d*C+u*I+f*it,a[5]=h*x+d*L+u*B+f*G,a[9]=h*b+d*N+u*X+f*$,a[13]=h*U+d*V+u*F+f*j,a[2]=g*w+_*C+p*I+m*it,a[6]=g*x+_*L+p*B+m*G,a[10]=g*b+_*N+p*X+m*$,a[14]=g*U+_*V+p*F+m*j,a[3]=v*w+E*C+M*I+T*it,a[7]=v*x+E*L+M*B+T*G,a[11]=v*b+E*N+M*X+T*$,a[15]=v*U+E*V+M*F+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],v=l*f-c*u,E=o*f-c*d,M=o*u-l*d,T=r*f-c*h,w=r*u-l*h,x=r*d-o*h;return e*(_*v-p*E+m*M)-i*(g*v-p*T+m*w)+s*(g*E-_*T+m*x)-a*(g*M-_*w+p*x)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=e*o-i*r,E=e*l-s*r,M=e*c-a*r,T=i*l-s*o,w=i*c-a*o,x=s*c-a*l,b=h*_-d*g,U=h*p-u*g,C=h*m-f*g,L=d*p-u*_,N=d*m-f*_,V=u*m-f*p,I=v*V-E*N+M*L+T*C-w*U+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=(o*V-l*N+c*L)*B,t[1]=(s*N-i*V-a*L)*B,t[2]=(_*x-p*w+m*T)*B,t[3]=(u*w-d*x-f*T)*B,t[4]=(l*C-r*V-c*U)*B,t[5]=(e*V-s*C+a*U)*B,t[6]=(p*M-g*x-m*E)*B,t[7]=(h*x-u*M+f*E)*B,t[8]=(r*N-o*C+c*b)*B,t[9]=(i*C-e*N-a*b)*B,t[10]=(g*w-_*M+m*v)*B,t[11]=(d*M-h*w-f*v)*B,t[12]=(o*U-r*L-l*b)*B,t[13]=(e*L-i*U+s*b)*B,t[14]=(_*E-g*T-p*v)*B,t[15]=(h*T-d*E+u*v)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,f=a*h,g=a*d,_=r*h,p=r*d,m=o*d,v=l*c,E=l*h,M=l*d,T=i.x,w=i.y,x=i.z;return s[0]=(1-(_+m))*T,s[1]=(f+M)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(u+m))*w,s[6]=(p+v)*w,s[7]=0,s[8]=(g+E)*x,s[9]=(p-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let r=Hn.set(s[0],s[1],s[2]).length();const o=Hn.set(s[4],s[5],s[6]).length(),l=Hn.set(s[8],s[9],s[10]).length();a<0&&(r=-r),vi.copy(this);const c=1/r,h=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,e.setFromRotationMatrix(vi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,s,a,r,o=Ai,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===Ai)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Ws)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Ai,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===Ai)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Ws)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};tr.prototype.isMatrix4=!0;let ue=tr;const Hn=new R,vi=new ue,sd=new R(0,0,0),ad=new R(1,1,1),an=new R,sa=new R,ai=new R,Nl=new ue,Ul=new Fn;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rd=0;const Ol=new R,Gn=new Fn,Gi=new ue,aa=new R,Ts=new R,od=new R,ld=new Fn,Fl=new R(1,0,0),Bl=new R(0,1,0),zl=new R(0,0,1),kl={type:"added"},cd={type:"removed"},Vn={type:"childadded",child:null},vr={type:"childremoved",child:null};class Ce extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new R,e=new vn,i=new Fn,s=new R(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?aa.copy(t):aa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ts,aa,this.up):Gi.lookAt(aa,Ts,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Gn.setFromRotationMatrix(Gi),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),vr.child=t,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new R(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Te extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Mr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Zu(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Mr(r,a,t+1/3),this.g=Mr(r,a,t),this.b=Mr(r,a,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function i(a){a!==void 0&&parseFloat(a)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const i=Mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return se.workingToColorSpace(Ye.copy(this),t),Math.round(te(Ye.r*255,0,255))*65536+Math.round(te(Ye.g*255,0,255))*256+Math.round(te(Ye.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ye.copy(this),e);const i=Ye.r,s=Ye.g,a=Ye.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ve){se.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,s=Ye.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rn),this.setHSL(rn.h+t,rn.s+e,rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(ra);const i=pr(rn.h,ra.h,e),s=pr(rn.s,ra.s,e),a=pr(rn.l,ra.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Ut;Ut.NAMES=Mh;class Qs{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new Qs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class No extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yi=new R,Vi=new R,Sr=new R,Wi=new R,Wn=new R,Xn=new R,Hl=new R,br=new R,Er=new R,Tr=new R,wr=new we,Ar=new we,Rr=new we;class fi{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yi.subVectors(t,e),s.cross(yi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){yi.subVectors(s,e),Vi.subVectors(i,e),Sr.subVectors(t,e);const r=yi.dot(yi),o=yi.dot(Vi),l=yi.dot(Sr),c=Vi.dot(Vi),h=Vi.dot(Sr),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Wi.x),l.addScaledVector(r,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(t,e,i,s,a,r){return wr.setScalar(0),Ar.setScalar(0),Rr.setScalar(0),wr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,i),Rr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(wr,a.x),r.addScaledVector(Ar,a.y),r.addScaledVector(Rr,a.z),r}static isFrontFacing(t,e,i,s){return yi.subVectors(i,e),Vi.subVectors(t,e),yi.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return fi.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;Wn.subVectors(s,i),Xn.subVectors(a,i),br.subVectors(t,i);const l=Wn.dot(br),c=Xn.dot(br);if(l<=0&&c<=0)return e.copy(i);Er.subVectors(t,s);const h=Wn.dot(Er),d=Xn.dot(Er);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),e.copy(i).addScaledVector(Wn,r);Tr.subVectors(t,a);const f=Wn.dot(Tr),g=Xn.dot(Tr);if(g>=0&&f<=g)return e.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Xn,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Hl.subVectors(a,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Hl,o);const m=1/(p+_+u);return r=_*m,o=u*m,e.copy(i).addScaledVector(Wn,r).addScaledVector(Xn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Bn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Mi):Mi.fromBufferAttribute(a,r),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),la.subVectors(this.max,ws),qn.subVectors(t.a,ws),Yn.subVectors(t.b,ws),$n.subVectors(t.c,ws),on.subVectors(Yn,qn),ln.subVectors($n,Yn),En.subVectors(qn,$n);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-En.z,En.y,on.z,0,-on.x,ln.z,0,-ln.x,En.z,0,-En.x,-on.y,on.x,0,-ln.y,ln.x,0,-En.y,En.x,0];return!Cr(e,qn,Yn,$n,la)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,qn,Yn,$n,la))?!1:(ca.crossVectors(on,ln),e=[ca.x,ca.y,ca.z],Cr(e,qn,Yn,$n,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xi=[new R,new R,new R,new R,new R,new R,new R,new R],Mi=new R,oa=new Bn,qn=new R,Yn=new R,$n=new R,on=new R,ln=new R,En=new R,ws=new R,la=new R,ca=new R,Tn=new R;function Cr(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Tn.fromArray(n,a);const o=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=i.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ne=new R,ha=new at;let ud=0;class Ri extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=t!==void 0?er(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):_h(t,this.array)}}class Sh extends Ri{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class bh extends Ri{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends Ri{constructor(t,e,i){super(new Float32Array(t),e,i)}}const dd=new Bn,As=new R,Pr=new R;class ys{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):dd.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Pr)),this.expandByPoint(As.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fd=0;const ci=new ue,Lr=new Ce,Kn=new R,ri=new Bn,Rs=new Bn,ze=new R;class He extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?bh:Sh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Vt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ce(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(ri.min,Rs.min),ri.expandByPoint(ze),ze.addVectors(ri.max,Rs.max),ri.expandByPoint(ze)):(ri.expandByPoint(Rs.min),ri.expandByPoint(Rs.max))}ri.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)ze.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(Kn.fromBufferAttribute(t,c),ze.add(Kn)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ri(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new R,l[U]=new R;const h=new R,d=new R,u=new R,f=new at,g=new at,_=new at,p=new R,m=new R;function v(U,C,L){c[U]=c[C]=c[L]=1,h.fromBufferAttribute(i,U),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),f.fromBufferAttribute(a,U),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,L),d.sub(h),u.sub(h),g.sub(f),_.sub(f);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(N),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(N),o[U].add(p),o[C].add(p),o[L].add(p),l[U].add(m),l[C].add(m),l[L].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,C=E.length;U<C;++U){const L=E[U],N=L.start,V=L.count;for(let I=N,B=N+V;I<B;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new R,T=new R,w=new R,x=new R;function b(U){w.fromBufferAttribute(s,U),x.copy(w);const C=o[U];M.copy(C),M.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(x,C);const N=T.dot(l[U])<0?-1:1;r.setXYZW(U,M.x,M.y,M.z,N)}for(let U=0,C=i.count;U<C;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ri(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Ri(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Gl(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=yn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const Je=new R;class Ja{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?er(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Ri(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ja(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):_h(t,this.data.array)}}const Ir=new R,md=new R,gd=new Vt;class un{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ir.subVectors(i,e).cross(md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Ir),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gd.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let xd=0;class zn extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Bs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new un().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pi extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const Cs=new R,Jn=new R,Qn=new R,jn=new at,Ps=new at,Eh=new ue,ua=new R,Ls=new R,da=new R,Vl=new at,Dr=new at,Wl=new at;class Ti extends Ce{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pd(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new Ja(i,3,0,!1)),Zn.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jn.setFromMatrixScale(this.matrixWorld),Eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jn.multiplyScalar(-Qn.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const r=this.center;fa(ua.set(-.5,-.5,0),Qn,r,Jn,s,a),fa(Ls.set(.5,-.5,0),Qn,r,Jn,s,a),fa(da.set(.5,.5,0),Qn,r,Jn,s,a),Vl.set(0,0),Dr.set(1,0),Wl.set(1,1);let o=t.ray.intersectTriangle(ua,Ls,da,!1,Cs);if(o===null&&(fa(Ls.set(-.5,.5,0),Qn,r,Jn,s,a),Dr.set(0,1),o=t.ray.intersectTriangle(ua,da,Ls,!1,Cs),o===null))return;const l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:fi.getInterpolation(Cs,ua,Ls,da,Vl,Dr,Wl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function fa(n,t,e,i,s,a){jn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ps.x=a*jn.x-s*jn.y,Ps.y=s*jn.x+a*jn.y):Ps.copy(jn),n.copy(t),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(Eh)}const qi=new R,Nr=new R,pa=new R,ma=new R;class Th{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Nr.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(Nr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(pa),o=ma.dot(this.direction),l=-ma.dot(pa),c=ma.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nr).addScaledVector(pa,u),f}intersectSphere(t,e){if(t.radius<0)return null;qi.subVectors(t.center,this.origin);const i=qi.dot(this.direction),s=qi.dot(qi)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,f=t.z-r.z,g=e.x-r.x,_=e.y-r.y,p=e.z-r.z,m=i.x-r.x,v=i.y-r.y,E=i.z-r.z,M=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let x,b,U,C,L,N,V,I,B,X,F,it;if(M>=T&&M>=w?(U=l,N=d,B=g,it=m,l>=0?(x=c,b=h,C=u,L=f,V=_,I=p,X=v,F=E):(x=h,b=c,C=f,L=u,V=p,I=_,X=E,F=v)):T>=w?(U=c,N=u,B=_,it=v,c>=0?(x=h,b=l,C=f,L=d,V=p,I=g,X=E,F=m):(x=l,b=h,C=d,L=f,V=g,I=p,X=m,F=E)):(U=h,N=f,B=p,it=E,h>=0?(x=l,b=c,C=d,L=u,V=g,I=_,X=m,F=v):(x=c,b=l,C=u,L=d,V=_,I=g,X=v,F=m)),U===0)return null;const G=x/U,$=b/U,j=1/U,yt=C-G*N,Dt=L-$*N,q=V-G*B,_t=I-$*B,wt=X-G*it,Ot=F-$*it,vt=wt*_t-Ot*q,Ft=yt*Ot-Dt*wt,Me=q*Dt-_t*yt;if(s){if(vt<0||Ft<0||Me<0)return null}else if((vt<0||Ft<0||Me<0)&&(vt>0||Ft>0||Me>0))return null;const zt=vt+Ft+Me;if(zt===0)return null;const Zt=j*(vt*N+Ft*B+Me*it);return(zt>0?Zt<0:Zt>0)?null:this.at(Zt/zt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xl=new ue,wn=new Th,ga=new ys,ql=new R,xa=new R,_a=new R,va=new R,Ur=new R,ya=new R,Yl=new R,Ma=new R;class Tt extends Ce{constructor(t=new He,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){ya.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ur.fromBufferAttribute(d,t),r?ya.addScaledVector(Ur,h):ya.addScaledVector(Ur.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(a),wn.copy(t.ray).recast(t.near),!(ga.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ga,ql)===null||wn.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(a).invert(),wn.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=E;M<T;M+=3){const w=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);s=Sa(this,m,t,i,c,h,d,w,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=Sa(this,r,t,i,c,h,d,v,E,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=E;M<T;M+=3){const w=M,x=M+1,b=M+2;s=Sa(this,m,t,i,c,h,d,w,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,E=p+1,M=p+2;s=Sa(this,r,t,i,c,h,d,v,E,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function _d(n,t,e,i,s,a,r,o){let l;if(t.side===je?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ln,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:n}}function Sa(n,t,e,i,s,a,r,o,l,c){n.getVertexPosition(o,xa),n.getVertexPosition(l,_a),n.getVertexPosition(c,va);const h=_d(n,t,e,i,xa,_a,va,Yl);if(h){const d=new R;fi.getBarycoord(Yl,xa,_a,va,d),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,d,new at)),a&&(h.uv1=fi.getInterpolatedAttribute(a,o,l,c,d,new at)),r&&(h.normal=fi.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};fi.getNormal(xa,_a,va,u.normal),h.face=u,h.barycoord=d}return h}class wh extends $e{constructor(t=null,e=1,i=1,s,a,r,o,l,c=Ve,h=Ve,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends Ri{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new ue,Kl=new ue,ba=[],Zl=new Bn,vd=new ue,Is=new Tt,Ds=new ys;class dn extends Tt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Zl.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Ds.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),t.ray.intersectsSphere(Ds)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ts),Kl.multiplyMatrices(i,ts),Is.matrixWorld=Kl,Is.raycast(t,ba);for(let r=0,o=ba.length;r<o;r++){const l=ba[r];l.instanceId=a,l.object=this,e.push(l)}ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(s*this.count),s,this.count,Ko,wi));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const An=new ys,yd=new at(.5,.5),Ea=new R;class Xs{constructor(t=new un,e=new un,i=new un,s=new un,a=new un,r=new un){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ai,i=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],f=a[7],g=a[8],_=a[9],p=a[10],m=a[11],v=a[12],E=a[13],M=a[14],T=a[15];if(s[0].setComponents(c-r,f-h,m-g,T-v).normalize(),s[1].setComponents(c+r,f+h,m+g,T+v).normalize(),s[2].setComponents(c+o,f+d,m+_,T+E).normalize(),s[3].setComponents(c-o,f-d,m-_,T-E).normalize(),i)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,f-u,m-p,T-M).normalize();else if(s[4].setComponents(c-l,f-u,m-p,T-M).normalize(),e===Ai)s[5].setComponents(c+l,f+u,m+p,T+M).normalize();else if(e===Ws)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){An.center.set(0,0,0);const e=yd.distanceTo(t.center);return An.radius=.7071067811865476+e,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ea.x=s.normal.x>0?t.max.x:t.min.x,Ea.y=s.normal.y>0?t.max.y:t.min.y,Ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Jl=new ue;class tl{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){const a=e[s];Jl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xs),i[s].setFromProjectionMatrix(Jl,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Xs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new tl().copy(this)}}class Ah extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new ue,Uo=new Th,Ta=new ys,wa=new R;class Md extends Ce{constructor(t=new He,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=a,t.ray.intersectsSphere(Ta)===!1)return;Ql.copy(s).invert(),Uo.copy(t.ray).applyMatrix4(Ql);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,_=f;g<_;g++){const p=c.getX(g);wa.fromBufferAttribute(d,p),jl(wa,p,l,s,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,_=f;g<_;g++)wa.fromBufferAttribute(d,g),jl(wa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function jl(n,t,e,i,s,a,r){const o=Uo.distanceSqToPoint(n);if(o<e){const l=new R;Uo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Rh extends $e{constructor(t=[],e=ps,i,s,a,r,o,l,c,h){super(t,e,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ti extends $e{constructor(t,e,i,s,a,r,o,l,c){super(t,e,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gs extends $e{constructor(t,e,i=Fi,s,a,r,o=Ve,l=Ve,c,h=_n,d=1){if(h!==_n&&h!==mn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ch extends gs{constructor(t,e=Fi,i=ps,s,a,r=Ve,o=Ve,l,c=_n){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ph extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ke extends He{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(_,p,m,v,E,M,T,w,x,b,U){const C=M/x,L=T/b,N=M/2,V=T/2,I=w/2,B=x+1,X=b+1;let F=0,it=0;const G=new R;for(let $=0;$<X;$++){const j=$*L-V;for(let yt=0;yt<B;yt++){const Dt=yt*C-N;G[_]=Dt*v,G[p]=j*E,G[m]=I,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=w>0?1:-1,h.push(G.x,G.y,G.z),d.push(yt/x),d.push(1-$/b),F+=1}}for(let $=0;$<b;$++)for(let j=0;j<x;j++){const yt=u+j+B*$,Dt=u+j+B*($+1),q=u+(j+1)+B*($+1),_t=u+(j+1)+B*$;l.push(yt,Dt,_t),l.push(Dt,q,_t),it+=6}o.addGroup(f,it,U),f+=it,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ms extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new R,h=new at;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ke extends He{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const _=[],p=i/2;let m=0;v(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function v(){const M=new R,T=new R;let w=0;const x=(e-t)/i;for(let b=0;b<=a;b++){const U=[],C=b/a,L=C*(e-t)+t;for(let N=0;N<=s;N++){const V=N/s,I=V*l+o,B=Math.sin(I),X=Math.cos(I);T.x=L*B,T.y=-C*i+p,T.z=L*X,d.push(T.x,T.y,T.z),M.set(B,x,X).normalize(),u.push(M.x,M.y,M.z),f.push(V,1-C),U.push(g++)}_.push(U)}for(let b=0;b<s;b++)for(let U=0;U<a;U++){const C=_[U][b],L=_[U+1][b],N=_[U+1][b+1],V=_[U][b+1];(t>0||U!==0)&&(h.push(C,L,V),w+=3),(e>0||U!==a-1)&&(h.push(L,N,V),w+=3)}c.addGroup(m,w,0),m+=w}function E(M){const T=g,w=new at,x=new R;let b=0;const U=M===!0?t:e,C=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const I=N/s*l+o,B=Math.cos(I),X=Math.sin(I);x.x=U*X,x.y=p*C,x.z=U*B,d.push(x.x,x.y,x.z),u.push(0,C,0),w.x=B*.5+.5,w.y=X*.5*C+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){const V=T+N,I=L+N;M===!0?h.push(I,I+1,V):h.push(I+1,I,V),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mi extends ke{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ir extends He{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const a=[],r=[];o(s),c(i),h(),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(a.slice(),3)),this.setAttribute("uv",new ce(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new R,M=new R,T=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],E),f(e[w+1],M),f(e[w+2],T),l(E,M,T,v)}function l(v,E,M,T){const w=T+1,x=[];for(let b=0;b<=w;b++){x[b]=[];const U=v.clone().lerp(M,b/w),C=E.clone().lerp(M,b/w),L=w-b;for(let N=0;N<=L;N++)N===0&&b===w?x[b][N]=U:x[b][N]=U.clone().lerp(C,N/L)}for(let b=0;b<w;b++)for(let U=0;U<2*(w-b)-1;U++){const C=Math.floor(U/2);U%2===0?(u(x[b][C+1]),u(x[b+1][C]),u(x[b][C])):(u(x[b][C+1]),u(x[b+1][C+1]),u(x[b+1][C]))}}function c(v){const E=new R;for(let M=0;M<a.length;M+=3)E.x=a[M+0],E.y=a[M+1],E.z=a[M+2],E.normalize().multiplyScalar(v),a[M+0]=E.x,a[M+1]=E.y,a[M+2]=E.z}function h(){const v=new R;for(let E=0;E<a.length;E+=3){v.x=a[E+0],v.y=a[E+1],v.z=a[E+2];const M=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;r.push(M,1-T)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){const E=r[v+0],M=r[v+2],T=r[v+4],w=Math.max(E,M,T),x=Math.min(E,M,T);w>.9&&x<.1&&(E<.2&&(r[v+0]+=1),M<.2&&(r[v+2]+=1),T<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function f(v,E){const M=v*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const v=new R,E=new R,M=new R,T=new R,w=new at,x=new at,b=new at;for(let U=0,C=0;U<a.length;U+=9,C+=6){v.set(a[U+0],a[U+1],a[U+2]),E.set(a[U+3],a[U+4],a[U+5]),M.set(a[U+6],a[U+7],a[U+8]),w.set(r[C+0],r[C+1]),x.set(r[C+2],r[C+3]),b.set(r[C+4],r[C+5]),T.copy(v).add(E).add(M).divideScalar(3);const L=p(T);_(w,C+0,v,L),_(x,C+2,E,L),_(b,C+4,M,L)}}function _(v,E,M,T){T<0&&v.x===1&&(r[E]=v.x-1),M.x===0&&M.z===0&&(r[E]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.vertices,t.indices,t.radius,t.detail)}}class el extends ir{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new el(t.radius,t.detail)}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);const h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new at:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new R,s=[],a=[],r=[],o=new R,l=new ue;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}a[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(te(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(te(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class il extends ki{constructor(t=0,e=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sd extends il{constructor(t,e,i,s,a,r){super(t,e,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let n=0,t=0,e=0,i=0;function s(a,r,o,l){n=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,f*=h,s(r,o,u,f)},calc:function(a){const r=a*a,o=r*a;return n+t*a+e*r+i*o}}}const tc=new R,ec=new R,Or=new nl,Fr=new nl,Br=new nl;class bd extends ki{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(ec.subVectors(s[0],s[1]).add(s[0]),c=ec);const d=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(tc.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=tc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Or.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),Fr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Br.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Fr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Br.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Or.calc(l),Fr.calc(l),Br.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(n,t,e,i,s){const a=(i-t)*.5,r=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*n+e}function Ed(n,t){const e=1-n;return e*e*t}function Td(n,t){return 2*(1-n)*n*t}function wd(n,t){return n*n*t}function zs(n,t,e,i){return Ed(n,t)+Td(n,e)+wd(n,i)}function Ad(n,t){const e=1-n;return e*e*e*t}function Rd(n,t){const e=1-n;return 3*e*e*n*t}function Cd(n,t){return 3*(1-n)*n*n*t}function Pd(n,t){return n*n*n*t}function ks(n,t,e,i,s){return Ad(n,t)+Rd(n,e)+Cd(n,i)+Pd(n,s)}class Lh extends ki{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ks(t,s.x,a.x,r.x,o.x),ks(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ld extends ki{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ks(t,s.x,a.x,r.x,o.x),ks(t,s.y,a.y,r.y,o.y),ks(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ih extends ki{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends ki{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends ki{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(zs(t,s.x,a.x,r.x),zs(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends ki{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(zs(t,s.x,a.x,r.x),zs(t,s.y,a.y,r.y),zs(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(ic(o,l.x,c.x,h.x,d.x),ic(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:Sd,CatmullRomCurve3:bd,CubicBezierCurve:Lh,CubicBezierCurve3:Ld,EllipseCurve:il,LineCurve:Ih,LineCurve3:Id,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:Dd,SplineCurve:Nh});class Nd extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Oo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class nc extends Nd{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ih(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new Dh(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,r){const o=new Lh(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Nh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,a,r),this}absarc(t,e,i,s,a,r){return this.absellipse(t,e,i,i,s,a,r),this}ellipse(t,e,i,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,a,r,o,l),this}absellipse(t,e,i,s,a,r,o,l){const c=new il(t,e,i,s,a,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sl extends nc{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new nc().fromJSON(s))}return this}}function Ud(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let a=Uh(n,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=kd(n,t,a,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return qs(a,r,e,o,l,c,0),r}function Uh(n,t,e,i,s){let a;if(s===Jd(n,t,e,i)>0)for(let r=t;r<e;r+=i)a=sc(r/i|0,n[r],n[r+1],a);else for(let r=e-i;r>=t;r-=i)a=sc(r/i|0,n[r],n[r+1],a);return a&&xs(a,a.next)&&($s(a),a=a.next),a}function Dn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(xs(e,e.next)||Ae(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qs(n,t,e,i,s,a,r){if(!n)return;!r&&a&&Xd(n,i,s,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?Fd(n,i,s,a):Od(n)){t.push(l.i,n.i,c.i),$s(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=Bd(Dn(n),t),qs(n,t,e,i,s,a,2)):r===2&&zd(n,t,e,i,s,a):qs(Dn(n),t,e,i,s,a,1);break}}}function Od(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const s=t.x,a=e.x,r=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,a,r),d=Math.min(o,l,c),u=Math.max(s,a,r),f=Math.max(o,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Os(s,o,a,l,r,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fd(n,t,e,i){const s=n.prev,a=n,r=n.next;if(Ae(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,d=a.y,u=r.y,f=Math.min(o,l,c),g=Math.min(h,d,u),_=Math.max(o,l,c),p=Math.max(h,d,u),m=Fo(f,g,t,e,i),v=Fo(_,p,t,e,i);let E=n.prevZ,M=n.nextZ;for(;E&&E.z>=m&&M&&M.z<=v;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==r&&Os(o,h,l,d,c,u,E.x,E.y)&&Ae(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&Os(o,h,l,d,c,u,M.x,M.y)&&Ae(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==r&&Os(o,h,l,d,c,u,E.x,E.y)&&Ae(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&Os(o,h,l,d,c,u,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bd(n,t){let e=n;do{const i=e.prev,s=e.next.next;!xs(i,s)&&Fh(i,e,e.next,s)&&Ys(i,s)&&Ys(s,i)&&(t.push(i.i,e.i,s.i),$s(e),$s(e.next),e=n=s),e=e.next}while(e!==n);return Dn(e)}function zd(n,t,e,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&$d(r,o)){let l=Bh(r,o);r=Dn(r,r.next),l=Dn(l,l.next),qs(r,t,e,i,s,a,0),qs(l,t,e,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function kd(n,t,e,i){const s=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*i,l=a<r-1?t[a+1]*i:n.length,c=Uh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Yd(c))}s.sort(Hd);for(let a=0;a<s.length;a++)e=Gd(s[a],e);return e}function Hd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Gd(n,t){const e=Vd(n,t);if(!e)return t;const i=Bh(e,n);return Dn(i,i.next),Dn(e,e.next)}function Vd(n,t){let e=t;const i=n.x,s=n.y;let a=-1/0,r;if(xs(n,e))return e;do{if(xs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>a&&(a=d,r=e.x<e.next.x?e:e.next,d===i))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Oh(s<c?i:a,s,l,c,s<c?a:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ys(e,n)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&Wd(r,e)))&&(r=e,h=d)}e=e.next}while(e!==o);return r}function Wd(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function Xd(n,t,e,i){let s=n;do s.z===0&&(s.z=Fo(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qd(s)}function qd(n){let t,e=1;do{let i=n,s;n=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,e*=2}while(t>1);return n}function Fo(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Yd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Oh(n,t,e,i,s,a,r,o){return(s-r)*(t-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(i-o)}function Os(n,t,e,i,s,a,r,o){return!(n===r&&t===o)&&Oh(n,t,e,i,s,a,r,o)}function $d(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Kd(n,t)&&(Ys(n,t)&&Ys(t,n)&&Zd(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||xs(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function xs(n,t){return n.x===t.x&&n.y===t.y}function Fh(n,t,e,i){const s=Ra(Ae(n,t,e)),a=Ra(Ae(n,t,i)),r=Ra(Ae(e,i,n)),o=Ra(Ae(e,i,t));return!!(s!==a&&r!==o||s===0&&Aa(n,e,t)||a===0&&Aa(n,i,t)||r===0&&Aa(e,n,i)||o===0&&Aa(e,t,i))}function Aa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ra(n){return n>0?1:n<0?-1:0}function Kd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ys(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function Zd(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bh(n,t){const e=Bo(n.i,n.x,n.y),i=Bo(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function sc(n,t,e,i){const s=Bo(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bo(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jd(n,t,e,i){let s=0;for(let a=t,r=e-i;a<e;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}class Qd{static triangulate(t,e,i=2){return Ud(t,e,i)}}class os{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];ac(t),rc(i,t);let r=t.length;e.forEach(ac);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,rc(i,e[l]);const o=Qd.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function ac(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function rc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class nr extends He{constructor(t=new sl([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:jd;let E,M=!1,T,w,x,b;if(m){E=m.getSpacedPoints(h),M=!0,u=!1;const et=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,et),w=new R,x=new R,b=new R}u||(p=0,f=0,g=0,_=0);const U=o.extractPoints(c);let C=U.shape;const L=U.holes;if(!os.isClockWise(C)){C=C.reverse();for(let et=0,ht=L.length;et<ht;et++){const ot=L[et];os.isClockWise(ot)&&(L[et]=ot.reverse())}}function V(et){const ot=10000000000000001e-36;let Et=et[0];for(let xt=1;xt<=et.length;xt++){const Xt=xt%et.length,Lt=et[Xt],jt=Lt.x-Et.x,ee=Lt.y-Et.y,oe=jt*jt+ee*ee,O=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Et.x),Math.abs(Et.y)),Ie=ot*O*O;if(oe<=Ie){et.splice(Xt,1),xt--;continue}Et=Lt}}V(C),L.forEach(V);const I=L.length,B=C;for(let et=0;et<I;et++){const ht=L[et];C=C.concat(ht)}function X(et,ht,ot){return ht||re("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ht,ot)}const F=C.length;function it(et,ht,ot){let Et,xt,Xt;const Lt=et.x-ht.x,jt=et.y-ht.y,ee=ot.x-et.x,oe=ot.y-et.y,O=Lt*Lt+jt*jt,Ie=Lt*oe-jt*ee;if(Math.abs(Ie)>Number.EPSILON){const Jt=Math.sqrt(O),ge=Math.sqrt(ee*ee+oe*oe),pt=ht.x-jt/Jt,Re=ht.y+Lt/Jt,Bt=ot.x-oe/ge,kt=ot.y+ee/ge,A=((Bt-pt)*oe-(kt-Re)*ee)/(Lt*oe-jt*ee);Et=pt+Lt*A-et.x,xt=Re+jt*A-et.y;const y=Et*Et+xt*xt;if(y<=2)return new at(Et,xt);Xt=Math.sqrt(y/2)}else{let Jt=!1;Lt>Number.EPSILON?ee>Number.EPSILON&&(Jt=!0):Lt<-Number.EPSILON?ee<-Number.EPSILON&&(Jt=!0):Math.sign(jt)===Math.sign(oe)&&(Jt=!0),Jt?(Et=-jt,xt=Lt,Xt=Math.sqrt(O)):(Et=Lt,xt=jt,Xt=Math.sqrt(O/2))}return new at(Et/Xt,xt/Xt)}const G=[];for(let et=0,ht=B.length,ot=ht-1,Et=et+1;et<ht;et++,ot++,Et++)ot===ht&&(ot=0),Et===ht&&(Et=0),G[et]=it(B[et],B[ot],B[Et]);const $=[];let j,yt=G.concat();for(let et=0,ht=I;et<ht;et++){const ot=L[et];j=[];for(let Et=0,xt=ot.length,Xt=xt-1,Lt=Et+1;Et<xt;Et++,Xt++,Lt++)Xt===xt&&(Xt=0),Lt===xt&&(Lt=0),j[Et]=it(ot[Et],ot[Xt],ot[Lt]);$.push(j),yt=yt.concat(j)}let Dt;if(p===0)Dt=os.triangulateShape(B,L);else{const et=[],ht=[];for(let ot=0;ot<p;ot++){const Et=ot/p,xt=f*Math.cos(Et*Math.PI/2),Xt=g*Math.sin(Et*Math.PI/2)+_;for(let Lt=0,jt=B.length;Lt<jt;Lt++){const ee=X(B[Lt],G[Lt],Xt);Ft(ee.x,ee.y,-xt),Et===0&&et.push(ee)}for(let Lt=0,jt=I;Lt<jt;Lt++){const ee=L[Lt];j=$[Lt];const oe=[];for(let O=0,Ie=ee.length;O<Ie;O++){const Jt=X(ee[O],j[O],Xt);Ft(Jt.x,Jt.y,-xt),Et===0&&oe.push(Jt)}Et===0&&ht.push(oe)}}Dt=os.triangulateShape(et,ht)}const q=Dt.length,_t=g+_;for(let et=0;et<F;et++){const ht=u?X(C[et],yt[et],_t):C[et];M?(x.copy(T.normals[0]).multiplyScalar(ht.x),w.copy(T.binormals[0]).multiplyScalar(ht.y),b.copy(E[0]).add(x).add(w),Ft(b.x,b.y,b.z)):Ft(ht.x,ht.y,0)}for(let et=1;et<=h;et++)for(let ht=0;ht<F;ht++){const ot=u?X(C[ht],yt[ht],_t):C[ht];M?(x.copy(T.normals[et]).multiplyScalar(ot.x),w.copy(T.binormals[et]).multiplyScalar(ot.y),b.copy(E[et]).add(x).add(w),Ft(b.x,b.y,b.z)):Ft(ot.x,ot.y,d/h*et)}for(let et=p-1;et>=0;et--){const ht=et/p,ot=f*Math.cos(ht*Math.PI/2),Et=g*Math.sin(ht*Math.PI/2)+_;for(let xt=0,Xt=B.length;xt<Xt;xt++){const Lt=X(B[xt],G[xt],Et);Ft(Lt.x,Lt.y,d+ot)}for(let xt=0,Xt=L.length;xt<Xt;xt++){const Lt=L[xt];j=$[xt];for(let jt=0,ee=Lt.length;jt<ee;jt++){const oe=X(Lt[jt],j[jt],Et);M?Ft(oe.x,oe.y+E[h-1].y,E[h-1].x+ot):Ft(oe.x,oe.y,d+ot)}}}wt(),Ot();function wt(){const et=s.length/3;if(u){let ht=0,ot=F*ht;for(let Et=0;Et<q;Et++){const xt=Dt[Et];Me(xt[2]+ot,xt[1]+ot,xt[0]+ot)}ht=h+p*2,ot=F*ht;for(let Et=0;Et<q;Et++){const xt=Dt[Et];Me(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let ht=0;ht<q;ht++){const ot=Dt[ht];Me(ot[2],ot[1],ot[0])}for(let ht=0;ht<q;ht++){const ot=Dt[ht];Me(ot[0]+F*h,ot[1]+F*h,ot[2]+F*h)}}i.addGroup(et,s.length/3-et,0)}function Ot(){const et=s.length/3;let ht=0;vt(B,ht),ht+=B.length;for(let ot=0,Et=L.length;ot<Et;ot++){const xt=L[ot];vt(xt,ht),ht+=xt.length}i.addGroup(et,s.length/3-et,1)}function vt(et,ht){let ot=et.length;for(;--ot>=0;){const Et=ot;let xt=ot-1;xt<0&&(xt=et.length-1);for(let Xt=0,Lt=h+p*2;Xt<Lt;Xt++){const jt=F*Xt,ee=F*(Xt+1),oe=ht+Et+jt,O=ht+xt+jt,Ie=ht+xt+ee,Jt=ht+Et+ee;zt(oe,O,Ie,Jt)}}}function Ft(et,ht,ot){l.push(et),l.push(ht),l.push(ot)}function Me(et,ht,ot){Zt(et),Zt(ht),Zt(ot);const Et=s.length/3,xt=v.generateTopUV(i,s,Et-3,Et-2,Et-1);Qt(xt[0]),Qt(xt[1]),Qt(xt[2])}function zt(et,ht,ot,Et){Zt(et),Zt(ht),Zt(Et),Zt(ht),Zt(ot),Zt(Et);const xt=s.length/3,Xt=v.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);Qt(Xt[0]),Qt(Xt[1]),Qt(Xt[3]),Qt(Xt[1]),Qt(Xt[2]),Qt(Xt[3])}function Zt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Qt(et){a.push(et.x),a.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return tf(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oo[s.type]().fromJSON(s)),new nr(i,t.options)}}const jd={generateTopUV:function(n,t,e,i,s){const a=t[e*3],r=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new at(a,r),new at(o,l),new at(c,h)]},generateSideWallUV:function(n,t,e,i,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[a*3],p=t[a*3+1],m=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new at(r,1-l),new at(c,1-d),new at(u,1-g),new at(_,1-m)]:[new at(o,1-l),new at(h,1-d),new at(f,1-g),new at(p,1-m)]}};function tf(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sr extends ir{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sr(t.radius,t.detail)}}class xi extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let E=0;E<c;E++){const M=E*d-a;g.push(M,-v,0),_.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const E=v+c*m,M=v+c*(m+1),T=v+1+c*(m+1),w=v+1+c*m;f.push(E,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nn extends He{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new R,g=new at;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=a+p/i*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const v=m+p,E=v,M=v+i+1,T=v+i+2,w=v+1;o.push(E,M,w),o.push(M,T,w)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ss extends He{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const v=[],E=m/i,M=r+E*o,T=t*Math.cos(M),w=Math.sqrt(t*t-T*T);let x=0;m===0&&r===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const U=b/e,C=s+U*a;d.x=-w*Math.cos(C),d.y=T,d.z=w*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(U+x,1-E),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const E=h[m][v+1],M=h[m][v],T=h[m+1][v],w=h[m+1][v+1];(m!==0||r>0)&&f.push(E,M,w),(m!==i-1||l<Math.PI)&&f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function _s(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(oc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(oc(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=_s(n[e]);for(const s in i)t[s]=i[s]}return t}function oc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ef(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const nf={clone:_s,merge:Qe};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new we().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rf extends zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gt extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class of extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lf extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class js extends Ce{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class cf extends js{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const zr=new ue,lc=new R,cc=new R;class al{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(zr,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ca=new R,Pa=new Fn,Pi=new R;class kh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Pa,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ca,Pa,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cn=new R,hc=new at,uc=new at;class ii extends kh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class hf extends al{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Za*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(i!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class dc extends js{constructor(t,e,i=0,s=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new hf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class uf extends al{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class fc extends js{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Hh extends kh{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class df extends al{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class pf extends js{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const es=-90,is=1;class zo extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(es,is,t,e);s.layers=this.layers,this.add(s);const a=new ii(es,is,t,e);a.layers=this.layers,this.add(a);const r=new ii(es,is,t,e);r.layers=this.layers,this.add(r);const o=new ii(es,is,t,e);o.layers=this.layers,this.add(o);const l=new ii(es,is,t,e);l.layers=this.layers,this.add(l);const c=new ii(es,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mf extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function pc(n,t,e,i){const s=gf(i);switch(e){case hh:return n*t;case Ko:return n*t/s.components*s.byteLength;case Zo:return n*t/s.components*s.byteLength;case In:return n*t*2/s.components*s.byteLength;case Jo:return n*t*2/s.components*s.byteLength;case uh:return n*t*3/s.components*s.byteLength;case Di:return n*t*4/s.components*s.byteLength;case Qo:return n*t*4/s.components*s.byteLength;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:case ao:return Math.max(n,16)*Math.max(t,8)/4;case io:case so:return Math.max(n,8)*Math.max(t,8)/2;case ro:case oo:case co:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lo:case Wa:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ao:case Ro:case Co:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Po:case Lo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xa:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gf(n){switch(n){case li:case rh:return{byteLength:1,components:1};case Vs:case oh:case Bi:return{byteLength:2,components:1};case Yo:case $o:return{byteLength:2,components:4};case Fi:case qo:case wi:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function Gh(){let n=null,t=!1,e=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function xf(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,mp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,gp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Vm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:yf,alphamap_pars_fragment:Mf,alphatest_fragment:Sf,alphatest_pars_fragment:bf,aomap_fragment:Ef,aomap_pars_fragment:Tf,batching_pars_vertex:wf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:If,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Of,color_fragment:Ff,color_pars_fragment:Bf,color_pars_vertex:zf,color_vertex:kf,common:Hf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:$f,envmap_fragment:Kf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:cp,envmap_vertex:jf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:ip,fog_pars_fragment:np,gradientmap_pars_fragment:sp,lightmap_pars_fragment:ap,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:_p,lightprobes_pars_fragment:vp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:bp,map_fragment:Ep,map_pars_fragment:Tp,map_particle_fragment:wp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Dp,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:Op,normal_pars_fragment:Fp,normal_pars_vertex:Bp,normal_vertex:zp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:$p,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:im,skinbase_vertex:nm,skinning_pars_vertex:sm,skinning_vertex:am,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:_m,backgroundCube_vert:vm,backgroundCube_frag:ym,cube_vert:Mm,cube_frag:Sm,depth_vert:bm,depth_frag:Em,distance_vert:Tm,distance_frag:wm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Lm,meshbasic_frag:Im,meshlambert_vert:Dm,meshlambert_frag:Nm,meshmatcap_vert:Um,meshmatcap_frag:Om,meshnormal_vert:Fm,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:km,meshphysical_vert:Hm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:$m,sprite_vert:Km,sprite_frag:Zm},St={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ii={basic:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Qe([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Qe([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Qe([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Qe([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Qe([St.lights,St.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ii.physical={uniforms:Qe([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const La={r:0,b:0,g:0},Jm=new ue,Vh=new Vt;Vh.set(-1,0,0,0,1,0,0,0,1);function Qm(n,t,e,i,s,a){const r=new Ut(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const M=v.backgroundBlurriness>0;E=t.get(E,M)}return E}function g(v){let E=!1;const M=f(v);M===null?p(r,o):M&&M.isColor&&(p(M,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,E){const M=f(E);M&&M.isCubeTexture?(c===void 0&&(c=new Tt(new Ke(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:_s(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vh),c.material.toneMapped=se.getTransfer(M.colorSpace)!==fe,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Tt(new xi(2,2),new zi({name:"BackgroundMaterial",uniforms:_s(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(La,zh(n)),e.buffers.color.setClear(La.r,La.g,La.b,E,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,E=1){r.set(v),o=E,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(r,o)},render:g,addToRenderList:_,dispose:m}}function jm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let a=s,r=!1;function o(L,N,V,I,B){let X=!1;const F=d(L,I,V,N);a!==F&&(a=F,c(a.object)),X=f(L,I,V,B),X&&g(L,I,V,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,M(L,N,V,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,N,V,I){const B=I.wireframe===!0;let X=i[N.id];X===void 0&&(X={},i[N.id]=X);const F=L.isInstancedMesh===!0?L.id:0;let it=X[F];it===void 0&&(it={},X[F]=it);let G=it[V.id];G===void 0&&(G={},it[V.id]=G);let $=G[B];return $===void 0&&($=u(l()),G[B]=$),$}function u(L){const N=[],V=[],I=[];for(let B=0;B<e;B++)N[B]=0,V[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,N,V,I){const B=a.attributes,X=N.attributes;let F=0;const it=V.getAttributes();for(const G in it)if(it[G].location>=0){const j=B[G];let yt=X[G];if(yt===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),j===void 0||j.attribute!==yt||yt&&j.data!==yt.data)return!0;F++}return a.attributesNum!==F||a.index!==I}function g(L,N,V,I){const B={},X=N.attributes;let F=0;const it=V.getAttributes();for(const G in it)if(it[G].location>=0){let j=X[G];j===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const yt={};yt.attribute=j,j&&j.data&&(yt.data=j.data),B[G]=yt,F++}a.attributes=B,a.attributesNum=F,a.index=I}function _(){const L=a.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function p(L){m(L,0)}function m(L,N){const V=a.newAttributes,I=a.enabledAttributes,B=a.attributeDivisors;V[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),B[L]!==N&&(n.vertexAttribDivisor(L,N),B[L]=N)}function v(){const L=a.newAttributes,N=a.enabledAttributes;for(let V=0,I=N.length;V<I;V++)N[V]!==L[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function E(L,N,V,I,B,X,F){F===!0?n.vertexAttribIPointer(L,N,V,B,X):n.vertexAttribPointer(L,N,V,I,B,X)}function M(L,N,V,I){_();const B=I.attributes,X=V.getAttributes(),F=N.defaultAttributeValues;for(const it in X){const G=X[it];if(G.location>=0){let $=B[it];if($===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const j=$.normalized,yt=$.itemSize,Dt=t.get($);if(Dt===void 0)continue;const q=Dt.buffer,_t=Dt.type,wt=Dt.bytesPerElement,Ot=_t===n.INT||_t===n.UNSIGNED_INT||$.gpuType===qo;if($.isInterleavedBufferAttribute){const vt=$.data,Ft=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Me=$.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let zt=0;zt<G.locationSize;zt++)m(G.location+zt,vt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let zt=0;zt<G.locationSize;zt++)E(G.location+zt,yt/G.locationSize,_t,j,Ft*wt,(Me+yt/G.locationSize*zt)*wt,Ot)}else{if($.isInstancedBufferAttribute){for(let vt=0;vt<G.locationSize;vt++)m(G.location+vt,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let vt=0;vt<G.locationSize;vt++)p(G.location+vt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let vt=0;vt<G.locationSize;vt++)E(G.location+vt,yt/G.locationSize,_t,j,yt*wt,yt/G.locationSize*vt*wt,Ot)}}else if(F!==void 0){const j=F[it];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(G.location,j);break;case 3:n.vertexAttrib3fv(G.location,j);break;case 4:n.vertexAttrib4fv(G.location,j);break;default:n.vertexAttrib1fv(G.location,j)}}}}v()}function T(){U();for(const L in i){const N=i[L];for(const V in N){const I=N[V];for(const B in I){const X=I[B];for(const F in X)h(X[F].object),delete X[F];delete I[B]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const V in N){const I=N[V];for(const B in I){const X=I[B];for(const F in X)h(X[F].object),delete X[F];delete I[B]}}delete i[L.id]}function x(L){for(const N in i){const V=i[N];for(const I in V){const B=V[I];if(B[L.id]===void 0)continue;const X=B[L.id];for(const F in X)h(X[F].object),delete X[F];delete B[L.id]}}}function b(L){for(const N in i){const V=i[N],I=L.isInstancedMesh===!0?L.id:0,B=V[I];if(B!==void 0){for(const X in B){const F=B[X];for(const it in F)h(F[it].object),delete F[it];delete B[X]}delete V[I],Object.keys(V).length===0&&delete i[N]}}}function U(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function t0(n,t,e){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function r(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function e0(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(x){return!(x!==Di&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==li&&x!==wi&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:M,maxSamples:T,samples:w}}function i0(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new un,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!p)a?h(null):c();else{const v=a?0:i,E=v*4;let M=m.clippingState||null;l.value=M,M=h(g,u,E,f);for(let T=0;T!==E;++T)M[T]=e[T];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,M=f;E!==_;++E,M+=4)r.copy(d[E]).applyMatrix4(v,o),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}class rl extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:cs});a.uniforms.tEquirect.value=e;const r=new Tt(s,a),o=e.minFilter;return e.minFilter===pn&&(e.minFilter=si),new zo(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const mc=256,n0=3,s0=20,Wh=256,Xh=16,a0=3,r0=new R,o0=new Ut;class Qa{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zo(1,10,null),this._boxMesh=new Tt(new Ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){const{size:r=256,position:o=r0}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(o0));const p=new zo(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(mc,Ju(t))}_fromTexture(t,e){t.mapping===ps||t.mapping===Gs?this._setSize(t.image.length===0?mc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=gc(t,!1,!1),i=Math.log2(t)-n0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=e;const r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ps||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=l0(),this._integrationMaterial=c0());const e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/Xh);for(let r=0;r<=i;r++){const o=Qa.lodToRoughness(r,i);if(r>i-a0)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Wh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=h0());const i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}}function gc(n,t,e){return new rl(n,{minFilter:pn,generateMipmaps:t,type:Bi,colorSpace:qa,depthBuffer:e})}function ta(n,t,e){return new zi({name:n,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:je,blending:cs,depthTest:!1,depthWrite:!1})}function l0(){return ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function c0(){return ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function h0(){return ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xc(){return ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _c(){return ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function u0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===cr||f===hr)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new rl(g.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,g=f===cr||f===hr,_=f===ps||f===Gs;if(g||_){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Qa(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Qa(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===cr?u.mapping=ps:f===hr&&(u.mapping=Gs),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function d0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ga("WebGLRenderer: "+i+" extension not supported."),s}}}function f0(n,t,e,i){const s={},a=new WeakMap,r=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],r.unregister(g);const _=a.get(g);_&&(t.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),r.register(_,_.id,_),e.memory.geometries++),_}function h(g){const _=g.attributes;for(const p in _)t.update(_[p],n.ARRAY_BUFFER)}function d(g){const _=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?bh:Sh,M=new E(Math.ceil(v/3)*6,1),T=M.array;if(_!==null){const x=_.array;m=_.version;for(let b=0,U=0;b<v;b+=3){const C=x[b+0],L=x[b+1],N=x[b+2];T[U++]=C,T[U++]=L,T[U++]=L,T[U++]=N,T[U++]=N,T[U++]=C}}else{m=p.version;for(let x=0,b=0;x<v;x+=3){const U=x+0,C=x+1,L=x+2;T[b++]=U,T[b++]=C,T[b++]=C,T[b++]=L,T[b++]=L,T[b++]=U}}M.version=m;const w=a.get(g);w&&t.remove(w),a.set(g,M)}function u(g){const _=a.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&d(g)}else d(g);return a.get(g)}function f(){for(const g in s){const _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function p0(n,t,e){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){n.drawElements(i,u,a,d*r),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,a,d*r,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:re("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function g0(n,t,e){const i=new WeakMap,s=new we;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const x=new Float32Array(T*w*4*d),b=new vh(x,T,w,d);b.type=wi,b.needsUpdate=!0;const U=M*4;for(let L=0;L<d;L++){const N=m[L],V=v[L],I=E[L],B=T*w*4*L;for(let X=0;X<N.count;X++){const F=X*U;g===!0&&(s.fromBufferAttribute(N,X),x[B+F+0]=s.x,x[B+F+1]=s.y,x[B+F+2]=s.z,x[B+F+3]=0),_===!0&&(s.fromBufferAttribute(V,X),x[B+F+4]=s.x,x[B+F+5]=s.y,x[B+F+6]=s.z,x[B+F+7]=0),p===!0&&(s.fromBufferAttribute(I,X),x[B+F+8]=s.x,x[B+F+9]=s.y,x[B+F+10]=s.z,x[B+F+11]=I.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new at(T,w)},i.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function x0(n,t,e,i,s){let a=new WeakMap;function r(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const _0={[jc]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[Xo]:"ACES_FILMIC_TONE_MAPPING",[nh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function v0(n,t,e,i,s,a){const r=new Ni(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new He;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));const d=new rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Tt(h,d),f=new Hh(-1,1,1,-1,0,1);let g=null,_=null,p=!1,m,v=null,E=[],M=!1;this.setSize=function(T,w){r.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let x=0;x<E.length;x++){const b=E[x];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){E=T,M=E.length>0&&E[0].isRenderPass===!0;const w=r.width,x=r.height;E.length>0&&o===null&&(o=new Ni(w,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new Ni(w,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&E.some(U=>U.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&c===null&&(c=new gs(w,x),a===!0&&(c.format=mn,c.type=ms)),r.dispose(),r.depthTexture=b?c:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let U=0;U<E.length;U++){const C=E[U];C.setSize&&C.setSize(w,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===Zi&&E.length===0)return!1;if(v=w,w!==null){const x=w.width,b=w.height;(r.width!==x||r.height!==b)&&this.setSize(x,b)}return M===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(T,w){T.toneMapping=m,p=!0;let x=r,b=o;for(let U=0;U<E.length;U++){const C=E[U];C.enabled!==!1&&(C.render(T,b,x,w),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,d.defines={},se.getTransfer(g)===fe&&(d.defines.SRGB_TRANSFER="");const U=_0[_];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const qh=new $e,Yh=new gs(1,1),$h=new Ch(1),Kh=new vh,Zh=new nd,Jh=new Rh,vc=[],yc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),bc=new Float32Array(4);function bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=vc[s];if(a===void 0&&(a=new Float32Array(s),vc[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ar(n,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function S0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function E0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;bc.set(i),n.uniformMatrix2fv(this.addr,!1,bc),Oe(e,i)}}function T0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Sc.set(i),n.uniformMatrix3fv(this.addr,!1,Sc),Oe(e,i)}}function w0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Oe(e,i)}}function A0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function C0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function L0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function D0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function rr(n){return n.version===0&&(n.compareFunction=ph,n.needsUpdate=!0),n}function U0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=rr(Yh):a=qh,e.setTexture2D(t||a,s)}function O0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zh,s)}function F0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=rr($h):a=Jh,e.setTextureCube(t||a,s)}function B0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kh,s)}function z0(n){switch(n){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return b0;case 35674:return E0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}function k0(n,t){n.uniform1fv(this.addr,t)}function H0(n,t){const e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function G0(n,t){const e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function V0(n,t){const e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function W0(n,t){const e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function X0(n,t){const e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function q0(n,t){const e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Y0(n,t){n.uniform1iv(this.addr,t)}function $0(n,t){n.uniform2iv(this.addr,t)}function K0(n,t){n.uniform3iv(this.addr,t)}function Z0(n,t){n.uniform4iv(this.addr,t)}function J0(n,t){n.uniform1uiv(this.addr,t)}function Q0(n,t){n.uniform2uiv(this.addr,t)}function j0(n,t){n.uniform3uiv(this.addr,t)}function tg(n,t){n.uniform4uiv(this.addr,t)}function eg(n,t,e){const i=this.cache,s=t.length,a=ar(e,s);Ue(i,a)||(n.uniform1iv(this.addr,a),Oe(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=rr(Yh):r=qh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function ig(n,t,e){const i=this.cache,s=t.length,a=ar(e,s);Ue(i,a)||(n.uniform1iv(this.addr,a),Oe(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Zh,a[r])}function ng(n,t,e){const i=this.cache,s=t.length,a=ar(e,s);Ue(i,a)||(n.uniform1iv(this.addr,a),Oe(i,a));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=rr($h):r=Jh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||r,a[o])}function sg(n,t,e){const i=this.cache,s=t.length,a=ar(e,s);Ue(i,a)||(n.uniform1iv(this.addr,a),Oe(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Kh,a[r])}function ag(n){switch(n){case 5126:return k0;case 35664:return H0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return j0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return sg}}class rg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=z0(e.type)}}class og{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Ec(n,t){n.seq.push(t),n.map[t.id]=t}function cg(n,t,e){const i=n.name,s=i.length;for(kr.lastIndex=0;;){const a=kr.exec(i),r=kr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Ec(e,c===void 0?new rg(o,n,t):new og(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new lg(o),Ec(e,d)),e=d}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);cg(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Tc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hg=37297;let ug=0;function dg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const wc=new Vt;function fg(n){se._getMatrix(wc,se.workingColorSpace,n);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Ya:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ac(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+dg(n.getShaderSource(t),o)}else return a}function pg(n,t){const e=fg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const mg={[jc]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[Xo]:"ACESFilmic",[nh]:"AgX",[sh]:"Neutral",[ih]:"Custom"};function gg(n,t){const e=mg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new R;function xg(){se.getLuminanceCoefficients(Ia);const n=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function vg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Fs(n){return n!==""}function Rc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(n){return n.replace(Mg,Sg)}function Sg(n,t){const e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ko(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(n){return n.replace(bg,Eg)}function Eg(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Lc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Tg={[Fa]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function wg(n){return Tg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ag={[Gs]:"ENVMAP_MODE_REFRACTION"};function Rg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ag[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cg={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function Pg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[n.combine]||"ENVMAP_BLENDING_NONE"}function Lg(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=wg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Rg(e),d=Pg(e),u=_g(e),f=vg(a),g=s.createProgram();let _,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(_=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),r=ko(r),r=Rc(r,e),r=Cc(r,e),o=ko(o),o=Rc(o,e),o=Cc(o,e),r=Pc(r),o=Pc(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+_+r,E=m+p+o,M=Tc(s,s.VERTEX_SHADER,v),T=Tc(s,s.FRAGMENT_SHADER,E);s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(T)||"",I=L.trim(),B=N.trim(),X=V.trim();let F=!0,it=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,M,T);else{const G=Ac(s,M,"vertex"),$=Ac(s,T,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+G+`
`+$)}else I!==""?Ht("WebGLProgram: Program Info Log:",I):(B===""||X==="")&&(it=!1);it&&(C.diagnostics={runnable:F,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:X,prefix:p}})}s.deleteShader(M),s.deleteShader(T),x=new Va(s,g),b=yg(s,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,hg)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let Ig=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ng(t),e.set(t,i)),i}}class Ng{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function Ug(n){return n===In||n===Wa||n===Xa}function Og(n,t,e,i,s,a){const r=new yh,o=new Dg,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,U,C,L,N){const V=C.fog,I=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||B,X),it=u[x.type];let G=i.precision;x.precision!==null&&(G=i.getMaxPrecision(x.precision),G!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=$!==void 0?$.length:0;let yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let Dt,q,_t,wt;if(it){const Mt=Ii[it];Dt=Mt.vertexShader,q=Mt.fragmentShader}else{Dt=x.vertexShader,q=x.fragmentShader;const Mt=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,Mt,de),_t=Mt.id,wt=de.id}const Ot=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,zt=!!x.map,Zt=!!x.matcap,Qt=!!F,et=Qt&&F.isPMREMTexture===!0,ht=!!x.aoMap,ot=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Xt=!!x.displacementMap,Lt=!!x.emissiveMap,jt=!!x.metalnessMap,ee=!!x.roughnessMap,oe=x.anisotropy>0,O=x.clearcoat>0,Ie=x.diffuseRoughness>0,Jt=x.dispersion>0,ge=x.retroreflectivity>0,pt=x.iridescence>0,Re=x.sheen>0,Bt=x.transmission>0,kt=oe&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,y=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,nt=Ie&&!!x.diffuseRoughnessMap,tt=pt&&!!x.iridescenceMap,lt=pt&&!!x.iridescenceThicknessMap,mt=Re&&!!x.sheenColorMap,Z=Re&&!!x.sheenRoughnessMap,J=!!x.specularMap,ut=!!x.specularColorMap,P=!!x.specularIntensityMap,Q=Bt&&!!x.transmissionMap,Y=Bt&&!!x.thicknessMap,dt=!!x.gradientMap,rt=!!x.alphaMap,ct=x.alphaTest>0,It=!!x.alphaHash,$t=!!x.extensions;let st=Zi;x.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(st=n.toneMapping);const Nt=et?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Yt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Dt,fragmentShader:q,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:Ot===null?n.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Zt,envMap:Qt,envMapMode:Qt&&F.mapping,envMapPMREM:et,envMapMaxLod:et?Nt.length-1:null,envMapSize:et?Nt[0].width:null,aoMap:ht,lightMap:ot,bumpMap:Et,normalMap:xt,displacementMap:Xt,emissiveMap:Lt,normalMapObjectSpace:xt&&x.normalMapType===zu,normalMapTangentSpace:xt&&x.normalMapType===Do,packedNormalMap:xt&&x.normalMapType===Do&&Ug(x.normalMap.format),metalnessMap:jt,roughnessMap:ee,anisotropy:oe,anisotropyMap:kt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:k,diffuseRoughness:Ie,diffuseRoughnessMap:nt,dispersion:Jt,retroreflection:ge,iridescence:pt,iridescenceMap:tt,iridescenceThicknessMap:lt,sheen:Re,sheenColorMap:mt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ut,specularIntensityMap:P,transmission:Bt,transmissionMap:Q,thicknessMap:Y,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:It,combine:x.combine,mapUv:zt&&f(x.map.channel),aoMapUv:ht&&f(x.aoMap.channel),lightMapUv:ot&&f(x.lightMap.channel),bumpMapUv:Et&&f(x.bumpMap.channel),normalMapUv:xt&&f(x.normalMap.channel),displacementMapUv:Xt&&f(x.displacementMap.channel),emissiveMapUv:Lt&&f(x.emissiveMap.channel),metalnessMapUv:jt&&f(x.metalnessMap.channel),roughnessMapUv:ee&&f(x.roughnessMap.channel),anisotropyMapUv:kt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:rt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||oe),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(zt||rt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===me,flipSided:x.side===je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&x.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function v(x){const b=u[x.type];let U;if(b){const C=Ii[b];U=nf.clone(C.uniforms)}else U=x.uniforms;return U}function E(x,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new Lg(n,b,x,s),c.push(U),h.set(b,U)),U}function M(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function Fg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Bg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ic(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dc(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function l(u,f,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const E=o(u,f,g,_,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,_,p,m){const v=o(u,f,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Bg),i.length>1&&i.sort(f||Ic),s.length>1&&s.sort(f||Ic)}function d(){for(let u=t,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function zg(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new Dc,n.set(i,[r])):s>=a.length?(r=new Dc,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function kg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Ut};break;case"SpotLight":e={position:new R,direction:new R,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Hg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Gg=0;function Vg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Wg(n){const t=new kg,e=Hg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,a=new ue,r=new ue;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,E=0,M=0,T=0,w=0,x=0,b=0,U=0,C=0;c.sort(Vg);for(let N=0,V=c.length;N<V;N++){const I=c[N],B=I.color,X=I.intensity,F=I.distance;let it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===In?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],X);C++}else if(I.isSunLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,j=e.get(I);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=it;const yt=$.getViewportCount();for(let Dt=0;Dt<yt;Dt++)i.sunShadowMatrix[_+Dt]=$.getMatrix(Dt),i.sunShadowCascade[_+Dt]=$._cascadeData[Dt];_+=yt,g++}i.sun[f]=G,f++}else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,j=e.get(I);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=G,p++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(B).multiplyScalar(X),G.distance=F,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;const $=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,$.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[v]=$.matrix,I.castShadow){const j=e.get(I);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=it,x++}v++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(B).multiplyScalar(X),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=G,E++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const $=I.shadow,j=e.get(I);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=I.shadow.matrix,w++}i.point[m]=G,m++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(X),G.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[M]=G,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==E||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=C,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=E,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=C,i.version=Gg++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){const M=c[v];if(M.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(M.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Nc(n){const t=new Wg(n),e=[],i=[],s=[];function a(d){h.camera=d,e.length=0,i.length=0,s.length=0}function r(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Xg(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Nc(n),t.set(s,[o])):a>=r.length?(o=new Nc(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`,$g=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Kg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Uc=new ue,Ns=new R,Hr=new R;function Zg(n,t,e){let i=new Xs;const s=new at,a=new at,r=new we,o=new of,l=new lf,c={},h=e.maxTextureSize,d={[Ln]:je,[je]:Ln,[me]:me},u=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let m=this.type;this.render=function(w,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Wo&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);const U=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(cs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=m!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){const X=w[I],F=X.shadow;if(F===void 0){Ht("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const it=F.getFrameExtents();s.multiply(it),a.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/it.x),s.x=a.x*it.x,F.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/it.y),s.y=a.y*it.y,F.mapSize.y=a.y));const G=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Us){if(X.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ni(s.x,s.y,{format:In,type:Bi,minFilter:si,magFilter:si,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new gs(s.x,s.y,wi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=_n,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ve,F.map.depthTexture.magFilter=Ve}else X.isPointLight?(F.map=new rl(s.x),F.map.depthTexture=new Ch(s.x,Fi)):(F.map=new Ni(s.x,s.y),F.map.depthTexture=new gs(s.x,s.y,Fi)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=_n,this.type===Fa?(F.map.depthTexture.compareFunction=G?fh:dh,F.map.depthTexture.minFilter=si,F.map.depthTexture.magFilter=si):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ve,F.map.depthTexture.magFilter=Ve);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,b);const j=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let yt=0;yt<$;yt++){const Dt=F.getCamera(yt);if(X.isPointLight){const q=F.camera,_t=F.matrix,wt=X.distance||q.far;wt!==q.far&&(q.far=wt,q.updateProjectionMatrix()),Ns.setFromMatrixPosition(X.matrixWorld),q.position.copy(Ns),Hr.copy(q.position),Hr.add($g[yt]),q.up.copy(Kg[yt]),q.lookAt(Hr),q.updateMatrixWorld(),_t.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Uc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Uc,q.coordinateSystem,q.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,yt),n.clear();else{yt===0&&(n.setRenderTarget(F.map),n.clear());const q=F.getViewport(yt);r.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),N.viewport(r)}i=F.getFrustum(yt),M(x,b,Dt,X,j,this.type)}F.isPointLightShadow!==!0&&this.type===Us&&v(F,b),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(U,C,L)};function v(w,x){const b=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ni(s.x,s.y,{format:In,type:Bi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,b,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,b,f,_,null)}function E(w,x,b,U){let C=null;const L=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=b.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const N=C.uuid,V=x.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let B=I[V];B===void 0&&(B=C.clone(),I[V]=B,x.addEventListener("dispose",T)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,U===Us?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=n.properties.get(C);N.light=b}return C}function M(w,x,b,U,C,L){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Us)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const I=t.update(w),B=w.material;if(Array.isArray(B)){const X=I.groups;for(let F=0,it=X.length;F<it;F++){const G=X[F],$=B[G.materialIndex];if($&&$.visible){const j=E(w,$,U,L);w.onBeforeShadow(n,w,x,b,I,j,G),n.renderBufferDirect(b,null,I,j,w,G),w.onAfterShadow(n,w,x,b,I,j,G)}}}else if(B.visible){const X=E(w,B,U,L);w.onBeforeShadow(n,w,x,b,I,X,null),n.renderBufferDirect(b,null,I,X,w,null),w.onAfterShadow(n,w,x,b,I,X,null)}}const V=w.children;for(let I=0,B=V.length;I<B;I++)M(V[I],x,b,U,C,L)}function T(w){w.target.removeEventListener("dispose",T);for(const b in c){const U=c[b],C=w.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function Jg(n,t){function e(){let P=!1;const Q=new we;let Y=null;const dt=new we(0,0,0,0);return{setMask:function(rt){Y!==rt&&!P&&(n.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){P=rt},setClear:function(rt,ct,It,$t,st){st===!0&&(rt*=$t,ct*=$t,It*=$t),Q.set(rt,ct,It,$t),dt.equals(Q)===!1&&(n.clearColor(rt,ct,It,$t),dt.copy(Q))},reset:function(){P=!1,Y=null,dt.set(-1,0,0,0)}}}function i(){let P=!1,Q=!1,Y=null,dt=null,rt=null;return{setReversed:function(ct){if(Q!==ct){const It=t.get("EXT_clip_control");ct?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Q=ct;const $t=rt;rt=null,this.setClear($t)}},getReversed:function(){return Q},setTest:function(ct){ct?vt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!P&&(n.depthMask(ct),Y=ct)},setFunc:function(ct){if(Q&&(ct=Ku[ct]),dt!==ct){switch(ct){case $r:n.depthFunc(n.NEVER);break;case Kr:n.depthFunc(n.ALWAYS);break;case Zr:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Jr:n.depthFunc(n.EQUAL);break;case Qr:n.depthFunc(n.GEQUAL);break;case jr:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ct}},setLocked:function(ct){P=ct},setClear:function(ct){rt!==ct&&(rt=ct,Q&&(ct=1-ct),n.clearDepth(ct))},reset:function(){P=!1,Y=null,dt=null,rt=null,Q=!1}}}function s(){let P=!1,Q=null,Y=null,dt=null,rt=null,ct=null,It=null,$t=null,st=null;return{setTest:function(Nt){P||(Nt?vt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(Nt){Q!==Nt&&!P&&(n.stencilMask(Nt),Q=Nt)},setFunc:function(Nt,Yt,Mt){(Y!==Nt||dt!==Yt||rt!==Mt)&&(n.stencilFunc(Nt,Yt,Mt),Y=Nt,dt=Yt,rt=Mt)},setOp:function(Nt,Yt,Mt){(ct!==Nt||It!==Yt||$t!==Mt)&&(n.stencilOp(Nt,Yt,Mt),ct=Nt,It=Yt,$t=Mt)},setLocked:function(Nt){P=Nt},setClear:function(Nt){st!==Nt&&(n.clearStencil(Nt),st=Nt)},reset:function(){P=!1,Q=null,Y=null,dt=null,rt=null,ct=null,It=null,$t=null,st=null}}}const a=new e,r=new i,o=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,E=null,M=null,T=null,w=null,x=null,b=new Ut(0,0,0),U=0,C=!1,L=null,N=null,V=null,I=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,it=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=it>=2);let $=null,j={};const yt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),q=new we().fromArray(yt),_t=new we().fromArray(Dt);function wt(P,Q,Y,dt){const rt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(P,ct),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Y;It++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(Q+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return ct}const Ot={};Ot[n.TEXTURE_2D]=wt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ot[n.TEXTURE_CUBE_MAP]=wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[n.TEXTURE_2D_ARRAY]=wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ot[n.TEXTURE_3D]=wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),r.setFunc(Hs),Et(!1),xt(Tl),vt(n.CULL_FACE),ht(cs);function vt(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ft(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Me(P,Q){return u[P]!==Q?(n.bindFramebuffer(P,Q),u[P]=Q,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function zt(P,Q){let Y=g,dt=!1;if(P){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));const rt=P.textures;if(Y.length!==rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,It=rt.length;ct<It;ct++)Y[ct]=n.COLOR_ATTACHMENT0+ct;Y.length=rt.length,dt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,dt=!0);dt&&n.drawBuffers(Y)}function Zt(P){return _!==P?(n.useProgram(P),_=P,!0):!1}const Qt={[rs]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[vu]:n.FUNC_REVERSE_SUBTRACT};Qt[yu]=n.MIN,Qt[Mu]=n.MAX;const et={[Su]:n.ZERO,[bu]:n.ONE,[Eu]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[Pu]:n.SRC_ALPHA_SATURATE,[Ru]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Tu]:n.ONE_MINUS_SRC_COLOR,[Jc]:n.ONE_MINUS_SRC_ALPHA,[Cu]:n.ONE_MINUS_DST_COLOR,[Au]:n.ONE_MINUS_DST_ALPHA,[Lu]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Du]:n.CONSTANT_ALPHA,[Nu]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(P,Q,Y,dt,rt,ct,It,$t,st,Nt){if(P===cs){p===!0&&(Ft(n.BLEND),p=!1);return}if(p===!1&&(vt(n.BLEND),p=!0),P!==xu){if(P!==m||Nt!==C){if((v!==rs||T!==rs)&&(n.blendEquation(n.FUNC_ADD),v=rs,T=rs),Nt)switch(P){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case di:n.blendFunc(n.ONE,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:re("WebGLState: Invalid blending: ",P);break}else switch(P){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wl:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",P);break}E=null,M=null,w=null,x=null,b.set(0,0,0),U=0,m=P,C=Nt}return}rt=rt||Q,ct=ct||Y,It=It||dt,(Q!==v||rt!==T)&&(n.blendEquationSeparate(Qt[Q],Qt[rt]),v=Q,T=rt),(Y!==E||dt!==M||ct!==w||It!==x)&&(n.blendFuncSeparate(et[Y],et[dt],et[ct],et[It]),E=Y,M=dt,w=ct,x=It),($t.equals(b)===!1||st!==U)&&(n.blendColor($t.r,$t.g,$t.b,st),b.copy($t),U=st),m=P,C=!1}function ot(P,Q){P.side===me?Ft(n.CULL_FACE):vt(n.CULL_FACE);let Y=P.side===je;Q&&(Y=!Y),Et(Y),P.blending===Bs&&P.transparent===!1?ht(cs):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const dt=P.stencilWrite;o.setTest(dt),dt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Lt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(P){L!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),L=P)}function xt(P){P!==mu?(vt(n.CULL_FACE),P!==N&&(P===Tl?n.cullFace(n.BACK):P===gu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),N=P}function Xt(P){P!==V&&(F&&n.lineWidth(P),V=P)}function Lt(P,Q,Y){P?(vt(n.POLYGON_OFFSET_FILL),(I!==Q||B!==Y)&&(I=Q,B=Y,r.getReversed()&&(Q=-Q,Y=-Y),n.polygonOffset(Q,Y))):Ft(n.POLYGON_OFFSET_FILL)}function jt(P){P?vt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function ee(P){P===void 0&&(P=n.TEXTURE0+X-1),$!==P&&(n.activeTexture(P),$=P)}function oe(P,Q,Y){Y===void 0&&($===null?Y=n.TEXTURE0+X-1:Y=$);let dt=j[Y];dt===void 0&&(dt={type:void 0,texture:void 0},j[Y]=dt),(dt.type!==P||dt.texture!==Q)&&($!==Y&&(n.activeTexture(Y),$=Y),n.bindTexture(P,Q||Ot[P]),dt.type=P,dt.texture=Q)}function O(){const P=j[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ie(){try{n.compressedTexImage2D(...arguments)}catch(P){re("WebGLState:",P)}}function Jt(){try{n.compressedTexImage3D(...arguments)}catch(P){re("WebGLState:",P)}}function ge(){try{n.texSubImage2D(...arguments)}catch(P){re("WebGLState:",P)}}function pt(){try{n.texSubImage3D(...arguments)}catch(P){re("WebGLState:",P)}}function Re(){try{n.compressedTexSubImage2D(...arguments)}catch(P){re("WebGLState:",P)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){re("WebGLState:",P)}}function kt(){try{n.texStorage2D(...arguments)}catch(P){re("WebGLState:",P)}}function A(){try{n.texStorage3D(...arguments)}catch(P){re("WebGLState:",P)}}function y(){try{n.texImage2D(...arguments)}catch(P){re("WebGLState:",P)}}function k(){try{n.texImage3D(...arguments)}catch(P){re("WebGLState:",P)}}function nt(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function tt(P,Q){d[P]!==Q&&(n.pixelStorei(P,Q),d[P]=Q)}function lt(P){q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function mt(P){_t.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),_t.copy(P))}function Z(P,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let dt=Y.get(P);dt===void 0&&(dt=n.getUniformBlockIndex(Q,P.name),n.uniformBlockBinding(Q,dt,dt),Y.set(P,dt))}function J(P,Q,Y){const rt=c.get(Q).get(P);l[rt]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,Y),l[rt]=Y)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,j={},u={},l={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,E=null,M=null,T=null,w=null,x=null,b=new Ut(0,0,0),U=0,C=!1,L=null,N=null,V=null,I=null,B=null,q.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:vt,disable:Ft,bindFramebuffer:Me,drawBuffers:zt,useProgram:Zt,setBlending:ht,setMaterial:ot,setFlipSided:Et,setCullFace:xt,setLineWidth:Xt,setPolygonOffset:Lt,setScissorTest:jt,activeTexture:ee,bindTexture:oe,unbindTexture:O,compressedTexImage2D:Ie,compressedTexImage3D:Jt,texImage2D:y,texImage3D:k,pixelStorei:tt,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:kt,texStorage3D:A,texSubImage2D:ge,texSubImage3D:pt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Bt,scissor:lt,viewport:mt,reset:ut}}function Qg(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,d=new Set;let u;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return p?new OffscreenCanvas(A,y):$a("canvas")}function v(A,y,k){let nt=1;const tt=kt(A);if((tt.width>k||tt.height>k)&&(nt=k/Math.max(tt.width,tt.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const lt=Math.floor(nt*tt.width),mt=Math.floor(nt*tt.height);u===void 0&&(u=m(lt,mt));const Z=y?m(lt,mt):u;return Z.width=lt,Z.height=mt,Z.getContext("2d").drawImage(A,0,0,lt,mt),Ht("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+lt+"x"+mt+")."),Z}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,y,k,nt,tt,lt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;nt&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8),k===n.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),k===n.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),y===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8),k===n.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),k===n.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),k===n.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),y===n.RGBA){const J=lt?Ya:se.getTransfer(tt);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=J===fe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),k===n.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,y){let k;return A?y===null||y===Fi||y===ms?k=n.DEPTH24_STENCIL8:y===wi?k=n.DEPTH32F_STENCIL8:y===Vs&&(k=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fi||y===ms?k=n.DEPTH_COMPONENT24:y===wi?k=n.DEPTH_COMPONENT32F:y===Vs&&(k=n.DEPTH_COMPONENT16),k}function b(A,y){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==si?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function U(A){const y=new WeakRef(A);i.get(A).__ref=y,g.add(y),_.register(A,y,y)}function C(A){const y=i.get(A).__ref;y!==void 0&&(g.delete(y),_.unregister(y))}function L(A){V(A.target)}function N(A){I(A.target)}function V(A){A.removeEventListener("dispose",L),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",N),C(A),it(A)}function B(){for(const A of g){const y=A.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):V(y))}g.clear(),d.clear()}function X(A){const y=i.get(A);if(y.__webglInit===void 0)return;const k=A.source,nt=f.get(k);if(nt){const tt=nt[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&F(A),Object.keys(nt).length===0&&f.delete(k)}i.remove(A)}function F(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const k=A.source,nt=f.get(k);delete nt[y.__cacheKey],r.memory.textures--}function it(A){const y=i.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&V(k),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let lt=0;lt<y.__webglFramebuffer[tt].length;lt++)n.deleteFramebuffer(y.__webglFramebuffer[tt][lt]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const nt=A.textures;for(let tt=0,lt=nt.length;tt<lt;tt++){const mt=i.get(nt[tt]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),r.memory.textures--),i.remove(nt[tt])}i.remove(A)}let G=0;function $(){G=0}function j(){return G}function yt(A){G=A}function Dt(){const A=G;return A>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function q(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function _t(A,y){const k=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const nt=A.image;if(nt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function wt(A,y){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ot(k,A,y);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function Ot(A,y){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ot(k,A,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function vt(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Et(k,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const Ft={[Oi]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},Me={[Ve]:n.NEAREST,[Fu]:n.NEAREST_MIPMAP_NEAREST,[na]:n.NEAREST_MIPMAP_LINEAR,[si]:n.LINEAR,[ur]:n.LINEAR_MIPMAP_NEAREST,[pn]:n.LINEAR_MIPMAP_LINEAR},zt={[Hu]:n.NEVER,[ph]:n.ALWAYS,[Gu]:n.LESS,[dh]:n.LEQUAL,[Vu]:n.EQUAL,[fh]:n.GEQUAL,[Wu]:n.GREATER,[Xu]:n.NOTEQUAL};function Zt(A,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===si||y.magFilter===ur||y.magFilter===na||y.magFilter===pn||y.minFilter===si||y.minFilter===ur||y.minFilter===na||y.minFilter===pn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ft[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ft[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ft[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Me[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ve||y.minFilter!==na&&y.minFilter!==pn||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",L),U(y));const nt=y.source;let tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));const lt=q(y);if(lt!==A.__cacheKey){tt[lt]===void 0&&(tt[lt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,k=!0),tt[lt].usedTimes++;const mt=tt[A.__cacheKey];mt!==void 0&&(tt[A.__cacheKey].usedTimes--,mt.usedTimes===0&&F(y)),A.__cacheKey=lt,A.__webglTexture=tt[lt].texture}return k}function et(A,y,k){return Math.floor(Math.floor(A/k)/y)}function ht(A,y,k,nt){const lt=A.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,nt,y.data);else{lt.sort((P,Q)=>P.start-Q.start);let mt=0;for(let P=1;P<lt.length;P++){const Q=lt[mt],Y=lt[P],dt=Q.start+Q.count,rt=et(Y.start,y.width,4),ct=et(Q.start,y.width,4);Y.start<=dt+1&&rt===ct&&et(Y.start+Y.count-1,y.width,4)===rt?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++mt,lt[mt]=Y)}lt.length=mt+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let P=0,Q=lt.length;P<Q;P++){const Y=lt[P],dt=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),ct=dt%y.width,It=Math.floor(dt/y.width),$t=rt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,It),e.texSubImage2D(n.TEXTURE_2D,0,ct,It,$t,st,k,nt,y.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function ot(A,y,k){let nt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=n.TEXTURE_3D);const tt=Qt(A,y),lt=y.source;e.bindTexture(nt,A.__webglTexture,n.TEXTURE0+k);const mt=i.get(lt);if(lt.version!==mt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const st=se.getPrimaries(se.workingColorSpace),Nt=y.colorSpace===fn?null:se.getPrimaries(y.colorSpace),Yt=y.colorSpace===fn||st===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let J=v(y.image,!1,s.maxTextureSize);J=Bt(y,J);const ut=a.convert(y.format,y.colorSpace),P=a.convert(y.type);let Q=w(y.internalFormat,ut,P,y.normalized,y.colorSpace,y.isVideoTexture);Zt(nt,y);let Y;const dt=y.mipmaps,rt=y.isVideoTexture!==!0,ct=mt.__version===void 0||tt===!0,It=lt.dataReady,$t=b(y,J);if(y.isDepthTexture)Q=x(y.format===mn,y.type),ct&&(rt?e.texStorage2D(n.TEXTURE_2D,1,Q,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Q,J.width,J.height,0,ut,P,null));else if(y.isDataTexture)if(dt.length>0){rt&&ct&&e.texStorage2D(n.TEXTURE_2D,$t,Q,dt[0].width,dt[0].height);for(let st=0,Nt=dt.length;st<Nt;st++)Y=dt[st],rt?It&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ut,P,Y.data):e.texImage2D(n.TEXTURE_2D,st,Q,Y.width,Y.height,0,ut,P,Y.data);y.generateMipmaps=!1}else rt?(ct&&e.texStorage2D(n.TEXTURE_2D,$t,Q,J.width,J.height),It&&ht(y,J,ut,P)):e.texImage2D(n.TEXTURE_2D,0,Q,J.width,J.height,0,ut,P,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,Q,dt[0].width,dt[0].height,J.depth);for(let st=0,Nt=dt.length;st<Nt;st++)if(Y=dt[st],y.format!==Di)if(ut!==null)if(rt){if(It)if(y.layerUpdates.size>0){const Yt=pc(Y.width,Y.height,y.format,y.type);for(const Mt of y.layerUpdates){const de=Y.data.subarray(Mt*Yt/Y.data.BYTES_PER_ELEMENT,(Mt+1)*Yt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Mt,Y.width,Y.height,1,ut,de)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,J.depth,ut,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?It&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,J.depth,ut,P,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Q,Y.width,Y.height,J.depth,0,ut,P,Y.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{rt&&ct&&e.texStorage2D(n.TEXTURE_2D,$t,Q,dt[0].width,dt[0].height);for(let st=0,Nt=dt.length;st<Nt;st++)Y=dt[st],y.format!==Di?ut!==null?rt?It&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ut,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Q,Y.width,Y.height,0,Y.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?It&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ut,P,Y.data):e.texImage2D(n.TEXTURE_2D,st,Q,Y.width,Y.height,0,ut,P,Y.data)}else if(y.isDataArrayTexture)if(rt){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,Q,J.width,J.height,J.depth),It)if(y.layerUpdates.size>0){const st=pc(J.width,J.height,y.format,y.type);for(const Nt of y.layerUpdates){const Yt=J.data.subarray(Nt*st/J.data.BYTES_PER_ELEMENT,(Nt+1)*st/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,J.width,J.height,1,ut,P,Yt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,P,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ut,P,J.data);else if(y.isData3DTexture)rt?(ct&&e.texStorage3D(n.TEXTURE_3D,$t,Q,J.width,J.height,J.depth),It&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,P,J.data)):e.texImage3D(n.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ut,P,J.data);else if(y.isFramebufferTexture){if(ct)if(rt)e.texStorage2D(n.TEXTURE_2D,$t,Q,J.width,J.height);else{let st=J.width,Nt=J.height;for(let Yt=0;Yt<$t;Yt++)e.texImage2D(n.TEXTURE_2D,Yt,Q,st,Nt,0,ut,P,null),st>>=1,Nt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),J.parentNode!==st){st.appendChild(J),d.add(y),st.onpaint=Nt=>{const Yt=Nt.changedElements;for(const Mt of d)Yt.includes(Mt.image)&&(Mt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const Yt=n.RGBA,Mt=n.RGBA,de=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Yt,Mt,de,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(rt&&ct){const st=kt(dt[0]);e.texStorage2D(n.TEXTURE_2D,$t,Q,st.width,st.height)}for(let st=0,Nt=dt.length;st<Nt;st++)Y=dt[st],rt?It&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ut,P,Y):e.texImage2D(n.TEXTURE_2D,st,Q,ut,P,Y);y.generateMipmaps=!1}else if(rt){if(ct){const st=kt(J);e.texStorage2D(n.TEXTURE_2D,$t,Q,st.width,st.height)}It&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,P,J)}else e.texImage2D(n.TEXTURE_2D,0,Q,ut,P,J);E(y)&&y.mipmapsAutoUpdate===!0&&M(nt),mt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Et(A,y,k){if(y.image.length!==6)return;const nt=Qt(A,y),tt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const lt=i.get(tt);if(tt.version!==lt.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);const mt=se.getPrimaries(se.workingColorSpace),Z=y.colorSpace===fn?null:se.getPrimaries(y.colorSpace),J=y.colorSpace===fn||mt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ut=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let Mt=0;Mt<6;Mt++)!ut&&!P?Q[Mt]=v(y.image[Mt],!0,s.maxCubemapSize):Q[Mt]=P?y.image[Mt].image:y.image[Mt],Q[Mt]=Bt(y,Q[Mt]);const Y=Q[0],dt=a.convert(y.format,y.colorSpace),rt=a.convert(y.type);let ct=w(y.internalFormat,dt,rt,y.normalized,y.colorSpace);const It=y.isVideoTexture!==!0,$t=lt.__version===void 0||nt===!0,st=tt.dataReady;let Nt=b(y,Y);Zt(n.TEXTURE_CUBE_MAP,y);let Yt;if(y.isDepthTexture){if(ct=x(y.format===mn,y.type),$t)if(It)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ct,Y.width,Y.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,Y.width,Y.height,0,dt,rt,null)}else if(ut){It&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,Y.width,Y.height);for(let Mt=0;Mt<6;Mt++){Yt=Q[Mt].mipmaps;for(let de=0;de<Yt.length;de++){const Fe=Yt[de];y.format!==Di?dt!==null?It?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,0,0,Fe.width,Fe.height,dt,Fe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,ct,Fe.width,Fe.height,0,Fe.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,0,0,Fe.width,Fe.height,dt,rt,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,ct,Fe.width,Fe.height,0,dt,rt,Fe.data)}}}else{if(Yt=y.mipmaps,It&&$t){Yt.length>0&&Nt++;const Mt=kt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(P){It?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Q[Mt].width,Q[Mt].height,dt,rt,Q[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,Q[Mt].width,Q[Mt].height,0,dt,rt,Q[Mt].data);for(let de=0;de<Yt.length;de++){const nn=Yt[de].image[Mt].image;It?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,0,0,nn.width,nn.height,dt,rt,nn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,ct,nn.width,nn.height,0,dt,rt,nn.data)}}else{It?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,dt,rt,Q[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,dt,rt,Q[Mt]);for(let de=0;de<Yt.length;de++){const Fe=Yt[de];It?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,0,0,dt,rt,Fe.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,ct,dt,rt,Fe.image[Mt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),lt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function xt(A,y,k,nt,tt,lt){const mt=a.convert(k.format,k.colorSpace),Z=a.convert(k.type),J=w(k.internalFormat,mt,Z,k.normalized,k.colorSpace),ut=i.get(y),P=i.get(k);if(P.__renderTarget=y,!ut.__hasExternalTextures){const Q=Math.max(1,y.width>>lt),Y=Math.max(1,y.height>>lt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,lt,J,Q,Y,y.depth,0,mt,Z,null):e.texImage2D(tt,lt,J,Q,Y,0,mt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,tt,P.__webglTexture,0,ge(y)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,tt,P.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(A,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const nt=y.depthTexture,tt=nt&&nt.isDepthTexture?nt.type:null,lt=x(y.stencilBuffer,tt),mt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(y),lt,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(y),lt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,lt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,A)}else{const nt=y.textures;for(let tt=0;tt<nt.length;tt++){const lt=nt[tt],mt=a.convert(lt.format,lt.colorSpace),Z=a.convert(lt.type),J=w(lt.internalFormat,mt,Z,lt.normalized,lt.colorSpace);pt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(y),J,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(y),J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(A,y,k){const nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=i.get(y.depthTexture);tt.__renderTarget=y;const lt=nt?y.depthTexture.image[0]:y.depthTexture.image;(!tt.__webglTexture||lt.width!==y.width||lt.height!==y.height)&&(lt.width=y.width,lt.height=y.height,y.depthTexture.needsUpdate=!0),nt?vt(y.depthTexture,0):_t(y.depthTexture,0);const mt=tt.__webglTexture,Z=ge(y),J=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ut=y.depthTexture.format===mn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===_n)pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,J,mt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ut,J,mt,0);else if(y.depthTexture.format===mn)pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,J,mt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ut,J,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(A){const y=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",tt)};nt.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=nt}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Lt(y.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Lt(y.__webglFramebuffer[0],A,0):Lt(y.__webglFramebuffer,A,0);else if(k){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=n.createRenderbuffer(),Xt(y.__webglDepthbuffer[nt],A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,lt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Xt(y.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,y,k){const nt=i.get(A);y!==void 0&&xt(nt.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&jt(A)}function oe(A){const y=A.texture,k=i.get(A),nt=i.get(y);A.addEventListener("dispose",N),U(A);const tt=A.textures,lt=A.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=y.version,r.memory.textures++),lt){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=n.createFramebuffer()}else k.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)k.__webglFramebuffer[Z]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(mt)for(let Z=0,J=tt.length;Z<J;Z++){const ut=i.get(tt[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&pt(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<tt.length;Z++){const J=tt[Z];k.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const ut=a.convert(J.format,J.colorSpace),P=a.convert(J.type),Q=w(J.internalFormat,ut,P,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),Y=ge(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xt(k.__webglFramebuffer[Z][J],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else xt(k.__webglFramebuffer[Z],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(y)?M(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Z=0,J=tt.length;Z<J;Z++){const ut=tt[Z],P=i.get(ut);let Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,P.__webglTexture),Zt(Q,ut),xt(k.__webglFramebuffer,A,ut,n.COLOR_ATTACHMENT0+Z,Q,0),E(ut)&&M(Q)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,nt.__webglTexture),Zt(Z,y),y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xt(k.__webglFramebuffer[J],A,y,n.COLOR_ATTACHMENT0,Z,J);else xt(k.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,Z,0);E(y)?M(Z):y.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&jt(A)}function O(A){const y=A.textures;for(let k=0,nt=y.length;k<nt;k++){const tt=y[k];if(E(tt)&&tt.mipmapsAutoUpdate===!0){const lt=T(A),mt=i.get(tt).__webglTexture;e.bindTexture(lt,mt),M(lt),e.unbindTexture()}}}const Ie=[];function Jt(A){if(A.samples>0){if(pt(A)===!1){const y=A.textures,k=A.width,nt=A.height;let tt=n.COLOR_BUFFER_BIT;const lt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(A),Z=y.length>1;if(Z)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);const P=i.get(y[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,k,nt,0,0,k,nt,tt,n.NEAREST),l===!0&&(Ie.length=0,Ie.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ie.push(lt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);const P=i.get(y[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,P,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function pt(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(A){const y=r.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Bt(A,y){const k=A.colorSpace,nt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==qa&&k!==fn&&(se.getTransfer(k)===fe?(nt!==Di||tt!==li)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",k)),y}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=yt,this.setTexture2D=_t,this.setTexture2DArray=wt,this.setTexture3D=Ot,this.setTextureCube=vt,this.rebindTextures=ee,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pt,this.dispose=B}function jg(n,t){function e(i,s=fn){let a;const r=se.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===Yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rh)return n.BYTE;if(i===oh)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===qo)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Bi)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===uh)return n.RGB;if(i===Di)return n.RGBA;if(i===_n)return n.DEPTH_COMPONENT;if(i===mn)return n.DEPTH_STENCIL;if(i===Ko)return n.RED;if(i===Zo)return n.RED_INTEGER;if(i===In)return n.RG;if(i===Jo)return n.RG_INTEGER;if(i===Qo)return n.RGBA_INTEGER;if(i===Ba||i===za||i===ka||i===Ha)if(r===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===no||i===so||i===ao)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===so)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===oo||i===lo||i===co||i===ho||i===Wa||i===uo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ro||i===oo)return r===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===lo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===co)return a.COMPRESSED_R11_EAC;if(i===ho)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return a.COMPRESSED_RG11_EAC;if(i===uo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fo||i===po||i===mo||i===go||i===xo||i===_o||i===vo||i===yo||i===Mo||i===So||i===bo||i===Eo||i===To||i===wo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===fo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===So)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===Ro||i===Co)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ao)return r===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Po||i===Lo||i===Xa||i===Io)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Po)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`;class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ph(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new zi({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends On{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new ix,m={},v=e.getContextAttributes();let E=null,M=null;const T=[],w=[],x=new at;let b=null,U=null;const C=new ii;C.viewport=new we;const L=new ii;L.viewport=new we;const N=[C,L],V=new mf;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let _t=T[q];return _t===void 0&&(_t=new yr,T[q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(q){let _t=T[q];return _t===void 0&&(_t=new yr,T[q]=_t),_t.getGripSpace()},this.getHand=function(q){let _t=T[q];return _t===void 0&&(_t=new yr,T[q]=_t),_t.getHandSpace()};function X(q){const _t=w.indexOf(q.inputSource);if(_t===-1)return;const wt=T[_t];wt!==void 0&&(wt.update(q.inputSource,q.frame,c||r),wt.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",it);for(let q=0;q<T.length;q++){const _t=w[q];_t!==null&&(w[q]=null,T[q].disconnect(_t))}I=null,B=null,p.reset();for(const q in m)delete m[q];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,M=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),U!==null){const q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ot=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=v.stencil?mn:_n,Ot=v.stencil?ms:Fi);const Ft={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ni(u.textureWidth,u.textureHeight,{format:Di,type:li,depthTexture:new gs(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const wt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ni(f.framebufferWidth,f.framebufferHeight,{format:Di,type:li,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(q){for(let _t=0;_t<q.removed.length;_t++){const wt=q.removed[_t],Ot=w.indexOf(wt);Ot>=0&&(w[Ot]=null,T[Ot].disconnect(wt))}for(let _t=0;_t<q.added.length;_t++){const wt=q.added[_t];let Ot=w.indexOf(wt);if(Ot===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=w.length){w.push(wt),Ot=Ft;break}else if(w[Ft]===null){w[Ft]=wt,Ot=Ft;break}if(Ot===-1)break}const vt=T[Ot];vt&&vt.connect(wt)}}function G(q,_t){_t===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(_t.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let _t=q.near,wt=q.far;p.texture!==null&&(p.depthNear>0&&(_t=p.depthNear),p.depthFar>0&&(wt=p.depthFar)),V.near=L.near=C.near=_t,V.far=L.far=C.far=wt,(I!==V.near||B!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,B=V.far),V.layers.mask=q.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const Ot=q.parent,vt=V.cameras;G(V,Ot);for(let Ft=0;Ft<vt.length;Ft++)G(vt[Ft],Ot);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),$(q,V,Ot)};function $(q,_t,wt){wt===null?q.matrix.copy(_t.matrixWorld):(q.matrix.copy(wt.matrixWorld),q.matrix.invert(),q.matrix.multiply(_t.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(_t.projectionMatrix),q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Za*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(q){return m[q]};let j=null;function yt(q,_t){if(h=_t.getViewerPose(c||r),g=_t,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ot=!1;wt.length!==V.cameras.length&&(V.cameras.length=0,Ot=!0);for(let zt=0;zt<wt.length;zt++){const Zt=wt[zt];let Qt=null;if(f!==null)Qt=f.getViewport(Zt);else{const ht=d.getViewSubImage(u,Zt);Qt=ht.viewport,zt===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let et=N[zt];et===void 0&&(et=new ii,et.layers.enable(zt),et.viewport=new we,N[zt]=et),et.matrix.fromArray(Zt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Zt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),zt===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ot===!0&&V.cameras.push(et)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const zt=d.getDepthInformation(wt[0]);zt&&zt.isValid&&zt.texture&&p.init(zt,s.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let zt=0;zt<wt.length;zt++){const Zt=wt[zt].camera;if(Zt){let Qt=m[Zt];Qt||(Qt=new Ph,m[Zt]=Qt);const et=d.getCameraImage(Zt);Qt.sourceTexture=et}}}}for(let wt=0;wt<T.length;wt++){const Ot=w[wt],vt=T[wt];Ot!==null&&vt!==void 0&&vt.update(Ot,_t,c||r)}j&&j(q,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),g=null}const Dt=new Gh;Dt.setAnimationLoop(yt),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}const sx=new ue,Qh=new Vt;Qh.set(-1,0,0,0,1,0,0,0,1);function ax(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,zh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),_(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),E=v.envMap,M=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Qh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(n,t,e,i){let s={},a={};function r(v,E){const M=E.program;i.uniformBlockBinding(v,M,s[v.id])}function o(v,E){let M=s[v.id];M===void 0&&(g(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",p));const T=E.program;i.updateUBOMapping(v,T);const w=t.render.frame;a[v.id]!==w&&(c(v),a[v.id]=w)}function l(v){const E=n.createBuffer(),M=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(v){const E=s[v.id],M=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,x=M.length;w<x;w++){const b=M[w];if(Array.isArray(b))for(let U=0,C=b.length;U<C;U++)h(b[U],w,U,T);else h(b,w,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,E,M,T){if(u(v,E,M,T)===!0){const w=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let U=0;U<x.length;U++){const C=x[U],L=_(C,!0);d(C,v.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function d(v,E,M){typeof v=="number"||typeof v=="boolean"?E[M]=v:v.isMatrix3?(E[M]=v.elements[0],E[M+1]=v.elements[1],E[M+2]=v.elements[2],E[M+3]=0,E[M+4]=v.elements[3],E[M+5]=v.elements[4],E[M+6]=v.elements[5],E[M+7]=0,E[M+8]=v.elements[6],E[M+9]=v.elements[7],E[M+10]=v.elements[8],E[M+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-M),M):v.toArray(E,M)}function u(v,E,M,T){const w=v.value,x=E+"_"+M;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);const b=T[x];let U=!1;for(let C=0;C<w.length;C++)f(w[C],b,C)===!0&&(U=!0);return U}return f(w,T,x)}function f(v,E,M){if(E[M]===void 0)return typeof v=="number"||typeof v=="boolean"?E[M]=v:ArrayBuffer.isView(v)?E[M]=v.slice():E[M]=v.clone(),!0;{const T=E[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return E[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){const E=v.uniforms;let M=0;const T=16;for(let x=0,b=E.length;x<b;x++){const U=Array.isArray(E[x])?E[x]:[E[x]];for(let C=0,L=U.length;C<L;C++){const N=U[C],V=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(E[x])||Array.isArray(N.value);let B=M;for(let F=0,it=V.length;F<it;F++){const G=V[F],$=_(G,I),j=M%T,yt=j%$.boundary,Dt=j+yt;M+=yt,Dt!==0&&T-Dt<$.storage&&(M+=T-Dt),F===0&&(B=M),M+=$.storage}const X=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new X((M-B)/Float32Array.BYTES_PER_ELEMENT),N.__offset=B}}const w=M%T;return w>0&&(M+=T-w),v.__size=M,v.__cache={},this}function _(v,E){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){const E=v.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);s={},a={}}return{bind:r,update:o,dispose:m}}const ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function lx(){return Li===null&&(Li=new wh(ox,16,16,In,Bi),Li.name="DFG_LUT",Li.minFilter=si,Li.magFilter=si,Li.wrapS=Ki,Li.wrapT=Ki,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class cx{constructor(t={}){const{canvas:e=Yu(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const _=f,p=new Set([Qo,Jo,Zo]),m=new Set([li,Fi,Vs,ms,Yo,$o]),v=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const x=[],b=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,V=null,I=null,B=null;this._outputColorSpace=ve;let X=0,F=0,it=null,G=-1,$=null;const j=new we,yt=new we;let Dt=null;const q=new Ut(0);let _t=0,wt=e.width,Ot=e.height,vt=1,Ft=null,Me=null;const zt=new we(0,0,wt,Ot),Zt=new we(0,0,wt,Ot);let Qt=!1;const et=new Xs,ht=new tl;let ot=!1,Et=!1;const xt=new ue,Xt=new R,Lt=new we,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function oe(){return it===null?vt:1}let O=i;function Ie(S,D){return e.getContext(S,D)}let Jt,ge,pt,Re,Bt,kt,A,y,k,nt,tt,lt,mt,Z,J,ut,P,Q,Y,dt,rt,ct,It;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const D="webgl2";if(O=Ie(D,S),O===null)throw Ie(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(S){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),re("WebGLRenderer: "+S.message),S}function $t(){Jt=new d0(O),Jt.init(),rt=new jg(O,Jt),ge=new e0(O,Jt,t,rt),pt=new Jg(O,Jt),ge.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),V=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),Re=new m0(O),Bt=new Fg,kt=new Qg(O,Jt,pt,Bt,ge,rt,Re),A=new u0(C),y=new xf(O),ct=new jm(O,y),k=new f0(O,y,Re,ct),nt=new x0(O,k,y,ct,Re),Q=new g0(O,ge,kt),J=new i0(Bt),tt=new Og(C,A,Jt,ge,ct,J),lt=new ax(C,Bt),mt=new zg,Z=new Xg(Jt),P=new Qm(C,A,pt,nt,g,l),ut=new Zg(C,nt,ge),It=new rx(O,Re,ge,pt),Y=new t0(O,Jt,Re),dt=new p0(O,Jt,Re),Re.programs=tt.programs,C.capabilities=ge,C.extensions=Jt,C.properties=Bt,C.renderLists=mt,C.shadowMap=ut,C.state=pt,C.info=Re}_!==li&&(U=new v0(_,e.width,e.height,o,s,a));const st=new nx(C,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(S){S!==void 0&&(vt=S,this.setSize(wt,Ot,!1))},this.getSize=function(S){return S.set(wt,Ot)},this.setSize=function(S,D,W=!0){if(st.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=S,Ot=D,e.width=Math.floor(S*vt),e.height=Math.floor(D*vt),W===!0&&(e.style.width=S+"px",e.style.height=D+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(wt*vt,Ot*vt).floor()},this.setDrawingBufferSize=function(S,D,W){wt=S,Ot=D,vt=W,e.width=Math.floor(S*W),e.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===li){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(zt)},this.setViewport=function(S,D,W,z){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,D,W,z),pt.viewport(j.copy(zt).multiplyScalar(oe()).round())},this.getScissor=function(S){return S.copy(Zt)},this.setScissor=function(S,D,W,z){S.isVector4?Zt.set(S.x,S.y,S.z,S.w):Zt.set(S,D,W,z),pt.scissor(yt.copy(Zt).multiplyScalar(oe()).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){pt.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){Ft=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let z=0;if(S){let H=!1;if(it!==null){const gt=it.texture.format;H=p.has(gt)}if(H){const gt=it.texture.type,At=m.has(gt),ft=P.getClearColor(),bt=P.getClearAlpha(),Pt=ft.r,Wt=ft.g,ie=ft.b;At?(v[0]=Pt,v[1]=Wt,v[2]=ie,v[3]=bt,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Pt,E[1]=Wt,E[2]=ie,E[3]=bt,O.clearBufferiv(O.COLOR,0,E))}else z|=O.COLOR_BUFFER_BIT}D&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),P.dispose(),mt.dispose(),Z.dispose(),kt.dispose(),Bt.dispose(),A.dispose(),nt.dispose(),k.dispose(),ct.dispose(),It.dispose(),tt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ml),st.removeEventListener("sessionend",gl),Mn.stop()};function Nt(S){S.preventDefault(),Ka("WebGLRenderer: Context Lost."),L=!0}function Yt(){Ka("WebGLRenderer: Context Restored."),L=!1;const S=Re.autoReset,D=ut.enabled,W=ut.autoUpdate,z=ut.needsUpdate,H=ut.type;$t(),Re.autoReset=S,ut.enabled=D,ut.autoUpdate=W,ut.needsUpdate=z,ut.type=H}function Mt(S){re("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const D=S.target;D.removeEventListener("dispose",de),Fe(D)}function Fe(S){nn(S),Bt.remove(S)}function nn(S){const D=Bt.get(S).programs;D!==void 0&&(D.forEach(function(W){tt.releaseProgram(W)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,z,H,gt){D===null&&(D=jt);const At=H.isMesh&&H.matrixWorld.determinantAffine()<0,ft=du(S,D,W,z,H);pt.setMaterial(z,At);let bt=W.index,Pt=1;if(z.wireframe===!0){if(bt=k.getWireframeAttribute(W),bt===void 0)return;Pt=2}const Wt=W.drawRange,ie=W.attributes.position;let Rt=Wt.start*Pt,ne=(Wt.start+Wt.count)*Pt;gt!==null&&(Rt=Math.max(Rt,gt.start*Pt),ne=Math.min(ne,(gt.start+gt.count)*Pt)),bt!==null?(Rt=Math.max(Rt,0),ne=Math.min(ne,bt.count)):ie!=null&&(Rt=Math.max(Rt,0),ne=Math.min(ne,ie.count));const De=ne-Rt;if(De<0||De===1/0)return;ct.setup(H,z,ft,W,bt);let ye,xe=Y;if(bt!==null&&(ye=y.get(bt),xe=dt,xe.setIndex(ye)),H.isMesh)z.wireframe===!0?(pt.setLineWidth(z.wireframeLinewidth*oe()),xe.setMode(O.LINES)):xe.setMode(O.TRIANGLES);else if(H.isLine){let We=z.linewidth;We===void 0&&(We=1),pt.setLineWidth(We*oe()),H.isLineSegments?xe.setMode(O.LINES):H.isLineLoop?xe.setMode(O.LINE_LOOP):xe.setMode(O.LINE_STRIP)}else H.isPoints?xe.setMode(O.POINTS):H.isSprite&&xe.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const We=H._multiDrawStarts,Ct=H._multiDrawCounts,Ze=H._multiDrawCount,le=bt?y.get(bt).bytesPerElement:1,Sn=Bt.get(z).currentProgram.getUniforms();for(let Xe=0;Xe<Ze;Xe++)Sn.setValue(O,"_gl_DrawID",Xe),xe.render(We[Xe]/le,Ct[Xe])}else if(H.isInstancedMesh)xe.renderInstances(Rt,De,H.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ct=Math.min(W.instanceCount,We);xe.renderInstances(Rt,De,Ct)}else xe.render(Rt,De)};function pl(S,D,W,z){N!==null&&S.isNodeMaterial&&N.setObject(z,S),ot===!0&&J.setState(S,W,!1),S.transparent===!0&&S.side===me&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,Es(S,D,z),S.side=Ln,S.needsUpdate=!0,Es(S,D,z),S.side=me):Es(S,D,z)}this.compile=function(S,D,W=null){W===null&&(W=S),N!==null&&N.renderStart(S,D,W),w=Z.get(W),w.init(D),b.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Et=this.localClippingEnabled,ot=J.init(this.clippingPlanes,Et),ot===!0&&J.setGlobalState(this.clippingPlanes,D),N!==null&&ut.render(w.state.shadowsArray,W,D);const z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const ft=gt[At];pl(ft,W,D,H),z.add(ft)}else pl(gt,W,D,H),z.add(gt)}),w=b.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(S,D,W=null){const z=this.compile(S,D,W);return new Promise(H=>{function gt(){if(z.forEach(function(At){const bt=Bt.get(At).currentProgram;(bt===void 0||bt.isReady())&&z.delete(At)}),z.size===0){H(S);return}setTimeout(gt,10)}Jt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let or=null;function hu(S){or&&or(S)}function ml(){Mn.stop()}function gl(){Mn.start()}const Mn=new Gh;Mn.setAnimationLoop(hu),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(S){or=S,st.setAnimationLoop(S),S===null?Mn.stop():Mn.start()},st.addEventListener("sessionstart",ml),st.addEventListener("sessionend",gl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(S,D);const W=st.enabled===!0&&st.isPresenting===!0,z=U!==null&&(it===null||W)&&U.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,it),w=Z.get(S,b.length),w.init(D),w.state.textureUnits=kt.getTextureUnits(),b.push(w),xt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ht.setFromArrayCamera(D):et.setFromProjectionMatrix(xt,Ai,D.reversedDepth),Et=this.localClippingEnabled,ot=J.init(this.clippingPlanes,Et),T=mt.get(S,x.length),T.init(),x.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&lr(At,D,-1/0,C.sortObjects)}lr(S,D,0,C.sortObjects),T.finish(),N!==null&&N.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Ft,Me),ee=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ee&&P.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),ot===!0&&J.beginShadows();const H=w.state.shadowsArray;if(ut.render(H,S,D),ot===!0&&J.endShadows(),(z&&U.hasRenderPass())===!1){const At=T.opaque,ft=T.transmissive;if(w.setupLights(),D.isArrayCamera){const bt=D.cameras;if(ft.length>0)for(let Pt=0,Wt=bt.length;Pt<Wt;Pt++){const ie=bt[Pt];_l(At,ft,S,ie)}ee&&P.render(S);for(let Pt=0,Wt=bt.length;Pt<Wt;Pt++){const ie=bt[Pt];xl(T,S,ie,ie.viewport)}}else ft.length>0&&_l(At,ft,S,D),ee&&P.render(S),xl(T,S,D)}it!==null&&F===0&&(kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it)),z&&U.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),ct.resetDefaultState(),G=-1,$=null,b.pop(),b.length>0?(w=b[b.length-1],kt.setTextureUnits(w.state.textureUnits),ot===!0&&J.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,N!==null&&N.renderEnd()};function lr(S,D,W,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){const At=D.isArrayCamera?ht:et;if(!S.frustumCulled||S.intersectsFrustum(At)){z&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);const ft=nt.update(S),bt=S.material;bt.visible&&T.push(S,ft,bt,W,Lt.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){const At=D.isArrayCamera?ht:et;if(!S.frustumCulled||S.intersectsFrustum(At)){const ft=nt.update(S),bt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(xt)),Array.isArray(bt)){const Pt=ft.groups;for(let Wt=0,ie=Pt.length;Wt<ie;Wt++){const Rt=Pt[Wt],ne=bt[Rt.materialIndex];ne&&ne.visible&&T.push(S,ft,ne,W,Lt.z,Rt,D)}}else bt.visible&&T.push(S,ft,bt,W,Lt.z,null,D)}}}const gt=S.children;for(let At=0,ft=gt.length;At<ft;At++)lr(gt[At],D,W,z)}function xl(S,D,W,z){const{opaque:H,transmissive:gt,transparent:At}=S;w.setupLightsView(W),ot===!0&&J.setGlobalState(C.clippingPlanes,W),z&&pt.viewport(j.copy(z)),H.length>0&&ea(H,D,W),gt.length>0&&ea(gt,D,W),At.length>0&&ea(At,D,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function _l(S,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){const Rt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Ni(1,1,{generateMipmaps:!0,type:Rt?Bi:li,minFilter:pn,samples:Math.max(4,ge.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const gt=w.state.transmissionRenderTarget[z.id],At=z.viewport||j;gt.setSize(At.z*C.transmissionResolutionScale,At.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),bt=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(q),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),ee&&P.render(W);const Wt=C.toneMapping;C.toneMapping=Zi;const ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),ot===!0&&J.setGlobalState(C.clippingPlanes,z),ea(S,W,z),kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ne=0,De=D.length;ne<De;ne++){const ye=D[ne],{object:xe,geometry:We,material:Ct,group:Ze}=ye;if(Ct.side===me&&xe.layers.test(z.layers)){const le=Ct.side;Ct.side=je,Ct.needsUpdate=!0,vl(xe,W,z,We,Ct,Ze),Ct.side=le,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt))}C.setRenderTarget(ft,bt,Pt),C.setClearColor(q,_t),ie!==void 0&&(z.viewport=ie),C.toneMapping=Wt}function ea(S,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,gt=S.length;H<gt;H++){const At=S[H],{object:ft,geometry:bt,group:Pt}=At;let Wt=At.material;Wt.allowOverride===!0&&z!==null&&(Wt=z),ft.layers.test(W.layers)&&vl(ft,D,W,bt,Wt,Pt)}}function vl(S,D,W,z,H,gt){N!==null&&H.isNodeMaterial&&N.setObject(S,H),S.onBeforeRender(C,D,W,z,H,gt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,D,W,z,S,gt),H.transparent===!0&&H.side===me&&H.forceSinglePass===!1?(H.side=je,H.needsUpdate=!0,C.renderBufferDirect(W,D,z,H,S,gt),H.side=Ln,H.needsUpdate=!0,C.renderBufferDirect(W,D,z,H,S,gt),H.side=me):C.renderBufferDirect(W,D,z,H,S,gt),S.onAfterRender(C,D,W,z,H,gt)}function yl(S){let D=0;for(const W of S)W.texture!==null&&D++;return D}function Es(S,D,W){D.isScene!==!0&&(D=jt);const z=Bt.get(S),H=w.state.lights,gt=w.state.shadowsArray,At=H.state.version,ft=tt.getParameters(S,H.state,gt,D,W,w.state.lightProbeGridArray),bt=tt.getProgramCacheKey(ft);let Pt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Wt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=A.get(S.envMap||z.environment,Wt),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",de),Pt=new Map,z.programs=Pt,z.programVariants=new Map);let ie=Pt.get(bt);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===At)return Sl(S,ft),ie}else ft.uniforms=tt.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,W,ft),S.onBeforeCompile(ft,C),ie=tt.acquireProgram(ft,bt),Pt.set(bt,ie),z.uniforms=ft.uniforms;const Rt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=J.uniform),Sl(S,ft),z.needsLights=pu(S),z.lightsStateVersion=At,z.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.sunLights.value=H.state.sun,Rt.sunLightShadows.value=H.state.sunShadow,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.sunShadowMatrix.value=H.state.sunShadowMatrix,Rt.sunShadowCascade.value=H.state.sunShadowCascade,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.numLightProbeGrids=yl(w.state.lightProbeGridArray),z.currentProgram=ie,z.uniformsList=null,ie}function uu(S,D,W,z,H){const gt=Bt.get(S),At=gt.currentProgram.id+","+z+","+H;let ft=gt.programVariants.get(At);return ft===void 0?(ft=Es(S,D,W),gt.programVariants.set(At,ft)):(gt.currentProgram=ft,gt.uniformsList=null,gt.outputColorSpace=z,gt.toneMapping=H),ft}function Ml(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Va.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Sl(S,D){const W=Bt.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function du(S,D,W,z,H){D.isScene!==!0&&(D=jt),kt.resetTextureUnits();const gt=D.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ft=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:se.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pt=A.get(z.envMap||At,bt),Wt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Rt=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,De=!!W.morphAttributes.color;let ye=Zi;z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=C.toneMapping);const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,We=xe!==void 0?xe.length:0,Ct=Bt.get(z),Ze=w.state.lights;if(ot===!0&&(Et===!0||S!==$)){const Ee=S===$&&z.id===G;J.setState(z,S,Ee)}let le=!1,Sn=!1;z.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Ze.state.version||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==Pt||z.fog===!0&&Ct.fog!==gt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==J.numPlanes||Ct.numIntersection!==J.numIntersection)||Ct.vertexAlphas!==Wt||Ct.vertexTangents!==ie||Ct.morphTargets!==Rt||Ct.morphNormals!==ne||Ct.morphColors!==De||Ct.morphTargetsCount!==We||Ct.numLightProbeGrids!==yl(w.state.lightProbeGridArray)?le=!0:(Ct.outputColorSpace!==ft||Ct.toneMapping!==ye)&&(Sn=!0):(le=!0,Ct.__version=z.version);let Xe=Ct.currentProgram;(le===!0||Sn===!0)&&(Xe=Sn===!0?uu(z,D,H,ft,ye):Es(z,D,H),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Xe,Ct));let ia=!1,sn=!1,bn=!1;const ae=Xe.getUniforms(),Ge=Ct.uniforms;if(pt.useProgram(Xe.program)&&(ia=!0,sn=!0,bn=!0),z.id!==G&&(G=z.id,sn=!0),ia||$!==S){pt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ae.setValue(O,"projectionMatrix",S.projectionMatrix),ae.setValue(O,"viewMatrix",S.matrixWorldInverse);const Be=ae.map.cameraPosition;Be!==void 0&&Be.setValue(O,Xt.setFromMatrixPosition(S.matrixWorld)),ge.logarithmicDepthBuffer&&ae.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ae.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,sn=!0,bn=!0)}if(Ct.needsLights&&(Ze.state.sunShadowMap.length>0&&ae.setValue(O,"sunShadowMap",Ze.state.sunShadowMap,kt),Ze.state.directionalShadowMap.length>0&&ae.setValue(O,"directionalShadowMap",Ze.state.directionalShadowMap,kt),Ze.state.spotShadowMap.length>0&&ae.setValue(O,"spotShadowMap",Ze.state.spotShadowMap,kt),Ze.state.pointShadowMap.length>0&&ae.setValue(O,"pointShadowMap",Ze.state.pointShadowMap,kt)),H.isSkinnedMesh){ae.setOptional(O,H,"bindMatrix"),ae.setOptional(O,H,"bindMatrixInverse");const Ee=H.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ae.setValue(O,"boneTexture",Ee.boneTexture,kt))}H.isBatchedMesh&&(ae.setOptional(O,H,"batchingTexture"),ae.setValue(O,"batchingTexture",H._matricesTexture,kt),ae.setOptional(O,H,"batchingIdTexture"),ae.setValue(O,"batchingIdTexture",H._indirectTexture,kt),ae.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ae.setValue(O,"batchingColorTexture",H._colorsTexture,kt));const _i=W.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Q.update(H,W,Xe),(sn||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,ae.setValue(O,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ge.envMapIntensity.value=D.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=lx()),sn){if(ae.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&fu(Ge,bn),gt&&z.fog===!0&&lt.refreshFogUniforms(Ge,gt),lt.refreshMaterialUniforms(Ge,z,vt,Ot,w.state.transmissionRenderTarget[S.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){const Ee=M;let Be=0;for(const Hi of w.state.lightProbeGridArray)Hi.texture!==null&&(Ee.textures[Be]=Hi.texture,Ee.min[Be]=Hi.boundingBox.min,Ee.max[Be]=Hi.boundingBox.max,Ee.resolution[Be]=Hi.resolution,Be++);for(const Hi in Ee)Ee[Hi].length=Be;Ge.probesSH.value=Ee.textures,Ge.probesMin.value=Ee.min,Ge.probesMax.value=Ee.max,Ge.probesResolution.value=Ee.resolution}Va.upload(O,Ml(Ct),Ge,kt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Va.upload(O,Ml(Ct),Ge,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ae.setValue(O,"center",H.center),ae.setValue(O,"modelViewMatrix",H.modelViewMatrix),ae.setValue(O,"normalMatrix",H.normalMatrix),ae.setValue(O,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const Ee=z.uniformsGroups;for(let Be=0,Hi=Ee.length;Be<Hi;Be++){const El=Ee[Be];It.update(El,Xe),It.bind(El,Xe)}}return Xe}function fu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,D,W){const z=Bt.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Bt.get(S.texture).__webglTexture=D,Bt.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const W=Bt.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){it=S,X=D,F=W;let z=null,H=!1,gt=!1;if(S){const ft=Bt.get(S);if(ft.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),j.copy(S.viewport),yt.copy(S.scissor),Dt=S.scissorTest,pt.viewport(j),pt.scissor(yt),pt.setScissorTest(Dt),G=-1;return}else if(ft.__webglFramebuffer===void 0)kt.setupRenderTarget(S);else if(ft.__hasExternalTextures)kt.rebindTextures(S,Bt.get(S.texture).__webglTexture,Bt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Wt=S.depthTexture;if(ft.__boundDepthTexture!==Wt){if(Wt!==null&&Bt.has(Wt)&&(S.width!==Wt.image.width||S.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(S)}}const bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);const Pt=Bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?z=Pt[D][W]:z=Pt[D],H=!0):S.samples>0&&kt.useMultisampledRTT(S)===!1?z=Bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[W]:z=Pt,j.copy(S.viewport),yt.copy(S.scissor),Dt=S.scissorTest}else j.copy(zt).multiplyScalar(vt).floor(),yt.copy(Zt).multiplyScalar(vt).floor(),Dt=Qt;if(W!==0&&(z=V),pt.bindFramebuffer(O.FRAMEBUFFER,z)&&pt.drawBuffers(S,z),pt.viewport(j),pt.scissor(yt),pt.setScissorTest(Dt),H){const ft=Bt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,W)}else if(gt){const ft=D;for(let bt=0;bt<S.textures.length;bt++){const Pt=Bt.get(S.textures[bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+bt,Pt.__webglTexture,W,ft)}}else if(S!==null&&W!==0){const ft=Bt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,W)}G=-1};function bl(S){const D=Bt.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=ge.textureFormatReadable(S.format),D.__typeReadable=ge.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,z,H,gt,At,ft=0){if(!(S&&S.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt){pt.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Pt=S.textures[ft],Wt=Pt.format,ie=Pt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const Rt=bl(Pt);if(Rt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H&&O.readPixels(D,W,z,H,rt.convert(Wt),rt.convert(ie),gt)}finally{const Pt=it!==null?Bt.get(it).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,z,H,gt,At,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt)if(D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H){pt.bindFramebuffer(O.FRAMEBUFFER,bt);const Pt=S.textures[ft],Wt=Pt.format,ie=Pt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const Rt=bl(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(D,W,z,H,rt.convert(Wt),rt.convert(ie),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const De=it!==null?Bt.get(it).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,De);const ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $u(O,ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ne),O.deleteSync(ye),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){const z=Math.pow(2,-W),H=Math.floor(S.image.width*z),gt=Math.floor(S.image.height*z),At=D!==null?D.x:0,ft=D!==null?D.y:0;kt.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,At,ft,H,gt),pt.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,z=null,H=0,gt=0){let At,ft,bt,Pt,Wt,ie,Rt,ne,De;const ye=S.isCompressedTexture?S.mipmaps[gt]:S.image;if(W!==null)At=W.max.x-W.min.x,ft=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,Wt=W.min.y,ie=W.isBox3?W.min.z:0;else{const ae=Math.pow(2,-H);At=Math.floor(ye.width*ae),ft=Math.floor(ye.height*ae),S.isDataArrayTexture?bt=ye.depth:S.isData3DTexture?bt=Math.floor(ye.depth*ae):bt=1,Pt=0,Wt=0,ie=0}z!==null?(Rt=z.x,ne=z.y,De=z.z):(Rt=0,ne=0,De=0);const xe=rt.convert(D.format),We=rt.convert(D.type);let Ct;D.isData3DTexture?(kt.setTexture3D(D,0),Ct=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(kt.setTexture2DArray(D,0),Ct=O.TEXTURE_2D_ARRAY):(kt.setTexture2D(D,0),Ct=O.TEXTURE_2D),pt.activeTexture(O.TEXTURE0),pt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),pt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pt.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Ze=pt.getParameter(O.UNPACK_ROW_LENGTH),le=pt.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=pt.getParameter(O.UNPACK_SKIP_PIXELS),Xe=pt.getParameter(O.UNPACK_SKIP_ROWS),ia=pt.getParameter(O.UNPACK_SKIP_IMAGES);pt.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),pt.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,ie);const sn=S.isDataArrayTexture||S.isData3DTexture,bn=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const ae=Bt.get(S),Ge=Bt.get(D),_i=Bt.get(ae.__renderTarget),Ee=Bt.get(Ge.__renderTarget);pt.bindFramebuffer(O.READ_FRAMEBUFFER,_i.__webglFramebuffer),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Be=0;Be<bt;Be++)sn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(S).__webglTexture,H,ie+Be),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(D).__webglTexture,gt,De+Be)),O.blitFramebuffer(Pt,Wt,Pt+At,Wt+ft,Rt,ne,Rt+At,ne+ft,O.DEPTH_BUFFER_BIT,O.NEAREST);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Bt.has(S)){const ae=Bt.get(S),Ge=Bt.get(D);pt.bindFramebuffer(O.READ_FRAMEBUFFER,I),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let _i=0;_i<bt;_i++)sn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ae.__webglTexture,H,ie+_i):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ae.__webglTexture,H),bn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,gt,De+_i):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ge.__webglTexture,gt),H!==0?O.blitFramebuffer(Pt,Wt,Pt+At,Wt+ft,Rt,ne,Rt+At,ne+ft,O.COLOR_BUFFER_BIT,O.NEAREST):bn?O.copyTexSubImage3D(Ct,gt,Rt,ne,De+_i,Pt,Wt,At,ft):O.copyTexSubImage2D(Ct,gt,Rt,ne,Pt,Wt,At,ft);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bn?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Ct,gt,Rt,ne,De,At,ft,bt,xe,We,ye.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,gt,Rt,ne,De,At,ft,bt,xe,ye.data):O.texSubImage3D(Ct,gt,Rt,ne,De,At,ft,bt,xe,We,ye):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,Rt,ne,At,ft,xe,We,ye.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,Rt,ne,ye.width,ye.height,xe,ye.data):O.texSubImage2D(O.TEXTURE_2D,gt,Rt,ne,At,ft,xe,We,ye);pt.pixelStorei(O.UNPACK_ROW_LENGTH,Ze),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),pt.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,ia),gt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Ct),pt.unbindTexture()},this.initRenderTarget=function(S){Bt.get(S).__webglFramebuffer===void 0&&kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){X=0,F=0,it=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Ei=Math.PI*2,qt=(n,t,e)=>n<t?t:n>e?e:n,gn=(n,t,e)=>n+(t-n)*e,hx=(n,t,e)=>qt((e-n)/(t-n),0,1),us=(n,t,e)=>{const i=hx(n,t,e);return i*i*(3-2*i)},he=(n,t,e,i)=>gn(n,t,1-Math.exp(-e*i)),Oc=(n,t,e,i)=>{let s=((t-n+Math.PI)%Ei+Ei)%Ei-Math.PI;return n+s*(1-Math.exp(-e*i))},ui=(n,t,e,i)=>Math.hypot(n-e,t-i);function ei(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Da(n,t,e=0){let i=n*374761393+t*668265263+e*1442695041;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296}function ux(n,t,e=0){const i=Math.floor(n),s=Math.floor(t),a=n-i,r=t-s,o=a*a*(3-2*a),l=r*r*(3-2*r),c=Da(i,s,e),h=Da(i+1,s,e),d=Da(i,s+1,e),u=Da(i+1,s+1,e);return gn(gn(c,h,o),gn(d,u,o),l)}function Ho(n,t,e=4,i=0,s=2.03,a=.5){let r=.5,o=1,l=0,c=0;for(let h=0;h<e;h++)l+=ux(n*o,t*o,i+h*101)*r,c+=r,r*=a,o*=s;return l/c}function Gr(n,t,e){return t+(e-t)*n()}function Qi(n,t,e){return Math.floor(t+(e-t+1)*n())}function gi(n,t){return t[Math.floor(n()*t.length)%t.length]}function jh(n){const t=Math.max(0,Math.ceil(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Ci(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function tu(n,t,e,i=1/0){let s=0,a=i;for(const r of["x","y","z"]){const o=n[r],l=t[r],c=e.min[r],h=e.max[r];if(Math.abs(l)<1e-8){if(o<c||o>h)return null}else{let d=(c-o)/l,u=(h-o)/l;if(d>u){const f=d;d=u,u=f}if(d>s&&(s=d),u<a&&(a=u),s>a)return null}}return s}function dx(n,t,e,i,s,a,r,o=0){const l=i-n,c=s-t,h=a-e,d=Math.hypot(l,c,h);if(d<1e-6)return!1;const u={x:l/d,y:c/d,z:h/d},f={x:n,y:t,z:e};for(const g of r){if(!g.solid)continue;const _=o?{min:{x:g.min.x-o,y:g.min.y-o,z:g.min.z-o},max:{x:g.max.x+o,y:g.max.y+o,z:g.max.z+o}}:g,p=tu(f,u,_,d);if(p!==null&&p<d-.05)return!0}return!1}function Fc(n,t,e,i){const s=n.x-e.x,a=n.y-e.y,r=n.z-e.z,o=s*t.x+a*t.y+r*t.z,l=s*s+a*a+r*r-i*i,c=o*o-l;if(c<0)return null;const h=-o-Math.sqrt(c);return h>=0?h:-o+Math.sqrt(c)>=0?0:null}const Go=["NOVA-07","EMBER","KESTREL","RONIN","VANTA","SABLE","CIPHER","ORION","HALO","JACKAL","MIRAGE","TALON","ZEPHYR","ONYX","RIFT","SPECTRE","AURORA","BLAZE","CINDER","DUSK","ECHO","FLINT","GHOST","HAVOC","ION","JINX","KARMA","LYNX","MACE","NEXUS","OMEN","PULSE","QUAKE","RAVEN","STORM","TRACE","UMBRA","VICE","WRAITH","ZERO","ATLAS","BOLT","CRIMSON","DELTA","FROST","GALE","HEX","INFERNO"],ol="battle-world-elite-survival-v1",xn=[{id:"standard",name:"STANDARD ISSUE",level:1,primary:"#2f6f8f",secondary:"#152430",accent:"#ff8a2b",hair:"#22201f",skin:"#c98f6a",rarity:"STANDARD"},{id:"ash",name:"ASH RUNNER",level:2,primary:"#3b3f43",secondary:"#16181b",accent:"#ff7a1a",hair:"#151515",skin:"#b57d5b",rarity:"COMMON"},{id:"verdant",name:"VERDANT GHOST",level:4,primary:"#3d5c3a",secondary:"#1c2a1b",accent:"#a9d66b",hair:"#3b2b1d",skin:"#d0a078",rarity:"RARE"},{id:"arctic",name:"ARCTIC SIGNAL",level:6,primary:"#c7dbe3",secondary:"#3b5361",accent:"#63dcff",hair:"#d9d4c7",skin:"#d8ac89",rarity:"RARE"},{id:"crimson",name:"CRIMSON VECTOR",level:9,primary:"#7c2429",secondary:"#241012",accent:"#ff5a5a",hair:"#1b1111",skin:"#b97f5e",rarity:"EPIC"},{id:"gilded",name:"GILDED WARDEN",level:12,primary:"#9c7427",secondary:"#2b2113",accent:"#ffd166",hair:"#201b14",skin:"#c58f69",rarity:"EPIC"},{id:"void",name:"VOID PROTOCOL",level:16,primary:"#46356e",secondary:"#191226",accent:"#b78bff",hair:"#e4e0f5",skin:"#a8795f",rarity:"LEGENDARY"},{id:"aurora",name:"AURORA ELITE",level:20,primary:"#1f6f7a",secondary:"#102a33",accent:"#ff7ad9",hair:"#5de0ff",skin:"#d3a17e",rarity:"MYTHIC"}],fx=[{id:"short",name:"SHORT"},{id:"mohawk",name:"MOHAWK"},{id:"bun",name:"BUN"},{id:"long",name:"LONG"},{id:"bald",name:"SHAVED"},{id:"helmet",name:"HELMET"}],px=["#2f6f8f","#3b3f43","#3d5c3a","#c7dbe3","#7c2429","#9c7427","#46356e","#1f6f7a","#d7d2c4","#b5452d"],Bc=[{min:1,name:"ROOKIE"},{min:3,name:"SCOUT"},{min:6,name:"OPERATIVE"},{min:10,name:"VETERAN"},{min:15,name:"ELITE"},{min:21,name:"COMMANDER"},{min:30,name:"LEGEND"}];function Vr(n){let t=Bc[0];for(const e of Bc)n>=e.min&&(t=e);return t.name}function ls(n){return 100+(n-1)*80}const mx={quality:"high",renderScale:100,shadows:!0,motionBlur:!1,sensitivity:100,buttonScale:100,autoSprint:!1,aimAssist:!0,volume:80,sfx:100,zoneAudio:!0,matchSize:25,botSkill:"veteran",showFps:!0,touchLayout:{}};function eu(){return{version:1,name:"NOVA-07",level:1,xp:0,xpTotal:0,matches:0,wins:0,kills:0,deaths:0,damage:0,bestPlace:null,timePlayed:0,outfit:{skin:"standard",primary:"#2f6f8f",hair:"short",hairColor:"#22201f"},unlockedSkins:["standard"],settings:{...mx},createdAt:Date.now()}}function gx(){let n=null;try{n=JSON.parse(localStorage.getItem(ol)||"null")}catch{n=null}const t=eu();if(!n||typeof n!="object")return t;const e={...t,...n,outfit:{...t.outfit,...n.outfit||{}},settings:{...t.settings,...n.settings||{}},unlockedSkins:Array.isArray(n.unlockedSkins)?n.unlockedSkins:t.unlockedSkins};for(const i of xn)e.level>=i.level&&!e.unlockedSkins.includes(i.id)&&e.unlockedSkins.push(i.id);return e}function hn(n){try{localStorage.setItem(ol,JSON.stringify(n))}catch{}}function xx(){try{localStorage.removeItem(ol)}catch{}return eu()}function _x(n,t){n.xp+=t,n.xpTotal+=t;const e=[];let i=0;for(;n.xp>=ls(n.level);){n.xp-=ls(n.level),n.level++,i++;for(const s of xn)n.level>=s.level&&!n.unlockedSkins.includes(s.id)&&(n.unlockedSkins.push(s.id),e.push(s))}return{levels:i,unlocked:e}}function vx(n,{placement:t,kills:e,damage:i,victory:s,time:a}){n.matches++,n.kills+=e,n.damage+=i,n.deaths+=s?0:1,n.timePlayed+=a,s&&n.wins++,(!n.bestPlace||t<n.bestPlace)&&(n.bestPlace=t);const r=s?0:Math.max(0,30-t)*8,o=Math.round(70+e*45+i*.32+(s?520:0)+r),l=_x(n,o);return hn(n),{xp:o,...l}}function yx(n){return xn.find(t=>t.id===n)||xn[0]}function ds(n){const t=yx(n.outfit.skin);return{...t,primary:n.outfit.primary||t.primary,hair:n.outfit.hair||"short",hairColor:n.outfit.hairColor||t.hair,skinColor:t.skin}}class Mx{constructor(t){this.profile=t,this.ctx=null,this.master=null,this.sfx=null,this.ambient=null,this.ambientGain=null,this.stepTimer=0,this.lastShot=0,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.master.gain.value=qt((this.profile?.settings?.volume??80)/100,0,1),this.sfx.gain.value=qt((this.profile?.settings?.sfx??100)/100,0,1),this.sfx.connect(this.master),this.master.connect(this.ctx.destination),this.noise=this._makeNoise(2),this._startAmbient(),this.ctx.state==="suspended"&&this.ctx.resume())}setVolumes(t,e){this.master&&(this.master.gain.value=qt(t/100,0,1)),this.sfx&&(this.sfx.gain.value=qt(e/100,0,1))}_makeNoise(t=1){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let a=0;a<e;a++)s[a]=Math.random()*2-1;return i}_startAmbient(){if(!this.ctx||this.ambient)return;const t=this.ctx.createBufferSource();t.buffer=this.noise,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380,e.Q.value=.6;const i=this.ctx.createGain();i.gain.value=.018,t.connect(e).connect(i).connect(this.master),t.start(),this.ambient=t,this.ambientGain=i}setAmbient(t){if(!this.ambientGain)return;const e=this.ctx.currentTime;this.ambientGain.gain.cancelScheduledValues(e),this.ambientGain.gain.linearRampToValueAtTime(t?.018:.004,e+.6)}_noiseBurst({duration:t=.15,gain:e=.2,freq:i=1200,q:s=1,type:a="lowpass",delay:r=0,rate:o=1}){if(!this.ctx)return;const l=this.ctx.currentTime+r,c=this.ctx.createBufferSource();c.buffer=this.noise,c.playbackRate.value=o;const h=this.ctx.createBiquadFilter();h.type=a,h.frequency.setValueAtTime(i,l),h.frequency.exponentialRampToValueAtTime(Math.max(80,i*.3),l+t),h.Q.value=s;const d=this.ctx.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(8e-4,l+t),c.connect(h).connect(d).connect(this.sfx),c.start(l,Math.random()*1.5),c.stop(l+t+.02)}_tone({freq:t=440,end:e=80,duration:i=.2,gain:s=.15,type:a="sine",delay:r=0}){if(!this.ctx)return;const o=this.ctx.currentTime+r,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=a,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+i),c.gain.setValueAtTime(s,o),c.gain.exponentialRampToValueAtTime(8e-4,o+i),l.connect(c).connect(this.sfx),l.start(o),l.stop(o+i+.02)}ui(){this._tone({freq:620,end:900,duration:.05,gain:.05,type:"square"})}gunshot(t="ar",e=1){if(!this.ctx)return;const i=performance.now();if(i-this.lastShot<24)return;this.lastShot=i;const s=qt(e,.08,1);t==="sniper"?(this._noiseBurst({duration:.45,gain:.42*s,freq:2600,q:.7}),this._tone({freq:140,end:38,duration:.38,gain:.35*s,type:"sine"}),this._noiseBurst({duration:.7,gain:.08*s,freq:700,q:.4,delay:.05})):t==="shotgun"?(this._noiseBurst({duration:.34,gain:.38*s,freq:1500,q:.5}),this._tone({freq:110,end:34,duration:.3,gain:.28*s})):t==="smg"?(this._noiseBurst({duration:.1,gain:.16*s,freq:2200,q:.8}),this._tone({freq:190,end:70,duration:.07,gain:.1*s,type:"square"})):t==="pistol"?(this._noiseBurst({duration:.14,gain:.2*s,freq:1900,q:.8}),this._tone({freq:210,end:60,duration:.1,gain:.13*s})):t==="lmg"?(this._noiseBurst({duration:.16,gain:.24*s,freq:1500,q:.6}),this._tone({freq:120,end:45,duration:.14,gain:.18*s})):(this._noiseBurst({duration:.18,gain:.26*s,freq:1900,q:.7}),this._tone({freq:150,end:48,duration:.13,gain:.15*s}))}dryFire(){this._tone({freq:300,end:120,duration:.04,gain:.07,type:"square"})}reload(){this._tone({freq:420,end:260,duration:.05,gain:.07,type:"square"}),this._tone({freq:240,end:180,duration:.05,gain:.06,type:"square",delay:.16}),this._tone({freq:520,end:300,duration:.06,gain:.08,type:"square",delay:.42})}hit(t=!1){t?(this._tone({freq:1500,end:900,duration:.12,gain:.14,type:"triangle"}),this._tone({freq:2200,end:1400,duration:.1,gain:.08,type:"sine",delay:.03})):this._tone({freq:780,end:500,duration:.07,gain:.1,type:"triangle"})}kill(){this._tone({freq:880,end:1320,duration:.12,gain:.12,type:"triangle"}),this._tone({freq:1320,end:1760,duration:.14,gain:.1,type:"triangle",delay:.09})}damage(){this._noiseBurst({duration:.22,gain:.18,freq:500,q:.4}),this._tone({freq:90,end:45,duration:.25,gain:.2})}explosion(){this._noiseBurst({duration:.9,gain:.5,freq:900,q:.3}),this._tone({freq:75,end:24,duration:.7,gain:.45}),this._noiseBurst({duration:1.2,gain:.12,freq:300,q:.4,delay:.08})}pickup(t="common"){const e=t==="legendary"?660:t==="epic"?560:t==="rare"?500:430;this._tone({freq:e,end:e*1.35,duration:.07,gain:.08,type:"triangle"}),this._tone({freq:e*1.35,end:e*1.7,duration:.09,gain:.06,type:"triangle",delay:.05})}heal(){this._tone({freq:300,end:700,duration:.35,gain:.07,type:"sine"}),this._tone({freq:450,end:900,duration:.4,gain:.05,type:"sine",delay:.12})}footstep(t="grass"){const e=performance.now();if(e-this.stepTimer<260)return;this.stepTimer=e;const i=t==="metal"?900:t==="water"?500:320;this._noiseBurst({duration:.055,gain:.035,freq:i,q:.8})}throwGrenade(){this._noiseBurst({duration:.12,gain:.08,freq:700,q:.6})}zoneWarning(){this._tone({freq:420,end:420,duration:.18,gain:.07,type:"square"}),this._tone({freq:520,end:520,duration:.18,gain:.06,type:"square",delay:.24})}victory(){[523,659,784,1046,1318].forEach((e,i)=>this._tone({freq:e,end:e*1.01,duration:.5,gain:.11,type:"triangle",delay:i*.12}))}defeat(){[392,330,262,196].forEach((e,i)=>this._tone({freq:e,end:e*.98,duration:.55,gain:.09,type:"sine",delay:i*.16}))}levelUp(){[660,880,1100,1320].forEach((e,i)=>this._tone({freq:e,end:e,duration:.22,gain:.09,type:"triangle",delay:i*.09}))}}const zc={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"sprint",ShiftRight:"sprint"},kc={Space:"jump",KeyC:"crouch",ControlLeft:"crouch",KeyR:"reload",KeyE:"interact",KeyF:"interact",KeyQ:"swap",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",KeyG:"grenade",KeyH:"med",Tab:"inventory",KeyM:"map",Escape:"pause",KeyV:"vehicle"};class Sx{constructor(t,e){this.canvas=t,this.profile=e,this.keys=new Set,this.down=new Set,this.pressed=new Set,this.released=new Set,this.look={x:0,y:0},this.move={x:0,y:0},this.joystick={x:0,y:0},this.joystickPointer=null,this.lookPointer=null,this.lastLook={x:0,y:0},this.touchMode=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<900,this.blocked=!1,this.playing=!1,this.pointerLocked=!1,this.enabled=!0,this._bind(),this.applyLayout(e?.settings?.touchLayout||{})}get sensitivity(){return qt((this.profile?.settings?.sensitivity??100)/100,.2,2)}_bind(){window.addEventListener("keydown",e=>{if((e.code==="Tab"||e.code==="Space")&&e.preventDefault(),this.blocked&&e.code!=="Escape")return;const i=zc[e.code];if(i){this.keys.add(i),this._updateMove();return}const s=kc[e.code];if(s){if(e.repeat)return;this.press(s),s==="pause"&&e.preventDefault()}e.code==="KeyP"&&this.press("pause")},{passive:!1}),window.addEventListener("keyup",e=>{const i=zc[e.code];i&&(this.keys.delete(i),this._updateMove());const s=kc[e.code];s&&this.release(s)}),window.addEventListener("blur",()=>{this.keys.clear(),this.down.clear(),this._updateMove(),this._resetJoystick()}),this.canvas.addEventListener("mousedown",e=>{this.touchMode||!this.playing||this.blocked||(e.button===0&&this.press("fire"),e.button===2&&this.press("aim"),document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.())}),window.addEventListener("mouseup",e=>{e.button===0&&this.release("fire"),e.button===2&&this.release("aim")}),document.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&this.playing&&!this.blocked&&(this.look.x+=e.movementX*.0024*this.sensitivity,this.look.y+=e.movementY*.0024*this.sensitivity)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),this.canvas.addEventListener("wheel",e=>{!this.playing||this.blocked||(this.press("swap"),e.preventDefault())},{passive:!1}),this.canvas.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&!this.touchMode||!this.playing||this.blocked||this.lookPointer===null&&(this.lookPointer=e.pointerId,this.lastLook.x=e.clientX,this.lastLook.y=e.clientY,this.canvas.setPointerCapture?.(e.pointerId))}),this.canvas.addEventListener("pointermove",e=>{if(e.pointerId!==this.lookPointer)return;const i=e.clientX-this.lastLook.x,s=e.clientY-this.lastLook.y;this.lastLook.x=e.clientX,this.lastLook.y=e.clientY,this.look.x+=i*.0042*this.sensitivity,this.look.y+=s*.0042*this.sensitivity});const t=e=>{if(e.pointerId===this.lookPointer){this.lookPointer=null;try{this.canvas.releasePointerCapture?.(e.pointerId)}catch{}}};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t),this.canvas.addEventListener("lostpointercapture",t),this._bindJoystick(),this._bindTouchButtons()}_bindJoystick(){if(this.joystickEl=document.getElementById("joystick"),this.joystickKnob=document.getElementById("joystick-knob"),!this.joystickEl)return;const t=i=>{if(i.pointerId!==this.joystickPointer)return;const s=this.joystickEl.getBoundingClientRect(),a=s.left+s.width/2,r=s.top+s.height/2,o=s.width*.34;let l=i.clientX-a,c=i.clientY-r;const h=Math.hypot(l,c);h>o&&(l=l/h*o,c=c/h*o);const d=l/o,u=c/o,f=.12,g=Math.hypot(d,u);if(g<f)this.joystick.x=0,this.joystick.y=0;else{const _=(g-f)/(1-f)/g;this.joystick.x=d*_,this.joystick.y=u*_}this.joystickKnob&&(this.joystickKnob.style.transform=`translate(calc(-50% + ${l}px), calc(-50% + ${c}px))`),this._updateMove()};this.joystickEl.addEventListener("pointerdown",i=>{!this.playing||this.blocked||(this.joystickPointer=i.pointerId,this.joystickEl.setPointerCapture?.(i.pointerId),t(i),i.preventDefault())});const e=i=>{i.pointerId===this.joystickPointer&&this._resetJoystick()};this.joystickEl.addEventListener("pointermove",t),this.joystickEl.addEventListener("pointerup",e),this.joystickEl.addEventListener("pointercancel",e),this.joystickEl.addEventListener("lostpointercapture",e)}_resetJoystick(){this.joystickPointer=null,this.joystick.x=0,this.joystick.y=0,this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)"),this._updateMove()}_bindTouchButtons(){this.buttons=[...document.querySelectorAll("#touch-controls [data-action]")].filter(t=>t.dataset.action!=="joystick");for(const t of this.buttons){const e=t.dataset.action;t.addEventListener("pointerdown",s=>{!this.playing||this.blocked||(t.setPointerCapture?.(s.pointerId),t.classList.add("active"),this.press(e),s.preventDefault(),s.stopPropagation())});const i=s=>{t.classList.remove("active"),this.release(e);try{t.releasePointerCapture?.(s.pointerId)}catch{}};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i)}}_updateMove(){let t=0,e=0;this.keys.has("right")&&(t+=1),this.keys.has("left")&&(t-=1),this.keys.has("back")&&(e+=1),this.keys.has("forward")&&(e-=1);const i=Math.hypot(t,e);i>1&&(t/=i,e/=i);const s=this.joystick.x,a=this.joystick.y;t=qt(t+s,-1,1),e=qt(e+a,-1,1);const r=Math.hypot(t,e);r>1&&(t/=r,e/=r),this.move.x=t,this.move.y=e}press(t){t&&(this.down.has(t)||this.pressed.add(t),this.down.add(t))}release(t){t&&(this.down.delete(t),this.released.add(t))}isDown(t){return this.down.has(t)||this.keys.has(t)}wasPressed(t){return this.pressed.has(t)}wasReleased(t){return this.released.has(t)}consumeLook(){const t={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,t}setBlocked(t){this.blocked=t,t&&(this.down.clear(),this.keys.clear(),this._updateMove(),document.pointerLockElement&&document.exitPointerLock?.())}setPlaying(t){this.playing=t,t||(this.down.clear(),this.keys.clear(),this._resetJoystick(),document.pointerLockElement&&document.exitPointerLock?.())}endFrame(){this.pressed.clear(),this.released.clear()}getButtonElements(){return[...document.querySelectorAll("#touch-controls [data-action]")].map(e=>({el:e,action:e.dataset.action}))}captureLayout(){const t={},e=window.innerWidth,i=window.innerHeight;for(const{el:s,action:a}of this.getButtonElements()){const r=s.getBoundingClientRect();r.width&&(t[a]={x:+((r.left+r.width/2)/e*100).toFixed(2),y:+((r.top+r.height/2)/i*100).toFixed(2)})}return t}applyLayout(t){if(t)for(const{el:e,action:i}of this.getButtonElements()){const s=t[i];if(!s){e.style.left="",e.style.top="",e.style.right="",e.style.bottom="";continue}e.style.left=s.x+"%",e.style.top=s.y+"%",e.style.right="auto",e.style.bottom="auto",e.style.transform="translate(-50%, -50%)"}}applyButtonScale(t){const e=qt(t/100,.6,1.5);document.documentElement.style.setProperty("--btn-scale",e);const i=document.getElementById("touch-controls");i&&(i.style.zoom=e===1?"":String(e))}}const Ui=0,oi=1500,hi=oi/2,iu=622,ni=[{id:"city",name:"NEON CITY",x:-300,z:-245,r:112,h:13,type:"city",map:"#63dcff",label:"URBAN"},{id:"base",name:"IRONHOLD BASE",x:275,z:-292,r:100,h:11,type:"military",map:"#ff8a2b",label:"MILITARY"},{id:"airport",name:"KESTREL AIRPORT",x:342,z:238,r:128,h:8,type:"airport",map:"#ffd166",label:"AIRFIELD"},{id:"harbor",name:"DOCKSIDE HARBOR",x:-395,z:300,r:96,h:4.5,type:"harbor",map:"#54e6a5",label:"HARBOR"},{id:"village",name:"OLD MILL VILLAGE",x:0,z:92,r:86,h:16,type:"village",map:"#e8c79a",label:"VILLAGE"},{id:"foundry",name:"FOUNDRY WORKS",x:138,z:-42,r:90,h:12,type:"industrial",map:"#ff7a1a",label:"INDUSTRIAL"},{id:"bunker",name:"BUNKER 7",x:-82,z:-468,r:56,h:27,type:"bunker",map:"#b78bff",label:"BUNKER"},{id:"ridge",name:"WATCHTOWER RIDGE",x:72,z:-390,r:42,h:34,type:"ridge",map:"#9fdcff",label:"RIDGE"},{id:"beach",name:"SUNSET BEACH",x:432,z:450,r:62,h:3,type:"beach",map:"#ffd9a0",label:"BEACH"},{id:"lake",name:"MIRROR LAKE",x:-122,z:246,r:56,h:8,type:"lake",map:"#63dcff",label:"LAKE"},{id:"aurora",name:"MOUNT AURORA",x:18,z:408,r:86,h:66,type:"mountain",map:"#eaf6ff",label:"MOUNTAIN"}];new Map(ni.map(n=>[n.id,n]));function Le(n,t,e=1337){const i=Math.hypot(n,t),s=us(705,545,i),a=Ho(n*.0032+11.3,t*.0032-7.1,4,e),r=Ho(n*.0125,t*.0125,3,e+17);let o=(3.2+a*29+r*6.5)*s-8.5*(1-s);o+=54*Math.exp(-((n-18)**2+(t-408)**2)/23328),o+=17*Math.exp(-((n+382)**2+(t+82)**2)/21632),o+=11*Math.exp(-((n+52)**2+(t-44)**2)/(336*168)),o+=9*Math.exp(-((n-72)**2+(t+390)**2)/12800);const l=Math.hypot(n+122,t-246);o-=15*us(84,22,l);for(const c of ni){if(c.type==="mountain"||c.type==="lake")continue;const h=Math.hypot(n-c.x,t-c.z);if(h<c.r+55){const d=us(c.r+52,c.r,h);o=gn(o,c.h,d)}}return o}function vs(n,t,e=1337){return Le(n,t,e)<Ui-.15}function nu(n){const t=new R(.44,.58,.32).normalize(),e=new Ss(2700,36,20),i=new zi({side:je,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:t},zenith:{value:new Ut(2846623)},horizon:{value:new Ut(13097952)},sunColor:{value:new Ut(16767392)}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vWorld;
      uniform vec3 sunDir;
      uniform vec3 zenith;
      uniform vec3 horizon;
      uniform vec3 sunColor;
      void main() {
        vec3 dir = normalize(vWorld);
        float y = clamp(dir.y, 0.0, 1.0);
        vec3 col = mix(horizon, zenith, pow(y, 0.52));
        float sun = max(dot(dir, sunDir), 0.0);
        col += sunColor * pow(sun, 96.0) * 1.4;
        col += sunColor * pow(sun, 7.0) * 0.16;
        float haze = exp(-max(dir.y, 0.0) * 5.5);
        col = mix(col, horizon * 1.04, haze * 0.45);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),s=new Tt(e,i);s.frustumCulled=!1,n.add(s);const a=Ci(256,256),r=a.getContext("2d"),o=r.createRadialGradient(128,128,4,128,128,120);o.addColorStop(0,"rgba(255,252,235,1)"),o.addColorStop(.12,"rgba(255,228,170,.95)"),o.addColorStop(.38,"rgba(255,180,90,.28)"),o.addColorStop(1,"rgba(255,150,60,0)"),r.fillStyle=o,r.fillRect(0,0,256,256);const l=new ti(a);l.colorSpace=ve;const c=new Ti(new pi({map:l,transparent:!0,depthWrite:!1,blending:di,fog:!1}));c.position.copy(t.clone().multiplyScalar(2200)),c.scale.set(430,430,1),n.add(c);const h=[],d=Ci(512,256),u=d.getContext("2d");for(let m=0;m<22;m++){const v=60+Math.random()*392,E=90+Math.random()*90,M=30+Math.random()*72,T=u.createRadialGradient(v,E,0,v,E,M);T.addColorStop(0,"rgba(255,255,255,.8)"),T.addColorStop(.55,"rgba(244,250,255,.42)"),T.addColorStop(1,"rgba(230,244,255,0)"),u.fillStyle=T,u.beginPath(),u.arc(v,E,M,0,Math.PI*2),u.fill()}const f=new ti(d);f.colorSpace=ve;for(let m=0;m<9;m++){const v=new pi({map:f,transparent:!0,opacity:.5+Math.random()*.22,depthWrite:!1,fog:!1,color:15267071}),E=new Ti(v),M=m/9*Math.PI*2+Math.random()*.5,T=700+Math.random()*1100;E.position.set(Math.cos(M)*T,220+Math.random()*170,Math.sin(M)*T),E.scale.set(430+Math.random()*380,150+Math.random()*130,1),E.userData.speed=.7+Math.random()*.9,n.add(E),h.push(E)}const g=new cf(13626111,6248260,1.25);n.add(g);const _=new ff(16769206,2.35);_.position.copy(t.clone().multiplyScalar(360)),_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.camera.left=-210,_.shadow.camera.right=210,_.shadow.camera.top=210,_.shadow.camera.bottom=-210,_.shadow.camera.near=10,_.shadow.camera.far=800,_.shadow.bias=-6e-4,_.shadow.normalBias=.04,n.add(_),n.add(_.target);const p=new pf(9418442,.28);return n.add(p),n.fog=new Qs(12112602,520,1560),{sky:s,sun:_,sunDir:t,clouds:h,hemi:g,ambient:p,sunSprite:c}}function bx(n,t=1337){const i=new xi(oi,oi,220,220);i.rotateX(-Math.PI/2);const s=i.attributes.position,a=new Float32Array(s.count*3),r=new Ut,o=new Ut(13154189),l=new Ut(10457712),c=new Ut(6521674),h=new Ut(4415288),d=new Ut(7828586),u=new Ut(5592142),f=new Ut(15002863);for(let T=0;T<s.count;T++){const w=s.getX(T),x=s.getZ(T),b=Le(w,x,t);s.setY(T,b);const U=Le(w+2.5,x,t)-Le(w-2.5,x,t),C=Le(w,x+2.5,t)-Le(w,x-2.5,t),L=Math.min(1,Math.hypot(U,C)/4.6),N=Ho(w*.06,x*.06,2,t+31);b<.6?r.copy(l).lerp(o,qt((b+4)/5,0,1)):b<3.6?r.copy(o).lerp(c,us(2,3.8,b)*.55):b<34?r.copy(c).lerp(h,N*.55):b<48?r.copy(c).lerp(d,us(34,48,b)):b<62?r.copy(d).lerp(u,N*.5):r.copy(d).lerp(f,us(62,72,b)),L>.5&&r.lerp(d,(L-.5)*1.1),r.offsetHSL(0,0,(N-.5)*.07),a[T*3]=r.r,a[T*3+1]=r.g,a[T*3+2]=r.b}i.setAttribute("color",new Ri(a,3)),i.computeVertexNormals();const g=Ci(256,256),_=g.getContext("2d"),p=_.createImageData(256,256),m=ei(t+99);for(let T=0;T<p.data.length;T+=4){const w=205+m()*50;p.data[T]=w,p.data[T+1]=w,p.data[T+2]=w,p.data[T+3]=255}_.putImageData(p,0,0);const v=new ti(g);v.wrapS=v.wrapT=Oi,v.repeat.set(160,160),v.anisotropy=8;const E=new Gt({vertexColors:!0,map:v,roughness:.97,metalness:0}),M=new Tt(i,E);return M.receiveShadow=!0,M.castShadow=!1,n.add(M),{mesh:M,geo:i,detail:v}}function su(n){const t=new xi(4300,4300,170,170);t.rotateX(-Math.PI/2);const e=new zi({transparent:!0,depthWrite:!0,uniforms:{uTime:{value:0},uDeep:{value:new Ut(805473)},uShallow:{value:new Ut(2794168)},uSky:{value:new Ut(12112602)},uSun:{value:new R(.44,.58,.32).normalize()}},vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying vec2 vUv;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.045 + uTime * 0.9) * 0.28;
        float w2 = cos(p.z * 0.061 - uTime * 1.15) * 0.22;
        float w3 = sin((p.x + p.z) * 0.021 + uTime * 0.55) * 0.3;
        p.y += w1 + w2 + w3;
        vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
        float dx = cos(p.x * 0.045 + uTime * 0.9) * 0.045 * 0.28 + cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.021 * 0.3;
        float dz = -sin(p.z * 0.061 - uTime * 1.15) * 0.061 * 0.22 + cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.021 * 0.3;
        vNormalW = normalize(vec3(-dx, 1.0, -dz));
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying vec2 vUv;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 n = normalize(vNormalW);
        float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 2.4);
        float ripple = sin(vWorld.x * 0.15 + uTime * 1.8) * sin(vWorld.z * 0.13 - uTime * 1.4) * 0.5 + 0.5;
        vec3 col = mix(uDeep, uShallow, 0.28 + fres * 0.55 + ripple * 0.1);
        col = mix(col, uSky, fres * 0.45);
        vec3 h = normalize(viewDir + uSun);
        float spec = pow(max(dot(n, h), 0.0), 110.0);
        col += vec3(1.0, 0.86, 0.62) * spec * 1.2;
        float glint = pow(max(dot(n, uSun), 0.0), 20.0) * 0.15;
        col += vec3(1.0, 0.8, 0.5) * glint;
        gl_FragColor = vec4(col, 0.93);
      }
    `}),i=new Tt(t,e);return i.position.y=Ui,i.receiveShadow=!1,i.renderOrder=1,n.add(i),{mesh:i,mat:e}}function Ex(n=5,t="#30363b"){const e=Ci(256,256),i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);const s=ei(n);for(let r=0;r<2400;r++){const o=Math.floor(35+s()*45);i.fillStyle=`rgba(${o},${o+2},${o+3},${.08+s()*.2})`,i.fillRect(s()*256,s()*256,1+s()*2,1+s()*2)}for(let r=0;r<8;r++){i.strokeStyle=`rgba(15,18,20,${.1+s()*.2})`,i.lineWidth=1,i.beginPath();let o=s()*256,l=s()*256;i.moveTo(o,l);for(let c=0;c<4;c++)o+=(s()-.5)*40,l+=(s()-.5)*40,i.lineTo(o,l);i.stroke()}const a=new ti(e);return a.colorSpace=ve,a.wrapS=a.wrapT=Oi,a.anisotropy=8,a}function Tx(n=7,t="#8a8c83"){const e=Ci(256,256),i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);const s=ei(n);for(let r=0;r<1800;r++){const o=Math.floor(80+s()*80);i.fillStyle=`rgba(${o},${o},${o-4},${.06+s()*.16})`,i.fillRect(s()*256,s()*256,1+s()*3,1+s()*2)}i.strokeStyle="rgba(50,52,50,.24)",i.lineWidth=1;for(let r=1;r<4;r++)i.beginPath(),i.moveTo(r*64,0),i.lineTo(r*64,256),i.stroke(),i.beginPath(),i.moveTo(0,r*64),i.lineTo(256,r*64),i.stroke();const a=new ti(e);return a.colorSpace=ve,a.wrapS=a.wrapT=Oi,a.anisotropy=8,a}function wx(n=1,t=!1){const e=Ci(256,512),i=e.getContext("2d"),s=ei(n),a=t?"#3c3a36":"#293641";i.fillStyle=a,i.fillRect(0,0,256,512),i.strokeStyle="rgba(0,0,0,.28)",i.lineWidth=2;for(let o=0;o<512;o+=64)i.beginPath(),i.moveTo(0,o),i.lineTo(256,o),i.stroke();for(let o=0;o<256;o+=64)i.beginPath(),i.moveTo(o,0),i.lineTo(o,512),i.stroke();for(let o=10;o<500;o+=32)for(let l=10;l<246;l+=32){if(s()>(t?.62:.54)){const h=180+s()*70;i.fillStyle=t?`rgba(255,${Math.floor(h*.78)},${Math.floor(h*.42)},${.55+s()*.4})`:`rgba(${Math.floor(h*.55)},${Math.floor(h*.8)},${h},${.5+s()*.45})`}else i.fillStyle=`rgba(10,18,24,${.45+s()*.35})`;i.fillRect(l,o,18,16),i.fillStyle="rgba(255,255,255,.05)",i.fillRect(l+2,o+2,14,3)}const r=new ti(e);return r.colorSpace=ve,r.wrapS=r.wrapT=Oi,r.anisotropy=8,r}function Un(n,t={}){const{width:e=512,height:i=256,bg:s="rgba(4,10,16,.86)",fg:a="#eaf6ff",accent:r="#ff8a2b",font:o="700 46px sans-serif",sub:l="",subFont:c="600 22px sans-serif",border:h=!0}=t,d=Ci(e,i),u=d.getContext("2d");u.fillStyle=s,u.fillRect(0,0,e,i),h&&(u.strokeStyle=r,u.lineWidth=6,u.strokeRect(8,8,e-16,i-16),u.fillStyle=r,u.fillRect(24,i-34,80,4)),u.textAlign="center",u.textBaseline="middle",u.fillStyle=a,u.font=o;const f=Array.isArray(n)?n:[n],g=i/(f.length+(l?1.4:.7));f.forEach((p,m)=>u.fillText(p,e/2,i*.34+m*g)),l&&(u.fillStyle=r,u.font=c,u.fillText(l,e/2,i*.72));const _=new ti(d);return _.colorSpace=ve,_.anisotropy=8,_}function Ax(n,t,e,i=1,s=.12){const a=[],r=[],o=[];let l=0;for(let d=0;d<n.length;d++){const[u,f]=n[d],g=n[Math.max(0,d-1)],_=n[Math.min(n.length-1,d+1)];let p=_[0]-g[0],m=_[1]-g[1];const v=Math.hypot(p,m)||1;p/=v,m/=v;const E=-m,M=p,T=t/2,w=u+E*T,x=f+M*T,b=u-E*T,U=f-M*T,C=Le(w,x,i)+s,L=Le(b,U,i)+s;if(a.push(w,C,x,b,L,U),d>0){const N=n[d-1];l+=Math.hypot(u-N[0],f-N[1])}r.push(0,l/8,1,l/8)}for(let d=0;d<n.length-1;d++){const u=d*2;o.push(u,u+1,u+2,u+1,u+3,u+2)}const c=new He;c.setAttribute("position",new ce(a,3)),c.setAttribute("uv",new ce(r,2)),c.setIndex(o),c.computeVertexNormals();const h=new Tt(c,e);return h.receiveShadow=!0,h}function Rx(n=1337){const t=ei(n+404),e=[];for(const i of ni){if(i.type==="mountain")continue;const s=i.type==="lake"?3:i.type==="beach"?6:14;for(let a=0;a<s;a++){const r=t()*Math.PI*2,o=Math.sqrt(t())*i.r*.78,l=i.x+Math.cos(r)*o,c=i.z+Math.sin(r)*o;e.push({x:l,z:c,y:Le(l,c,n),poi:i.id,hidden:t()>.78})}}for(let i=0;i<46;i++){const s=t()*Math.PI*2,a=120+t()*400,r=Math.cos(s)*a,o=Math.sin(s)*a;vs(r,o,n)||e.push({x:r,z:o,y:Le(r,o,n),poi:"wild",hidden:!0})}return e}function au(n,t,e){const i=new sl;i.moveTo(-n/2,0),i.lineTo(n/2,0),i.lineTo(0,e),i.closePath();const s=new nr(i,{depth:t,bevelEnabled:!1,curveSegments:2});return s.translate(0,0,-t/2),s}function Cx(n,t){const e=new sl;e.moveTo(-n,0),e.absarc(0,0,n,Math.PI,0,!0),e.lineTo(-n,0);const i=new nr(e,{depth:t,bevelEnabled:!1,curveSegments:14});return i.translate(0,0,-t/2),i}function Px(n,t,e,i,s,a,r,o=0,l={}){const c=n.windowTextures[o%n.windowTextures.length].clone();c.needsUpdate=!0,c.repeat.set(Math.max(2,i/6.5),Math.max(3,a/7.5));const h=new Gt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:.5,roughness:.74,metalness:.18}),d=n.mat.roofGray,u=new Tt(n.unitBox,[h,h,d,d,h,h]);u.position.set(t,r+a/2,e),u.scale.set(i,a,s),u.castShadow=!0,u.receiveShadow=!0,n.scene.add(u),n.addCollider(t,e,i,s,r,r+a),n.addBox(t,r+a,e,i+1.2,.7,s+1.2,n.mat.concreteDark,{collide:!1});const f=Math.min(i*.38,12),g=Math.min(s*.38,12);if(n.addBox(t+i*.12,r+a+.7,e-s*.1,f,3.4,g,n.mat.metal,{collide:!1}),n.addBox(t-i*.28,r+a+.7,e+s*.2,2.4,1.2,2.4,n.mat.darkMetal,{collide:!1}),a>70){n.addCylinder(t-i*.2,r+a+4,e-s*.2,.12,8,n.mat.metal,{collide:!1});const p=n.addBox(t-i*.2,r+a+11.8,e-s*.2,.5,.5,.5,n.mat.redGlow,{collide:!1});p.material=n.mat.redGlow}const _=r+a*.55;if(n.addBox(t,_,e,i+.8,.35,s+.8,n.mat.darkMetal,{collide:!1}),l.neon){const p=Un(l.neon,{width:512,height:160,bg:"rgba(3,8,14,.9)",fg:"#eaf6ff",accent:l.neonColor||"#ff8a2b",font:"700 54px sans-serif"}),m=new be({map:p,transparent:!0,side:me}),v=new Tt(new xi(i*.55,4.4),m);v.position.set(t,r+a*.72,e+s/2+.06),n.scene.add(v)}return n.addBox(t,r+2.5,e+s/2+1.5,5.5,.4,3.2,n.mat.darkMetal,{collide:!1}),u}function Lx(n,t,e,i,s=0,a=1,r=13943716){const o=11*a,l=9*a,c=4.2*a,h=new Gt({color:r,roughness:.9,metalness:.02});n.addBox(t,i,e,o,c,l,h,{rotY:s,collide:!0});const d=au(o+1.2,l+1.4,3.6*a),u=new Tt(d,n.mat.roofRed);u.position.set(t,i+c,e),u.rotation.y=s,u.castShadow=!0,n.scene.add(u),n.addBox(t+o*.26,i+c+2.2,e-l*.2,.8,3.2,.8,n.mat.brick,{collide:!1});const f=n.mat.woodDark;n.addBox(t+Math.sin(s)*(l/2+.04),i,e+Math.cos(s)*(l/2+.04),1.4,2.4,.12,f,{rotY:s,collide:!1});const g=n.mat.windowWarm;for(const _ of[-1,1]){const p=t+Math.cos(s)*_*o*.27+Math.sin(s)*(l/2+.04),m=e-Math.sin(s)*_*o*.27+Math.cos(s)*(l/2+.04);n.addBox(p,i+2.1,m,1.6,1.3,.1,g,{rotY:s,collide:!1})}for(const _ of[-1,1]){const p=t+Math.cos(s)*(o/2+.04)*_,m=e-Math.sin(s)*(o/2+.04)*_;n.addBox(p,i+2.2,m,.1,1.2,1.6,g,{rotY:s,collide:!1})}return{x:t,z:e,w:o,d:l,h:c}}function Wr(n,t,e,i,s=0,a=42,r=13){const o=n.mat.concrete;n.addBox(t,i,e,a,5.2,r,o,{rotY:s,collide:!0}),n.addBox(t,i+5.2,e,a+1,.5,r+1,n.mat.roofGray,{rotY:s,collide:!1});for(let l=-2;l<=2;l++){const c=t+Math.cos(s)*l*7,h=e-Math.sin(s)*l*7;n.addBox(c,i+2.2,h+Math.cos(s)*(r/2+.04),1.7,1.2,.12,n.mat.windowWarm,{rotY:s,collide:!1})}n.addBox(t,i+3.6,e+Math.cos(s)*(r/2+.5),3,.3,1.2,n.mat.darkMetal,{rotY:s,collide:!1})}function Pn(n,t,e,i,s=9,a=0){const r=n.mat.darkMetal,o=2.1;for(const h of[-1,1])for(const d of[-1,1])n.addBox(t+h*o,i,e+d*o,.4,s,.4,r,{rotY:a,collide:!1});n.addBox(t,i+s,e,6.2,.45,6.2,n.mat.metal,{rotY:a,collide:!1}),n.addBox(t,i+s+3.2,e,7.2,.4,7.2,n.mat.roofGray,{rotY:a,collide:!1});for(const h of[-1,1])n.addBox(t+h*3,i+s+1.3,e,.12,1.3,6,n.mat.darkMetal,{rotY:a,collide:!1}),n.addBox(t,i+s+1.3,e+h*3,6,1.3,.12,n.mat.darkMetal,{rotY:a,collide:!1});const l=t+3.55,c=e;for(const h of[-.5,.5])n.addBox(l,i,c+h,.1,s+.4,.1,n.mat.metal,{collide:!1});for(let h=0;h<s;h+=.55)n.addBox(l,i+h,c,.12,.08,1.05,n.mat.metal,{collide:!1});return n.addWalkable(t,e,6.2,6.2,i+s+.45),n.addLadder(l,c,i,i+s+.45),{top:i+s}}function fs(n,t,e,i,s="#3f6f78",a=0,r=1){const o=n.containerTextures[s]||n.containerTextures["#3f6f78"],l=new Gt({map:o,color:16777215,roughness:.72,metalness:.35});for(let c=0;c<r;c++)n.addBox(t,i+c*2.65,e,6.1,2.55,2.45,l,{rotY:a,collide:!0})}function en(n,t,e,i,s=1,a=0){n.addBox(t,i,e,1.6*s,1.5*s,1.6*s,n.mat.crate,{rotY:a,collide:!0})}function ji(n,t,e,i,s=6,a=0){const r=Math.max(2,Math.floor(s/.9));for(let o=0;o<r;o++){const l=(o-(r-1)/2)*.9,c=t+Math.cos(a)*l,h=e-Math.sin(a)*l,d=n.addBox(c,i+o%2*.35,h,.95,.42,.55,n.mat.sandbag,{rotY:a,collide:!1});d.rotation.z=(o%2?1:-1)*.04}n.addCollider(t,e,Math.abs(Math.cos(a))*s+Math.abs(Math.sin(a))*.6,Math.abs(Math.sin(a))*s+Math.abs(Math.cos(a))*.6,i,i+1)}function ru(n,t,e,i){n.addCylinder(t,i,e,.09,5.5,n.mat.darkMetal,{collide:!1});const s=n.addBox(t,i+5.5,e,1.3,.16,.34,n.mat.orangeGlow,{collide:!1});s.material=n.mat.orangeGlow,n.addBox(t,i+5.62,e,1.7,.1,.5,n.mat.darkMetal,{collide:!1})}function tn(n,t,e,i,s,a,r,o="#ff8a2b"){const l=Un(a,{width:512,height:240,bg:"rgba(4,9,14,.92)",fg:"#eaf6ff",accent:o,font:"700 62px sans-serif",sub:r,subFont:"600 24px sans-serif"}),c=new be({map:l,transparent:!0,side:me}),h=new Tt(new xi(11,5.2),c);return h.position.set(t,e,i),h.rotation.y=s,n.scene.add(h),n.addBox(t,e-2.9,i,11.6,.3,.4,n.mat.darkMetal,{rotY:s,collide:!1}),h}function Ix(n,t,e,i){n.addCylinder(t,i,e,.5,4.5,n.mat.metal,{collide:!1});const s=new Tt(new Ms(3.4,24,0,Math.PI*2),n.mat.radar);s.position.set(t,i+5.2,e),s.rotation.set(-.55,.3,.1),s.material.side=me,n.scene.add(s);const a=new Tt(new ke(.08,.08,3.6,6),n.mat.metal);a.position.set(t,i+4.8,e),a.rotation.z=.5,n.scene.add(a),n.animated.push(r=>{s.rotation.y=.3+Math.sin(r*.28)*.8})}function ll(n,t,e,i,s=12){const a=Un("H",{width:256,height:256,bg:"rgba(24,29,30,1)",fg:"#e9d8a6",accent:"#e9d8a6",font:"700 150px sans-serif",border:!0}),r=new Gt({map:a,roughness:.9}),o=new Tt(new Ms(s,32),r);o.rotation.x=-Math.PI/2,o.position.set(t,i+.12,e),n.scene.add(o);const l=new Tt(new Nn(s-.7,s,40),n.mat.yellowGlow);l.rotation.x=-Math.PI/2,l.position.set(t,i+.13,e),n.scene.add(l)}function Dx(n,t,e,i,s=0){const a=n.mat.aircraft,r=new Tt(new ke(2.2,1.8,32,12),a);r.rotation.z=Math.PI/2,r.rotation.y=s,r.position.set(t,i+4.2,e),r.castShadow=!0,n.scene.add(r);const o=new Tt(new mi(1.8,4,12),a);o.rotation.z=-Math.PI/2,o.rotation.y=s,o.position.set(t+Math.cos(s)*17,i+4.2,e-Math.sin(s)*17),n.scene.add(o),n.addBox(t,i+4,e,36,.55,7.5,a,{rotY:s,collide:!1}),n.addBox(t-12*Math.cos(s),i+5.2,e+12*Math.sin(s),.5,5.5,9,a,{rotY:s,collide:!1}),n.addBox(t-12*Math.cos(s),i+7.5,e+12*Math.sin(s),.5,.5,4.5,a,{rotY:s,collide:!1}),n.addCollider(t,e,Math.abs(Math.cos(s))*34+Math.abs(Math.sin(s))*8,Math.abs(Math.sin(s))*34+Math.abs(Math.cos(s))*8,i,i+7)}function Nx(n,t,e,i,s=0){const a=n.mat.aircraft;n.addBox(t,i+1.4,e,5.2,2.2,2.4,a,{rotY:s,collide:!1}).scale.set(5.2,2.2,2.4),n.addBox(t-4.2*Math.cos(s),i+1.9,e+4.2*Math.sin(s),6.5,.6,.7,a,{rotY:s,collide:!1}),n.addBox(t-7.4*Math.cos(s),i+3.1,e+7.4*Math.sin(s),.4,3,2.6,a,{rotY:s,collide:!1}),n.addCylinder(t,i+2.8,e,.22,.8,n.mat.darkMetal,{collide:!1});const o=new Tt(new Ke(10,.08,.35),n.mat.darkMetal);o.position.set(t,i+3.35,e),o.rotation.y=s,n.scene.add(o),n.animated.push(l=>{o.rotation.y=s+l*18}),n.addBox(t+Math.cos(s)*1.2,i+1.2,e-Math.sin(s)*1.2,4.5,.12,.12,n.mat.darkMetal,{rotY:s,collide:!1}),n.addBox(t,i+.5,e,4.2,.12,2.4,n.mat.darkMetal,{rotY:s,collide:!1})}function Ux(n){const t=n.pad("city"),e=t.h;n.addBox(t.x,e-.3,t.z,230,.34,212,n.mat.asphalt,{collide:!1});for(const d of[-390,-330,-270,-210])n.addBox(d,e+.04,t.z,7,.05,208,n.mat.asphaltLight,{collide:!1});for(const d of[-330,-270,-210,-150])n.addBox(t.x,e+.04,d,226,.05,7,n.mat.asphaltLight,{collide:!1});for(const d of[-330,-270])for(let u=-410;u<-80;u+=14)n.addBox(d,e+.09,u,.22,.02,5,n.mat.yellowLine,{collide:!1});for(const d of[-360,-300,-240])for(const u of[-300,-240,-180])n.addBox(d,e+.06,u,36,.1,34,n.mat.sidewalk,{collide:!1});const i=[[-360,-300,30,28,92,0,"NOVA"],[-300,-300,34,30,66,1,""],[-240,-300,26,26,112,2,"ELITE"],[-360,-240,28,32,54,0,""],[-240,-240,28,28,62,1,"ASH"],[-360,-180,32,26,48,2,""],[-300,-180,28,30,84,0,"ZONE 7"],[-240,-180,26,24,58,1,""]];for(const[d,u,f,g,_,p,m]of i)Px(n,d,u,f,g,_,e,p,{neon:m,neonColor:p===2?"#63dcff":"#ff8a2b"});const s={x:-300,z:-240};n.addBox(s.x,e+.08,s.z,42,.1,34,n.mat.plaza,{collide:!1}),n.addCylinder(s.x,e+.1,s.z,6,1.1,n.mat.concrete,{collide:!0});const a=new Tt(new Ms(5.2,32),n.mat.fountainWater);a.rotation.x=-Math.PI/2,a.position.set(s.x,e+1.22,s.z),n.scene.add(a),n.addCylinder(s.x,e+1.2,s.z,1.2,3.6,n.mat.metal,{collide:!1});const r=new Tt(new sr(1.15,1),n.mat.orangeGlow);r.position.set(s.x,e+5.1,s.z),n.scene.add(r),n.animated.push(d=>{r.rotation.y=d*.4,r.position.y=e+5.1+Math.sin(d*1.2)*.18});for(let d=0;d<4;d++){const u=d/4*Math.PI*2;n.addBox(s.x+Math.cos(u)*12,e+.2,s.z+Math.sin(u)*10,2.6,.35,.8,n.mat.wood,{rotY:-u,collide:!1})}const o=[2830648,6957867,3034463,9075290];[[-375,-260],[-255,-320],[-335,-160],[-225,-260],[-285,-135],[-375,-345]].forEach(([d,u],f)=>{n.addBox(d,e+.3,u,3.6,.7,1.7,new Gt({color:o[f%4],metalness:.6,roughness:.4}),{rotY:f%2?Math.PI/2:0,collide:!0}),n.addBox(d,e+.95,u,1.9,.55,1.55,n.mat.glassDark,{rotY:f%2?Math.PI/2:0,collide:!1})});for(const d of[-330,-270])for(let u=-390;u<=-120;u+=54)ru(n,d+4,u,e);tn(n,-300,e+11,-115,0,"NEON CITY","AURORA PROTOCOL · SECTOR 04","#63dcff"),tn(n,-190,e+14,-240,-Math.PI/2,"BATTLE WORLD","ELITE SURVIVAL","#ff8a2b"),ll(n,-240,-300,e+112.7,9),n.addBox(-315,e+.2,-142,8,.4,10,n.mat.darkMetal,{collide:!1}),n.addBox(-315,e+.2,-137,7,2.4,.5,n.mat.metal,{collide:!0});const c=Un("METRO",{width:256,height:96,bg:"rgba(3,9,14,.9)",fg:"#63dcff",accent:"#63dcff",font:"700 42px sans-serif",border:!1}),h=new Tt(new xi(4,1.5),new be({map:c,transparent:!0,side:me}));h.position.set(-315,e+2.5,-134.7),n.scene.add(h)}function Ox(n){const t=n.pad("base"),e=t.h;n.addBox(t.x,e-.3,t.z,194,.34,184,n.mat.concrete,{collide:!1});const i=3.4;n.addBox(t.x,e,-378,188,i,2,n.mat.concreteDark,{collide:!0}),n.addBox(t.x,e,-206,188,i,2,n.mat.concreteDark,{collide:!0});for(const a of[181,369])n.addBox(a,e,-330,2,i,94,n.mat.concreteDark,{collide:!0}),n.addBox(a,e,-252,2,i,96,n.mat.concreteDark,{collide:!0});Pn(n,205,-330,e,9),Pn(n,345,-330,e,9),Pn(n,205,-228,e,9),Pn(n,345,-228,e,9),Wr(n,240,-350,e,0,46,13),Wr(n,310,-350,e,0,40,13),Wr(n,240,-260,e,0,38,12),n.addBox(320,e,-252,30,9.5,22,n.mat.concrete,{collide:!0}),n.addBox(320,e+9.5,-252,31,.6,23,n.mat.roofGray,{collide:!1});for(let a=-1;a<=1;a++)n.addBox(320+a*8,e+3,-241,3.2,1.5,.1,n.mat.windowWarm,{collide:!1});for(let a=-1;a<=1;a++)n.addBox(320+a*8,e+6.6,-241,3.2,1.5,.1,n.mat.windowWarm,{collide:!1});Ix(n,338,-278,e),ll(n,270,-292,e,13),Nx(n,270,-292,e+.2,.4);for(let a=0;a<3;a++)n.addCylinder(370,e,-225+a*8,3.4,5.2,n.mat.metal,{collide:!0}),n.addCylinder(370,e+5.2,-225+a*8,1.6,.7,n.mat.darkMetal,{collide:!1});ji(n,245,-300,e,8,0),ji(n,300,-300,e,7,0),ji(n,275,-320,e,5,Math.PI/2);const s=ei(77);for(let a=0;a<14;a++)en(n,215+s()*140,-370+s()*150,e,.9+s()*.5,s()*Math.PI);fs(n,220,-300,e,"#3f6f78",.2,2),fs(n,226,-297,e,"#6f523f",.2,1),fs(n,350,-350,e,"#4f5f3f",-.3,2);for(const a of[230,320]){n.addCylinder(a,e,-320,.09,9,n.mat.metal,{collide:!1});const r=n.addBox(a+1.2,e+7.4,-320,2.4,1.4,.05,n.mat.flag,{collide:!1});n.animated.push(o=>{r.rotation.y=Math.sin(o*2.4)*.15})}tn(n,275,e+9,-378,0,"IRONHOLD","RESTRICTED · SECTOR 07","#ff8a2b")}function Fx(n){const t=n.pad("airport"),e=t.h;n.addBox(t.x,e-.3,t.z,274,.34,242,n.mat.asphalt,{collide:!1}),n.addBox(342,e+.05,238,280,.08,38,n.mat.asphaltLight,{collide:!1});for(let a=215;a<=470;a+=16)n.addBox(a,e+.12,238,8,.02,.5,n.mat.whiteLine,{collide:!1});for(let a=215;a<=470;a+=18)n.addBox(a,e+.12,222,8,.02,.5,n.mat.whiteLine,{collide:!1}),n.addBox(a,e+.12,254,8,.02,.5,n.mat.whiteLine,{collide:!1});n.addBox(342,e+.05,280,240,.08,12,n.mat.asphaltLight,{collide:!1}),n.addBox(300,e,304,64,11,24,n.mat.concrete,{collide:!0}),n.addBox(300,e+11,304,66,.7,26,n.mat.roofGray,{collide:!1});for(let a=-3;a<=3;a++)n.addBox(300+a*8,e+2.2,291.9,4.6,5.5,.15,n.mat.glass,{collide:!1}),n.addBox(300+a*8,e+2.2,316.1,4.6,5.5,.15,n.mat.glass,{collide:!1});tn(n,300,e+15,291,0,"KESTREL","INTERNATIONAL AIRFIELD","#ffd166"),n.addBox(396,e,300,11,34,11,n.mat.concrete,{collide:!0}),n.addBox(396,e+34,300,15,6,15,n.mat.glass,{collide:!0}),n.addBox(396,e+40,300,16,.8,16,n.mat.roofGray,{collide:!1}),n.addCylinder(396,e+40.8,300,.12,9,n.mat.metal,{collide:!1}),n.addBox(396,e+49.6,300,.5,.5,.5,n.mat.redGlow,{collide:!1});for(const a of[270,345]){n.addBox(a,e,200,52,7,30,n.mat.metal,{collide:!0});const r=new Tt(Cx(16,52),n.mat.roofGray);r.position.set(a,e+7,200),r.rotation.y=Math.PI/2,r.castShadow=!0,n.scene.add(r),n.addBox(a,e+2.4,214.9,10,5,.15,n.mat.darkMetal,{collide:!1}),n.addBox(a,e+2.4,185.1,10,5,.15,n.mat.darkMetal,{collide:!1})}Dx(n,342,238,e,Math.PI/2);for(let a=0;a<3;a++)n.addCylinder(430,e,330-a*8,3.2,6,n.mat.metal,{collide:!0});n.addCylinder(210,e,238,.12,8,n.mat.metal,{collide:!1});const i=n.addBox(211.8,e+7.3,238,3.2,.7,.7,n.mat.orangeGlow,{collide:!1});n.animated.push(a=>{i.rotation.y=Math.sin(a*3.2)*.3});for(let a=210;a<475;a+=14)n.addBox(a,e,350,.12,2.2,.12,n.mat.metal,{collide:!1}),n.addBox(a+7,e+1.8,350,14,.08,.08,n.mat.metal,{collide:!1});const s=ei(88);for(let a=0;a<12;a++)en(n,250+s()*180,270+s()*60,e,.7+s()*.5,s()*Math.PI);ll(n,470,300,e,9)}function Bx(n){const t=n.pad("harbor"),e=t.h;n.addBox(t.x,e-.3,t.z,176,.34,160,n.mat.concrete,{collide:!1}),n.addBox(-375,e,270,52,12,26,n.mat.metal,{collide:!0}),n.addBox(-375,e+12,270,54,.7,28,n.mat.roofGray,{collide:!1});for(let f=-2;f<=2;f++)n.addBox(-375+f*9,e+2.2,256.9,4.4,6,.15,n.mat.windowWarm,{collide:!1});tn(n,-375,e+15,257,0,"DOCKSIDE","CARGO TERMINAL 12","#54e6a5");const i=[{x:-465,z:325,w:9,d:58,rot:.55},{x:-430,z:365,w:9,d:46,rot:.2},{x:-505,z:300,w:9,d:42,rot:.9}];for(const f of i){n.addBox(f.x,4.6,f.z,f.w,.55,f.d,n.mat.wood,{rotY:f.rot,collide:!1}),n.addWalkable(f.x,f.z,f.w,f.d,5.15,f.rot);for(let g=-2;g<=2;g++){const _=f.x+Math.sin(f.rot)*g*(f.d/5),p=f.z+Math.cos(f.rot)*g*(f.d/5);for(const m of[-1,1])n.addCylinder(_+Math.cos(f.rot)*m*f.w*.45,0,p-Math.sin(f.rot)*m*f.w*.45,.3,4.6,n.mat.woodDark,{collide:!1})}}const s=["#3f6f78","#6f3f3f","#5f6f3f","#6f5a3f","#3f4f6f"],a=ei(99);for(let f=0;f<16;f++){const g=-455+a()*100,_=230+a()*90;Math.hypot(g+375,_-270)<34||fs(n,g,_,e,gi(a,s),(a()-.5)*.5,Qi(a,1,3))}const r=-452,o=288;n.addBox(r,e,o,7,2,7,n.mat.darkMetal,{collide:!0}),n.addBox(r,e+2,o,3,24,3,n.mat.metal,{collide:!0}),n.addBox(r+11,e+25,o,26,1.2,1.2,n.mat.orangeGlow,{collide:!1}),n.addBox(r-8,e+25,o,6,1.8,3,n.mat.darkMetal,{collide:!1}),n.addBox(r+22,e+20,o,.2,10,.2,n.mat.darkMetal,{collide:!1});const l=-505,c=345;n.addBox(l,.5,c,78,7,20,n.mat.shipHull,{rotY:.25,collide:!1}),n.addBox(l,7.5,c,74,.5,19,n.mat.shipDeck,{rotY:.25,collide:!1}),n.addWalkable(l,c,74,19,8,.25),n.addBox(l-20,8,c,16,12,16,n.mat.metal,{rotY:.25,collide:!0});for(let f=0;f<5;f++)fs(n,l-8+f*10,c,8,gi(a,s),.25,1);n.addCylinder(l-22,20,c,1.1,6,n.mat.darkMetal,{collide:!1});const h=-458,d=232;n.addCylinder(h,e,d,3.2,20,n.mat.white,{collide:!0}),n.addCylinder(h,e+20,d,2.4,3,n.mat.redGlow,{collide:!1});const u=new Tt(new mi(2.2,30,16,1,!0),n.mat.lightBeam);u.position.set(h,e+22,d),u.rotation.z=Math.PI/2,n.scene.add(u),n.animated.push(f=>{u.rotation.y=f*.5}),n.addBox(-425,4.7,332,9,1.1,3.6,n.mat.white,{rotY:.55,collide:!1}),n.addBox(-425,5.4,332,4,1.4,2.2,n.mat.glassDark,{rotY:.55,collide:!1});for(let f=0;f<12;f++)en(n,-450+a()*90,240+a()*80,e,.7+a()*.6,a()*Math.PI);ji(n,-400,325,e,8,.3)}function zx(n){const t=n.pad("village"),e=t.h;n.addBox(t.x,e-.3,t.z,172,.34,160,n.mat.dirt,{collide:!1}),n.addBox(0,e+.05,92,10,.06,154,n.mat.dirtLight,{collide:!1}),n.addBox(0,e+.05,92,156,.06,9,n.mat.dirtLight,{collide:!1});const i=[[-42,48,0,1.05],[40,48,Math.PI,1],[-52,116,.2,.95],[46,118,Math.PI-.2,1.05],[-18,150,0,.9],[54,24,Math.PI/2,.9],[-68,26,-Math.PI/2,1],[24,158,Math.PI,.85],[-72,78,Math.PI/2,.8]],s=[13943716,13153425,14207922,12167305];i.forEach(([c,h,d,u],f)=>Lx(n,c,h,e,d,u,s[f%4])),n.addBox(66,e,142,22,8,15,n.mat.wood,{collide:!0});const a=new Tt(au(24,17,6),n.mat.roofRed);a.position.set(66,e+8,142),n.scene.add(a);const r=-74,o=148;n.addCylinder(r,e,o,3.2,16,n.mat.concrete,{collide:!0});const l=new Te;l.position.set(r,e+17,o),n.scene.add(l);for(let c=0;c<4;c++){const h=new Tt(new Ke(1.2,10,.18),n.mat.wood);h.position.y=5;const d=new Te;d.rotation.z=c*Math.PI/2,d.add(h),l.add(d)}n.animated.push(c=>{l.rotation.z=c*.55});for(let c=0;c<4;c++){const h=-18+c*12,d=88;n.addBox(h,e,d,5,.8,3,n.mat.wood,{collide:!0}),n.addBox(h,e+2.8,d,6,.2,4,c%2?n.mat.canvasRed:n.mat.canvasBlue,{collide:!1});for(const u of[-1,1])n.addBox(h+u*2.6,e,d,.15,2.8,.15,n.mat.woodDark,{collide:!1})}n.addCylinder(12,e,112,2.2,1.3,n.mat.concrete,{collide:!0}),n.addCylinder(12,e+1.3,112,1.9,.1,n.mat.fountainWater,{collide:!1});for(const c of[-1,1])n.addBox(12+c*2,e,112,.2,3.4,.2,n.mat.woodDark,{collide:!1});n.addBox(12,e+3.4,112,4.6,.2,2.2,n.mat.roofRed,{collide:!1});for(let c=0;c<20;c++){const h=-80+c*8.5;n.addBox(h,e,38,.12,1.2,.12,n.mat.woodDark,{collide:!1}),c<19&&n.addBox(h+4.25,e+.9,38,8.5,.08,.08,n.mat.woodDark,{collide:!1})}for(let c=0;c<8;c++)n.addCylinder(-55+c*14,e,30+c%3*6,1.3,1.1,n.mat.hay,{collide:!1});n.addBox(0,e+.8,52,3.4,1.3,1.8,n.mat.wood,{collide:!0}),tn(n,0,e+8,34,0,"OLD MILL","EST. 1912 · POP. 214","#e8c79a")}function kx(n){const t=n.pad("foundry"),e=t.h;n.addBox(t.x,e-.3,t.z,180,.34,172,n.mat.concrete,{collide:!1}),n.addBox(138,e,-42,74,17,44,n.mat.metal,{collide:!0});for(let a=0;a<5;a++){const r=new Tt(new Ke(14,.4,44),n.mat.roofGray);r.position.set(108+a*15,e+18.2,-42),r.rotation.z=.25,r.castShadow=!0,n.scene.add(r)}tn(n,138,e+12,-19.5,0,"FOUNDRY","INDUSTRIAL SECTOR 03","#ff7a1a");for(let a=0;a<3;a++){const r=115+a*22,o=-68;n.addCylinder(r,e,o,2.2,34,n.mat.brick,{collide:!0}),n.addCylinder(r,e+34,o,2.5,1.2,n.mat.darkMetal,{collide:!1}),n.addSmoke(r,e+35,o,3.4,30)}for(let a=0;a<4;a++){const r=88+a*10,o=24;n.addCylinder(r,e,o,3.6,20,n.mat.metal,{collide:!0}),n.addCylinder(r,e+20,o,3.9,1.2,n.mat.darkMetal,{collide:!1})}for(let a=0;a<3;a++){const r=new Tt(new ke(.45,.45,26,8),n.mat.rust);r.rotation.z=Math.PI/2,r.position.set(70,e+2+a*2,-20+a*3),n.scene.add(r)}n.addBox(180,e,-80,44,12,32,n.mat.metal,{collide:!0}),n.addBox(180,e+12,-80,46,.7,34,n.mat.roofGray,{collide:!1});for(let a=0;a<3;a++)n.addCylinder(105+a*11,e,-95,3,4,n.mat.darkMetal,{collide:!0}),n.addCylinder(105+a*11,e+4,-95,2.6,.2,n.mat.orangeGlow,{collide:!1});const i=ei(111),s=["#3f6f78","#6f3f3f","#5f6f3f","#6f5a3f"];for(let a=0;a<14;a++){const r=70+i()*120,o=-105+i()*110;Math.hypot(r-138,o+42)<48||fs(n,r,o,e,gi(i,s),i()*.8,Qi(i,1,2))}for(let a=0;a<12;a++)en(n,60+i()*140,-110+i()*120,e,.8+i()*.6,i()*Math.PI);n.addBox(100,e+10,-42,3,.3,40,n.mat.darkMetal,{collide:!1});for(let a=0;a<5;a++)n.addBox(100,e+2+a*2,-62,.15,2,.15,n.mat.darkMetal,{collide:!1})}function Hx(n){const t=n.pad("bunker"),e=t.h;n.addBox(t.x,e-.3,t.z,58,.34,54,n.mat.concrete,{collide:!1});const i=t.x,s=t.z,a=n.mat.concreteDark;n.addBox(i,e,s-9,26,7,1.2,a,{collide:!0}),n.addBox(i-13,e,s,1.2,7,18,a,{collide:!0}),n.addBox(i+13,e,s,1.2,7,18,a,{collide:!0}),n.addBox(i,e+7,s,27,.8,19,n.mat.concrete,{collide:!1}),n.addBox(i-7.5,e,s+9,11,7,1.2,a,{collide:!0}),n.addBox(i+7.5,e,s+9,11,7,1.2,a,{collide:!0}),n.addBox(i,e+6.2,s+9,5,.8,1.2,a,{collide:!1}),n.addBox(i,e+.02,s,24,.08,17,n.mat.interior,{collide:!1});for(const l of[-6,6]){const c=n.addBox(i+l,e+6.3,s-2,.4,.4,.4,n.mat.redGlow,{collide:!1});c.material=n.mat.redGlow}const r=Un("07",{width:256,height:160,bg:"rgba(3,8,12,.9)",fg:"#eaf6ff",accent:"#ff4b4b",font:"700 100px sans-serif",border:!0}),o=new Tt(new xi(4,2.5),new be({map:r,transparent:!0,side:me}));o.position.set(i,e+4.6,s+9.65),n.scene.add(o),ji(n,i-18,s+12,e,8,0),ji(n,i+18,s+12,e,7,0);for(let l=0;l<6;l++)en(n,i-18+l*6,s+18,e,.8+l%2*.3,l*.5);n.addCylinder(i+20,e,s-12,.12,16,n.mat.metal,{collide:!1}),n.addBox(i+20,e+16,s-12,.4,.4,.4,n.mat.redGlow,{collide:!1}),Pn(n,i+26,s+2,e,10);for(let l=0;l<4;l++)n.addBox(i-24+l*12,e,s+26,4,1.4,1.2,n.mat.concrete,{collide:!0})}function Gx(n){const t=n.pad("ridge"),e=t.h;Pn(n,t.x-18,t.z-4,e,11),Pn(n,t.x+18,t.z+8,e,8),ji(n,t.x,t.z+18,e,12,0),ji(n,t.x-16,t.z+8,e,8,.8);for(let i=0;i<8;i++)en(n,t.x-14+i*4,t.z-14,e,.7+i%3*.2,i);n.addCylinder(t.x+4,e,t.z-20,.15,20,n.mat.metal,{collide:!1}),n.addBox(t.x+4,e+20,t.z-20,.5,.5,.5,n.mat.redGlow,{collide:!1}),tn(n,t.x,e+7,t.z+26,Math.PI,"RIDGE","OVERWATCH · ALT 212M","#9fdcff")}function Vx(n){const t=n.pad("beach"),e=t.h,i=t.x-14,s=t.z+6;for(const a of[-1,1])for(const r of[-1,1])n.addBox(i+a*1.8,e,s+r*1.8,.25,4,.25,n.mat.wood,{collide:!1});n.addBox(i,e+4,s,5,.3,5,n.mat.wood,{collide:!1}),n.addBox(i,e+6.2,s,5.5,.2,5.5,n.mat.canvasRed,{collide:!1}),n.addWalkable(i,s,5,5,e+4.3);for(let a=0;a<6;a++){const r=t.x-30+a*12,o=t.z+18+a%2*6;n.addCylinder(r,e,o,.08,3,n.mat.metal,{collide:!1});const l=new Tt(new mi(3.4,1.2,8,1,!0),a%2?n.mat.canvasRed:n.mat.canvasBlue);l.position.set(r,e+3.4,o),n.scene.add(l)}n.addBox(t.x+28,e-.2,t.z-2,8,.5,44,n.mat.wood,{collide:!1}),n.addWalkable(t.x+28,t.z-2,8,44,e+.3);for(let a=0;a<8;a++)for(const r of[-1,1])n.addCylinder(t.x+28+r*3.4,0,t.z-22+a*6,.25,3.5,n.mat.woodDark,{collide:!1});n.addBox(t.x+58,1.2,t.z-34,18,3.5,6,n.mat.rust,{rotY:.6,collide:!1}),n.addBox(t.x+58,4.6,t.z-34,5,2.5,4,n.mat.rust,{rotY:.6,collide:!1});for(let a=0;a<10;a++)en(n,t.x-40+a*9,t.z+26+a%3*5,e,.5+a%2*.3,a)}function Wx(n){const i=Le(18,408);n.addBox(18,i-.2,408,26,.4,22,n.mat.concrete,{collide:!1}),n.addBox(12,i,404,8,4,7,n.mat.concreteDark,{collide:!0}),n.addBox(24,i,406,5,3,5,n.mat.metal,{collide:!0}),n.addCylinder(26,i,413,.18,22,n.mat.metal,{collide:!1}),n.addCylinder(10,i,414,.18,16,n.mat.metal,{collide:!1});const s=new Tt(new Ms(3,20),n.mat.radar);s.position.set(10,i+16,414),s.rotation.set(-.6,.4,0),n.scene.add(s),tn(n,18,i+6,420,0,"AURORA","RELAY STATION 09","#9fdcff");for(let a=0;a<12;a++)en(n,6+a%4*6,396+Math.floor(a/4)*5,i,.6,a)}function Xx(n){const t=new Gt({map:n.asphaltTexture,color:16777215,roughness:.92,metalness:.02}),e=new Gt({map:n.dirtTexture,color:16777215,roughness:1}),i=[{pts:[[0,92],[-60,10],[-160,-90],[-235,-170],[-300,-245]],w:8,mat:t},{pts:[[0,92],[80,40],[170,-10],[275,-180],[275,-292]],w:8,mat:t},{pts:[[0,92],[90,150],[200,200],[342,238]],w:8,mat:t},{pts:[[0,92],[-50,160],[-100,220],[-160,260],[-260,288],[-395,300]],w:7,mat:t},{pts:[[0,92],[60,60],[110,20],[138,-42]],w:6,mat:e},{pts:[[-300,-245],[-220,-180],[-100,-140],[30,-90],[138,-42]],w:7,mat:t},{pts:[[275,-292],[320,-180],[360,-40],[380,100],[342,238]],w:7,mat:t},{pts:[[342,238],[390,300],[420,380],[432,450]],w:7,mat:t},{pts:[[275,-292],[200,-350],[100,-400],[-10,-440],[-82,-468]],w:6,mat:t}];for(const l of i)n.scene.add(Ax(l.pts,l.w,l.mat,n.seed,.14));const s=-122,a=246,r=7.2,o=Math.atan2(-273,40);n.addBox(s,r-.55,a,11,.7,138,n.mat.bridge,{rotY:o,collide:!1}),n.addWalkable(s,a,11,138,r+.2,o);for(const l of[-1,1])n.addBox(s+Math.cos(o)*l*5.2,r+.7,a-Math.sin(o)*l*5.2,.3,1.4,138,n.mat.rail,{rotY:o,collide:!1});for(let l=-2;l<=2;l++)n.addBox(s+Math.sin(o)*l*25,r-4,a+Math.cos(o)*l*25,2.2,8,2.2,n.mat.concreteDark,{rotY:o,collide:!1});for(let l=-2;l<=2;l++){const c=s+Math.sin(o)*l*24,h=a+Math.cos(o)*l*24;ru(n,c+Math.cos(o)*5,h-Math.sin(o)*5,r+.2)}}function qx(n){const t=ei(n.seed+500),e=n.quality,i=e==="low"?360:e==="medium"?580:860,s=new ke(.28,.45,4.2,6);s.translate(0,2.1,0);const a=new mi(2.6,5.2,7);a.translate(0,5.4,0);const r=new mi(2,4.2,7);r.translate(0,7.6,0);const o=new mi(1.25,3,7);o.translate(0,9.5,0);const l=Hc([a,r,o]),c=new Gt({color:5981744,roughness:1}),h=new Gt({color:4090682,roughness:.96}),d=new dn(s,c,i),u=new dn(l,h,i);d.castShadow=!1,u.castShadow=!1;const f=new ue,g=new Fn,_=new R,p=new R,m=new Ut;let v=0,E=0;for(;v<i&&E++<i*12;){const F=t()*Math.PI*2,it=70+Math.sqrt(t())*520,G=Math.cos(F)*it,$=Math.sin(F)*it;if(vs(G,$,n.seed)||Math.hypot(G,$)>590)continue;let j=!1;for(const q of ni)if(!(q.type==="lake"||q.type==="mountain")&&Math.hypot(G-q.x,$-q.z)<q.r+12){j=!0;break}if(j)continue;const yt=Le(G,$,n.seed);if(yt<2.4||yt>52)continue;const Dt=.75+t()*.9;p.set(G,yt-.2,$),g.setFromAxisAngle(new R(0,1,0),t()*Math.PI*2),_.set(Dt,Dt*(.85+t()*.35),Dt),f.compose(p,g,_),d.setMatrixAt(v,f),u.setMatrixAt(v,f),m.setHSL(.26+t()*.06,.28+t()*.18,.24+t()*.14),u.setColorAt(v,m),v++}d.count=v,u.count=v,d.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),n.scene.add(d,u);const M=new sr(1.1,0),T=new Gt({color:4943423,roughness:1,flatShading:!0}),w=e==="low"?90:e==="medium"?160:240,x=new dn(M,T,w);for(let F=0;F<w;F++){const it=t()*Math.PI*2,G=90+Math.sqrt(t())*500,$=Math.cos(it)*G,j=Math.sin(it)*G,yt=Le($,j,n.seed);p.set($,yt+.4,j),g.setFromAxisAngle(new R(0,1,0),t()*Math.PI*2),_.set(.7+t()*.9,.5+t()*.6,.7+t()*.9),f.compose(p,g,_),x.setMatrixAt(F,f)}n.scene.add(x);const b=new el(1,0),U=new Gt({color:7828331,roughness:.98,flatShading:!0}),C=e==="low"?70:e==="medium"?120:180,L=new dn(b,U,C);for(let F=0;F<C;F++){const it=t()*Math.PI*2,G=100+Math.sqrt(t())*500,$=Math.cos(it)*G,j=Math.sin(it)*G,yt=Le($,j,n.seed);p.set($,yt+.3,j),g.setFromAxisAngle(new R(0,1,0),t()*Math.PI*2),_.set(.8+t()*2.2,.6+t()*1.6,.8+t()*2.2),f.compose(p,g,_),L.setMatrixAt(F,f)}L.castShadow=!1,L.receiveShadow=!0,n.scene.add(L);const N=new ke(.18,.32,6,6);N.translate(0,3,0);const V=new dn(N,c,34),I=Hc([new mi(2.6,.8,7).translate(0,6.4,0),new mi(1.9,.6,7).translate(0,7,0)]),B=new dn(I,new Gt({color:5209406,roughness:.9}),34);let X=0;for(let F=0;F<34;F++){const it=t()*Math.PI*2,G=480+t()*80,$=Math.cos(it)*G,j=Math.sin(it)*G;if(vs($,j,n.seed))continue;const yt=Le($,j,n.seed);p.set($,yt,j),g.setFromAxisAngle(new R(0,1,0),t()*Math.PI*2),_.set(.8+t()*.4,.8+t()*.5,.8+t()*.4),f.compose(p,g,_),V.setMatrixAt(X,f),B.setMatrixAt(X,f),X++}V.count=X,B.count=X,n.scene.add(V,B)}function Hc(n){const t=[],e=[],i=[],s=[];let a=0;for(const o of n){const l=o.attributes.position,c=o.attributes.normal,h=o.attributes.uv;for(let u=0;u<l.count;u++)t.push(l.getX(u),l.getY(u),l.getZ(u)),e.push(c.getX(u),c.getY(u),c.getZ(u)),i.push(h?h.getX(u):0,h?h.getY(u):0);const d=o.index;if(d)for(let u=0;u<d.count;u++)s.push(d.getX(u)+a);else for(let u=0;u<l.count;u++)s.push(u+a);a+=l.count}const r=new He;return r.setAttribute("position",new ce(t,3)),r.setAttribute("normal",new ce(e,3)),r.setAttribute("uv",new ce(i,2)),r.setIndex(s),r}function Yx(n){const t=ei(n.seed+700);for(let e=0;e<24;e++){const i=t()*Math.PI*2,s=120+t()*430,a=Math.cos(i)*s,r=Math.sin(i)*s;if(vs(a,r,n.seed))continue;const o=Le(a,r,n.seed);o<2||(e%3===0?en(n,a,r,o,.7+t()*.5,t()*Math.PI):e%3===1?ji(n,a,r,o,4,t()*Math.PI):n.addBox(a,o,r,2.4,.8,.6,n.mat.concrete,{rotY:t()*Math.PI,collide:!0}))}for(let e=0;e<10;e++){const i=t()*Math.PI*2,s=180+t()*320,a=Math.cos(i)*s,r=Math.sin(i)*s;if(vs(a,r,n.seed))continue;const o=Le(a,r,n.seed);n.addBox(a,o,r,3.4,1.1,.5,n.mat.concrete,{rotY:t()*Math.PI,collide:!0})}}function $x(n){Ux(n),Ox(n),Fx(n),Bx(n),zx(n),kx(n),Hx(n),Gx(n),Vx(n),Wx(n),Xx(n),qx(n),Yx(n)}const Kx=["#3f6f78","#6f3f3f","#5f6f3f","#6f5a3f","#3f4f6f"];function Zx(n,t){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.fillStyle=n,i.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)i.fillStyle=o%16===0?"rgba(255,255,255,.08)":"rgba(0,0,0,.16)",i.fillRect(o,0,3,128);let s=t;const a=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let o=0;o<60;o++)i.fillStyle=`rgba(30,20,15,${.04+a()*.12})`,i.fillRect(a()*128,a()*128,2+a()*9,1+a()*3);const r=new ti(e);return r.colorSpace=ve,r.wrapS=r.wrapT=Oi,r}function Jx(n){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#887252",e.fillRect(0,0,256,256);let i=n;const s=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let r=0;r<2600;r++){const o=70+s()*70;e.fillStyle=`rgba(${o},${o*.82},${o*.58},${.08+s()*.2})`,e.fillRect(s()*256,s()*256,1+s()*3,1+s()*2)}const a=new ti(t);return a.colorSpace=ve,a.wrapS=a.wrapT=Oi,a.anisotropy=8,a}class Qx{constructor(t,e="high",i=1337){this.scene=t,this.quality=e,this.seed=i,this.colliders=[],this.walkables=[],this.ladders=[],this.animated=[],this.smokeParticles=[],this.pois=ni,this.unitBox=new Ke(1,1,1),this.unitCylinder=new ke(1,1,1,12),this.windowTextures=[],this.containerTextures={},this.lootSpots=[],this.vehicleSpawns=[],this.sunFocus=new at(0,0),this._build()}_build(){this._materials(),this.sky=nu(this.scene),this.terrain=bx(this.scene,this.seed),this.water=su(this.scene),$x(this),this._vehicleSpawns(),this.lootSpots=Rx(this.seed).filter(t=>!vs(t.x,t.z,this.seed)).filter(t=>!this.insideCollider(t.x,t.z,1.3,t.y)).map(t=>({...t,y:this.groundHeight(t.x,t.z)}))}_materials(){const t=(e,i={})=>new Gt({color:e,roughness:.86,metalness:.06,...i});this.asphaltTexture=Ex(this.seed,"#3b4145"),this.dirtTexture=Jx(this.seed+3),this.concreteTexture=Tx(this.seed+2);for(let e=0;e<4;e++)this.windowTextures.push(wx(this.seed+e*7,e%2===0));for(const e of Kx)this.containerTextures[e]=Zx(e,this.seed+e.length);this.mat={asphalt:t(16777215,{map:this.asphaltTexture,roughness:.94}),asphaltLight:t(4870229,{map:this.asphaltTexture,roughness:.92}),concrete:t(16777215,{map:this.concreteTexture,roughness:.92}),concreteDark:t(7830648,{map:this.concreteTexture,roughness:.95}),sidewalk:t(10132370,{map:this.concreteTexture,roughness:.95}),plaza:t(9407874,{map:this.concreteTexture,roughness:.95}),metal:t(6976636,{roughness:.5,metalness:.55}),darkMetal:t(3357506,{roughness:.55,metalness:.6}),rust:t(9067068,{roughness:.85,metalness:.35}),wood:t(9070661,{roughness:.95}),woodDark:t(5126953,{roughness:.95}),brick:t(9395530,{roughness:.94}),sandbag:t(11049330,{roughness:1}),crate:t(16777215,{map:this._crateTexture(),roughness:.92}),roofRed:t(9520952,{roughness:.85}),roofBlue:t(4019555,{roughness:.82}),roofGray:t(6185830,{roughness:.78,metalness:.2}),glass:new Gt({color:9161181,transparent:!0,opacity:.34,roughness:.12,metalness:.55}),glassDark:new Gt({color:2178379,transparent:!0,opacity:.72,roughness:.16,metalness:.5}),windowWarm:new Gt({color:14267514,emissive:16754253,emissiveIntensity:.55,roughness:.4}),orangeGlow:new be({color:16747051}),redGlow:new be({color:16730955}),yellowGlow:new be({color:16765286}),whiteLine:new be({color:15131350}),yellowLine:new be({color:14201946}),dirt:t(16777215,{map:this.dirtTexture,roughness:1}),dirtLight:t(10126948,{map:this.dirtTexture,roughness:1}),fountainWater:new Gt({color:2923187,roughness:.16,metalness:.35,transparent:!0,opacity:.85}),interior:t(3159610,{roughness:.95}),shipHull:t(5200995,{roughness:.7,metalness:.4}),shipDeck:t(6055530,{roughness:.8,metalness:.3}),bridge:t(4935762,{map:this.concreteTexture,roughness:.92}),rail:t(9080721,{roughness:.55,metalness:.65}),flag:new Gt({color:13195066,roughness:.8,side:me}),aircraft:t(8095115,{roughness:.5,metalness:.45}),radar:t(10134952,{roughness:.5,metalness:.4,side:me}),white:t(14276815,{roughness:.8}),hay:t(12625500,{roughness:1}),canvasRed:new Gt({color:11094070,roughness:.9,side:me}),canvasBlue:new Gt({color:4089470,roughness:.9,side:me}),lightBeam:new be({color:16769696,transparent:!0,opacity:.16,blending:di,depthWrite:!1,side:me})}}_crateTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#7d603c",e.fillRect(0,0,128,128),e.strokeStyle="rgba(40,26,14,.5)",e.lineWidth=4,e.strokeRect(4,4,120,120),e.beginPath(),e.moveTo(8,8),e.lineTo(120,120),e.moveTo(120,8),e.lineTo(8,120),e.stroke(),e.strokeStyle="rgba(255,220,160,.12)",e.lineWidth=2;for(let s=20;s<128;s+=24)e.beginPath(),e.moveTo(0,s),e.lineTo(128,s),e.stroke();const i=new ti(t);return i.colorSpace=ve,i.wrapS=i.wrapT=Oi,i}_vehicleSpawns(){const t=[{x:-22,z:64,rot:.2},{x:74,z:96,rot:1.4},{x:-140,z:-60,rot:.8},{x:225,z:-320,rot:.4},{x:360,z:210,rot:1.7},{x:-340,z:280,rot:.9},{x:-250,z:-170,rot:.1},{x:130,z:-100,rot:2.1}];for(const e of t)this.vehicleSpawns.push({...e,y:this.groundHeight(e.x,e.z)})}pad(t){return ni.find(e=>e.id===t)}addCollider(t,e,i,s,a,r,o=!0){this.colliders.push({min:{x:t-i/2,y:a,z:e-s/2},max:{x:t+i/2,y:r,z:e+s/2},solid:o})}addBox(t,e,i,s,a,r,o,l={}){const{rotY:c=0,collide:h=!0,cast:d=!0,receive:u=!0}=l,f=new Tt(this.unitBox,o);if(f.position.set(t,e+a/2,i),f.scale.set(s,a,r),f.rotation.y=c,f.castShadow=d,f.receiveShadow=u,this.scene.add(f),h){const g=Math.abs(Math.cos(c)),_=Math.abs(Math.sin(c));this.addCollider(t,i,s*g+r*_,s*_+r*g,e,e+a)}return f}addCylinder(t,e,i,s,a,r,o={}){const{collide:l=!1,rotY:c=0}=o,h=new Tt(this.unitCylinder,r);return h.position.set(t,e+a/2,i),h.scale.set(s,a,s),h.rotation.y=c,h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h),l&&this.addCollider(t,i,s*2,s*2,e,e+a),h}addWalkable(t,e,i,s,a,r=0){this.walkables.push({x:t,z:e,w:i,d:s,top:a,rot:r})}addLadder(t,e,i,s,a=0){this.ladders.push({x:t,z:e,bottom:i,top:s,rot:a,radius:1.8})}addSmoke(t,e,i,s,a){if(this.quality==="low")return;const r=document.createElement("canvas");r.width=128,r.height=128;const o=r.getContext("2d"),l=o.createRadialGradient(64,64,2,64,64,62);l.addColorStop(0,"rgba(220,222,218,.55)"),l.addColorStop(.45,"rgba(170,175,174,.3)"),l.addColorStop(1,"rgba(130,136,138,0)"),o.fillStyle=l,o.fillRect(0,0,128,128);const c=new ti(r);c.colorSpace=ve;const h=this.quality==="high"?7:4;for(let d=0;d<h;d++){const u=new pi({map:c,transparent:!0,opacity:.2,depthWrite:!1,color:12107968}),f=new Ti(u);f.position.set(t,e,i),f.scale.set(6,6,1),this.scene.add(f),this.smokeParticles.push({sprite:f,x:t,y:e,z:i,radius:s,height:a,phase:d/h,speed:.025+Math.random()*.012,size:.5+Math.random()*.6})}}insideCollider(t,e,i=0,s=null){for(const a of this.colliders)if(a.solid&&!(s!==null&&(a.max.y<s+.4||a.min.y>s+2.2))&&t>a.min.x-i&&t<a.max.x+i&&e>a.min.z-i&&e<a.max.z+i)return!0;return!1}groundHeight(t,e){let i=Le(t,e,this.seed);for(const s of this.walkables){const a=t-s.x,r=e-s.z,o=Math.cos(s.rot),l=Math.sin(s.rot),c=a*o+r*l,h=-a*l+r*o;Math.abs(c)<=s.w/2&&Math.abs(h)<=s.d/2&&s.top>i&&(i=s.top)}return i}isWaterAt(t,e){return!(Le(t,e,this.seed)>Ui+.05||this.groundHeight(t,e)>Ui+.4)}resolveCollision(t,e,i,s,a=1.8){let r=t,o=e;for(const l of this.colliders){if(!l.solid||l.max.y<s+.25||l.min.y>s+a-.05)continue;const c=qt(r,l.min.x,l.max.x),h=qt(o,l.min.z,l.max.z);let d=r-c,u=o-h;const f=d*d+u*u;if(!(f>=i*i))if(f>1e-7){const g=Math.sqrt(f);r=c+d/g*i,o=h+u/g*i}else{const g=r-l.min.x,_=l.max.x-r,p=o-l.min.z,m=l.max.z-o,v=Math.min(g,_,p,m);v===g?r=l.min.x-i:v===_?r=l.max.x+i:v===p?o=l.min.z-i:o=l.max.z+i}}return{x:r,z:o}}raycast(t,e,i=400){let s=i,a=null;for(const l of this.colliders){const c=tu(t,e,l,s);c!==null&&c<s&&(s=c,a=l)}const r=3;let o=0;for(let l=0;l<=i;l+=r){const c=t.x+e.x*l,h=t.y+e.y*l,d=t.z+e.z*l,u=this.groundHeight(c,d);if(h<=u){let f=o,g=l;for(let _=0;_<6;_++){const p=(f+g)/2,m=t.x+e.x*p,v=t.y+e.y*p,E=t.z+e.z*p;v<=this.groundHeight(m,E)?g=p:f=p}if(g<s){s=g;const _={x:t.x+e.x*g,y:t.y+e.y*g,z:t.z+e.z*g},p=this.groundHeight(_.x+1,_.z)-this.groundHeight(_.x-1,_.z),m=this.groundHeight(_.x,_.z+1)-this.groundHeight(_.x,_.z-1);a={terrain:!0,normal:new R(-p,2,-m).normalize()}}break}o=l}return s>=i?null:{distance:s,point:new R(t.x+e.x*s,t.y+e.y*s,t.z+e.z*s),normal:a?.normal||new R(0,1,0),collider:a&&!a.terrain?a:null,terrain:!!a?.terrain}}hasLineOfSight(t,e,i,s,a,r){if(dx(t,e,i,s,a,r,this.colliders,.08))return!1;const o=s-t,l=a-e,c=r-i,h=Math.hypot(o,l,c);if(h<1)return!0;const d=Math.min(24,Math.ceil(h/6));for(let u=1;u<d;u++){const f=u/d,g=t+o*f,_=e+l*f,p=i+c*f;if(_<Le(g,p,this.seed)+.25)return!1}return!0}setSunFocus(t,e){if(Math.hypot(t-this.sunFocus.x,e-this.sunFocus.y)<25)return;this.sunFocus.set(t,e);const i=this.sky.sunDir;this.sky.sun.position.set(t+i.x*360,i.y*360,e+i.z*360),this.sky.sun.target.position.set(t,0,e),this.sky.sun.target.updateMatrixWorld()}update(t,e){this.water&&(this.water.mat.uniforms.uTime.value=e);for(const i of this.animated)i(e,t);for(const i of this.smokeParticles){i.phase+=i.speed*t,i.phase>1&&(i.phase-=1);const s=i.phase;i.sprite.position.set(i.x+Math.sin(s*9+i.size*8)*(2+s*i.radius),i.y+s*i.height,i.z+Math.cos(s*7+i.size*5)*(2+s*i.radius));const a=(5+s*18)*i.size;i.sprite.scale.set(a,a,1),i.sprite.material.opacity=(1-s)*.22*Math.min(1,s*6)}if(this.sky.clouds)for(const i of this.sky.clouds)i.position.x+=i.userData.speed*t,i.position.x>1800&&(i.position.x=-1800)}getSpawnPoints(){return this.lootSpots.filter(t=>!t.hidden).slice(0,60)}}const Ks={common:{name:"COMMON",color:"#b9c4cc",glow:10466498,weight:40},rare:{name:"RARE",color:"#4fb7ff",glow:3120639,weight:30},epic:{name:"EPIC",color:"#b78bff",glow:10120191,weight:19},legendary:{name:"LEGENDARY",color:"#ffb347",glow:16747051,weight:11}},Zs={ar_vk47:{id:"ar_vk47",name:"VK-47",category:"ar",ammo:"heavy",rarity:"rare",damage:24,rpm:640,mag:30,reload:2.05,range:190,spread:.72,recoil:.85,auto:!0,pellets:1,zoom:1.45,mobility:.9,desc:"Hard-hitting all-rounder. Reliable at every range."},ar_aegis:{id:"ar_aegis",name:"AEGIS-556",category:"ar",ammo:"light",rarity:"epic",damage:20,rpm:720,mag:32,reload:1.9,range:205,spread:.58,recoil:.7,auto:!0,pellets:1,zoom:1.5,mobility:.95,desc:"Low-recoil precision rifle with a fast reload."},smg_hornet:{id:"smg_hornet",name:"HORNET-9",category:"smg",ammo:"light",rarity:"common",damage:15,rpm:950,mag:32,reload:1.55,range:95,spread:1.1,recoil:.5,auto:!0,pellets:1,zoom:1.25,mobility:1.12,desc:"Close-range shredder. Melts armor in tight spaces."},smg_viper:{id:"smg_viper",name:"VIPER-45",category:"smg",ammo:"light",rarity:"rare",damage:19,rpm:780,mag:28,reload:1.7,range:110,spread:.92,recoil:.6,auto:!0,pellets:1,zoom:1.3,mobility:1.08,desc:"Balanced machine pistol with controllable burst fire."},sg_breacher:{id:"sg_breacher",name:"BREACHER-12",category:"shotgun",ammo:"shells",rarity:"rare",damage:13,rpm:78,mag:6,reload:2.7,range:38,spread:4.2,recoil:1.6,auto:!1,pellets:8,zoom:1.1,mobility:.92,desc:"Eight-pellet pump shotgun. Devastating inside 15 meters."},sn_longshot:{id:"sn_longshot",name:"LONGSHOT AWM",category:"sniper",ammo:"sniper",rarity:"legendary",damage:96,rpm:44,mag:5,reload:3.1,range:360,spread:.08,recoil:2.2,auto:!1,pellets:1,zoom:3.6,mobility:.72,desc:"Bolt-action anti-materiel rifle. One shot, one story."},sn_raptor:{id:"sn_raptor",name:"RAPTOR DMR",category:"sniper",ammo:"heavy",rarity:"epic",damage:46,rpm:165,mag:10,reload:2.4,range:290,spread:.24,recoil:1.2,auto:!1,pellets:1,zoom:2.4,mobility:.82,desc:"Semi-auto marksman rifle for mid-range pressure."},ps_sidekick:{id:"ps_sidekick",name:"SIDEKICK P9",category:"pistol",ammo:"pistol",rarity:"common",damage:20,rpm:380,mag:15,reload:1.35,range:75,spread:1.2,recoil:.4,auto:!1,pellets:1,zoom:1.15,mobility:1.2,desc:"Dependable sidearm. Always better than empty hands."},ps_judge:{id:"ps_judge",name:"JUDGE-357",category:"pistol",ammo:"pistol",rarity:"rare",damage:38,rpm:215,mag:6,reload:1.8,range:85,spread:1,recoil:1.1,auto:!1,pellets:1,zoom:1.2,mobility:1.15,desc:"Heavy revolver. Punishing damage, unforgiving rhythm."},lmg_vulcan:{id:"lmg_vulcan",name:"VULCAN-60",category:"lmg",ammo:"heavy",rarity:"legendary",damage:21,rpm:700,mag:60,reload:4.2,range:175,spread:1.15,recoil:1,auto:!0,pellets:1,zoom:1.35,mobility:.62,desc:"Belt-fed suppression weapon. Hold the line."},melee_machete:{id:"melee_machete",name:"MACHETE",category:"melee",ammo:"none",rarity:"common",damage:48,rpm:95,mag:1,reload:0,range:2.6,spread:0,recoil:0,auto:!1,pellets:1,zoom:1,mobility:1.25,desc:"Silent, fast and always loaded."},grenade_frag:{id:"grenade_frag",name:"FRAG GRENADE",category:"grenade",ammo:"none",rarity:"common",damage:88,rpm:40,mag:1,reload:0,range:6.5,spread:0,recoil:0,auto:!1,pellets:1,zoom:1,mobility:1,desc:"Cookable frag with a 6.5 meter blast radius."}},ou=Object.values(Zs),ja=ou.filter(n=>!["melee","grenade"].includes(n.category)),Xr={ar:"ASSAULT RIFLE",smg:"SUBMACHINE GUN",shotgun:"SHOTGUN",sniper:"SNIPER RIFLE",lmg:"LIGHT MACHINE GUN",pistol:"PISTOL",melee:"MELEE",grenade:"TACTICAL"};function Js(n){return Zs[n]||Zs.ps_sidekick}function lu(n,t=[]){const e={...n};for(const i of t)i==="ext_mag"&&(e.mag=Math.round(e.mag*1.5)),i==="grip"&&(e.recoil*=.72,e.spread*=.85),i==="suppressor"&&(e.recoil*=.9,e.spread*=.94,e.suppressed=!0),i==="scope_2x"&&(e.zoom=Math.max(e.zoom,2.2)),i==="scope_4x"&&(e.zoom=Math.max(e.zoom,3.4));return e}function jx(n){return{ext_mag:"EXTENDED MAG",grip:"TACTICAL GRIP",suppressor:"SUPPRESSOR",scope_2x:"2X SCOPE",scope_4x:"4X SCOPE"}[n]||n}const _e={body:new Gt({color:2962490,roughness:.5,metalness:.65}),bodyLight:new Gt({color:4871517,roughness:.45,metalness:.6}),wood:new Gt({color:7162415,roughness:.8}),accent:new Gt({color:16747051,roughness:.5,metalness:.3}),dark:new Gt({color:1383199,roughness:.55,metalness:.55}),glass:new Gt({color:2788520,emissive:1800857,emissiveIntensity:.6,roughness:.2,metalness:.4}),blade:new Gt({color:12107970,roughness:.25,metalness:.9})};function pe(n,t,e,i,s,a,r=1,o=1,l=1){const c=new Tt(t,e);return c.position.set(i,s,a),c.scale.set(r,o,l),c.castShadow=!0,n.add(c),c}const Pe=new Ke(1,1,1),ns=new ke(1,1,1,10),t_=new Ss(1,10,8);function e_(n,t=[]){const e=new Te,i=n.category,s=new Gt({color:Ks[n.rarity].glow,roughness:.45,metalness:.5});if(i==="melee"){pe(e,Pe,_e.dark,0,0,.18,.05,.1,.34);const l=pe(e,Pe,_e.blade,0,.015,.52,.018,.11,.42);return l.rotation.x=.02,pe(e,Pe,_e.accent,0,0,.38,.06,.06,.06),e.userData.muzzle=new R(0,.02,.72),e.userData.length=.75,e}if(i==="grenade")return pe(e,t_,_e.body,0,0,.12,.07,.09,.07),pe(e,Pe,_e.dark,0,.1,.12,.05,.04,.06),pe(e,Pe,s,0,.13,.12,.03,.02,.05),e.userData.muzzle=new R(0,0,.2),e.userData.length=.25,e;let a=.82;i==="pistol"&&(a=.34),i==="smg"&&(a=.62),i==="shotgun"&&(a=.9),i==="sniper"&&(a=1.08),i==="lmg"&&(a=1);const r=-.1;pe(e,Pe,_e.body,0,.02,r+a*.42,.075,.105,a*.46),pe(e,Pe,_e.bodyLight,0,.085,r+a*.4,.052,.025,a*.44);const o=i==="pistol"?.14:i==="shotgun"?.5:i==="sniper"?.64:.34;if(pe(e,ns,_e.dark,0,.045,r+a*.72+o*.35,.018,o,.018).rotation.x=Math.PI/2,i!=="pistol"&&(pe(e,Pe,i==="sniper"?_e.body:_e.bodyLight,0,.005,r-.03,.06,.11,.22),i==="sniper"&&pe(e,Pe,_e.accent,0,-.02,r-.12,.065,.035,.06)),i==="lmg"?(pe(e,ns,_e.dark,0,-.12,r+a*.38,.11,.1,.11).rotation.z=Math.PI/2,pe(e,ns,s,0,-.12,r+a*.38,.112,.02,.112).rotation.z=Math.PI/2):pe(e,Pe,_e.dark,0,-.11,r+a*.38,.05,.16,.1),pe(e,Pe,_e.dark,0,-.08,r+a*.25,.045,.13,.06).rotation.x=-.16,pe(e,Pe,i==="sniper"?_e.body:_e.bodyLight,0,.02,r+a*.66,.06,.075,a*.25),pe(e,Pe,s,0,.075,r+a*.52,.058,.012,a*.18),t.includes("scope_4x")||t.includes("scope_2x")||i==="sniper"){const l=t.includes("scope_4x")?.28:.2;pe(e,ns,_e.dark,0,.13,r+a*.43,.034,l,.034).rotation.x=Math.PI/2,pe(e,ns,_e.glass,0,.13,r+a*.43+l/2+.005,.028,.012,.028).rotation.x=Math.PI/2,pe(e,Pe,_e.dark,0,.095,r+a*.4,.02,.05,.05)}else pe(e,Pe,_e.dark,0,.115,r+a*.42,.025,.03,.08),pe(e,Pe,_e.glass,0,.132,r+a*.42,.018,.012,.018);return t.includes("suppressor")&&(pe(e,ns,_e.dark,0,.045,r+a*.72+o+.1,.034,.2,.034).rotation.x=Math.PI/2),i==="shotgun"&&pe(e,Pe,_e.wood,0,-.015,r+a*.6,.08,.07,.18),i==="sniper"&&(pe(e,Pe,_e.dark,.06,-.12,r+a*.78,.015,.2,.015).rotation.z=-.3,pe(e,Pe,_e.dark,-.06,-.12,r+a*.78,.015,.2,.015).rotation.z=.3),i==="lmg"&&(pe(e,Pe,_e.dark,.08,-.14,r+a*.8,.018,.24,.018).rotation.z=-.35,pe(e,Pe,_e.dark,-.08,-.14,r+a*.8,.018,.24,.018).rotation.z=.35),e.userData.muzzle=new R(0,.045,r+a*.72+o+(t.includes("suppressor")?.22:.02)),e.userData.length=a,e.userData.category=i,e}function Gc(n){const t=n.category;return`<svg viewBox="0 0 48 24" style="color:${Ks[n.rarity].color}"><path d="M9 12h22l4 3h6" stroke="currentColor" fill="none" stroke-width="1.4"/>${t==="pistol"?"":'<path d="M6 13v4h5l2-4z"/>'}${t==="sniper"||t==="ar"?'<path d="M22 8h9M24 8v-2h5v2"/>':""}${t==="shotgun"?'<path d="M33 11h8M33 14h8"/>':'<path d="M34 12h10"/>'}<path d="M20 15l-2 6h4l2-5" fill="currentColor" opacity=".8"/></svg>`}const i_=["light","heavy","shells","sniper","pistol"],n_={light:"#c8b48a",heavy:"#b9a06e",shells:"#c96b4a",sniper:"#d9c25a",pistol:"#a8b8c2"},s_={weapon:"#ffb347",ammo:"#c8b48a",armor:"#63dcff",helmet:"#8fb8ff",backpack:"#54e6a5",med:"#ff6b6b",grenade:"#9ad66b",attachment:"#b78bff"};function a_(n){return n.type==="weapon"?Ks[n.rarity||"common"].color:n.type==="ammo"?n_[n.ammo]||"#c8b48a":s_[n.type]||"#ffb347"}function r_(n,t=0){const e=n()*100-t*8;return e<8?"legendary":e<26?"epic":e<58?"rare":"common"}function cu(n,t){const e=["ext_mag","grip","suppressor","scope_2x","scope_4x"],i=[],s=t==="legendary"?2:t==="epic"?Qi(n,1,2):t==="rare"&&n()>.6?1:0;for(;i.length<s;){const a=gi(n,e);i.includes(a)||i.push(a)}return i}function o_(n,t="wild"){const e=t==="bunker"||t==="base"?1.4:t==="wild"?.4:0,i=n()*100;if(i<36){const s=r_(n,e);let a=ja.filter(o=>o.rarity===s);a.length||(a=ja);const r=gi(n,a);return{type:"weapon",weapon:r.id,rarity:r.rarity,attachments:cu(n,r.rarity)}}if(i<58){const s=gi(n,i_);return{type:"ammo",ammo:s,amount:s==="sniper"?Qi(n,5,12):s==="shells"?Qi(n,8,20):Qi(n,20,45)}}return i<69?{type:"armor",level:n()>.82?3:n()>.5?2:1}:i<77?{type:"helmet",level:n()>.85?3:n()>.55?2:1}:i<84?{type:"backpack",level:n()>.85?3:n()>.55?2:1}:i<94?{type:"med",item:n()>.55?"medkit":"bandage"}:i<98?{type:"grenade",amount:1}:{type:"attachment",attachment:gi(n,["ext_mag","grip","suppressor","scope_2x","scope_4x"])}}class l_{constructor(t,e,i=1337){this.scene=t,this.world=e,this.seed=i,this.items=[],this.capacity=320,this.nextId=1,this.time=0,this.dirty=!0;const s=new Ke(.46,.46,.46);s.rotateY(Math.PI/4),this.boxMesh=new dn(s,new Gt({roughness:.35,metalness:.55,emissive:2236962,emissiveIntensity:.6}),this.capacity),this.boxMesh.instanceMatrix.setUsage(Rl),this.boxMesh.frustumCulled=!1,this.boxMesh.count=0,this.scene.add(this.boxMesh);const a=new ke(.035,.035,2.6,5,1,!0);a.translate(0,1.3,0),this.beamMesh=new dn(a,new be({transparent:!0,opacity:.4,blending:di,depthWrite:!1,side:me,fog:!1}),this.capacity),this.beamMesh.instanceMatrix.setUsage(Rl),this.beamMesh.frustumCulled=!1,this.beamMesh.count=0,this.scene.add(this.beamMesh),this.dummy=new Ce,this.color=new Ut}spawnInitial(){const t=ei(this.seed+991),e=this.world.lootSpots;for(const i of e){if(t()>.72)continue;const s=o_(t,i.poi),a=this.world.groundHeight(i.x,i.z)+.4;this.add(s,i.x,a,i.z)}for(const i of ni)if(!(i.type==="mountain"||i.type==="lake"))for(let s=0;s<2;s++){const a=t()*Math.PI*2,r=8+t()*i.r*.35,o=i.x+Math.cos(a)*r,l=i.z+Math.sin(a)*r;if(this.world.isWaterAt(o,l))continue;const c=gi(t,ja);this.add({type:"weapon",weapon:c.id,rarity:c.rarity,attachments:cu(t,c.rarity)},o,this.world.groundHeight(o,l)+.4,l)}this.rebuild()}reset(){this.items.length=0,this.nextId=1,this.spawnInitial()}add(t,e,i,s){if(this.items.length>=this.capacity-8)return null;const a={id:this.nextId++,data:t,x:e,y:i,z:s,active:!0,phase:Math.random()*Math.PI*2};return this.items.push(a),this.dirty=!0,a}remove(t){!t||!t.active||(t.active=!1,this.dirty=!0)}nearest(t,e,i,s=2.6){let a=null,r=s;for(const o of this.items){if(!o.active)continue;const l=Math.hypot(o.x-t,o.y-e,o.z-i);l<r&&(r=l,a=o)}return a}nearItems(t,e,i,s=3){return this.items.filter(a=>a.active&&Math.hypot(a.x-t,a.y-e,a.z-i)<s)}dropAt(t,e,i,s,a=.6){const r=Math.random()*Math.PI*2,o=Math.random()*a;return this.add(s,t+Math.cos(r)*o,e+.35,i+Math.sin(r)*o)}update(t){if(this.time+=t,this.dirty&&this.rebuild(),this.time%.05>t)return;const e=this.dummy,i=this.beamMesh,s=this.boxMesh;let a=0;for(const r of this.items){if(!r.active)continue;const o=Math.sin(this.time*2+r.phase)*.09,l=r.data.type==="weapon"?1.25:r.data.type==="armor"?1.05:.8;if(e.position.set(r.x,r.y+.45+o,r.z),e.rotation.set(0,this.time*.8+r.phase,.35),e.scale.setScalar(l),e.updateMatrix(),s.setMatrixAt(a,e.matrix),e.position.set(r.x,r.y,r.z),e.rotation.set(0,0,0),e.scale.set(1,1,1),e.updateMatrix(),i.setMatrixAt(a,e.matrix),a++,a>=this.capacity)break}s.count=a,i.count=a,s.instanceMatrix.needsUpdate=!0,i.instanceMatrix.needsUpdate=!0}rebuild(){const t=this.dummy,e=this.color,i=this.boxMesh,s=this.beamMesh;let a=0;for(const r of this.items)if(r.active&&(e.set(a_(r.data)),i.setColorAt(a,e),s.setColorAt(a,e),t.position.set(r.x,r.y+.45,r.z),t.rotation.set(0,r.phase,.35),t.scale.setScalar(r.data.type==="weapon"?1.25:.85),t.updateMatrix(),i.setMatrixAt(a,t.matrix),t.position.set(r.x,r.y,r.z),t.rotation.set(0,0,0),t.scale.set(1,1,1),t.updateMatrix(),s.setMatrixAt(a,t.matrix),a++,a>=this.capacity))break;i.count=a,s.count=a,i.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.dirty=!1}dispose(){this.scene.remove(this.boxMesh,this.beamMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.beamMesh.geometry.dispose(),this.beamMesh.material.dispose()}}const Rn=[{wait:22,shrink:24,radius:430,dps:2},{wait:17,shrink:20,radius:305,dps:3.5},{wait:15,shrink:17,radius:205,dps:5},{wait:13,shrink:15,radius:132,dps:7},{wait:11,shrink:13,radius:78,dps:9},{wait:9,shrink:11,radius:34,dps:12},{wait:7,shrink:9,radius:0,dps:16}];class c_{constructor(t,e=1337){this.scene=t,this.seed=e,this.rng=ei(e+4242),this.phases=Rn,this.phase=0,this.radius=560,this.center=new at(0,0),this.targetRadius=Rn[0].radius,this.targetCenter=this._chooseCenter(this.radius,this.targetRadius),this.state="wait",this.timer=Rn[0].wait,this.shrinkDuration=Rn[0].shrink,this.fromRadius=this.radius,this.fromCenter=this.center.clone(),this.finished=!1,this.time=0,this.onPhase=null,this._build()}_chooseCenter(t,e){const i=Math.max(0,t-e)*.86,s=this.rng()*Math.PI*2,a=Math.sqrt(this.rng())*i;let r=this.center.x+Math.cos(s)*a,o=this.center.y+Math.sin(s)*a;const l=Math.max(0,iu-60-e),c=Math.hypot(r,o);return c>l&&c>.001&&(r=r/c*l,o=o/c*l),new at(r,o)}_build(){const t=new ke(1,1,1,128,1,!0);t.translate(0,.5,0),this.wallMat=new zi({transparent:!0,depthWrite:!1,side:me,uniforms:{uTime:{value:0},uColor:{value:new Ut(6544639)},uOpacity:{value:.34},uHeight:{value:1}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          float bands = sin(vUv.y * 90.0 - uTime * 2.6) * 0.5 + 0.5;
          float bands2 = sin(vUv.y * 24.0 + uTime * 0.7) * 0.5 + 0.5;
          float vertical = smoothstep(0.0, 0.14, vUv.y) * (1.0 - smoothstep(0.72, 1.0, vUv.y));
          float pulse = 0.55 + 0.45 * sin(uTime * 1.6);
          float alpha = uOpacity * (0.45 + bands * 0.3 + bands2 * 0.18) * vertical * pulse;
          vec3 col = uColor * (0.85 + bands * 0.35);
          gl_FragColor = vec4(col, alpha);
        }
      `}),this.wall=new Tt(t,this.wallMat),this.wall.frustumCulled=!1,this.wall.renderOrder=2,this.scene.add(this.wall);const e=new ke(1,1,1,96,1,!0);e.translate(0,.5,0),this.nextMat=new be({color:16762967,transparent:!0,opacity:.22,side:me,depthWrite:!1,blending:di}),this.nextRing=new Tt(e,this.nextMat),this.nextRing.frustumCulled=!1,this.scene.add(this.nextRing),this.nextRing.visible=!1,this._apply()}_apply(){this.wall.scale.set(this.radius,170,this.radius),this.wall.position.set(this.center.x,-6,this.center.y),this.targetRadius>1&&this.phase<this.phases.length?(this.nextRing.visible=!0,this.nextRing.scale.set(this.targetRadius,7,this.targetRadius),this.nextRing.position.set(this.targetCenter.x,1,this.targetCenter.y)):this.nextRing.visible=!1}update(t){if(this.time+=t,this.wallMat.uniforms.uTime.value=this.time,!this.finished){if(this.timer-=t,this.state==="wait")this.timer<=0&&(this.state="shrink",this.timer=this.shrinkDuration,this.fromRadius=this.radius,this.fromCenter.copy(this.center),this.onPhase&&this.onPhase("shrink",this.phase));else if(this.state==="shrink"){const i=qt(1-this.timer/this.shrinkDuration,0,1),s=i*i*(3-2*i);if(this.radius=gn(this.fromRadius,this.targetRadius,s),this.center.set(gn(this.fromCenter.x,this.targetCenter.x,s),gn(this.fromCenter.y,this.targetCenter.y,s)),this.timer<=0)if(this.radius=this.targetRadius,this.center.copy(this.targetCenter),this.phase++,this.phase>=this.phases.length)this.finished=!0,this.state="final",this.timer=0,this.onPhase&&this.onPhase("final",this.phase);else{const a=this.phases[this.phase];this.targetRadius=a.radius,this.targetCenter=this._chooseCenter(this.radius,a.radius),this.shrinkDuration=a.shrink,this.timer=a.wait,this.state="wait",this.onPhase&&this.onPhase("wait",this.phase)}}}this._apply();const e=this.phase<this.phases.length&&this.distanceOutside(this.center.x,this.center.y)>0;this.wallMat.uniforms.uOpacity.value=e?.42:.3,this.nextRing.visible&&(this.nextMat.opacity=.14+Math.sin(this.time*2.2)*.06)}distanceOutside(t,e){return Math.hypot(t-this.center.x,e-this.center.y)-this.radius}isOutside(t,e){return this.distanceOutside(t,e)>0}get damagePerSecond(){const t=this.phases[Math.min(this.phase,this.phases.length-1)];return t?t.dps:16}getState(){return{phase:Math.min(this.phase+1,this.phases.length),totalPhases:this.phases.length,timer:Math.max(0,this.timer),shrinking:this.state==="shrink",finished:this.finished,center:this.center,radius:this.radius,nextCenter:this.targetCenter,nextRadius:this.targetRadius,dps:this.damagePerSecond,timerText:this.finished?"FINAL":jh(this.timer)}}reset(){this.rng=ei(this.seed+4242),this.phase=0,this.radius=560,this.center.set(0,0),this.targetRadius=Rn[0].radius,this.targetCenter=this._chooseCenter(this.radius,this.targetRadius),this.state="wait",this.timer=Rn[0].wait,this.shrinkDuration=Rn[0].shrink,this.fromRadius=this.radius,this.fromCenter.copy(this.center),this.finished=!1,this._apply()}dispose(){this.scene.remove(this.wall,this.nextRing),this.wall.geometry.dispose(),this.wallMat.dispose(),this.nextRing.geometry.dispose(),this.nextMat.dispose()}}function h_(){const n=Ci(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,230,180,.9)"),e.addColorStop(.55,"rgba(255,150,60,.35)"),e.addColorStop(1,"rgba(255,120,20,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new ti(n);return i.colorSpace=ve,i}function u_(){const n=Ci(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(255,255,255,.85)"),e.addColorStop(.5,"rgba(230,230,230,.35)"),e.addColorStop(1,"rgba(220,220,220,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new ti(n);return i.colorSpace=ve,i}const qr=new Map;function d_(n,t){const e=n+t;if(qr.has(e))return qr.get(e);const i=Ci(192,96),s=i.getContext("2d");s.font="700 64px Rajdhani, sans-serif",s.textAlign="center",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle="rgba(0,0,0,.65)",s.strokeText(n,96,50),s.fillStyle=t,s.fillText(n,96,50);const a=new ti(i);return a.colorSpace=ve,qr.set(e,a),a}class f_{constructor(t,e="high"){this.scene=t,this.quality=e,this.glowTex=h_(),this.smokeTex=u_(),this.active=[],this.tracerGeo=new Ke(1,1,1),this.tracerMat=new be({color:16769704,transparent:!0,opacity:.9,blending:di,depthWrite:!1,fog:!1}),this.ringGeo=new Nn(.9,1,40),this.pool={tracer:[],flash:[],puff:[],ring:[],text:[]}}_take(t,e){const s=this.pool[t].pop();return s?(s.visible=!0,s):e()}_release(t,e){e.visible=!1,e.parent&&e.parent.remove(e),this.pool[t].length<90&&this.pool[t].push(e)}tracer(t,e,i=16769704){const s=t.distanceTo(e);if(s<.2)return;const a=this._take("tracer",()=>{const r=new Tt(this.tracerGeo,this.tracerMat.clone());return r.frustumCulled=!1,r});a.material.color.setHex(i),a.material.opacity=.85,a.position.copy(t).add(e).multiplyScalar(.5),a.scale.set(.035,.035,s),a.lookAt(e),a.renderOrder=3,this.scene.add(a),this.active.push({kind:"tracer",obj:a,life:.055,max:.055})}muzzle(t,e=1){const i=this._take("flash",()=>new Ti(new pi({map:this.glowTex,transparent:!0,depthWrite:!1,blending:di,fog:!1})));i.position.copy(t),i.scale.setScalar(.85*e),i.material.opacity=1,i.material.color.setHex(16767392),this.scene.add(i),this.active.push({kind:"flash",obj:i,life:.06,max:.06,scale:e})}impact(t,e=null,i=16764810,s=3){for(let a=0;a<s;a++){const r=this._take("puff",()=>new Ti(new pi({map:this.smokeTex,transparent:!0,depthWrite:!1,fog:!1})));r.position.copy(t),e&&r.position.addScaledVector(e,.06),r.material.color.setHex(i),r.material.opacity=.85;const o=Gr(Math.random,.16,.36);r.scale.setScalar(o),this.scene.add(r),this.active.push({kind:"puff",obj:r,life:.42,max:.42,vel:new R((Math.random()-.5)*2.4,Math.random()*2.2,(Math.random()-.5)*2.4),grow:1.6,base:o})}}blood(t){this.impact(t,null,16734810,4)}explosion(t,e=1){const i=this._take("flash",()=>new Ti(new pi({map:this.glowTex,transparent:!0,depthWrite:!1,blending:di,fog:!1})));i.position.copy(t),i.scale.setScalar(2.4*e),i.material.opacity=1,i.material.color.setHex(16756832),this.scene.add(i),this.active.push({kind:"flash",obj:i,life:.22,max:.22,scale:2.4*e});for(let a=0;a<(this.quality==="low"?6:12);a++){const r=this._take("puff",()=>new Ti(new pi({map:this.smokeTex,transparent:!0,depthWrite:!1,fog:!1})));r.position.copy(t),r.material.color.setHex(a%3===0?16751168:9078144),r.material.opacity=.8;const o=Gr(Math.random,.5,1.2)*e;r.scale.setScalar(o),this.scene.add(r),this.active.push({kind:"puff",obj:r,life:Gr(Math.random,.7,1.3),max:1.3,vel:new R((Math.random()-.5)*9,Math.random()*7,(Math.random()-.5)*9),grow:4*e,base:o})}const s=this._take("ring",()=>new Tt(this.ringGeo,new be({color:16752720,transparent:!0,side:me,depthWrite:!1,blending:di})));s.position.copy(t),s.rotation.x=-Math.PI/2,s.scale.setScalar(.6),s.material.opacity=.85,this.scene.add(s),this.active.push({kind:"ring",obj:s,life:.5,max:.5,grow:12*e})}damageNumber(t,e,i="#ffe2a8"){const s=Math.max(1,Math.round(e)),a=this._take("text",()=>new Ti(new pi({transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})));a.material.map=d_(s,i),a.material.needsUpdate=!0,a.position.copy(t),a.position.y+=.35,a.scale.set(1.1,.55,1),a.material.opacity=1,a.renderOrder=5,this.scene.add(a),this.active.push({kind:"text",obj:a,life:.75,max:.75,vel:new R((Math.random()-.5)*.7,2.1,(Math.random()-.5)*.7)})}pickup(t,e=16757575){const i=this._take("ring",()=>new Tt(this.ringGeo,new be({color:16752720,transparent:!0,side:me,depthWrite:!1,blending:di})));i.position.copy(t),i.rotation.x=-Math.PI/2,i.scale.setScalar(.35),i.material.color.setHex(e),i.material.opacity=.9,this.scene.add(i),this.active.push({kind:"ring",obj:i,life:.42,max:.42,grow:2.6})}update(t){for(let e=this.active.length-1;e>=0;e--){const i=this.active[e];i.life-=t;const s=qt(i.life/i.max,0,1);if(i.kind==="tracer")i.obj.material.opacity=s*.9;else if(i.kind==="flash"){i.obj.material.opacity=s;const a=i.scale*(.7+(1-s)*.6);i.obj.scale.setScalar(a)}else i.kind==="puff"?(i.obj.position.addScaledVector(i.vel,t),i.vel.multiplyScalar(1-t*3.2),i.obj.material.opacity=s*.75,i.obj.scale.setScalar(i.base+(1-s)*i.grow)):i.kind==="ring"?(i.obj.scale.setScalar(.4+(1-s)*i.grow),i.obj.material.opacity=s*.8):i.kind==="text"&&(i.obj.position.addScaledVector(i.vel,t),i.vel.y-=t*1.8,i.obj.material.opacity=s);i.life<=0&&(this._release(i.kind,i.obj),this.active.splice(e,1))}}clear(){for(const t of this.active)this._release(t.kind,t.obj);this.active.length=0}}const bi={box:new Ke(1,1,1),sphere:new Ss(1,14,10),cyl:new ke(1,1,1,10),cone:new mi(1,1,8),ring:new Nn(.46,.6,24)};function Yi(n,t={}){return new Gt({color:n,roughness:.82,metalness:.05,...t})}function Se(n,t,e,i,s,a,r,o){const l=new Tt(bi.box,t);return l.position.set(e,i,s),l.scale.set(a,r,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function p_(n,t,e){const i=Ci(512,128),s=i.getContext("2d");s.clearRect(0,0,512,128),s.fillStyle="rgba(4,10,15,.72)",s.beginPath(),s.roundRect(8,14,496,94,10),s.fill(),s.fillStyle=t,s.fillRect(8,14,8,94),s.font="700 40px Rajdhani, sans-serif",s.textAlign="left",s.textBaseline="middle",s.fillStyle="#eaf6ff",s.fillText(n.slice(0,14),30,52),s.font="600 22px Rajdhani, sans-serif",s.fillStyle=t,s.fillText(e,30,86);const a=new ti(i);return a.colorSpace=ve,a.anisotropy=4,a}class cl{constructor({scene:t,outfit:e,name:i="OPERATIVE",teamColor:s="#ff8a2b",isPlayer:a=!1,quality:r="high",level:o=1,simple:l=!1}){this.scene=t,this.outfit=e,this.name=i,this.teamColor=s,this.isPlayer=a,this.quality=r,this.level=o,this.simple=l,this.group=new Te,this.group.name="character_"+i,this.body=new Te,this.group.add(this.body),this.walkPhase=0,this.recoil=0,this.reloadProgress=0,this.reloading=!1,this.aiming=!1,this.crouch=!1,this.swimming=!1,this.dead=!1,this.deathTime=0,this.moveSpeed=0,this.aimPitch=0,this.shooting=!1,this.weaponMesh=null,this.weaponDef=null,this.attachments=[],this.armorValue=0,this.helmetLevel=0,this.backpackLevel=1,this._build(),this.setName(i,s),t.add(this.group)}_build(){const t=this.outfit;this.mats={primary:Yi(t.primary||"#2f6f8f"),secondary:Yi(t.secondary||"#152430"),accent:Yi(t.accent||"#ff8a2b",{metalness:.25}),skin:Yi(t.skinColor||t.skin||"#c98f6a",{roughness:.9}),hair:Yi(t.hairColor||t.hair||"#22201f",{roughness:.95}),dark:Yi(1449250,{roughness:.7,metalness:.2}),metal:Yi(4609116,{roughness:.5,metalness:.6}),boot:Yi(2238507,{roughness:.85}),vest:Yi(2831418,{roughness:.8,metalness:.1}),glow:new be({color:t.accent||"#ff8a2b"})},this.torso=new Te,this.torso.position.y=.92,this.body.add(this.torso),Se(this.torso,this.mats.primary,0,.32,0,.5,.62,.29),this.simple||(Se(this.torso,this.mats.vest,0,.34,.04,.44,.42,.3),Se(this.torso,this.mats.accent,0,.38,.2,.26,.06,.02),Se(this.torso,this.mats.secondary,0,.03,0,.46,.1,.28),Se(this.torso,this.mats.secondary,-.31,.54,0,.16,.18,.24),Se(this.torso,this.mats.secondary,.31,.54,0,.16,.18,.24)),this.backpack=new Te,this.backpack.position.set(0,.34,-.22),this.torso.add(this.backpack),Se(this.backpack,this.mats.secondary,0,0,-.05,.38,.44,.18),this.simple||Se(this.backpack,this.mats.accent,0,.16,-.15,.12,.05,.02),this.backpack.scale.set(1,1,1),this.headPivot=new Te,this.headPivot.position.set(0,.66,0),this.torso.add(this.headPivot);const e=new Tt(bi.sphere,this.mats.skin);if(e.scale.set(.17,.2,.17),e.position.y=.1,e.castShadow=!0,this.headPivot.add(e),Se(this.headPivot,this.mats.dark,0,.11,.15,.26,.07,.05),this.simple||Se(this.headPivot,this.mats.glow,0,.11,.178,.18,.022,.012),this.hairGroup=new Te,this.headPivot.add(this.hairGroup),this.simple||this._buildHair(t.hair||"short"),this.helmetMesh=new Te,!this.simple){const i=new Tt(bi.sphere,this.mats.metal);i.scale.set(.19,.18,.19),i.position.y=.14,this.helmetMesh.add(i),Se(this.helmetMesh,this.mats.dark,0,.11,.16,.28,.055,.04)}if(this.helmetMesh.visible=!1,this.headPivot.add(this.helmetMesh),this.armorMesh=new Te,this.simple||(Se(this.armorMesh,this.mats.metal,0,.33,.17,.38,.34,.06),Se(this.armorMesh,this.mats.accent,0,.44,.205,.16,.03,.01)),this.armorMesh.visible=!1,this.torso.add(this.armorMesh),this.armL=this._makeArm(-1),this.armR=this._makeArm(1),this.legL=this._makeLeg(-1),this.legR=this._makeLeg(1),this.weaponMount=new Te,this.weaponMount.position.set(.16,.3,.3),this.weaponMount.rotation.x=-.35,this.torso.add(this.weaponMount),!this.isPlayer){const i=new Tt(bi.ring,new be({color:this.teamColor,transparent:!0,opacity:.55,side:me,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.03,this.group.add(i),this.ring=i}}_buildHair(t){if(this.hairGroup.clear(),t==="bald")return;if(t==="helmet"){const i=new Tt(bi.sphere,this.mats.metal);i.scale.set(.185,.15,.185),i.position.y=.17,this.hairGroup.add(i);return}if(t==="mohawk"){Se(this.hairGroup,this.mats.hair,0,.25,0,.06,.13,.24);return}if(t==="bun"){const i=new Tt(bi.sphere,this.mats.hair);i.scale.set(.175,.12,.175),i.position.y=.2,this.hairGroup.add(i);const s=new Tt(bi.sphere,this.mats.hair);s.scale.set(.075,.075,.075),s.position.set(0,.18,-.16),this.hairGroup.add(s);return}if(t==="long"){const i=new Tt(bi.sphere,this.mats.hair);i.scale.set(.18,.14,.18),i.position.y=.19,this.hairGroup.add(i),Se(this.hairGroup,this.mats.hair,0,0,-.13,.24,.35,.08);return}const e=new Tt(bi.sphere,this.mats.hair);e.scale.set(.178,.11,.178),e.position.y=.2,this.hairGroup.add(e)}_makeArm(t){const e=new Te;e.position.set(t*.34,.54,0),this.torso.add(e);const i=new Te;return i.position.y=-.28,e.add(i),this.simple?Se(e,this.mats.primary,0,-.24,0,.15,.46,.16):(Se(e,this.mats.primary,0,-.14,0,.15,.28,.16),Se(i,this.mats.primary,0,-.14,0,.13,.28,.14),Se(i,this.mats.dark,0,-.29,.02,.14,.09,.16),Se(e,this.mats.secondary,0,-.01,0,.19,.12,.22)),{shoulder:e,elbow:i}}_makeLeg(t){const e=new Te;e.position.set(t*.16,.92,0),this.body.add(e);const i=new Te;return i.position.y=-.46,e.add(i),this.simple?(Se(e,this.mats.secondary,0,-.24,0,.17,.48,.19),Se(e,this.mats.boot,0,-.46,.04,.17,.1,.26)):(Se(e,this.mats.secondary,0,-.23,0,.17,.46,.19),Se(i,this.mats.primary,0,-.21,0,.15,.42,.17),Se(i,this.mats.boot,0,-.45,.04,.17,.12,.26)),{hip:e,knee:i}}setName(t,e=this.teamColor){if(this.name=t,this.teamColor=e,this.isPlayer)return;this.nameplate&&(this.group.remove(this.nameplate),this.nameplate.material.map?.dispose(),this.nameplate.material.dispose());const i=p_(t,e,this.teamLabel||"HOSTILE"),s=new pi({map:i,transparent:!0,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),a=new Ti(s);a.position.y=2.28,a.scale.set(2,.5,1),this.group.add(a),this.nameplate=a,this.healthBar||this._buildHealthBar()}_buildHealthBar(){const t=new pi({color:0,transparent:!0,opacity:.55,depthWrite:!1}),e=new Ti(t);e.scale.set(1.5,.1,1),e.position.y=2.03,this.group.add(e);const i=new pi({color:5564069,transparent:!0,opacity:.95,depthWrite:!1}),s=new Ti(i);s.center.set(0,.5),s.scale.set(1.44,.065,1),s.position.set(-.72,2.03,0),this.group.add(s),this.healthBar={bg:e,fill:s}}setHealth(t,e=100,i=0){this.healthBar||this._buildHealthBar();const s=qt(t/e,0,1);this.healthBar.fill.scale.x=1.44*s,this.healthBar.fill.material.color.set(s>.5?5564069:s>.25?16762967:16730955),this.healthBar.fill.visible=!this.dead,this.healthBar.bg.visible=!this.dead}setWeapon(t,e=[]){if(this.weaponDef=t,this.attachments=e,this.weaponMesh&&this.weaponMount.remove(this.weaponMesh),!t){this.weaponMesh=null;return}let i;if(this.simple){i=new Te;const s=new Gt({color:2962490,roughness:.5,metalness:.6}),a=new Gt({color:16747051,roughness:.5,metalness:.4}),r=new Tt(bi.box,s);r.scale.set(.08,.11,t.category==="pistol"?.32:.72),r.position.z=.18,i.add(r);const o=new Tt(bi.box,a);o.scale.set(.06,.05,.12),o.position.set(0,.08,.34),i.add(o),i.userData.muzzle=new R(0,.05,.55),i.userData.length=.6,i.userData.category=t.category}else i=e_(t,e),i.scale.setScalar(.92);this.weaponMount.add(i),this.weaponMesh=i}setArmor(t,e){this.armorValue=t,this.helmetLevel=e,this.armorMesh&&(this.armorMesh.visible=t>0),this.helmetMesh&&(this.helmetMesh.visible=e>0)}setBackpack(t){if(this.backpackLevel=t,this.backpack){const e=t>=3?1.3:t>=2?1.15:1;this.backpack.scale.set(e,e,e)}}setOutfit(t){this.outfit=t,this.mats.primary.color.set(t.primary),this.mats.secondary.color.set(t.secondary),this.mats.accent.color.set(t.accent),this.mats.skin.color.set(t.skinColor||t.skin||"#c98f6a"),this.mats.hair.color.set(t.hairColor||t.hair||"#22201f"),this._buildHair(t.hair||"short")}setPosition(t,e,i){this.group.position.set(t,e,i)}setYaw(t){this.group.rotation.y=t}getPosition(){return this.group.position}getChestPosition(t=new R){return t.set(this.group.position.x,this.group.position.y+1.28,this.group.position.z)}getHeadPosition(t=new R){return t.set(this.group.position.x,this.group.position.y+1.68,this.group.position.z)}getMuzzlePosition(t=new R){return this.weaponMesh?(this.weaponMesh.updateWorldMatrix(!0,!1),t.copy(this.weaponMesh.userData.muzzle),this.weaponMesh.localToWorld(t),t):this.getChestPosition(t)}getAimDirection(t=new R){if(this.weaponMesh?.updateWorldMatrix(!0,!1),!this.weaponMesh)return t.set(0,0,1);const e=new R().copy(this.weaponMesh.userData.muzzle),i=new R(0,0,this.weaponMesh.userData.muzzle.z+2);return this.weaponMesh.localToWorld(e),this.weaponMesh.localToWorld(i),t.copy(i).sub(e).normalize()}shootRecoil(t=1){this.recoil=Math.min(1.8,this.recoil+t),this.shooting=!0,this.shootTimer=.08}startReload(t){this.reloading=!0,this.reloadDuration=t,this.reloadProgress=0}cancelReload(){this.reloading=!1,this.reloadProgress=0}die(){this.dead=!0,this.deathTime=0,this.reloading=!1,this.nameplate&&(this.nameplate.visible=!1),this.healthBar&&(this.healthBar.bg.visible=!1,this.healthBar.fill.visible=!1),this.ring&&(this.ring.visible=!1)}revive(){this.dead=!1,this.deathTime=0,this.body.rotation.set(0,0,0),this.body.position.y=0,this.group.rotation.set(0,this.group.rotation.y,0),this.nameplate&&(this.nameplate.visible=!0),this.healthBar&&(this.healthBar.bg.visible=!0,this.healthBar.fill.visible=!0),this.ring&&(this.ring.visible=!0)}update(t,e){if(this.dead){this.deathTime+=t;const _=Math.min(1,this.deathTime*2.4);this.body.rotation.z=_*Math.PI/2,this.body.position.y=-_*.38,this.body.rotation.x=_*.2;return}this.shootTimer>0&&(this.shootTimer-=t,this.shootTimer<=0&&(this.shooting=!1)),this.recoil=he(this.recoil,0,12,t),this.reloading&&(this.reloadProgress=Math.min(1,this.reloadProgress+t/Math.max(.1,this.reloadDuration)),this.reloadProgress>=1&&(this.reloading=!1));const i=this.moveSpeed,s=qt(i/7.5,0,1);this.walkPhase+=t*(1.4+i*1.55);const a=Math.sin(this.walkPhase)*s*.72,r=Math.sin(e*1.7)*.012,o=this.crouch?1:0,l=this.swimming?1:0;this.body.position.y=he(this.body.position.y,o*-.3+l*-.15,12,t),this.torso.position.y=.92+r-o*.02,this.torso.rotation.x=he(this.torso.rotation.x,this.aiming?qt(-this.aimPitch,-.35,.35)*.5:l?-.4:0,10,t),this.headPivot.rotation.x=he(this.headPivot.rotation.x,this.aiming?qt(-this.aimPitch,-.5,.5)*.55:0,10,t);const c=l?Math.sin(this.walkPhase*1.8)*.5:a;this.legL.hip.rotation.x=c+o*.55,this.legR.hip.rotation.x=-c+o*.55,this.legL.knee.rotation.x=Math.max(0,-c)*.7+o*.9,this.legR.knee.rotation.x=Math.max(0,c)*.7+o*.9,l&&(this.legL.hip.rotation.x=Math.sin(this.walkPhase*1.8)*.7+.25,this.legR.hip.rotation.x=-Math.sin(this.walkPhase*1.8)*.7+.25,this.legL.knee.rotation.x=.3,this.legR.knee.rotation.x=.3),this.aiming;const h=this.reloading?Math.sin(this.reloadProgress*Math.PI):0;this.armL.shoulder.rotation.x=he(this.armL.shoulder.rotation.x,this.aiming?-1.18:-a*.5,12,t),this.armL.shoulder.rotation.z=he(this.armL.shoulder.rotation.z,this.aiming?-.28:-.06,12,t),this.armL.elbow.rotation.x=he(this.armL.elbow.rotation.x,this.aiming?-.5:-.1,12,t),this.armR.shoulder.rotation.x=he(this.armR.shoulder.rotation.x,this.aiming?-1.28:a*.5,12,t),this.armR.shoulder.rotation.z=he(this.armR.shoulder.rotation.z,this.aiming?.2:.06,12,t),this.armR.elbow.rotation.x=he(this.armR.elbow.rotation.x,this.aiming?-.42:-.12,12,t),h>.05&&(this.armL.shoulder.rotation.x=-1-h*.6,this.armL.shoulder.rotation.z=-.5,this.armL.elbow.rotation.x=-.8);const d=this.weaponMount,u=this.aiming?.07:.18,f=this.aiming?.36:.18,g=this.aiming?.34:.25;d.position.x=he(d.position.x,u,12,t),d.position.y=he(d.position.y,f-o*.08,12,t),d.position.z=he(d.position.z,g,12,t),d.rotation.x=he(d.rotation.x,this.aiming?qt(-this.aimPitch,-.5,.5):-.38,12,t),d.rotation.z=he(d.rotation.z,this.reloading?Math.sin(this.reloadProgress*Math.PI)*.55:0,12,t),d.rotation.y=he(d.rotation.y,this.reloading?.25:0,12,t),this.recoil>.01&&(d.position.z-=this.recoil*.05,d.rotation.x+=this.recoil*.06),this.ring&&(this.ring.material.opacity=.35+Math.sin(e*2.4)*.1)}dispose(){this.scene.remove(this.group),this.nameplate?.material?.map?.dispose(),this.nameplate?.material?.dispose?.(),this.healthBar?.bg.material?.dispose?.(),this.healthBar?.fill.material?.dispose?.();for(const t of Object.values(this.mats||{}))t.dispose?.()}}function ss(n,t,e,i,s,a,r,o,l=0){const c=new Tt(new Ke(a,r,o),t);return c.position.set(e,i,s),c.rotation.y=l,c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}class m_{constructor(t){this.renderer=t,this.scene=new No,this.camera=new ii(38,1,.1,4e3),this.orbit=.35,this.character=null,this._build()}_build(){const t=this.scene;this.sky=nu(t),t.fog=new Qs(11127252,70,1050),this.water=su(t),this.water.mesh.position.y=-.05;const e=new Gt({color:4086610,roughness:1,flatShading:!0}),i=new Gt({color:3099208,roughness:1,flatShading:!0}),s=new Gt({color:7044981,roughness:1,flatShading:!0});for(let N=0;N<26;N++){const V=N/26*Math.PI*2+.12,I=700+N%4*55,B=55+N*37%160,X=120+N*53%140,F=new mi(X,B,5+N%3),it=new Tt(F,N%5===0?s:N%3===0?i:e);it.position.set(Math.cos(V)*I,B*.5-14,Math.sin(V)*I),it.rotation.y=N*.7,it.scale.z=.5+N%3*.2,t.add(it)}const a=new Gt({color:4414052,roughness:.9});for(let N=0;N<18;N++){const V=-.9+N*.025,I=520+N%4*18,B=20+N*19%55,X=new Tt(new Ke(10+N%3*5,B,10),a);X.position.set(Math.cos(V)*I,B/2-2,Math.sin(V)*I),t.add(X)}const r=new Gt({color:2766140,roughness:.45,metalness:.7}),o=new Tt(new ke(5.2,5.8,.7,8),r);o.position.y=.2,o.receiveShadow=!0,o.castShadow=!0,t.add(o);const l=new Gt({color:1582123,roughness:.5,metalness:.5}),c=new Tt(new ke(5.05,5.05,.08,8),l);c.position.y=.58,t.add(c);const h=new Tt(new Nn(4.55,4.72,8),new be({color:16747051,transparent:!0,opacity:.85,side:me}));h.rotation.x=-Math.PI/2,h.rotation.z=Math.PI/8,h.position.y=.63,t.add(h);const d=new Tt(new Nn(3.9,3.94,64),new be({color:6544639,transparent:!0,opacity:.6,side:me}));d.rotation.x=-Math.PI/2,d.position.y=.64,t.add(d);const u=Un("BATTLE WORLD",{width:512,height:128,bg:"rgba(0,0,0,0)",fg:"rgba(234,246,255,.55)",accent:"#ff8a2b",font:"700 54px sans-serif",border:!1}),f=new be({map:u,transparent:!0,opacity:.35,depthWrite:!1}),g=new Tt(new xi(6,1.5),f);g.rotation.x=-Math.PI/2,g.position.set(0,.65,2.2),t.add(g);const _=new dc(16769200,380,40,.55,.5,1.2);_.position.set(7,12,6),_.target.position.set(0,1,0),_.castShadow=!0,_.shadow.mapSize.set(1024,1024),t.add(_,_.target);const p=new dc(6544639,300,35,.5,.6,1.4);p.position.set(-6,6,-7),p.target.position.set(0,1.2,0),t.add(p,p.target);const m=new fc(16747051,90,18,2);m.position.set(3,2.5,4),t.add(m);const v=new fc(6544639,55,12,2);v.position.set(0,.2,0),t.add(v);const E=120,M=new He,T=new Float32Array(E*3);for(let N=0;N<E;N++)T[N*3]=(Math.random()-.5)*22,T[N*3+1]=Math.random()*9,T[N*3+2]=(Math.random()-.5)*22;M.setAttribute("position",new Ri(T,3));const w=new Md(M,new Ah({color:16758890,size:.055,transparent:!0,opacity:.65,depthWrite:!1,blending:di}));t.add(w),this.dust=w;const x=new Gt({color:2503225,roughness:.6,metalness:.5});ss(t,x,-3.3,1.1,-.7,1.7,1.1,.9,.4),ss(t,new Gt({color:16747051,roughness:.5,metalness:.4}),-3.3,1.68,-.7,1.75,.06,.95,.4);const b=Un("ELITE",{width:256,height:512,bg:"rgba(4,10,16,.82)",fg:"#eaf6ff",accent:"#ff8a2b",font:"700 84px sans-serif",sub:"SURVIVAL",subFont:"600 32px sans-serif"}),U=new be({map:b,transparent:!0,side:me}),C=new Tt(new xi(2.2,4.4),U);C.position.set(-4.6,3.4,-1.6),C.rotation.y=.5,t.add(C),this.dropship=new Te;const L=new Gt({color:5134944,roughness:.6,metalness:.5});ss(this.dropship,L,0,0,0,7,1.4,1.6),ss(this.dropship,L,-2.5,.7,0,2.2,1.1,1.3),ss(this.dropship,L,3.5,-.2,0,3.2,.3,5.2),ss(this.dropship,new be({color:16747051}),-3.5,.2,0,.25,.25,.25),this.dropship.position.set(-120,64,-240),this.dropship.rotation.y=-.2,t.add(this.dropship),this.resize(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)}setCharacter(t,e,i=1){if(this.character){this.character.setOutfit(t),this.character.setName(e,t.accent);return}this.character=new cl({scene:this.scene,outfit:t,name:e,teamColor:t.accent,isPlayer:!0,quality:"high",level:i}),this.character.setPosition(.7,.66,0),this.character.setWeapon({id:"ar_vk47",name:"VK-47",category:"ar",rarity:"rare",damage:24,rpm:640,mag:30,reload:2,range:190,spread:.7,recoil:.8,auto:!0,pellets:1,zoom:1.4,mobility:.9},["scope_2x","ext_mag"]),this.character.aiming=!1}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}update(t,e){if(!this.character)return;this.orbit+=t*.075;const i=.4+Math.sin(this.orbit*.55)*.55,s=6.4,a=new R(.55,1.25,0);this.camera.position.set(a.x+Math.sin(i)*s,2.45+Math.sin(e*.32)*.1,a.z+Math.cos(i)*s),this.camera.lookAt(a.x,1.3,a.z);const r=Math.atan2(this.camera.position.x-this.character.group.position.x,this.camera.position.z-this.character.group.position.z);if(this.character.setYaw(r),this.character.moveSpeed=0,this.character.update(t,e),this.character.group.position.y=.66+Math.sin(e*1.4)*.012,this.water.mat.uniforms.uTime.value=e,this.dust.rotation.y=e*.012,this.dropship.position.x+=t*2.2,this.dropship.position.y=64+Math.sin(e*.3)*2,this.dropship.position.x>260&&(this.dropship.position.x=-260),this.sky.clouds)for(const o of this.sky.clouds)o.position.x+=o.userData.speed*t,o.position.x>1800&&(o.position.x=-1800)}render(){this.renderer.render(this.scene,this.camera)}}const g_={1:50,2:75,3:100},x_={1:8,2:12,3:16},Vc=100;class __{constructor(t,{name:e="NOVA-07",outfit:i,spawn:s,team:a=0}={}){this.game=t,this.name=e,this.outfit=i,this.team=a,this.isPlayer=!0,this.pos=new R(s.x,s.y,s.z),this.vy=0,this.yaw=s.yaw??0,this.pitch=0,this.radius=.42,this.height=1.8,this.health=Vc,this.maxHealth=Vc,this.armor=0,this.armorLevel=0,this.helmet=0,this.backpack=1,this.alive=!0,this.kills=0,this.damageDealt=0,this.shotsFired=0,this.shotsHit=0,this.weapons=[null,null,{def:Zs.melee_machete,mag:1,attachments:[]}],this.currentSlot=0,this.ammo={light:0,heavy:0,shells:0,sniper:0,pistol:60},this.items={medkit:1,bandage:2,grenade:1},this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.reloadTotal=1,this.healing=null,this.healTimer=0,this.healTotal=1,this.aiming=!1,this.crouching=!1,this.swimming=!1,this.sprinting=!1,this.onGround=!1,this.vehicle=null,this.walkPhase=0,this.stepTimer=0,this.grenadeCooldown=0,this.hurtFlash=0,this.lastDamageTime=-99,this.character=new cl({scene:t.scene,outfit:i,name:e,teamColor:i.accent||"#ff8a2b",isPlayer:!0,quality:t.quality,level:t.profile.level}),this.character.setPosition(this.pos.x,this.pos.y,this.pos.z),this.character.setYaw(this.yaw),this.giveWeapon("ps_sidekick",[],!0),this.setSlot(0),this.character.setArmor(0,0)}get weaponEntry(){return this.weapons[this.currentSlot]}get weapon(){return this.weaponEntry?.def||null}get stats(){return this.weaponEntry?lu(this.weaponEntry.def,this.weaponEntry.attachments):null}get eyeHeight(){return this.crouching?1.12:this.swimming?1.2:1.5}get maxItems(){return x_[this.backpack]||8}setSlot(t){if(t<0||t>2||t!==2&&!this.weapons[t])return;this.currentSlot=t,this.reloading=!1,this.reloadTimer=0;const e=this.weaponEntry;e&&(this.character.setWeapon(e.def,e.attachments),this.character.startReload(.01),this.character.reloading=!1)}swapWeapon(){const t=this.weapons[0]?0:-1,e=this.weapons[1]?1:-1;if(t===-1&&e===-1){this.setSlot(2);return}if(t===-1){this.setSlot(1);return}if(e===-1){this.setSlot(0);return}this.setSlot(this.currentSlot===0?1:0)}giveWeapon(t,e=[],i=!1){const s=Js(t);if(!s)return!1;let a=this.weapons[0]?this.weapons[1]?-1:1:0;return a===-1&&(a=this.currentSlot===1?1:0,this.dropWeapon(a)),this.weapons[a]={def:s,mag:s.mag,attachments:[...e]},i&&this.setSlot(a),!0}dropWeapon(t){const e=this.weapons[t];!e||t===2||(this.weapons[t]=null,this.currentSlot===t&&(this.currentSlot=2,this.character.setWeapon(Zs.melee_machete,[])),this.game.loot?.dropAt(this.pos.x,this.pos.y+.6,this.pos.z,{type:"weapon",weapon:e.def.id,rarity:e.def.rarity,attachments:[...e.attachments]},.5))}ammoFor(t=this.weaponEntry){if(!t)return 0;const e=t.def.ammo;return!e||e==="none"?1/0:this.ammo[e]||0}canPickup(t){const e=t.data;return e.type==="med"||e.type==="grenade"?this.items.medkit+this.items.bandage+this.items.grenade<this.maxItems:!0}pickup(t){if(!t||!t.active)return{ok:!1};const e=t.data;let i="",s=e.rarity||"common";switch(e.type){case"weapon":{const a=Js(e.weapon);let r=this.weapons[0]?this.weapons[1]?-1:1:0;r===-1&&(r=this.currentSlot===2?0:this.currentSlot,this.dropWeapon(r)),this.weapons[r]={def:a,mag:a.mag,attachments:[...e.attachments||[]]},this.setSlot(r),i=`PICKED UP ${a.name}`;break}case"ammo":{this.ammo[e.ammo]=(this.ammo[e.ammo]||0)+e.amount,i=`+${e.amount} ${e.ammo.toUpperCase()} AMMO`;break}case"armor":{if(e.level<=this.armorLevel)return{ok:!1,message:"BETTER ARMOR EQUIPPED"};this.armorLevel=e.level,this.armor=g_[e.level],this.character.setArmor(this.armor,this.helmet),i=`ARMOR LV${e.level} EQUIPPED`;break}case"helmet":{if(e.level<=this.helmet)return{ok:!1,message:"BETTER HELMET EQUIPPED"};this.helmet=e.level,this.character.setArmor(this.armor,this.helmet),i=`HELMET LV${e.level} EQUIPPED`;break}case"backpack":{if(e.level<=this.backpack)return{ok:!1,message:"BETTER PACK EQUIPPED"};this.backpack=e.level,this.character.setBackpack(e.level),i=`BACKPACK LV${e.level} EQUIPPED`;break}case"med":{if(!this.canPickup(t))return{ok:!1,message:"PACK FULL"};e.item==="medkit"?this.items.medkit++:this.items.bandage++,i=e.item==="medkit"?"MEDKIT ACQUIRED":"BANDAGE ACQUIRED";break}case"grenade":{if(!this.canPickup(t))return{ok:!1,message:"PACK FULL"};this.items.grenade+=e.amount,i="FRAG GRENADE ACQUIRED";break}case"attachment":{const a=this.weaponEntry;if(!a||a.def.category==="melee")return{ok:!1,message:"NO WEAPON FOR ATTACHMENT"};if(a.attachments.includes(e.attachment))return{ok:!1,message:"ALREADY ATTACHED"};a.attachments.push(e.attachment),this.character.setWeapon(a.def,a.attachments),i=`ATTACHED ${e.attachment.replace("_"," ").toUpperCase()}`;break}default:return{ok:!1}}return this.game.loot.remove(t),this.game.effects?.pickup(new R(t.x,t.y,t.z),e.type==="weapon"?16757575:6544639),this.game.audio.pickup(s),{ok:!0,message:i,rarity:s}}startReload(){if(this.currentSlot===2||this.reloading)return;const t=this.weaponEntry;if(!t)return;const e=this.stats;if(!(e.mag-t.mag<=0)){if(this.ammoFor(t)<=0){this.game.ui?.toast("NO RESERVE AMMO","warn");return}this.reloading=!0,this.reloadTotal=e.reload,this.reloadTimer=e.reload,this.character.startReload(e.reload),this.game.audio.reload()}}finishReload(){const t=this.weaponEntry;if(!t)return;const e=this.stats,i=t.def.ammo;if(i&&i!=="none"){const s=e.mag-t.mag,a=Math.min(s,this.ammo[i]||0);t.mag+=a,this.ammo[i]-=a}else t.mag=e.mag;this.reloading=!1,this.reloadTimer=0,this.character.reloading=!1}tryFire(){if(!this.alive||this.vehicle||this.reloading||this.healing||this.fireTimer>0)return;const t=this.weaponEntry;if(!t)return;const e=t.def,i=this.stats;if(this.currentSlot===2||e.category==="melee"){this.fireTimer=60/e.rpm,this.character.shootRecoil(1),this.game.audio.gunshot("melee",.5),this.game.meleeAttack(this,i.damage,i.range);return}if(t.mag<=0){this.game.audio.dryFire(),this.fireTimer=.25,this.startReload();return}if(this.swimming){this.game.ui?.toast("CANNOT FIRE WHILE SWIMMING","warn"),this.fireTimer=.4;return}t.mag--,this.fireTimer=60/e.rpm,this.shotsFired++,this.character.shootRecoil(i.recoil);const s=this.character.getMuzzlePosition(new R),a=this.getAimDirection(new R),r=Math.hypot(this.velocityX||0,this.velocityZ||0)>1;let o=i.spread*(this.aiming?.32:1)*(this.crouching?.75:1)*(r?1.55:1)*(this.onGround?1:1.5);e.category==="sniper"&&this.aiming&&(o*=.3);const l=e.pellets||1;for(let c=0;c<l;c++){const h=this._spreadDirection(a,o);this.game.playerShoot(this,s,h,i)}this.game.effects.muzzle(s,e.category==="sniper"?1.4:1),this.game.audio.gunshot(e.category,this.aiming?.7:1),this.pitch=qt(this.pitch+i.recoil*.012*(this.aiming?.7:1),-1.2,1.2),this.game.cameraShake=Math.min(.5,(this.game.cameraShake||0)+i.recoil*.05),t.mag<=0&&setTimeout(()=>{this.alive&&this.weaponEntry===t&&t.mag===0&&this.startReload()},220)}_spreadDirection(t,e){const i=t.clone();if(e<=.001)return i;const s=e*Math.PI/180,a=Math.sqrt(Math.random())*s,r=Math.random()*Math.PI*2,o=new R().crossVectors(i,new R(0,1,0)).normalize();o.lengthSq()<.001&&o.set(1,0,0);const l=new R().crossVectors(o,i).normalize();return i.addScaledVector(o,Math.cos(r)*a).addScaledVector(l,Math.sin(r)*a).normalize(),i}startHeal(t=null){if(this.healing||!this.alive)return;if(this.health>=this.maxHealth){this.game.ui?.toast("HEALTH ALREADY FULL","warn");return}let e=null,i=0,s=0;if(t&&this.items[t]>0?e=t:this.items.medkit>0?e="medkit":this.items.bandage>0&&(e="bandage"),e==="medkit"?(i=65,s=3.4):e==="bandage"&&(i=28,s=1.7),!e){this.game.ui?.toast("NO MEDICAL SUPPLIES","warn");return}this.healing=e,this.healTimer=s,this.healTotal=s,this.healAmount=i,this.game.audio.heal(),this.character.cancelReload()}useMedical(t){this.startHeal(t)}dropItem(t){return!this.items[t]||this.items[t]<=0?!1:(this.items[t]--,t==="grenade"?this.game.loot?.dropAt(this.pos.x,this.pos.y+.5,this.pos.z,{type:"grenade",amount:1},.5):this.game.loot?.dropAt(this.pos.x,this.pos.y+.5,this.pos.z,{type:"med",item:t},.5),!0)}updateHeal(t){this.healing&&(this.healTimer-=t,this.healTimer<=0&&(this.items[this.healing]>0&&this.items[this.healing]--,this.health=Math.min(this.maxHealth,this.health+this.healAmount),this.healing=null,this.healTimer=0,this.game.ui?.toast(`+${Math.round(this.healAmount)} HEALTH`,"good")))}throwGrenade(){!this.alive||this.items.grenade<=0||this.grenadeCooldown>0||this.vehicle||(this.items.grenade--,this.grenadeCooldown=1.2,this.game.audio.throwGrenade(),this.game.throwGrenade(this))}getAimDirection(t=new R){const e=Math.cos(this.pitch);return t.set(Math.sin(this.yaw)*e,Math.sin(this.pitch),Math.cos(this.yaw)*e).normalize()}getEyePosition(t=new R){return t.set(this.pos.x,this.pos.y+this.eyeHeight,this.pos.z)}update(t,e){if(this.fireTimer=Math.max(0,this.fireTimer-t),this.grenadeCooldown=Math.max(0,this.grenadeCooldown-t),!this.alive){this.character.update(t,e);return}const i=this.game.input;if(!this.game.paused&&this.game.state==="match"){const s=i.consumeLook();this.yaw-=s.x,this.pitch=qt(this.pitch-s.y,-1.15,1.15),this.aiming=i.isDown("aim")&&!this.sprinting&&this.currentSlot!==2,this.crouching=i.isDown("crouch")&&!this.swimming,i.wasPressed("weapon1")&&this.setSlot(0),i.wasPressed("weapon2")&&this.setSlot(1),i.wasPressed("weapon3")&&this.setSlot(2),i.wasPressed("swap")&&this.swapWeapon(),i.wasPressed("reload")&&this.startReload(),i.wasPressed("med")&&this.startHeal(),i.wasPressed("grenade")&&this.throwGrenade();const a=i.wasPressed("fire"),r=i.isDown("fire");this.weapon&&(a||r&&this.weapon.auto)&&this.tryFire(),a&&this.healing&&(this.healing=null,this.healTimer=0)}else this.aiming=!1,this.crouching=!1;if(this.updateHeal(t),this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0&&this.finishReload()),this.vehicle){this.pos.copy(this.vehicle.pos),this.character.group.visible=!1,this.character.update(t,e);return}this.character.group.visible=!0,this._move(t),this.character.setPosition(this.pos.x,this.pos.y,this.pos.z),this.character.setYaw(this.yaw),this.character.moveSpeed=Math.hypot(this.velocityX||0,this.velocityZ||0),this.character.aiming=this.aiming,this.character.crouch=this.crouching,this.character.swimming=this.swimming,this.character.aimPitch=this.pitch,this.character.update(t,e)}_move(t){const e=this.game.input;let i=0,s=0;this.game.state==="match"&&!this.game.paused&&(i=e.move.x,s=e.move.y);const a=Math.hypot(i,s);a>1&&(i/=a,s/=a);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),l=-Math.cos(this.yaw),c=Math.sin(this.yaw);let h=r*-s+l*i,d=o*-s+c*i;const u=this.game.world.isWaterAt(this.pos.x,this.pos.z)&&this.pos.y<Ui+.2;this.swimming=u&&this.pos.y<Ui-.3;const f=this.game.input.isDown("sprint")||this.game.settings.autoSprint;this.sprinting=f&&!this.aiming&&!this.crouching&&!this.swimming&&s<-.2;let g=this.swimming?2.7:this.crouching?2.4:this.aiming?2.9:this.sprinting?7.2:4.6;this.weapon&&(g*=qt(this.weapon.mobility||1,.6,1.3)),this.healing&&(g*=.55);let _=null;for(const b of this.game.world.ladders)if(Math.hypot(this.pos.x-b.x,this.pos.z-b.z)<(b.radius||1.8)&&this.pos.y>b.bottom-1&&this.pos.y<b.top+1){_=b;break}_&&s<-.1?(this.vy=3.6,this.onGround=!1):this.swimming||(this.vy-=18*t);const p=h*g,m=d*g;this.velocityX=he(this.velocityX||0,p,this.swimming?4:12,t),this.velocityZ=he(this.velocityZ||0,m,this.swimming?4:12,t);let v=this.pos.x+this.velocityX*t,E=this.pos.z+this.velocityZ*t;const M=this.game.world.resolveCollision(v,E,this.radius,this.pos.y,this.height);v=M.x,E=M.z;const T=Math.hypot(v,E),w=iu-8;if(T>w&&(v=v/T*w,E=E/T*w),this.pos.x=v,this.pos.z=E,this.swimming)this.vy=0,this.pos.y=he(this.pos.y,Ui-1.05+Math.sin(performance.now()*.002)*.06,5,t),this.onGround=!1;else{this.pos.y+=this.vy*t;const b=this.game.world.groundHeight(this.pos.x,this.pos.z);this.pos.y<=b?(this.pos.y=b,this.vy=0,this.onGround=!0):this.onGround=!1,this.onGround&&this.game.input.wasPressed("jump")&&(this.vy=6.4,this.onGround=!1,this.game.audio.footstep("grass"))}Math.hypot(this.velocityX,this.velocityZ)>.6&&this.onGround&&(this.stepTimer-=t,this.stepTimer<=0&&(this.game.audio.footstep(this.swimming?"water":"grass"),this.stepTimer=this.sprinting?.3:.45))}takeDamage(t,e=null,i=!1){if(!this.alive||this.game.state!=="match")return;let s=t;if(i&&this.helmet>0&&(s*=.68),this.armor>0){const a=Math.min(this.armor,s*.62);this.armor-=a,s-=a,this.armor<=.01&&(this.armor=0,this.armorLevel=0,this.character.setArmor(0,this.helmet))}this.health-=s,this.lastDamageTime=this.game.matchTime,this.hurtFlash=1,this.game.audio.damage(),this.game.onPlayerHurt(s,e,i),this.health<=0&&(this.health=0,this.die(e))}die(t=null){this.alive&&(this.alive=!1,this.health=0,this.healing=null,this.reloading=!1,this.character.die(),this.game.onPlayerDeath(t))}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}getHudState(){const t=this.weaponEntry,e=t?this.stats:null;return{health:this.health,armor:this.armor,helmet:this.helmet,backpack:this.backpack,weaponName:t?t.def.name:"UNARMED",category:t?t.def.category:"",mag:t?t.mag:0,magSize:e?e.mag:0,reserve:t?this.ammoFor(t):0,ammoType:t?t.def.ammo:"",auto:t?t.def.auto:!1,reloading:this.reloading,reloadProgress:this.reloading?1-this.reloadTimer/Math.max(.01,this.reloadTotal):0,healing:this.healing,healProgress:this.healing?1-this.healTimer/Math.max(.01,this.healTotal):0,swimming:this.swimming,crouching:this.crouching,sprinting:this.sprinting,aiming:this.aiming,vehicle:!!this.vehicle}}dispose(){this.character.dispose()}}const Wc={recruit:{accuracy:.5,reaction:.95,aggression:.35,damage:.72,sight:62,healChance:.5},veteran:{accuracy:.7,reaction:.55,aggression:.65,damage:.9,sight:78,healChance:.72},elite:{accuracy:.85,reaction:.32,aggression:.88,damage:1,sight:92,healChance:.88}},Xc=[{primary:"#3b3f43",secondary:"#16181b",accent:"#ff5a5a"},{primary:"#3d5c3a",secondary:"#1c2a1b",accent:"#a9d66b"},{primary:"#7c2429",secondary:"#241012",accent:"#ff8a2b"},{primary:"#46356e",secondary:"#191226",accent:"#b78bff"},{primary:"#2f6f8f",secondary:"#152430",accent:"#63dcff"},{primary:"#9c7427",secondary:"#2b2113",accent:"#ffd166"},{primary:"#c7dbe3",secondary:"#3b5361",accent:"#9fdcff"},{primary:"#1f6f7a",secondary:"#102a33",accent:"#ff7ad9"}];class v_{constructor(t,{spawn:e,team:i=1,name:s,skill:a="veteran",index:r=0}){this.game=t,this.team=i,this.index=r,this.name=s||gi(Math.random,Go)+"-"+String(10+r),this.skillName=a,this.skill=Wc[a]||Wc.veteran,this.pos=new R(e.x,e.y,e.z),this.yaw=e.yaw??Math.random()*Math.PI*2,this.health=100,this.armor=Qi(Math.random,0,2)===2?50:0,this.armorLevel=this.armor>0?1:0,this.helmet=Math.random()>.7?1:0,this.alive=!0,this.state="loot",this.target=null,this.targetScan=0,this.dest=null,this.lootTarget=null,this.thinkTimer=Math.random()*.4,this.fireTimer=.5+Math.random(),this.reactionTimer=.4+Math.random()*this.skill.reaction,this.reloading=!1,this.reloadTimer=0,this.healTimer=0,this.medkits=Qi(Math.random,1,2),this.stuckTimer=0,this.lastPos=this.pos.clone(),this.deadTime=0,this.damageTaken=0,this.velocityX=0,this.velocityZ=0,this.walkPhase=Math.random()*Ei;const o=Xc[r%Xc.length],l=gi(Math.random,xn);this.outfit={primary:o.primary,secondary:o.secondary,accent:o.accent,skinColor:l.skin,hairColor:l.hair,hair:gi(Math.random,["short","mohawk","bun","long","bald","helmet"])},this.weapon=gi(Math.random,ja),this.mag=this.weapon.mag,this.reserve=150,this.character=new cl({scene:t.scene,outfit:this.outfit,name:this.name,teamColor:t.teamColor(this.team),isPlayer:!1,quality:t.quality,simple:!0}),this.character.teamLabel=t.teamLabel(this.team),this.character.setName(this.name,t.teamColor(this.team)),this.character.setWeapon(this.weapon,[]),this.character.setArmor(this.armor,this.helmet),this.character.setPosition(this.pos.x,this.pos.y,this.pos.z),this.character.setYaw(this.yaw),this.character.setHealth(this.health,100,this.armor)}get stats(){return lu(this.weapon,[])}update(t,e){if(!this.alive){this.deadTime+=t,this.character.update(t,e);return}this.fireTimer=Math.max(0,this.fireTimer-t),this.reactionTimer=Math.max(0,this.reactionTimer-t),this.thinkTimer-=t;const i=this.game.zone;if(!(i&&i.isOutside(this.pos.x,this.pos.z)&&(this.takeDamage(i.damagePerSecond*t,null,!1,!0),!this.alive))){if(this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0&&(this.mag=this.stats.mag,this.reserve-=this.stats.mag,this.reloading=!1,this.character.reloading=!1)),this.healTimer>0&&(this.healTimer-=t,this.healTimer<=0&&(this.health=Math.min(100,this.health+42),this.medkits--,this.character.setHealth(this.health,100,this.armor),this.character.cancelReload())),this.thinkTimer<=0&&(this.think(),this.thinkTimer=.28+Math.random()*.25),this._move(t),this.state==="fight"&&this.target&&this.target.alive){const s=this.target.pos.x-this.pos.x,a=this.target.pos.z-this.pos.z,r=Math.hypot(s,a);this.yaw=Oc(this.yaw,Math.atan2(s,a),9,t),this.character.aiming=!0,this.character.aimPitch=Math.atan2(this.target.pos.y+1.2-(this.pos.y+1.3),r),this.reactionTimer<=0&&this.fireTimer<=0&&!this.reloading&&this.healTimer<=0&&r<this.stats.range&&this.game.world.hasLineOfSight(this.pos.x,this.pos.y+1.35,this.pos.z,this.target.pos.x,this.target.pos.y+1.15,this.target.pos.z)&&this.shoot(r)}else this.character.aiming=!1;this.character.setPosition(this.pos.x,this.pos.y,this.pos.z),this.character.setYaw(this.yaw),this.character.moveSpeed=Math.hypot(this.velocityX,this.velocityZ),this.character.update(t,e)}}think(){const t=this.game,e=t.zone;if(this.healTimer>0||!e)return;const i=e.getState(),s=e.isOutside(this.pos.x,this.pos.z),a=e.distanceOutside(this.pos.x,this.pos.z)>-14;if(s||a&&i.shrinking){this.state="rotate",this.target=null,this.dest=this._zonePoint(.55);return}if(this.targetScan-=.3,this.targetScan<=0&&(this.targetScan=.45+Math.random()*.3,this.target=t.findBotTarget(this)),this.target&&this.target.alive&&ui(this.pos.x,this.pos.z,this.target.pos.x,this.target.pos.z)<this.skill.sight&&t.world.hasLineOfSight(this.pos.x,this.pos.y+1.4,this.pos.z,this.target.pos.x,this.target.pos.y+1.1,this.target.pos.z)){this.state="fight";return}if(this.health<52&&this.medkits>0&&Math.random()<this.skill.healChance){this.state="heal",this.healTimer=2.6,this.target=null,this.dest=null,this.character.startReload(2.6);return}const r=t.loot.nearest(this.pos.x,this.pos.y,this.pos.z,34);if(r&&(this._wantsLoot(r)||this.state!=="loot")){this.lootTarget=r,this.state="loot",this.dest={x:r.x,z:r.z},this.target=null;return}(!this.dest||ui(this.pos.x,this.pos.z,this.dest.x,this.dest.z)<3)&&(this.dest=this._zonePoint(.62)),this.state="rotate",this.target=null}_wantsLoot(t){const e=t.data;if(e.type==="weapon"){const i=Js(e.weapon);if(!i)return!1;const s={common:0,rare:1,epic:2,legendary:3};return(s[i.rarity]||0)>(s[this.weapon.rarity]||0)||e.weapon===this.weapon.id}return e.type==="armor"?e.level>this.armorLevel:e.type==="helmet"?e.level>this.helmet:e.type==="med"?this.medkits<3:e.type==="ammo"}_zonePoint(t=.6){const e=this.game.zone,i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*Math.max(6,e.radius*t);return{x:e.center.x+Math.cos(i)*s,z:e.center.y+Math.sin(i)*s}}_move(t){if(this.healTimer>0){this.velocityX=he(this.velocityX,0,10,t),this.velocityZ=he(this.velocityZ,0,10,t),this._integrate(t);return}let e=null,i=null;if(this.state==="fight"&&this.target&&this.target.alive){const l=ui(this.pos.x,this.pos.z,this.target.pos.x,this.target.pos.z),c=this.weapon.category==="shotgun"?7:this.weapon.category==="sniper"?42:this.weapon.category==="smg"?14:26,h=(this.target.pos.x-this.pos.x)/(l||1),d=(this.target.pos.z-this.pos.z)/(l||1);if(l>c+5)e=this.pos.x+h*12,i=this.pos.z+d*12;else if(l<c-5)e=this.pos.x-h*10,i=this.pos.z-d*10;else{const u=Math.sin(this.game.matchTime*1.4+this.index)*8;e=this.pos.x-d*u,i=this.pos.z+h*u}}else this.state==="loot"&&this.lootTarget?.active?(e=this.lootTarget.x,i=this.lootTarget.z,ui(this.pos.x,this.pos.z,e,i)<1.6&&(this.game.botPickup(this,this.lootTarget),this.lootTarget=null,this.dest=null,this.state="rotate")):this.dest&&(e=this.dest.x,i=this.dest.z,ui(this.pos.x,this.pos.z,e,i)<2&&(this.dest=null));let s=0,a=0;if(e!==null){const l=e-this.pos.x,c=i-this.pos.z,h=Math.hypot(l,c);h>.2&&(s=l/h,a=c/h)}let r=this.state==="fight"?3.4:4.9;this.state==="rotate"&&(r=6.1),this.state==="loot"&&(r=5.2);const o=this.game.world.isWaterAt(this.pos.x,this.pos.z)&&this.pos.y<Ui+.2;o&&(r*=.55),this.velocityX=he(this.velocityX,s*r,7,t),this.velocityZ=he(this.velocityZ,a*r,7,t),this.state!=="fight"&&(s||a)&&(this.yaw=Oc(this.yaw,Math.atan2(s,a),5,t)),this._integrate(t),o&&(this.pos.y=he(this.pos.y,Ui-1.1,5,t))}_integrate(t){let e=this.pos.x+this.velocityX*t,i=this.pos.z+this.velocityZ*t;const s=this.game.world.resolveCollision(e,i,.42,this.pos.y,1.8);e=s.x,i=s.z,this.pos.x=e,this.pos.z=i;const a=this.game.world.groundHeight(this.pos.x,this.pos.z);this.pos.y=a,ui(this.pos.x,this.pos.z,this.lastPos.x,this.lastPos.z)<.01?(this.stuckTimer+=t,this.stuckTimer>1.2&&(this.stuckTimer=0,this.dest=this._zonePoint(.7),this.lastPos.copy(this.pos))):(this.stuckTimer=0,this.lastPos.copy(this.pos))}shoot(t){const e=this.stats;if(this.fireTimer=60/e.rpm*(this.weapon.auto?1:1.25),this.mag<=0){this.startReload();return}this.mag--;const i=this.target;if(!i||!i.alive)return;const s=this.character.getMuzzlePosition(new R),r=new R(i.pos.x,i.pos.y+(Math.random()>.86?1.55:1.15),i.pos.z).sub(s).normalize(),o=(1-this.skill.accuracy)*qt(.035+t*9e-4,.03,.16);r.x+=(Math.random()-.5)*o*2,r.y+=(Math.random()-.5)*o*1.2,r.z+=(Math.random()-.5)*o*2,r.normalize(),this.game.effects.muzzle(s,.85),ui(this.game.player.pos.x,this.game.player.pos.z,this.pos.x,this.pos.z)<70&&this.game.audio.gunshot(this.weapon.category,.55);for(let l=0;l<(this.weapon.pellets||1);l++){const c=r.clone();(this.weapon.pellets||1)>1&&(c.x+=(Math.random()-.5)*.08,c.y+=(Math.random()-.5)*.05,c.z+=(Math.random()-.5)*.08,c.normalize()),this.game.resolveShot(s,c,e.range,e.damage*this.skill.damage,this)}this.mag<=0&&this.startReload()}startReload(){this.reloading||(this.reloading=!0,this.reloadTimer=this.stats.reload,this.character.startReload(this.stats.reload))}takeDamage(t,e=null,i=!1,s=!1){if(!this.alive)return;let a=t;if(i&&this.helmet>0&&(a*=.7),this.armor>0){const r=Math.min(this.armor,a*.6);this.armor-=r,a-=r,this.armor<=.01&&(this.armor=0,this.armorLevel=0)}this.health-=a,this.damageTaken+=a,this.character.setHealth(this.health,100,this.armor),s||(this.game.effects.blood(new R(this.pos.x,this.pos.y+1.2,this.pos.z)),e===this.game.player&&this.game.effects.damageNumber(new R(this.pos.x,this.pos.y+1.5,this.pos.z),a,i?"#ff5a5a":"#ffe2a8"),this.game.audio.hit(i)),this.health<=0?(this.health=0,this.die(e)):!this.target&&e&&(this.target=e,this.state="fight",this.reactionTimer=this.skill.reaction*.5)}die(t=null){this.alive&&(this.alive=!1,this.deadTime=0,this.character.die(),this.game.onBotDeath(this,t))}dispose(){this.character.dispose()}}const qc=new Gt({color:7100986,roughness:.62,metalness:.35}),Cn=new Gt({color:2764595,roughness:.5,metalness:.6}),y_=new Gt({color:2238508,roughness:.9}),Na=new be({color:16765578}),M_=new Gt({color:1382426,roughness:.95});function Si(n,t,e,i,s,a,r,o){const l=new Tt(new Ke(a,r,o),t);return l.position.set(e,i,s),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}class S_{constructor(t,e){this.game=t,this.pos=new R(e.x,e.y,e.z),this.spawn={...e},this.yaw=e.rot||0,this.speed=0,this.health=320,this.maxHealth=320,this.occupied=!1,this.driver=null,this.wheelSpin=0,this.roll=0,this.runoverCooldown=0,this.destroyed=!1,this.group=new Te,this._build(),this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,t.scene.add(this.group)}_build(){const t=this.group;Si(t,qc,0,.62,0,1.7,.42,2.9),Si(t,qc,0,.9,-.35,1.5,.28,1.5),Si(t,Cn,0,1.05,-.9,1.5,.34,.5),Si(t,Cn,0,1.22,-.4,.12,.5,.12),Si(t,Cn,.62,1.22,-.4,.12,.5,.12),Si(t,Cn,-.62,1.22,-.4,.12,.5,.12),Si(t,Cn,0,1.46,-.4,1.5,.12,.14),Si(t,y_,0,.9,.15,1.3,.32,.7),Si(t,Cn,0,.95,1.42,1.7,.3,.3);const e=Si(t,Na,-.55,.78,1.5,.34,.2,.08),i=Si(t,Na,.55,.78,1.5,.34,.2,.08);e.material=Na,i.material=Na,this.wheels=[];const s=new ke(.46,.46,.34,12);s.rotateZ(Math.PI/2);for(const r of[-.92,.92])for(const o of[-1,1.05]){const l=new Tt(s,M_);l.position.set(r,.46,o),l.castShadow=!0,t.add(l),this.wheels.push(l)}const a=new Tt(new ke(.06,.08,.5,6),Cn);a.position.set(-.5,.85,-1.5),a.rotation.x=Math.PI/2,t.add(a)}get forward(){return new R(Math.sin(this.yaw),0,Math.cos(this.yaw))}enter(t){return this.occupied||this.destroyed?!1:(this.occupied=!0,this.driver=t,t.vehicle=this,t.character.group.visible=!1,this.game.ui?.toast("VEHICLE ACQUIRED · DRIVE","good"),this.game.audio.pickup("rare"),!0)}exit(){if(!this.occupied)return;const t=this.driver,e=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this.pos.x+e.x*2.2,s=this.pos.z+e.z*2.2;t.pos.set(i,this.game.world.groundHeight(i,s),s),t.vehicle=null,t.character.group.visible=!0,t.vy=0,this.occupied=!1,this.driver=null,this.speed=0}takeDamage(t){this.health-=t,this.health<=0&&!this.destroyed&&this.explode()}explode(){if(this.destroyed=!0,this.game.effects.explosion(this.pos.clone().add(new R(0,1,0)),1.4),this.game.audio.explosion(),this.driver){const t=this.driver;this.exit(),t.takeDamage(55,null)}this.game.explode(this.pos.clone().add(new R(0,.8,0)),6,65,null),this.group.visible=!1}reset(){this.pos.set(this.spawn.x,this.spawn.y,this.spawn.z),this.yaw=this.spawn.rot||0,this.speed=0,this.health=this.maxHealth,this.destroyed=!1,this.group.visible=!0,this.occupied=!1,this.driver=null,this.group.position.copy(this.pos),this.group.rotation.y=this.yaw}update(t,e){if(!this.destroyed){if(this.runoverCooldown=Math.max(0,this.runoverCooldown-t),this.occupied&&this.driver){const i=this.game.input,s=this.game.state==="match"&&!this.game.paused?-i.move.y:0,a=this.game.state==="match"&&!this.game.paused?i.move.x:0,r=17,o=s>0?r:s<0?-6.5:0;this.speed=he(this.speed,o,s!==0?1.7:2.4,t),Math.abs(this.speed)>.4&&(this.yaw-=a*t*1.5*qt(Math.abs(this.speed)/8,.25,1.4));const l=Math.sin(this.yaw),c=Math.cos(this.yaw);let h=this.pos.x+l*this.speed*t,d=this.pos.z+c*this.speed*t;const u=this.game.world.resolveCollision(h,d,1.5,this.pos.y+.4,2.2),f=Math.abs(u.x-h)+Math.abs(u.z-d)>.05;this.pos.x=u.x,this.pos.z=u.z,f&&(Math.abs(this.speed)>7&&(this.takeDamage(Math.abs(this.speed)*1.8),this.game.audio.footstep("metal")),this.speed*=.35);const g=this.game.world.groundHeight(this.pos.x,this.pos.z);this.pos.y=he(this.pos.y,g,12,t),this.game.world.isWaterAt(this.pos.x,this.pos.z)&&(this.speed=he(this.speed,0,4,t)),this.driver.pos.copy(this.pos),this.wheelSpin+=this.speed*t*1.6,this.roll=he(this.roll,-a*qt(this.speed/r,-1,1)*.09,6,t),this.group.rotation.set(0,this.yaw,0),this.group.rotation.z=this.roll;for(const _ of this.wheels)_.rotation.x=this.wheelSpin;if(Math.abs(this.speed)>5&&this.runoverCooldown<=0){for(const _ of this.game.bots)if(_.alive&&this.game.isEnemy(this.driver,_)&&ui(_.pos.x,_.pos.z,this.pos.x,this.pos.z)<2.1){_.takeDamage(42+Math.abs(this.speed)*2.5,this.driver),this.runoverCooldown=.5,this.game.cameraShake=.3;break}}}else this.speed=he(this.speed,0,3,t);this.group.position.copy(this.pos),this.group.position.y+=Math.sin(e*8+this.pos.x)*.008}}}const Yc=["#54e6a5","#ff6b6b","#ffb347","#b78bff","#63dcff","#ff7ad9","#ffd166"],as=()=>new Promise(n=>requestAnimationFrame(()=>n())),Ua=n=>new Promise(t=>setTimeout(t,n));class b_{constructor({renderer:t,canvas:e,profile:i,audio:s,input:a}){this.renderer=t,this.canvas=e,this.profile=i,this.settings=i.settings,this.audio=s,this.input=a,this.ui=null,this.state="boot",this.mode="solo",this.quality=this.settings.quality||"high",this.scene=new No,this.camera=new ii(70,1,.08,3200),this.camera.position.set(0,6,12),this.lobby=null,this.world=null,this.worldScene=null,this.loot=null,this.zone=null,this.effects=null,this.vehicles=[],this.player=null,this.bots=[],this.grenades=[],this.matchTime=0,this.matchStarted=!1,this.paused=!1,this.spectating=!1,this.spectateTarget=null,this.spectateIndex=0,this.cameraShake=0,this.fov=70,this.interactTarget=null,this.teamSize=1,this.placement=null,this.resultShown=!1,this.hudTimer=0,this.zoneTick=0,this.lastHudState=null,this.startedAt=0,this.stats={kills:0,damage:0},this._seed=1337}async prepare(){const t=this.ui;t?.setLoading(6,"BOOTING RENDERER"),await as(),this.applySettings(!1),this.lobby=new m_(this.renderer),this.lobby.setCharacter(ds(this.profile),this.profile.name,this.profile.level),this.lobby.resize(this.canvas.clientWidth,this.canvas.clientHeight),t?.setLoading(28,"SCULPTING ISLAND OF ASH"),await as(),await Ua(30),this.worldScene=new No,this.scene=this.worldScene,this.world=new Qx(this.worldScene,this.quality,this._seed),t?.setLoading(62,"RAISING LANDMARKS"),await as(),await Ua(30),this.effects=new f_(this.worldScene,this.quality),this.loot=new l_(this.worldScene,this.world,this._seed),this.zone=new c_(this.worldScene,this._seed),this.zone.onPhase=(e,i)=>this.onZonePhase(e,i),this.vehicles=this.world.vehicleSpawns.map(e=>new S_(this,e)),t?.setLoading(84,"PLACING SUPPLY DROPS"),await as(),await Ua(30),this.loot.spawnInitial(),t?.setLoading(100,"ALL SYSTEMS READY"),await Ua(220),this.showLobby()}applySettings(t=!1){const e=this.settings;this.quality=e.quality||"high";const i=qt((e.renderScale||100)/100,.5,1.5),s=Math.min(window.devicePixelRatio||1,this.quality==="low"?1:2);this.renderer.setPixelRatio(qt(s*i,.5,2)),this.renderer.shadowMap.enabled=!!e.shadows&&this.quality!=="low",this.renderer.shadowMap.type=Wo,this.world?.sky?.sun&&(this.world.sky.sun.castShadow=this.renderer.shadowMap.enabled),this.audio.setVolumes(e.volume??80,e.sfx??100),this.input.applyButtonScale(e.buttonSize??e.buttonScale??100),this.worldScene&&(this.worldScene.fog=new Qs(12112602,this.quality==="low"?380:520,this.quality==="low"?1100:1560)),this.camera.far=this.quality==="low"?1800:3200,this.camera.updateProjectionMatrix(),this.lobby&&this.lobby.resize(this.canvas.clientWidth,this.canvas.clientHeight),this.resize()}showLobby(){this.state="lobby",this.paused=!1,this.spectating=!1,this.input.setPlaying(!1),this.input.setBlocked(!1),this.lobby.setCharacter(ds(this.profile),this.profile.name,this.profile.level),this.ui?.showMenu(),this.ui?.refreshMenu(),this.ui?.setOnlineState("SERVER OFFLINE · LOCAL READY"),this.resize()}async startMatch(t=this.mode){this.state!=="loading"&&(this.mode=t,this.state="loading",this.ui?.closePanels(),this.ui?.showLoading(12,"DEPLOYMENT AUTHORIZED"),this.input.setPlaying(!1),this.audio.init(),await as(),this.resetMatch(),this.ui?.setLoading(72,"SYNCING OPERATIVES"),await as(),this.ui?.hideLoading(),this.ui?.showHud(),this.ui?.refreshMenu(),this.state="match",this.paused=!1,this.input.setPlaying(!0),this.input.setBlocked(!1),this.ui?.announce("MATCH START",`${this.mode.toUpperCase()} · LAST OPERATIVE STANDING`,2600),this.ui?.showBanner("DEPLOYMENT COMPLETE","AURORA PROTOCOL · ISLAND OF ASH"),this.audio.setAmbient(!0),this.ui?.toast(`DROP COMPLETE · ${this.aliveCount()} OPERATIVES`,"good"))}resetMatch(){this.audio.init(),this.effects.clear();for(const l of this.grenades)this.worldScene.remove(l.mesh),l.mesh.geometry.dispose(),l.mesh.material.dispose();this.grenades.length=0,this.player&&this.player.dispose();for(const l of this.bots)l.dispose();this.bots.length=0,this.player=null,this.spectating=!1,this.spectateTarget=null,this.spectateIndex=0,this.matchTime=0,this.matchStarted=!1,this.placement=null,this.resultShown=!1,this.cameraShake=0,this.zoneTick=0,this.stats={kills:0,damage:0},this.zone.reset(),this.loot.reset();for(const l of this.vehicles)l.reset();const t=ei((Date.now()&65535)+7),e=this._pickSpawn(t),i=ds(this.profile);this.teamSize=this.mode==="duo"?2:this.mode==="squad"?4:1,this.player=new __(this,{name:this.profile.name,outfit:i,spawn:e,team:0});const s=this.mode==="practice"?10:qt(Number(this.settings.matchSize)||25,10,50),a=Math.max(3,s-1),r=this.settings.botSkill||"veteran",o=this._botSpawns(a+2,e,t);for(let l=0;l<a;l++){const c=this.teamSize>1&&l<this.teamSize-1?0:Math.floor(l/this.teamSize)+1,h=o[l%o.length],d=Go[(l+3)%Go.length]+"-"+String(10+l),u=new v_(this,{spawn:h,team:c,name:d,skill:r,index:l});this.bots.push(u)}this.camera.position.set(e.x+8,e.y+7,e.z+8),this.camera.lookAt(e.x,e.y+1.5,e.z),this.updateCamera(1/60,!0),this.lastHudState=null,this.hudTimer=0,this.startedAt=performance.now()}_spawnClear(t,e,i,s=4){if(this.world.isWaterAt(t,e)||i<Ui+.6)return!1;for(const a of this.world.colliders)if(a.solid&&t+s>a.min.x&&t-s<a.max.x&&e+s>a.min.z&&e-s<a.max.z&&i+2.2>a.min.y&&i<a.max.y)return!1;return!0}_pickSpawn(t){const e=ni.filter(i=>i.type!=="mountain"&&i.type!=="lake");for(let i=0;i<320;i++){let s,a;if(i<220){const o=e[Math.floor(t()*e.length)],l=t()*Ei,c=o.r*(.72+t()*.46);s=o.x+Math.cos(l)*c,a=o.z+Math.sin(l)*c}else{const o=t()*Ei,l=90+t()*420;s=Math.cos(o)*l,a=Math.sin(o)*l}const r=this.world.groundHeight(s,a);if(this._spawnClear(s,a,r,6.5))return{x:s,y:r,z:a,yaw:t()*Ei}}for(const[i,s]of[[0,120],[40,150],[-60,160],[0,40]]){const a=this.world.groundHeight(i,s);if(this._spawnClear(i,s,a,2))return{x:i,y:a,z:s,yaw:t()*Ei}}return{x:0,y:this.world.groundHeight(0,92),z:92,yaw:0}}_botSpawns(t,e,i){const s=[],a=this.world.lootSpots;let r=0;for(;s.length<t&&r++<t*60;){const o=a[Math.floor(i()*a.length)];if(!o)continue;const l=o.x+(i()-.5)*10,c=o.z+(i()-.5)*10;if(this.world.isWaterAt(l,c))continue;const h=this.world.groundHeight(l,c);this._spawnClear(l,c,h,2.2)&&(Math.hypot(l-e.x,c-e.z)<55||s.some(d=>Math.hypot(d.x-l,d.z-c)<16)||s.push({x:l,y:h,z:c,yaw:i()*Ei}))}for(;s.length<t;){const o=i()*Ei,l=120+i()*350,c=Math.cos(o)*l,h=Math.sin(o)*l;s.push({x:c,y:this.world.groundHeight(c,h),z:h,yaw:i()*Ei})}return s}teamColor(t){return Yc[t%Yc.length]}teamLabel(t){return this.player&&t===this.player.team?"ALLY":"HOSTILE"}isEnemy(t,e){return t&&e&&t.team!==e.team}aliveCount(){let t=this.player?.alive?1:0;for(const e of this.bots)e.alive&&t++;return t}aliveTeams(){const t=new Set;this.player?.alive&&t.add(this.player.team);for(const e of this.bots)e.alive&&t.add(e.team);return t.size}update(t){if(t=Math.min(t,.05),this.state==="lobby"){this.lobby?.update(t,performance.now()/1e3);return}if(!(this.state!=="match"&&this.state!=="result")&&!this.paused){this.matchTime+=t,this.zone.update(t),this.world.update(t,this.matchTime),this.player&&(this.player.update(t,this.matchTime),this.player.alive&&this.world.setSunFocus(this.player.pos.x,this.player.pos.z),this.player.alive&&this.zone.isOutside(this.player.pos.x,this.player.pos.z)?(this.zoneTick+=t,this.zoneTick>=1&&(this.zoneTick=0,this.player.takeDamage(this.zone.damagePerSecond,null,!1),this.player.alive&&this.ui?.toast("OUTSIDE SAFE ZONE · MOVE!","warn"))):this.zoneTick=0);for(const e of this.bots)e.alive?e.update(t,this.matchTime):e.update(t,this.matchTime);for(const e of this.vehicles)e.update(t,this.matchTime);this._updateGrenades(t),this.loot.update(t),this.effects.update(t),this.cameraShake=Math.max(0,this.cameraShake-t*1.8),this._updateInteraction(),this.spectating?this._updateSpectate(t):this.updateCamera(t),this.hudTimer-=t,this.hudTimer<=0&&(this.hudTimer=.08,this.ui?.updateHUD(this)),this.state==="match"&&this.player&&this.player.alive&&this.aliveTeams()<=1&&this.matchTime>3&&this.finishMatch(!0)}}_updateInteraction(){if(!this.player||!this.player.alive||this.spectating){this.interactTarget&&(this.interactTarget=null,this.ui?.setInteract(null));return}if(this.player.vehicle){this.interactTarget={type:"exit"},this.ui?.setInteract("EXIT VEHICLE"),this.input.wasPressed("interact")&&this.player.vehicle.exit();return}const t=this.loot.nearest(this.player.pos.x,this.player.pos.y+.7,this.player.pos.z,2.7);if(t){this.interactTarget={type:"loot",item:t},this.ui?.setInteract("PICK UP · "+this.lootLabel(t)),this.input.wasPressed("interact")&&this.interact();return}let e=null,i=3.4;for(const s of this.vehicles){if(s.destroyed||s.occupied)continue;const a=ui(s.pos.x,s.pos.z,this.player.pos.x,this.player.pos.z);a<i&&(i=a,e=s)}if(e){this.interactTarget={type:"vehicle",vehicle:e},this.ui?.setInteract("DRIVE VEHICLE"),this.input.wasPressed("interact")&&this.interact();return}this.interactTarget=null,this.ui?.setInteract(null)}lootLabel(t){if(!t)return"";const e=t.data;return e.type==="weapon"?Js(e.weapon).name:e.type==="ammo"?`${e.ammo.toUpperCase()} AMMO`:e.type==="armor"?`ARMOR LV${e.level}`:e.type==="helmet"?`HELMET LV${e.level}`:e.type==="backpack"?`PACK LV${e.level}`:e.type==="med"?e.item==="medkit"?"MEDKIT":"BANDAGE":e.type==="grenade"?"FRAG GRENADE":e.type==="attachment"?e.attachment.replace("_"," ").toUpperCase():"SUPPLY"}botPickup(t,e){if(!e||!e.active||!t?.alive)return!1;const i=e.data;let s=!1;switch(i.type){case"weapon":{const a=Js(i.weapon);if(!a)break;const r={common:0,rare:1,epic:2,legendary:3};if(!((r[a.rarity]||0)>=(r[t.weapon?.rarity]||0)))break;t.weapon=a,t.mag=a.mag,t.reserve=Math.max(t.reserve,a.mag*3),t.character.setWeapon(a,[]),s=!0;break}case"ammo":t.reserve+=i.amount,s=!0;break;case"armor":i.level>t.armorLevel&&(t.armorLevel=i.level,t.armor={1:50,2:75,3:100}[i.level],t.character.setArmor(t.armor,t.helmet),s=!0);break;case"helmet":i.level>t.helmet&&(t.helmet=i.level,t.character.setArmor(t.armor,t.helmet),s=!0);break;case"backpack":s=!0;break;case"med":t.medkits<4&&(t.medkits++,s=!0);break}return s&&(this.loot.remove(e),this.effects?.pickup(new R(e.x,e.y,e.z),16757575)),s}interact(){if(!this.interactTarget||!this.player||!this.player.alive)return;const t=this.interactTarget;if(t.type==="loot"){const e=this.player.pickup(t.item);e.ok?this.ui?.toast(e.message,"loot"):e.message&&this.ui?.toast(e.message,"warn"),this.interactTarget=null,this.ui?.setInteract(null)}else t.type==="vehicle"?(t.vehicle.enter(this.player),this.interactTarget=null,this.ui?.setInteract(null)):t.type==="exit"&&(this.player.vehicle?.exit(),this.interactTarget=null,this.ui?.setInteract(null))}findBotTarget(t){let e=null,i=1/0;if(this.player?.alive&&this.isEnemy(t,this.player)){const s=ui(t.pos.x,t.pos.z,this.player.pos.x,this.player.pos.z);s<i&&(i=s,e=this.player)}for(const s of this.bots){if(s===t||!s.alive||!this.isEnemy(t,s))continue;const a=ui(t.pos.x,t.pos.z,s.pos.x,s.pos.z);a<i&&(i=a,e=s)}return e}playerShoot(t,e,i,s){let a=i;if(this.settings.aimAssist&&this.input.touchMode){let o=null,l=.992,c=120;for(const h of this.bots){if(!h.alive)continue;const d=new R(h.pos.x,h.pos.y+1.15,h.pos.z).sub(e);if(d.length()>c)continue;const f=d.normalize().dot(i);f>l&&(l=f,o=d)}o&&(a=i.clone().lerp(o,.42).normalize())}const r=this.resolveShot(e,a,s.range,s.damage,t);r.hit&&(t.shotsHit++,t.damageDealt+=r.damage,this.ui?.hitmarker(!!r.killed),this.ui?.damageIndicator(r.point))}resolveShot(t,e,i,s,a,r={}){const o=this.world.raycast(t,e,i);let l=o?o.distance:i,c=null,h=l,d=!1;const u=[];a!==this.player&&this.player?.alive&&this.isEnemy(a,this.player)&&u.push(this.player);for(const p of this.bots)!p.alive||p===a||(a===this.player||this.isEnemy(a,p))&&u.push(p);for(const p of u){const m=new R(p.pos.x,p.pos.y+1.12,p.pos.z),v=new R(p.pos.x,p.pos.y+1.62,p.pos.z),E=Fc(t,e,m,.48);E!==null&&E<h&&(h=E,c=p,d=!1);const M=Fc(t,e,v,.25);M!==null&&M<h&&(h=M,c=p,d=!0)}const f=t.clone().addScaledVector(e,Math.min(h,i)),g=a===this.player?16769704:16751210;this.effects.tracer(t,f,g);let _=!1;if(c){const p=s*(d?1.85:1);if(c===this.player)this.player.takeDamage(p,a,d),this.ui?.damageDirection?.(c.pos||a?.pos);else{const m=c.alive;c.takeDamage(p,a,d),_=m&&!c.alive}return c===this.player&&this.ui?.hitmarker(!1),{hit:!0,headshot:d,target:c,damage:p,killed:_,point:f}}return o&&this.effects.impact(o.point,o.normal,a===this.player?16767392:13680800,2),{hit:!1,damage:0,killed:!1,point:f}}meleeAttack(t,e,i){const s=new R(Math.sin(t.yaw),0,Math.cos(t.yaw)),a=[];t!==this.player&&this.player?.alive&&this.isEnemy(t,this.player)&&a.push(this.player);for(const o of this.bots)o.alive&&o!==t&&(t===this.player||this.isEnemy(t,o))&&a.push(o);let r=!1;for(const o of a){const l=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z,h=Math.hypot(l,c);if(!(h>i+.6)&&!((l*s.x+c*s.z)/(h||1)<.35)){o===this.player?this.player.takeDamage(e,t,!1):o.takeDamage(e,t,!1),this.effects.blood(new R(o.pos.x,o.pos.y+1.2,o.pos.z)),this.audio.hit(!1),t===this.player&&(this.ui?.hitmarker(!1),this.player.damageDealt+=e),r=!0;break}}r||this.effects.impact(t.pos.clone().add(s.multiplyScalar(i*.7)).setY(t.pos.y+1),null,13680800,1)}throwGrenade(t){const e=t.getEyePosition(new R),i=t.getAimDirection(new R),s=new Tt(new Ss(.16,8,6),new Gt({color:4147764,roughness:.7}));s.position.copy(e).addScaledVector(i,.6),s.castShadow=!0,this.worldScene.add(s),this.grenades.push({mesh:s,pos:s.position,vel:i.clone().multiplyScalar(19).add(new R(0,4.2,0)),timer:2.7,source:t,trail:0})}_updateGrenades(t){for(let e=this.grenades.length-1;e>=0;e--){const i=this.grenades[e];i.timer-=t,i.vel.y-=18*t,i.pos.addScaledVector(i.vel,t);const s=this.world.groundHeight(i.pos.x,i.pos.z);i.pos.y<s+.16&&(i.pos.y=s+.16,i.vel.y*=-.42,i.vel.x*=.62,i.vel.z*=.62,Math.abs(i.vel.y)<1&&(i.vel.y=0)),i.mesh.rotation.x+=t*6,i.mesh.rotation.z+=t*4,i.timer<=0&&(this.explode(i.pos.clone(),6.5,92,i.source),this.worldScene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.grenades.splice(e,1))}}explode(t,e,i,s){this.effects.explosion(t,e/6);const a=this.player?ui(this.player.pos.x,this.player.pos.z,t.x,t.z):999;this.audio.explosion(),a<30&&(this.cameraShake=Math.max(this.cameraShake,.8*(1-a/30)));const r=o=>{if(!o.alive)return;const l=Math.hypot(o.pos.x-t.x,o.pos.y+1-t.y,o.pos.z-t.z);if(l>e)return;const c=1-qt(l/e,0,1)*.7;o===this.player?this.player.takeDamage(i*c,s,!1):o.takeDamage(i*c,s,!1)};r(this.player);for(const o of this.bots)r(o)}onZonePhase(t,e){this.state==="match"&&(t==="shrink"?(this.ui?.announce("ZONE CLOSING","THE AURORA WALL IS MOVING",2400),this.audio.zoneWarning()):t==="wait"&&e>0?(this.ui?.announce(`ZONE ${e+1}`,"ROTATE TO THE MARKED CIRCLE",2e3),this.settings.zoneAudio&&this.audio.zoneWarning()):t==="final"&&this.ui?.announce("FINAL ZONE","NO PLACE LEFT TO HIDE",2600))}onPlayerHurt(t,e,i){this.ui?.flashDamage(t,e),this.cameraShake=Math.min(.6,this.cameraShake+t*.006)}onPlayerDeath(t){if(this.state!=="match")return;this.placement=this.mode==="solo"||this.mode==="practice"?this.aliveCount():this.aliveTeams();const e=t?.name||"THE ZONE";this.ui?.killfeed(e,this.player.name,t?t.weapon?.name||"WEAPON":"ZONE",!t),this.ui?.announce("ELIMINATED",`PLACEMENT #${this.placement}`,3e3),this.audio.defeat(),this.input.setPlaying(!1),this.ui?.showResult(this.buildResult(!1)),this.spectateTarget=null,this.spectateIndex=0}onBotDeath(t,e){const i=e?.name||"THE ZONE",s=e?.weapon?.name||(e===this.player?this.player.weapon?.name:null)||"ZONE";this.ui?.killfeed(i,t.name,e?s:"ZONE",!e),e===this.player?(this.player.kills++,this.audio.kill(),this.ui?.announce("ELIMINATED",`${t.name} · ${this.player.kills} TOTAL`,1500),this.ui?.hitmarker(!0)):e&&e!==this.player&&(e.kills=(e.kills||0)+1);const a=t.pos.clone();this.loot.dropAt(a.x,a.y,a.z,{type:"weapon",weapon:t.weapon.id,rarity:t.weapon.rarity,attachments:[]},.8),this.loot.dropAt(a.x,a.y,a.z,{type:"ammo",ammo:t.weapon.ammo==="none"?"light":t.weapon.ammo,amount:Qi(Math.random,20,40)},1.4),t.medkits>0&&this.loot.dropAt(a.x,a.y,a.z,{type:"med",item:"medkit"},1.1),t.armor>0&&this.loot.dropAt(a.x,a.y,a.z,{type:"armor",level:Math.max(1,t.armorLevel)},.9),this.spectateTarget===t&&this._nextSpectate(),this.state==="match"&&this.player.alive&&this.aliveTeams()<=1&&this.finishMatch(!0)}finishMatch(t){if(this.state!=="match")return;this.state="result",this.input.setPlaying(!1),this.placement=t?1:this.placement;const e=this.buildResult(t);this.ui?.showResult(e),t&&(this.audio.victory(),this.ui?.announce("ELITE VICTORY","LAST OPERATIVE STANDING",4e3)),this.input.setBlocked(!1)}buildResult(t){const e=Math.max(1,Math.round(this.matchTime)),i=this.player?.kills||0,s=Math.round(this.player?.damageDealt||0),a=t?1:this.placement||this.aliveCount();let r=0,o=0,l=[];if(!this.resultShown){this.resultShown=!0;const c=vx(this.profile,{placement:a,kills:i,damage:s,victory:t,time:e});r=c.xp,o=c.levels,l=c.unlocked||[],o>0&&this.audio.levelUp()}return{victory:t,placement:a,kills:i,damage:s,time:e,xp:r,levels:o,unlocked:l,alive:this.aliveCount(),mode:this.mode,matchTime:jh(this.matchTime)}}startSpectate(){this.spectating=!0,this.spectateIndex=0,this._nextSpectate(),this.ui?.hideResult(),this.ui?.setSpectate(this.spectateTarget?.name||null),this.ui?.toast("SPECTATOR MODE · TAP NEXT TO CYCLE","good")}_nextSpectate(){const t=this.bots.filter(e=>e.alive);if(!t.length){this.spectating=!1,this.ui?.setSpectate(null),this.ui?.showResult(this.buildResult(this.player?.alive===!0&&this.aliveTeams()<=1));return}this.spectateIndex=(this.spectateIndex+1)%t.length,this.spectateTarget=t[this.spectateIndex],this.ui?.setSpectate(this.spectateTarget.name),this.camera.position.set(this.spectateTarget.pos.x+6,this.spectateTarget.pos.y+5,this.spectateTarget.pos.z+6)}_updateSpectate(t){if((!this.spectateTarget||!this.spectateTarget.alive)&&(this._nextSpectate(),!this.spectateTarget))return;const e=this.spectateTarget,i=6,s=new R(e.pos.x-Math.sin(e.yaw)*i,e.pos.y+3.2,e.pos.z-Math.cos(e.yaw)*i);this.camera.position.lerp(s,1-Math.exp(-5*t));const a=new R(e.pos.x+Math.sin(e.yaw)*5,e.pos.y+1.2,e.pos.z+Math.cos(e.yaw)*5);this.camera.lookAt(a)}exitSpectate(){this.spectating=!1,this.spectateTarget=null,this.ui?.setSpectate(null),this.ui?.showResult(this.buildResult(!1))}updateCamera(t,e=!1){if(!this.player)return;const i=this.camera;let s,a,r=70;if(this.player.vehicle&&!this.player.vehicle.destroyed){const o=this.player.vehicle,l=o.forward;s=new R(o.pos.x,o.pos.y+3.4,o.pos.z).addScaledVector(l,-7.5),a=new R(o.pos.x,o.pos.y+1.2,o.pos.z).addScaledVector(l,8),r=76}else{const o=this.player.getEyePosition(new R),l=this.player.getAimDirection(new R),c=this.player.aiming&&this.player.alive,h=new R(-Math.cos(this.player.yaw),0,Math.sin(this.player.yaw)),d=i.aspect<.8,u=c?2.2:d?5.2:4.4;s=o.clone().addScaledVector(l,-u).addScaledVector(h,c?.52:d?.92:.7),s.y+=.18;const f=s.clone().sub(o),g=f.length();let _=g;if(g>.01){const m=f.clone().divideScalar(g),v=this.world.raycast(o,m,g);v&&(_=Math.max(.4,v.distance-.3),s=o.clone().addScaledVector(m,_))}this.player.character.group.visible=_>1.05,a=o.clone().addScaledVector(l,40);const p=this.player.stats?.zoom||1;r=c?qt(70/Math.max(1,p),18,66):70}if(e?i.position.copy(s):i.position.lerp(s,1-Math.exp(-14*t)),this.cameraShake>.002){const o=this.cameraShake*.16;i.position.x+=(Math.random()-.5)*o,i.position.y+=(Math.random()-.5)*o,a.x+=(Math.random()-.5)*o*.6,a.y+=(Math.random()-.5)*o*.6}i.lookAt(a),this.fov=he(this.fov,r,10,t),Math.abs(i.fov-this.fov)>.05&&(i.fov=this.fov,i.updateProjectionMatrix())}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.lobby?.resize(t,e)}render(){if(this.state==="lobby"||this.state==="boot"){this.lobby?this.lobby.render():(this.renderer.setClearColor(330256,1),this.renderer.clear());return}this.renderer.render(this.worldScene,this.camera)}returnToLobby(){this.player&&(this.player.dispose(),this.player=null);for(const t of this.bots)t.dispose();this.bots.length=0,this.effects.clear(),this.spectating=!1,this.audio.setAmbient(!1),this.showLobby(),this.ui?.refreshMenu()}setPaused(t){this.paused=t,this.input.setPlaying(!t&&this.state==="match"),t?this.input.setBlocked(!0):this.state==="match"&&this.input.setBlocked(!1)}setOnlineState(t){this.ui?.setOnlineState(t)}getPlayerState(){return this.player?.getHudState()||null}}const K=n=>document.getElementById(n),$c={solo:"SOLO",duo:"DUO",squad:"SQUAD",practice:"PRACTICE"},Kc={medkit:'<svg viewBox="0 0 24 24"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>',bandage:'<svg viewBox="0 0 24 24"><path d="M4 14 14 4l6 6-10 10zM9 9l6 6"/></svg>',grenade:'<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="6"/><path d="M9 8h6M12 8V4M15 5l3-2"/></svg>',armor:'<svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 5 3 7.5 7 9 4-1.5 7-4 7-9V6z"/></svg>',helmet:'<svg viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0v4H4zM8 18v3M16 18v3"/></svg>',backpack:'<svg viewBox="0 0 24 24"><path d="M6 8h12v13H6zM9 8V5h6v3M9 12h6"/></svg>',ammo:'<svg viewBox="0 0 24 24"><path d="M8 21V7l4-4 4 4v14zM8 12h8"/></svg>',attachment:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',weapon:'<svg viewBox="0 0 24 24"><path d="M3 12h12l3 3h3M6 15l-1 5h3l2-4"/></svg>'};function $i(n){return String(n||"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t])}class E_{constructor(t){this.game=t,this.profile=t.profile,this.currentPanel=null,this.layoutEditing=!1,this._drag=null,this._announceTimer=0,this._bannerTimer=0,this._hitTimer=0,this._damageTimer=0,this._toasts=[],this._fpsAcc=0,this._fpsFrames=0,this._fps=60,this._mapCanvas=null,this._mapSize=448,this._arsenalCat="all",this._mmTimers=[],this._invTimer=0,this._lastHud={},this.el={loading:K("loading-screen"),loadFill:K("load-fill"),loadStatus:K("load-status"),loadPercent:K("load-percent"),menu:K("menu-screen"),hud:K("hud"),touch:K("touch-controls"),overlay:K("overlay-root"),backdrop:K("overlay-backdrop"),play:K("btn-play"),playSub:K("play-sub"),online:K("btn-online"),onlineState:K("online-state"),serverLabel:K("server-label"),menuMatchSize:K("menu-match-size"),menuFps:K("menu-fps"),menuName:K("menu-name"),menuLevel:K("menu-level"),menuXp:K("menu-xp"),menuXpLabel:K("menu-xp-label"),menuRank:K("menu-rank"),menuAvatar:K("menu-avatar"),profileChip:K("profile-chip"),menuSkins:K("menu-skins"),opName:K("op-name"),opRole:K("op-role"),hudAlive:K("hud-alive"),hudKills:K("hud-kills"),hudMode:K("hud-mode"),zonePhase:K("zone-phase"),zoneTimer:K("zone-timer"),zoneState:K("zone-state"),miniZone:K("mini-zone"),miniTimer:K("mini-timer"),compass:K("compass"),compassTrack:K("compass-track"),killfeed:K("killfeed"),announce:K("announce"),banner:K("match-banner"),hitmarker:K("hitmarker"),damageIndicator:K("damage-indicator"),damageVignette:K("damage-vignette"),interact:K("interact-prompt"),interactLabel:K("interact-label"),healthFill:K("health-fill"),healthText:K("health-text"),armorFill:K("armor-fill"),armorText:K("armor-text"),hudPlayerName:K("hud-player-name"),hudTeam:K("hud-team"),hudHelmet:K("hud-helmet"),hudBackpack:K("hud-backpack"),hudStatus:K("hud-status"),healProgress:K("heal-progress"),ammoMag:K("ammo-mag"),ammoReserve:K("ammo-reserve"),weaponName:K("weapon-name"),fireMode:K("fire-mode"),reloadBar:K("reload-bar"),minimap:K("minimap"),fullMap:K("full-map"),menuMap:K("menu-map"),mapCoords:K("map-coords"),mapZoneInfo:K("map-zone-info"),spectate:K("spectate-banner"),spectateName:K("spectate-name"),resultPanel:document.querySelector('[data-panel-id="result"]'),resultTitle:K("result-title"),resultKicker:K("result-kicker"),resultSub:K("result-sub"),resPlace:K("res-place"),resKills:K("res-kills"),resDamage:K("res-damage"),resXp:K("res-xp"),btnSpectateResult:K("btn-result-spectate"),toastRoot:K("toast-root"),invWeapons:K("inv-weapons"),invAmmo:K("inv-ammo"),invItems:K("inv-items"),invGround:K("inv-ground"),invCap:K("inv-cap"),invCapMax:K("inv-cap-max"),invBackpack:K("inv-backpack"),profileName:K("profile-name"),profileRank:K("profile-rank"),profileXp:K("profile-xp"),profileXpLabel:K("profile-xp-label"),profileBadge:K("profile-badge"),profileSkinList:K("profile-skin-list"),statMatches:K("stat-matches"),statWins:K("stat-wins"),statKills:K("stat-kills"),statKd:K("stat-kd"),statDamage:K("stat-damage"),statBest:K("stat-best"),statTime:K("stat-time"),statLevel:K("stat-level"),charName:K("char-name"),charColors:K("char-colors"),charHair:K("char-hair"),charSkins:K("char-skins"),charPreview:document.querySelector(".char-preview"),arsenalList:K("arsenal-list"),arsenalTabs:K("arsenal-tabs"),layoutBanner:K("layout-edit-banner"),mmCount:K("mm-count"),mmStatus:K("mm-status"),mmFill:K("mm-fill"),pauseStats:K("pause-stats"),fatal:K("fatal-error"),fatalMessage:K("fatal-message")},this._buildCompass(),this._bind(),this._loadSettings(),this._renderCharacter(),this._renderArsenal(),this.refreshMenu(),this._renderProfile(),setTimeout(()=>{this._ensureMap(),this._drawMenuMap()},60)}_on(t,e,i,s){t&&t.addEventListener(e,i,s)}_setHidden(t,e){t&&t.classList.toggle("hidden",!!e)}_setPanel(t){for(const e of document.querySelectorAll("[data-panel-id]"))e.classList.toggle("open",e.dataset.panelId===t);this.el.overlay?.classList.toggle("open",!!t),this.currentPanel=t||null,t==="inventory"&&this._renderInventory(),t==="map"&&this._drawFullMap(),t==="profile"&&this._renderProfile(),t==="character"&&this._renderCharacter(),t==="loadout"&&this._renderArsenal(),t==="pause"&&this._refreshPause(),t==="matchmaking"&&this._startMatchmaking()}_loadSettings(){const t=this.profile.settings,e=(i,s,a,r="")=>{const o=K(i);if(o&&(o.type==="checkbox"?o.checked=!!s:o.value=s,a)){const l=K(a);l&&(l.textContent=s+r)}};e("set-quality",t.quality),e("set-scale",t.renderScale,"set-scale-out","%"),e("set-shadows",t.shadows),e("set-motion",t.motionBlur),e("set-sens",t.sensitivity,"set-sens-out"),e("set-btnsize",t.buttonScale,"set-btnsize-out","%"),e("set-autosprint",t.autoSprint),e("set-aimassist",t.aimAssist),e("set-volume",t.volume,"set-volume-out","%"),e("set-sfx",t.sfx,"set-sfx-out","%"),e("set-zoneaudio",t.zoneAudio),e("set-matchsize",t.matchSize),e("set-botskill",t.botSkill),e("set-fps",t.showFps)}_saveSettings(){hn(this.profile),this.game.applySettings(),this.refreshMenu()}_buildCompass(){if(!this.el.compassTrack)return;this.el.compassTrack.innerHTML="",this._compassMarks=[];const t={0:"N",90:"E",180:"S",270:"W"};for(let e=0;e<360;e+=15){const i=document.createElement("span");t[e]?(i.className="cardinal",i.textContent=t[e]):i.className="tick",i.dataset.bearing=String(e),this.el.compassTrack.appendChild(i),this._compassMarks.push(i)}}_bind(){for(const e of document.querySelectorAll("#mode-grid [data-mode]"))this._on(e,"click",()=>{this.game.mode=e.dataset.mode;for(const i of document.querySelectorAll("#mode-grid [data-mode]"))i.classList.toggle("active",i===e);this.refreshMenu(),this.game.audio?.ui()});this._on(this.el.play,"click",()=>this.game.startMatch(this.game.mode)),this._on(this.el.online,"click",()=>this.openPanel("matchmaking")),this._on(this.el.profileChip,"click",()=>this.openPanel("profile")),this._on(K("btn-settings-top"),"click",e=>{e.stopPropagation(),this.openPanel("settings")});for(const e of document.querySelectorAll("[data-panel]"))e.closest("[data-panel-id]")&&e.tagName,this._on(e,"click",i=>{i.preventDefault(),this.openPanel(e.dataset.panel)});for(const e of document.querySelectorAll("[data-close]"))this._on(e,"click",i=>{i.preventDefault(),this.closePanels()});this._on(this.el.backdrop,"click",()=>this.closePanels()),this._on(K("btn-map"),"click",()=>this.openPanel("map")),this._on(K("interact-btn"),"click",()=>this.game.interact()),this._on(K("btn-spectate-next"),"click",()=>this.game._nextSpectate()),this._on(K("btn-spectate-exit"),"click",()=>this.game.exitSpectate()),this._on(K("btn-play-again"),"click",()=>{this.closePanels(!0),this.game.startMatch(this.game.mode)}),this._on(K("btn-result-lobby"),"click",()=>{this.closePanels(!0),this.game.returnToLobby()}),this._on(this.el.btnSpectateResult,"click",()=>{this.closePanels(!0),this.game.startSpectate()}),this._on(K("btn-leave-match"),"click",()=>{this.closePanels(!0),this.game.returnToLobby()}),this._on(K("btn-mm-local"),"click",()=>{this.closePanels(!0),this.game.startMatch(this.game.mode)}),this._on(K("btn-reset-save"),"click",()=>{window.confirm("Reset your profile, unlocks and settings?")&&(xx(),location.reload())});for(const e of document.querySelectorAll(".quick-btn[data-action]"))this._on(e,"click",()=>{const i=e.dataset.action;i==="inventory"?this.openPanel("inventory"):i==="map"?this.openPanel("map"):i==="pause"?this.openPanel("pause"):i==="med"?this.game.player?.startHeal():i==="grenade"&&this.game.player?.throwGrenade()});for(const e of document.querySelectorAll("[data-resume]"))this._on(e,"click",()=>this.closePanels(!0));const t=[["set-quality","quality","string"],["set-scale","renderScale","number","set-scale-out","%"],["set-shadows","shadows","bool"],["set-motion","motionBlur","bool"],["set-sens","sensitivity","number","set-sens-out"],["set-btnsize","buttonScale","number","set-btnsize-out","%"],["set-autosprint","autoSprint","bool"],["set-aimassist","aimAssist","bool"],["set-volume","volume","number","set-volume-out","%"],["set-sfx","sfx","number","set-sfx-out","%"],["set-zoneaudio","zoneAudio","bool"],["set-matchsize","matchSize","number"],["set-botskill","botSkill","string"],["set-fps","showFps","bool"]];for(const[e,i,s,a,r]of t){const o=K(e);if(!o)continue;const l=()=>{let c;if(s==="bool"?c=o.checked:s==="number"?c=Number(o.value):c=o.value,this.profile.settings[i]=c,a){const h=K(a);h&&(h.textContent=c+(r||""))}this._saveSettings()};this._on(o,"input",l),this._on(o,"change",l)}if(this._on(this.el.charName,"input",()=>{const e=(this.el.charName.value||"").toUpperCase().replace(/[^A-Z0-9 _-]/g,"").slice(0,14)||"NOVA-07";this.profile.name=e,hn(this.profile),this._syncIdentity(),this._syncLobbyCharacter()}),this._buildCharacterSwatches(),this.el.arsenalTabs)for(const e of this.el.arsenalTabs.querySelectorAll("[data-cat]"))this._on(e,"click",()=>{this._arsenalCat=e.dataset.cat;for(const i of this.el.arsenalTabs.querySelectorAll("[data-cat]"))i.classList.toggle("active",i===e);this._renderArsenal()});this._on(K("btn-edit-layout"),"click",()=>this.startLayoutEdit()),this._on(K("btn-layout-save"),"click",()=>this.finishLayoutEdit(!0)),this._on(K("btn-layout-cancel"),"click",()=>this.finishLayoutEdit(!1)),this._on(K("btn-layout-done"),"click",()=>this.startLayoutEdit()),this._on(K("btn-layout-reset"),"click",()=>{this.profile.settings.touchLayout={},hn(this.profile),this.game.input.applyLayout({}),this.toast("TOUCH LAYOUT RESET","good")}),this._bindLayoutDrag(),window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="SELECT"||e.target.tagName==="TEXTAREA")||(e.code==="Enter"&&this.game.state==="lobby"&&!this.currentPanel?(e.preventDefault(),this.game.startMatch(this.game.mode)):e.code==="Escape"&&(this.currentPanel?(e.preventDefault(),this.closePanels()):this.game.state==="match"&&(e.preventDefault(),this.openPanel("pause"))))}),window.addEventListener("pointerdown",()=>{this.game.audio?.init()},{passive:!0})}_bindLayoutDrag(){for(const t of document.querySelectorAll("#touch-controls [data-action]"))t.addEventListener("pointerdown",e=>{this.layoutEditing&&(e.preventDefault(),e.stopPropagation(),this._drag={el:t,pointerId:e.pointerId},t.setPointerCapture?.(e.pointerId))},{capture:!0});window.addEventListener("pointermove",t=>{if(!this.layoutEditing||!this._drag||t.pointerId!==this._drag.pointerId)return;const e=qt(t.clientX/window.innerWidth*100,4,96),i=qt(t.clientY/window.innerHeight*100,6,94),s=this._drag.el;s.style.left=e+"%",s.style.top=i+"%",s.style.right="auto",s.style.bottom="auto",s.style.transform="translate(-50%, -50%)"}),window.addEventListener("pointerup",t=>{!this._drag||t.pointerId!==this._drag.pointerId||(this._drag=null)})}_buildCharacterSwatches(){if(this.el.charColors){this.el.charColors.innerHTML="";for(const t of px){const e=document.createElement("button");e.style.background=t,e.dataset.color=t,e.title=t,e.addEventListener("click",()=>{this.profile.outfit.primary=t,hn(this.profile),this._renderCharacter(),this._syncLobbyCharacter(),this._renderMenuSkins()}),this.el.charColors.appendChild(e)}}if(this.el.charHair){this.el.charHair.innerHTML="";for(const t of fx){const e=document.createElement("button");e.textContent=t.name.slice(0,1),e.dataset.hair=t.id,e.title=t.name,e.addEventListener("click",()=>{this.profile.outfit.hair=t.id,hn(this.profile),this._renderCharacter(),this._syncLobbyCharacter()}),this.el.charHair.appendChild(e)}}}showMenu(){this.closePanels(!0),this._setHidden(this.el.loading,!0),this._setHidden(this.el.hud,!0),this._setHidden(this.el.touch,!0),this._setHidden(this.el.menu,!1),this.el.menu?.classList.remove("out"),this._setHidden(this.el.spectate,!0),this.refreshMenu(),this._drawMenuMap()}showLoading(t=0,e="PREPARING"){this.setLoading(t,e),this._setHidden(this.el.loading,!1),this._setHidden(this.el.menu,!0),this._setHidden(this.el.hud,!0),this._setHidden(this.el.touch,!0),this.closePanels(!0)}setLoading(t,e){const i=qt(Math.round(t),0,100);this.el.loadFill&&(this.el.loadFill.style.width=i+"%"),this.el.loadPercent&&(this.el.loadPercent.textContent=i+"%"),this.el.loadStatus&&e&&(this.el.loadStatus.textContent=e)}hideLoading(){this._setHidden(this.el.loading,!0)}showHud(){this._setHidden(this.el.loading,!0),this._setHidden(this.el.menu,!0),this._setHidden(this.el.hud,!1),this._setHidden(this.el.touch,!this.game.input.touchMode),this.el.menu?.classList.remove("out"),this._setHidden(this.el.spectate,!0),this._lastHud={}}fatal(t){this._setHidden(this.el.loading,!0),this._setHidden(this.el.menu,!0),this._setHidden(this.el.hud,!0),this._setHidden(this.el.touch,!0),this.el.fatalMessage&&(this.el.fatalMessage.textContent=t||"This device could not start WebGL."),this._setHidden(this.el.fatal,!1)}refreshMenu(){const t=this.profile,e=this.game.mode||"solo",i=e==="practice"?10:Number(t.settings.matchSize)||25;this.el.menuName&&(this.el.menuName.textContent=t.name),this.el.menuLevel&&(this.el.menuLevel.textContent="LV "+t.level),this.el.menuXp&&(this.el.menuXp.style.width=qt(t.xp/ls(t.level)*100,0,100)+"%"),this.el.menuXpLabel&&(this.el.menuXpLabel.textContent=`${Math.round(t.xp)} / ${ls(t.level)} XP`),this.el.menuRank&&(this.el.menuRank.textContent=Vr(t.level)),this.el.opName&&(this.el.opName.textContent=t.name),this.el.opRole&&(this.el.opRole.textContent=Vr(t.level)),this.el.playSub&&(this.el.playSub.textContent=`${$c[e]||"SOLO"} • ${i} OPERATIVES`),this.el.menuMatchSize&&(this.el.menuMatchSize.textContent=String(i)),this.el.hudPlayerName&&(this.el.hudPlayerName.textContent=t.name),this.el.menuFps&&(this.el.menuFps.style.display=t.settings.showFps?"":"none");for(const s of document.querySelectorAll("#mode-grid [data-mode]"))s.classList.toggle("active",s.dataset.mode===e);this._syncIdentity(),this._renderMenuSkins()}_syncIdentity(){const t=this.profile,e=(t.name||"N").slice(0,1).toUpperCase(),i=ds(t);this.el.menuAvatar&&(this.el.menuAvatar.innerHTML=`<span>${$i(e)}</span>`,this.el.menuAvatar.style.background=`radial-gradient(circle at 35% 25%, ${i.accent}, ${i.primary} 55%, ${i.secondary})`),this.el.profileBadge&&(this.el.profileBadge.textContent=e,this.el.profileBadge.style.background=`linear-gradient(140deg, ${i.accent}, ${i.primary})`),this.el.hudPlayerName&&(this.el.hudPlayerName.textContent=t.name),this.el.profileChip&&this.el.profileChip.setAttribute("aria-label",`Open profile for ${t.name}`)}_syncLobbyCharacter(){if(this.game.lobby&&(this.game.lobby.setCharacter(ds(this.profile),this.profile.name,this.profile.level),this.el.charPreview)){const t=ds(this.profile);this.el.charPreview.style.background=`radial-gradient(ellipse at 50% 78%, ${t.accent}33, transparent 62%), linear-gradient(180deg, ${t.secondary}, #050d14)`}}_renderMenuSkins(){if(!this.el.menuSkins)return;const t=this.profile,e=xn.filter(i=>t.unlockedSkins.includes(i.id));this.el.menuSkins.innerHTML="";for(const i of e.slice(-6)){const s=document.createElement("button");s.style.background=`linear-gradient(135deg, ${i.accent}, ${i.primary} 55%, ${i.secondary})`,s.title=i.name,s.classList.toggle("active",t.outfit.skin===i.id),s.addEventListener("click",()=>this._selectSkin(i)),this.el.menuSkins.appendChild(s)}}_selectSkin(t){if(!this.profile.unlockedSkins.includes(t.id)){this.toast(`UNLOCKS AT LEVEL ${t.level}`,"warn");return}this.profile.outfit.skin=t.id,this.profile.outfit.primary=t.primary,this.profile.outfit.hairColor=t.hair,hn(this.profile),this._syncIdentity(),this._syncLobbyCharacter(),this._renderMenuSkins(),this._renderCharacter(),this._renderProfile(),this.toast(`${t.name} EQUIPPED`,"good")}openPanel(t,e=!1){if(t){if(t==="layout"){this.startLayoutEdit();return}this.game.state==="match"&&!e&&this.game.setPaused(!0),this._setPanel(t),this.game.audio?.ui()}}closePanels(t=!1){this._setPanel(null),this.game.state==="match"&&this.game.paused&&this.game.setPaused(!1)}setOnlineState(t){const e=t||"SERVER OFFLINE · LOCAL READY";this.el.onlineState&&(this.el.onlineState.textContent=e),this.el.serverLabel&&(this.el.serverLabel.textContent=/offline/i.test(e)?"LOCAL PRACTICE":e)}_refreshPause(){const t=this.game;this.el.pauseStats&&(this.el.pauseStats.textContent=`ALIVE ${t.aliveCount()} · KILLS ${t.player?.kills||0}`)}_startMatchmaking(){this._clearMatchmaking();let t=0;this.el.mmCount&&(this.el.mmCount.textContent="0"),this.el.mmFill&&(this.el.mmFill.style.width="0%"),this.el.mmStatus&&(this.el.mmStatus.textContent="SCANNING FOR DEDICATED SERVERS…");const e=()=>{t++,this.el.mmFill&&(this.el.mmFill.style.width=Math.min(100,t*14)+"%"),this.el.mmStatus&&(t===2?this.el.mmStatus.textContent="PROBING REGION RELAYS…":t===4&&(this.el.mmStatus.textContent="NO SERVER HANDSHAKE RECEIVED")),t<7?this._mmTimers.push(setTimeout(e,280)):(this.el.mmCount&&(this.el.mmCount.textContent="0"),this.el.mmStatus&&(this.el.mmStatus.textContent="NO DEDICATED SERVER ON THIS BUILD · LOCAL SIM READY"))};this._mmTimers.push(setTimeout(e,280))}_clearMatchmaking(){for(const t of this._mmTimers)clearTimeout(t);this._mmTimers.length=0}_renderProfile(){const t=this.profile,e=Vr(t.level);this.el.profileName&&(this.el.profileName.textContent=t.name),this.el.profileRank&&(this.el.profileRank.textContent=`${e} · LEVEL ${t.level}`),this.el.profileXp&&(this.el.profileXp.style.width=qt(t.xp/ls(t.level)*100,0,100)+"%"),this.el.profileXpLabel&&(this.el.profileXpLabel.textContent=`${Math.round(t.xp)} / ${ls(t.level)} XP TO NEXT LEVEL`);const i=(s,a)=>{s&&(s.textContent=a)};if(i(this.el.statMatches,t.matches),i(this.el.statWins,t.wins),i(this.el.statKills,t.kills),i(this.el.statKd,(t.kills/Math.max(1,t.deaths)).toFixed(2)),i(this.el.statDamage,Math.round(t.damage)),i(this.el.statBest,t.bestPlace?"#"+t.bestPlace:"—"),i(this.el.statTime,Math.round(t.timePlayed/60)+"m"),i(this.el.statLevel,t.level),this._syncIdentity(),this.el.profileSkinList){this.el.profileSkinList.innerHTML="";for(const s of xn){const a=t.unlockedSkins.includes(s.id),r=document.createElement("button");r.className="skin-card"+(t.outfit.skin===s.id?" active":"")+(a?"":" locked"),r.dataset.level=s.level,r.innerHTML=`<div class="skin-swatch" style="background:linear-gradient(135deg,${s.accent},${s.primary} 55%,${s.secondary})"></div><b>${s.name}</b><span>${a?s.rarity:"LEVEL "+s.level}</span>`,r.addEventListener("click",()=>this._selectSkin(s)),this.el.profileSkinList.appendChild(r)}}}_renderCharacter(){const t=this.profile;if(this.el.charName&&(this.el.charName.value=t.name),this.el.charColors)for(const e of this.el.charColors.querySelectorAll("button"))e.classList.toggle("active",e.dataset.color===t.outfit.primary);if(this.el.charHair)for(const e of this.el.charHair.querySelectorAll("button"))e.classList.toggle("active",e.dataset.hair===t.outfit.hair);if(this.el.charSkins){this.el.charSkins.innerHTML="";for(const e of xn){const i=t.unlockedSkins.includes(e.id),s=document.createElement("button");s.className="skin-card"+(t.outfit.skin===e.id?" active":"")+(i?"":" locked"),s.dataset.level=e.level,s.innerHTML=`<div class="skin-swatch" style="background:linear-gradient(135deg,${e.accent},${e.primary} 55%,${e.secondary})"></div><b>${e.name}</b><span>${i?e.rarity:"LEVEL "+e.level}</span>`,s.addEventListener("click",()=>this._selectSkin(e)),this.el.charSkins.appendChild(s)}}this._syncLobbyCharacter()}_renderArsenal(){if(!this.el.arsenalList)return;const t=this._arsenalCat,e=ou.filter(i=>t==="all"||i.category===t);this.el.arsenalList.innerHTML="";for(const i of e){const s=document.createElement("div");s.className="arsenal-card";const a=Ks[i.rarity]||Ks.common;s.style.borderColor=a.color+"55";const r=(o,l)=>`<div><span>${o}</span><i><b style="width:${qt(l,4,100)}%"></b></i></div>`;s.innerHTML=`
        <div class="arsenal-art" style="color:${a.color}">${Gc(i)}</div>
        <div class="arsenal-info">
          <span class="cat" style="color:${a.color}">${a.name} · ${Xr[i.category]||i.category}</span>
          <b>${i.name}</b>
          <div class="arsenal-bars">
            ${r("DMG",i.damage/1.1)}
            ${r("RATE",i.rpm/10)}
            ${r("RANGE",i.range/3.8)}
            ${r("MOB",i.mobility*74)}
          </div>
        </div>
        <div class="arsenal-desc">${i.desc}</div>`,this.el.arsenalList.appendChild(s)}}_renderInventory(){const t=this.game,e=t.player;if(e){if(this.el.invWeapons&&(this.el.invWeapons.innerHTML="",e.weapons.forEach((i,s)=>{const a=document.createElement("div");if(a.className="inv-weapon"+(e.currentSlot===s?" active":""),!i)a.innerHTML=`<div class="wicon">${Kc.weapon}</div><div class="wmeta"><b>EMPTY SLOT ${s+1}</b><span>NO WEAPON</span></div>`;else{const r=i.def.ammo==="none"?"∞":e.ammo[i.def.ammo]||0;a.innerHTML=`<div class="wicon">${Gc(i.def)}</div>
            <div class="wmeta"><b>${i.def.name}</b><span>${Xr[i.def.category]||""} · ${i.attachments.map(jx).join(" · ")||"NO ATTACHMENTS"}</span></div>
            <div class="wammo">${i.mag}<small>/${r}</small></div>
            <button class="wbtn" data-act="equip">EQUIP</button>
            <button class="wbtn" data-act="drop">DROP</button>`,a.querySelector('[data-act="equip"]').addEventListener("click",()=>{e.setSlot(s),this._renderInventory()}),a.querySelector('[data-act="drop"]').addEventListener("click",()=>{e.dropWeapon(s),this._renderInventory()})}this.el.invWeapons.appendChild(a)})),this.el.invAmmo){this.el.invAmmo.innerHTML="";for(const i of["light","heavy","shells","sniper","pistol"]){const s=document.createElement("div");s.className="ammo-item",s.innerHTML=`<span>${i.toUpperCase()}</span><b>${e.ammo[i]||0}</b>`,this.el.invAmmo.appendChild(s)}}if(this.el.invItems){this.el.invItems.innerHTML="";const i=[{key:"medkit",name:"MEDKIT",qty:e.items.medkit,icon:"medkit",desc:"RESTORE 65"},{key:"bandage",name:"BANDAGE",qty:e.items.bandage,icon:"bandage",desc:"RESTORE 28"},{key:"grenade",name:"FRAG",qty:e.items.grenade,icon:"grenade",desc:"THROW"}];for(const s of i){const a=document.createElement("button");a.className="inv-item",a.innerHTML=`<div class="item-icon">${Kc[s.icon]}</div><b>${s.name}</b><span>${s.desc}</span><i class="qty">${s.qty}</i>`,a.addEventListener("click",()=>{if(s.qty<=0){this.toast("NONE LEFT","warn");return}s.key==="grenade"?e.throwGrenade():e.useMedical(s.key),this._renderInventory()}),this.el.invItems.appendChild(a)}}if(this.el.invGround){this.el.invGround.innerHTML="";const i=t.loot?t.loot.nearItems(e.pos.x,e.pos.y,e.pos.z,7):[];if(!i.length)this.el.invGround.innerHTML='<div class="inv-empty">NO SUPPLIES WITHIN REACH</div>';else for(const s of i.slice(0,12)){const a=document.createElement("div");a.className="ground-item",a.innerHTML=`<span>${$i(t.lootLabel(s))}</span><button>PICK UP</button>`,a.querySelector("button").addEventListener("click",()=>{const r=e.pickup(s);r.ok?this.toast(r.message,"loot"):r.message&&this.toast(r.message,"warn"),this._renderInventory()}),this.el.invGround.appendChild(a)}}this.el.invCap&&(this.el.invCap.textContent=e.items.medkit+e.items.bandage+e.items.grenade),this.el.invCapMax&&(this.el.invCapMax.textContent=e.maxItems),this.el.invBackpack&&(this.el.invBackpack.textContent="L"+e.backpack)}}startLayoutEdit(){this.closePanels(!0),this.layoutEditing=!0,document.body.classList.add("layout-editing"),this._setHidden(this.el.touch,!1),this._setHidden(this.el.layoutBanner,!1),this.game.input.setPlaying(!1),this.game.input.setBlocked(!0),this.toast("DRAG CONTROLS TO REPOSITION","good")}finishLayoutEdit(t){this.layoutEditing&&(t&&(this.profile.settings.touchLayout=this.game.input.captureLayout(),hn(this.profile)),this.layoutEditing=!1,document.body.classList.remove("layout-editing"),this._setHidden(this.el.layoutBanner,!0),this.game.input.applyLayout(this.profile.settings.touchLayout||{}),this.game.input.applyButtonScale(this.profile.settings.buttonScale),this.game.input.setBlocked(!1),this.game.state==="match"?(this.game.setPaused(!1),this._setHidden(this.el.touch,!1)):(this._setHidden(this.el.touch,!0),this.game.input.setPlaying(!1)),this.toast(t?"TOUCH LAYOUT SAVED":"LAYOUT EDIT CANCELLED",t?"good":"warn"))}updateHUD(t){const e=t.player;if(!e)return;const i=e.getHudState(),s=(l,c)=>{l&&l.textContent!==String(c)&&(l.textContent=c)},a=(l,c)=>{l&&(l.style.width=qt(c,0,100)+"%")};a(this.el.healthFill,i.health),s(this.el.healthText,Math.ceil(i.health)),a(this.el.armorFill,i.armor),s(this.el.armorText,Math.ceil(i.armor)),s(this.el.hudAlive,t.aliveCount()),s(this.el.hudKills,e.kills),s(this.el.hudMode,$c[t.mode]||"SOLO"),s(this.el.hudPlayerName,e.name),s(this.el.hudTeam,t.teamSize>1?`TEAM ${e.team+1}`:"SOLO"),s(this.el.hudHelmet,i.helmet>0?`HELMET L${i.helmet}`:"NO HELMET"),s(this.el.hudBackpack,`PACK L${i.backpack}`);const r=i.healing?"HEALING":i.vehicle?"DRIVING":i.swimming?"SWIMMING":i.crouching?"CROUCHED":i.sprinting?"SPRINTING":i.aiming?"ADS":"READY";if(s(this.el.hudStatus,r),this.el.touch?.classList.toggle("vehicle-active",!!i.vehicle),this.el.healProgress){this.el.healProgress.classList.toggle("hidden",!i.healing);const l=this.el.healProgress.querySelector("i");l&&(l.style.width=i.healProgress*100+"%");const c=this.el.healProgress.querySelector("span");c&&(c.textContent=i.healing==="medkit"?"USING MEDKIT":"USING BANDAGE")}if(this.el.reloadBar){this.el.reloadBar.classList.toggle("hidden",!i.reloading);const l=this.el.reloadBar.querySelector("i");l&&(l.style.width=i.reloadProgress*100+"%")}s(this.el.ammoMag,i.magSize?i.mag:"—"),s(this.el.ammoReserve,i.ammoType==="none"?"∞":Number.isFinite(i.reserve)?i.reserve:"—"),s(this.el.weaponName,i.weaponName),s(this.el.fireMode,i.category==="melee"?"MELEE":i.auto?"AUTO":"SEMI");for(const l of document.querySelectorAll(".wslot")){const c=Number(l.dataset.slot),h=e.weapons[c];l.classList.toggle("active",e.currentSlot===c);const d=l.querySelector("span"),u=l.querySelector("em");d&&(d.textContent=h?h.def.name:"—"),u&&(u.textContent=h?(Xr[h.def.category]||h.def.category).split(" ")[0]:"EMPTY")}const o=t.zone.getState();if(s(this.el.zonePhase,`ZONE ${o.phase}`),s(this.el.zoneTimer,o.timerText),s(this.el.zoneState,o.shrinking?"CLOSING NOW":o.finished?"FINAL ZONE":"SHRINKING IN"),s(this.el.miniZone,`ZONE ${o.phase}`),s(this.el.miniTimer,o.timerText),s(this.el.mapZoneInfo,`ZONE ${o.phase} · ${o.timerText}`),this._updateCompass(e.yaw),this._drawMinimap(t),this.currentPanel==="map"&&this._drawFullMap(),this.currentPanel==="inventory"&&(this._invTimer+=.08,this._invTimer>.6&&(this._invTimer=0,this._renderInventory())),this.el.mapCoords){const l=Math.floor((e.pos.x+hi)/150)+1,c=Math.floor((e.pos.z+hi)/150)+1;this.el.mapCoords.textContent=`GRID ${l}-${c} · ALT ${Math.round(e.pos.y)}M`}}_updateCompass(t){if(!this._compassMarks)return;const e=(t*180/Math.PI+180+360)%360;for(const i of this._compassMarks){let a=(Number(i.dataset.bearing)-e+540)%360-180;const r=i.classList.contains("cardinal")?78:62;if(Math.abs(a)>r){i.style.display="none";continue}i.style.display="",i.style.left=50+a/160*100+"%"}}setInteract(t){this.el.interact&&(this._setHidden(this.el.interact,!t),t&&this.el.interactLabel&&(this.el.interactLabel.textContent=t))}hitmarker(t=!1){this.el.hitmarker&&(this.el.hitmarker.classList.remove("show"),this.el.hitmarker.classList.toggle("kill",!!t),this.el.hitmarker.offsetWidth,this.el.hitmarker.classList.add("show"),clearTimeout(this._hitTimer),this._hitTimer=setTimeout(()=>this.el.hitmarker?.classList.remove("show"),220))}flashDamage(t,e){this.el.damageVignette&&(this.el.damageVignette.classList.add("show"),clearTimeout(this._damageTimer),this._damageTimer=setTimeout(()=>this.el.damageVignette?.classList.remove("show"),220)),e?.pos&&this.damageDirection(e.pos)}damageDirection(t){if(!this.el.damageIndicator||!t||!this.game.player)return;const e=this.game.player,i=t.x-e.pos.x,s=t.z-e.pos.z;if(Math.hypot(i,s)<.1)return;const a=i*Math.sin(e.yaw)+s*Math.cos(e.yaw),r=i*-Math.cos(e.yaw)+s*Math.sin(e.yaw),o=Math.atan2(r,a)*180/Math.PI;let l=this.el.damageIndicator.querySelector(".dmg-arrow");l||(l=document.createElement("i"),l.className="dmg-arrow",l.style.cssText="position:absolute;left:50%;top:50%;width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:16px solid rgba(255,60,60,.9);filter:drop-shadow(0 0 5px rgba(255,50,50,.8));",this.el.damageIndicator.appendChild(l)),l.style.transform=`translate(-50%,-50%) rotate(${o}deg) translateY(-86px)`,this.el.damageIndicator.classList.add("show"),clearTimeout(this._dirTimer),this._dirTimer=setTimeout(()=>this.el.damageIndicator?.classList.remove("show"),650)}damageIndicator(){}announce(t,e="",i=2200){this.el.announce&&(this.el.announce.innerHTML=`<b>${$i(t)}</b>${e?`<span>${$i(e)}</span>`:""}`,this.el.announce.classList.add("show"),clearTimeout(this._announceTimer),this._announceTimer=setTimeout(()=>this.el.announce?.classList.remove("show"),i))}showBanner(t,e=""){this.el.banner&&(this.el.banner.innerHTML=`<b>${$i(t)}</b><span>${$i(e)}</span>`,this._setHidden(this.el.banner,!1),clearTimeout(this._bannerTimer),this._bannerTimer=setTimeout(()=>this._setHidden(this.el.banner,!0),3e3))}killfeed(t,e,i="WEAPON",s=!1){if(!this.el.killfeed)return;const a=document.createElement("div");for(a.className="killfeed-item",a.innerHTML=`<span class="killer">${$i(t)}</span><svg viewBox="0 0 24 24"><path d="M5 19 19 5M5 5l14 14"/></svg><span class="victim">${$i(e)}</span><em class="${s?"zone-kill":""}">${$i(s?"ZONE":i)}</em>`,this.el.killfeed.appendChild(a);this.el.killfeed.children.length>5;)this.el.killfeed.firstChild.remove();setTimeout(()=>a.remove(),5200)}toast(t,e=""){if(!this.el.toastRoot)return;const i=document.createElement("div");for(i.className="toast"+(e?" "+e:""),i.textContent=t,this.el.toastRoot.appendChild(i),this._toasts.push(i);this._toasts.length>4;)this._toasts.shift()?.remove();setTimeout(()=>{i.remove();const s=this._toasts.indexOf(i);s>=0&&this._toasts.splice(s,1)},2400)}setSpectate(t){this.el.spectate&&(this._setHidden(this.el.spectate,!t),t&&this.el.spectateName&&(this.el.spectateName.textContent=t))}showResult(t){const e=t||{};this._setHidden(this.el.touch,!0),this._setHidden(this.el.spectate,!0),this.el.resultPanel&&(this.el.resultPanel.classList.toggle("defeat",!e.victory),this.el.resultPanel.classList.add("open")),this.el.overlay?.classList.add("open"),this.currentPanel="result",this.el.resultKicker&&(this.el.resultKicker.textContent=e.victory?"MATCH COMPLETE · AURORA PROTOCOL":"SERVICE RECORD UPDATED"),this.el.resultTitle&&(this.el.resultTitle.textContent=e.victory?"ELITE VICTORY":"ELIMINATED"),this.el.resultSub&&(this.el.resultSub.textContent=e.victory?`Last operative standing on the Island of Ash · ${e.matchTime||""}`:`Placed #${e.placement} of ${e.alive+Math.max(0,(e.placement||1)-1)} · The island keeps its secrets.`),this.el.resPlace&&(this.el.resPlace.textContent="#"+(e.placement||"—")),this.el.resKills&&(this.el.resKills.textContent=e.kills??0),this.el.resDamage&&(this.el.resDamage.textContent=e.damage??0),this.el.resXp&&(this.el.resXp.textContent="+"+(e.xp??0)),this.el.btnSpectateResult&&(this.el.btnSpectateResult.style.display=!e.victory&&this.game.bots.some(i=>i.alive)?"":"none"),e.levels>0&&this.toast(`LEVEL UP · LEVEL ${this.profile.level}`,"good"),e.unlocked?.length&&this.toast(`${e.unlocked[0].name} UNLOCKED`,"good"),this.refreshMenu(),this._renderProfile()}hideResult(){this.el.resultPanel?.classList.remove("open"),this.currentPanel==="result"&&(this.currentPanel=null,this.el.overlay?.classList.remove("open"))}_ensureMap(){if(this._mapCanvas)return;const t=this._mapSize,e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d"),s=i.createImageData(t,t),a=new Float32Array(t*t),r=oi/t;for(let d=0;d<t;d++){const u=-hi+(d+.5)*r;for(let f=0;f<t;f++){const g=-hi+(f+.5)*r;a[d*t+f]=Le(g,u)}}const o=[0,0,0];for(let d=0;d<t;d++)for(let u=0;u<t;u++){const f=d*t+u,g=a[f];let _,p,m;g<-7?(_=8,p=30,m=46):g<-1.5?(_=13,p=51,m=68):g<.4?(_=30,p=87,m=100):g<2.6?(_=170,p=155,m=112):g<16?(_=70,p=92,m=55):g<30?(_=88,p=99,m=62):g<46?(_=109,p=108,m=78):g<58?(_=128,p=126,m=116):(_=210,p=224,m=226);const v=u>0&&u<t-1?a[f+1]-a[f-1]:0,E=d>0&&d<t-1?a[f+t]-a[f-t]:0,M=qt(1-v*.012-E*.012,.66,1.28);o[0]=qt(_*M,0,255),o[1]=qt(p*M,0,255),o[2]=qt(m*M,0,255);const T=f*4;s.data[T]=o[0],s.data[T+1]=o[1],s.data[T+2]=o[2],s.data[T+3]=255}i.putImageData(s,0,0);const l=[["city","village"],["village","foundry"],["foundry","base"],["base","ridge"],["ridge","bunker"],["village","lake"],["lake","harbor"],["harbor","city"],["foundry","airport"],["airport","beach"],["beach","aurora"],["village","aurora"]],c=(d,u)=>[(d+hi)/oi*t,(u+hi)/oi*t];i.lineCap="round";for(const[d,u]of l){const f=ni.find(E=>E.id===d),g=ni.find(E=>E.id===u);if(!f||!g)continue;const[_,p]=c(f.x,f.z),[m,v]=c(g.x,g.z);i.strokeStyle="rgba(20,26,26,.5)",i.lineWidth=4.4,i.beginPath(),i.moveTo(_,p),i.lineTo(m,v),i.stroke(),i.strokeStyle="rgba(196,186,160,.34)",i.lineWidth=2,i.beginPath(),i.moveTo(_,p),i.lineTo(m,v),i.stroke()}const h=ni.find(d=>d.id==="airport");if(h){const[d,u]=c(h.x-70,h.z-40),[f,g]=c(h.x+70,h.z+40);i.strokeStyle="rgba(40,46,48,.8)",i.lineWidth=10,i.beginPath(),i.moveTo(d,u),i.lineTo(f,g),i.stroke(),i.strokeStyle="rgba(230,230,220,.5)",i.lineWidth=1,i.setLineDash([6,7]),i.beginPath(),i.moveTo(d,u),i.lineTo(f,g),i.stroke(),i.setLineDash([])}this._mapCanvas=e}_worldToMap(t,e,i){return[(t+hi)/oi*i,(e+hi)/oi*i]}_drawMenuMap(){const t=this.el.menuMap;if(!t)return;this._ensureMap();const e=t.getContext("2d"),i=t.width,s=t.height;e.clearRect(0,0,i,s),e.drawImage(this._mapCanvas,0,0,i,s),e.fillStyle="rgba(3,10,15,.28)",e.fillRect(0,0,i,s),e.strokeStyle="rgba(120,190,210,.09)",e.lineWidth=1;for(let a=1;a<6;a++)e.beginPath(),e.moveTo(a*i/6,0),e.lineTo(a*i/6,s),e.stroke(),e.beginPath(),e.moveTo(0,a*s/6),e.lineTo(i,a*s/6),e.stroke();for(const a of ni){const[r,o]=this._worldToMap(a.x,a.z,i);e.beginPath(),e.fillStyle=a.map,e.arc(r,o,2.4,0,Math.PI*2),e.fill(),e.font="700 7px Rajdhani, sans-serif",e.fillStyle="rgba(235,245,250,.8)",e.textAlign="center",e.fillText(a.name.split(" ")[0],r,o-5)}}_drawMinimap(t){const e=this.el.minimap;if(!e||!t.player)return;this._ensureMap();const i=e.getContext("2d"),s=e.width,a=t.player,r=300,o=this._mapCanvas,l=o.width,c=r/oi*l,h=(a.pos.x+hi)/oi*l-c/2,d=(a.pos.z+hi)/oi*l-c/2;i.clearRect(0,0,s,s),i.fillStyle="#0a1c27",i.fillRect(0,0,s,s),i.drawImage(o,h,d,c,c,0,0,s,s),i.fillStyle="rgba(4,12,18,.16)",i.fillRect(0,0,s,s);const u=(m,v)=>[s/2+(m-a.pos.x)/r*s,s/2+(v-a.pos.z)/r*s],f=t.zone.getState(),[g,_]=u(f.center.x,f.center.y);if(i.strokeStyle="rgba(120,232,255,.85)",i.lineWidth=1.6,i.beginPath(),i.arc(g,_,Math.max(1,f.radius/r*s),0,Math.PI*2),i.stroke(),!f.finished){const[m,v]=u(f.nextCenter.x,f.nextCenter.y);i.strokeStyle="rgba(255,200,87,.75)",i.setLineDash([4,4]),i.lineWidth=1.2,i.beginPath(),i.arc(m,v,Math.max(1,f.nextRadius/r*s),0,Math.PI*2),i.stroke(),i.setLineDash([])}for(const m of ni){const[v,E]=u(m.x,m.z);v<-8||E<-8||v>s+8||E>s+8||(i.fillStyle=m.map,i.globalAlpha=.8,i.beginPath(),i.arc(v,E,1.7,0,Math.PI*2),i.fill(),i.globalAlpha=1)}for(const m of t.bots){if(!m.alive||m.team!==a.team)continue;const[v,E]=u(m.pos.x,m.pos.z);v<0||E<0||v>s||E>s||(i.fillStyle="#63dcff",i.beginPath(),i.arc(v,E,2.4,0,Math.PI*2),i.fill())}const p=Math.atan2(Math.sin(a.yaw),Math.cos(a.yaw));i.save(),i.translate(s/2,s/2),i.rotate(-p),i.fillStyle="#ffb347",i.shadowColor="rgba(255,138,43,.9)",i.shadowBlur=7,i.beginPath(),i.moveTo(0,-7),i.lineTo(5.2,5),i.lineTo(0,2.4),i.lineTo(-5.2,5),i.closePath(),i.fill(),i.restore()}_drawFullMap(){const t=this.el.fullMap,e=this.game;if(!t||!e.player)return;this._ensureMap();const i=t.getContext("2d"),s=t.width;i.clearRect(0,0,s,s),i.drawImage(this._mapCanvas,0,0,s,s),i.fillStyle="rgba(3,10,15,.2)",i.fillRect(0,0,s,s),i.strokeStyle="rgba(150,210,230,.12)",i.lineWidth=1,i.font="600 11px Rajdhani, sans-serif",i.fillStyle="rgba(180,220,235,.35)",i.textAlign="left";for(let f=1;f<10;f++){const g=f*s/10;i.beginPath(),i.moveTo(g,0),i.lineTo(g,s),i.stroke(),i.beginPath(),i.moveTo(0,g),i.lineTo(s,g),i.stroke(),i.fillText(String(f),g+3,13),i.fillText(String.fromCharCode(64+f),4,g-4)}for(const f of ni){const[g,_]=this._worldToMap(f.x,f.z,s);i.beginPath(),i.fillStyle=f.map,i.globalAlpha=.22,i.arc(g,_,13,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.beginPath(),i.fillStyle=f.map,i.arc(g,_,3.6,0,Math.PI*2),i.fill(),i.font="700 13px Rajdhani, sans-serif",i.fillStyle="rgba(235,246,250,.92)",i.textAlign="left",i.shadowColor="rgba(0,0,0,.9)",i.shadowBlur=4,i.fillText(f.name,g+8,_-6),i.shadowBlur=0}const a=e.zone.getState(),[r,o]=this._worldToMap(a.center.x,a.center.y,s),l=a.radius/oi*s;if(i.beginPath(),i.fillStyle="rgba(99,220,255,.07)",i.arc(r,o,l,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(120,232,255,.9)",i.lineWidth=2.4,i.stroke(),!a.finished){const[f,g]=this._worldToMap(a.nextCenter.x,a.nextCenter.y,s),_=a.nextRadius/oi*s;i.setLineDash([9,7]),i.strokeStyle="rgba(255,200,87,.9)",i.lineWidth=2,i.beginPath(),i.arc(f,g,_,0,Math.PI*2),i.stroke(),i.setLineDash([]),i.fillStyle="rgba(255,200,87,.9)",i.beginPath(),i.arc(f,g,3,0,Math.PI*2),i.fill()}for(const f of e.bots){if(!f.alive||f.team!==e.player.team)continue;const[g,_]=this._worldToMap(f.pos.x,f.pos.z,s);i.fillStyle="#63dcff",i.beginPath(),i.arc(g,_,4,0,Math.PI*2),i.fill()}const c=e.player,[h,d]=this._worldToMap(c.pos.x,c.pos.z,s),u=Math.atan2(Math.sin(c.yaw),Math.cos(c.yaw));if(i.save(),i.translate(h,d),i.rotate(-u),i.fillStyle="#ffb347",i.shadowColor="rgba(255,138,43,.95)",i.shadowBlur=10,i.beginPath(),i.moveTo(0,-11),i.lineTo(8,8),i.lineTo(0,4),i.lineTo(-8,8),i.closePath(),i.fill(),i.restore(),this.el.mapCoords){const f=Math.floor((c.pos.x+hi)/150)+1,g=Math.floor((c.pos.z+hi)/150)+1;this.el.mapCoords.textContent=`GRID ${f}-${g} · ALT ${Math.round(c.pos.y)}M`}}update(t){this._fpsAcc+=t,this._fpsFrames++,this._fpsAcc>=.5&&(this._fps=Math.round(this._fpsFrames/this._fpsAcc),this._fpsAcc=0,this._fpsFrames=0,this.el.menuFps&&(this.el.menuFps.textContent=this._fps+" FPS")),this.game.state==="lobby"&&this.game.input?.wasPressed?.("pause")}}const Oa=document.getElementById("game-canvas");function Yr(n){const t=document.getElementById("fatal-error"),e=document.getElementById("fatal-message");e&&(e.textContent=n),t&&t.classList.remove("hidden");for(const i of["loading-screen","menu-screen","hud","touch-controls"])document.getElementById(i)?.classList.add("hidden")}async function T_(){let n;try{n=new cx({canvas:Oa,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(l){Yr("This device could not start WebGL. Try enabling hardware acceleration or a different browser."),console.error(l);return}n.setClearColor(330256,1),n.outputColorSpace=ve,n.toneMapping=Xo,n.toneMappingExposure=1.02,n.shadowMap.enabled=!0,n.shadowMap.type=Wo;const t=gx(),e=new Mx(t),i=new Sx(Oa,t),s=new b_({renderer:n,canvas:Oa,profile:t,audio:e,input:i}),a=new E_(s);s.ui=a,document.body.classList.toggle("touch-mode",i.touchMode),document.body.classList.toggle("desktop-mode",!i.touchMode),s.resize(),window.addEventListener("resize",()=>s.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>s.resize(),120)),Oa.addEventListener("webglcontextlost",l=>{l.preventDefault(),Yr("The graphics context was lost. Reload the page to redeploy.")}),window.addEventListener("error",l=>{console.error("[BATTLE WORLD]",l.error||l.message)}),window.addEventListener("unhandledrejection",l=>{console.error("[BATTLE WORLD] promise",l.reason)}),window.__BATTLE_WORLD__={version:"1.0.0",game:s,ui:a,profile:t,startMatch:l=>s.startMatch(l),returnToLobby:()=>s.returnToLobby(),state:()=>({state:s.state,alive:s.aliveCount(),kills:s.player?.kills||0,time:s.matchTime})};try{await s.prepare()}catch(l){console.error(l),Yr("The island failed to load: "+(l?.message||l));return}let r=performance.now();function o(l){const c=Math.min(.1,(l-r)/1e3);r=l;try{s.update(c),a.update(c),s.render()}catch(h){console.error("[BATTLE WORLD] frame error",h)}i.endFrame(),requestAnimationFrame(o)}requestAnimationFrame(o)}T_();
