import Icons from "../Icons/BrandIcons"

export type DescIcon = {
  reactIcon: string,
  astroIcon: string,  
}
export const DescIcon = {
  reactIcon: Icons.ReactIcon,
  astroIcon: Icons.AstroIcon,
};
export interface Props{
  data: DescIcon[keyof DescIcon]
}