import p from"./ContentSlot.2fe88e58.js";import{a as d,r as l,o as m,i as f,k as o,m as t,j as c,u as r,aa as v,ab as h,$ as y,x as C}from"./entry.bba29363.js";const g={class:"summary"},V={class:"content"},k=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,x)=>{const n=p,_=y;return m(),f("div",{class:c(["callout",[s.type]])},[o("span",{class:"preview",onClick:i},[o("span",g,[t(n,{use:a.$slots.summary},null,8,["use"])]),t(_,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(o("div",V,[t(n,{use:a.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}});const B=C(k,[["__scopeId","data-v-961b73c7"]]);export{B as default};
