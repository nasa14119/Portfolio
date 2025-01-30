import {HeroBlog, getImagesBlog} from "../../../public/ExampleImages/BlogAstro"
import { getImagesPortalFamilia} from "../../../public/ExampleImages/PortalFamilia"
import {HeroUnsplash, getGalleryImages} from "../../../public/ExampleImages/Galeria"
export type IMAGES = Array<{Hero:string, Background: Array<string>}>
export const IMAGES : IMAGES = [
  {
    Hero:"/ExampleImages/PortalFamilia/HeroPortalFamiliaProyect.png", 
    Background: await getImagesPortalFamilia() 
  }, 
  {
    Hero: HeroBlog.src, 
    Background: await getImagesBlog() 
  }, 
  {
    Hero: HeroUnsplash.src, 
    Background: await getGalleryImages()
  }, 
]