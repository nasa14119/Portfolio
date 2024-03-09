import { useStore } from "@nanostores/react";
import { modal } from "../../../App/projectsStore.js";
import {changePage, getTitles, setModal} from "./utils"
import { useMemo } from "react";
import "./styles.css"
export function ModalProjects({}) {
  const $modal = useStore(modal); 
  const data : Array<{id:number, title: string}> = useMemo(getTitles, []); 
  return (
    <nav className="menu-proyects" data-isVisible={$modal} onClick={setModal}>
      <ul className="relative" onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-5 right-5 text-complementOne h-10 w-10 hidden md:block"
          onClick={(e) => {
            e.stopPropagation();
            setModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        {data.map((list: { id: number; title: string }) => (
          <li
            key={list.id}
            onClick={() => {
              changePage(list.id - 1);
              setModal();
            }}
          >
            <span>0{list.id}</span>
            <span>{list.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}