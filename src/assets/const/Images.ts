export type IMAGES = Array<{
  heroImage: () => string;
  getImages: () => Record<string, () => Promise<string>>;
}>;
export const IMAGES = [
  {
    heroImage: () => "/ExampleImages/PortalFamilia/HeroImage.png",
    getImages: () => [
      "/ExampleImages/PortalFamilia/HeroImage.png",
      "/ExampleImages/PortalFamilia/HeroImage.png",
    ],
  },
  {
    heroImage: () => "/ExampleImages/PortalFamilia/HeroImage.png",
    getImages: () => [
      "/ExampleImages/PortalFamilia/HeroImage.png",
      "/ExampleImages/PortalFamilia/HeroImage.png",
    ],
  },
  {
    heroImage: () => "/ExampleImages/PortalFamilia/HeroImage.png",
    getImages: () => [
      "/ExampleImages/PortalFamilia/HeroImage.png",
      "/ExampleImages/PortalFamilia/HeroImage.png",
    ],
  },
];
// const parseData = (glob: () => any) => () => {
//   return "/ExampleImages/PortalFamilia/HeroImage.png";
//   const key = Object.keys(glob())[0];
//   const url = new URL(key.replace("public/", ""), import.meta.url);
//   return url.href;
// };
// export const IMAGES = [
//   {
//     heroImage: parseData(() =>
//       import.meta.glob(["public/ExampleImages/PortalFamilia/HeroImage.png"], {
//         import: "default",
//         eager: true,
//       })
//     ),
//     getImages: () =>
//       import.meta.glob(
//         ["public/ExampleImages/PortalFamilia/*.png", "!**/HeroImage.png"],
//         {
//           import: "default",
//         }
//       ),
//   },
//   {
//     heroImage: parseData(() =>
//       import.meta.glob(["public/ExampleImages/BlogAstro/HeroImage.png"], {
//         import: "default",
//         eager: true,
//       })
//     ),
//     getImages: () =>
//       import.meta.glob(
//         ["public/ExampleImages/BlogAstro/*.png", "!**/HeroImage.png"],
//         {
//           import: "default",
//         }
//       ),
//   },
//   {
//     heroImage: parseData(() =>
//       import.meta.glob(["public/ExampleImages/Galeria/HeroImage.png"], {
//         eager: true,
//         import: "default",
//       })
//     ),
//     getImages: () =>
//       import.meta.glob(
//         ["public/ExampleImages/Galeria/*.png", "!**/HeroImage.png"],
//         {
//           import: "default",
//         }
//       ),
//   },
// ] as IMAGES;
