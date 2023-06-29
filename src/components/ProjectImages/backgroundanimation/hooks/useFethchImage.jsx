import { useEffect, useState } from "react";
import {getImagesBlog} from "../../../../assets/img/ExampleImages/BlogAstro" 
import { getImagesPortalFamilia } from "../../../../assets/img/ExampleImages/PortalFamilia";
import { useStore } from "@nanostores/react";
import { projectIndex} from "../../../App/projectsStore";

const getImagesFunctions = [
    getImagesPortalFamilia, 
    getImagesBlog
  ]
export function useFetchImage(){
    const [loading, setLoading] = useState(true);
    const [data , setData] = useState(null); 
    const $index = useStore(projectIndex); 
    useEffect(() => {
      const fetchImages = async () => {
        setLoading(true); 
        return await getImagesFunctions[$index](); 
      }  
      fetchImages()
        .then((res) => {
          setData(() => res);
        })
        .finally(() => setTimeout(() => setLoading(false), 500)); 
    }, [$index]); 
    return {isLoading:loading, data}
  }