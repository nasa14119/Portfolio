import { IMPORTS } from "@assets/data"
import { projectIndex } from "../../../App/projectsStore"
import { modal } from "../../../App/projectsStore.js"
export const changePage = (section:number) => {
  projectIndex.set(section)
}
export const setModal = () =>{ 
  modal.set(!modal.get());
} 
type Info = Array<{title: string, id: number}> 
export const getTitles = ():Info =>{
  let resutl:Info= []
  IMPORTS.forEach(v =>{
    resutl.push({title: v.title,id: v.id}) 
  })
  return resutl
} 