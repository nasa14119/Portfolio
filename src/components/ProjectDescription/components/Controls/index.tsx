import { controlIcons } from "../../../../assets/Icons/BrandIcons";

interface Links{
  demo : string,
  code : string
}
function Controls({demo, code} : Links) {
  return (
    <footer className="box-border flex justify-evenly md:justify-center gap-x-10 h-[15%] md:h-fit mt-auto mb-5">
      <a href={demo} target="_blank">
        <div className="w-full md:w-fit px-2 border-2 border-complementTwo flex text-complementTwo rounded-3xl justify-center items-center h-full md:py-2">
          <img src={controlIcons.PopupIcon} alt="Pop up" className="h-11 aspect-square" /> 
         <span>Live Demo</span>
        </div>
      </a>
      <a href={code} target="_blank">
        <div className="w-full md:w-fit px-2 border-2 border-complementTwo flex text-complementTwo gap-x-2 rounded-3xl justify-center items-center h-full md:py-2">
          <img src={controlIcons.GithubIcon} alt="Github logo" className="h-10 aspect-square" />
          <span>See Code </span>
        </div>
      </a>
    </footer>
  );
}

export default Controls