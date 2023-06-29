import { useEffect, useState } from "react";
import "./styles.css"
import {getImagesBlog} from "../../../assets/img/ExampleImages/BlogAstro" 
import { getImagesPortalFamilia } from "../../../assets/img/ExampleImages/PortalFamilia";
import { useStore } from "@nanostores/react";
import { projectIndex , loader} from "../../App/projectsStore";
function BackgrounImageAnimation() {
  const $index = useStore(projectIndex); 
  const $loder = useStore(loader); 
  let getImages = [
    getImagesPortalFamilia, 
    getImagesBlog
  ]
  const [loading, setLoading] = useState(false); 
  const [data , setData] = useState(null); 
  useEffect(() => {
    const fetchImages = async () => {
      await getImages[$index]().then((r) =>{
        setData(() => r); 
      })
    }
    fetchImages();
    let loading = setTimeout(() => loader.set(true), 750); 
    return () =>{
      clearTimeout(loading);
    } 
  }, [$index]); 
  useEffect(() => {
    setLoading(!$loder); 
  }, [$loder])
  const Images = ({row}) => {
    if(!data) return; 
    return (
      <div className={`images-conteiner-row-${row}`} >
        {data.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Images of the proyect"
              className="animation-load-image"
            />
        ))}
      </div>
    );
  }
  const PlaceHolder = () => {
    return (
      <div className="loader-conteiner">
        {Array(70)
          .fill(null)
          .map((e, i) => (
            <div
              key={i}
            ></div>
          ))}
      </div>
    );}
  if(!loading){return (
    <div className="overflow-hidden absolute inset-0 -z-50">
      <div className="conteiner-backgroundImage">
        <Images row={1}/>
        <Images row={2}/>
        <Images row={3}/>
      </div>
    </div>
  );}else{
    return (
      <div className="overflow-hidden absolute inset-0 -z-50">
        <div className="conteiner-backgroundImage">
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </div>
      </div>
    );
  }
}

export default BackgrounImageAnimation