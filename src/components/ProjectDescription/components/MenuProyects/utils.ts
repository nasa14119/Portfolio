import { IMPORTS } from "@assets/data";
import { projectIndex } from "../../../App/projectsStore";
import { modal } from "../../../App/projectsStore.js";
export const changePage = (section: number) => {
  projectIndex.set(section);
};
export const setModal = () => {
  if (modal.get() === "idle") return modal.set("true");
  modal.set(modal.get() === "true" ? "false" : "true");
};
type Info = Array<{ title: string; id: number }>;
export const getTitles = (): Info => {
  let resutl: Info = [];
  IMPORTS.forEach((v) => {
    resutl.push({ title: v.title, id: v.id });
  });
  return resutl;
};
