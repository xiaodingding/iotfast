var ql=Object.defineProperty;var Ja=Object.getOwnPropertySymbols;var $l=Object.prototype.hasOwnProperty,Kl=Object.prototype.propertyIsEnumerable;var eo=(e,t,r)=>t in e?ql(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,to=(e,t)=>{for(var r in t||(t={}))$l.call(t,r)&&eo(e,r,t[r]);if(Ja)for(var r of Ja(t))Kl.call(t,r)&&eo(e,r,t[r]);return e};import{g as Ot,s as ro,A as Ql,z as Jl,C as Ss,R as bs,D as eu,E as ca,h as Bt,F as tu,G as ru,H as iu,f as nu,I as au,J as qr,K as ce,M as rr,N as ou,O as As,P as En,Z as un,Q as hn,T as Pi,U as Cs,V as Ls,W as Ds,X as Sn,j as bn,Y as Da,_ as su,$ as lu,t as uu,a0 as hu,u as tt,a1 as da,c as Ri,S as Ft,a2 as Ma,B as fu,a3 as cu,a4 as io,a5 as du,a6 as vu,a7 as Pa,a8 as pu,a9 as Fr,aa as no,ab as mu,ac as _u,ad as gu,ae as Ms,af as Dt,ag as Mt,ah as yu,ai as xu,aj as Fi,ak as Tu,p as wu,al as Eu,am as Ps,an as Su,ao as bu,l as ao,ap as oo,aq as so,i as br,L as Fn}from"./echarts.1658457169439.js";import"./echarts.16584571694392.js";import{_ as Au,N as Cu,f as lo}from"./index.1658457169439.js";import{j as Lu,$ as Du,d as Mu,D as Pu,ac as Ru,l as pt,m as O,V as lt,U as Je,O as Ui,F as Ar,a3 as Cr,az as Nu,aA as Iu,au as Rs,_ as Gi,k as ut,M as Ou,T as uo,I as zi,c as Bu}from"./vue.1658457169439.js";function ho(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?fo(this,e.call(this,l)):Fu(this,e,n),this.constructor===o)for(var u=o.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,fo(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function fo(e,t){if(!!t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function Fu(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}var Uu={extend:ho,derive:ho};function Gu(e,t){this.action=e,this.context=t}var zu={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new Gu(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},Ra=zu,Hu=0,Vu=Array.prototype,ku=Vu.forEach,di={genGUID:function(){return++Hu},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(!!(e&&t))if(e.forEach&&e.forEach===ku)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(di.isObject(e)){if(di.isArray(e))return e.slice();if(di.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return di.extend({},e)}else return e}},Ye=di,An=function(){this.__uid__=Ye.genGUID()};An.__initializers__=[function(e){Ye.extend(this,e)}];Ye.extend(An,Uu);Ye.extend(An.prototype,Ra);var ot=An,co=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],vo=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Wu(e){for(var t={},r={},i=0;i<co.length;i++){var n=co[i];o(n)}for(var i=0;i<vo.length;i++){var a=vo[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}var D={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function Xu(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}var Zu={get:Xu},Un,st={};st.supportWebGL=function(){if(Un==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Un=!1}return Un};st.Int8Array=typeof Int8Array=="undefined"?Array:Int8Array;st.Uint8Array=typeof Uint8Array=="undefined"?Array:Uint8Array;st.Uint16Array=typeof Uint16Array=="undefined"?Array:Uint16Array;st.Uint32Array=typeof Uint32Array=="undefined"?Array:Uint32Array;st.Int16Array=typeof Int16Array=="undefined"?Array:Int16Array;st.Float32Array=typeof Float32Array=="undefined"?Array:Float32Array;st.Float64Array=typeof Float64Array=="undefined"?Array:Float64Array;var dr={};typeof window!="undefined"?dr=window:typeof global!="undefined"&&(dr=global);st.requestAnimationFrame=dr.requestAnimationFrame||dr.msRequestAnimationFrame||dr.mozRequestAnimationFrame||dr.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};st.createCanvas=function(){return document.createElement("canvas")};st.createImage=function(){return new dr.Image};st.request={get:Zu.get};st.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};st.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var Re=st,Xe=function(){this.head=null,this.tail=null,this._length=0};Xe.prototype.insert=function(e){var t=new Xe.Entry(e);return this.insertEntry(t),t};Xe.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new Xe.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};Xe.prototype.insertBeforeEntry=function(e,t){var r=new Xe.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Xe.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Xe.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Xe.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Xe.prototype.getHead=function(){if(this.head)return this.head.value};Xe.prototype.getTail=function(){if(this.tail)return this.tail.value};Xe.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Xe.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Xe.prototype.length=function(){return this._length};Xe.prototype.isEmpty=function(){return this._length===0};Xe.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t!="undefined";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Xe.prototype.clear=function(){this.tail=this.head=null,this._length=0};Xe.Entry=function(e){this.value=e,this.next=null,this.prev=null};var ju=Xe,$r=function(e){this._list=new ju,this._map={},this._maxSize=e||10};$r.prototype.setMaxSize=function(e){this._maxSize=e};$r.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};$r.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};$r.prototype.remove=function(e){var t=this._map[e];typeof t!="undefined"&&(delete this._map[e],this._list.remove(t))};$r.prototype.clear=function(){this._list.clear(),this._map={}};var Ns=$r,Ee={},po={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Ct(e){return e=Math.round(e),e<0?0:e>255?255:e}function Yu(e){return e=Math.round(e),e<0?0:e>360?360:e}function xi(e){return e<0?0:e>1?1:e}function Gn(e){return e.length&&e.charAt(e.length-1)==="%"?Ct(parseFloat(e)/100*255):Ct(parseInt(e,10))}function Hr(e){return e.length&&e.charAt(e.length-1)==="%"?xi(parseFloat(e)/100):xi(parseFloat(e))}function zn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Qt(e,t,r){return e+(t-e)*r}function At(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function va(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Is=new Ns(20),Hi=null;function Lr(e,t){Hi&&va(Hi,t),Hi=Is.put(e,Hi||t.slice())}Ee.parse=function(e,t){if(!!e){t=t||[];var r=Is.get(e);if(r)return va(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in po)return va(t,po[i]),Lr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){At(t,0,0,0,1);return}return At(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),Lr(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){At(t,0,0,0,1);return}return At(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),Lr(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){At(t,0,0,0,1);return}u=Hr(l.pop());case"rgb":if(l.length!==3){At(t,0,0,0,1);return}return At(t,Gn(l[0]),Gn(l[1]),Gn(l[2]),u),Lr(e,t),t;case"hsla":if(l.length!==4){At(t,0,0,0,1);return}return l[3]=Hr(l[3]),pa(l,t),Lr(e,t),t;case"hsl":if(l.length!==3){At(t,0,0,0,1);return}return pa(l,t),Lr(e,t),t;default:return}}At(t,0,0,0,1)}};Ee.parseToFloat=function(e,t){if(t=Ee.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function pa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Hr(e[1]),n=Hr(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],At(t,Ct(zn(o,a,r+1/3)*255),Ct(zn(o,a,r)*255),Ct(zn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function qu(e){if(!!e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var h=((a-t)/6+o/2)/o,f=((a-r)/6+o/2)/o,c=((a-i)/6+o/2)/o;t===a?l=c-f:r===a?l=1/3+h-c:i===a&&(l=2/3+f-h),l<0&&(l+=1),l>1&&(l-=1)}var d=[l*360,u,s];return e[3]!=null&&d.push(e[3]),d}}Ee.lift=function(e,t){var r=Ee.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return Ee.stringify(r,r.length===4?"rgba":"rgb")}};Ee.toHex=function(e){var t=Ee.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};Ee.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=Ct(Qt(o[0],s[0],l)),r[1]=Ct(Qt(o[1],s[1],l)),r[2]=Ct(Qt(o[2],s[2],l)),r[3]=xi(Qt(o[3],s[3],l)),r}};Ee.fastMapToColor=Ee.fastLerp;Ee.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=Ee.parse(t[n]),s=Ee.parse(t[a]),l=i-n,u=Ee.stringify([Ct(Qt(o[0],s[0],l)),Ct(Qt(o[1],s[1],l)),Ct(Qt(o[2],s[2],l)),xi(Qt(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};Ee.mapToColor=Ee.lerp;Ee.modifyHSL=function(e,t,r,i){if(e=Ee.parse(e),e)return e=qu(e),t!=null&&(e[0]=Yu(t)),r!=null&&(e[1]=Hr(r)),i!=null&&(e[2]=Hr(i)),Ee.stringify(pa(e),"rgba")};Ee.modifyAlpha=function(e,t){if(e=Ee.parse(e),e&&t!=null)return e[3]=xi(t),Ee.stringify(e,"rgba")};Ee.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var $u=Ee,Ku=$u.parseToFloat,Hn={};function mo(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function Qu(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=mo(e)+`
`+mo(t)+`
`+i.join(`
`);if(Hn[o])return Hn[o];var s=Ye.genGUID();return Hn[o]=s,s}var Ju=ot.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=Ku(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ye.clone(e.vertexDefines),this.fragmentDefines=Ye.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);Ye.defaults(this.vertexDefines,n),Ye.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ye.clone(this.vertexDefines),e.fragmentDefines=Ye.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r!=null?r:null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Qu(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Et=Ju,tn=1e-6,$e=Array,Ur=Math.random,K={};K.create=function(){var e=new $e(2);return e[0]=0,e[1]=0,e};K.clone=function(e){var t=new $e(2);return t[0]=e[0],t[1]=e[1],t};K.fromValues=function(e,t){var r=new $e(2);return r[0]=e,r[1]=t,r};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};K.set=function(e,t,r){return e[0]=t,e[1]=r,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};K.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};K.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};K.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};K.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};K.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};K.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};K.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};K.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};K.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};K.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};K.forEach=function(){var e=K.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var Z=K,te=function(e,t){e=e||0,t=t||0,this.array=Z.fromValues(e,t),this._dirty=!0};te.prototype={constructor:te,add:function(e){return Z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new te(this.x,this.y)},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return Z.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return Z.dist(this.array,e.array)},distance:function(e){return Z.distance(this.array,e.array)},div:function(e){return Z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return Z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return Z.dot(this.array,e.array)},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(e,t,r){return Z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return Z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return Z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return Z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return Z.random(this.array,e),this._dirty=!0,this},scale:function(e){return Z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return Z.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return Z.sqrDist(this.array,e.array)},squaredDistance:function(e){return Z.squaredDistance(this.array,e.array)},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},sub:function(e){return Z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return Z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return Z.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return Z.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return Z.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return Z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var _o=te.prototype;Object.defineProperty(_o,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(_o,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}te.add=function(e,t,r){return Z.add(e.array,t.array,r.array),e._dirty=!0,e};te.set=function(e,t,r){return Z.set(e.array,t,r),e._dirty=!0,e};te.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};te.cross=function(e,t,r){return Z.cross(e.array,t.array,r.array),e._dirty=!0,e};te.dist=function(e,t){return Z.distance(e.array,t.array)};te.distance=te.dist;te.div=function(e,t,r){return Z.divide(e.array,t.array,r.array),e._dirty=!0,e};te.divide=te.div;te.dot=function(e,t){return Z.dot(e.array,t.array)};te.len=function(e){return Z.length(e.array)};te.lerp=function(e,t,r,i){return Z.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};te.min=function(e,t,r){return Z.min(e.array,t.array,r.array),e._dirty=!0,e};te.max=function(e,t,r){return Z.max(e.array,t.array,r.array),e._dirty=!0,e};te.mul=function(e,t,r){return Z.multiply(e.array,t.array,r.array),e._dirty=!0,e};te.multiply=te.mul;te.negate=function(e,t){return Z.negate(e.array,t.array),e._dirty=!0,e};te.normalize=function(e,t){return Z.normalize(e.array,t.array),e._dirty=!0,e};te.random=function(e,t){return Z.random(e.array,t),e._dirty=!0,e};te.scale=function(e,t,r){return Z.scale(e.array,t.array,r),e._dirty=!0,e};te.scaleAndAdd=function(e,t,r,i){return Z.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};te.sqrDist=function(e,t){return Z.sqrDist(e.array,t.array)};te.squaredDistance=te.sqrDist;te.sqrLen=function(e){return Z.sqrLen(e.array)};te.squaredLength=te.sqrLen;te.sub=function(e,t,r){return Z.subtract(e.array,t.array,r.array),e._dirty=!0,e};te.subtract=te.sub;te.transformMat2=function(e,t,r){return Z.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};te.transformMat2d=function(e,t,r){return Z.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};te.transformMat3=function(e,t,r){return Z.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};te.transformMat4=function(e,t,r){return Z.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var mt=te,go=1,yo=2,Vn=3,xo={};function eh(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function To(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),eh(r)].join(`
`)}var wo=new Re.Float32Array(16),th=ot.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)wo[o]=i[o];i=wo}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new Re.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],h=0;h<16;h++)s[l++]=u[h];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=xo[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=xo[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var h=a[u];if(h==null){if(h=i.getAttribLocation(n,u),h===-1){s[l]=-1;continue}a[u]=h}s[l]=h,o[h]?o[h]=yo:o[h]=go}for(var l=0;l<o.length;l++)switch(o[l]){case go:i.enableVertexAttribArray(l),o[l]=Vn;break;case yo:o[l]=Vn;break;case Vn:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=To(e,n,r);if(s||(s=To(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var h=t.uniforms[u];this._locations[h]=e.getUniformLocation(a,h)}}}),rh=th,ih=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Eo(e,t,r){function i(o,s,l,u){var h="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var f=parseInt(s);f<parseInt(l);f++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,f.toFixed(1)).replace(/_idx_/g,f)+"}";return h}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(ih,i)}function kn(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function nh(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function ah(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Os(e){this._renderer=e,this._cache={}}Os.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var g=i[o];if(g)return g;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,h=t.getEnabledTextures(),f="";if(n){var c={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(c.USE_SKIN_MATRICES_TEXTURE=null),f+=`
`+kn(c)+`
`}a&&(f+=`
#define INSTANCING
`);var d=f+kn(t.vertexDefines,s,h),v=f+kn(t.fragmentDefines,s,h),p=d+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(E){return l.getGLExtension(E)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=nh(m)+`
`+ah(t.precision)+`
`+v+`
`+t.shader.fragment,x=Eo(p,t.vertexDefines,s),y=Eo(_,t.fragmentDefines,s),g=new rh;g.uniformSemantics=t.shader.uniformSemantics,g.attributes=t.shader.attributes;var w=g.buildProgram(u,t.shader,x,y);return g.__error=w,i[o]=g,g};var So=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,oh=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,bo=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,sh={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Ut(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Ao={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Ut(2)},vec3:function(){return Ut(3)},vec4:function(){return Ut(4)},ivec2:function(){return Ut(2)},ivec3:function(){return Ut(3)},ivec4:function(){return Ut(4)},mat2:function(){return Ut(4)},mat3:function(){return Ut(9)},mat4:function(){return Ut(16)},array:function(){return[]}},ma=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Bs=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Fs=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],lh={vec4:4,vec3:3,vec2:2,float:1},Wn={},Us={};function uh(e,t){var r="vertex:"+e+"fragment:"+t;if(Wn[r])return Wn[r];var i=Ye.genGUID();return Wn[r]=i,Us[i]={vertex:e,fragment:t},i}function Co(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Dr(){console.error("Wrong uniform/attributes syntax")}function Lo(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,h=4,f=5,c=o,d={},v=null,p;m(i[0]);function m(y){y||Dr();var g=y.match(/\[(.*?)\]/);p=y.replace(/\[(.*?)\]/,""),d[p]={},g&&(d[p].isArray=!0,d[p].arraySize=g[1])}for(var a=1;a<i.length;a++){var _=i[a];if(!!_){if(_==="="){if(c!==o&&c!==u){Dr();break}c=s;continue}else if(_===":"){c=h;continue}else if(_===","){if(c===l){if(!(v instanceof Array)){Dr();break}v.push(+i[++a])}else c=f;continue}else if(_===")"){d[p].value=new Re.Float32Array(v),v=null,c=f;continue}else if(_==="("){if(c!==l){Dr();break}if(!(v instanceof Array)){Dr();break}v.push(+i[++a]);continue}else if(_.indexOf("vec")>=0){if(c!==s&&c!==h){Dr();break}c=l,v=[];continue}else if(c===s){e==="bool"?d[p].value=_==="true":d[p].value=parseFloat(_),v=null;continue}else if(c===h){var x=_;ma.indexOf(x)>=0||Bs.indexOf(x)>=0||Fs.indexOf(x)>=0?d[p].semantic=x:x==="ignore"||x==="unconfigurable"?d[p].ignore=!0:e==="bool"?d[p].value=x==="true":d[p].value=parseFloat(x);continue}m(_),c=o}}return d}function N(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Co(e),t=Co(t),this._shaderID=uh(e,t),this._vertexCode=N.parseImport(e),this._fragmentCode=N.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}N.prototype={constructor:N,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=N.parseImport(this.vertex),this._fragmentCode=N.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(ma.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Fs.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else Bs.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Ao.array:i||Ao[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(So,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(So,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=Lo(o,s),u=[];for(var h in l){var f=l[h],c=f.semantic,d=h,v=sh[o],p=i(l[h].value);l[h].isArray&&(d+="["+l[h].arraySize+"]",v+="v"),u.push(d),t._uniformList.push(h),f.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[h]={shaderType:r,type:o}),c?t._addSemanticUniform(h,v,c):t._addMaterialUniform(h,o,v,p,l[h].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(oh,r);function r(i,n,a){var o=Lo(n,a),s=lh[n]||1,l=[];for(var u in o){var h=o[u].semantic;if(e[u]={type:"float",size:s,semantic:h||null},h){if(ma.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(bo,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(bo,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Us[this._shaderID],t=new N(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(N.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(N.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(N.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(N.prototype,"uniforms",{get:function(){return this._uniformList}}));var hh=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;N.parseImport=function(e){return e=e.replace(hh,function(n,r,i){var n=N.source(i);return n?N.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var fh=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;N.import=function(e){e.replace(fh,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=N.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};N.codes={};N.source=function(e){for(var t=e.split("."),r=N.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};var Gs=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`,me={};me.create=function(){var e=new $e(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};me.clone=function(e){var t=new $e(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};me.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};me.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};me.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};me.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],f=t[9],c=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-i*o,y=r*l-n*o,g=r*u-a*o,w=i*l-n*s,E=i*u-a*s,A=n*u-a*l,S=h*p-f*v,C=h*m-c*v,P=h*_-d*v,L=f*m-c*p,R=f*_-d*p,I=c*_-d*m,M=x*I-y*R+g*L+w*P-E*C+A*S;return M?(M=1/M,e[0]=(s*I-l*R+u*L)*M,e[1]=(n*R-i*I-a*L)*M,e[2]=(p*A-m*E+_*w)*M,e[3]=(c*E-f*A-d*w)*M,e[4]=(l*P-o*I-u*C)*M,e[5]=(r*I-n*P+a*C)*M,e[6]=(m*g-v*A-_*y)*M,e[7]=(h*A-c*g+d*y)*M,e[8]=(o*R-s*P+u*S)*M,e[9]=(i*P-r*R-a*S)*M,e[10]=(v*E-p*g+_*x)*M,e[11]=(f*g-h*E-d*x)*M,e[12]=(s*C-o*L-l*S)*M,e[13]=(r*L-i*C+n*S)*M,e[14]=(p*y-v*w-m*x)*M,e[15]=(h*w-f*y+c*x)*M,e):null};me.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],f=t[9],c=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15];return e[0]=s*(c*_-d*m)-f*(l*_-u*m)+p*(l*d-u*c),e[1]=-(i*(c*_-d*m)-f*(n*_-a*m)+p*(n*d-a*c)),e[2]=i*(l*_-u*m)-s*(n*_-a*m)+p*(n*u-a*l),e[3]=-(i*(l*d-u*c)-s*(n*d-a*c)+f*(n*u-a*l)),e[4]=-(o*(c*_-d*m)-h*(l*_-u*m)+v*(l*d-u*c)),e[5]=r*(c*_-d*m)-h*(n*_-a*m)+v*(n*d-a*c),e[6]=-(r*(l*_-u*m)-o*(n*_-a*m)+v*(n*u-a*l)),e[7]=r*(l*d-u*c)-o*(n*d-a*c)+h*(n*u-a*l),e[8]=o*(f*_-d*p)-h*(s*_-u*p)+v*(s*d-u*f),e[9]=-(r*(f*_-d*p)-h*(i*_-a*p)+v*(i*d-a*f)),e[10]=r*(s*_-u*p)-o*(i*_-a*p)+v*(i*u-a*s),e[11]=-(r*(s*d-u*f)-o*(i*d-a*f)+h*(i*u-a*s)),e[12]=-(o*(f*m-c*p)-h*(s*m-l*p)+v*(s*c-l*f)),e[13]=r*(f*m-c*p)-h*(i*m-n*p)+v*(i*c-n*f),e[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),e[15]=r*(s*c-l*f)-o*(i*c-n*f)+h*(i*l-n*s),e};me.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],f=e[10],c=e[11],d=e[12],v=e[13],p=e[14],m=e[15],_=t*o-r*a,x=t*s-i*a,y=t*l-n*a,g=r*s-i*o,w=r*l-n*o,E=i*l-n*s,A=u*v-h*d,S=u*p-f*d,C=u*m-c*d,P=h*p-f*v,L=h*m-c*v,R=f*m-c*p;return _*R-x*L+y*P+g*C-w*S+E*A};me.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],f=t[8],c=t[9],d=t[10],v=t[11],p=t[12],m=t[13],_=t[14],x=t[15],y=r[0],g=r[1],w=r[2],E=r[3];return e[0]=y*i+g*s+w*f+E*p,e[1]=y*n+g*l+w*c+E*m,e[2]=y*a+g*u+w*d+E*_,e[3]=y*o+g*h+w*v+E*x,y=r[4],g=r[5],w=r[6],E=r[7],e[4]=y*i+g*s+w*f+E*p,e[5]=y*n+g*l+w*c+E*m,e[6]=y*a+g*u+w*d+E*_,e[7]=y*o+g*h+w*v+E*x,y=r[8],g=r[9],w=r[10],E=r[11],e[8]=y*i+g*s+w*f+E*p,e[9]=y*n+g*l+w*c+E*m,e[10]=y*a+g*u+w*d+E*_,e[11]=y*o+g*h+w*v+E*x,y=r[12],g=r[13],w=r[14],E=r[15],e[12]=y*i+g*s+w*f+E*p,e[13]=y*n+g*l+w*c+E*m,e[14]=y*a+g*u+w*d+E*_,e[15]=y*o+g*h+w*v+E*x,e};me.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],h=t[9],f=t[10],c=t[12],d=t[13],v=t[14],p=r[0],m=r[1],_=r[2];return e[0]=p*i+m*o+_*u,e[1]=p*n+m*s+_*h,e[2]=p*a+m*l+_*f,p=r[4],m=r[5],_=r[6],e[4]=p*i+m*o+_*u,e[5]=p*n+m*s+_*h,e[6]=p*a+m*l+_*f,p=r[8],m=r[9],_=r[10],e[8]=p*i+m*o+_*u,e[9]=p*n+m*s+_*h,e[10]=p*a+m*l+_*f,p=r[12],m=r[13],_=r[14],e[12]=p*i+m*o+_*u+c,e[13]=p*n+m*s+_*h+d,e[14]=p*a+m*l+_*f+v,e};me.mul=me.multiply;me.mulAffine=me.multiplyAffine;me.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,h,f,c,d,v,p,m,_;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],h=t[4],f=t[5],c=t[6],d=t[7],v=t[8],p=t[9],m=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=h,e[5]=f,e[6]=c,e[7]=d,e[8]=v,e[9]=p,e[10]=m,e[11]=_,e[12]=o*i+h*n+v*a+t[12],e[13]=s*i+f*n+p*a+t[13],e[14]=l*i+c*n+m*a+t[14],e[15]=u*i+d*n+_*a+t[15]),e};me.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};me.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,h,f,c,d,v,p,m,_,x,y,g,w,E,A,S,C,P,L,R,I,M,B;return Math.abs(s)<tn?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),h=1-u,f=t[0],c=t[1],d=t[2],v=t[3],p=t[4],m=t[5],_=t[6],x=t[7],y=t[8],g=t[9],w=t[10],E=t[11],A=n*n*h+u,S=a*n*h+o*l,C=o*n*h-a*l,P=n*a*h-o*l,L=a*a*h+u,R=o*a*h+n*l,I=n*o*h+a*l,M=a*o*h-n*l,B=o*o*h+u,e[0]=f*A+p*S+y*C,e[1]=c*A+m*S+g*C,e[2]=d*A+_*S+w*C,e[3]=v*A+x*S+E*C,e[4]=f*P+p*L+y*R,e[5]=c*P+m*L+g*R,e[6]=d*P+_*L+w*R,e[7]=v*P+x*L+E*R,e[8]=f*I+p*M+y*B,e[9]=c*I+m*M+g*B,e[10]=d*I+_*M+w*B,e[11]=v*I+x*M+E*B,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};me.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],f=t[10],c=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=o*n+h*i,e[6]=s*n+f*i,e[7]=l*n+c*i,e[8]=u*n-a*i,e[9]=h*n-o*i,e[10]=f*n-s*i,e[11]=c*n-l*i,e};me.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],h=t[9],f=t[10],c=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=o*n-h*i,e[2]=s*n-f*i,e[3]=l*n-c*i,e[8]=a*i+u*n,e[9]=o*i+h*n,e[10]=s*i+f*n,e[11]=l*i+c*n,e};me.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],h=t[5],f=t[6],c=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=o*n+h*i,e[2]=s*n+f*i,e[3]=l*n+c*i,e[4]=u*n-a*i,e[5]=h*n-o*i,e[6]=f*n-s*i,e[7]=c*n-l*i,e};me.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,u=a+a,h=i*s,f=i*l,c=i*u,d=n*l,v=n*u,p=a*u,m=o*s,_=o*l,x=o*u;return e[0]=1-(d+p),e[1]=f+x,e[2]=c-_,e[3]=0,e[4]=f-x,e[5]=1-(h+p),e[6]=v+m,e[7]=0,e[8]=c+_,e[9]=v-m,e[10]=1-(h+d),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};me.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,f=i*s,c=n*o,d=n*s,v=n*l,p=a*o,m=a*s,_=a*l;return e[0]=1-f-v,e[1]=h+_,e[2]=c-m,e[3]=0,e[4]=h-_,e[5]=1-u-v,e[6]=d+p,e[7]=0,e[8]=c+m,e[9]=d-p,e[10]=1-u-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};me.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};me.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};me.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*u,e[15]=1,e};me.lookAt=function(e,t,r,i){var n,a,o,s,l,u,h,f,c,d,v=t[0],p=t[1],m=t[2],_=i[0],x=i[1],y=i[2],g=r[0],w=r[1],E=r[2];return Math.abs(v-g)<tn&&Math.abs(p-w)<tn&&Math.abs(m-E)<tn?me.identity(e):(h=v-g,f=p-w,c=m-E,d=1/Math.sqrt(h*h+f*f+c*c),h*=d,f*=d,c*=d,n=x*c-y*f,a=y*h-_*c,o=_*f-x*h,d=Math.sqrt(n*n+a*a+o*o),d?(d=1/d,n*=d,a*=d,o*=d):(n=0,a=0,o=0),s=f*o-c*a,l=c*n-h*o,u=h*a-f*n,d=Math.sqrt(s*s+l*l+u*u),d?(d=1/d,s*=d,l*=d,u*=d):(s=0,l=0,u=0),e[0]=n,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=l,e[6]=f,e[7]=0,e[8]=o,e[9]=u,e[10]=c,e[11]=0,e[12]=-(n*v+a*p+o*m),e[13]=-(s*v+l*p+u*m),e[14]=-(h*v+f*p+c*m),e[15]=1,e)};me.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var F=me,Y={};Y.create=function(){var e=new $e(3);return e[0]=0,e[1]=0,e[2]=0,e};Y.clone=function(e){var t=new $e(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};Y.fromValues=function(e,t,r){var i=new $e(3);return i[0]=e,i[1]=t,i[2]=r,i};Y.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};Y.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};Y.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};Y.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};Y.sub=Y.subtract;Y.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};Y.mul=Y.multiply;Y.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};Y.div=Y.divide;Y.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};Y.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};Y.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};Y.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};Y.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};Y.dist=Y.distance;Y.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};Y.sqrDist=Y.squaredDistance;Y.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};Y.len=Y.length;Y.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};Y.sqrLen=Y.squaredLength;Y.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};Y.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};Y.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};Y.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};Y.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};Y.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};Y.random=function(e,t){t=t||1;var r=Ur()*2*Math.PI,i=Ur()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};Y.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};Y.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};Y.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,f=u*n+l*i-o*a,c=u*a+o*n-s*i,d=-o*i-s*n-l*a;return e[0]=h*u+d*-o+f*-l-c*-s,e[1]=f*u+d*-s+c*-o-h*-l,e[2]=c*u+d*-l+h*-s-f*-o,e};Y.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};Y.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};Y.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};Y.forEach=function(){var e=Y.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();Y.angle=function(e,t){var r=Y.fromValues(e[0],e[1],e[2]),i=Y.fromValues(t[0],t[1],t[2]);Y.normalize(r,r),Y.normalize(i,i);var n=Y.dot(r,i);return n>1?0:Math.acos(n)};var b=Y;N.import(Gs);var we=F.create,Do={};function Mo(e){return e.material}function ch(e,t,r){return t.uniforms[r].value}function dh(e,t,r,i){return r!==i}function vh(e){return!0}function Po(){}var Ro={float:D.FLOAT,byte:D.BYTE,ubyte:D.UNSIGNED_BYTE,short:D.SHORT,ushort:D.UNSIGNED_SHORT};function ph(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function mh(e){var t,r;this.bind=function(i){t||(t=Re.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var er=ot.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window!="undefined"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=Re.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Wu(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Os(this),this._placeholderTexture=new mh(this)},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var h=u.opaque,f=u.transparent,c=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(h,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var d=we(),v=b.create(),p=0;p<f.length;p++){var m=f[p];F.multiplyAffine(d,t.viewMatrix.array,m.worldTransform.array),b.transformMat4(v,m.position.array,d),m.__depth=v[2]}this.renderPass(h,t,{getMaterial:function(_){return c||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(f,t,{getMaterial:function(_){return c||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Do[e.__uid__])return;if(Do[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Mo;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var h=this._programMgr.getProgram(a,o,t);this.validateProgram(h),a.__program=h}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Mo,r.getUniform=r.getUniform||ch,r.isMaterialChanged=r.isMaterialChanged||dh,r.beforeRender=r.beforeRender||Po,r.afterRender=r.afterRender||Po;var i=r.ifRender||vh;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],h=Date.now();t?(F.copy(Te.VIEW,t.viewMatrix.array),F.copy(Te.PROJECTION,t.projectionMatrix.array),F.copy(Te.VIEWINVERSE,t.worldTransform.array)):(F.identity(Te.VIEW),F.identity(Te.PROJECTION),F.identity(Te.VIEWINVERSE)),F.multiply(Te.VIEWPROJECTION,Te.PROJECTION,Te.VIEW),F.invert(Te.PROJECTIONINVERSE,Te.PROJECTION),F.invert(Te.VIEWPROJECTIONINVERSE,Te.VIEWPROJECTION);for(var f=this.gl,c=this._sceneRendering,d,v,p,m,_,x,y,g,w,E,A,S,C=null,P=0;P<e.length;P++){var L=e[P],R=L.worldTransform!=null,I;if(!!i(L)){R&&(I=L.isSkinnedMesh&&L.isSkinnedMesh()?L.offsetMatrix?L.offsetMatrix.array:Te.IDENTITY:L.worldTransform.array);var M=L.geometry,B=r.getMaterial.call(this,L),H=L.__program,W=B.shader,U=M.__uid__+"-"+H.__uid__,ue=U!==E;E=U,ue&&C&&C.bindVertexArrayOES(null),R&&(F.copy(Te.WORLD,I),F.multiply(Te.WORLDVIEWPROJECTION,Te.VIEWPROJECTION,I),F.multiplyAffine(Te.WORLDVIEW,Te.VIEW,I),(W.matrixSemantics.WORLDINVERSE||W.matrixSemantics.WORLDINVERSETRANSPOSE)&&F.invert(Te.WORLDINVERSE,I),(W.matrixSemantics.WORLDVIEWINVERSE||W.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&F.invert(Te.WORLDVIEWINVERSE,Te.WORLDVIEW),(W.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||W.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&F.invert(Te.WORLDVIEWPROJECTIONINVERSE,Te.WORLDVIEWPROJECTION)),L.beforeRender&&L.beforeRender(this),r.beforeRender.call(this,L,B,d);var V=H!==v;V?(H.bind(this),H.setUniformOfSemantic(f,"VIEWPORT",o),H.setUniformOfSemantic(f,"WINDOW_SIZE",l),t&&(H.setUniformOfSemantic(f,"NEAR",t.near),H.setUniformOfSemantic(f,"FAR",t.far)),H.setUniformOfSemantic(f,"DEVICEPIXELRATIO",a),H.setUniformOfSemantic(f,"TIME",h),H.setUniformOfSemantic(f,"VIEWPORT_SIZE",u),c&&c.setLightUniforms(H,L.lightGroup,this)):H=v,(V||r.isMaterialChanged(L,p,B,d))&&(B.depthTest!==m&&(B.depthTest?f.enable(f.DEPTH_TEST):f.disable(f.DEPTH_TEST),m=B.depthTest),B.depthMask!==_&&(f.depthMask(B.depthMask),_=B.depthMask),B.transparent!==w&&(B.transparent?f.enable(f.BLEND):f.disable(f.BLEND),w=B.transparent),B.transparent&&(B.blend?B.blend(f):(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA))),S=this._bindMaterial(L,B,H,p||null,d||null,v||null,r.getUniform),d=B);var ve=W.matrixSemanticKeys;if(R)for(var he=0;he<ve.length;he++){var ge=ve[he],ye=W.matrixSemantics[ge],re=Te[ge];if(ye.isTranspose){var Ie=Te[ye.semanticNoTranspose];F.transpose(re,Ie)}H.setUniform(f,ye.type,ye.symbol,re)}L.cullFace!==y&&(y=L.cullFace,f.cullFace(y)),L.frontFace!==g&&(g=L.frontFace,f.frontFace(g)),L.culling!==x&&(x=L.culling,x?f.enable(f.CULL_FACE):f.disable(f.CULL_FACE)),this._updateSkeleton(L,H,S),ue&&(A=this._bindVAO(C,W,M,H)),this._renderObject(L,A,H),r.afterRender(this,L),L.afterRender&&L.afterRender(this),v=H,p=L}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),h=u&&n.indices instanceof Uint32Array,f=h?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,f,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,f,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var c=0;c<l.length;c++)i.disableVertexAttribArray(l[c])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=Ro[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),h=t.getEnabledUniforms(),f=t.getTextureUniforms(),c=this._placeholderTexture,d=0;d<f.length;d++){var v=f[d],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var _=0;_<p.length;_++)p[_]&&(p[_].__slot=-1)}c.__slot=-1;for(var d=0;d<h.length;d++){var v=h[d],x=t.uniforms[v],p=o(e,t,v),m=x.type,y=m==="t";if(y&&(!p||!p.isRenderable())&&(p=c),n&&l){var g=o(i,n,v);if(y&&(!g||!g.isRenderable())&&(g=c),g===p){if(y)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var _=0;_<p.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(y)if(p.__slot<0){var w=r.currentTextureSlot(),E=r.setUniform(s,"1i",v,w);E&&(r.takeCurrentTextureSlot(this,p),p.__slot=w)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var A=[],_=0;_<p.length;_++){var S=p[_];if(S.__slot<0){var w=r.currentTextureSlot();A.push(w),r.takeCurrentTextureSlot(this,S),S.__slot=w}else A.push(S.__slot)}r.setUniform(s,"1iv",v,A)}else r.setUniform(s,x.type,v,p)}else r.setUniform(s,x.type,v,p)}var C=r.currentTextureSlot();return r.resetTextureSlot(u),C},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,g=u.indicesBuffer,y=[],f=[],c=0;c<h.length;c++){var d=h[c],v=d.name,p=d.semantic,m;if(p){var _=t.attributeSemantics[p];m=_&&_.symbol}else m=v;m&&i.attributes[m]&&(y.push(d),f.push(m))}s=new ph(y,f,g),n&&(r.__vaoCache[o]=s)}var x=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(s.vao));var y=s.availableAttributes,g=s.indicesBuffer;if(x){for(var w=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),c=0;c<y.length;c++){var E=w[c];if(E!==-1){var d=y[c],A=d.buffer,S=d.size,C=Ro[d.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,A),a.vertexAttribPointer(E,S,C,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new Et({shader:new N(N.source("clay.prez.vertex"),N.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,h=a.uniforms[l].type;if(!!u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var f=0;f<u.length;f++)u[f]&&u[f].dispose&&u[f].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new mt),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});er.opaqueSortCompare=er.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};er.transparentSortCompare=er.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var Te={IDENTITY:we(),WORLD:we(),VIEW:we(),PROJECTION:we(),WORLDVIEW:we(),VIEWPROJECTION:we(),WORLDVIEWPROJECTION:we(),WORLDINVERSE:we(),VIEWINVERSE:we(),PROJECTIONINVERSE:we(),WORLDVIEWINVERSE:we(),VIEWPROJECTIONINVERSE:we(),WORLDVIEWPROJECTIONINVERSE:we(),WORLDTRANSPOSE:we(),VIEWTRANSPOSE:we(),PROJECTIONTRANSPOSE:we(),WORLDVIEWTRANSPOSE:we(),VIEWPROJECTIONTRANSPOSE:we(),WORLDVIEWPROJECTIONTRANSPOSE:we(),WORLDINVERSETRANSPOSE:we(),VIEWINVERSETRANSPOSE:we(),PROJECTIONINVERSETRANSPOSE:we(),WORLDVIEWINVERSETRANSPOSE:we(),VIEWPROJECTIONINVERSETRANSPOSE:we(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:we()};er.COLOR_BUFFER_BIT=D.COLOR_BUFFER_BIT;er.DEPTH_BUFFER_BIT=D.DEPTH_BUFFER_BIT;er.STENCIL_BUFFER_BIT=D.STENCIL_BUFFER_BIT;var gi=er,j=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=b.fromValues(e,t,r),this._dirty=!0};j.prototype={constructor:j,add:function(e){return b.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new j(this.x,this.y,this.z)},copy:function(e){return b.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return b.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return b.dist(this.array,e.array)},distance:function(e){return b.distance(this.array,e.array)},div:function(e){return b.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return b.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return b.dot(this.array,e.array)},len:function(){return b.len(this.array)},length:function(){return b.length(this.array)},lerp:function(e,t,r){return b.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return b.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return b.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return b.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return b.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return b.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return b.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return b.random(this.array,e),this._dirty=!0,this},scale:function(e){return b.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return b.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return b.sqrDist(this.array,e.array)},squaredDistance:function(e){return b.squaredDistance(this.array,e.array)},sqrLen:function(){return b.sqrLen(this.array)},squaredLength:function(){return b.squaredLength(this.array)},sub:function(e){return b.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return b.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return b.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return b.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return b.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){j.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){j.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Vi=Object.defineProperty;if(Vi){var Xn=j.prototype;Vi(Xn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Vi(Xn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Vi(Xn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}j.add=function(e,t,r){return b.add(e.array,t.array,r.array),e._dirty=!0,e};j.set=function(e,t,r,i){b.set(e.array,t,r,i),e._dirty=!0};j.copy=function(e,t){return b.copy(e.array,t.array),e._dirty=!0,e};j.cross=function(e,t,r){return b.cross(e.array,t.array,r.array),e._dirty=!0,e};j.dist=function(e,t){return b.distance(e.array,t.array)};j.distance=j.dist;j.div=function(e,t,r){return b.divide(e.array,t.array,r.array),e._dirty=!0,e};j.divide=j.div;j.dot=function(e,t){return b.dot(e.array,t.array)};j.len=function(e){return b.length(e.array)};j.lerp=function(e,t,r,i){return b.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};j.min=function(e,t,r){return b.min(e.array,t.array,r.array),e._dirty=!0,e};j.max=function(e,t,r){return b.max(e.array,t.array,r.array),e._dirty=!0,e};j.mul=function(e,t,r){return b.multiply(e.array,t.array,r.array),e._dirty=!0,e};j.multiply=j.mul;j.negate=function(e,t){return b.negate(e.array,t.array),e._dirty=!0,e};j.normalize=function(e,t){return b.normalize(e.array,t.array),e._dirty=!0,e};j.random=function(e,t){return b.random(e.array,t),e._dirty=!0,e};j.scale=function(e,t,r){return b.scale(e.array,t.array,r),e._dirty=!0,e};j.scaleAndAdd=function(e,t,r,i){return b.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};j.sqrDist=function(e,t){return b.sqrDist(e.array,t.array)};j.squaredDistance=j.sqrDist;j.sqrLen=function(e){return b.sqrLen(e.array)};j.squaredLength=j.sqrLen;j.sub=function(e,t,r){return b.subtract(e.array,t.array,r.array),e._dirty=!0,e};j.subtract=j.sub;j.transformMat3=function(e,t,r){return b.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};j.transformMat4=function(e,t,r){return b.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};j.transformQuat=function(e,t,r){return b.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function Tt(e,t,r){return e<t?t:e>r?r:e}var pe=Math.atan2,wt=Math.asin,Mr=Math.abs;j.eulerFromQuat=function(e,t,c){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,u=a*a,h=o*o,f=s*s,c=(c||"XYZ").toUpperCase();switch(c){case"XYZ":i[0]=pe(2*(n*s-a*o),f-l-u+h),i[1]=wt(Tt(2*(n*o+a*s),-1,1)),i[2]=pe(2*(o*s-n*a),f+l-u-h);break;case"YXZ":i[0]=wt(Tt(2*(n*s-a*o),-1,1)),i[1]=pe(2*(n*o+a*s),f-l-u+h),i[2]=pe(2*(n*a+o*s),f-l+u-h);break;case"ZXY":i[0]=wt(Tt(2*(n*s+a*o),-1,1)),i[1]=pe(2*(a*s-o*n),f-l-u+h),i[2]=pe(2*(o*s-n*a),f-l+u-h);break;case"ZYX":i[0]=pe(2*(n*s+o*a),f-l-u+h),i[1]=wt(Tt(2*(a*s-n*o),-1,1)),i[2]=pe(2*(n*a+o*s),f+l-u-h);break;case"YZX":i[0]=pe(2*(n*s-o*a),f-l+u-h),i[1]=pe(2*(a*s-n*o),f+l-u-h),i[2]=wt(Tt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=pe(2*(n*s+a*o),f-l+u-h),i[1]=pe(2*(n*o+a*s),f+l-u-h),i[2]=wt(Tt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+c)}return e};j.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],h=i[2],f=i[5],c=i[8],d=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":d[1]=wt(Tt(o,-1,1)),Mr(o)<.99999?(d[0]=pe(-u,c),d[2]=pe(-a,n)):(d[0]=pe(f,l),d[2]=0);break;case"YXZ":d[0]=wt(-Tt(u,-1,1)),Mr(u)<.99999?(d[1]=pe(o,c),d[2]=pe(s,l)):(d[1]=pe(-h,n),d[2]=0);break;case"ZXY":d[0]=wt(Tt(f,-1,1)),Mr(f)<.99999?(d[1]=pe(-h,c),d[2]=pe(-a,l)):(d[1]=0,d[2]=pe(s,n));break;case"ZYX":d[1]=wt(-Tt(h,-1,1)),Mr(h)<.99999?(d[0]=pe(f,c),d[2]=pe(s,n)):(d[0]=0,d[2]=pe(-a,l));break;case"YZX":d[2]=wt(Tt(s,-1,1)),Mr(s)<.99999?(d[0]=pe(-u,l),d[1]=pe(-h,n)):(d[0]=0,d[1]=pe(o,c));break;case"XZY":d[2]=wt(-Tt(a,-1,1)),Mr(a)<.99999?(d[0]=pe(f,l),d[1]=pe(o,n)):(d[0]=pe(-u,c),d[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(j,{POSITIVE_X:{get:function(){return new j(1,0,0)}},NEGATIVE_X:{get:function(){return new j(-1,0,0)}},POSITIVE_Y:{get:function(){return new j(0,1,0)}},NEGATIVE_Y:{get:function(){return new j(0,-1,0)}},POSITIVE_Z:{get:function(){return new j(0,0,1)}},NEGATIVE_Z:{get:function(){return new j(0,0,-1)}},UP:{get:function(){return new j(0,1,0)}},ZERO:{get:function(){return new j}}});var G=j,Zn=1e-5,rn=function(e,t){this.origin=e||new G,this.direction=t||new G};rn.prototype={constructor:rn,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=b.dot(r,a);if(o===0)return null;t||(t=new G);var s=(b.dot(r,n)-i)/o;return b.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=b.dot(e.normal.array,this.direction.array);b.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=b.create();return function(t){b.sub(e,t,this.origin.array);var r=b.dot(e,this.direction.array);if(r<0)return b.distance(this.origin.array,t);var i=b.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=b.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,b.sub(e,t,n);var o=b.dot(e,a),s=b.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),f=o-h,c=o+h;return i||(i=new G),f<0?c<0?null:(b.scaleAndAdd(i.array,n,a,c),i):(b.scaleAndAdd(i.array,n,a,f),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,h,f,c,d,v;if(o>=0?(u=(n[0]-i[0])*o,h=(a[0]-i[0])*o):(h=(n[0]-i[0])*o,u=(a[0]-i[0])*o),s>=0?(f=(n[1]-i[1])*s,c=(a[1]-i[1])*s):(c=(n[1]-i[1])*s,f=(a[1]-i[1])*s),u>c||f>h||((f>u||u!==u)&&(u=f),(c<h||h!==h)&&(h=c),l>=0?(d=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,d=(a[2]-i[2])*l),u>v||d>h)||((d>u||u!==u)&&(u=d),(v<h||h!==h)&&(h=v),h<0))return null;var p=u>=0?u:h;return t||(t=new G),b.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=b.create(),t=b.create(),r=b.create(),i=b.create();return function(n,a,o,s,l,u){var h=this.direction.array,f=this.origin.array;n=n.array,a=a.array,o=o.array,b.sub(e,a,n),b.sub(t,o,n),b.cross(i,t,h);var c=b.dot(e,i);if(s){if(c>-Zn)return null}else if(c>-Zn&&c<Zn)return null;b.sub(r,f,n);var d=b.dot(i,r)/c;if(d<0||d>1)return null;b.cross(i,e,r);var v=b.dot(h,i)/c;if(v<0||v>1||d+v>1)return null;b.cross(i,e,t);var p=-b.dot(r,i)/c;return p<0?null:(l||(l=new G),u&&G.set(u,1-d-v,d,v),b.scaleAndAdd(l.array,f,h,p),l)}}(),applyTransform:function(e){G.add(this.direction,this.direction,this.origin),G.transformMat4(this.origin,this.origin,e),G.transformMat4(this.direction,this.direction,e),G.sub(this.direction,this.direction,this.origin),G.normalize(this.direction,this.direction)},copy:function(e){G.copy(this.origin,e.origin),G.copy(this.direction,e.direction)},clone:function(){var e=new rn;return e.copy(this),e}};var fn=rn,J={};J.create=function(){var e=new $e(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};J.clone=function(e){var t=new $e(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};J.fromValues=function(e,t,r,i){var n=new $e(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};J.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};J.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};J.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};J.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};J.sub=J.subtract;J.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};J.mul=J.multiply;J.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};J.div=J.divide;J.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};J.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};J.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};J.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};J.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};J.dist=J.distance;J.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};J.sqrDist=J.squaredDistance;J.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};J.len=J.length;J.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};J.sqrLen=J.squaredLength;J.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};J.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};J.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};J.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};J.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};J.random=function(e,t){return t=t||1,e[0]=Ur(),e[1]=Ur(),e[2]=Ur(),e[3]=Ur(),J.normalize(e,e),J.scale(e,e,t),e};J.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};J.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,f=u*n+l*i-o*a,c=u*a+o*n-s*i,d=-o*i-s*n-l*a;return e[0]=h*u+d*-o+f*-l-c*-s,e[1]=f*u+d*-s+c*-o-h*-l,e[2]=c*u+d*-l+h*-s-f*-o,e};J.forEach=function(){var e=J.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var z=J,ze={};ze.create=function(){var e=new $e(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};ze.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};ze.clone=function(e){var t=new $e(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};ze.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};ze.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};ze.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};ze.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],f=h*o-s*u,c=-h*a+s*l,d=u*a-o*l,v=r*f+i*c+n*d;return v?(v=1/v,e[0]=f*v,e[1]=(-h*i+n*u)*v,e[2]=(s*i-n*o)*v,e[3]=c*v,e[4]=(h*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=d*v,e[7]=(-u*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};ze.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8];return e[0]=o*h-s*u,e[1]=n*u-i*h,e[2]=i*s-n*o,e[3]=s*l-a*h,e[4]=r*h-n*l,e[5]=n*a-r*s,e[6]=a*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*a,e};ze.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)};ze.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],f=t[8],c=r[0],d=r[1],v=r[2],p=r[3],m=r[4],_=r[5],x=r[6],y=r[7],g=r[8];return e[0]=c*i+d*o+v*u,e[1]=c*n+d*s+v*h,e[2]=c*a+d*l+v*f,e[3]=p*i+m*o+_*u,e[4]=p*n+m*s+_*h,e[5]=p*a+m*l+_*f,e[6]=x*i+y*o+g*u,e[7]=x*n+y*s+g*h,e[8]=x*a+y*l+g*f,e};ze.mul=ze.multiply;ze.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],f=t[8],c=r[0],d=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=c*i+d*o+u,e[7]=c*n+d*s+h,e[8]=c*a+d*l+f,e};ze.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],f=t[8],c=Math.sin(r),d=Math.cos(r);return e[0]=d*i+c*o,e[1]=d*n+c*s,e[2]=d*a+c*l,e[3]=d*o-c*i,e[4]=d*s-c*n,e[5]=d*l-c*a,e[6]=u,e[7]=h,e[8]=f,e};ze.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};ze.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};ze.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,f=i*s,c=n*o,d=n*s,v=n*l,p=a*o,m=a*s,_=a*l;return e[0]=1-f-v,e[3]=h-_,e[6]=c+m,e[1]=h+_,e[4]=1-u-v,e[7]=d-p,e[2]=c-m,e[5]=d+p,e[8]=1-u-f,e};ze.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],f=t[9],c=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-i*o,y=r*l-n*o,g=r*u-a*o,w=i*l-n*s,E=i*u-a*s,A=n*u-a*l,S=h*p-f*v,C=h*m-c*v,P=h*_-d*v,L=f*m-c*p,R=f*_-d*p,I=c*_-d*m,M=x*I-y*R+g*L+w*P-E*C+A*S;return M?(M=1/M,e[0]=(s*I-l*R+u*L)*M,e[1]=(l*P-o*I-u*C)*M,e[2]=(o*R-s*P+u*S)*M,e[3]=(n*R-i*I-a*L)*M,e[4]=(r*I-n*P+a*C)*M,e[5]=(i*P-r*R-a*S)*M,e[6]=(p*A-m*E+_*w)*M,e[7]=(m*g-v*A-_*y)*M,e[8]=(v*E-p*g+_*x)*M,e):null};ze.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var ne=ze,le={};le.create=function(){var e=new $e(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};le.rotationTo=function(){var e=b.create(),t=b.fromValues(1,0,0),r=b.fromValues(0,1,0);return function(i,n,a){var o=b.dot(n,a);return o<-.999999?(b.cross(e,t,n),b.length(e)<1e-6&&b.cross(e,r,n),b.normalize(e,e),le.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(b.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,le.normalize(i,i))}}();le.setAxes=function(){var e=ne.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],le.normalize(t,le.fromMat3(t,e))}}();le.clone=z.clone;le.fromValues=z.fromValues;le.copy=z.copy;le.set=z.set;le.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};le.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};le.add=z.add;le.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*h+o*s+n*u-a*l,e[1]=n*h+o*l+a*s-i*u,e[2]=a*h+o*u+i*l-n*s,e[3]=o*h-i*s-n*l-a*u,e};le.mul=le.multiply;le.scale=z.scale;le.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};le.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};le.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};le.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};le.dot=z.dot;le.lerp=z.lerp;le.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],h=r[2],f=r[3],c,d,v,p,m;return d=n*l+a*u+o*h+s*f,d<0&&(d=-d,l=-l,u=-u,h=-h,f=-f),1-d>1e-6?(c=Math.acos(d),v=Math.sin(c),p=Math.sin((1-i)*c)/v,m=Math.sin(i*c)/v):(p=1-i,m=i),e[0]=p*n+m*l,e[1]=p*a+m*u,e[2]=p*o+m*h,e[3]=p*s+m*f,e};le.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};le.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};le.length=z.length;le.len=le.length;le.squaredLength=z.squaredLength;le.sqrLen=le.squaredLength;le.normalize=z.normalize;le.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};var $=le,xe=function(){this._axisX=new G,this._axisY=new G,this._axisZ=new G,this.array=F.create(),this._dirty=!0};xe.prototype={constructor:xe,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return F.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new xe().copy(this)},copy:function(e){return F.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return F.determinant(this.array)},fromQuat:function(e){return F.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return F.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return xe.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return F.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return F.identity(this.array),this._dirty=!0,this},invert:function(){return F.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return F.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return F.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return F.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return F.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return F.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return F.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return F.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return F.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return F.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return F.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return F.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return F.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return F.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return F.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=b.create(),t=b.create(),r=b.create(),i=ne.create();return function(n,a,o){var s=this.array;b.set(e,s[0],s[1],s[2]),b.set(t,s[4],s[5],s[6]),b.set(r,s[8],s[9],s[10]);var l=b.length(e),u=b.length(t),h=b.length(r),f=this.determinant();f<0&&(l=-l),n&&n.set(l,u,h),o.set(s[12],s[13],s[14]),ne.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,$.fromMat3(a.array,i),$.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ki=Object.defineProperty;if(ki){var jn=xe.prototype;ki(jn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),ki(jn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),ki(jn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}xe.adjoint=function(e,t){return F.adjoint(e.array,t.array),e._dirty=!0,e};xe.copy=function(e,t){return F.copy(e.array,t.array),e._dirty=!0,e};xe.determinant=function(e){return F.determinant(e.array)};xe.identity=function(e){return F.identity(e.array),e._dirty=!0,e};xe.ortho=function(e,t,r,i,n,a,o){return F.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};xe.perspective=function(e,t,r,i,n){return F.perspective(e.array,t,r,i,n),e._dirty=!0,e};xe.lookAt=function(e,t,r,i){return F.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};xe.invert=function(e,t){return F.invert(e.array,t.array),e._dirty=!0,e};xe.mul=function(e,t,r){return F.mul(e.array,t.array,r.array),e._dirty=!0,e};xe.multiply=xe.mul;xe.fromQuat=function(e,t){return F.fromQuat(e.array,t.array),e._dirty=!0,e};xe.fromRotationTranslation=function(e,t,r){return F.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};xe.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};xe.rotate=function(e,t,r,i){return F.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};xe.rotateX=function(e,t,r){return F.rotateX(e.array,t.array,r),e._dirty=!0,e};xe.rotateY=function(e,t,r){return F.rotateY(e.array,t.array,r),e._dirty=!0,e};xe.rotateZ=function(e,t,r){return F.rotateZ(e.array,t.array,r),e._dirty=!0,e};xe.scale=function(e,t,r){return F.scale(e.array,t.array,r.array),e._dirty=!0,e};xe.transpose=function(e,t){return F.transpose(e.array,t.array),e._dirty=!0,e};xe.translate=function(e,t,r){return F.translate(e.array,t.array,r.array),e._dirty=!0,e};var k=xe,fe=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=$.fromValues(e,t,r,i),this._dirty=!0};fe.prototype={constructor:fe,add:function(e){return $.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return $.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new fe(this.x,this.y,this.z,this.w)},conjugate:function(){return $.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return $.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return $.dot(this.array,e.array)},fromMat3:function(e){return $.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=ne.create();return function(t){return ne.fromMat4(e,t.array),ne.transpose(e,e),$.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return $.identity(this.array),this._dirty=!0,this},invert:function(){return $.invert(this.array,this.array),this._dirty=!0,this},len:function(){return $.len(this.array)},length:function(){return $.length(this.array)},lerp:function(e,t,r){return $.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return $.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return $.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return $.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return $.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return $.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return $.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return $.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return $.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return $.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return $.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return $.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return $.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return $.sqrLen(this.array)},squaredLength:function(){return $.squaredLength(this.array)},fromEuler:function(e,t){return fe.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ai=Object.defineProperty;if(ai){var Wi=fe.prototype;ai(Wi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ai(Wi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ai(Wi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),ai(Wi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}fe.add=function(e,t,r){return $.add(e.array,t.array,r.array),e._dirty=!0,e};fe.set=function(e,t,r,i,n){$.set(e.array,t,r,i,n),e._dirty=!0};fe.copy=function(e,t){return $.copy(e.array,t.array),e._dirty=!0,e};fe.calculateW=function(e,t){return $.calculateW(e.array,t.array),e._dirty=!0,e};fe.conjugate=function(e,t){return $.conjugate(e.array,t.array),e._dirty=!0,e};fe.identity=function(e){return $.identity(e.array),e._dirty=!0,e};fe.invert=function(e,t){return $.invert(e.array,t.array),e._dirty=!0,e};fe.dot=function(e,t){return $.dot(e.array,t.array)};fe.len=function(e){return $.length(e.array)};fe.lerp=function(e,t,r,i){return $.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};fe.slerp=function(e,t,r,i){return $.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};fe.mul=function(e,t,r){return $.multiply(e.array,t.array,r.array),e._dirty=!0,e};fe.multiply=fe.mul;fe.rotateX=function(e,t,r){return $.rotateX(e.array,t.array,r),e._dirty=!0,e};fe.rotateY=function(e,t,r){return $.rotateY(e.array,t.array,r),e._dirty=!0,e};fe.rotateZ=function(e,t,r){return $.rotateZ(e.array,t.array,r),e._dirty=!0,e};fe.setAxisAngle=function(e,t,r){return $.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};fe.normalize=function(e,t){return $.normalize(e.array,t.array),e._dirty=!0,e};fe.sqrLen=function(e){return $.sqrLen(e.array)};fe.squaredLength=fe.sqrLen;fe.fromMat3=function(e,t){return $.fromMat3(e.array,t.array),e._dirty=!0,e};fe.setAxes=function(e,t,r,i){return $.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};fe.rotationTo=function(e,t,r){return $.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};fe.fromEuler=function(e,t,h){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};var zs=fe,jt=b.set,Xi=b.copy,nn=function(e,t){this.min=e||new G(1/0,1/0,1/0),this.max=t||new G(-1/0,-1/0,-1/0),this.vertices=null};nn.prototype={constructor:nn,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;Xi(i,e[0]),Xi(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return b.min(t.array,t.array,e.min.array),b.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return b.max(t.array,t.array,e.min.array),b.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=b.create(),t=b.create(),r=b.create(),i=b.create(),n=b.create(),a=b.create();return function(o,s){var l=o.min.array,u=o.max.array,h=s.array;return e[0]=h[0]*l[0],e[1]=h[1]*l[0],e[2]=h[2]*l[0],t[0]=h[0]*u[0],t[1]=h[1]*u[0],t[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],n[0]=h[8]*l[2],n[1]=h[9]*l[2],n[2]=h[10]*l[2],a[0]=h[8]*u[2],a[1]=h[9]*u[2],a[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+h[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+h[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+h[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+h[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+h[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],h=r[0],f=r[1],c=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*h+i[12],r[1]=i[5]*f+i[13],t[2]=i[10]*c+i[14];else{var d=-1/o;t[0]=i[0]*n*d,t[1]=i[5]*a*d,r[2]=(i[10]*o+i[14])*d,d=-1/u,r[0]=i[0]*s*d,r[1]=i[5]*l*d,d=-1/c,t[2]=(i[10]*c+i[14])*d}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=b.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return jt(e[0],r[0],r[1],r[2]),jt(e[1],r[0],i[1],r[2]),jt(e[2],i[0],r[1],r[2]),jt(e[3],i[0],i[1],r[2]),jt(e[4],r[0],r[1],i[2]),jt(e[5],r[0],i[1],i[2]),jt(e[6],i[0],r[1],i[2]),jt(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Xi(t.array,e.min.array),Xi(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new nn;return e.copy(this),e}};var it=nn,_h=0,gh=ot.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+_h++),this.position||(this.position=new G),this.rotation||(this.rotation=new zs),this.scale||(this.scale=new G(1,1,1)),this.worldTransform=new k,this.localTransform=new k,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(!!e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(!!n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){F.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){F.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=F.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(F.invert(e,this._parent.worldTransform.array),F.multiply(r.array,e,i.array)):F.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;F.fromRotationTranslation(i,t.array,e.array),F.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?F.multiplyAffine(t,this._parent.worldTransform.array,e):F.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new it,r=new k,i=new k;return function(n,a){return a=a||new it,this._parent?k.invert(i,this._parent.worldTransform):k.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),k.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new G(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new G,t=new k;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new k;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),It=gh,_t=It.extend({material:null,geometry:null,mode:D.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:D.BACK,frontFace:D.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=It.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=It.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});_t.POINTS=D.POINTS;_t.LINES=D.LINES;_t.LINE_LOOP=D.LINE_LOOP;_t.LINE_STRIP=D.LINE_STRIP;_t.TRIANGLES=D.TRIANGLES;_t.TRIANGLE_STRIP=D.TRIANGLE_STRIP;_t.TRIANGLE_FAN=D.TRIANGLE_FAN;_t.BACK=D.BACK;_t.FRONT=D.FRONT;_t.FRONT_AND_BACK=D.FRONT_AND_BACK;_t.CW=D.CW;_t.CCW=D.CCW;var _a=_t,Na=ot.extend({scene:null,camera:null,renderer:null},function(){this._ray=new fn,this._ndc=new mt},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof _a&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===D.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new G,t=new G,r=new G,i=new fn,n=new k;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),k.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var h=a.cullFace===D.BACK&&a.frontFace===D.CCW||a.cullFace===D.FRONT&&a.frontFace===D.CW,f,c=l.indices,d=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,_=[];if(!(!d||!d.value||!c)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){_[x]=_[x]||[];for(var y=0;y<16;y++)_[x][y]=m[x*16+y]}var g=[],w=[],E=[],A=[],S=[],C=l.attributes.skinnedPosition;(!C||!C.value)&&(l.createAttribute("skinnedPosition","f",3),C=l.attributes.skinnedPosition,C.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){d.get(x,g),v.get(x,w),p.get(x,E),w[3]=1-w[0]-w[1]-w[2],b.set(A,0,0,0);for(var y=0;y<4;y++)E[y]>=0&&w[y]>1e-4&&(b.transformMat4(S,g,_[E[y]]),b.scaleAndAdd(A,A,S,w[y]));C.set(x,A)}}for(var x=0;x<c.length;x+=3){var P=c[x],L=c[x+1],R=c[x+2],I=s?l.attributes.skinnedPosition:d;if(I.get(P,e.array),I.get(L,t.array),I.get(R,r.array),h?f=i.intersectTriangle(e,t,r,a.culling):f=i.intersectTriangle(e,r,t,a.culling),f){var M=new G;s?G.copy(M,f):G.transformMat4(M,f,a.worldTransform),o.push(new Na.Intersection(f,M,a,[P,L,R],x/3,G.dist(M,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Na.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var yh=Na,oi="__dt__",cn=function(){this._contextId=0,this._caches=[],this._context={}};cn.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=oi+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=oi+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=oi+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=oi+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=oi+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};cn.prototype.constructor=cn;var Ia=cn,ae=ot.extend({width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.REPEAT,wrapT:D.REPEAT,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Ia},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===D.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===ae.SRGB&&!r&&(this.format=ae.RGB),this.format===ae.SRGB_ALPHA&&!r&&(this.format=ae.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===D.NEAREST_MIPMAP_NEAREST||e===D.NEAREST_MIPMAP_LINEAR?D.NEAREST:e===D.LINEAR_MIPMAP_LINEAR||e===D.LINEAR_MIPMAP_NEAREST?D.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(ae.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(ae.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});ae.BYTE=D.BYTE;ae.UNSIGNED_BYTE=D.UNSIGNED_BYTE;ae.SHORT=D.SHORT;ae.UNSIGNED_SHORT=D.UNSIGNED_SHORT;ae.INT=D.INT;ae.UNSIGNED_INT=D.UNSIGNED_INT;ae.FLOAT=D.FLOAT;ae.HALF_FLOAT=36193;ae.UNSIGNED_INT_24_8_WEBGL=34042;ae.DEPTH_COMPONENT=D.DEPTH_COMPONENT;ae.DEPTH_STENCIL=D.DEPTH_STENCIL;ae.ALPHA=D.ALPHA;ae.RGB=D.RGB;ae.RGBA=D.RGBA;ae.LUMINANCE=D.LUMINANCE;ae.LUMINANCE_ALPHA=D.LUMINANCE_ALPHA;ae.SRGB=35904;ae.SRGB_ALPHA=35906;ae.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;ae.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;ae.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;ae.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;ae.NEAREST=D.NEAREST;ae.LINEAR=D.LINEAR;ae.NEAREST_MIPMAP_NEAREST=D.NEAREST_MIPMAP_NEAREST;ae.LINEAR_MIPMAP_NEAREST=D.LINEAR_MIPMAP_NEAREST;ae.NEAREST_MIPMAP_LINEAR=D.NEAREST_MIPMAP_LINEAR;ae.LINEAR_MIPMAP_LINEAR=D.LINEAR_MIPMAP_LINEAR;ae.REPEAT=D.REPEAT;ae.CLAMP_TO_EDGE=D.CLAMP_TO_EDGE;ae.MIRRORED_REPEAT=D.MIRRORED_REPEAT;var X=ae,gt=_a.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=_a.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});gt.POINTS=D.POINTS;gt.LINES=D.LINES;gt.LINE_LOOP=D.LINE_LOOP;gt.LINE_STRIP=D.LINE_STRIP;gt.TRIANGLES=D.TRIANGLES;gt.TRIANGLE_STRIP=D.TRIANGLE_STRIP;gt.TRIANGLE_FAN=D.TRIANGLE_FAN;gt.BACK=D.BACK;gt.FRONT=D.FRONT;gt.FRONT_AND_BACK=D.FRONT_AND_BACK;gt.CW=D.CW;gt.CCW=D.CCW;var vr=gt,Cn={};Cn.isPowerOfTwo=function(e){return(e&e-1)===0};Cn.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Cn.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Hs=Cn,No=Hs.isPowerOfTwo;function Io(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function xh(e,t){var r=Io(e.width),i=Io(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var Oa=X.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===X.REPEAT||this.wrapT===X.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=D.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(t,h,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=xh(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=X.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=X.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return No(this.width)&&No(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=Re.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(Oa.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Oa.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var Q=Oa;function Vs(e){return{byte:Re.Int8Array,ubyte:Re.Uint8Array,short:Re.Int16Array,ushort:Re.Uint16Array}[e]||Re.Float32Array}function Yn(e){return"attr_"+e}function Vr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}Vr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Vs(this.type);this.value=new t(e*this.size)}};Vr.prototype.fromArray=function(e){var t=Vs(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};Vr.prototype.clone=function(e){var t=new Vr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function ks(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function Ws(e){this.buffer=e,this.count=0}var Vt=ot.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Ia,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Yn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?Re.Uint32Array:Re.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new Vr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(Yn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),h={};if(!a)for(var f=0;f<s.length;f++)h[s[f].name]=s[f];for(var c=0;c<u.length;c++){var d=u[c],v=this.attributes[d],p;a||(p=h[d]);var m;p?m=p.buffer:m=e.createBuffer(),i.isDirty(Yn(d))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[c]=new ks(d,v.type,m,v.size,v.semantic)}for(var f=c;f<s.length;f++)e.deleteBuffer(s[f].buffer);s.length=c}this.isUseIndices()&&(r||a)&&(l||(l=new Ws(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Vt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Vt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));Vt.STATIC_DRAW=D.STATIC_DRAW;Vt.DYNAMIC_DRAW=D.DYNAMIC_DRAW;Vt.STREAM_DRAW=D.STREAM_DRAW;Vt.AttributeBuffer=ks;Vt.IndicesBuffer=Ws;Vt.Attribute=Vr;var wr=Vt,rt=b.create,Pr=b.add,or=b.set,Rt=wr.Attribute,Er=wr.extend(function(){return{attributes:{position:new Rt("position","float",3,"POSITION"),texcoord0:new Rt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new Rt("texcoord1","float",2,"TEXCOORD_1"),normal:new Rt("normal","float",3,"NORMAL"),tangent:new Rt("tangent","float",4,"TANGENT"),color:new Rt("color","float",4,"COLOR"),weight:new Rt("weight","float",3,"WEIGHT"),joint:new Rt("joint","float",4,"JOINT"),barycentric:new Rt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new it);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;b.set(n,t[0],t[1],t[2]),b.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new Re.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=rt(),o=rt(),s=rt(),l=rt(),u=rt(),h=rt(),f=e?e.length:this.vertexCount,c,d,v,p=0;p<f;){e?(c=e[p++],d=e[p++],v=e[p++]):(c=p++,d=p++,v=p++),or(a,r[c*3],r[c*3+1],r[c*3+2]),or(o,r[d*3],r[d*3+1],r[d*3+2]),or(s,r[v*3],r[v*3+1],r[v*3+2]),b.sub(l,a,o),b.sub(u,o,s),b.cross(h,l,u);for(var n=0;n<3;n++)i[c*3+n]=i[c*3+n]+h[n],i[d*3+n]=i[d*3+n]+h[n],i[v*3+n]=i[v*3+n]+h[n]}for(var n=0;n<i.length;)or(h,i[n],i[n+1],i[n+2]),b.normalize(h,h),i[n++]=h[0],i[n++]=h[1],i[n++]=h[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=rt(),a=rt(),o=rt(),s=rt(),l=rt(),u=rt();i||(i=t.normal.value=new Float32Array(r.length));for(var h=e?e.length:this.vertexCount,f,c,d,v=0;v<h;){e?(f=e[v++],c=e[v++],d=e[v++]):(f=v++,c=v++,d=v++),or(n,r[f*3],r[f*3+1],r[f*3+2]),or(a,r[c*3],r[c*3+1],r[c*3+2]),or(o,r[d*3],r[d*3+1],r[d*3+2]),b.sub(s,n,a),b.sub(l,a,o),b.cross(u,s,l),b.normalize(u,u);for(var p=0;p<3;p++)i[f*3+p]=u[p],i[c*3+p]=u[p],i[d*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],h=[0,0,0],f=this.indices,c=f?f.length:this.vertexCount,d,v,p,l=0;l<c;){f?(d=f[l++],v=f[l++],p=f[l++]):(d=l++,v=l++,p=l++);var m=r[d*2],_=r[v*2],x=r[p*2],y=r[d*2+1],g=r[v*2+1],w=r[p*2+1],E=i[d*3],A=i[v*3],S=i[p*3],C=i[d*3+1],P=i[v*3+1],L=i[p*3+1],R=i[d*3+2],I=i[v*3+2],M=i[p*3+2],B=A-E,H=S-E,W=P-C,U=L-C,ue=I-R,V=M-R,ve=_-m,he=x-m,ge=g-y,ye=w-y,re=1/(ve*ye-ge*he);u[0]=(ye*B-ge*H)*re,u[1]=(ye*W-ge*U)*re,u[2]=(ye*ue-ge*V)*re,h[0]=(ve*H-he*B)*re,h[1]=(ve*U-he*W)*re,h[2]=(ve*V-he*ue)*re,Pr(o[d],o[d],u),Pr(o[v],o[v],u),Pr(o[p],o[p],u),Pr(s[d],s[d],h),Pr(s[v],s[v],h),Pr(s[p],s[p],h)}for(var Ie=rt(),Se=rt(),Le=rt(),l=0;l<e;l++){Le[0]=a[l*3],Le[1]=a[l*3+1],Le[2]=a[l*3+2];var Ke=o[l];b.scale(Ie,Le,b.dot(Le,Ke)),b.sub(Ie,Ke,Ie),b.normalize(Ie,Ie),b.cross(Se,Le,Ke),n[l*4]=Ie[0],n[l*4+1]=Ie[1],n[l*4+2]=Ie[2],n[l*4+3]=b.dot(Se,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new Re.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,h=e[a].size,f=0;f<h;f++)u[o*h+f]=i[a][l*h+f];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=F.create();F.invert(a,e),F.transpose(a,a);var o=b.transformMat4,s=b.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Er.STATIC_DRAW=wr.STATIC_DRAW;Er.DYNAMIC_DRAW=wr.DYNAMIC_DRAW;Er.STREAM_DRAW=wr.STREAM_DRAW;Er.AttributeBuffer=wr.AttributeBuffer;Er.IndicesBuffer=wr.IndicesBuffer;Er.Attribute=Rt;var se=Er,Th=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,bt="uniform vec3 ",si="uniform float ",Rr="@export clay.header.",Nr="@end",je=":unconfigurable;",wh=[Rr+"directional_light",bt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+je,bt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+je,Nr,Rr+"ambient_light",bt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+je,Nr,Rr+"ambient_sh_light",bt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+je,bt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+je,Th,Nr,Rr+"ambient_cubemap_light",bt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,Nr,Rr+"point_light",bt+"pointLightPosition[POINT_LIGHT_COUNT]"+je,si+"pointLightRange[POINT_LIGHT_COUNT]"+je,bt+"pointLightColor[POINT_LIGHT_COUNT]"+je,Nr,Rr+"spot_light",bt+"spotLightPosition[SPOT_LIGHT_COUNT]"+je,bt+"spotLightDirection[SPOT_LIGHT_COUNT]"+je,si+"spotLightRange[SPOT_LIGHT_COUNT]"+je,si+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+je,si+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+je,si+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+je,bt+"spotLightColor[SPOT_LIGHT_COUNT]"+je,Nr].join(`
`);N.import(wh);var Eh=It.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=It.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),Lt=Eh,an=function(e,t){this.normal=e||new G(0,1,0),this.distance=t||0};an.prototype={constructor:an,distanceToPoint:function(e){return b.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new G);var r=this.distanceToPoint(e);return b.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/b.len(this.normal.array);b.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=b.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(b.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=b.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;b.sub(e,r.array,t.array),b.normalize(e,e);var u=b.dot(o,e);if(u===0)return null;i||(i=new G);var h=(b.dot(o,l)-s)/u;return b.scaleAndAdd(i.array,l,e,-h),i._dirty=!0,i}}(),applyTransform:function(){var e=F.create(),t=z.create(),r=z.create();return r[3]=1,function(i){i=i.array,b.scale(r,this.normal.array,this.distance),z.transformMat4(r,r,i),this.distance=b.dot(r,this.normal.array),F.invert(e,i),F.transpose(e,e),t[3]=0,b.copy(t,this.normal.array),z.transformMat4(t,t,e),b.copy(this.normal.array,t)}}(),copy:function(e){b.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new an;return e.copy(this),e}};var Xs=an,De=b.set,Oo=b.copy,Bo=b.transformMat4,qn=Math.min,$n=Math.max,Zs=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new Xs);this.boundingBox=new it,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=b.fromValues(0,0,0)};Zs.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],h=r[7],f=r[8],c=r[9],d=r[10],v=r[11],p=r[12],m=r[13],_=r[14],x=r[15];De(t[0].normal.array,o-i,h-s,v-f),t[0].distance=-(x-p),t[0].normalize(),De(t[1].normal.array,o+i,h+s,v+f),t[1].distance=-(x+p),t[1].normalize(),De(t[2].normal.array,o+n,h+l,v+c),t[2].distance=-(x+m),t[2].normalize(),De(t[3].normal.array,o-n,h-l,v-c),t[3].distance=-(x-m),t[3].normalize(),De(t[4].normal.array,o-a,h-u,v-d),t[4].distance=-(x-_),t[4].normalize(),De(t[5].normal.array,o+a,h+u,v+d),t[5].distance=-(x+_),t[5].normalize();var y=this.boundingBox,g=this.vertices;if(x===0){var w=l/i,E=-_/(d-1),A=-_/(d+1),S=-A/l,C=-E/l;y.min.set(-S*w,-S,A),y.max.set(S*w,S,E),De(g[0],-S*w,-S,A),De(g[1],-S*w,S,A),De(g[2],S*w,-S,A),De(g[3],S*w,S,A),De(g[4],-C*w,-C,E),De(g[5],-C*w,C,E),De(g[6],C*w,-C,E),De(g[7],C*w,C,E)}else{var P=(-1-p)/i,L=(1-p)/i,R=(1-m)/l,I=(-1-m)/l,M=(-1-_)/d,B=(1-_)/d;y.min.set(Math.min(P,L),Math.min(I,R),Math.min(B,M)),y.max.set(Math.max(L,P),Math.max(R,I),Math.max(M,B));var H=y.min.array,W=y.max.array;De(g[0],H[0],H[1],H[2]),De(g[1],H[0],W[1],H[2]),De(g[2],W[0],H[1],H[2]),De(g[3],W[0],W[1],H[2]),De(g[4],H[0],H[1],W[2]),De(g[5],H[0],W[1],W[2]),De(g[6],W[0],H[1],W[2]),De(g[7],W[0],W[1],W[2])}},getTransformedBoundingBox:function(){var e=b.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=i[0];Bo(e,u,n),Oo(s,e),Oo(l,e);for(var h=1;h<8;h++)u=i[h],Bo(e,u,n),s[0]=qn(e[0],s[0]),s[1]=qn(e[1],s[1]),s[2]=qn(e[2],s[2]),l[0]=$n(e[0],l[0]),l[1]=$n(e[1],l[1]),l[2]=$n(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var Ba=Zs,Sh=It.extend(function(){return{projectionMatrix:new k,invProjectionMatrix:new k,viewMatrix:new k,frustum:new Ba}},function(){this.update(!0)},{update:function(e){It.prototype.update.call(this,e),k.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),k.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){k.copy(this.viewMatrix,e),k.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){k.copy(this.projectionMatrix,e),k.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=z.create();return function(t,r){var i=r!==void 0?r:new fn,n=t.array[0],a=t.array[1];return z.set(e,n,a,-1,1),z.transformMat4(e,e,this.invProjectionMatrix.array),z.transformMat4(e,e,this.worldTransform.array),b.scale(i.origin.array,e,1/e[3]),z.set(e,n,a,1,1),z.transformMat4(e,e,this.invProjectionMatrix.array),z.transformMat4(e,e,this.worldTransform.array),b.scale(e,e,1/e[3]),b.sub(i.direction.array,e,i.origin.array),b.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),kr=Sh,bh=F.create(),Fo=F.create(),Kn={};function Ah(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(Kn[a])return Kn[a];var o=Ye.genGUID();return Kn[a]=o,o}function Ln(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Ln.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};Ln.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};Ln.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Ch=It.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new it,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Ns(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof kr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof Lt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof kr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof Lt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Ah(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new Ln,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?bh:o.worldTransform.array,l=o.geometry;F.multiplyAffine(Fo,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,Fo))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new it,t=new k;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Lh);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Lh(e,t){if(t.castShadow&&!e.castShadow)return!0}var ir=Ch,Zi=Hs.isPowerOfTwo,Dh=["px","nx","py","ny","pz","nz"],Fa=X.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=D.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=Dh[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Zi(this.image.px.width)&&Zi(this.image.px.height):Zi(this.width)&&Zi(this.height)},isRenderable:function(){return this.image.px?Ir(this.image.px)&&Ir(this.image.nx)&&Ir(this.image.py)&&Ir(this.image.ny)&&Ir(this.image.pz)&&Ir(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return Ye.each(e,function(n,a){var o=Re.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(Fa.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Fa.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Ir(e){return e.width>0&&e.height>0}var Ti=Fa,Mh=kr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=kr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Ve=Mh,ji="framebuffer",zt="renderbuffer",Uo=zt+"_width",Go=zt+"_height",Qn=zt+"_attached",Jn="depthtexture_attached",sr=D.FRAMEBUFFER,li=D.RENDERBUFFER,vi=D.DEPTH_ATTACHMENT,js=D.COLOR_ATTACHMENT0,Ni=ot.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Ia,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(sr,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Jn)&&this.depthBuffer){r.miss(zt)&&r.put(zt,t.createRenderbuffer());var h=r.get(zt);(n!==r.get(Uo)||a!==r.get(Go))&&(t.bindRenderbuffer(li,h),t.renderbufferStorage(li,t.DEPTH_COMPONENT16,n,a),r.put(Uo,n),r.put(Go,a),t.bindRenderbuffer(li,null)),r.get(Qn)||(t.framebufferRenderbuffer(sr,vi,li,h),r.put(Qn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(sr,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===X.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(sr)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(ji)&&t.put(ji,e.gl.createFramebuffer()),t.get(ji)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||js,r=r||D.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===vi||r===D.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==D.DEPTH_COMPONENT&&t.format!==D.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var h=this._cache.get(zt);h&&(n.framebufferRenderbuffer(sr,vi,li,null),n.deleteRenderbuffer(h),this._cache.put(zt,!1)),this._cache.put(Qn,!1),this._cache.put(Jn,!0)}}return n.framebufferTexture2D(sr,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(sr,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===vi||t===D.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Jn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(zt);i&&t.deleteRenderbuffer(i);var n=r.get(ji);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Ni.DEPTH_ATTACHMENT=vi;Ni.COLOR_ATTACHMENT0=js;Ni.STENCIL_ATTACHMENT=D.STENCIL_ATTACHMENT;Ni.DEPTH_STENCIL_ATTACHMENT=D.DEPTH_STENCIL_ATTACHMENT;var qe=Ni,Ph=["px","nx","py","ny","pz","nz"],Rh=ot.extend(function(){var e={position:new G,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ve({fov:90}),nx:new Ve({fov:90}),py:new Ve({fov:90}),ny:new Ve({fov:90}),pz:new Ve({fov:90}),nz:new Ve({fov:90})};return t.px.lookAt(G.POSITIVE_X,G.NEGATIVE_Y),t.nx.lookAt(G.NEGATIVE_X,G.NEGATIVE_Y),t.py.lookAt(G.POSITIVE_Y,G.POSITIVE_Z),t.ny.lookAt(G.NEGATIVE_Y,G.NEGATIVE_Z),t.pz.lookAt(G.POSITIVE_Z,G.NEGATIVE_Y),t.nz.lookAt(G.NEGATIVE_Z,G.NEGATIVE_Y),e._frameBuffer=new qe,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=Ph[o],l=this._cameras[s];if(G.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Ua=Rh,Nh=se.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var h=u/t;if(i.push([2*h-1,2*l-1,0]),n&&n.push([h,l]),a&&a.push([0,0,1]),u<t&&s<e){var f=u+s*(t+1);o.push([f,f+1,f+t+1]),o.push([f+t+1,f+1,f+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new it,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),Dn=Nh,be=new k,Ih=se.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Or("px",this.depthSegments,this.heightSegments),nx:Or("nx",this.depthSegments,this.heightSegments),py:Or("py",this.widthSegments,this.depthSegments),ny:Or("ny",this.widthSegments,this.depthSegments),pz:Or("pz",this.widthSegments,this.heightSegments),nz:Or("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new Re.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],h=l.attributes[u].value,f=l.attributes[u].size,c=u==="normal",d=0;d<h.length;d++){var v=h[d];this.inside&&c&&(v=-v),this.attributes[u].value[d+f*s]=v}for(var p=l.indices.length,d=0;d<l.indices.length;d++)this.indices[d+o]=s+l.indices[this.inside?p-d-1:d];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new it,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Or(e,t,r){be.identity();var i=new Dn({widthSegments:t,heightSegments:r});switch(e){case"px":k.translate(be,be,G.POSITIVE_X),k.rotateY(be,be,Math.PI/2);break;case"nx":k.translate(be,be,G.NEGATIVE_X),k.rotateY(be,be,-Math.PI/2);break;case"py":k.translate(be,be,G.POSITIVE_Y),k.rotateX(be,be,-Math.PI/2);break;case"ny":k.translate(be,be,G.NEGATIVE_Y),k.rotateX(be,be,Math.PI/2);break;case"pz":k.translate(be,be,G.POSITIVE_Z);break;case"nz":k.translate(be,be,G.NEGATIVE_Z),k.rotateY(be,be,Math.PI);break}return i.applyTransform(be),i}var Ys=Ih,Oh=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;N.import(Oh);var Bh=vr.extend(function(){var e=new N({vertex:N.source("clay.skybox.vertex"),fragment:N.source("clay.skybox.fragment")}),t=new Et({shader:e,depthMask:!1});return{scene:null,geometry:new Ys,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ve}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=X.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),k.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),wi=Bh,Fh=542327876,Uh=131072,Gh=512,zh=4;function Ga(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Hh=31,Vh=Ga("DXT1"),kh=Ga("DXT3"),Wh=Ga("DXT5"),Xh=0,Zh=1,jh=2,Yh=3,qh=4,$h=7,Kh=20,Qh=21,Jh=28,ef={parse:function(e,t){var r=new Int32Array(e,0,Hh);if(r[Xh]!==Fh||!r(Kh)&zh)return null;var i=r(Qh),n=r[qh],a=r[Yh],o=r[Jh]&Gh,s=r[jh]&Uh,l,u;switch(i){case Vh:l=8,u=X.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case kh:l=16,u=X.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Wh:l=16,u=X.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=r[Zh]+4,f=o?6:1,c=1;s&&(c=Math.max(1,r[$h]));for(var d=[],v=0;v<f;v++){var p=n,m=a;d[v]=new Q({width:p,height:m,format:u});for(var _=[],x=0;x<c;x++){var y=Math.max(4,p)/4*Math.max(4,m)/4*l,g=new Uint8Array(e,h,y);h+=y,p*=.5,m*=.5,_[x]=g}d[v].pixels=_[0],s&&(d[v].mipmaps=_)}if(t)t.width=d[0].width,t.height=d[0].height,t.format=d[0].format,t.pixels=d[0].pixels,t.mipmaps=d[0].mipmaps;else return d[0]}},tf=ef,on=String.fromCharCode,rf=8,nf=32767;function af(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function of(e,t,r){for(var i="",n=t;n<r;n++)i+=on(e[n]);return i}function sf(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function zo(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)sf(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function lf(e,t,r,i){if(i<rf|i>nf)return zo(e,t,r,i);var n=t[r++];if(n!=2)return zo(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var uf={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(of(i,0,2)==="#?"){for(var a=2;a<n&&!(on(i[a])===`
`&&on(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=on(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(!(!h||!u)){for(var f=a+1,c=[],d=0;d<h;d++){c[d]=[];for(var v=0;v<4;v++)c[d][v]=0}for(var p=new Float32Array(h*u*4),m=0,_=0;_<u;_++){var f=lf(c,i,f,h);if(!f)return null;for(var d=0;d<h;d++)af(c[d],p,m,r),m+=4}return t||(t=new Q),t.width=h,t.height=u,t.pixels=p,t.type=X.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},hf=uf,sn={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new Q({width:0,height:0,sRGB:!1}),sn._fetchTexture(e,function(a){hf.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new Q({width:0,height:0}),sn._fetchTexture(e,function(a){tf.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new Q,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px!="undefined"&&(n=new Ti,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},sn.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new Ua,a=new wi({scene:new ir});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],h=o.data[l+1],f=o.data[l+2],c=Math.abs(u-h)+Math.abs(h-f);if(c>20)return console.warn("Given image is not a height map"),e}var d,v,p,m;l%(i*4)===0?(d=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(d=o.data[l-4],p=o.data[l]):(d=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],m=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],m=o.data[l]):(v=o.data[l-i*4],m=o.data[l+i*4]),s.data[l]=d-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],h=o.data[s+2],f=Math.abs(l-u)+Math.abs(u-h);if(f>r)return!1}return!0},_fetchTexture:function(e,t,r){Re.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var h=new Q({image:a,anisotropic:8});return h},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new Q({image:t});return i}},_r=sn,ga=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ya(e){return"_on"+e}var xa=function(e){var t=this;this._texture=new Q({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),Q.prototype.dispose.call(this,r)}}),ga.forEach(function(r){this[ya(r)]=function(i){!i.triangle||this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};xa.prototype={constructor:xa,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new G,t=new G,r=new G,i=new mt,n=new mt,a=new mt,o=new mt,s=new G;return function(l,u,h,f){var c=u.geometry,d=c.attributes.position,v=c.attributes.texcoord0,p=G.dot,m=G.cross;d.get(h[0],e.array),d.get(h[1],t.array),d.get(h[2],r.array),v.get(h[0],i.array),v.get(h[1],n.array),v.get(h[2],a.array),m(s,t,r);var _=p(e,s),x=p(f,s)/_;m(s,r,e);var y=p(f,s)/_;m(s,e,t);var g=p(f,s)/_;mt.scale(o,i,x),mt.scaleAndAdd(o,o,n,y),mt.scaleAndAdd(o,o,a,g);var w=o.x*this._chart.getWidth(),E=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:w,zrY:E})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(ga.forEach(function(t){e.on(t,this[ya(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),ga.forEach(function(r){e.off(r,this[ya(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var ff=xa,cf=kr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=kr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),Wr=cf,df=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;N.import(df);var vf=new Dn,Ho=new vr({geometry:vf,frustumCulling:!1}),pf=new Wr,mf=ot.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new N(N.source("clay.compositor.vertex"),this.fragment),t=new Et({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||D.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){Ho.material=this.material,e.renderPass([Ho],pf)},dispose:function(e){}}),Ne=mf,_f=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,gf=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,gr={},ea=["px","nx","py","ny","pz","nz"];gr.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=gr.generateNormalDistribution(),n=gr.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new Ti({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),h=Math.log(u)/Math.log(2)+1,f=new Et({shader:new N({vertex:N.source("clay.skybox.vertex"),fragment:gf})});f.set("normalDistribution",i),r.encodeRGBM&&f.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&f.define("fragment","RGBM_DECODE");var c=new ir,d;if(t.textureType==="texture2D"){var v=new Ti({width:a,height:o,type:s===X.FLOAT?X.HALF_FLOAT:s});_r.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}d=new wi({scene:c,material:f}),d.material.set("environmentMap",t);var p=new Ua({texture:l});r.encodeRGBM&&(s=l.type=X.UNSIGNED_BYTE);for(var m=new Q({width:a,height:o,type:s}),_=new qe({depthBuffer:!1}),x=Re[s===X.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],y=0;y<h;y++){l.mipmaps[y]={pixels:{}},d.material.set("roughness",y/(h-1));for(var g=m.width,w=2*Math.atan(g/(g-.5))/Math.PI*180,E=0;E<ea.length;E++){var A=new x(m.width*m.height*4);_.attach(m),_.bind(e);var S=p.getCamera(ea[E]);S.fov=w,e.render(c,S),e.gl.readPixels(0,0,m.width,m.height,X.RGBA,s,A),_.unbind(e),l.mipmaps[y].pixels[ea[E]]=A}m.width/=2,m.height/=2,m.dirty()}return _.dispose(e),m.dispose(e),d.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:h}};gr.integrateBRDF=function(e,t){t=t||gr.generateNormalDistribution();var r=new qe({depthBuffer:!1}),i=new Ne({fragment:_f}),n=new Q({width:512,height:256,type:X.HALF_FLOAT,wrapS:X.CLAMP_TO_EDGE,wrapT:X.CLAMP_TO_EDGE,minFilter:X.NEAREST,magFilter:X.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};gr.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new Q({width:r,height:i,type:X.FLOAT,minFilter:X.NEAREST,magFilter:X.NEAREST,wrapS:X.CLAMP_TO_EDGE,wrapT:X.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,h=0;h<i;h++){var f=(h<<16|h>>>16)>>>0;f=((f&1431655765)<<1|(f&2863311530)>>>1)>>>0,f=((f&858993459)<<2|(f&3435973836)>>>2)>>>0,f=((f&252645135)<<4|(f&4042322160)>>>4)>>>0,f=(((f&16711935)<<8|(f&4278255360)>>>8)>>>0)/4294967296;var c=Math.sqrt((1-f)/(1+(u*u-1)*f));o[h]=c}for(var h=0;h<i;h++){var d=(h*r+s)*4,c=o[h],v=Math.sqrt(1-c*c),p=h/i,m=2*Math.PI*p;a[d]=v*Math.cos(m),a[d+1]=c,a[d+2]=v*Math.sin(m),a[d+3]=1}}return n.pixels=a,n};var ln=gr,yf=Lt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=ln.generateNormalDistribution(),this._brdfLookup=ln.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=ln.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),xf=yf,Tf=Lt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new Re.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),wf=Tf,qs={},pr=["px","nx","py","ny","pz","nz"];function Ef(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var Sf={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function bf(e,t,r,i){for(var n=new Re.Float32Array(27),a=b.create(),o=b.create(),s=b.create(),l=0;l<9;l++){for(var u=b.create(),h=0;h<pr.length;h++){for(var f=t[pr[h]],c=b.create(),d=0,v=0,p=Sf[pr[h]],m=0;m<i;m++)for(var _=0;_<r;_++){a[0]=_/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,b.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=f[v++]/255,o[1]=f[v++]/255,o[2]=f[v++]/255;var x=f[v++]/255*8.12;o[0]*=x,o[1]*=x,o[2]*=x,b.scaleAndAdd(c,c,o,Ef(s,l)*-a[2]),d+=-a[2]}b.scaleAndAdd(u,u,c,1/d)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}qs.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new ir,a=64;t.textureType==="texture2D"?i=new wi({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new wi({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new Q({width:o,height:s}),u=new qe;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new Ua({texture:l}),f={},c=0;c<pr.length;c++){f[pr[c]]=new Uint8Array(o*s*4);var d=h.getCamera(pr[c]);d.fov=90,u.attach(l),u.bind(e),e.render(n,d),e.gl.readPixels(0,0,o,s,X.RGBA,X.UNSIGNED_BYTE,f[pr[c]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),bf(e,f,o,s)};var Af=qs,Cf={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Ot(t.dataIndex)?ro(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Ot(t.name)?ro(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},ee=Cf,Lf=se.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,h,f,c,d,v,y=this.radius,p=this.phiStart,m=this.phiLength,_=this.thetaStart,x=this.thetaLength,y=this.radius,g=[],w=[],E=0,A=1/y;for(v=0;v<=e;v++)for(d=0;d<=t;d++)f=d/t,c=v/e,l=-y*Math.cos(p+f*m)*Math.sin(_+c*x),u=y*Math.cos(_+c*x),h=y*Math.sin(p+f*m)*Math.sin(_+c*x),g[0]=l,g[1]=u,g[2]=h,w[0]=f,w[1]=c,r.set(E,g),i.set(E,w),g[0]*=A,g[1]*=A,g[2]*=A,n.set(E,g),E++;var S,C,P,L,R=t+1,I=0;for(v=0;v<e;v++)for(d=0;d<t;d++)C=v*R+d,S=v*R+d+1,L=(v+1)*R+d+1,P=(v+1)*R+d,s[I++]=S,s[I++]=C,s[I++]=L,s[I++]=C,s[I++]=P,s[I++]=L;this.boundingBox=new it,this.boundingBox.max.set(y,y,y),this.boundingBox.min.set(-y,-y,-y)}}),Df=Lf,Mf=Lt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),Pf=Mf,Rf=Lt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new G,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Lt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),Nf=Rf,If=Lt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Lt.prototype.clone.call(this);return e.range=this.range,e}}),Of=If,Bf=Lt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new G,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Lt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),Ff=Bf,oe=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=z.fromValues(e,t,r,i),this._dirty=!0};oe.prototype={constructor:oe,add:function(e){return z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new oe(this.x,this.y,this.z,this.w)},copy:function(e){return z.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return z.dist(this.array,e.array)},distance:function(e){return z.distance(this.array,e.array)},div:function(e){return z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return z.dot(this.array,e.array)},len:function(){return z.len(this.array)},length:function(){return z.length(this.array)},lerp:function(e,t,r){return z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return z.random(this.array,e),this._dirty=!0,this},scale:function(e){return z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return z.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return z.sqrDist(this.array,e.array)},squaredDistance:function(e){return z.squaredDistance(this.array,e.array)},sqrLen:function(){return z.sqrLen(this.array)},squaredLength:function(){return z.squaredLength(this.array)},sub:function(e){return z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return z.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ui=Object.defineProperty;if(ui){var Yi=oe.prototype;ui(Yi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ui(Yi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ui(Yi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),ui(Yi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}oe.add=function(e,t,r){return z.add(e.array,t.array,r.array),e._dirty=!0,e};oe.set=function(e,t,r,i,n){z.set(e.array,t,r,i,n),e._dirty=!0};oe.copy=function(e,t){return z.copy(e.array,t.array),e._dirty=!0,e};oe.dist=function(e,t){return z.distance(e.array,t.array)};oe.distance=oe.dist;oe.div=function(e,t,r){return z.divide(e.array,t.array,r.array),e._dirty=!0,e};oe.divide=oe.div;oe.dot=function(e,t){return z.dot(e.array,t.array)};oe.len=function(e){return z.length(e.array)};oe.lerp=function(e,t,r,i){return z.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};oe.min=function(e,t,r){return z.min(e.array,t.array,r.array),e._dirty=!0,e};oe.max=function(e,t,r){return z.max(e.array,t.array,r.array),e._dirty=!0,e};oe.mul=function(e,t,r){return z.multiply(e.array,t.array,r.array),e._dirty=!0,e};oe.multiply=oe.mul;oe.negate=function(e,t){return z.negate(e.array,t.array),e._dirty=!0,e};oe.normalize=function(e,t){return z.normalize(e.array,t.array),e._dirty=!0,e};oe.random=function(e,t){return z.random(e.array,t),e._dirty=!0,e};oe.scale=function(e,t,r){return z.scale(e.array,t.array,r),e._dirty=!0,e};oe.scaleAndAdd=function(e,t,r,i){return z.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};oe.sqrDist=function(e,t){return z.sqrDist(e.array,t.array)};oe.squaredDistance=oe.sqrDist;oe.sqrLen=function(e){return z.sqrLen(e.array)};oe.squaredLength=oe.sqrLen;oe.sub=function(e,t,r){return z.subtract(e.array,t.array,r.array),e._dirty=!0,e};oe.subtract=oe.sub;oe.transformMat4=function(e,t,r){return z.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};oe.transformQuat=function(e,t,r){return z.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var Uf=oe,et={};et.create=function(){var e=new $e(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};et.clone=function(e){var t=new $e(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};et.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};et.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};et.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};et.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};et.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};et.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};et.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*u+a*h,e[3]=n*u+o*h,e};et.mul=et.multiply;et.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};et.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};et.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};et.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var Ce=et,at=function(){this.array=Ce.create(),this._dirty=!0};at.prototype={constructor:at,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new at().copy(this)},copy:function(e){return Ce.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Ce.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Ce.determinant(this.array)},identity:function(){return Ce.identity(this.array),this._dirty=!0,this},invert:function(){return Ce.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Ce.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Ce.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Ce.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Ce.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Ce.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Ce.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Ce.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};at.adjoint=function(e,t){return Ce.adjoint(e.array,t.array),e._dirty=!0,e};at.copy=function(e,t){return Ce.copy(e.array,t.array),e._dirty=!0,e};at.determinant=function(e){return Ce.determinant(e.array)};at.identity=function(e){return Ce.identity(e.array),e._dirty=!0,e};at.invert=function(e,t){return Ce.invert(e.array,t.array),e._dirty=!0,e};at.mul=function(e,t,r){return Ce.mul(e.array,t.array,r.array),e._dirty=!0,e};at.multiply=at.mul;at.rotate=function(e,t,r){return Ce.rotate(e.array,t.array,r),e._dirty=!0,e};at.scale=function(e,t,r){return Ce.scale(e.array,t.array,r.array),e._dirty=!0,e};at.transpose=function(e,t){return Ce.transpose(e.array,t.array),e._dirty=!0,e};var Gf=at,dt={};dt.create=function(){var e=new $e(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};dt.clone=function(e){var t=new $e(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};dt.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};dt.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};dt.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};dt.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};dt.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1],f=r[2],c=r[3],d=r[4],v=r[5];return e[0]=i*u+a*h,e[1]=n*u+o*h,e[2]=i*f+a*c,e[3]=n*f+o*c,e[4]=i*d+a*v+s,e[5]=n*d+o*v+l,e};dt.mul=dt.multiply;dt.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),h=Math.cos(r);return e[0]=i*h+a*u,e[1]=n*h+o*u,e[2]=i*-u+a*h,e[3]=n*-u+o*h,e[4]=s,e[5]=l,e};dt.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*h,e[3]=o*h,e[4]=s,e[5]=l,e};dt.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*u+a*h+s,e[5]=n*u+o*h+l,e};dt.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Pe=dt,ct=function(){this.array=Pe.create(),this._dirty=!0};ct.prototype={constructor:ct,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new ct().copy(this)},copy:function(e){return Pe.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Pe.determinant(this.array)},identity:function(){return Pe.identity(this.array),this._dirty=!0,this},invert:function(){return Pe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Pe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Pe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Pe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Pe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Pe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Pe.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Pe.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};ct.copy=function(e,t){return Pe.copy(e.array,t.array),e._dirty=!0,e};ct.determinant=function(e){return Pe.determinant(e.array)};ct.identity=function(e){return Pe.identity(e.array),e._dirty=!0,e};ct.invert=function(e,t){return Pe.invert(e.array,t.array),e._dirty=!0,e};ct.mul=function(e,t,r){return Pe.mul(e.array,t.array,r.array),e._dirty=!0,e};ct.multiply=ct.mul;ct.rotate=function(e,t,r){return Pe.rotate(e.array,t.array,r),e._dirty=!0,e};ct.scale=function(e,t,r){return Pe.scale(e.array,t.array,r.array),e._dirty=!0,e};ct.translate=function(e,t,r){return Pe.translate(e.array,t.array,r.array),e._dirty=!0,e};var zf=ct,Ue=function(){this.array=ne.create(),this._dirty=!0};Ue.prototype={constructor:Ue,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return ne.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ue().copy(this)},copy:function(e){return ne.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ne.determinant(this.array)},fromMat2d:function(e){return ne.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return ne.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return ne.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return ne.identity(this.array),this._dirty=!0,this},invert:function(){return ne.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ne.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ne.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ne.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ne.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ne.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ne.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ne.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return ne.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return ne.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ue.adjoint=function(e,t){return ne.adjoint(e.array,t.array),e._dirty=!0,e};Ue.copy=function(e,t){return ne.copy(e.array,t.array),e._dirty=!0,e};Ue.determinant=function(e){return ne.determinant(e.array)};Ue.identity=function(e){return ne.identity(e.array),e._dirty=!0,e};Ue.invert=function(e,t){return ne.invert(e.array,t.array),e};Ue.mul=function(e,t,r){return ne.mul(e.array,t.array,r.array),e._dirty=!0,e};Ue.multiply=Ue.mul;Ue.fromMat2d=function(e,t){return ne.fromMat2d(e.array,t.array),e._dirty=!0,e};Ue.fromMat4=function(e,t){return ne.fromMat4(e.array,t.array),e._dirty=!0,e};Ue.fromQuat=function(e,t){return ne.fromQuat(e.array,t.array),e._dirty=!0,e};Ue.normalFromMat4=function(e,t){return ne.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ue.rotate=function(e,t,r){return ne.rotate(e.array,t.array,r),e._dirty=!0,e};Ue.scale=function(e,t,r){return ne.scale(e.array,t.array,r.array),e._dirty=!0,e};Ue.transpose=function(e,t){return ne.transpose(e.array,t.array),e._dirty=!0,e};Ue.translate=function(e,t,r){return ne.translate(e.array,t.array,r.array),e._dirty=!0,e};var Hf=Ue,Vf={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)!a||(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new Ql(i,t),h=this;return u.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var f=l.indexOf(u);f>=0&&l.splice(f,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},kf=Vf,$s=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Wf=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Xf=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Zf=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,jf=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Yf=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,qf=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(It.prototype,kf);N.import($s);N.import(Gs);N.import(Wf);N.import(Xf);N.import(Zf);N.import(jf);N.import(Yf);N.import(qf);function $f(e){return!e||e==="none"}function Ks(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Kf(e){return e.getZr&&e.setOption}var Qf=ir.prototype.addToScene,Jf=ir.prototype.removeFromScene;ir.prototype.addToScene=function(e){if(Qf.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};ir.prototype.removeFromScene=function(e){Jf.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};Et.prototype.setTextureImage=function(e,t,r,i){if(!!this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),$f(t)||(o=q.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var q={};q.Renderer=gi;q.Node=It;q.Mesh=vr;q.Shader=N;q.Material=Et;q.Texture=X;q.Texture2D=Q;q.Geometry=se;q.SphereGeometry=Df;q.PlaneGeometry=Dn;q.CubeGeometry=Ys;q.AmbientLight=Pf;q.DirectionalLight=Nf;q.PointLight=Of;q.SpotLight=Ff;q.PerspectiveCamera=Ve;q.OrthographicCamera=Wr;q.Vector2=mt;q.Vector3=G;q.Vector4=Uf;q.Quaternion=zs;q.Matrix2=Gf;q.Matrix2d=zf;q.Matrix3=Hf;q.Matrix4=k;q.Plane=Xs;q.Ray=fn;q.BoundingBox=it;q.Frustum=Ba;var qi=null;function ec(){return qi!==null||(qi=_r.createBlank("rgba(255,255,255,0)").image),qi}function Vo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function ko(e){if((e.wrapS===X.REPEAT||e.wrapT===X.REPEAT)&&e.image){var t=Vo(e.width),r=Vo(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}q.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new Jl(20);if(Kf(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var h=new ff(e);h.onupdate=function(){t.getZr().refresh()},u={texture:h.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(Ks(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new q.Texture2D({image:e})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),ko(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var f=_r.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){f.dirty(),u.callbacks.forEach(function(v){v&&v(f)}),u.callbacks=null});u.texture=f,s.put(a+e,u)}else{for(var f=new q.Texture2D({image:new Image}),o=0;o<n.length;o++)f[n[o]]=r[n[o]];u={texture:f,callbacks:[i]};var c=f.image;c.onload=function(){f.image=c,ko(f),f.dirty(),u.callbacks.forEach(function(p){p&&p(f)}),u.callbacks=null},c.crossOrigin="Anonymous",c.src=e,f.image=ec(),s.put(a+e,u)}return u.texture}};q.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=ee.firstNotNull(e.exposure,1),o=new xf({intensity:ee.firstNotNull(e.specularIntensity,1)}),s=new wf({intensity:ee.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=q.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=Af.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};q.createBlankTexture=_r.createBlank;q.isImage=Ks;q.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};q.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Ss(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};q.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};q.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};q.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];q.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=N.source(e+".vertex"),r=N.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new N(t,r);return i.name=e,i};q.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=q.createShader(e),i=new Et({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};q.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=ee.firstNotNull(n.get("textureTiling"),1),s=ee.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?q.Texture.REPEAT:q.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var h=n.get("roughness"),f=n.get("metalness");f!=null?isNaN(f)&&(t.setTextureImage("metalnessMap",f,i,u),f=ee.firstNotNull(n.get("metalnessAdjust"),.5)):f=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,u),h=ee.firstNotNull(n.get("roughnessAdjust"),.5)):h=.5;var c=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",c,i,u),t.set({roughness:h,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var d=n.get("hatchingTextures")||[];d.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),d[v],i,{anisotropic:8,wrapS:q.Texture.REPEAT,wrapT:q.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};q.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var T=q,_e=function(e,t){this.id=e,this.zr=t;try{this.renderer=new gi({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new yh({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new bs({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};_e.prototype.setUnpainted=function(){};_e.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function Qs(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}_e.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Qs,this),e.layer=null,this._viewsToDispose.push(e))}};_e.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Qs,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};_e.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};_e.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};_e.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};_e.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};_e.prototype.needsRefresh=function(){this.zr.refresh()};_e.prototype.refresh=function(e){this._backgroundColor=e?T.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};_e.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};_e.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};_e.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var tc=1;_e.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):ca(function(){n(a)}))}}this._accumulatingId=tc++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};_e.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(dn(this._textureList),dn(this._geometriesList));for(var r=0;r<this.views.length;r++)rc(this.views[r].scene,e,t);this._textureList&&(vn(this.renderer,this._textureList),vn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function dn(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function vn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function $i(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function rc(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var f=u[h],c=l.uniforms[f].value;if(!!c){if(c instanceof X)$i(c,t);else if(c instanceof Array)for(var d=0;d<c.length;d++)c[d]instanceof X&&$i(c[d],t)}}s!==n&&$i(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&$i(e.lights[a].cubemap,t)}_e.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(dn(this._textureList),dn(this._geometriesList),vn(this.renderer,this._textureList),vn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};_e.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};_e.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};_e.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};_e.prototype.onclick=_e.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};_e.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};_e.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};_e.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};_e.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};_e.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const h=eu(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=n,h.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};_e.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(_e.prototype,Ra);var Js=_e,ic=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function pi(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function nc(e){pi(e,"itemStyle"),pi(e,"lineStyle"),pi(e,"areaStyle"),pi(e,"label")}function Ki(e){!e||(e instanceof Array||(e=[e]),Bt(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function ac(e){Bt(e.series,function(t){tu(ic,t.type)>=0&&(nc(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Ki(e.xAxis3D),Ki(e.yAxis3D),Ki(e.zAxis3D),Ki(e.grid3D),pi(e.geo3D)}function el(e){this._layers={},this._zr=e}el.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new Js("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var f=new au({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=f,i.add(f)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var f;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=h.viewGL}var f=h.viewGL,c=n(l);c.addView(f),u.afterRender&&u.afterRender(l,e,t,c),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,f=n(s);f.addView(h),l.afterRender&&l.afterRender(s,e,t,f),a(l.groupGL,s.get("silent"))}})};ru(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof Js&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,h=this;function f(p,m){var _=h._zlevelList;p==null&&(p=-1/0);for(var x,y=0;y<_.length;y++){var g=_[y],w=h._layers[g];if(!w.__builtin__&&g>p&&g<m){x=w;break}}x&&x.renderToCanvas&&(o.save(),x.renderToCanvas(o),o.restore())}for(var c={ctx:o},d=0;d<s.length;d++){var v=s[d];v.zlevel!==u&&(f(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,c,!0,null,l)}return f(u,1/0),n}});iu(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new el(r);i.update(e,t)});nu(ac);var Mn={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Kr={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Qr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},Pn=qr.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});ce(Pn.prototype,Mn);ce(Pn.prototype,Kr);ce(Pn.prototype,Qr);var oc=Pn,hi=ee.firstNotNull,Wo={left:0,middle:1,right:2};function Xo(e){return e instanceof Array||(e=[e,e]),e}var tl=ot.extend(function(){return{zr:null,viewGL:null,_center:new G,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new mt,_panVelocity:new mt,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(c){this[c[0]]=hi(e.get(c[0]),c[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(c){l[c]=hi(e.get(c),s&&s.get(c))});var u=hi(t.alpha,e.get("alpha"))||0,h=hi(t.beta,e.get("beta"))||0,f=hi(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:f,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(h),this.setCenter(f),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new G,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===Wo[this.rotateMouseButton]?this._mode="rotate":e.event.button===Wo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Xo(this.panSensitivity),r=Xo(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(tl.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var Rn=tl,Ii={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Me={vec2:Z,vec3:b,vec4:z,mat2:Ce,mat2d:Pe,mat3:ne,mat4:F,quat:$},ta=Me.vec3,Zo=[[0,0],[1,1]],rl=se.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new se.Attribute("position","float",3,"POSITION"),positionPrev:new se.Attribute("positionPrev","float",3),positionNext:new se.Attribute("positionNext","float",3),prevPositionPrev:new se.Attribute("prevPositionPrev","float",3),prevPosition:new se.Attribute("prevPosition","float",3),prevPositionNext:new se.Attribute("prevPositionNext","float",3),offset:new se.Attribute("offset","float",1),color:new se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=ta.dist(e,t)+ta.dist(r,t)+ta.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Zo)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Zo)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],h=t[1],f=t[2],c=r[0],d=r[1],v=r[2],p=i[0],m=i[1],_=i[2],x=this._getCubicCurveApproxStep(e,t,r,i),y=x*x,g=y*x,w=3*x,E=3*y,A=6*y,S=6*g,C=o-u*2+c,P=s-h*2+d,L=l-f*2+v,R=(u-c)*3-o+p,I=(h-d)*3-s+m,M=(f-v)*3-l+_,B=o,H=s,W=l,U=(u-o)*w+C*E+R*g,ue=(h-s)*w+P*E+I*g,V=(f-l)*w+L*E+M*g,ve=C*A+R*S,he=P*A+I*S,ge=L*A+M*S,ye=R*S,re=I*S,Ie=M*S,Se=0,Le=0,Ke=Math.ceil(1/x),Ze=new Float32Array((Ke+1)*3),Ze=[],He=0,Le=0;Le<Ke+1;Le++)Ze[He++]=B,Ze[He++]=H,Ze[He++]=W,B+=U,H+=ue,W+=V,U+=ve,ue+=he,V+=ge,ve+=ye,he+=re,ge+=Ie,Se+=x,Se>1&&(B=U>0?Math.min(B,p):Math.max(B,p),H=ue>0?Math.min(H,m):Math.max(H,m),W=V>0?Math.min(W,_):Math.max(W,_));return this.addPolyline(Ze,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(!!e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,h=this.attributes.color,f=this.attributes.offset,c=this.indices,d=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=i;m<n;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var _=m*3;if(v=v||[],v[0]=e[_],v[1]=e[_+1],v[2]=e[_+2],o){var x=m*4;p=p||[],p[0]=t[x],p[1]=t[x+1],p[2]=t[x+2],p[3]=t[x+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(d,d-1),h.copy(d,d-1),d++):(m<n-1&&(l.set(d+2,v),l.set(d+3,v)),m>0&&(u.set(d-2,v),u.set(d-1,v)),s.set(d,v),s.set(d+1,v),h.set(d,p),h.set(d+1,p),f.set(d,r/2),f.set(d+1,-r/2),d+=2),this.useNativeLine)h.set(d,p),s.set(d,v),d++;else if(m>0){var y=this._triangleOffset*3,c=this.indices;c[y]=d-4,c[y+1]=d-3,c[y+2]=d-2,c[y+3]=d-3,c[y+4]=d-1,c[y+5]=d-2,this._triangleOffset+=2}}if(!this.useNativeLine){var g=this._vertexOffset,w=this._vertexOffset+n*2;l.copy(g,g+2),l.copy(g+1,g+3),u.copy(w-1,w-3),u.copy(w-2,w-4)}return this._vertexOffset=d,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});rr(rl.prototype,Ii);var Sr=rl;function pn(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}pn.prototype={constructor:pn,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],h=[[n/o+u[0],a/s+u[1]],[(n+t)/o+u[0],(a+r)/s+u[1]]];return h},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function mn(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new Q({image:t,flipY:!1});var r=this;this._zr=ou(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new pn(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}mn.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new pn(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function tr(){}tr.prototype={constructor:tr,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new T.DirectionalLight({shadowBias:.005}),this.ambientLight=new T.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=T.parseColor(n.get("color")).slice(0,3),r.color=T.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(T.directionFromAlphaBeta(o,s)),t.lookAt(T.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=T.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=T.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new wi,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&Ss(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new T.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var h=u.getContext("2d"),f=new bs({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});As(h,f),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=T.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var c=t.coordinateSystem;if(this._skybox)if(c&&c.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var d=c.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var lr=Me.vec3,il=se.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new se.Attribute("position","float",3,"POSITION"),normal:new se.Attribute("normal","float",3,"NORMAL"),color:new se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=lr.create(),t=lr.create(),r=lr.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;lr.sub(e,n[1],n[0]),lr.sub(t,n[2],n[1]),lr.cross(r,e,t),lr.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});rr(il.prototype,Ii);var sc=il,Ta=ee.firstNotNull,lc={x:0,y:2,z:1};function uc(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[lc[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function Nn(e,t,r){this.rootNode=new T.Node;var i=new T.Mesh({geometry:new Sr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new T.Mesh({geometry:new sc,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new T.Plane,this.linesMesh=i,this.quadsMesh=n}Nn.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);uc(this.rootNode,this.plane,s,this.faceInfo[3])};Nn.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),f=h.get("color"),c=Ta(h.get("opacity"),1),d=Ta(h.get("width"),1);f=Ot(f)?f:[f];for(var v=a.getTicksCoords({tickModel:u}),p=0,m=0;m<v.length;m++){var _=v[m].coord,x=T.parseColor(f[p%f.length]);x[3]*=c;var y=[0,0,0],g=[0,0,0];y[o]=g[o]=_,y[1-o]=l[0],g[1-o]=l[1],e.addLine(y,g,x,d*n),p++}}}})};Nn.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),f=Ta(u.get("opacity"),1);h=Ot(h)?h:[h];for(var c=n.getTicksCoords({tickModel:l,clamp:!0}),d=0,v=[0,0,0],p=[0,0,0],m=0;m<c.length;m++){var _=c[m].coord,x=[0,0,0],y=[0,0,0];if(x[a]=y[a]=_,x[1-a]=s[0],y[1-a]=s[1],m===0){v=x,p=y;continue}var g=T.parseColor(h[d%h.length]);g[3]*=f,e.addQuad([v,x,y,p],g),v=x,p=y,d++}}}})};var jo=[0,1,2,0,2,3],nl=se.extend(function(){return{attributes:{position:new se.Attribute("position","float",3,"POSITION"),texcoord:new se.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new se.Attribute("offset","float",2),color:new se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var u=e*4,h=this.attributes.offset;h.set(u,[a,l]),h.set(u+1,[s,l]),h.set(u+2,[s,o]),h.set(u+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<jo.length;s++)this.indices[this._faceOffset*3+s]=jo[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var h=l.texcoord;h.set(s,[i[0][0],i[0][1]]),h.set(s+1,[i[1][0],i[0][1]]),h.set(s+2,[i[1][0],i[1][1]]),h.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});rr(nl.prototype,Ii);var hc=nl,fc=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;T.Shader.import(fc);var za=T.Mesh.extend(function(){var e=new hc({dynamic:!0}),t=new T.Material({shader:T.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}}),ur=ee.firstNotNull,hr={x:0,y:2,z:1};function Ha(e,t){var r=new T.Mesh({geometry:new Sr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new za;i.material.depthMask=!1;var n=new T.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var ra={x:"y",y:"x",z:"y"};Ha.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),L=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),h=s.getModel("axisTick",e.getModel("axisTick")),f=s.getModel("axisLabel",e.getModel("axisLabel")),c=u.get("lineStyle.color");if(u.get("show")){var d=u.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],m=hr[n.dim];v[m]=l[0],p[m]=l[1],this.axisLineCoords=[v,p];var _=T.parseColor(c),x=ur(d.get("width"),1),y=ur(d.get("opacity"),1);_[3]*=y,a.addLine(v,p,_,x*L)}if(h.get("show")){var g=h.getModel("lineStyle"),w=T.parseColor(ur(g.get("color"),c)),x=ur(g.get("width"),1);w[3]*=ur(g.get("opacity"),1);for(var E=n.getTicksCoords(),A=h.get("length"),S=0;S<E.length;S++){var C=E[S].coord,v=[0,0,0],p=[0,0,0],m=hr[n.dim],P=hr[ra[n.dim]];v[m]=p[m]=C,p[P]=A,a.addLine(v,p,w,x*L)}}this.labelElements=[];var L=r.getDevicePixelRatio();if(f.get("show"))for(var E=n.getTicksCoords(),R=s.get("data"),I=f.get("margin"),M=n.getViewLabels(),S=0;S<M.length;S++){var B=M[S].tickValue,H=M[S].formattedLabel,W=M[S].rawLabel,C=n.dataToCoord(B),U=[0,0,0],m=hr[n.dim],P=hr[ra[n.dim]];U[m]=U[m]=C,U[P]=I;var ue=f;R&&R[B]&&R[B].textStyle&&(ue=new En(R[B].textStyle,f,s.ecModel));var V=ur(ue.get("color"),c),ve=new un({style:hn(ue,{text:H,fill:typeof V=="function"?V(n.type==="category"?W:n.type==="value"?B+"":B,S):V,verticalAlign:"top",align:"left"})}),he=t.add(ve),ge=ve.getBoundingRect();o.addSprite(U,[ge.width*L,ge.height*L],he),this.labelElements.push(ve)}if(s.get("name")){var ye=s.getModel("nameTextStyle"),U=[0,0,0],m=hr[n.dim],P=hr[ra[n.dim]],re=ur(ye.get("color"),c),Ie=ye.get("borderColor"),x=ye.get("borderWidth");U[m]=U[m]=(l[0]+l[1])/2,U[P]=s.get("nameGap");var ve=new un({style:hn(ye,{text:s.get("name"),fill:re,stroke:Ie,lineWidth:x})}),he=t.add(ve),ge=ve.getBoundingRect();o.addSprite(U,[ge.width*L,ge.height*L],he),ve.__idx=this.labelElements.length,this.nameLabelElement=ve}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};Ha.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};var In=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Yo=ee.firstNotNull;T.Shader.import(In);var fr={x:0,y:2,z:1},cc=Pi.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new T.Material({shader:T.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new T.Material({shader:T.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new T.Node,this._control=new Rn({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new Nn(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new Ha(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new mn({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new T.Mesh({geometry:new Sr({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new mn({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new za({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new T.Node,this._sceneHelper=new tr,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new T.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(!!l){var u=r.getAxis(s.faceInfo[0]),h=r.getAxis(s.faceInfo[1]),f=fr[s.faceInfo[0]],c=fr[s.faceInfo[1]];u.contain(l.array[f])&&h.contain(l.array[c])&&(a=l)}}}if(a){var d=r.pointToData(a.array,[],!0);this._updateAxisPointer(d),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new T.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,f=this._axes[1].rootNode,c=this._axes[2].rootNode,d=this._faces,v=d[4].rootNode.invisible?u:l,p=d[2].rootNode.invisible?n:a,m=d[0].rootNode.invisible?o:s,_=d[2].rootNode.invisible?n:a,x=d[0].rootNode.invisible?s:o,y=d[4].rootNode.invisible?u:l;h.rotation.identity(),f.rotation.identity(),c.rotation.identity(),d[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),d[0].rootNode.invisible&&(this._axes[1].flipped=!0,f.rotation.rotateZ(Math.PI)),d[4].rootNode.invisible&&(this._axes[2].flipped=!0,c.rotation.rotateY(Math.PI)),h.position.set(0,p,v),f.position.set(m,_,0),c.position.set(x,0,y),h.update(),f.update(),c.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new T.Vector4,new T.Vector4],r=new T.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,h,f;Math.abs(s/o)<.5?(h="center",f=u>r.y?"bottom":"top"):(f="middle",h=l>r.x?"left":"right"),i.setSpriteAlign(h,f,this._api)},this)},_doShowAxisPointer:function(){!this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(S){return ee.firstNotNull(S.model.get("axisPointer.show"),a.get("show"))}function l(S){var C=S.model.getModel("axisPointer",a),P=C.getModel("lineStyle"),L=T.parseColor(P.get("color")),R=Yo(P.get("width"),1),I=Yo(P.get("opacity"),1);return L[3]*=I,{color:L,lineWidth:R}}for(var u=0;u<this._faces.length;u++){var h=this._faces[u];if(!h.rootNode.invisible){for(var f=h.faceInfo,c=f[3]<0?t.getAxis(f[2]).getExtentMin():t.getAxis(f[2]).getExtentMax(),d=fr[f[2]],v=0;v<2;v++){var p=f[v],m=f[1-v],_=t.getAxis(p),x=t.getAxis(m);if(!!s(_)){var y=[0,0,0],g=[0,0,0],w=fr[p],E=fr[m];y[w]=g[w]=r[w],y[d]=g[d]=c,y[E]=x.getExtentMin(),g[E]=x.getExtentMax();var A=l(_);n.addLine(y,g,A.color,A.lineWidth*o)}}if(s(t.getAxis(f[2]))){var y=r.slice(),g=r.slice();g[d]=c;var A=l(t.getAxis(f[2]));n.addLine(y,g,A.color,A.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=n.getAxis(s.dim),h=u.model,f=h.getModel("axisPointer",a),c=f.getModel("label"),d=f.get("lineStyle.color");if(!(!c.get("show")||!f.get("show"))){var v=e[l],p=c.get("formatter"),m=u.scale.getLabel({value:v});if(p!=null)m=p(m,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var _=Cs(u.scale.getTicks()[0]);m=v.toFixed(_+2)}var x=c.get("color"),y=new un({style:hn(c,{text:m,fill:x||d,align:"left",verticalAlign:"top"})}),g=i.add(y),w=y.getBoundingRect(),E=this._api.getDevicePixelRatio(),A=s.rootNode.position.toArray(),S=fr[o[s.dim]];A[S]+=(s.flipped?-1:1)*c.get("margin"),A[fr[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(A,[w.width*E,w.height*E],g,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Ei(e){Ls.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Ei.prototype={constructor:Ei,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Ds(Ei,Ls);function _n(e,t,r){Sn.call(this,e,t,r)}_n.prototype={constructor:_n,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Ds(_n,Sn);var wa=function(){this._pool={},this._allocatedTextures=[]};wa.prototype={constructor:wa,get:function(e){var t=qo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new Q(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=qo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var al={width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.CLAMP_TO_EDGE,wrapT:D.CLAMP_TO_EDGE,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},ia=Object.keys(al);function qo(e){Ye.defaultsWithPropList(e,al,ia),dc(e);for(var t="",r=0;r<ia.length;r++){var i=ia[r],n=e[i].toString();t+=n}return t}function dc(e){var t=vc(e.width,e.height);e.format===D.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==D.NEAREST_MIPMAP_NEAREST||e.minFilter==D.NEAREST_MIPMAP_LINEAR?e.minFilter=D.NEAREST:(e.minFilter==D.LINEAR_MIPMAP_LINEAR||e.minFilter==D.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=D.LINEAR)),t||(e.wrapS=D.CLAMP_TO_EDGE,e.wrapT=D.CLAMP_TO_EDGE)}function vc(e,t){return(e&e-1)===0&&(t&t-1)===0}var ol=wa,pc=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,Yt=["px","nx","py","ny","pz","nz"];N.import(pc);function na(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function $o(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var Nt=ot.extend(function(){return{softShadow:Nt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new qe,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new ol}},function(){this._gaussianPassH=new Ne({fragment:N.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Ne({fragment:N.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Ne({fragment:N.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===Nt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===Nt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],h=[],f=[],c,d=0;d<this._lightsCastShadow.length;d++){var v=this._lightsCastShadow[d];if(v.type==="DIRECTIONAL_LIGHT"){if(c){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(c=v),this.renderDirectionalLightShadow(e,t,r,v,h,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,f);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],_=p+"_SHADOWMAP_COUNT",d=0;d<this._receivers.length;d++){var x=this._receivers[d],y=x.material;y.fragmentDefines[_]!==m&&(m>0?y.define("fragment",_,m):y.isDefined("fragment",_)&&y.undefine("fragment",_))}for(var d=0;d<this._receivers.length;d++){var x=this._receivers[d],y=x.material;c?y.define("fragment","SHADOW_CASCADE",c.shadowCascade):y.undefine("fragment","SHADOW_CASCADE")}var g=t.shadowUniforms;function w(P){return P.height}if(l.length>0){var E=l.map(w);if(g.directionalLightShadowMaps={value:l,type:"tv"},g.directionalLightMatrices={value:u,type:"m4v"},g.directionalLightShadowMapSizes={value:E,type:"1fv"},c){var A=h.slice(),S=h.slice();A.pop(),S.shift(),A.reverse(),S.reverse(),u.reverse(),g.shadowCascadeClipsNear={value:A,type:"1fv"},g.shadowCascadeClipsFar={value:S,type:"1fv"}}}if(o.length>0){var C=o.map(w),g=t.shadowUniforms;g.spotLightShadowMaps={value:o,type:"tv"},g.spotLightMatrices={value:s,type:"m4v"},g.spotLightShadowMapSizes={value:C,type:"1fv"}}f.length>0&&(g.pointLightShadowMaps={value:f,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Ba,t=new k,r=new it,i=new k,n=new k,a=new k,o=new k;return function(s,l,u,h,f,c,d){var v=this._getDepthMaterial(h),p={getMaterial:function(ge){return ge.shadowDepthMaterial||v},isMaterialChanged:$o,getUniform:na,ifRender:function(ge){return ge.castShadow},sortCompare:gi.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),y=this._getDirectionalLightCamera(h,l,u),g=a.array;o.copy(y.projectionMatrix),F.invert(n.array,y.worldTransform.array),F.multiply(n.array,n.array,u.worldTransform.array),F.multiply(g,o.array,n.array);for(var w=[],E=u instanceof Ve,A=(u.near+u.far)/(u.near-u.far),S=2*u.near*u.far/(u.near-u.far),C=0;C<=h.shadowCascade;C++){var P=x*Math.pow(_/x,C/h.shadowCascade),L=x+(_-x)*C/h.shadowCascade,R=P*h.cascadeSplitLogFactor+L*(1-h.cascadeSplitLogFactor);w.push(R),f.push(-(-R*A+S)/-R)}var I=this._getTexture(h,h.shadowCascade);d.push(I);var M=s.viewport,B=s.gl;this._frameBuffer.attach(I),this._frameBuffer.bind(s),B.clear(B.COLOR_BUFFER_BIT|B.DEPTH_BUFFER_BIT);for(var C=0;C<h.shadowCascade;C++){var H=w[C],W=w[C+1];E?F.perspective(t.array,u.fov/180*Math.PI,u.aspect,H,W):F.ortho(t.array,u.left,u.right,u.bottom,u.top,H,W),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var U=r.min.array,ue=r.max.array;U[0]=Math.max(U[0],-1),U[1]=Math.max(U[1],-1),ue[0]=Math.min(ue[0],1),ue[1]=Math.min(ue[1],1),i.ortho(U[0],ue[0],U[1],ue[1],1,-1),y.projectionMatrix.multiplyLeft(i);var V=h.shadowResolution||512;s.setViewport((h.shadowCascade-C-1)*V,0,V,V,1);var ve=l.updateRenderList(y);s.renderPass(ve.opaque,y,p),this.softShadow===Nt.VSM&&this._gaussianFilter(s,I,I.width);var he=new k;he.copy(y.viewMatrix).multiplyLeft(y.projectionMatrix),c.push(he.array),y.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(M)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(c){return c.shadowDepthMaterial||l},isMaterialChanged:$o,getUniform:na,ifRender:function(c){return c.castShadow},sortCompare:gi.opaqueSortCompare},h=t.updateRenderList(o);e.renderPass(h.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===Nt.VSM&&this._gaussianFilter(e,a,a.width);var f=new k;f.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(f.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:na,sortCompare:gi.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new it,h=r.getWorldPosition().array,f=new it,c=r.range;f.min.setArray(h),f.max.setArray(h);var d=new G(c,c,c);f.max.add(d),f.min.sub(d);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var y=x.geometry;if(!y.boundingBox){for(var g=0;g<Yt.length;g++)l[Yt[g]].push(x);return}if(u.transformFrom(y.boundingBox,x.worldTransform),!u.intersectBoundingBox(f))return;u.updateVertices();for(var g=0;g<Yt.length;g++)v[Yt[g]]=!1;for(var g=0;g<8;g++){var w=u.vertices[g],E=w[0]-h[0],A=w[1]-h[1],S=w[2]-h[2],C=Math.abs(E),P=Math.abs(A),L=Math.abs(S);C>P?C>L?v[E>0?"px":"nx"]=!0:v[S>0?"pz":"nz"]=!0:P>L?v[A>0?"py":"ny"]=!0:v[S>0?"pz":"nz"]=!0}for(var g=0;g<Yt.length;g++)v[Yt[g]]&&l[Yt[g]].push(x)}});for(var p=0;p<6;p++){var m=Yt[p],_=this._getPointLightCamera(r,m);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],_,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new Et({precision:this.precision,shader:new N(N.source(i+"vertex"),N.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===Nt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:X.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new Ti:i=new Q,i.width=n*t,i.height=n,this.softShadow===Nt.VSM?(i.type=X.FLOAT,i.anisotropic=4):(i.minFilter=D.NEAREST,i.magFilter=D.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ve,nx:new Ve,py:new Ve,ny:new Ve,pz:new Ve,nz:new Ve});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(G.POSITIVE_X,G.NEGATIVE_Y);break;case"nx":r.lookAt(G.NEGATIVE_X,G.NEGATIVE_Y);break;case"py":r.lookAt(G.POSITIVE_Y,G.POSITIVE_Z);break;case"ny":r.lookAt(G.NEGATIVE_Y,G.NEGATIVE_Z);break;case"pz":r.lookAt(G.POSITIVE_Z,G.NEGATIVE_Y);break;case"nz":r.lookAt(G.NEGATIVE_Z,G.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new k,t=new it,r=new it;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Wr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),k.invert(e,o.worldTransform),k.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ve);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),F.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Nt.VSM=1;Nt.PCF=2;var mc=Nt,_c=ot.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(!!r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Si=_c,gc=ot.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(!!t.inputs){for(var r in t.inputs)if(!!t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof Si)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Ko=gc,yc=Ko.extend(function(){return{_outputs:[],_texturePool:new ol,_frameBuffer:new qe({depthBuffer:!1})}},{addNode:function(e){Ko.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),xc=yc,Tc=Si.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new qe},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var h=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&h.push(l);u.drawBuffersEXT(h)}e.saveClear(),e.clearBit=D.DEPTH_BUFFER_BIT|D.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),wc=Tc,Ec=Si.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Sc=Ec,bc=Si.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Ne({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],h=this._compositor.allocateTexture(l);this._outputTextures[s]=h;var f=u.attachment||r.COLOR_ATTACHMENT0;typeof f=="string"&&(f=r[f]),o[f]=h}this._compositor.getFrameBuffer().bind(e);for(var f in o)this._compositor.getFrameBuffer().attach(o[f],f);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){Si.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),Ac=bc,Cc=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,sl=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Lc=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,ll=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Dc=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,ul=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,hl=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,fl=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,cl=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,dl=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Mc=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,vl=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,pl=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Pc(e){e.import(Cc),e.import(sl),e.import(Lc),e.import(ll),e.import(Dc),e.import(ul),e.import(hl),e.import(fl),e.import(cl),e.import(dl),e.import(Mc),e.import(vl),e.import(pl)}Pc(N);var Rc=/^#source\((.*?)\)/;function Nc(e,t){var r=new xc;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var u=0;u<e.nodes.length;u++){var h=e.nodes[u],f=Ic(h,i,t);f&&r.addNode(f)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=Va(o)}return Fc(e,i,t,function(s){i.textures=s,n()}),r}function Ic(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Rc.exec(s);if(l?n=N.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var h=e.outputs[u];o[u]={},h.attachment!=null&&(o[u].attachment=h.attachment),h.keepLastFrame!=null&&(o[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[u].outputLastFrame=h.outputLastFrame),h.parameters&&(o[u].parameters=Va(h.parameters))}}var f;if(i==="scene"?f=new wc({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?f=new Sc({name:e.name,outputs:o}):f=new Ac({name:e.name,shader:n,inputs:a,outputs:o}),f){if(e.parameters)for(var u in e.parameters){var c=e.parameters[u];typeof c=="string"?(c=c.trim(),c.charAt(0)==="#"?c=t.textures[c.substr(1)]:f.on("beforerender",Uc(u,ml(c)))):typeof c=="function"&&f.on("beforerender",c),f.setParameter(u,c)}if(e.defines&&f.pass)for(var u in e.defines){var c=e.defines[u];f.pass.material.define("fragment",u,c)}}return f}function Oc(e,t){return e}function Bc(e,t){return t}function Va(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=X[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=Gc(i,ml(n),r)):t[i]=n}}),t.width||(t.width=Oc),t.height||(t.height=Bc),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function Fc(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;Ye.each(e.textures,function(l,u){var h,f=l.path,c=Va(l.parameters);if(Array.isArray(f)&&f.length===6)s&&(f=f.map(function(d){return Ye.relative2absolute(d,s)})),h=new Ti(c);else if(typeof f=="string")s&&(f=Ye.relative2absolute(f,s)),h=new Q(c);else return;h.load(f),a++,h.once("success",function(){n[u]=h,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function Uc(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function Gc(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function ml(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Xr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}var zc=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;N.import(zc);function _l(e){for(var t=new Uint8Array(e*e*4),r=0,i=new G,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function Qo(e){return new Q({pixels:_l(e),wrapS:X.REPEAT,wrapT:X.REPEAT,width:e,height:e})}function Hc(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=Xr(n+t,2)*(r?1:2)*Math.PI,o=Xr(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=h}return i}function kt(e){e=e||{},this._ssaoPass=new Ne({fragment:N.source("ecgl.ssao.estimate")}),this._blurPass=new Ne({fragment:N.source("ecgl.ssao.blur")}),this._framebuffer=new qe({depthBuffer:!1}),this._ssaoTexture=new Q,this._blurTexture=new Q,this._blurTexture2=new Q,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}kt.prototype.setDepthTexture=function(e){this._depthTex=e};kt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};kt.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new k;k.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,h.width=i,h.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var f=e.clearColor;e.gl.clearColor(f[0],f[1],f[2],f[3])};kt.prototype.getTargetTexture=function(){return this._blurTexture2};kt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};kt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Hc(e,t*e,!!this._normalTex)};kt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=_l(e),t.width=t.height=e,t.dirty()):(t=Qo(e),this._ssaoPass.setUniform("noiseTex",Qo(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};kt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var Vc=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;N.import(Vc);function Wt(e){e=e||{},this._ssrPass=new Ne({fragment:N.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Ne({fragment:N.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Ne({fragment:N.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Ne({fragment:N.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new Q({type:X.HALF_FLOAT}),this._texture2=new Q({type:X.HALF_FLOAT}),this._texture3=new Q({type:X.HALF_FLOAT}),this._prevTexture=new Q({type:X.HALF_FLOAT}),this._currentTexture=new Q({type:X.HALF_FLOAT}),this._frameBuffer=new qe({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Wt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Wt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,f=this._blurPass1,c=this._blurPass2,d=this._blendPass,v=new k,p=new k;k.transpose(v,t.worldTransform),k.transpose(p,t.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",v.array),h.setUniform("toWorldSpace",p.array),h.setUniform("nearZ",t.near);var m=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",m),h.setUniform("sampleOffset",i*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),c.setUniform("textureSize",[n,a]),c.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),c.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),h.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),d.render(e)),u.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(e),u.attach(l),c.setUniform("texture",s),c.render(e),u.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};Wt.prototype.getTargetTexture=function(){return this._texture3};Wt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Wt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=ln.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Wt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Wt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Wt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var Jo=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],kc=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;N.import(kc);function aa(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function Wc(e,t,r,i,n){var a,o,s,l,u=e.gl;return function(h,f,c){if(!(l&&l.material===h.material)){var d=h.material,v=h.__program,p=d.get("roughness");p==null&&(p=1);var m=d.get("normalMap")||t,_=d.get("roughnessMap"),x=d.get("bumpMap"),y=d.get("uvRepeat"),g=d.get("uvOffset"),w=d.get("detailUvRepeat"),E=d.get("detailUvOffset"),A=!!x&&d.isTextureEnabled("bumpMap"),S=!!_&&d.isTextureEnabled("roughnessMap"),C=d.isDefined("fragment","DOUBLE_SIDED");x=x||r,_=_||i,c!==f?(f.set("normalMap",m),f.set("bumpMap",x),f.set("roughnessMap",_),f.set("useBumpMap",A),f.set("useRoughnessMap",S),f.set("doubleSide",C),y!=null&&f.set("uvRepeat",y),g!=null&&f.set("uvOffset",g),w!=null&&f.set("detailUvRepeat",w),E!=null&&f.set("detailUvOffset",E),f.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==m&&aa(e,v,"normalMap",m,0),o!==x&&x&&aa(e,v,"bumpMap",x,1),s!==_&&_&&aa(e,v,"roughnessMap",_,2),y!=null&&v.setUniform(u,"2f","uvRepeat",y),g!=null&&v.setUniform(u,"2f","uvOffset",g),w!=null&&v.setUniform(u,"2f","detailUvRepeat",w),E!=null&&v.setUniform(u,"2f","detailUvOffset",E),v.setUniform(u,"1i","useBumpMap",+A),v.setUniform(u,"1i","useRoughnessMap",+S),v.setUniform(u,"1i","doubleSide",+C)),a=m,o=x,s=_,l=h}}}function Jr(e){this._depthTex=new Q({format:X.DEPTH_COMPONENT,type:X.UNSIGNED_INT}),this._normalTex=new Q({type:X.HALF_FLOAT}),this._framebuffer=new qe,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,qe.DEPTH_ATTACHMENT),this._normalMaterial=new Et({shader:new N(N.source("ecgl.normal.vertex"),N.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=_r.createBlank("#000"),this._defaultBumpMap=_r.createBlank("#000"),this._defaultRoughessMap=_r.createBlank("#000"),this._debugPass=new Ne({fragment:N.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Jr.prototype.getDepthTexture=function(){return this._depthTex};Jr.prototype.getNormalTexture=function(){return this._normalTex};Jr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:Wc(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Jr.prototype.renderDebug=function(e){this._debugPass.render(e)};Jr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Oi(e){e=e||{},this._edgePass=new Ne({fragment:N.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new Q({type:X.HALF_FLOAT}),this._frameBuffer=new qe,this._frameBuffer.attach(this._targetTexture)}Oi.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};Oi.prototype.getTargetTexture=function(){return this._targetTexture};Oi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Oi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var Xc={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Zc=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,jc=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;N.import(sl);N.import(ll);N.import(ul);N.import(hl);N.import(fl);N.import(cl);N.import(dl);N.import(vl);N.import(pl);N.import(Zc);N.import(jc);function gl(e,t){return{color:{parameters:{width:e,height:t}}}}var ka=["composite","FXAA"];function ie(){this._width,this._height,this._dpr,this._sourceTexture=new Q({type:X.HALF_FLOAT}),this._depthTexture=new Q({format:X.DEPTH_COMPONENT,type:X.UNSIGNED_INT}),this._framebuffer=new qe,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,qe.DEPTH_ATTACHMENT),this._normalPass=new Jr,this._compositor=Nc(Xc);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ka.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new kt(r),this._ssrPass=new Wt(r),this._edgePass=new Oi(r)}ie.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,h){if(typeof u[h]=="function"){var f=u[h].__original||u[h];u[h]=function(c){return f.call(this,s)},u[h].__original=f}}this._compositor.nodes.forEach(function(u){for(var h in u.outputs){var f=u.outputs[h].parameters;f&&(l(f,"width"),l(f,"height"))}for(var c in u.parameters)l(u.parameters,c)}),this._width=i,this._height=n,this._dpr=r};ie.prototype.getWidth=function(){return this._width};ie.prototype.getHeight=function(){return this._height};ie.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};ie.prototype._getPrevNode=function(e){for(var t=ka.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};ie.prototype._getNextNode=function(e){for(var t=ka.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};ie.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=gl(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};ie.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=gl(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};ie.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};ie.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};ie.prototype.enableSSAO=function(){this._enableSSAO=!0};ie.prototype.disableSSAO=function(){this._enableSSAO=!1};ie.prototype.enableSSR=function(){this._enableSSR=!0};ie.prototype.disableSSR=function(){this._enableSSR=!1};ie.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};ie.prototype.getSourceFrameBuffer=function(){return this._framebuffer};ie.prototype.getSourceTexture=function(){return this._sourceTexture};ie.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};ie.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};ie.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};ie.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};ie.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};ie.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};ie.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};ie.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};ie.prototype.enableEdge=function(){this._enableEdge=!0};ie.prototype.disableEdge=function(){this._enableEdge=!1};ie.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};ie.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};ie.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};ie.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};ie.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};ie.prototype.setEdgeColor=function(e){var t=T.parseColor(e);this._edgePass.setParameter("edgeColor",t)};ie.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};ie.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST,flipY:!1})};ie.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};ie.prototype.isSSREnabled=function(){return this._enableSSR};ie.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(Jo.length/2/l),h=n%u,f=0;f<l*2;f++)s[f]=Jo[f+h*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",n/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};ie.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Ea(e){for(var t=[],r=0;r<30;r++)t.push([Xr(r,2),Xr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new Q,this._sourceFb=new qe,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new Q,this._outputTex=new Q;var i=this._blendPass=new Ne({fragment:N.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new qe({depthBuffer:!1}),this._outputPass=new Ne({fragment:N.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Ea.prototype={constructor:Ea,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new k;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,k.mul(t.projectionMatrix,s,t.projectionMatrix),k.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function de(e){e=e||"perspective",this.layer=null,this.scene=new ir,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new ie,this._temporalSS=new Ea,this._shadowMapPass=new mc;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(Xr(r,2)*4-2),n.push(Xr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}de.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ve||(this.camera=new Ve,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Wr||(this.camera=new Wr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};de.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Ve&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};de.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var es=new mt;de.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,es),this.camera.castRay(es,r),i.viewport=n,r};de.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};de.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};de.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};de.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};de.prototype.hasDOF=function(){return this._enableDOF};de.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};de.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};de.prototype._updateTransparent=function(e,t,r,i){for(var n=new G,a=new k,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;k.invert(a,u.worldTransform),G.transformMat4(n,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,i)}};de.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};de.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};de.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};de.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})};de.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};de.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};de.prototype.isLinearSpace=function(){return this._enablePostEffect};de.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};de.prototype.add=function(e){this.rootNode.add(e)};de.prototype.remove=function(e){this.rootNode.remove(e)};de.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(de.prototype,Ra);function Yc(e,t){var r=e.getBoxLayoutParams(),i=bn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function qc(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var h=Da(r[o]||[1/0,-1/0],a);u=new _n(o,h),u.type=a.get("type");var f=u.type==="category";u.onBand=f&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var $c={dimensions:Ei.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new de;var o=new Ei;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=Yc,o.update=qc});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(h){h.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}},Kc=$c,yl=qr.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});su(yl);var Qc=yl,xl={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Jc=ce({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},xl),Wa=ce({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},xl),ed=rr({scale:!0,min:"dataMin",max:"dataMax"},Wa),Tl=rr({logBase:10},Wa);Tl.scale=!0;var td={categoryAxis3D:Jc,valueAxis3D:Wa,timeAxis3D:ed,logAxis3D:Tl},rd=["value","category","time","log"];function id(e,t,r,i,n){rd.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();ce(s,u.get(a+"Axis3D")),ce(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=lu.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:ce(uu(td[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",hu(i,t))}function nd(e,t){return t.type||(t.data?"category":"value")}function ad(e){e.registerComponentModel(oc),e.registerComponentView(cc),e.registerCoordinateSystem("grid3D",Kc),["x","y","z"].forEach(function(t){id(e,t,Qc,nd,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}tt(ad);var ei={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},wl={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=da(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,o=0;o<r.length;o++)n[r[o].name]=r[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}},ti=qr.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=Ri(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new Ft(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new En(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o!=null?o:"")}else return r},defaultOption:{regions:[]}});ce(ti.prototype,wl);ce(ti.prototype,Mn);ce(ti.prototype,Kr);ce(ti.prototype,Qr);ce(ti.prototype,ei);var od=ti;function El(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=Sl(e,0,n,r,!0),o=[];if(!a)return o;var s,l,u,h,f,c,d;if(i&&(a=fd(e,t,a,r)),e.length>80*r){s=u=e[0],l=h=e[1];for(var v=r;v<n;v+=r)f=e[v],c=e[v+1],f<s&&(s=f),c<l&&(l=c),f>u&&(u=f),c>h&&(h=c);d=Math.max(u-s,h-l)}return Ai(a,o,r,s,l,d),o}function Sl(e,t,r,i,n){var a,o;if(n===Aa(e,t,r,i)>0)for(a=t;a<r;a+=i)o=ts(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=ts(a,e[a],e[a+1],o);return o&&mr(o,o.next)&&(Li(o),o=o.next),o}function bi(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(mr(r,r.next)||nt(r.prev,r,r.next)===0)){if(Li(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function Ai(e,t,r,i,n,a,o){if(!!e){!o&&a&&pd(e,i,n,a);for(var s=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,a?ld(e,i,n,a):sd(e)){t.push(l.i/r),t.push(e.i/r),t.push(u.i/r),Li(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=ud(e,t,r),Ai(e,t,r,i,n,a,2)):o===2&&hd(e,t,r,i,n,a):Ai(bi(e),t,r,i,n,a,1);break}}}}function sd(e){var t=e.prev,r=e,i=e.next;if(nt(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(gn(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&nt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function ld(e,t,r,i){var n=e.prev,a=e,o=e.next;if(nt(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,u=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,h=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,f=Sa(s,l,t,r,i),c=Sa(u,h,t,r,i),d=e.nextZ;d&&d.z<=c;){if(d!==e.prev&&d!==e.next&&gn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=f;){if(d!==e.prev&&d!==e.next&&gn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function ud(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!mr(n,a)&&bl(n,i,i.next,a)&&Ci(n,a)&&Ci(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),Li(i),Li(i.next),i=e=a),i=i.next}while(i!==e);return i}function hd(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&gd(o,s)){var l=Al(o,s);o=bi(o,o.next),l=bi(l,l.next),Ai(o,t,r,i,n,a),Ai(l,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function fd(e,t,r,i){var n=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*i,l=a<o-1?t[a+1]*i:e.length,u=Sl(e,s,l,i,!1),u===u.next&&(u.steiner=!0),n.push(_d(u));for(n.sort(cd),a=0;a<n.length;a++)dd(n[a],r),r=bi(r,r.next);return r}function cd(e,t){return e.x-t.x}function dd(e,t){if(t=vd(e,t),t){var r=Al(t,e);bi(r,r.next)}}function vd(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var l=o,u=o.x,h=o.y,f=1/0,c;for(r=o.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&gn(n<h?i:a,n,u,h,n<h?a:i,n,r.x,r.y)&&(c=Math.abs(n-r.y)/(i-r.x),(c<f||c===f&&r.x>o.x)&&Ci(r,e)&&(o=r,f=c)),r=r.next;return o}function pd(e,t,r,i){var n=e;do n.z===null&&(n.z=Sa(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,md(n)}function md(e){var t,r,i,n,a,o,s,l,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<u&&(s++,i=i.nextZ,!!i);t++);for(l=u;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(o>1);return e}function Sa(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function _d(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function gn(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function gd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!yd(e,t)&&Ci(e,t)&&Ci(t,e)&&xd(e,t)}function nt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function mr(e,t){return e.x===t.x&&e.y===t.y}function bl(e,t,r,i){return mr(e,t)&&mr(r,i)||mr(e,i)&&mr(r,t)?!0:nt(e,t,r)>0!=nt(e,t,i)>0&&nt(r,i,e)>0!=nt(r,i,t)>0}function yd(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&bl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Ci(e,t){return nt(e.prev,e,e.next)<0?nt(e,t,e.next)>=0&&nt(e,e.prev,t)>=0:nt(e,t,e.prev)<0||nt(e,e.next,t)<0}function xd(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Al(e,t){var r=new ba(e.i,e.x,e.y),i=new ba(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function ts(e,t,r,i){var n=new ba(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Li(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ba(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}El.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,o=Math.abs(Aa(e,0,a,r));if(n)for(var s=0,l=t.length;s<l;s++){var u=t[s]*r,h=s<l-1?t[s+1]*r:e.length;o-=Math.abs(Aa(e,u,h,r))}var f=0;for(s=0;s<i.length;s+=3){var c=i[s]*r,d=i[s+1]*r,v=i[s+2]*r;f+=Math.abs((e[c]-e[v])*(e[d+1]-e[c+1])-(e[c]-e[d])*(e[v+1]-e[c+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function Aa(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function oa(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Cl(e,t,r,i,n){var a=r,o=e[t];oa(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(oa(e,s,a),a++);return oa(e,i,a),a}function yn(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Cl(e,n,r,i,t);yn(e,t,r,a-1),yn(e,t,a+1,i)}}function Zr(){this._parts=[]}Zr.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Cl(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var h=a.length-1-this._currentSortPartIdx;if(yn(e,t,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Zr.sort=yn;var zr=Me.vec3,rs=zr.create(),is=zr.create(),ns=zr.create(),Xa={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],rs),i.get(r[o++],is),i.get(r[o++],ns);var s=zr.sqrDist(rs,e),l=zr.sqrDist(is,e),u=zr.sqrDist(ns,e),h=Math.min(s,l);h=Math.min(h,u),o===3?(a=h,h=0):h=h-a,this._triangleZList[n++]=h}}for(var f=this._sortedTriangleIndices,o=0;o<f.length;o++)f[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var c=this._indicesTmp,d=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=f[o]*3,m=o*3;c[m++]=r[p++],c[m++]=r[p++],c[m]=r[p],d[o]=v[f[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Zr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Zr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function Td(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function wd(e){return e.getVisual("style").opacity}function We(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function ke(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Ll=1,Dl=2;function Xt(e,t,r){this._labelsMesh=new za,this._labelTextureSurface=new mn({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Xt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Xt.prototype.getLabelDistance=function(e,t,r){return 0};Xt.prototype.getMesh=function(){return this._labelsMesh};Xt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var u=(s?Ll:0)|(l?Dl:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};Xt.prototype.updateLabels=function(e){if(!!this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),u=o.getModel(a,l),h={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},c=this._start;c<this._end;c++){var d=!1;t&&r[c]&&(d=!0);var v=this._labelsVisibilitiesBits[c-this._start]&(d?Dl:Ll);if(!!v){var p=s.getItemModel(c),m=p.getModel(d?a:n,d?u:l),_=m.get("distance")||0,x=m.get("position"),y=this._api.getDevicePixelRatio(),g=o.getFormattedLabel(c,d?"emphasis":"normal");if(g==null||g==="")return;var w=new un({style:hn(m,{text:g,fill:m.get("color")||We(s,c)||"#000",align:"left",verticalAlign:"top",opacity:ee.firstNotNull(m.get("opacity"),ke(s,c),1)})}),E=w.getBoundingRect(),A=1.2;E.height*=A;var S=this._labelTextureSurface.add(w),C=h[x]||"center",P=f[x]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(c,x,_),[E.width*y,E.height*y],S,C,P,this.getLabelDistance(c,x,_)*y)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Xt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var ht=Me.vec3;T.Shader.import(In);function jr(e){this.rootNode=new T.Node,this._triangulationResults={},this._shadersMap=T.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=T.createShader("ecgl."+i),r},{}),this._linesShader=T.createShader("ecgl.meshLines3D");var t={};T.COMMON_SHADERS.forEach(function(r){t[r]=new T.Material({shader:T.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Xt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}jr.prototype={constructor:jr,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(u,h,f){var c=a.getName(u),d,v=f;if(s.type==="geo3D"){var p=s.getRegion(c);if(!p)return[NaN,NaN,NaN];d=p.getCenter();var m=s.dataToPoint([d[0],d[1],v]);return m}else var _=l._triangulationResults[u-l._startIndex],d=l.extrudeY?[(_.max[0]+_.min[0])/2,_.max[1]+v,(_.max[2]+_.min[2])/2]:[(_.max[0]+_.min[0])/2,(_.max[1]+_.min[1])/2,_.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new T.Mesh({name:"Polygon",material:new T.Material({shader:e._shadersMap.lambert}),geometry:new T.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,Xa),n}var r=t(),i=new T.Mesh({material:new T.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Sr({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,o=0,s=0,l=0,u=i;u<n;u++){var h=this._getRegionPolygonInfo(u),f=this._getRegionLinesInfo(u,e,this._linesMesh.geometry);a+=h.vertexCount,o+=h.triangleCount,s+=f.vertexCount,l+=f.triangleCount}var c=this._polygonMesh,d=c.geometry;["position","normal","texcoord0","color"].forEach(function(v){d.attributes[v].init(a)}),d.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),c.material.shader!==t&&c.material.attachShader(t,!0),T.setMaterialFromModel(t.__shading,c.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,o=0,s=!1,E=this._polygonMesh,l=this._linesMesh,u=r;u<i;u++){var h=e.getRegionModel(u),f=h.getModel("itemStyle"),c=ee.firstNotNull(We(n,u),f.get("color"),"#fff"),d=ee.firstNotNull(ke(n,u),f.get("opacity"),1),v=T.parseColor(c),p=T.parseColor(f.get("borderColor"));v[3]*=d,p[3]*=d;var m=v[3]<.99;E.material.set("color",[1,1,1,1]),s=s||m;for(var _=ee.firstNotNull(h.get("height",!0),e.get("regionHeight")),x=this._updatePolygonGeometry(e,E.geometry,u,_,a,o,v),y=a;y<x.vertexOffset;y++)this._dataIndexOfVertex[y]=u;this._vertexRangeOfDataIndex[(u-r)*2]=a,this._vertexRangeOfDataIndex[(u-r)*2+1]=x.vertexOffset,a=x.vertexOffset,o=x.triangleOffset;var g=f.get("borderWidth"),w=g>0;w&&(g*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,_,g,e.coordinateSystem.transform)),l.invisible=!w,l.material.set({color:p})}var E=this._polygonMesh;E.material.transparent=s,E.material.depthMask=!s,E.geometry.updateBoundingBox(),E.frontFace=this.extrudeY?T.Mesh.CCW:T.Mesh.CW,E.material.get("normalMap")&&E.geometry.generateTangents(),E.seriesIndex=e.seriesIndex,E.on("mousemove",this._onmousemove,this),E.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=T.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=ee.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),T.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",T.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),u=0;u<l.length;u++){var h=l[u].exterior,f=l[u].interiors,c=[],d=[];if(!(h.length<3)){for(var v=0,p=0;p<h.length;p++){var m=h[p];c[v++]=m[0],c[v++]=m[1]}for(var p=0;p<f.length;p++)if(!(f[p].length<3)){for(var _=c.length/2,x=0;x<f[p].length;x++){var m=f[p][x];c.push(m[0]),c.push(m[1])}d.push(_)}for(var y=El(c,d),g=new Float64Array(c.length/2*3),w=[],E=[1/0,1/0,1/0],A=[-1/0,-1/0,-1/0],S=0,p=0;p<c.length;)ht.set(w,c[p++],0,c[p++]),a&&a.transform&&ht.transformMat4(w,w,a.transform),ht.min(E,E,w),ht.max(A,A,w),g[S++]=w[0],g[S++]=w[1],g[S++]=w[2];ht.min(i,i,E),ht.max(n,n,A),s.push({points:g,indices:y,min:E,max:A})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,o=i*2+r*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,u=t.attributes.normal,h=t.attributes.texcoord0,f=t.attributes.color,c=this._triangulationResults[r-this._startIndex],d=f.value&&o,v=t.indices,p=this.extrudeY?1:2,m=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],x=ht.mul([],this._geoBoundingBox[0],_),y=ht.mul([],this._geoBoundingBox[1],_),g=Math.max(y[0]-x[0],y[2]-x[2]);function w(Le,Ke,Ze){for(var He=Le.points,ni=He.length,Oe=[],Pt=[],Qe=0;Qe<ni;Qe+=3)Oe[0]=He[Qe],Oe[p]=Ke,Oe[m]=He[Qe+2],Pt[0]=(He[Qe]*_[0]-x[0])/g,Pt[1]=(He[Qe+2]*_[m]-x[2])/g,l.set(n,Oe),d&&f.set(n,o),h.set(n++,Pt)}function E(Le,Ke,Ze){var He=n;w(Le,Ke);for(var ni=Le.indices.length,Oe=0;Oe<ni;Oe++)v[a*3+Oe]=Le.indices[Oe]+He;a+=Le.indices.length/3}for(var A=this.extrudeY?[0,1,0]:[0,0,1],S=ht.negate([],A),C=0;C<c.length;C++){var P=n,L=c[C];E(L,0),E(L,i);for(var R=L.points.length/3,I=0;I<R;I++)u.set(P+I,S),u.set(P+I+R,A);for(var M=[0,3,1,1,3,2],B=[[],[],[],[]],H=[],W=[],U=[],ue=[],V=0,I=0;I<R;I++){for(var ve=(I+1)%R,he=(L.points[ve*3]-L.points[I*3])*_[0],ge=(L.points[ve*3+2]-L.points[I*3+2])*_[m],ye=Math.sqrt(he*he+ge*ge),re=0;re<4;re++){var Ie=re===0||re===3,Se=(Ie?I:ve)*3;B[re][0]=L.points[Se],B[re][p]=re>1?i:0,B[re][m]=L.points[Se+2],l.set(n+re,B[re]),s?(ue[0]=(L.points[Se]*_[0]-x[0])/g,ue[1]=(L.points[Se+2]*_[m]-x[m])/g):(ue[0]=(Ie?V:V+ye)/g,ue[1]=(B[re][p]*_[p]-x[p])/g),h.set(n+re,ue)}ht.sub(H,B[1],B[0]),ht.sub(W,B[3],B[0]),ht.cross(U,H,W),ht.normalize(U,U);for(var re=0;re<4;re++)u.set(n+re,U),d&&f.set(n+re,o);for(var re=0;re<6;re++)v[a*3+re]=M[re]+n;n+=4,a+=2,V+=ye}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(u){var h=u.exterior,f=u.interiors;i+=r.getPolylineVertexCount(h),n+=r.getPolylineTriangleCount(h);for(var c=0;c<f.length;c++)i+=r.getPolylineVertexCount(f[c]),n+=r.getPolylineTriangleCount(f[c])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function o(u){for(var h=new Float64Array(u.length*3),f=0,c=[],d=0;d<u.length;d++)c[0]=u[d][0],c[1]=i+.1,c[2]=u[d][1],a&&ht.transformMat4(c,c,a),h[f++]=c[0],h[f++]=c[1],h[f++]=c[2];return h}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(u){var h=u.exterior,f=u.interiors;e.addPolyline(o(h),s,n);for(var c=0;c<f.length;c++)e.addPolyline(o(f[c]),s,n)})},highlight:function(e){var t=this._data;if(!!t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=ee.firstNotNull(i.get("opacity"),ke(t,e),1);if(n==null){var o=We(t,e);n=Ma(o,-.4)}a==null&&(a=ke(t,e));var s=T.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(!!t){var r=t.getItemModel(e),i=ee.firstNotNull(We(t,e),r.get(["itemStyle","color"]),"#fff"),n=ee.firstNotNull(ke(t,e),r.get(["itemStyle","opacity"]),1),a=T.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};var Ed=Pi.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new jr(t),this.groupGL=new T.Node,this._lightRoot=new T.Node,this._sceneHelper=new tr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new Rn({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}}),Sd={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function bd(e,t){if(e==="world"){var r=Sd[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var Ad=Me.vec3,Gr=Me.mat4,Cd=[cu,bd];function xn(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=Gr.identity(new Float64Array(16)),this.invTransform=Gr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}xn.prototype={constructor:xn,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=io||io;try{this.regions=e?i(e):[]}catch(u){throw`Invalid geoJson format
`+u}t=t||{},r=r||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=r[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,Cd.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new fu(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,o=-e/2-i.x*n,s=r/2-i.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],u=this.extrudeY?[n,1,a]:[n,a,1],h=this.transform;Gr.identity(h),Gr.translate(h,h,l),Gr.scale(h,h,u),Gr.invert(this.invTransform,h)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,Ad.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function Ld(e,t){var r=e.getBoxLayoutParams(),i=bn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Dd(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Da(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Sn("altitude",i),this.resize(this.model,t)}}var as=0,Ml={dimensions:xn.prototype.dimensions,create:function(e,t){var r=[];if(!da)throw new Error("geo3D component depends on geo component");function i(n,a){var o=Ml.createGeo3D(n);n.__viewGL=n.__viewGL||new de,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,r.push(o),o.resize=Ld,o.resize(n,t),o.update=Dd}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+ee.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=da(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+as++),new xn(r+as++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}},Pl=Ml;function Rl(e){e.registerComponentModel(od),e.registerComponentView(Ed),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",Pl)}tt(Rl);function os(e,t){e.id=e.id||e.name||t+""}var yr=qr.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){yr.superApply(this,"init",arguments),Bt(this.option.layers,function(e,t){ce(e,this.defaultLayerOption),os(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,yr.superApply(this,"mergeOption",arguments);function r(o){return du(o,function(s,l,u){return os(l,u),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?ce(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}Bt(this.option.layers,function(o){ce(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});ce(yr.prototype,Mn);ce(yr.prototype,Kr);ce(yr.prototype,Qr);ce(yr.prototype,ei);var Md=yr,Nl=Math.PI,St=Math.sin,Ht=Math.cos,Il=Math.tan,Ol=Math.asin,Bl=Math.atan2,xr=Nl/180,Pd=1e3*60*60*24,Rd=2440588,Nd=2451545;function Id(e){return e.valueOf()/Pd-.5+Rd}function Od(e){return Id(e)-Nd}var Tn=xr*23.4397;function Bd(e,t){return Bl(St(e)*Ht(Tn)-Il(t)*St(Tn),Ht(e))}function Fd(e,t){return Ol(St(t)*Ht(Tn)+Ht(t)*St(Tn)*St(e))}function Ud(e,t,r){return Bl(St(e),Ht(e)*St(t)-Il(r)*Ht(t))}function Gd(e,t,r){return Ol(St(t)*St(r)+Ht(t)*Ht(r)*Ht(e))}function zd(e,t){return xr*(280.16+360.9856235*e)-t}function Hd(e){return xr*(357.5291+.98560028*e)}function Vd(e){var t=xr*(1.9148*St(e)+.02*St(2*e)+3e-4*St(3*e)),r=xr*102.9372;return e+t+r+Nl}function kd(e){var t=Hd(e),r=Vd(t);return{dec:Fd(r,0),ra:Bd(r,0)}}var Fl={};Fl.getPosition=function(e,t,r){var i=xr*-r,n=xr*t,a=Od(e),o=kd(a),s=zd(a,i)-o.ra;return{azimuth:Ud(s,n,o.dec),altitude:Gd(s,n,o.dec)}};var Wd=Fl,Xd=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;T.Shader.import($s);T.Shader.import(Xd);var Zd=Pi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new T.Node,this._sphereGeometry=new T.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new T.PlaneGeometry,this._earthMesh=new T.Mesh({renderNormal:!0}),this._atmosphereMesh=new T.Mesh,this._atmosphereGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.atmosphere.vertex"),T.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=T.Mesh.CW,this._lightRoot=new T.Node,this._sceneHelper=new tr,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Rn({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=T.createMaterial(o)),T.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(f){var c=a.material.get(f);c&&(c.flipY=!1)}),a.material.set("color",T.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],o=[],s=[],l=[];Bt(i,function(d){var v=new En(d),p=v.get("type"),m=T.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var _=v.get("blendTo"),x=ee.firstNotNull(v.get("intensity"),1);_==="emission"?(s.push(m),l.push(x)):(a.push(m),o.push(x))}else{var y=v.get("id"),g=this._layerMeshes[y];g||(g=this._layerMeshes[y]=new T.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var w=v.get("shading");w==="lambert"?(g.material=g.__lambertMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),g.__lambertMaterial=g.material):(g.material=g.__colorMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.color"),transparent:!0,depthMask:!1}),g.__colorMaterial=g.material),g.material.enableTexture("diffuseMap");var E=v.get("distance"),A=n+(E==null?r.radius/100:E);g.scale.set(A,A,A),n=A;var S=this._blankTexture||(this._blankTexture=T.createBlankTexture("rgba(255, 255, 255, 0)"));g.material.set("diffuseMap",S),T.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(C){C.surface&&C.surface.attachToMesh(g),g.material.set("diffuseMap",C),t.getZr().refresh()}),v.get("show")?this.groupGL.add(g):this.groupGL.remove(g)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var h=e.getModel("debug.wireframe");if(h.get("show")){u.define("both","WIREFRAME_TRIANGLE");var f=T.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),c=ee.firstNotNull(h.get("lineStyle.width"),1);u.set("wireframeLineWidth",c),u.set("wireframeLineColor",f)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,u;s!=null&&(u=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:u}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,h=l*2,f=n[u+1],c=n[u+2],d=n[u+3],v=i[h++],p=i[h++],m=Math.round(v*(a-1)),_=Math.round(p*(o-1)),x=_*a+m,y=s?s[x]:0;r[u+1]=f+f*y,r[u+2]=c+c*y,r[u+3]=d+d*y}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=Wd.getPosition(vu(n),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}}),jd=Me.vec3;function wn(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}wn.prototype={constructor:wn,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=jd.len(e);r/=a,i/=a,n/=a;var o=Math.asin(i),s=Math.atan2(n,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,u=s*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function Yd(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*t}return{data:s,width:n,height:a}}function qd(e,t){var r=e.getBoxLayoutParams(),i=bn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function $d(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Da(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Sn("altitude",i),this.resize(this.model,t)}}var Kd={dimensions:wn.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new de;var n=new wn;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=qd,n.resize(i,t),n.update=$d}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+ee.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;T.loadTexture(o,t,function(u){var h=u.image,f=Yd(h,s);i.setDisplacementData(f.data,f.width,f.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}},Qd=Kd;function Jd(e){e.registerComponentModel(Md),e.registerComponentView(Zd),e.registerCoordinateSystem("globe",Qd),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}tt(Jd);var ss=["zoom","center","pitch","bearing"],Za=qr.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return ss.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&ss.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});ce(Za.prototype,Kr);ce(Za.prototype,Qr);var ev=Za;function nr(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}nr.prototype.setUnpainted=function(){};nr.prototype.resize=function(){this._mapbox.resize()};nr.prototype.getMapbox=function(){return this._mapbox};nr.prototype.clear=function(){};nr.prototype.refresh=function(){this._mapbox.resize()};var Ul=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];nr.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Ul.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};nr.prototype.dispose=function(){Ul.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};var Gl=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;T.Shader.import(Gl);var tv=Pi.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new nr("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new tr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new T.Plane(new T.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new T.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new T.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),qt=Me.mat4,fi=512,sa=.6435011087932844,ft=Math.PI,Br=1/10;function Yr(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Yr.prototype={constructor:Yr,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,fi)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(!!this.height){var e=.5/Math.tan(sa/2)*this.height*Br,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=sa/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];qt.perspective(s,sa,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=qt.identity([]),l=this.dataToPoint(this.center);qt.scale(s,s,[1,-1,1]),qt.translate(s,s,[0,0,-e]),qt.rotateX(s,s,t),qt.rotateZ(s,s,-this.bearing/180*Math.PI),qt.translate(s,s,[-l[0]*this.getScale()*Br,-l[1]*this.getScale()*Br,0]),this.viewGL.camera.viewMatrix.array=s;var u=[];qt.invert(u,s),this.viewGL.camera.worldTransform.array=u,this.viewGL.camera.decomposeWorldTransform();var h=fi*this.getScale(),f;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var c=this.altitudeExtent[1]-this.altitudeExtent[0];f=this.boxHeight/c*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else f=h/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*Br;this.viewGL.rootNode.scale.set(this.getScale()*Br,this.getScale()*Br,f)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*fi,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*ft/180,o=n*ft/180,s=t*(a+ft)/(2*ft),l=t*(ft-Math.log(Math.tan(ft/4+o*.5)))/(2*ft);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*fi,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*ft)-ft,o=2*(Math.atan(Math.exp(ft-n/t*(2*ft)))-ft/4);return r=r||[],r[0]=a*180/ft,r[1]=o*180/ft,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,fi,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function Di(){Yr.apply(this,arguments)}Di.prototype=new Yr;Di.prototype.constructor=Di;Di.prototype.type="mapbox3D";function zl(e,t,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var f=u.getDataExtent(h,!0);s[0]=Math.min(s[0],f[0]),s[1]=Math.max(s[1],f[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new de,u.setRootNode(new T.Node));var h=new t;h.viewGL=l.__viewGL,h.resize=i,h.resize(l,o),s.push(h),l.coordinateSystem=h,h.model=l,h.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var u=l.getReferringComponents(e).models[0];if(u||(u=a.getComponent(e)),!u)throw new Error(e+' "'+ee.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(s,a,o),s}}}var rv=zl("mapbox3D",Di,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})}),iv=rv;function nv(e){e.registerComponentModel(ev),e.registerComponentView(tv),e.registerCoordinateSystem("mapbox3D",iv),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}tt(nv);var ls=["zoom","center","pitch","bearing"],ja=qr.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return ls.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&ls.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});ce(ja.prototype,Kr);ce(ja.prototype,Qr);var av=ja;function ar(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}ar.prototype.setUnpainted=function(){};ar.prototype.resize=function(){this._maptalks.checkSize()};ar.prototype.getMaptalks=function(){return this._maptalks};ar.prototype.clear=function(){};ar.prototype.refresh=function(){this._maptalks.checkSize()};var Hl=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];ar.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Hl.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};ar.prototype.dispose=function(){Hl.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};T.Shader.import(Gl);var ov=Pi.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new ar("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new tr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:lv(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new T.Plane(new T.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new T.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new T.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});const sv=2*6378137*Math.PI/(256*Math.pow(2,20));function lv(e){return 19-Math.log(e/sv)/Math.LN2}function Mi(){Yr.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}Mi.prototype=new Yr;Mi.prototype.constructor=Mi;Mi.prototype.type="maptalks3D";var uv=zl("maptalks3D",Mi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})}),hv=uv;function fv(e){e.registerComponentModel(av),e.registerComponentView(ov),e.registerCoordinateSystem("maptalks3D",hv),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}tt(fv);var cv=Me.vec3,dv=Pa.isDimensionStacked;function vv(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function pv(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else Ot(i)||(i=[i,i]);var u=t.getAxis("z").scale.getExtent(),h=vv(u),f=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),c=dv(r,f[2]),d=c?r.getCalculationInfo("stackResultDimension"):f[2];r.each(f,function(v,p,m,_){var x=r.get(d,_),y=c?x-m:h?0:u[0],g=t.dataToPoint([v,p,y]),w=t.dataToPoint([v,p,x]),E=cv.dist(g,w),A=[0,w[1]<g[1]?-1:1,0];Math.abs(E)===0&&(E=.1);var S=[i[0],E,i[1]];r.setItemLayout(_,[g,A,S])}),r.setLayout("orient",[1,0,0])}function Ya(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var h=e.get(t,u),f=e.get(r,u),c=Math.floor((h-i[0])/a*(s-1)),d=Math.floor((f-n[0])/o*(s-1)),v=d*s+c;l[v]=l[v]||1}for(var p=0,u=0;u<l.length;u++)l[u]&&p++;return p/l.length}var us=Me.vec3,mv=Pa.isDimensionStacked;function _v(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(n==null){var o=t.radius*Math.PI,s=Ya(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Ot(n)||(n=[n,n]);var l=qa(r,a);r.each(a,function(u,h,f,c){var d=r.get(l.dimension,c),v=l.isStacked?d-f:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(f),i),m=t.dataToPoint([u,h,v]),_=t.dataToPoint([u,h,d]),x=us.sub([],_,m);us.normalize(x,x);var y=[n[0],p,n[1]];r.setItemLayout(c,[m,x,y])}),r.setLayout("orient",G.UP.array)}function gv(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=Ya(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Ot(i)||(i=[i,i]);var l=[0,1,0],u=qa(r,a);r.each(a,function(h,f,c,d){var v=r.get(u.dimension,d),p=u.isStacked?v-c:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(c),n),_=t.dataToPoint([h,f,p]),x=[i[0],m,i[1]];r.setItemLayout(d,[_,l,x])}),r.setLayout("orient",[1,0,0])}function yv(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),u=r.getDataExtent(n),h=t.dataToPoint([l[0],u[0]]),f=t.dataToPoint([l[1],u[1]]),c=Math.min(Math.abs(h[0]-f[0]),Math.abs(h[1]-f[1]))||1,d=Ya(r,i,n);o=[c/Math.sqrt(r.count()/d),c/Math.sqrt(r.count()/d)]}else Ot(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[i,n,a],m=qa(r,p);r.each(p,function(_,x,y,g){var w=r.get(m.dimension,g),E=m.isStacked?w-y:0,A=t.dataToPoint([_,x,E]),S=t.dataToPoint([_,x,w]),C=Math.max(S[2]-A[2],s),P=[o[0],C,o[1]];r.setItemLayout(g,[A,v,P])}),r.setLayout("orient",[1,0,0])}function qa(e,t){var r=mv(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function xv(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?_v(i,n):a==="cartesian3D"?pv(i,n):a==="geo3D"?gv(i,n):(a==="mapbox3D"||a==="maptalks3D")&&yv(i,n)})})}var $a={};$a.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),o=a.getItemModel(t),s=e.getDataParams(t,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=pu(l,s)),u};$a.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};var ri=$a;function Tv(e,t){var r=[];return Bt(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function Bi(e,t,r){function i(f){var c=!0,d=[],v=Tv(n,"tooltip");v.length?Bt(v,function(m){p(n.get(m,t),m)}):Bt(f,p);function p(m,_){var x=n.getDimensionInfo(_);if(!(!x||x.otherDims.tooltip===!1)){var y=x.type,g="- "+(x.tooltipName||x.name)+": "+(y==="ordinal"?m+"":y==="time"?r?"":gu("yyyy/MM/dd hh:mm:ss",m):no(m));g&&d.push(Fr(g))}}return(c?"<br/>":"")+d.join(c?"<br/>":", ")}var n=e.getData(),a=e.getRawValue(t),o=Ot(a)?i(a):Fr(no(a)),s=n.getName(t),l=We(n,t);mu(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=_u(l),h=e.name;return h==="\0-"&&(h=""),h=h?Fr(h)+(r?": ":"<br/>"):"",r?u+h+o:h+u+(s?Fr(s)+": "+o:o)}function On(e,t,r){r=r||e.getSource();var i=t||Ms(e.get("coordinateSystem"))||["x","y","z"],n=Ri(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Pa.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new Ft(n,e);return o.setCalculationInfo(a),o.initData(r),o}var Vl=Dt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return On(this)},getFormattedLabel:function(e,t,r,i){var n=ri.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return Bi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});ce(Vl.prototype,ei);var wv=Vl,Ae=Me.vec3,Ev=Me.mat3,Ka=se.extend(function(){return{attributes:{position:new se.Attribute("position","float",3,"POSITION"),normal:new se.Attribute("normal","float",3,"NORMAL"),color:new se.Attribute("color","float",4,"COLOR"),prevPosition:new se.Attribute("prevPosition","float",3),prevNormal:new se.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=Ae.create,t=Ae.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),o=e(),s=e(),l=e(),u=[],h=[],f=0;f<8;f++)u[f]=e();for(var c=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],d=[0,1,2,0,2,3],v=[],f=0;f<c.length;f++)for(var p=c[f],m=0;m<2;m++){for(var _=[],x=0;x<3;x++)_.push(p[d[m*3+x]]);v.push(_)}return function(y,g,w,E,A,S){var C=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(y,g,w,E,this.bevelSize,this.bevelSegments,A);else{Ae.copy(n,g),Ae.normalize(n,n),Ae.cross(a,w,n),Ae.normalize(a,a),Ae.cross(i,n,a),Ae.normalize(a,a),Ae.negate(o,i),Ae.negate(s,n),Ae.negate(l,a),t(u[0],y,i,E[0]/2),t(u[0],u[0],a,E[2]/2),t(u[1],y,i,E[0]/2),t(u[1],u[1],l,E[2]/2),t(u[2],y,o,E[0]/2),t(u[2],u[2],l,E[2]/2),t(u[3],y,o,E[0]/2),t(u[3],u[3],a,E[2]/2),t(r,y,n,E[1]),t(u[4],r,i,E[0]/2),t(u[4],u[4],a,E[2]/2),t(u[5],r,i,E[0]/2),t(u[5],u[5],l,E[2]/2),t(u[6],r,o,E[0]/2),t(u[6],u[6],l,E[2]/2),t(u[7],r,o,E[0]/2),t(u[7],u[7],a,E[2]/2);var P=this.attributes;if(this.enableNormal){h[0]=i,h[1]=o,h[2]=n,h[3]=s,h[4]=a,h[5]=l;for(var L=this._vertexOffset,R=0;R<c.length;R++){for(var I=this._triangleOffset*3,M=0;M<6;M++)this.indices[I++]=L+d[M];L+=4,this._triangleOffset+=2}for(var R=0;R<c.length;R++)for(var B=h[R],M=0;M<4;M++){var H=c[R][M];P.position.set(this._vertexOffset,u[H]),P.normal.set(this._vertexOffset,B),P.color.set(this._vertexOffset++,A)}}else{for(var R=0;R<v.length;R++){for(var I=this._triangleOffset*3,M=0;M<3;M++)this.indices[I+M]=v[R][M]+this._vertexOffset;this._triangleOffset++}for(var R=0;R<u.length;R++)P.position.set(this._vertexOffset,u[R]),P.color.set(this._vertexOffset++,A)}}for(var W=this._vertexOffset,R=C;R<W;R++)this._dataIndices[R]=S}}(),_addBevelBar:function(){var e=Ae.create(),t=Ae.create(),r=Ae.create(),i=Ev.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,h,f,c,d,v){Ae.copy(t,u),Ae.normalize(t,t),Ae.cross(r,h,t),Ae.normalize(r,r),Ae.cross(e,t,r),Ae.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],c=Math.min(f[0],f[2])/2*c;for(var p=0;p<3;p++)n[p]=Math.max(f[p]-c*2,0);for(var m=(f[0]-n[0])/2,_=(f[1]-n[1])/2,x=(f[2]-n[2])/2,y=[],g=[],w=this._vertexOffset,E=[],p=0;p<2;p++){E[p]=E[p]=[];for(var A=0;A<=d;A++)for(var S=0;S<4;S++){(A===0&&p===0||p===1&&A===d)&&E[p].push(w);for(var C=0;C<=d;C++){var P=C/d*Math.PI/2+Math.PI/2*S,L=A/d*Math.PI/2+Math.PI/2*p;g[0]=m*Math.cos(P)*Math.sin(L),g[1]=_*Math.cos(L),g[2]=x*Math.sin(P)*Math.sin(L),y[0]=g[0]+a[S]*n[0]/2,y[1]=g[1]+_+s[p]*n[1]/2,y[2]=g[2]+o[S]*n[2]/2,Math.abs(m-_)<1e-6&&Math.abs(_-x)<1e-6||(g[0]/=m*m,g[1]/=_*_,g[2]/=x*x),Ae.normalize(g,g),Ae.transformMat3(y,y,i),Ae.transformMat3(g,g,i),Ae.add(y,y,l),this.attributes.position.set(w,y),this.enableNormal&&this.attributes.normal.set(w,g),this.attributes.color.set(w,v),w++}}}for(var R=d*4+3,I=d*2+1,M=R+1,S=0;S<I;S++)for(var p=0;p<=R;p++){var B=S*M+p+this._vertexOffset,H=S*M+(p+1)%M+this._vertexOffset,W=(S+1)*M+(p+1)%M+this._vertexOffset,U=(S+1)*M+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[W,B,H]),this.setTriangleIndices(this._triangleOffset++,[W,U,B])}this.setTriangleIndices(this._triangleOffset++,[E[0][0],E[0][2],E[0][1]]),this.setTriangleIndices(this._triangleOffset++,[E[0][0],E[0][3],E[0][2]]),this.setTriangleIndices(this._triangleOffset++,[E[1][0],E[1][1],E[1][2]]),this.setTriangleIndices(this._triangleOffset++,[E[1][0],E[1][2],E[1][3]]),this._vertexOffset=w}}()});rr(Ka.prototype,Ii);rr(Ka.prototype,Xa);var Sv=Ka,bv=Me.vec3,Av=Mt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this._api=t,this._labelsBuilder=new Xt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],u=o[2][1];return bv.scaleAndAdd([],s,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new T.Mesh({geometry:new Sv,shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=T.createMaterial(s,["VERTEX_COLOR"])),T.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var h=[],f=new Float32Array(r.count()*4),c=0,m=0,d=!1;r.each(function(x){if(!!r.hasValue(x)){var y=We(r,x),g=ke(r,x);g==null&&(g=1),T.parseColor(y,h),h[3]*=g,f[c++]=h[0],f[c++]=h[1],f[c++]=h[2],f[c++]=h[3],h[3]>0&&(m++,h[3]<.99&&(d=!0))}}),o.geometry.setBarCount(m);var v=r.getLayout("orient"),p=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(x){if(!r.hasValue(x)){p[x]=-1;return}var y=r.getItemLayout(x),g=y[0],w=y[1],E=y[2],A=x*4;h[0]=f[A++],h[1]=f[A++],h[2]=f[A++],h[3]=f[A++],h[3]>0&&(a._barMesh.geometry.addBar(g,w,v,E,h,x),p[x]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=d,_.depthMask=!d,o.geometry.sortTriangles=d,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(!!t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=We(t,e);a=Ma(s,-.4)}o==null&&(o=ke(t,e));var l=T.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(!!t){var r=this._barIndexOfData[e];if(!(r<0)){var i=We(t,e),n=ke(t,e),a=T.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=ee.queryDataIndex(a,n),s=this;o!=null?Bt(ri.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Cv(e){e.registerChartView(Av),e.registerSeriesModel(wv),xv(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}tt(Cv);var Lv=Dt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return On(this)},formatTooltip:function(e){return Bi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Dv=Lv,Mv=Me.vec3;T.Shader.import(In);var Pv=Mt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new T.Mesh({geometry:new Sr({useNativeLine:!1,sortTriangles:!0}),material:new T.Material({shader:T.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;r.each(function(f){var c=We(r,f),d=ke(r,f);d==null&&(d=1),T.parseColor(c,a),a[3]*=d,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,o,ee.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var u=i.material;u.transparent=l,u.depthMask=!l;var h=e.getModel("debug.wireframe");h.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",T.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",ee.firstNotNull(h.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new k,t=this._camera;k.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=i[s],a[1]=i[s+1],a[2]=i[s+2],a[3]=1,Mv.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),u=-1,h=r.viewport.width,f=r.viewport.height,c=h*.5,d=f*.5;e=(e+1)*c,t=(t+1)*d;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*c,m=(o[(v-1)*2+1]+1)*d,_=(o[v*2]+1)*c,x=(o[v*2+1]+1)*d;if(yu(p,m,_,x,l,e,t)){var y=(p-e)*(p-e)+(m-t)*(m-t),g=(_-e)*(_-e)+(x-t)*(x-t);u=y<g?v-1:v}}if(u>=0){var w=u*3,E=new G(this._points[w],this._points[w+1],this._points[w+2]);a.push({dataIndex:u,point:E,pointWorld:E.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(E)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Rv(e){e.registerChartView(Pv),e.registerSeriesModel(Dv),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],u=a.dimensions,h=u.map(function(f){return i.coordDimToDataDim(f)[0]});a&&n.each(h,function(f,c,d,v){s[0]=f,s[1]=c,s[2]=d,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}tt(Rv);var Nv=Dt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return On(this)},getFormattedLabel:function(e,t,r,i){var n=ri.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return Bi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function la(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function Iv(e,t,r,i){Ot(t)||(t=[t,t]);var n=Qa.getMarginByStyle(r,i),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=xu(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var u=s.getBoundingRect();return s.x-=u.x,s.y-=u.y,s.setStyle(r),s.update(),s.__size=l,s}function Ov(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=i/a,l=n/o;function u(_){return _<128?1:-1}function h(_,x){var y=1/0;_=Math.floor(_*s),x=Math.floor(x*l);for(var g=x*i+_,w=t.data[g*4],E=u(w),A=Math.max(x-r,0);A<Math.min(x+r,n);A++)for(var S=Math.max(_-r,0);S<Math.min(_+r,i);S++){var g=A*i+S,C=t.data[g*4],P=u(C),L=S-_,R=A-x;if(E!==P){var I=L*L+R*R;I<y&&(y=I)}}return E*Math.sqrt(y)}for(var f=e.createImageData(a,o),c=0;c<o;c++)for(var d=0;d<a;d++){var v=h(d,c),p=v/r*.5+.5,m=(c*a+d)*4;f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=255}return f}var Qa={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-n+i,t),o.right=Math.max(r/2,n+i,t),o.top=Math.max(r/2,-a+i,t),o.bottom=Math.max(r/2,a+i,t),o},createSymbolSprite:function(e,t,r,i){var n=Iv(e,t,r),a=Qa.getMarginByStyle(r);return{image:la(n.__size,i,function(o){As(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return la(t,i,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(Ov(n,o,r),0,0)})},createSimpleSprite:function(e,t){return la(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}},hs=Qa,fs=Me.vec3,Bv={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=fs.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,i);var l=fs.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Zr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Zr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},Fv=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`,ua=Me.vec4;T.Shader.import(Fv);var Uv=T.Mesh.extend(function(){var e=new T.Geometry({dynamic:!0,attributes:{color:new T.Geometry.Attribute("color","float",4,"COLOR"),position:new T.Geometry.Attribute("position","float",3,"POSITION"),size:new T.Geometry.Attribute("size","float",1),prevPosition:new T.Geometry.Attribute("prevPosition","float",3),prevSize:new T.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,Bv);var t=new T.Material({shader:T.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new T.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:T.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var o=this._positionNDC;if(!!o)for(var s=r.viewport,l=2/s.width,u=2/s.height,h=this.geometry.vertexCount-1;h>=0;h--){var f;this.geometry.indices?f=this.geometry.indices[h]:f=h;var c=o[f*2],d=o[f*2+1],v=this.geometry.attributes.size.get(f)/this.sizeScale,p=v/2;if(e>c-p*l&&e<c+p*l&&t>d-p*u&&t<d+p*u){var m=new T.Vector3,_=new T.Vector3;this.geometry.attributes.position.get(f,m.array),T.Vector3.transformMat4(_,m,this.worldTransform),a.push({vertexIndex:f,point:m,pointWorld:_,target:this,distance:_.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=ua.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,ua.transformMat4(a,a,e.array),ua.scale(a,a,1/a[3]),i[o*2]=a[0],i[o*2+1]=a[1]}}),Gv=Uv,cs=20,ds=-10;function zv(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function Tr(e,t){this.rootNode=new T.Node,this.is2D=e,this._labelsBuilder=new Xt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Tr.prototype={constructor:Tr,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(i==null&&(i=0),n==null&&(n=o.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Gv({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var h=this._getSymbolInfo(e,i,n),f=r.getDevicePixelRatio(),c=e.getModel("itemStyle").getItemStyle(),d=e.get("large"),v=1;h.maxSize>2?(v=this._updateSymbolSprite(e,c,h,f),s.enableTexture("sprite")):s.disableTexture("sprite"),u.position.init(n-i);var p=[];if(d){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var m=Td(o),_=wd(o);T.parseColor(m,p),p[3]*=_,s.set({color:p,u_Size:h.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),u.size.init(n-i),u.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var x=o.getLayout("points"),y=u.position.value,g=0;g<n-i;g++){var w=g*3,E=g*2;if(this.is2D?(y[w]=x[E],y[w+1]=x[E+1],y[w+2]=ds):(y[w]=x[w],y[w+1]=x[w+1],y[w+2]=x[w+2]),!d){var m=We(o,g),_=ke(o,g);T.parseColor(m,p),p[3]*=_,u.color.set(g,p),p[3]<.99;var A=o.getItemVisual(g,"symbolSize");A=A instanceof Array?Math.max(A[0],A[1]):A,isNaN(A)&&(A=0),u.size.value[g]=A*v*this._sizeScale,this._originalOpacity[g]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,c);var S=e.coordinateSystem;if(S&&S.viewGL){var C=S.viewGL.isLinearSpace()?"define":"undefine";s[C]("fragment","SRGB_DECODE")}d||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!zv(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(hs.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),hs.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),cs,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?T.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/cs);var n=T.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,u,h){var f=(l-o)*3;return[a[f],a[f+1],a[f+2]]},this._labelsBuilder.getLabelDistance=function(l,u,h){var f=n.attributes.size.get(l-o)/s;return f/2+h},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(u){var h=u.vertexIndex+a._startDataIndex;h!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,h),this._labelsBuilder.updateLabels([h])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],h),i.get(e.coordDimToDataDim("y")[0],h),i.get(e.coordDimToDataDim("z")[0],h)],grid3DIndex:l.componentIndex})),n.dataIndex=h,o=h},this),n.on("mouseout",function(u){var h=u.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,h),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(!!this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=ds}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(!!this._mesh){var t=new k;k.mul(t,e.viewMatrix,this._mesh.worldTransform),k.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var o=We(e,t);n=Ma(o,-.4)}a==null&&(a=ke(e,t));var s=T.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=We(e,t),i=ke(e,t),n=T.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=ee.firstNotNull(e.get("symbolSize"),1),s,a;return i instanceof Array?(s=Math.max(i[0],i[1]),a=i[0]/i[1]):(s=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=n.getItemVisual(0,"symbol")||"circle",s=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),u=n.getItemVisual(l,"symbol"),h;if(i instanceof Array)h=i[0]/i[1],s=Math.max(Math.max(i[0],i[1]),s);else{if(isNaN(i))continue;h=1,s=Math.max(i,s)}o=u,a=h}return{maxSize:s,type:o,aspect:a}}};var Hv=Mt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new Tr(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new Tr(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=ee.queryDataIndex(a,n),s=e==="highlight";o!=null?Bt(ri.normalizeToArray(o),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}},this):a.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Vv(e){e.registerChartView(Hv),e.registerSeriesModel(Nv),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var u=new Float32Array((s.end-s.start)*3),h=s.start;h<s.end;h++){var f=(h-s.start)*3;a[0]=l.get(n[0],h),a[1]=l.get(n[1],h),a[2]=l.get(n[2],h),r.dataToPoint(a,o),u[f]=o[0],u[f+1]=o[1],u[f+2]=o[2]}l.setLayout("points",u)}}}}})}tt(Vv);var Fe=Me.vec3,vs=Me.vec2,Gt=Fe.normalize,Qi=Fe.cross,ps=Fe.sub,ha=Fe.add,Jt=Fe.create,$t=Jt(),xt=Jt(),Kt=Jt(),ci=Jt(),ms=[],_s=[];function kv(e,t){vs.copy(ms,e[0]),vs.copy(_s,e[1]);var r=[],i=r[0]=Jt(),n=r[1]=Jt(),a=r[2]=Jt(),o=r[3]=Jt();t.dataToPoint(ms,i),t.dataToPoint(_s,o),Gt($t,i),ps(xt,o,i),Gt(xt,xt),Qi(Kt,xt,$t),Gt(Kt,Kt),Qi(xt,$t,Kt),ha(n,$t,xt),Gt(n,n),Gt($t,o),ps(xt,i,o),Gt(xt,xt),Qi(Kt,xt,$t),Gt(Kt,Kt),Qi(xt,$t,Kt),ha(a,$t,xt),Gt(a,a),ha(ci,i,o),Gt(ci,ci);var s=Fe.dot(i,ci),l=Fe.dot(ci,n),u=(Math.max(Fe.len(i),Fe.len(o))-s)/l*2;return Fe.scaleAndAdd(n,i,n,u),Fe.scaleAndAdd(a,o,a,u),r}function Wv(e,t,r){var i=[],n=i[0]=Fe.create(),a=i[1]=Fe.create(),o=i[2]=Fe.create(),s=i[3]=Fe.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=Fe.dist(n,s);return Fe.lerp(a,n,s,.3),Fe.lerp(o,n,s,.3),Fe.scaleAndAdd(a,a,r,Math.min(l*.1,10)),Fe.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function kl(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function Wl(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function Xv(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=Wl(r);r.each(function(a){var o=n.coordsList[a],s=i?kl:kv;r.setItemLayout(a,s(o,t))})}function gs(e,t,r){var i=e.getData(),n=e.get("polyline"),a=Wl(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?kl(s,t):Wv(s,t,r);i.setItemLayout(o,l)})}function Zv(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Xv(r,i):i.type==="geo3D"?gs(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&gs(r,i,[0,0,1])})}var jv=Dt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new Ft(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Yv=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`,ys=Me.vec3;function qv(e){return e>0?1:-1}T.Shader.import(Yv);var $v=T.Mesh.extend(function(){var e=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.trail2.vertex"),T.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Sr({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=i.get("effect.constantSpeed"),u=i.get("effect.period")*1e3,h=l!=null;h?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var f=i.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(A){n.attributes[A].value=r.attributes[A].value});var c=["dist","distAll","start","offset","color"];c.forEach(function(A){n.attributes[A].init(n.vertexCount)}),n.indices=r.indices;var d=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,_=p!=null;this.updateWorldTransform();var x=this.worldTransform.x.len(),y=this.worldTransform.y.len(),g=this.worldTransform.z.len(),w=0,E=0;e.each(function(A){var S=e.getItemLayout(A),C=_?p:ke(e,A),P=We(e,A);C==null&&(C=1),d=T.parseColor(m?v:P,d),d[3]*=C;for(var L=f?r.getPolylineVertexCount(S):r.getCubicCurveVertexCount(S[0],S[1],S[2],S[3]),R=0,I=[],M=[],B=w;B<w+L;B++)n.attributes.position.get(B,I),I[0]*=x,I[1]*=y,I[2]*=g,B>w&&(R+=ys.dist(I,M)),n.attributes.dist.set(B,R),ys.copy(M,I);E=Math.max(E,R);for(var H=Math.random()*(h?R:u),B=w;B<w+L;B++)n.attributes.distAll.set(B,R),n.attributes.start.set(B,H),n.attributes.offset.set(B,qv(r.attributes.offset.get(B))*o/2),n.attributes.color.set(B,d);w+=L}),this.material.set("spotSize",E*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});T.Shader.import(In);function Kv(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}var Qv=Mt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this._meshLinesMaterial=new T.Material({shader:T.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new T.Mesh({geometry:new Sr,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new $v},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?T.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=Kv(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();i.each(function(d){var v=i.getItemModel(d),p=v.get(l);p==null&&(p=1),i.setItemVisual(d,"lineWidth",p)}),a.useNativeLine=!1;var h=0,f=0;i.each(function(d){var v=i.getItemLayout(d);o?(h+=a.getPolylineVertexCount(v),f+=a.getPolylineTriangleCount(v)):(h+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),f+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(h),a.setTriangleCount(f),a.resetOffset();var c=[];i.each(function(d){var v=i.getItemLayout(d),p=We(i,d),m=ke(i,d),_=i.getItemVisual(d,"lineWidth")*u;m==null&&(m=1),c=T.parseColor(p,c),c[3]*=m,o?a.addPolyline(v,c,_):a.addCubicCurve(v[0],v[1],v[2],v[3],c,_)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Jv(e){e.registerChartView(Qv),e.registerSeriesModel(jv),e.registerLayout(Zv),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}tt(Jv);function xs(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Xl=Dt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var o=[],s=1;s<i[a].length;s++)o.push(xs(t,i[a][s]));n.push({exterior:xs(t,i[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new Ft(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});ce(Xl.prototype,ei);var ep=Xl,tp=Mt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new jr(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new jr(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function rp(e){e.registerChartView(tp),e.registerSeriesModel(ep)}tt(rp);var Zl=Dt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return Bi(this,e)},getInitialData:function(e,t){var r=e.data;function i(W){return!(isNaN(W.min)||isNaN(W.max)||isNaN(W.step))}function n(W){var U=Cs;return Math.max(U(W.min),U(W.max),U(W.step))+1}if(!r)if(e.parametric){var g=e.parametricEquation||{},w=g.u||{},E=g.v||{};["u","v"].forEach(function(U){i(g[U])}),["x","y","z"].forEach(function(U){g[U]});var A=Math.floor((w.max+w.step-w.min)/w.step),S=Math.floor((E.max+E.step-E.min)/E.step);r=new Float32Array(A*S*5);for(var C=n(w),P=n(E),c=0,d=0;d<S;d++)for(var v=0;v<A;v++){var L=v*w.step+w.min,R=d*E.step+E.min,I=Fi(Math.min(L,w.max),C),M=Fi(Math.min(R,E.max),P),p=g.x(I,M),m=g.y(I,M),y=g.z(I,M);r[c++]=p,r[c++]=m,r[c++]=y,r[c++]=I,r[c++]=M}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(W){i(a[W])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*3);for(var h=n(o),f=n(s),c=0,d=0;d<u;d++)for(var v=0;v<l;v++){var p=v*o.step+o.min,m=d*s.step+s.min,_=Fi(Math.min(p,o.max),h),x=Fi(Math.min(m,s.max),f),y=a.z(_,x);r[c++]=_,r[c++]=x,r[c++]=y}}var B=["x","y","z"];e.parametric&&B.push("u","v");var H=On(this,B,r);return H},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});ce(Zl.prototype,ei);var ip=Zl,cr=Me.vec3;function np(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var ap=Mt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=T.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),T.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),h=e.get("dataShape");h||(h=this._getDataShape(o,u));var f=e.getModel("wireframe"),c=f.get("lineStyle.width"),d=f.get("show")&&c>0;this._updateSurfaceMesh(this._surfaceMesh,e,h,d);var v=this._surfaceMesh.material;d?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",c),v.set("wireframeLineColor",T.parseColor(f.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new T.Mesh({geometry:new T.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,Xa),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var u=1/0,h=-1,f=[],c=0;c<s.length;c++){i.geometry.attributes.position.get(s[c],f);var d=cr.dist(l.array,f);d<u&&(u=d,h=s[c])}return h}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var h=n.pointToData(u),f=1/0,c=-1,d=[],v=0;v<r.count();v++){d[0]=r.get("x",v),d[1]=r.get("y",v),d[2]=r.get("z",v);var p=cr.squaredDistance(d,h);p<f&&(c=v,f=p)}c!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:h}),o=c,i.dataIndex=c}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(Oe){a.hasValue(Oe)||s++});var l=s||i,u=n.attributes.position,h=n.attributes.normal,f=n.attributes.texcoord0,c=n.attributes.barycentric,d=n.attributes.color,v=r[0],p=r[1],m=t.get("shading"),_=m!=="color";if(l){var x=(v-1)*(p-1)*4;u.init(x),i&&c.init(x)}else u.value=new Float32Array(o);d.init(n.vertexCount),f.init(n.vertexCount);var y=[0,3,1,1,3,2],g=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],w=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),E=function(Oe,Pt,Qe){Qe[1]=Oe*p+Pt,Qe[0]=Oe*p+Pt+1,Qe[3]=(Oe+1)*p+Pt+1,Qe[2]=(Oe+1)*p+Pt},A=!1;if(l){var S=[],C=[],P=0;_?h.init(n.vertexCount):h.value=null;for(var L=[[],[],[]],R=[],I=[],M=cr.create(),B=function(Oe,Pt,Qe){var Bn=Pt*3;return Qe[0]=Oe[Bn],Qe[1]=Oe[Bn+1],Qe[2]=Oe[Bn+2],Qe},H=new Float32Array(o.length),W=new Float32Array(o.length/3*4),U=0;U<a.count();U++)if(a.hasValue(U)){var Ze=T.parseColor(We(a,U)),ue=ke(a,U);ue!=null&&(Ze[3]*=ue),Ze[3]<.99&&(A=!0);for(var V=0;V<4;V++)W[U*4+V]=Ze[V]}for(var ve=[1e7,1e7,1e7],U=0;U<v-1;U++)for(var he=0;he<p-1;he++){var ge=U*(p-1)+he,ye=ge*4;E(U,he,S);for(var re=!1,V=0;V<4;V++)B(o,S[V],C),np(C)&&(re=!0);for(var V=0;V<4;V++)re?u.set(ye+V,ve):(B(o,S[V],C),u.set(ye+V,C)),i&&c.set(ye+V,g[V]);for(var V=0;V<6;V++)w[P++]=y[V]+ye;if(_&&!re)for(var V=0;V<2;V++){for(var Ie=V*3,Se=0;Se<3;Se++){var Le=S[y[Ie]+Se];B(o,Le,L[Se])}cr.sub(R,L[0],L[1]),cr.sub(I,L[1],L[2]),cr.cross(M,R,I);for(var Se=0;Se<3;Se++){var Ke=S[y[Ie]+Se]*3;H[Ke]=H[Ke]+M[0],H[Ke+1]=H[Ke+1]+M[1],H[Ke+2]=H[Ke+2]+M[2]}}}if(_)for(var U=0;U<H.length/3;U++)B(H,U,M),cr.normalize(M,M),H[U*3]=M[0],H[U*3+1]=M[1],H[U*3+2]=M[2];for(var Ze=[],He=[],U=0;U<v-1;U++)for(var he=0;he<p-1;he++){var ge=U*(p-1)+he,ye=ge*4;E(U,he,S);for(var V=0;V<4;V++){for(var Se=0;Se<4;Se++)Ze[Se]=W[S[V]*4+Se];d.set(ye+V,Ze),_&&(B(H,S[V],M),h.set(ye+V,M));var Le=S[V];He[0]=Le%p/(p-1),He[1]=Math.floor(Le/p)/(v-1),f.set(ye+V,He)}ge++}}else{for(var He=[],U=0;U<a.count();U++){He[0]=U%p/(p-1),He[1]=Math.floor(U/p)/(v-1);var Ze=T.parseColor(We(a,U)),ue=ke(a,U);ue!=null&&(Ze[3]*=ue),Ze[3]<.99&&(A=!0),d.set(U,Ze),f.set(U,He)}for(var S=[],ni=0,U=0;U<v-1;U++)for(var he=0;he<p-1;he++){E(U,he,S);for(var V=0;V<6;V++)w[ni++]=S[y[V]]}_?n.generateVertexNormals():h.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=A,e.material.depthMask=!A},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var h=Math.floor(Math.sqrt(s));h>0;){if(Math.floor(s/h)===s/h)return[h,s/h];h--}return h=Math.floor(Math.sqrt(s)),[h,h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function op(e){e.registerChartView(ap),e.registerSeriesModel(ip),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});a.each(u,function(h,f,c,d){var v;a.hasValue(d)?v=n.dataToPoint([h,f,c]):v=s,o[d*3]=v[0],o[d*3+1]=v[1],o[d*3+2]=v[2]})}a.setLayout("points",o)})})}tt(op);function Ts(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var ii=Dt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=Ri(e.data,{coordDimensions:["value"]}),r=new Ft(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return Bi(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new En(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=Pl.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var o=i.geometries[a],s=[],l=Ts(t,o.exterior);if(s&&s.length)for(var u=0;u<o.interiors.length;u++)s.push(Ts(t,s[u]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=ri.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});ce(ii.prototype,wl);ce(ii.prototype,Mn);ce(ii.prototype,Kr);ce(ii.prototype,Qr);ce(ii.prototype,ei);var sp=ii,lp=Mt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new jr(t),this.groupGL=new T.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new tr,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new Rn({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function up(e){Rl(e),e.registerChartView(lp),e.registerSeriesModel(sp),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}tt(up);var hp=Dt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Tu(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Zt(e){this.viewGL=e}Zt.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=wu(),this.updateTransform(e,t)};Zt.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(Eu(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};Zt.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&Ps(r,r,i)};Zt.prototype.removeTransformInPoint=function(e){return this._viewTransform&&Ps(e,e,this._viewTransform),e};Zt.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};Zt.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};Zt.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};var fp=Mt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this.viewGL=new de("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Zt(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new Tr(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new Tr(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(!!e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function cp(e){e.registerChartView(fp),e.registerSeriesModel(hp),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,f=i.get(a[0],u),c=r.dataToPoint(f);l[h]=c[0],l[h+1]=c[1]}i.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,f=i.get(a[0],u),c=i.get(a[1],u);o[0]=f,o[1]=c,o=r.dataToPoint(o),l[h]=o[0],l[h+1]=o[1]}i.setLayout("points",l)})}return{progress:n}}})}tt(cp);function dp(e,t,r,i,n){for(var a=new Su(i),o=0;o<e.length;o++)a.addNode(ee.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<t.length;o++){var h=t[o],f=h.source,c=h.target;a.addEdge(f,c,u)&&(l.push(h),s.push(ee.firstNotNull(h.id,f+" > "+c)),u++)}var d,v=Ri(e,{coordDimensions:["value"]});d=new Ft(v,r),d.initData(e);var p=new Ft(["value"],r);return p.initData(l,s),n&&n(d,p),bu({mainData:d,struct:a,structAttr:"graph",datas:{node:d,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var mi=Dt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){mi.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){mi.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=ri.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return dp(i,r,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(f){const c=n._categoriesModels,d=f.getShallow("category"),v=c[d];return v&&(v.parentModel=f.parentModel,f.parentModel=v),f});const l=t.getModel([]).getModel;function u(f,c){const d=l.call(this,f,c);return d.resolveParentPath=h,d}s.wrapMethod("getItemModel",function(f){return f.resolveParentPath=h,f.getModel=u,f});function h(f){if(f&&(f[0]==="label"||f[1]==="label")){const c=f.slice();return f[0]==="label"?c[0]="edgeLabel":f[1]==="label"&&(c[1]="edgeLabel"),c}return f}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),o=i.getName(a.node1.dataIndex),s=i.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=Fr(l.join(" > ")),n.value&&(l+=" : "+Fr(n.value)),l}else return mi.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new Ft(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return mi.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),vp=mi,Be=Me.vec2,ws=[[0,0],[1,1]],jl=se.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new se.Attribute("position","float",2,"POSITION"),normal:new se.Attribute("normal","float",2),offset:new se.Attribute("offset","float",1),color:new se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Be.dist(e,t)+Be.dist(r,t)+Be.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(ws)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(ws)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],u=t[1],h=r[0],f=r[1],c=i[0],d=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),p=v*v,m=p*v,_=3*v,x=3*p,y=6*p,g=6*m,w=o-l*2+h,E=s-u*2+f,A=(l-h)*3-o+c,S=(u-f)*3-s+d,C=o,P=s,L=(l-o)*_+w*x+A*m,R=(u-s)*_+E*x+S*m,I=w*y+A*g,M=E*y+S*g,B=A*g,H=S*g,W=0,U=0,ue=Math.ceil(1/v),V=new Float32Array((ue+1)*3),V=[],ve=0,U=0;U<ue+1;U++)V[ve++]=C,V[ve++]=P,C+=L,P+=R,L+=I,R+=M,I+=B,M+=H,W+=v,W>1&&(C=L>0?Math.min(C,c):Math.max(C,c),P=R>0?Math.min(P,d):Math.max(P,d));this.addPolyline(V,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Be.create(),t=Be.create(),r=Be.create(),i=Be.create(),n=[],a=[],o=[];return function(s,l,u,h,f){if(!!s.length){var c=typeof s[0]!="number";if(f==null&&(f=c?s.length:s.length/2),!(f<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var d=c?typeof l[0]!="number":l.length/4===f,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,_=this.attributes.normal,x=this.indices,y=this._vertexOffset,g,w=0;w<f;w++){if(c)n=s[w+h],d?g=l[w+h]:g=l;else{var E=w*2+h;if(n=n||[],n[0]=s[E],n[1]=s[E+1],d){var A=w*4+h;g=g||[],g[0]=l[A],g[1]=l[A+1],g[2]=l[A+2],g[3]=l[A+3]}else g=l}if(this.useNativeLine)w>1&&(v.copy(y,y-1),p.copy(y,y-1),y++);else{var S;if(w<f-1){if(c)Be.copy(a,s[w+1]);else{var E=(w+1)*2+h;a=a||[],a[0]=s[E],a[1]=s[E+1]}if(w>0){Be.sub(e,n,o),Be.sub(t,a,n),Be.normalize(e,e),Be.normalize(t,t),Be.add(i,e,t),Be.normalize(i,i);var C=u/2*Math.min(1/Be.dot(e,i),2);r[0]=-i[1],r[1]=i[0],S=C}else Be.sub(e,a,n),Be.normalize(e,e),r[0]=-e[1],r[1]=e[0],S=u/2}else Be.sub(e,n,o),Be.normalize(e,e),r[0]=-e[1],r[1]=e[0],S=u/2;_.set(y,r),_.set(y+1,r),m.set(y,S),m.set(y+1,-S),Be.copy(o,n),v.set(y,n),v.set(y+1,n),p.set(y,g),p.set(y+1,g),y+=2}if(this.useNativeLine)p.set(y,g),v.set(y,n),y++;else if(w>0){var P=this._faceOffset*3,x=this.indices;x[P]=y-4,x[P+1]=y-3,x[P+2]=y-2,x[P+3]=y-3,x[P+4]=y-1,x[P+5]=y-2,this._faceOffset+=2}}this._vertexOffset=y}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});rr(jl.prototype,Ii);var Yl=jl,pp=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;T.Shader.import(pp);var fa={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Ge(e){var t={type:T.Texture.FLOAT,minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST};this._positionSourceTex=new T.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new T.Texture2D(t),this._positionPrevTex=new T.Texture2D(t),this._forceTex=new T.Texture2D(t),this._forcePrevTex=new T.Texture2D(t),this._weightedSumTex=new T.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new T.Texture2D(t),this._globalSpeedPrevTex=new T.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Ne({fragment:T.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node1:new T.Geometry.Attribute("node1","float",2),node2:new T.Geometry.Attribute("node2","float",2),weight:new T.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._weightedSumMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._framebuffer=new qe({depthBuffer:!1}),this._dummyCamera=new T.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Ge.prototype.updateOption=function(e){for(var t in fa)this[t]=fa[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in fa)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Ge.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Ge.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,u=t.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var h=[],o=0;o<t.length;o++){var f=l.attributes,c=t[o].weight;c==null&&(c=1),f.node1.set(o,this.getNodeUV(t[o].node1,h)),f.node2.set(o,this.getNodeUV(t[o].node2,h)),f.weight.set(o,c),f.node1.set(o+u,this.getNodeUV(t[o].node2,h)),f.node2.set(o+u,this.getNodeUV(t[o].node1,h)),f.weight.set(o+u,c)}var d=this._weightedSumMesh.geometry;d.attributes.node.init(e.length);for(var o=0;o<e.length;o++)d.attributes.node.set(o,this.getNodeUV(o,h));l.dirty(),d.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Ge.prototype.getNodes=function(){return this._nodes};Ge.prototype.getEdges=function(){return this._edges};Ge.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Ge.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Ge.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Ge.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Ge.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Ge.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Ge.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Ge.prototype.isFinished=function(e){return this._frame>e};Ge.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Ge.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Ge.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Ge.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function mp(){var e={create:function(){return new Float32Array(2)},dist:function(l,u){var h=u[0]-l[0],f=u[1]-l[1];return Math.sqrt(h*h+f*f)},len:function(l){var u=l[0],h=l[1];return Math.sqrt(u*u+h*h)},scaleAndAdd:function(l,u,h,f){return l[0]=u[0]+h[0]*f,l[1]=u[1]+h[1]*f,l},scale:function(l,u,h){return l[0]=u[0]*h,l[1]=u[1]*h,l},add:function(l,u,h){return l[0]=u[0]+h[0],l[1]=u[1]+h[1],l},sub:function(l,u,h){return l[0]=u[0]-h[0],l[1]=u[1]-h[1],l},normalize:function(l,u){var h=u[0],f=u[1],c=h*h+f*f;return c>0&&(c=1/Math.sqrt(c),l[0]=u[0]*c,l[1]=u[1]*c),l},negate:function(l,u){return l[0]=-u[0],l[1]=-u[1],l},copy:function(l,u){return l[0]=u[0],l[1]=u[1],l},set:function(l,u,h){return l[0]=u,l[1]=h,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var h=0;h<this.nSubRegions;h++){var f=this.subRegions[h];if(f.contain(l,u))return f}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,h,f){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=f,this.size=(h-l+f-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),h=this.bbox;if(!u){var f=(h[0]+h[2])/2,c=(h[1]+h[3])/2,d=(h[2]-h[0])/2,v=(h[3]-h[1])/2,p=l.position[0]>=f?1:0,m=l.position[1]>=c?1:0,u=this._newSubRegion();u.setBBox(p*d+h[0],m*v+h[1],(p+1)*d+h[0],(m+1)*v+h[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,h=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,h+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=h/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,u){this.source=l,this.target=u,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,u,h){var f=u.length;this.nodes.length=0;for(var c=typeof h!="undefined",d=0;d<f;d++){var v=new i;v.position[0]=l[d*2],v.position[1]=l[d*2+1],v.mass=u[d],c&&(v.size=h[d]),this.nodes.push(v)}this._massArr=u,this._swingingArr=new Float32Array(f),c&&(this._sizeArr=h)},o.initEdges=function(l,u){var h=l.length/2;this.edges.length=0;for(var f=0;f<h;f++){var c=l[f*2],d=l[f*2+1],v=this.nodes[c],p=this.nodes[d];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);u&&(m.weight=u[f]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var h=this.nodes[u];e.copy(h.forcePrev,h.force),e.set(h.force,0,0)}for(var u=0;u<l;u++){var f=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,f);else for(var c=u+1;c<l;c++){var d=this.nodes[c];this.applyNodeToNodeRepulsion(f,d,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(f):this.applyNodeGravity(f))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var v=0,p=0,m=e.create(),u=0;u<l;u++){var h=this.nodes[u],_=e.dist(h.force,h.forcePrev);v+=_*h.mass,e.add(m,h.force,h.forcePrev);var x=e.len(m)*.5;p+=x*h.mass,this._swingingArr[u]=_}var y=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(y=Math.min(y/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=y;for(var u=0;u<l;u++){var h=this.nodes[u],_=this._swingingArr[u],g=.1*y/(1+y*Math.sqrt(_)),w=e.len(h.force);w>0&&(g=Math.min(w*g,10)/w,e.scaleAndAdd(h.position,h.position,h.force,g))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(h,f){if(h.node)this.applyNodeToNodeRepulsion(h.node,f,!0);else{e.sub(l,f.position,h.centerOfMass);var c=l[0]*l[0]+l[1]*l[1];if(c>this.barnesHutTheta*h.size*h.size){var d=this.scaling*f.mass*h.mass/c;e.scaleAndAdd(f.force,f.force,l,d)}else for(var v=0;v<h.nSubRegions;v++)this.applyRegionToNodeRepulsion(h.subRegions[v],f)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(h,f,c){if(h!=f){e.sub(l,h.position,f.position);var d=l[0]*l[0]+l[1]*l[1];if(d!==0){var v;if(this.preventOverlap){var p=Math.sqrt(d);if(p=p-h.size-f.size,p>0)v=this.scaling*h.mass*f.mass/(p*p);else if(p<0)v=this.scaling*100*h.mass*f.mass;else return}else v=this.scaling*h.mass*f.mass/d;e.scaleAndAdd(h.force,h.force,l,v),e.scaleAndAdd(f.force,f.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(h){var f=h.source,c=h.target;e.sub(l,f.position,c.position);var d=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=h.weight:v=Math.pow(h.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(d=d-f.size-c.size,d<=0)||(this.linLogMode?p=-v*Math.log(d+1)/(d+1):p=-v,e.scaleAndAdd(f.force,f.force,l,p),e.scaleAndAdd(c.force,c.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position);var h=e.len(l);e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(h+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position),e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),o.updateBBox=function(){for(var l=1/0,u=1/0,h=-1/0,f=-1/0,c=0;c<this.nodes.length;c++){var d=this.nodes[c].position;l=Math.min(l,d[0]),u=Math.min(u,d[1]),h=Math.max(h,d[0]),f=Math.max(f,d[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=f},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var u in l.data.config)s[u]=l.data.config[u];break;case"update":var h=l.data.steps;if(s){for(var f=0;f<h;f++)s.update();for(var c=s.nodes.length,d=new Float32Array(c*2),f=0;f<c;f++){var v=s.nodes[f];d[f*2]=v.position[0],d[f*2+1]=v.position[1]}self.postMessage({buffer:d.buffer,globalSpeed:s.getGlobalSpeed()},[d.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var _i=mp.toString();_i=_i.slice(_i.indexOf("{")+1,_i.lastIndexOf("}"));var yi={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},yt=function(e){for(var t in yi)this[t]=yi[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new Q({type:X.FLOAT,flipY:!1,minFilter:X.NEAREST,magFilter:X.NEAREST})};yt.prototype.initData=function(e,t){var r=new Blob([_i]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(a*2),h=new Float32Array(a),f=0;f<e.length;f++){var c=e[f];o[f*2]=c.x,o[f*2+1]=c.y,s[f]=c.mass==null?1:c.mass,l[f]=c.size==null?1:c.size}for(var f=0;f<t.length;f++){var d=t[f],v=d.node1,p=d.node2;u[f*2]=v,u[f*2+1]=p,h[f]=d.weight==null?1:d.weight}var m=Math.ceil(Math.sqrt(e.length)),_=m,x=new Float32Array(m*_*4),y=this._positionTex;y.width=m,y.height=_,y.pixels=x,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=1/0};yt.prototype.updateOption=function(e){var t={};for(var r in yi)t[r]=yi[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in yi)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var u=n[l].node1,h=n[l].node2;i[u].degree=(i[u].degree||0)+1,i[h].degree=(i[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};yt.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};yt.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};yt.prototype.getNodePositionTexture=function(){return this._positionTex};yt.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};yt.prototype.getNodes=function(){return this._nodes};yt.prototype.getEdges=function(){return this._edges};yt.prototype.isFinished=function(e){return this._frame>e};yt.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};yt.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};yt.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var Es=yt,_p=ot.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(!!this._target&&!!this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}}),gp=_p,yp=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`,Ji=Me.vec2;T.Shader.import(yp);var xp=1,Tp=Mt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this.viewGL=new de("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new Tr(!0,t),this._forceEdgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2),color:new T.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:T.Mesh.LINES}),this._edgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new Yl({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new gp({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Ge||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(ee.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var u=We(i,l.dataIndex),h=T.parseColor(u);h[3]*=ee.firstNotNull(ke(i,l.dataIndex),1),r.attributes.color.set(n,h),r.attributes.color.set(n+1,h),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,u=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[u],n[1]=r[u+1];var h=We(t,s.dataIndex),f=T.parseColor(h);f[3]*=ee.firstNotNull(ke(t,s.dataIndex),1);var c=t.getItemModel(s.dataIndex),d=ee.firstNotNull(c.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,f,d);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=f[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=bn(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var u=e.getModel("forceAtlas2"),h=this._forceLayoutInstance,f=[],c=[],d=s.getDataExtent("value"),v=l.getDataExtent("value"),p=ee.firstNotNull(u.get("edgeWeight"),1),m=ee.firstNotNull(u.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof m=="number"&&(m=[m,m]);var _=0,x={},y=new Float32Array(s.count()*2);if(n.eachNode(function(w){var E=w.dataIndex,A=s.get("value",E),S,C;if(s.hasItemOption){var P=s.getItemModel(E);S=P.get("x"),C=P.get("y")}S==null&&(S=o.x+Math.random()*o.width,C=o.y+Math.random()*o.height),y[_*2]=S,y[_*2+1]=C,x[w.id]=_++;var L=ao(A,d,m);isNaN(L)&&(isNaN(m[0])?L=1:L=m[0]),f.push({x:S,y:C,mass:L,size:s.getItemVisual(E,"symbolSize")})}),s.setLayout("points",y),n.eachEdge(function(w){var E=w.dataIndex,A=s.get("value",E),S=ao(A,v,p);isNaN(S)&&(isNaN(p[0])?S=1:S=p[0]),c.push({node1:x[w.node1.id],node2:x[w.node2.id],weight:S,dataIndex:E})}),!h){var g=u.get("GPU");this._forceLayoutInstance&&(g&&!(this._forceLayoutInstance instanceof Ge)||!g&&!(this._forceLayoutInstance instanceof Es))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),h=this._forceLayoutInstance=g?new Ge:new Es}h.initData(f,c),h.updateOption(u.option),this._updateForceEdgesGeometry(h.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var y=new Float32Array(s.count()*2),_=0;n.eachNode(function(A){var S=A.dataIndex,C,P;if(s.hasItemOption){var L=s.getItemModel(S);C=L.get("x"),P=L.get("y")}y[_++]=C,y[_++]=P}),s.setLayout("points",y),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(!!o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var u=this,h=this._layoutId=xp++,f=l.getShallow("maxSteps"),c=l.getShallow("steps"),d=0,v=Math.max(c*2,20),p=function(m){if(m===u._layoutId){if(o.isFinished(f)){a.dispatchAction({type:"graphGLStopLayout",from:u.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:u.uid});return}o.update(n.layer.renderer,c,function(){u._updatePositionTexture(),d+=c,d>=v&&(u._syncNodePosition(e),d=0),a.getZr().refresh(),ca(function(){p(m)})})}};ca(function(){u._forceLayoutInstanceToDispose&&(u._forceLayoutInstanceToDispose.dispose(n.layer.renderer),u._forceLayoutInstanceToDispose=null),p(h)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&(!this.viewGL.layer||(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1)))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(h){h.dataIndex<0||(h.node1!==l&&s.push(h.node1),h.node2!==l&&s.push(h.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(h){this._pointsBuilder.highlight(n,h.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(h){return h.dataIndex}));var u=[];l.edges.forEach(function(h){h.dataIndex>=0&&(this._highlightEdge(h.dataIndex),u.push(h))},this),this._focusNodes=s,this._focusEdges=u},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=T.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=ee.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=Ji.create(1/0,1/0),o=Ji.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],Ji.min(a,a,s),Ji.max(o,o,s);var u=(o[1]+a[1])/2,h=(o[0]+a[0])/2;if(!(h>r.left&&h<r.right&&u<r.bottom&&u>r.top)){var f=Math.max(o[0]-a[0],10),c=f/t.getWidth()*t.getHeight();f*=1.4,c*=1.4,a[0]-=f*.2,r.left=a[0],r.top=u-c/2,r.bottom=u+c/2,r.right=f+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function en(e){return e instanceof Array||(e=[e,e]),e}function wp(e){e.registerChartView(Tp),e.registerSeriesModel(vp),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var u=a.getName(l);s["ec-"+u]=l;var h=a.getItemModel(l),f=h.getModel("itemStyle").getItemStyle();f.fill||(f.fill=n.getColorFromPalette(u,i)),a.setItemVisual(l,"style",f);var c=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<c.length;v++){var d=h.getShallow(c[v],!0);d!=null&&a.setItemVisual(l,c[v],d)}}),a.count()&&o.each(function(l){var u=o.getItemModel(l);let h=u.getShallow("category");if(h!=null){typeof h=="string"&&(h=s["ec-"+h]);var f=a.getItemVisual(h,"style"),c=o.ensureUniqueItemVisual(l,"style");oo(c,f);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++)o.setItemVisual(l,d[v],a.getItemVisual(h,d[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=en(i.get("edgeSymbol")),s=en(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),h=n.getEdgeByIndex(l),f=en(u.getShallow("symbol",!0)),c=en(u.getShallow("symbolSize",!0)),d=u.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(oo(v,d),v.stroke){case"source":{var p=h.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=h.node2.getVisual("style");v.stroke=p&&p.fill;break}}f[0]&&h.setVisual("fromSymbol",f[0]),f[1]&&h.setVisual("toSymbol",f[1]),c[0]&&h.setVisual("fromSymbolSize",c[0]),c[1]&&h.setVisual("toSymbolSize",c[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}tt(wp);var Ep=Dt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:Ms(r)||["x","y"];i.push("vx","vy");var n=Ri(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new Ft(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}}),Sp=se.extend(function(){return{dynamic:!0,attributes:{position:new se.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}}),bp=Sp,Ap=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;N.import(Ap);function Cp(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var Ca=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new Q({type:X.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};Ca.prototype={constructor:Ca,init:function(){var e={type:X.FLOAT,minFilter:X.NEAREST,magFilter:X.NEAREST,useMipmap:!1};this._spawnTexture=new Q(e),this._particleTexture0=new Q(e),this._particleTexture1=new Q(e),this._frameBuffer=new qe({depthBuffer:!1}),this._particlePass=new Ne({fragment:N.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Ne({fragment:N.source("clay.compositor.downsample")});var t=new vr({renderOrder:10,material:new Et({shader:new N(N.source("ecgl.vfParticle.renderPoints.vertex"),N.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:vr.POINTS,geometry:new se({dynamic:!0,mainAttribute:"texcoord0"})}),r=new vr({renderOrder:10,material:new Et({shader:new N(N.source("ecgl.vfParticle.renderLines.vertex"),N.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new bp,culling:!1}),i=new vr({material:new Et({shader:new N(N.source("ecgl.color.vertex"),N.source("ecgl.color.fragment"))}),geometry:new Dn});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Wr,this._thisFrameTexture=new Q,this._lastFrameTexture=new Q},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new Q),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Cp(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new Q,r[s].width=a/n,r[s].height=o/n,n*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};var Lp=Ca,Dp=Mt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new de("orthographic"),this.groupGL=new T.Node,this.viewGL.add(this.groupGL),this._particleSurface=new Lp;var r=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.color.vertex"),fragment:T.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=ee.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var f=+new Date,c=Math.min(f-o,20);o=o+c,s._renderer&&(i.update(s._renderer,r,c/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var u=e.getModel("itemStyle"),h=T.parseColor(u.get("color"));h[3]*=ee.firstNotNull(u.get("opacity"),1),a.material.set("color",h),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(x){return e.coordDimToDataDim(x)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),o=n.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var u=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(u*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var h=this._particleSurface.vectorFieldTexture,f=h.pixels;if(!f||f.length!==l*s*4)f=h.pixels=new Float32Array(s*l*4);else for(var c=0;c<f.length;c++)f[c]=0;var d=0,v=1/0,p=new Float32Array(n.count()*2),m=0,_=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(x,y,g,w){var E=r.dataToPoint([x,y]);p[m++]=E[0],p[m++]=E[1],_[0][0]=Math.min(E[0],_[0][0]),_[0][1]=Math.min(E[1],_[0][1]),_[1][0]=Math.max(E[0],_[1][0]),_[1][1]=Math.max(E[1],_[1][1]);var A=Math.sqrt(g*g+w*w);d=Math.max(d,A),v=Math.min(v,A)}),n.each(["vx","vy"],function(x,y,g){var w=Math.round((p[g*2]-_[0][0])/(_[1][0]-_[0][0])*(s-1)),E=l-1-Math.round((p[g*2+1]-_[0][1])/(_[1][1]-_[0][1])*(l-1)),A=(E*s+w)*4;f[A]=x/d*.5+.5,f[A+1]=y/d*.5+.5,f[A+3]=1}),h.width=s,h.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(h),h.dirty(),this._updatePlanePosition(_[0],_[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,d])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(p,m,_){p=Math.max(Math.min(p,r-1),0),m=Math.max(Math.min(m,i-1),0);var x=(m*(r-1)+p)*4;return t[x+3]===0?!1:(_[0]=t[x],_[1]=t[x+1],!0)}function a(p,m,_){_[0]=p[0]+m[0],_[1]=p[1]+m[1]}for(var o=[],s=[],l=[],u=[],h=[],f=0,c=0;c<i;c++)for(var d=0;d<r;d++){var v=(c*(r-1)+d)*4;t[v+3]===0&&(f=o[0]=o[1]=0,n(d-1,c,s)&&(f++,a(s,o,o)),n(d+1,c,l)&&(f++,a(l,o,o)),n(d,c-1,u)&&(f++,a(u,o,o)),n(d,c+1,h)&&(f++,a(h,o,o)),o[0]/=f,o[1]/=f,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new T.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],u=t[1]-e[1],h=a[0]-n[0],f=a[1]-n[1],c=[(n[0]-e[0])/l,1-f/u-(n[1]-e[1])/u,h/l,f/u];return{leftTop:n,rightBottom:a,region:c}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function Mp(e){e.registerChartView(Dp),e.registerSeriesModel(Ep)}tt(Mp);var La=Dt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),La.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),La.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=so(this._flatCoords,t.flatCoords),this._flatCoordsOffset=so(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var u=e[l++];i[o++]=a+t,i[o++]=u;for(var h=0;h<u;h++){var f=e[l++],c=e[l++];n[a++]=f,n[a++]=c}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new Ft(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),Pp=La,Rp=Mt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new T.Node,this.viewGL=new de("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new Zt(this.viewGL),this._nativeLinesShader=T.createShader("ecgl.lines3D"),this._meshLinesShader=T.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new T.Mesh({$ignorePicking:!0,material:new T.Material({shader:T.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new Yl({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:T.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?T.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,u=ee.firstNotNull(e.get("lineStyle.width"),1);u>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=T.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=T.Mesh.LINES),r=r||0,i=i||n.count(),s.resetOffset();var h=0,f=0,c=[],d=[],v=[],p=[],m=[],_=.3,x=.7;function y(){d[0]=c[0]*x+p[0]*_-(c[1]-p[1])*a,d[1]=c[1]*x+p[1]*_-(p[0]-c[0])*a,v[0]=c[0]*_+p[0]*x-(c[1]-p[1])*a,v[1]=c[1]*_+p[1]*x-(p[0]-c[0])*a}if(o||a!==0)for(var g=r;g<i;g++)if(o){var w=e.getLineCoordsCount(g);h+=s.getPolylineVertexCount(w),f+=s.getPolylineTriangleCount(w)}else e.getLineCoords(g,m),this._glViewHelper.dataToPoint(l,m[0],c),this._glViewHelper.dataToPoint(l,m[1],p),y(),h+=s.getCubicCurveVertexCount(c,d,v,p),f+=s.getCubicCurveTriangleCount(c,d,v,p);else{var E=i-r;h+=E*s.getLineVertexCount(),f+=E*s.getLineVertexCount()}s.setVertexCount(h),s.setTriangleCount(f);for(var A=r,S=[],g=r;g<i;g++){T.parseColor(We(n,A),S);var C=ee.firstNotNull(ke(n,A),1);S[3]*=C;for(var w=e.getLineCoords(g,m),P=0;P<w;P++)this._glViewHelper.dataToPoint(l,m[P],m[P]);o?s.addPolyline(m,S,u,0,w):a!==0?(c=m[0],p=m[1],y(),s.addCubicCurve(c,d,v,p,S,u)):s.addPolyline(m,S,u,0,2),A++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Np(e){e.registerChartView(Rp),e.registerSeriesModel(Pp)}tt(Np);const Ip=[{label:"\u5E7F\u4E1C\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u5E7F\u897F\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u56DB\u5DDD\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u6E56\u5317\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u798F\u5EFA\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u5C71\u4E1C\u7701\u519C\u4E1A\u519C\u6751\u5385"},{label:"\u6C5F\u897F\u7701\u519C\u4E1A\u519C\u6751\u5385"}],Op=[{v1:"\u65F6\u95F4",v2:"\u5929\u6C14",v3:"\u6E29\u5EA6",v4:"\u6E7F\u5EA6",v5:"\u964D\u6C34\u6982\u7387",v6:"\u98CE\u5411",v7:"\u98CE\u529B",type:"title"},{v1:"\u4ECA\u5929",v2:"ele-Sunny",v3:"20\xB0/26\xB0",v4:"80%",v5:"50%",v6:"\u4E1C\u5357\u98CE",v7:"13m/s"},{v1:"\u660E\u5929",v2:"ele-Lightning",v3:"20\xB0/26\xB0",v4:"80%",v5:"50%",v6:"\u4E1C\u5357\u98CE",v7:"13m/s"},{v1:"\u540E\u5929",v2:"ele-Sunny",v3:"20\xB0/26\xB0",v4:"80%",v5:"50%",v6:"\u4E1C\u5357\u98CE",v7:"13m/s"}],Bp=[{v1:"\u5730\u5757A-\u704C\u6E89",v2:"\u9633\u5149\u73AB\u7470\u79CD\u690D",v3:"126\u5929",v4:"\u8BBE\u5907\u5728\u7EBF"},{v1:"\u5730\u5757B-\u6536\u5272",v2:"\u9633\u5149\u73AB\u7470\u79CD\u690D",v3:"360\u5929",v4:"\u8BBE\u5907\u9884\u8B66"}],Fp=[{label:"\u6E29\u5EA6"},{label:"\u5149\u7167"},{label:"\u6E7F\u5EA6"},{label:"\u98CE\u529B"},{label:"\u5F20\u529B"},{label:"\u6C14\u538B"}],Up=[{topLevelClass:"fixed-top",icon:"ele-MagicStick",label:"\u73AF\u5883\u76D1\u6D4B",type:0},{topLevelClass:"fixed-right",icon:"ele-MoonNight",label:"\u7CBE\u51C6\u7BA1\u7406",type:1},{topLevelClass:"fixed-bottom",icon:"ele-TrendCharts",label:"\u6570\u636E\u62A5\u8868",type:2},{topLevelClass:"fixed-left",icon:"ele-Van",label:"\u4EA7\u54C1\u8FFD\u6EAF",type:3}];var Gp="/assets/world.1658457169439.jpg",zp="/assets/bathymetry.1658457169439.jpg";const Hp=Lu({name:"visualizingLinkDemo2",setup(){const{proxy:e}=Bu(),t=Du({time:{txt:"",fun:0},dropdownList:Ip,dropdownActive:"\u8BF7\u9009\u62E9",skyList:Op,dBtnList:Bp,chartData4Index:0,dBtnActive:0,earth3DBtnList:Up,chartData4List:Fp,myCharts:[],the3DEarth:null}),r=()=>{t.time.txt=lo(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ"),t.time.fun=window.setInterval(()=>{t.time.txt=lo(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ")},1e3)},i=()=>{const f=br(e.$refs.rightChartData1),c={tooltip:{trigger:"item"},series:[{name:"\u9762\u79EF\u6A21\u5F0F",type:"pie",radius:[10,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{name:"\u5929\u6C14\u9884\u8B66",value:100},{name:"\u75C5\u866B\u5BB3\u9884\u8B66",value:50},{name:"\u4EFB\u52A1\u9884\u8B66",value:130},{name:"\u76D1\u6D4B\u8BBE\u5907\u9884\u8B66",value:62}],label:{color:"#c0d1f2"}}]};f.setOption(c),t.myCharts.push(f)},n=()=>{const f=br(e.$refs.rightChartData4),c={grid:{top:10,right:10,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{interval:0,color:"#c0d1f2",textStyle:{fontSize:10}}},yAxis:[{type:"value",axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"\u6E29\u5EA6",type:"line",smooth:!0,lineStyle:{width:0},areaStyle:{opacity:.8,color:new Fn(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,70]}]};f.setOption(c),t.myCharts.push(f)},a=()=>{const f=br(e.$refs.rightChartData3),c={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"\u9884\u8D2D\u961F\u5217",type:"line",data:[200,85,112,275,305,415],itemStyle:{color:"#16cfd0"}},{name:"\u6700\u65B0\u6210\u4EA4\u4EF7",type:"line",data:[50,85,22,155,170,25],itemStyle:{color:"#febb50"}}]};f.setOption(c),t.myCharts.push(f)},o=()=>{const f=br(e.$refs.rightChartData6),c={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:20,right:50,bottom:0,left:80},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},inverse:!0,data:["\u65BD\u80A5\u4EFB\u52A1\u5B8C\u6210\u7387","\u65BD\u836F\u4EFB\u52A1\u5B8C\u6210\u7387","\u519C\u4E8B\u4EFB\u52A1\u5B8C\u6210\u7387"],axisLabel:{color:"#A7D6F4",fontSize:12}}],series:[{name:"\u6807\u51C6\u5316",type:"bar",barWidth:10,label:{show:!0,position:"right",color:"#A7D6F4",fontSize:12,distance:15,formatter:"{c}%"},itemStyle:{barBorderRadius:[0,20,20,0],color:new Fn(1,0,0,0,[{offset:0,color:"#51C5FD"},{offset:1,color:"#005BB1"}],!1)},data:[75,100,60]}]};f.setOption(c),t.myCharts.push(f)},s=()=>{const f=br(e.$refs.rightChartData2),c={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.5)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}},{type:"value",position:"right",axisLine:{show:!1},axisLabel:{show:!0,formatter:"{value}%",textStyle:{color:"#16cfd0"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"\u9500\u552E\u6C34\u91CF",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!0,symbol:"circle",itemStyle:{color:"#058cff"},lineStyle:{color:"#058cff"},areaStyle:{color:"rgba(5,140,255, 0.2)"},data:[4.2,3.8,4.8,3.5,2.9,2.8]},{name:"\u4E3B\u8425\u4E1A\u52A1",type:"bar",barWidth:15,itemStyle:{normal:{color:new Fn(0,0,0,1,[{offset:0,color:"#00FFE3"},{offset:1,color:"#4693EC"}])}},data:[4.2,3.8,4.8,3.5,2.9,2.8]}]};f.setOption(c),t.myCharts.push(f)},l=f=>{let c=t.the3DEarth;c.style.height=`${e.$refs.rightChartData5.offsetHeight}px`;const d=br(c),v={globe:{baseTexture:Gp,heightTexture:zp,shading:"realistic",light:{ambient:{intensity:.4},main:{intensity:.4}},viewControl:{autoRotate:!0},postEffect:{enable:!0,bloom:{enable:!0}},globeRadius:f},series:{type:"lines3D",coordinateSystem:"globe",blendMode:"lighter",lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},data:[]}};let p=function(){let m=105.18,_=Math.random()*360-180,x=37.51,y=Math.random()*180-90;return{coords:[[_,y],[m,x]],value:(Math.random()*3e3).toFixed(2)}};for(let m=0;m<150;m++)v.series.data=v.series.data.concat(p());d.setOption(v)},u=()=>{let f=document.body.clientWidth,c=0;f>=1920?c=100:f>1200&&f<1920?c=70:f>992&&f<1200?c=60:f>768&&f<992?c=40:f<768&&(c=20),l(c)},h=()=>{u(),window.addEventListener("resize",()=>{for(let f=0;f<t.myCharts.length;f++)t.myCharts[f].resize();u()})};return Mu(async()=>{Cu.done(),r(),await i(),await n(),await a(),await s(),await o(),await h()}),Pu(()=>{window.clearInterval(t.time.fun)}),to({},Ru(t))}}),vt=e=>(Nu("data-v-2bc812f0"),e=e(),Iu(),e),Vp={class:"visualizing-demo2"},kp={class:"big-data-up"},Wp={class:"up-left"},Xp=vt(()=>O("div",{class:"up-center"},[O("span",null,"\u667A\u6167\u519C\u4E1A\u7CFB\u7EDF\u5E73\u53F0")],-1)),Zp={class:"up-right"},jp={class:"el-dropdown-link"},Yp={class:"ml15"},qp=vt(()=>O("span",null,"\u6D88\u606F",-1)),$p={class:"ml15"},Kp=vt(()=>O("span",null,"\u4E2A\u4EBA",-1)),Qp={class:"ml15"},Jp=vt(()=>O("span",null,"\u8FD4\u56DE",-1)),em={class:"big-data-down"},tm={class:"big-data-down-left"},rm={class:"flex-warp-item"},im={class:"flex-warp-item-box"},nm=vt(()=>O("div",{class:"flex-title"},"\u5929\u6C14\u9884\u62A5",-1)),am={class:"flex-content flex-content-overflow"},om={class:"sky"},sm=Rs('<div class="sky-center" data-v-2bc812f0><div class="mb2" data-v-2bc812f0><span class="font" data-v-2bc812f0>\u591A\u4E91\u8F6C\u6674</span><span class="font" data-v-2bc812f0>\u4E1C\u5357\u98CE</span><span data-v-2bc812f0>\u826F</span></div><div class="sky-tip" data-v-2bc812f0>\u6E29\u99A8\u63D0\u793A\uFF1A\u591A\u4E91\u8F6C\u6674\uFF0C\u5357\u98CE\u8F6C\u5317\u98CE\u98CE\u529B3\u7EA7</div></div><div class="sky-right" data-v-2bc812f0><span data-v-2bc812f0>25</span><span class="font" data-v-2bc812f0>\xB0C</span></div>',2),lm={class:"sky-dd"},um={key:0},hm={key:1},fm={class:"tip"},cm={class:"flex-warp-item"},dm={class:"flex-warp-item-box"},vm=vt(()=>O("div",{class:"flex-title"},"\u5F53\u524D\u8BBE\u5907\u72B6\u6001",-1)),pm={class:"flex-content flex-content-overflow"},mm={class:"d-states"},_m={class:"d-states-item"},gm=vt(()=>O("div",{class:"d-states-flex"},[O("div",{class:"d-states-item-label"},"\u56ED\u533A\u8BBE\u5907\u6570"),O("div",{class:"d-states-item-value"},"99")],-1)),ym={class:"d-states-item"},xm=vt(()=>O("div",{class:"d-states-flex"},[O("div",{class:"d-states-item-label"},"\u9884\u8B66\u8BBE\u5907\u6570"),O("div",{class:"d-states-item-value"},"10")],-1)),Tm={class:"d-states-item"},wm=vt(()=>O("div",{class:"d-states-flex"},[O("div",{class:"d-states-item-label"},"\u8FD0\u884C\u8BBE\u5907\u6570"),O("div",{class:"d-states-item-value"},"20")],-1)),Em={class:"d-btn"},Sm={class:"d-btn-item-center"},bm={class:"d-btn-item-eight"},Am={class:"flex-warp-item"},Cm={class:"flex-warp-item-box"},Lm=vt(()=>O("div",{class:"flex-title"},"\u8FD130\u5929\u9884\u8B66\u603B\u6570",-1)),Dm={class:"flex-content",ref:"rightChartData1"},Mm={class:"big-data-down-center"},Pm={class:"big-data-down-center-one"},Rm={class:"big-data-down-center-one-content",ref:"rightChartData5"},Nm={ref:"the3DEarth"},Im={class:"text-box"},Om={class:"text"},Bm={class:"big-data-down-center-two"},Fm={class:"flex-warp-item-box"},Um=vt(()=>O("div",{class:"flex-title"},[O("span",null,"\u5F53\u524D\u8BBE\u5907\u76D1\u6D4B"),O("span",{class:"flex-title-small"},"\u5355\u4F4D\uFF1A\u6B21")],-1)),Gm={class:"flex-content"},zm={class:"flex-content-left"},Hm={class:"monitor-z-index"},Vm={class:"monitor-item-label"},km={class:"flex-content-right",ref:"rightChartData4"},Wm={class:"big-data-down-right"},Xm={class:"flex-warp-item"},Zm={class:"flex-warp-item-box"},jm=vt(()=>O("div",{class:"flex-title"},[O("span",null,"\u8FD17\u5929\u4EA7\u54C1\u8FFD\u6EAF\u626B\u7801\u7EDF\u8BA1"),O("span",{class:"flex-title-small"},"\u5355\u4F4D\uFF1A\u6B21")],-1)),Ym={class:"flex-content",ref:"rightChartData3"},qm={class:"flex-warp-item"},$m={class:"flex-warp-item-box"},Km=vt(()=>O("div",{class:"flex-title"},"\u5F53\u524D\u4EFB\u52A1\u7EDF\u8BA1",-1)),Qm={class:"flex-content"},Jm=Rs('<div class="task" data-v-2bc812f0><div class="task-item task-first-item" data-v-2bc812f0><div class="task-item-value task-first" data-v-2bc812f0>25</div><div class="task-item-label" data-v-2bc812f0>\u5F85\u529E\u4EFB\u52A1</div></div><div class="task-item" data-v-2bc812f0><div class="task-item-box task1" data-v-2bc812f0><div class="task-item-value" data-v-2bc812f0>12</div><div class="task-item-label" data-v-2bc812f0>\u65BD\u80A5</div></div></div><div class="task-item" data-v-2bc812f0><div class="task-item-box task2" data-v-2bc812f0><div class="task-item-value" data-v-2bc812f0>3</div><div class="task-item-label" data-v-2bc812f0>\u65BD\u836F</div></div></div><div class="task-item" data-v-2bc812f0><div class="task-item-box task3" data-v-2bc812f0><div class="task-item-value" data-v-2bc812f0>5</div><div class="task-item-label" data-v-2bc812f0>\u519C\u4E8B</div></div></div><div class="task-item" data-v-2bc812f0><div class="task-item-box task4" data-v-2bc812f0><div class="task-item-value" data-v-2bc812f0>3</div><div class="task-item-label" data-v-2bc812f0>\u5DE1\u56ED</div></div></div><div class="task-item" data-v-2bc812f0><div class="task-item-box task5" data-v-2bc812f0><div class="task-item-value" data-v-2bc812f0>2</div><div class="task-item-label" data-v-2bc812f0>\u91C7\u96C6</div></div></div></div>',1),e_={ref:"rightChartData6",class:"progress"},t_={class:"flex-warp-item"},r_={class:"flex-warp-item-box"},i_=vt(()=>O("div",{class:"flex-title"},[O("span",null,"\u8FD17\u5929\u6295\u5165\u54C1\u8BB0\u5F55"),O("span",{class:"flex-title-small"},"\u5355\u4F4D\uFF1A\u4EF6")],-1)),n_={class:"flex-content",ref:"rightChartData2"};function a_(e,t,r,i,n,a){const o=Gi("SvgIcon"),s=Gi("el-dropdown-item"),l=Gi("el-dropdown-menu"),u=Gi("el-dropdown");return ut(),pt("div",Vp,[O("div",kp,[O("div",Wp,[lt(o,{name:"ele-Timer",class:"mr5"}),O("span",null,Je(e.time.txt),1)]),Xp,O("div",Zp,[lt(u,{size:"small"},{dropdown:Ui(()=>[lt(l,null,{default:Ui(()=>[(ut(!0),pt(Ar,null,Cr(e.dropdownList,(h,f)=>(ut(),Ou(s,{key:f},{default:Ui(()=>[uo(Je(h.label),1)]),_:2},1024))),128))]),_:1})]),default:Ui(()=>[O("span",jp,[uo(Je(e.dropdownActive)+" ",1),lt(o,{name:"ele-ArrowDown",class:"el-icon--right"})])]),_:1}),O("div",Yp,[lt(o,{name:"ele-Bell",class:"mr5"}),qp]),O("div",$p,[lt(o,{name:"ele-User",class:"mr5"}),Kp]),O("div",Qp,[lt(o,{name:"ele-SwitchButton",class:"mr5"}),Jp])])]),O("div",em,[O("div",tm,[O("div",rm,[O("div",im,[nm,O("div",am,[O("div",om,[lt(o,{name:"ele-Sunny",class:"sky-left"}),sm]),O("div",lm,[(ut(!0),pt(Ar,null,Cr(e.skyList,(h,f)=>(ut(),pt("div",{class:zi(["sky-dl",{"sky-dl-first":f===1}]),key:f},[O("div",null,Je(h.v1),1),h.type==="title"?(ut(),pt("div",um,Je(h.v2),1)):(ut(),pt("div",hm,[lt(o,{name:h.v2},null,8,["name"])])),O("div",null,Je(h.v3),1),O("div",null,Je(h.v4),1),O("div",fm,Je(h.v5),1),O("div",null,Je(h.v6),1),O("div",null,Je(h.v7),1)],2))),128))])])])]),O("div",cm,[O("div",dm,[vm,O("div",pm,[O("div",mm,[O("div",_m,[lt(o,{name:"ele-Odometer",class:"i-bg1"}),gm]),O("div",ym,[lt(o,{name:"ele-FirstAidKit",class:"i-bg2"}),xm]),O("div",Tm,[lt(o,{name:"ele-VideoPlay",class:"i-bg3"}),wm])]),O("div",Em,[(ut(!0),pt(Ar,null,Cr(e.dBtnList,(h,f)=>(ut(),pt("div",{class:zi(["d-btn-item",{"d-btn-active":e.dBtnActive===f}]),key:f},[lt(o,{name:"ele-Money",class:"d-btn-item-left"}),O("div",Sm,[O("div",null,Je(h.v1),1),O("div",null,Je(h.v2)+"|"+Je(h.v3),1)]),O("div",bm,Je(h.v4),1)],2))),128))])])])]),O("div",Am,[O("div",Cm,[Lm,O("div",Dm,null,512)])])]),O("div",Mm,[O("div",Pm,[O("div",Rm,[O("div",Nm,null,512),(ut(!0),pt(Ar,null,Cr(e.earth3DBtnList,(h,f)=>(ut(),pt("div",{class:zi(h.topLevelClass),key:f},[(ut(),pt(Ar,null,Cr(4,c=>O("div",{class:"circle",key:c})),64)),O("div",Im,[lt(o,{name:h.icon},null,8,["name"]),O("div",Om,Je(h.label),1)])],2))),128))],512)]),O("div",Bm,[O("div",Fm,[Um,O("div",Gm,[O("div",zm,[(ut(!0),pt(Ar,null,Cr(e.chartData4List,(h,f)=>(ut(),pt("div",{class:"monitor-item",key:f},[O("div",{class:zi(["monitor-wave",{"monitor-active":f===e.chartData4Index}])},[O("div",Hm,[O("div",Vm,Je(h.label),1)])],2)]))),128))]),O("div",km,null,512)])])])]),O("div",Wm,[O("div",Xm,[O("div",Zm,[jm,O("div",Ym,null,512)])]),O("div",qm,[O("div",$m,[Km,O("div",Qm,[Jm,O("div",e_,null,512)])])]),O("div",t_,[O("div",r_,[i_,O("div",n_,null,512)])])])])])}var f_=Au(Hp,[["render",a_],["__scopeId","data-v-2bc812f0"]]);export{f_ as default};
