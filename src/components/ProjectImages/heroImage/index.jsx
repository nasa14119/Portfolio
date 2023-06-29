import "./styles.css"
import { useStore } from "@nanostores/react";
import { projectIndex, loader } from "../../App/projectsStore";
import { HeroBlog } from "../../../assets/img/ExampleImages/BlogAstro";
import { HeroPortalFamilia } from "../../../assets/img/ExampleImages/PortalFamilia";
function heroImage() {
    const $loader = useStore(loader); 
    const index = useStore(projectIndex); 
    const HeroImage = [HeroPortalFamilia, HeroBlog]; 
  return (
    <div className="heroImage" data-transition={$loader}>
      <img src={HeroImage[index]} alt="Hero Image" />
    </div>
  );
}

export default heroImage