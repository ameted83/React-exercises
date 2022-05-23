import { useContext } from "react";

import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: { CURRENT_LANGUAGE: "Language is:" },
  it: { CURRENT_LANGUAGE: "La lingua è:" },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {Strings[language].CURRENT_LANGUAGE} {language}
    </div>
  );
}
