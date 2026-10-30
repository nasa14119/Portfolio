import { AstroIcon } from "./astro-icon.jsx";
import { ReactIcon } from "./react-icon.jsx";
import { NextIcon } from "./next-icon.jsx";
import { ArrowDown, Linkedin, Dots, Email, Github } from "./dump.jsx";
type Icons = Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;
export const Icons = {
  next: NextIcon,
  react: ReactIcon,
  astro: AstroIcon,
  arrowDown: ArrowDown,
  dots: Dots,
  email: Email,
  github: Github,
  linkedin: Linkedin,
} satisfies Icons;
export type KeyIcons = keyof typeof Icons;
