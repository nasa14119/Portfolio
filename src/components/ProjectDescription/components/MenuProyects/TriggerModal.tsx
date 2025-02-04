import { setModal } from "./utils";
export function TriggerModal() {
  return (
    <div
      className="grid place-content-center cursor-pointer"
      onClick={setModal}
    >
      <img
        src={"icons/menu-hamburger.svg"}
        alt="Menu para escojer un projecto"
        className="md:h-full aspect-square"
      />
    </div>
  );
}
