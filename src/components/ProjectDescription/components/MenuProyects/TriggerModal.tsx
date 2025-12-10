import { setModal } from "./utils";
import icon from "@assets/Icons/BrandIcons/menu-hamburger.svg";
export function TriggerModal() {
  return (
    <div
      className="grid place-content-center cursor-pointer"
      onClick={setModal}
    >
      <img
        src={icon.src}
        alt="Menu para escojer un projecto"
        className="md:h-full aspect-square"
      />
    </div>
  );
}
