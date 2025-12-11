import home_es from "./home.json";
import home_en from "./en/home.json";
import poryects_es from "./proyect";
import poryects_en from "./en/proyect";
import type { Projects } from "@assets/data/types";

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
} as const;
export type LanguageOpt = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export function getHomeLocale(currentLocale: string = "es") {
  if (currentLocale === LANGUAGES.ENGLISH) return home_en;
  return home_es;
}
export function getProyectsLocale(currentLocale: string = "es"): Projects {
  if (currentLocale === LANGUAGES.ENGLISH) return poryects_en;
  return poryects_es;
}
