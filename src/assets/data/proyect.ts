import type { Projects } from "@assets/data/types";

export default {
  btn: "Avanzar",
  controls: ["Abrir", "Código"],
  content: [
    {
      title: "Portal Familias",
      link: {
        code: "https://github.com/nasa14119/PortalFamilias_Redisen-o.git",
        demo: "https://portalfamilia-nicolas-amaya.onrender.com/",
      },
      icon: "react",
      body: [
        `En mi escuela usábamos una página para visualizar información como calificaciones, pago de colegiaturas, evaluación de profesores, entre otras funciones. Pero la versión que tenían era deplorable, por lo que tuve toda la intención de rediseñarla y presentarla. Al final del día no lo hice por cuestiones de tiempo, pero me encuentro muy satisfecho con el resultado.`,
        `Tiene cosas como visualizador de PDF para revisar el calendario escolar. Un horario basado en un JSON. Tema oscuro y claro, entre otros sistemas que de seguro debes revisar.`,
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
        `Este es un proyecto que desarrollé para la universidad. Para la clase del internet de las cosas, teníamos que hacer un dispositivo de estos. Lo que hicimos fue un ESP32 que tuviera un HTTP Server donde se pudiera consultar toda la información de una planta: temperatura del ambiente, humedad, pH de la planta, entre otros. Además, el chiste es que podamos regar la planta de forma automática.`,
        `Hicimos un servidor local que pudiera almacenar y analizar toda esta información con una base de datos SQLite, al cual, con uso de arquitectura compleja, conecto a un servidor en Vercel con Next JS, el cual se puede visitar en forma de demo.`,
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
        `Esta aplicación fue una de mis primeras excursiones al mundo fullstack. Con el uso del stack Mongo, express, React y node (MERN). Es una aplicación con sistema de autenticación creado por mí con altos niveles de seguridad implementados. Te permite el almacenamiento de imágenes en forma de visualización al estilo de Unsplash con scroll infinito y lazy loading. Tiene temas como persistencia con el uso de cookies y JSON tokens`,
        `Luego usé este mismo proyecto para poder participar en una hackatón de AI en donde, además de esta funcionalidad, podías generar imágenes y almacenarlas en un S3 bucket. Esta herramienta en general es útil para los desarrolladores que constantemente utilizamos enlaces a imágenes para el prototipado de páginas.`,
        `Demo account: "Usuario123" pass: "Contraseña123"`,
      ],
    },
  ],
} satisfies Projects;
