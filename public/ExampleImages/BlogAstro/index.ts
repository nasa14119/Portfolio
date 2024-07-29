import HeroImage from "./HeroBlogAstro.png"

export const getImagesBlog = async ():Promise<string[]> => {
    const result = Array(11); 
    for(let index = 1; index < 12; index++) {
      let img = await import(`./BlogAstro-${index}.png`); 
      result[index-1]= img.default.src
    }
    return result
  }
export const HeroBlog = HeroImage; 