import { ReactIcon } from "@assets/Icons/BrandIcons/react-icon.jsx";
import { AstroIcon } from "@assets/Icons/BrandIcons/astro-icon.jsx";
import NextIcon from "@assets/Icons/BrandIcons/next-icon.jsx";
import type { ReactNode } from "react";
export type DescIcon = {
  reactIcon: ReactNode;
  astroIcon: ReactNode;
  nextIcon: ReactNode;
};
export const DescIcon = {
  reactIcon: ReactIcon,
  astroIcon: AstroIcon,
  nextIcon: NextIcon,
};
export interface Props {
  data: DescIcon[keyof DescIcon];
}
