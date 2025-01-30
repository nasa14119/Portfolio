import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { projectIndex} from "../../../App/projectsStore";
import { IMAGES } from "@assets/const/Images";
export function useFetchImage(){
    const [loading, setLoading] = useState(true);
    const [data , setData] = useState(null); 
    const $index = useStore(projectIndex); 
    useEffect(() => {
      setLoading(() => true); 
      setData(IMAGES[$index].Background)
      let cleanup = setTimeout(() => {setLoading(false)} , 500);
      return () => clearTimeout(cleanup); 
  }, [$index]); 
    return {isLoading:loading, data}
  }