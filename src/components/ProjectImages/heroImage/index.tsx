import { useState, useEffect } from "react";
import "./styles.css";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../../App/projectsStore";
import { IMAGES } from "@assets/const/Images.ts";
// import type { IMAGES } from "@assets/const/Images";

function heroImage() {
  const $index = useStore(projectIndex);
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState("");
  useEffect(() => {
    setLoading(() => true);
    const { heroImage } = IMAGES[$index];
    if (!heroImage) return;
    const preload = new Promise<string>((res) => {
      const src = Object.keys(heroImage()).map(
        (path) => new URL(path.replace("public/", ""), import.meta.url).href
      )[0];
      const img = new Image();
      img.src = src;
      img.onload = () => res(src);
    });
    preload.then((src) => setSrc(src)).finally(() => setLoading(false));
  }, [$index]);
  return (
    <div className="heroImage" data-transition={isLoading}>
      <img src={src} alt="Hero Image" />
    </div>
  );
}

export default heroImage;
