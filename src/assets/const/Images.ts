export type IMAGES = Array<{
  heroImage: () => Record<string, () => Promise<string>>;
  getImages: () => Record<string, () => Promise<string>>;
}>;
export const IMAGES = [
  {
    heroImage: () =>
      import.meta.glob(["public/ExampleImages/PortalFamilia/HeroImage.png"], {
        import: "default",
      }),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/PortalFamilia/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
  {
    heroImage: () =>
      import.meta.glob(["public/ExampleImages/BlogAstro/HeroImage.png"], {
        import: "default",
      }),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/BlogAstro/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
  {
    heroImage: () =>
      import.meta.glob(["public/ExampleImages/Galeria/HeroImage.png"], {
        import: "default",
      }),
    getImages: () =>
      import.meta.glob(
        ["public/ExampleImages/Galeria/*.png", "!**/HeroImage.png"],
        {
          import: "default",
        }
      ),
  },
] as IMAGES;
