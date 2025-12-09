export type IMAGES = Array<{
  heroImage: string;
  getImages: () => string[];
}>;
const parseURL = (glob: any) => () => {
  const keys = Object.keys(glob()).map((key) => key.replace("public/", ""));
  const urls = keys.map((key) => new URL(key, import.meta.url).href);
  return urls;
};
const heroImageURL = (path: string) => new URL(path, import.meta.url).href;
export const IMAGES: IMAGES = [
  {
    heroImage: heroImageURL("/ExampleImages/PortalFamilia/HeroImage.png"),
    getImages: parseURL(() =>
      import.meta.glob([
        "public/ExampleImages/PortalFamilia/*.png",
        "!**/HeroImage.png",
      ])
    ),
  },
  {
    heroImage: heroImageURL("/ExampleImages/Iot/HeroIot.png"),
    getImages: parseURL(() =>
      import.meta.glob(["public/ExampleImages/Iot/*.png", "!**/HeroIot.png"])
    ),
  },
  {
    heroImage: heroImageURL("/ExampleImages/Galeria/HeroImage.png"),
    getImages: parseURL(() =>
      import.meta.glob([
        "public/ExampleImages/Galeria/*.png",
        "!**/HeroImage.png",
      ])
    ),
  },
];
