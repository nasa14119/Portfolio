import type { Projects } from "@assets/data/types";

export default {
  btn: "Go next",
  controls: ["Live Demo", "See code"],
  content: [
    {
      title: "Portal Familias",
      link: {
        code: "https://github.com/nasa14119/PortalFamilias_Redisen-o.git",
        demo: "https://portalfamilia-nicolas-amaya.onrender.com/",
      },
      icon: "react",
      body: [
        `In my school, there was a page horrible that every student needed to use. I decided to make my own version of it, with only the must-have that I thought of. Maked with react and react-router. Key features being; live changing PDF viewer in the "Reglamento" page. Slider in Home page for theme switch with other important information, and PDF viewer for the schedule.  "Horario" page is special because it is dynamic and base in JSON file. Did I mention that the theme is persistent? There are other features that are better to just see for yourself. In conclusion, is one of the more complex projects so far, I had the idea to present the design to the school but at the end preferred not to.`,
      ],
    },
    {
      title: "Realtime app",
      link: {
        code: "https://github.com/nasa14119/iot-front",
        demo: "https://iot-front.nicolas-amaya.com",
      },
      icon: "next",
      body: [
        `It is an application built with Next.js that provides real-time information capabilities. The app is designed to serve as a bridge between an ESP32 monitoring device, which transmits data over the local network through various endpoints. It continuously checks this data and performs ongoing analysis. In addition, of this information it can water plants and perform many other tasks that are best discovered by exploring the app yourself.`,
      ],
    },
    {
      title: "Fullstack App",
      link: {
        code: "https://github.com/nasa14119/FullStack-Gallery/",
        demo: "https://fullstack-gallery.onrender.com/",
      },
      icon: "react",
      body: [
        `One of my favorite pages. Showcasing full stack skills. Using MERN stack, this page let's you save link to images in a good interface, with inifnite scroll. Usefull for devlopers who constanly are looking for good looking images link for prototyping, later I use this interface to compeate in a AI hackaton that let you create images and store them in a S3 bucket.`,
      ],
    },
  ],
} satisfies Projects;
