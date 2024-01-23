import { useStore } from "@nanostores/react";
import Cross from "../../../../assets/Icons/cross.svg"
import { modal } from "../../../App/projectsStore.js";
import {changePage, getTitles, setModal} from "./utils"
import { useMemo } from "react";
import "./styles.css"
export function ModalProjects({}) {
  const $modal = useStore(modal); 
  const data : Array<{id:number, title: string}> = useMemo(getTitles, []); 
  return (<nav className="menu-proyects"data-isVisible={$modal} onClick={setModal}>
    <ul className="relative">
      <div
        className="absolute top-5 right-5"
        onClick={setModal}
        // onClick={() => setState(() => true)}
      >
        <img src={Cross} alt="" className="w-[40px]" />
      </div>
      {data.map((list: {id: number, title: string}) => (
        <li
          key={list.id}
          onClick={() => { changePage(list.id - 1);}}
        >
          <span>0{list.id}</span>
          <span>{list.title}</span>
        </li>
      ))}
    </ul>
  </nav>);
}