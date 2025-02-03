import { useState, useEffect } from "react";
import "./styles.css";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../../App/projectsStore";
import { IMAGES } from "@assets/const/Images.ts";

function heroImage() {
  const $index = useStore(projectIndex);
  const [isLoading, setLoading] = useState(false);
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    let isShouldChage = true;
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
        .then((v) => {
          if (isShouldChage) {
            setSrc(v);
            return;
          }
          setLoading(true);
        })
        .finally(() => setLoading(false));
    };
    preload();
    return () => {
      isShouldChage = false;
      setLoading(true);
    };
  }, [$index]);
  return (
    <div className="heroImage">
      {isLoading && (
        <span className="loader z-50 bg-[#a9a9a9]/30 animate-duration-[11s] animate-pulse"></span>
      )}
      {!isLoading && src && (
        <img src={src} alt="Hero Image" data-transition={isLoading} />
      )}
    </div>
  );
}

export default heroImage;
