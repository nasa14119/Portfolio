import { ReactIcon } from "@assets/Icons/BrandIcons/react-icon.jsx";
import { AstroIcon } from "@assets/Icons/BrandIcons/astro-icon.jsx";
import type { ReactNode } from "react";
export type DescIcon = {
  reactIcon: ReactNode;
  astroIcon: ReactNode;
};
export const DescIcon = {
  reactIcon: ReactIcon,
  astroIcon: AstroIcon,
};
export interface Props {
  data: DescIcon[keyof DescIcon];
}
