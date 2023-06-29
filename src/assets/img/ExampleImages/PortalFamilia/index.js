import HeroImage from "./HeroPortalFamilia.png"

export const getImagesPortalFamilia = async () => {
  const response = Array(12);
  response[0] = await import("./HeroPortalFamilia.png").then((r) => r.default);
  response[1] = await import("./PortalFamilia-1.png").then((r) => r.default);
  response[2] = await import("./PortalFamilia-2.png").then((r) => r.default);
  response[3] = await import("./PortalFamilia-3.png").then((r) => r.default);
  response[4] = await import("./PortalFamilia-4.png").then((r) => r.default);
  response[5] = await import("./PortalFamilia-5.png").then((r) => r.default);
  response[6] = await import("./PortalFamilia-6.png").then((r) => r.default);
  response[7] = await import("./PortalFamilia-7.png").then((r) => r.default);
  response[8] = await import("./PortalFamilia-8.png").then((r) => r.default);
  response[9] = await import("./PortalFamilia-9.png").then((r) => r.default);
  response[10] = await import("./PortalFamilia-10.png").then((r) => r.default);
  response[11] = await import("./PortalFamilia-11.png").then((r) => r.default);
  return response;
};
export const HeroPortalFamilia = HeroImage; 