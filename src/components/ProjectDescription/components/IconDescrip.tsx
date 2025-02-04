import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { DescIcon } from "@assets/const/Menu";
import { projectIndex } from "@components/App/projectsStore";
function IconDescrip({ data }: { data: keyof DescIcon }) {
  const [isLoadingIcon, setIconLoading] = useState(true);
  const isChanging = useStore(projectIndex);
  useEffect(() => {
    setIconLoading(true);
    const timeOutId = setTimeout(() => setIconLoading(false), 500);
    return () => clearTimeout(timeOutId);
  }, [isChanging]);
  const Icon = DescIcon[data];
  return (
    <div className="description-image">
      <Icon className="size-full p-2" data-transition={isLoadingIcon} />
    </div>
  );
}

export default IconDescrip;
