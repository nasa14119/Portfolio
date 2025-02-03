import type { DescIcon } from "./const/Menu";
export interface ImportObject {
  id: number;
  title: string;
  Icon: keyof DescIcon;
  links: {
    code: string;
    demo: string;
  };
  descriptionText: string;
}
export type IMPORTS = {
  IMPORTS: ImportObject[];
};
const PortalFamilia: ImportObject = {
  id: 1,
  title: "Portal Familias",
  Icon: "reactIcon",
  links: {
    code: "https://github.com/nasa14119/PortalFamilias_Redisen-o.git",
    demo: "https://portalfamilia-nicolas-amaya.onrender.com/",
  },
  descriptionText: `In my school, there was a page horrible that every student needed to use. I decided to make my own version of it, with only the must-have that I thought of. Maked with react and react-router. Key features being; live changing PDF viewer in the "Reglamento" page. Slider in Home page for theme switch with other important information, and PDF viewer for the schedule.  "Horario" page is special because it is dynamic and base in JSON file. Did I mention that the theme is persistent? There are other features that are better to just see for yourself. In conclusion, is one of the more complex projects so far, I had the idea to present the design to the school but at the end preferred not to.`,
};
const Blog: ImportObject = {
  id: 2,
  title: "Astro Blog",
  Icon: "astroIcon",
  links: {
    code: "https://github.com/nasa14119/Blog_porfolio.git",
    demo: "https://nasa14119.github.io/Blog_porfolio/",
  },
  descriptionText: `
        Being my first project in Astro is not as complex as other projects. However, this page is an example of what I am capable to do in animation, design and in general shows my CSS, HTML skills. Is a blog template that handles new posts automaticly by adding markdown file in post directory. 
    `,
};
const UnsplashGallery: ImportObject = {
  id: 3,
  title: "Image Gallery",
  Icon: "reactIcon",
  links: {
    code: "https://github.com/nasa14119/FullStack-Gallery/",
    demo: "https://fullstack-gallery.onrender.com/",
  },
  descriptionText: `One of my favorite pages. Showcasing full stack skills, MERN stack is a page that lets you save link to images in a good interface, whit inifnite scroll. What you can do whit it is save thouse images in unsplash you whant to save for later proyects`,
};
export const IMPORTS = [Blog, UnsplashGallery];
