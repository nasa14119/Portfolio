import React, {Component, FunctionComponentElement, ReactComponentElement, useEffect, useRef, useState} from 'react'
import Cross from "@assets/Icons/cross.svg"
import "./styles.css"
import Confirmation from './components/Confirmation';
import Form from './components/Form'
import {useSend} from './hooks/useSend';
import type { JSXTransformFn } from 'astro';
interface Props {
  text: string, 
  classStyle :string
}
export function ContactForm( {text, classStyle } : Props){
  const inView = useRef(false); 
  const [transitions, switchTranState] = useState("false");
  const [ConfirmMessage, setConfirmation] = useState<JSX.Element | null>(null); 
  useEffect(()=> {
    if (ConfirmMessage !== null){
      var Timer = setTimeout(() => setConfirmation(null), 2000); 
    }  
    return ()=>{
      clearTimeout(Timer); 
    }
  }, [ConfirmMessage])
  const handleTransitons = () => {
    if(inView.current){
      switchTranState(()=> "true"); 
    }else{
      switchTranState(()=> "false"); 
    }
  }
  const handleClick = () =>  {
    if(inView.current){
      switchTranState("get-out-form"); 
    }else{
      switchTranState("get-in-form"); 
    }
    inView.current = !inView.current
  }; 
  const handleSubmit = async (data : Object) => {
    let response = await useSend(data); 
    if(response.succes){
      setConfirmation(() => <Confirmation confirm={true}/>); 
    }else{
      setConfirmation(() => <Confirmation confirm={false} err={response.error}/>); 
    }
  }
      return (
        <>
          <span className={classStyle} onClick={handleClick}>
            {text}
          </span>
          <div className="container-contact" data-inview={transitions}>
            <span className="contact-cross" onClick={handleClick}>
              <img src={Cross} alt="cross" />
            </span>
            <Form handleSubmit={handleSubmit}/>
            <div className='flex justify-center'>
              {
                ConfirmMessage !== null ? 
                  ConfirmMessage
                  : null 
              }
            </div>
          </div>
          <div
            data-inview={transitions}
            className="background-form"
            onAnimationEnd={handleTransitons}
            >
            </div>
        </>
      );
}