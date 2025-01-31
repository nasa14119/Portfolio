export type IMAGES = Array<{
  heroImage: () => string;
  getImages: () => Record<string, () => Promise<string>>;
}>;
const parseData = (glob: () => any) => () => {
  const key = Object.keys(glob())[0];
  const url = new URL(key.replace("public/", ""), import.meta.url);
  return url.href;
};
export const IMAGES = [
  {
    heroImage: parseData(() =>
      import.meta.glob(["public/ExampleImages/PortalFamilia/HeroImage.png"], {
        import: "default",
        eager: true,
      })
    ),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/PortalFamilia/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
  {
    heroImage: parseData(() =>
      import.meta.glob(["public/ExampleImages/BlogAstro/HeroImage.png"], {
        import: "default",
        eager: true,
      })
    ),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/BlogAstro/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
  {
    heroImage: parseData(() =>
      import.meta.glob(["public/ExampleImages/Galeria/HeroImage.png"], {
        eager: true,
        import: "default",
      })
    ),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/Galeria/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
] as IMAGES;
