import "./styles.css";
import BrandIcons from "../../assets/Icons/BrandIcons";
import Controls from "./components/Controls";
import { useEffect, useState } from "react";
import { useMenu } from "./components/MenuProyects";
import { useStore } from "@nanostores/react";
import { projectIndex, loader } from "../App/projectsStore";
import { Blog, PortalFamilia } from "./components/data";
const IMPORTS = [
  PortalFamilia, 
  Blog
]
function ProyectCarrusel() {
  const DescIcon = {
    reactIcon: BrandIcons.ReactIcon,
    astroIcon: BrandIcons.AstroIcon,
  };
  const $index = useStore(projectIndex); 
  const $loader = useStore(loader); 
  const [data, setData] = useState(IMPORTS[0]); 
  useEffect(()=> {
    setData(() => IMPORTS[$index]); 
  }, [$index])
  const handleSwitch = () => {
    loader.set(false); 
    projectIndex.set($index + 1 >= 2 ? 0 : $index + 1); 
  };
  const handleClick = (selection) => {
    projectIndex.set(selection);
  };
  const [MenuProyects, handleClickMenu] = useMenu({
    obj: data[$index],
    func: handleClick,
  });
  return (
      <>
        <header className="description-header">
          <div
            className="description-image"
            data-transition={$loader}
          >
            <img
              src={DescIcon[data.Icon]}
              alt="Icono de Proyecto"
              className="md:h-full aspect-square"
            />
          </div>
          <div className="md:flex md:flex-col md:justify-start">
            <h2 className="text-complementOne text-[1.5em] py-0 font-h1 md:text-[2em]">
              0{data.id}
            </h2>
            <h1 className="text-secundary text-[2em] md:text-[2.5em] leading-7">
              {data.title}
            </h1>
          </div>
          <div
            className="grid place-content-center cursor-pointer"
            onClick={handleClickMenu}
          >
            <img
              src={BrandIcons.HamburgerMenuIcon}
              alt=""
              className="md:h-full aspect-square"
            />
          </div>
        </header>
        <main className="md:px-7 my-5">
          <div
            className="py-5 text-[1.1em] text-complementTwo cursor-pointer"
            onClick={handleSwitch}
          >
            Go to next {">>>"}
          </div>
          <p>{data.descriptionText}</p>
        </main>
        <MenuProyects />
        <Controls code={data.links.code} demo={data.links.demo} />
      </>
  );
}

export default ProyectCarrusel;
