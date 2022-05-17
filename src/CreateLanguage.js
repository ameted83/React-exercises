import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";

const Strings = {
  en: { CURRENT_LANGUAGE: "Language is:" },
  it: { CURRENT_LANGUAGE: "La lingua è:" },
};

export class CreateLanguage extends React.Component {
  render() {
    return (
      <div>
        <DisplayLanguage.Consumer>
          {(language) => {
            return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>;
          }}
        </DisplayLanguage.Consumer>
        ;
      </div>
    );
  }
}
