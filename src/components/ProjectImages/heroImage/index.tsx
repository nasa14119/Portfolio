import { useState, useEffect } from "react";
import "./styles.css";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../../App/projectsStore";
import { IMAGES } from "@assets/const/Images.ts";
// import type { IMAGES } from "@assets/const/Images";

function heroImage() {
  const $index = useStore(projectIndex);
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    setLoading(() => true);
    const { heroImage } = IMAGES[$index];
    if (!heroImage) return;
    const preload = () => {
      setLoading(true);
      const src = heroImage();
      new Promise<string>((res) => {
        const img = new Image();
        img.onload = () => res(src);
        img.src = src;
      })
        .then((v) => setSrc(v))
        .finally(() => setLoading(false));
    };
    preload();
    return () => {
      setLoading(true);
    };
  }, [$index]);
  return (
    <div className="heroImage">
      {isLoading && (
        <span className="loader z-50 bg-[#a9a9a9]/30 animate-duration-[11s] animate-pulse"></span>
      )}
      {!isLoading && (
        <img src={src} alt="Hero Image" data-transition={isLoading} />
      )}
    </div>
  );
}

export default heroImage;
