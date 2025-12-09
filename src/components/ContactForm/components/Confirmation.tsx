import React, { useState } from "react";
interface Props {
  confirm: boolean;
  err?: string;
}
function Confirmation({ confirm, err }: Props) {
  const [state, setState] = useState(true);
  return (
    <div
      className={`
        confimation
        fixed w-3/4 md:w-1/2 h-20 bottom-5 inset-x-auto flex justify-center items-center
        ${confirm ? "bg-[#6fe26f]" : "bg-[#db4c4c]"}
      `}
      data-state={state}
      onAnimationEnd={() => setState((prev) => false)}
    >
      {confirm ? (
        <div className="text-primary font-title">Message send succes</div>
      ) : (
        <div className="flex flex-col text-center">
          <span className="text-primary font-title text-lg">
            Error Sending message
          </span>
          <span>{err && <span>{err}</span>}</span>
        </div>
      )}
    </div>
  );
}

export default Confirmation;
