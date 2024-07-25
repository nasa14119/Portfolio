import HeroImage from "./HeroPortalFamiliaProyect.png"

export const getImagesPortalFamilia = async ():Promise<string[]> => {
  const result = Array(11); 
  for(let index = 1; index < 12; index++) {
    let img = await import(`./PortalFamilia-${index}.png`); 
    result[index-1]= img.default.src
  }
  return result
}
export const HeroPortalFamilia = HeroImage; 