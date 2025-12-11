import { AstroIcon } from "./astro-icon.jsx";
import { ReactIcon } from "./react-icon.jsx";
import { NextIcon } from "./next-icon.jsx";
import { ArrowDown, Discord, Dots, Email, Github } from "./dump.jsx";
type Icons = Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;
export const Icons = {
  next: NextIcon,
  react: ReactIcon,
  astro: AstroIcon,
  arrowDown: ArrowDown,
  discord: Discord,
  dots: Dots,
  email: Email,
  github: Github,
} satisfies Icons;
export type KeyIcons = keyof typeof Icons;
