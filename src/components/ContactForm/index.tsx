import { useEffect, useRef, useState } from "react";
import Cross from "@assets/Icons/cross.svg";
import "./styles.css";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import { useSend } from "./hooks/useSend";
interface Props {
  text: string;
  classStyle: string;
}
export function ContactForm({ text, classStyle }: Props) {
  const inView = useRef(true);
  const [transitions, switchTranState] = useState("true");
  const [ConfirmMessage, setConfirmation] = useState<JSX.Element | null>(null);
  useEffect(() => {
    if (ConfirmMessage !== null) {
      var Timer = setTimeout(() => setConfirmation(null), 2000);
    }
    return () => {
      clearTimeout(Timer);
    };
  }, [ConfirmMessage]);
  const handleTransitons = () => {
    if (inView.current) {
      switchTranState(() => "true");
    } else {
      switchTranState(() => "false");
    }
  };
  const handleClick = () => {
    if (inView.current) {
      switchTranState("get-out-form");
    } else {
      switchTranState("get-in-form");
    }
    inView.current = !inView.current;
  };
  useEffect(() => {
    const handleEsq = (e: KeyboardEvent) => {
      if (!inView.current) return;
      if (e.key === "Escape") handleClick();
    };
    document.addEventListener("keydown", handleEsq);
    return () => {
      document.removeEventListener("keydown", handleEsq);
    };
  }, []);
  const handleSubmit = async (data: Object) => {
    let response = await useSend(data);
    if (response.succes) {
      setConfirmation(() => <Confirmation confirm={true} />);
      return true;
    } else {
      setConfirmation(() => (
        <Confirmation confirm={false} err={response.error} />
      ));
      return false;
    }
  };
  return (
    <>
      <span className={classStyle} onClick={handleClick}>
        {text}
      </span>
      <div className="container-contact" data-inview={transitions}>
        <span className="contact-cross" onClick={handleClick}>
          <img src={Cross.src} alt="cross" loading="lazy" />
        </span>
        <Form handleSubmit={handleSubmit} />
        <div className="flex justify-center">
          {ConfirmMessage !== null ? ConfirmMessage : null}
        </div>
      </div>
      <div
        data-inview={transitions}
        className="background-form"
        onAnimationEnd={handleTransitons}
      ></div>
    </>
  );
}
