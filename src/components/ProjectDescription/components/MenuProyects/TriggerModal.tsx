import Icon from "@assets/Icons/BrandIcons/menu-hamburger.svg"
import { setModal } from "./utils"
export function TriggerModal() {
  return (
    <div
    className="grid place-content-center cursor-pointer"
    onClick={setModal}
  >
    <img
      src={Icon}
      alt="Menu para escojer un projecto"
      className="md:h-full aspect-square"
    />
  </div>
  )
}
