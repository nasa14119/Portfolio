import{r as a}from"./index.ed373d49.js";/* empty css                          */import{g as j,a as p}from"./index.15b27e62.js";import{u as m,l as d,p as h}from"./projectsStore.2e733fbb.js";import{j as e}from"./jsx-runtime.391947bd.js";function E(){const i=m(h),l=m(d);let u=[j,p];const[g,x]=a.useState(!1),[c,f]=a.useState(null);a.useEffect(()=>{(async()=>{await u[i]().then(n=>{f(()=>n)})})();let s=setTimeout(()=>d.set(!0),750);return()=>{clearTimeout(s)}},[i]),a.useEffect(()=>{x(!l)},[l]);const t=({row:o})=>{if(c)return e.jsx("div",{className:`images-conteiner-row-${o}`,children:c.map((s,n)=>e.jsx("img",{src:s,alt:"Images of the proyect",className:"animation-load-image"},n))})},r=()=>e.jsx("div",{className:"loader-conteiner",children:Array(70).fill(null).map((o,s)=>e.jsx("div",{},s))});return g?e.jsx("div",{className:"overflow-hidden absolute inset-0 -z-50",children:e.jsxs("div",{className:"conteiner-backgroundImage",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})}):e.jsx("div",{className:"overflow-hidden absolute inset-0 -z-50",children:e.jsxs("div",{className:"conteiner-backgroundImage",children:[e.jsx(t,{row:1}),e.jsx(t,{row:2}),e.jsx(t,{row:3})]})})}export{E as default};
