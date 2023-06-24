import "./styles.css"; 
import BackgrounImageAnimation from "./components/backgroundanimation"
import BrandIcons from "./assets/BrandIcons"
import Controls from "./components/Controls";
import PortalFamilia from "./assets/PortalFamilia";
import BlogAstro from "./assets/BlogAstro";
import { useEffect, useState } from "react";
import { useMenu } from "./components/MenuProyects";
const Proyects = [
  PortalFamilia, 
  BlogAstro
]
function ProyectCarrusel() {
  const DescIcon = {
    reactIcon : BrandIcons.ReactIcon , 
    astroIcon: BrandIcons.AstroIcon , 
  }
  const [index, setIndex] = useState(0); 
  const [data, setData] = useState(Proyects[0]);
  const [loader, setLoad] = useState(false); 
  const [MenuProyects, handleClickMenu] = useMenu({obj:Proyects, func:setIndex}); 
  const handleSwitch = () => {
    setIndex(prev => prev + 1 >= 2 ? 0: prev + 1); 
  }
  useEffect(()=> {
    setLoad(() => false); 
    setData(prev => Proyects[index]); 
  }, [index]); 
  return (
    <>
      <main className="md:grid md:grid-cols-2 md:grid-flow-row w-full md:h-fit p-5 gap-x-5 flex flex-col gap-y-5 relative">
        <section className="conteiner-proyectCarrusel">
          <BackgrounImageAnimation data={data.images} />
          <div className="heroImage" 
          data-transition={loader}
          >
            <img
              src={data.HeroImage}
              alt="Hero Image"
              className="h-[90%] rounded-3xl"
            />
          </div>
        </section>
        <article className="md:h-screen w-full min-h-[75vh] flex flex-col px-2">
          <header className="grid description-header">
            <div 
            className="description-image" 
            data-transition={loader}
            onAnimationEnd={() => setLoad(prev => {
              if(!prev){
                return true; 
              }
            })}>
              <img
                src={DescIcon[data.Icon]}
                alt="React Icon"
                className="h-full mx-auto"
              />
            </div>
            <div className="md:flex md:flex-col md:justify-start px-2">
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
                className="h-[50px]"
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
            <p>{data.desc}</p>
          </main>
          <MenuProyects />
          <Controls code={data.links.code} demo={data.links.demo} />
        </article>
      </main>
    </>
  );
}

export default ProyectCarrusel