import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { projectIndex } from "../../../App/projectsStore";
import { IMAGES } from "@assets/const/Images";
export function useFetchImage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const $index = useStore(projectIndex);
  useEffect(() => {
    let shouldupdate = true;
    setLoading(() => true);
    const fetchImages = async () => {
      const { getImages } = IMAGES[$index];
      const sources = Object.keys(getImages()).map((path) => {
        return new URL(path.replace("public/", ""), import.meta.url).href;
      });
      const images = [];
      sources.forEach((src, i) => {
        images[i] = new Promise((res) => {
          const img = new Image();
          img.src = src;
          img.role = "presentation";
          img.onload = res;
        });
      });
      await Promise.all(images);
      if (shouldupdate) {
        setData(() => sources);
      }
      setLoading(false);
    };
    fetchImages();
    return () => {
      shouldupdate = false;
      setData(null);
    };
  }, [$index]);
  return { isLoading: loading, data };
}
