import { useRef, useState } from "react"
import "./styles.css"
import Cross from "../../../../assets/Icons/cross.svg"
function MenuProyects({titles, state, handleClick, func}) {
    const [transition, setState] = useState(false); 
    if(state) return (
      <nav className="menu-proyects">
        <ul
          className="relative opacity-0"
          data-transition={transition}
          onAnimationEnd={() => {
            if(transition){
                setState((prev) => false);
                handleClick();
            }
          }}
        >
          <div
            className="absolute top-5 right-5"
            onClick={() => setState(prev => true)}
          >
            <img src={Cross} alt="" className="w-[40px]" />
          </div>
          {titles.map((list) => (
            <li
              key={list.id}
              onClick={() => {
                func(list.id - 1);
                handleClick();
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
export function useMenu({obj, func}){
    const [state, setState] = useState(false); 
    const handleClick = () => setState(prev => !prev); 
    const Element = () => <MenuProyects state={state} titles={obj} handleClick={handleClick} func={func}/>
    return [ Element , handleClick]; 
}