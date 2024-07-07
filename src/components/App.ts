import { LanguageSelector } from "./LanguageSelector";
import { LanguageLoader } from "./LanguageLoader";
import { TextEncryptor } from "./TextEncryptor";

export class App {
  constructor() {
    const languageLoader = new LanguageLoader();
    const languageSelector = new LanguageSelector(languageLoader);

    const savedLanguage = localStorage.getItem("language") || "pt";
    languageSelector.setLanguage(savedLanguage);

    new TextEncryptor();
  }
}
