import home_es from "./home.json";
import home_en from "./en/home.json";

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
} as const;
export type LanguageOpt = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export function getHomeLocale(currentLocale: string = "es") {
  if (currentLocale === LANGUAGES.ENGLISH) return home_en;
  return home_es;
}
