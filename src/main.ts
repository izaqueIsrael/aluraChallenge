import "./styles/tailwind.css";
import { TextEncryptor } from "./components/textEncryptor";

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language-selector") as HTMLSelectElement;

  function loadTexts(language: string) {
    fetch(`./locales/${language}.json`)
      .then(response => response.json())
      .then(texts => {
        document.title = texts.title;

        const inputText = document.getElementById("input-text");
        if (inputText) {
          inputText.setAttribute("aria-label", texts.ariaLabels.inputText);
          inputText.setAttribute("placeholder", texts.placeholders.inputText);
        }

        const logoImg = document.querySelector("img[data-alt='logo']");
        if (logoImg) {
          logoImg.setAttribute("alt", texts.alts.logo);
        }

        const infoImg = document.querySelector("img[data-alt='info']");
        if (infoImg) {
          infoImg.setAttribute("alt", texts.alts.info);
        }

        const searchingImg = document.querySelector("img[data-alt='searching']");
        if (searchingImg) {
          searchingImg.setAttribute("alt", texts.alts.searching);
        }

        const alertText = document.getElementById("alert-text");
        if (alertText) {
          alertText.textContent = texts.messages.invalidText;
        }

        const infoText = document.querySelector("h2");
        if (infoText) {
          infoText.textContent = texts.messages.infoText;
        }

        const encryptBtn = document.getElementById("encrypt-btn");
        if (encryptBtn) {
          encryptBtn.textContent = texts.messages.encrypt;
        }

        const decryptBtn = document.getElementById("decrypt-btn");
        if (decryptBtn) {
          decryptBtn.textContent = texts.messages.decrypt;
        }

        const resultTitle = document.querySelector("#resultTitle");
        if (resultTitle) {
          resultTitle.textContent = texts.messages.resultTitle;
        }

        const outputCopyAlert = document.getElementById("outputCopyAlert");
        if (outputCopyAlert) {
          outputCopyAlert.textContent = texts.messages.copyAlert;
        }

        const cleanBtn = document.getElementById("clean-btn");
        if (cleanBtn) {
          cleanBtn.textContent = texts.messages.clean;
        }

        const copyBtn = document.getElementById("copy-btn");
        if (copyBtn) {
          copyBtn.textContent = texts.messages.copy;
        }

        const placeholderText = document.getElementById("placeholderText");
        if (placeholderText) {
          placeholderText.textContent = texts.messages.placeholderText;
        }

        const noMessage = document.getElementById("noMessage");
        if (noMessage) {
          noMessage.textContent = texts.messages.noMessage;
        }
      })
      .catch(err => console.error('Failed to load language file', err));
  }

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    localStorage.setItem("language", selectedLanguage);
    loadTexts(selectedLanguage);
  });

  const savedLanguage = localStorage.getItem("language") || "pt";
  languageSelector.value = savedLanguage;
  loadTexts(savedLanguage);

  new TextEncryptor();
});
