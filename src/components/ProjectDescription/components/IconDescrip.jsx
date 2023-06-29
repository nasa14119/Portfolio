import { useState , useEffect} from 'react'
import { projectIndex } from '../../App/projectsStore';
import { useStore } from '@nanostores/react';
import BrandIcons from '../../../assets/Icons/BrandIcons';
const DescIcon = {
    reactIcon: BrandIcons.ReactIcon,
    astroIcon: BrandIcons.AstroIcon,
};
function IconDescrip({data}) {
    const $index = useStore(projectIndex); 
    const [isLoadingIcon, setIconLoading] = useState(true); 
    useEffect(() => {
        setIconLoading(() => true); 
        let cleanup = setTimeout(() => {setIconLoading(false)} , 500);
        return () => clearTimeout(cleanup); 
    }, [$index]); 
  return (
    <div className="description-image" data-transition={isLoadingIcon}>
      <img
        src={DescIcon[data]}
        alt="Icono de Proyecto"
        className="md:h-full aspect-square"
      />
    </div>
  );
}

export default IconDescrip
