var f=Object.defineProperty;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(e,s,a)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,l=(e,s)=>{for(var a in s||(s={}))h.call(s,a)&&u(e,a,s[a]);if(n)for(var a of n(s))g.call(s,a)&&u(e,a,s[a]);return e};import{j as v,aB as _,aw as c,$ as w,x as y,d as C,ac as F,l as T,m as t,U as m,J as x,k as V}from"./vue.1658457169439.js";import{_ as $,a as R,u as B}from"./index.1658457169439.js";const D=v({name:"paramsCommonDetails",setup(){const e=_(),s=R(),a=B(),{themeConfig:r}=c(a),{isTagsViewCurrenFull:i}=c(s),o=w({params:{path:"",query:""}}),p=y(()=>{let{isTagsview:d}=r.value;return i.value?"30px":d?"114px":"80px"});return C(()=>{o.params=e}),l({setViewHeight:p},F(o))}}),k={class:"flex-margin color-primary"},q=t("div",null,"paramsCommonDetails",-1),b={class:"mt10 mb10"};function A(e,s,a,r,i,o){return V(),T("div",{class:"layout-view-bg-white flex",style:x({height:`calc(100vh - ${e.setViewHeight}`})},[t("div",k,[q,t("div",b,"\u8DEF\u5F84\uFF1Apath: "+m(e.params.path),1),t("div",null,"\u53C2\u6570\uFF1Aquery: "+m(e.params.query),1)])],4)}var j=$(D,[["render",A]]);export{j as default};
