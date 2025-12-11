import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { projectIndex } from "@components/App/projectsStore";
import { Icons } from "@icons/jsx";
function IconDescrip({ data }: { data: keyof typeof Icons }) {
  const [isLoadingIcon, setIconLoading] = useState(true);
  const isChanging = useStore(projectIndex);
  useEffect(() => {
    setIconLoading(true);
    const timeOutId = setTimeout(() => setIconLoading(false), 500);
    return () => clearTimeout(timeOutId);
  }, [isChanging]);
  const Icon = Icons[data];
  return (
    <div className="description-image">
      <Icon className="size-full p-2" data-transition={isLoadingIcon} />
    </div>
  );
}

export default IconDescrip;
