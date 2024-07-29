import HeroImage from "./HeroUnsplash.png"
export const HeroUnsplash = HeroImage
export const getGalleryImages = async ():Promise<string[]> => {
  const result = Array(11); 
  for(let index = 1; index < 12; index++) {
    let img = await import(`./Unsplash-${index}.png`); 
    result[index-1]= img.default.src
  }
  return result
}