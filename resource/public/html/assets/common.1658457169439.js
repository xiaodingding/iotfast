function f(e,r,t,n,s){r=r||"id",t=t||"parentId",s=s||0;const c=JSON.parse(JSON.stringify(e)),a=c.filter(l=>{let u=c.filter(o=>l[r]===o[t]);return u.length>0&&(l.children=u),l[t]===s});return a!=""?a:e}function i(e,r){let t=[];return e.map(n=>{if(n.value==r)return t.push(n.label),!1}),t.join("")}function g(e,r){let t="";return t=e.find(n=>n.id==r),t?t.name:"null"}function h(e){if(e)switch(typeof e=="string"&&(e=parseInt(e)),e){case 0:return"\u79BB\u7EBF";case 1:return"\u5728\u7EBF";case 2:return"\u62A5\u8B66";default:return"\u672A\u77E5\u72B6\u6001"}else return"\u79BB\u7EBF"}function p(e,r){if(arguments.length===0||!e)return null;const t=r||"{y}-{m}-{d} {h}:{i}:{s}";let n;typeof e=="object"?n=e:(typeof e=="string"&&/^[0-9]+$/.test(e)?e=parseInt(e):typeof e=="string"&&(e=e.replace(new RegExp(/-/gm),"/")),typeof e=="number"&&e.toString().length===10&&(e=e*1e3),n=new Date(e)),console.log(n,e);const s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return t.replace(/{(y|m|d|h|i|s|a)+}/g,(a,l)=>{let u=s[l];return l==="a"?["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][u]:(a.length>0&&u<10&&(u="0"+u),u||0)})}export{g as a,h as b,f as h,p as i,i as s};