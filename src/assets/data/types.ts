import type { KeyIcons } from "@assets/icons/jsx";
export type Projects = {
  controls: string[];
  btn: string;
  content: Content;
};
export type Content = {
  title: string;
  link: {
    code: string;
    demo: string;
  };
  icon: KeyIcons;
  body: string[];
}[];
