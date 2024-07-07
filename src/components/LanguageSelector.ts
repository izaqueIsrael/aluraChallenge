import { LanguageLoader } from "./LanguageLoader";

export class LanguageSelector {
  private languageLoader: LanguageLoader;

  constructor(languageLoader: LanguageLoader) {
    this.languageLoader = languageLoader;
    this.init();
  }

  init() {
    const languageSelector = document.getElementById("language-selector") as HTMLSelectElement;
    if (languageSelector) {
      languageSelector.addEventListener("change", (event) => {
        const selectedLanguage = (event.target as HTMLSelectElement).value;
        this.setLanguage(selectedLanguage);
      });
    }
  }

  setLanguage(language: string) {
    localStorage.setItem("language", language);
    this.languageLoader.loadTexts(language);
  }
}
