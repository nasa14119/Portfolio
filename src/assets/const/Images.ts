import {HeroBlog, getImagesBlog} from "../img/ExampleImages/BlogAstro"
import {HeroPortalFamilia, getImagesPortalFamilia} from "../img/ExampleImages/PortalFamilia"
import {HeroUnsplash, getGalleryImages} from "../img/ExampleImages/Galeria"
export type IMAGES = Array<{Hero:string, Background: Array<string>}>
export const IMAGES : IMAGES = [
  {
    Hero: HeroPortalFamilia, 
    Background: await getImagesPortalFamilia() 
  }, 
  {
    Hero: HeroBlog, 
    Background: await getImagesBlog() 
  }, 
  {
    Hero: HeroUnsplash, 
    Background: await getGalleryImages()
  }, 
]