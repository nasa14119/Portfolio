import "./styles.css";
import Controls from "./components/Controls";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../App/projectsStore";
import IconDescrip from "./components/IconDescrip";
import type { IMPORTS, ImportObject } from "../../assets/data";
import { TriggerModal } from "./components/MenuProyects/TriggerModal";
import { ModalProjects } from "./components/MenuProyects/Modal";
function ProyectCarrusel({IMPORTS}:IMPORTS){
  const $index = useStore(projectIndex); 
  const [data, setData]:[data:ImportObject, setData: Function] = useState(IMPORTS[0]); 
  useEffect(()=> {
    setData(() : ImportObject => IMPORTS[$index]); 
  }, [$index])
  const handleSwitch = () => {
    const newIndex = $index + 1 >= IMPORTS.length ? 0 : $index + 1
    projectIndex.set(newIndex); 
  };
  return (
      <>
        <header className="description-header">
          <IconDescrip data={data.Icon} />
          <div className="flex flex-col md:justify-start">
            <h2 className="text-complementOne text-[1.5em] py-0 font-h1 md:text-[2em]">
              0{data.id}
            </h2>
            <h1 className="text-secundary text-[1.2rem] leading-4 md:text-[2em] md:leading-[1.5rem]">
              {data.title}
            </h1>
          </div>
          <TriggerModal/> 
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
        <Controls code={data.links.code} demo={data.links.demo} />
        <ModalProjects />
      </>
  );
}

export default ProyectCarrusel;
