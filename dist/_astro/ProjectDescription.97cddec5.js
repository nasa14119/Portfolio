/* empty css                          */import{j as e}from"./jsx-runtime.391947bd.js";import{r as i}from"./index.ed373d49.js";import{C as y}from"./cross.d7971119.js";import{u as m,p as l,l as h}from"./projectsStore.2e733fbb.js";const I="/_astro/astro-icon.c13e37d5.svg",w="/_astro/react-icon.ab661fd4.svg",v="/_astro/github.d88ef490.svg",N="/_astro/menu-hamburger.3b3c7c1f.svg",k="/_astro/popout.03ce3fda.svg",p={GithubIcon:v,PopupIcon:k},d={AstroIcon:I,ReactIcon:w,HamburgerMenuIcon:N};function P({demo:o,code:t}){return e.jsxs("footer",{className:"box-border flex justify-evenly md:justify-center gap-x-10 h-[15%] md:h-fit mt-auto mb-5",children:[e.jsx("a",{href:o,target:"_blank",children:e.jsxs("div",{className:"w-full md:w-fit px-2 border-2 border-complementTwo flex text-complementTwo rounded-3xl justify-center items-center h-full md:py-2",children:[e.jsx("img",{src:p.PopupIcon,alt:"Pop up",className:"h-11 aspect-square"}),e.jsx("span",{children:"Live Demo"})]})}),e.jsx("a",{href:t,target:"_blank",children:e.jsxs("div",{className:"w-full md:w-fit px-2 border-2 border-complementTwo flex text-complementTwo gap-x-2 rounded-3xl justify-center items-center h-full md:py-2",children:[e.jsx("img",{src:p.GithubIcon,alt:"Github logo",className:"h-10 aspect-square"}),e.jsx("span",{children:"See Code "})]})})]})}const x={id:2,title:"Astro Blog",Icon:"astroIcon",links:{code:"https://github.com/nasa14119/Blog_porfolio.git",demo:"https://nasa14119.github.io/Blog_porfolio/"},descriptionText:`
        Being my first project in Astro is not as complex as other projects. However, this page is an example of what I am capable to do in animation, design and in general shows my CSS, HTML skills. Is a blog template that handles new posts automaticly by adding markdown file in post directory. 
    `},f={id:1,title:"Portal Familias",Icon:"reactIcon",links:{code:"https://github.com/nasa14119/PortalFamilias_Redisen-o.git",demo:"https://portalfamilia-nicolas-amaya.onrender.com/"},descriptionText:`
    In my school, there was a page horrible that every student needed to use. I decided to make my own version of it, with only the must-have that I thought of. Maked with react and react-router. Key features being; live changing PDF viewer in the "Reglamento" page. Slider in Home page for theme switch with other important information, and PDF viewer for the schedule.  "Horario" page is special because it is dynamic and base in JSON file. Did I mention that the theme is persistent? There are other features that are better to just see for yourself. In conclusion, is one of the more complex projects so far, I had the idea to present the design to the school but at the end preferred not to.
    `},S=[f,x];function C({state:o,handleClick:t,func:r}){const[s,a]=i.useState(!1);if(o)return e.jsx("nav",{className:"menu-proyects",children:e.jsxs("ul",{className:"relative opacity-0","data-transition":s,onAnimationEnd:()=>{s&&(a(()=>!1),t())},children:[e.jsx("div",{className:"absolute top-5 right-5",onClick:()=>a(()=>!0),children:e.jsx("img",{src:y,alt:"",className:"w-[40px]"})}),S.map(n=>e.jsxs("li",{onClick:()=>{r(n.id-1),t()},children:[e.jsxs("span",{children:["0",n.id]}),e.jsx("span",{children:n.title})]},n.id))]})})}function T({obj:o,func:t}){const[r,s]=i.useState(!1),a=()=>s(c=>!c);return[()=>e.jsx(C,{state:r,titles:o,handleClick:a,func:t}),a]}const u=[f,x];function F(){const o={reactIcon:d.ReactIcon,astroIcon:d.AstroIcon},t=m(l),r=m(h),[s,a]=i.useState(u[0]);i.useEffect(()=>{a(()=>u[t])},[t]);const n=()=>{h.set(!1),l.set(t+1>=2?0:t+1)},c=b=>{l.set(b)},[g,j]=T({obj:s[t],func:c});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"description-header",children:[e.jsx("div",{className:"description-image","data-transition":r,children:e.jsx("img",{src:o[s.Icon],alt:"Icono de Proyecto",className:"md:h-full aspect-square"})}),e.jsxs("div",{className:"md:flex md:flex-col md:justify-start",children:[e.jsxs("h2",{className:"text-complementOne text-[1.5em] py-0 font-h1 md:text-[2em]",children:["0",s.id]}),e.jsx("h1",{className:"text-secundary text-[2em] md:text-[2.5em] leading-7",children:s.title})]}),e.jsx("div",{className:"grid place-content-center cursor-pointer",onClick:j,children:e.jsx("img",{src:d.HamburgerMenuIcon,alt:"",className:"md:h-full aspect-square"})})]}),e.jsxs("main",{className:"md:px-7 my-5",children:[e.jsxs("div",{className:"py-5 text-[1.1em] text-complementTwo cursor-pointer",onClick:n,children:["Go to next ",">>>"]}),e.jsx("p",{children:s.descriptionText})]}),e.jsx(g,{}),e.jsx(P,{code:s.links.code,demo:s.links.demo})]})}export{F as default};
