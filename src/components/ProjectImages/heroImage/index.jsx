import { useState, useEffect } from "react";
import "./styles.css"
import { useStore } from "@nanostores/react";
import { projectIndex} from "../../App/projectsStore";
import { HeroBlog } from "../../../assets/img/ExampleImages/BlogAstro";
import { HeroPortalFamilia } from "../../../assets/img/ExampleImages/PortalFamilia";
function heroImage() {
    const index = useStore(projectIndex);
    const [isLoading, setLoading] = useState(true); 
    useEffect(() => {
        setLoading(() => true); 
        let cleanup = setTimeout(() => {setLoading(false)} , 500);
        return () => clearTimeout(cleanup); 
    }, [index]);  
    const HeroImage = [HeroPortalFamilia, HeroBlog]; 
  return (
    <div className="heroImage" data-transition={isLoading}>
      <img src={HeroImage[index]} alt="Hero Image" />
    </div>
  );
}

export default heroImage