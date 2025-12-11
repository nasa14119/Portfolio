import { useRef, type ComponentProps } from "react";

export function NextBtn({
  onClick,
  text,
}: ComponentProps<"button"> & { text: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      className="w-full grid  md:justify-start mb-2 md:my-5 md:w-fit"
      onClick={(e) => {
        if (!ref.current) return;
        ref.current.style.translate = "0 0";
        setTimeout(
          () => ref.current && (ref.current.style.translate = "4px -4px"),
          200
        );
        onClick && onClick(e);
      }}
      onMouseEnter={() => {
        if (!ref.current) return;
        ref.current.style.translate = "4px -4px";
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.translate = "0 0";
      }}
    >
      <span
        className="w-full md:w-auto text-sm md:text-[1.1em] cursor-default bg-complementTwo px-4 py-1 rounded-3xl transition-transform relative col-start-1 col-end-1 row-start-1 row-end-1 md:duration-300 duration-200 select-none md:translate-0 translate-x-[4px] translate-y-[-4px]"
        ref={ref}
      >
        {text}
      </span>
      <span className="col-start-1 col-end-1 row-start-1 row-end-1 size-full  rounded-3xl bg-complementOne"></span>
    </button>
  );
}
