import "./styles.css";
import Controls from "./components/Controls";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../App/projectsStore";
import IconDescrip from "./components/IconDescrip";
import { TriggerModal } from "./components/MenuProyects/TriggerModal";
import { ModalProjects } from "./components/MenuProyects/Modal";
import { NextBtn } from "@components/ProjectDescription/components/NextBtn";
import { getProyectsLocale } from "@assets/data/index";
function ProyectCarrusel({ locale = "es" }: { locale?: string }) {
  const { content, controls, btn } = getProyectsLocale(locale);
  const $index = useStore(projectIndex);
  const [data, setData] = useState(content[0]);
  useEffect(() => {
    setData(() => content[$index]);
  }, [$index]);

  const handleSwitch = () => {
    const newIndex = $index + 1 >= content.length ? 0 : $index + 1;
    projectIndex.set(newIndex);
  };
  return (
    <>
      <header className="description-header">
        <IconDescrip data={data.icon} />
        <div className="flex flex-col justify-center md:justify-start lg:justify-center pl-2 ">
          <h2 className="text-complementOne text-[1.5em] py-0 font-title md:text-[2em] leading-none">
            0{$index + 1}
          </h2>
          <h1 className="text-secundary text-[1.2rem] leading-4 md:text-[2em] md:leading-[1.5rem]">
            {data.title}
          </h1>
        </div>
        <TriggerModal />
      </header>
      <main className="md:px-7 md:my-5">
        <NextBtn onClick={handleSwitch} text={btn} />
        {data.body.map((text, i) => (
          <p className="py-2" key={i}>
            {text}
          </p>
        ))}
      </main>
      <Controls items={controls} code={data.link.code} demo={data.link.demo} />
      <ModalProjects />
    </>
  );
}
export default ProyectCarrusel;
