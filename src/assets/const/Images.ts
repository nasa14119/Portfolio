import {HeroBlog, getImagesBlog} from "../../../public/ExampleImages/BlogAstro"
import {HeroPortalFamilia, getImagesPortalFamilia} from "../../../public/ExampleImages/PortalFamilia"
import {HeroUnsplash, getGalleryImages} from "../../../public/ExampleImages/Galeria"
export type IMAGES = Array<{Hero:string, Background: Array<string>}>
export const IMAGES : IMAGES = [
  {
    Hero:HeroPortalFamilia.src, 
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