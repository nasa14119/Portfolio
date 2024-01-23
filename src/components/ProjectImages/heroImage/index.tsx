import { useState, useEffect } from "react";
import "./styles.css"
import { useStore } from "@nanostores/react";
import { projectIndex} from "../../App/projectsStore";
import type {IMAGES} from "../../../assets/const/Images"

function heroImage({IMAGES}:{IMAGES:IMAGES}) {
    const index = useStore(projectIndex);
    const [isLoading, setLoading] = useState(true); 
    useEffect(() => {
        setLoading(() => true); 
        let cleanup = setTimeout(() => {setLoading(false)} , 500);
        return () => clearTimeout(cleanup); 
    }, [index]);  
  return (
    <div className="heroImage" data-transition={isLoading}>
      <img src={IMAGES[index].Hero} alt="Hero Image" />
    </div>
  );
}

export default heroImage