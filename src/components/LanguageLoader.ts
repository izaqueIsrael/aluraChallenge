export class LanguageLoader {
    loadTexts(language: string) {
      fetch(`./locales/${language}.json`)
        .then(response => response.json())
        .then(texts => {
  
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
  
          const encryptBtn = document.getElementById("encrypt-btn-text");
          if (encryptBtn) {
            encryptBtn.textContent = texts.messages.encrypt;
          }
  
          const decryptBtn = document.getElementById("decrypt-btn-text");
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
  
          const cleanBtn = document.getElementById("clean-btn-text");
          if (cleanBtn) {
            cleanBtn.textContent = texts.messages.clean;
          }
  
          const copyBtn = document.getElementById("copy-btn-text");
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
  }
  