(()=>{"use strict";var t={277:(t,e,n)=>{n.r(e)},534:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var o=n(514),r=n(168),i=n(812);e.App=function(){var t=new r.LanguageLoader,e=new o.LanguageSelector(t),n=localStorage.getItem("language")||"pt";e.setLanguage(n),new i.TextEncryptor}},49:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.decryptRules=e.encryptionRules=void 0,e.encryptionRules={e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat"},e.decryptRules={enter:"e",imes:"i",ai:"a",ober:"o",ufat:"u"}},168:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LanguageLoader=void 0;var n=function(){function t(){}return t.prototype.loadTexts=function(t){fetch("./locales/".concat(t,".json")).then((function(t){return t.json()})).then((function(t){var e=document.getElementById("input-text");e&&(e.setAttribute("aria-label",t.ariaLabels.inputText),e.setAttribute("placeholder",t.placeholders.inputText));var n=document.querySelector("img[data-alt='logo']");n&&n.setAttribute("alt",t.alts.logo);var o=document.querySelector("img[data-alt='info']");o&&o.setAttribute("alt",t.alts.info);var r=document.querySelector("img[data-alt='searching']");r&&r.setAttribute("alt",t.alts.searching);var i=document.getElementById("alert-text");i&&(i.textContent=t.messages.invalidText);var a=document.querySelector("h2");a&&(a.textContent=t.messages.infoText);var s=document.getElementById("encrypt-btn-text");s&&(s.textContent=t.messages.encrypt);var l=document.getElementById("decrypt-btn-text");l&&(l.textContent=t.messages.decrypt);var u=document.querySelector("#resultTitle");u&&(u.textContent=t.messages.resultTitle);var d=document.getElementById("outputCopyAlert");d&&(d.textContent=t.messages.copyAlert);var c=document.getElementById("clean-btn-text");c&&(c.textContent=t.messages.clean);var p=document.getElementById("copy-btn-text");p&&(p.textContent=t.messages.copy);var y=document.getElementById("placeholderText");y&&(y.textContent=t.messages.placeholderText);var h=document.getElementById("noMessage");h&&(h.textContent=t.messages.noMessage)})).catch((function(t){return console.error("Failed to load language file",t)}))},t}();e.LanguageLoader=n},514:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LanguageSelector=void 0;var n=function(){function t(t){this.languageLoader=t,this.init()}return t.prototype.init=function(){var t=this,e=document.getElementById("language-selector");e&&e.addEventListener("change",(function(e){var n=e.target.value;t.setLanguage(n)}))},t.prototype.setLanguage=function(t){localStorage.setItem("language",t),this.languageLoader.loadTexts(t)},t}();e.LanguageSelector=n},812:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TextEncryptor=void 0;var o=n(49),r=n(173),i=function(){function t(){this.inputText=(0,r.getElementById)("input-text"),this.encryptBtn=(0,r.getElementById)("encrypt-btn"),this.decryptBtn=(0,r.getElementById)("decrypt-btn"),this.imageDiv=(0,r.getElementById)("image-div"),this.textDiv=(0,r.getElementById)("text-div"),this.outputDiv=(0,r.getElementById)("output-div"),this.outputText=(0,r.getElementById)("output-text"),this.copyBtn=(0,r.querySelector)("#copy-btn"),this.cleanBtn=(0,r.querySelector)("#clean-btn"),this.outputCopyAlert=(0,r.querySelector)("#outputCopyAlert"),this.alertText=(0,r.querySelector)("#alert-text"),this.addEventListeners()}return t.prototype.addEventListeners=function(){var t=this;this.encryptBtn.addEventListener("click",(function(){return t.handleEncrypt()})),this.decryptBtn.addEventListener("click",(function(){return t.handleDecrypt()})),this.copyBtn.addEventListener("click",(function(){return t.handleCopy()})),this.cleanBtn.addEventListener("click",(function(){return t.handleCleanResult()}))},t.prototype.isValidText=function(t){return/^[a-z\s]+$/.test(t)},t.prototype.encryptText=function(t){return t.split("").map((function(t){return o.encryptionRules[t]||t})).join("")},t.prototype.decryptText=function(t){var e=t;for(var n in o.decryptRules){var r=new RegExp(n,"g");e=e.replace(r,o.decryptRules[n])}return e},t.prototype.displayResult=function(t){this.textDiv.classList.add("hidden"),this.outputDiv.classList.remove("hidden"),this.outputDiv.classList.add("flex"),this.imageDiv.classList.remove("lg:flex"),this.outputText.textContent=t},t.prototype.handleEncrypt=function(){var t=this.inputText.value;if(this.isValidText(t)){var e=this.encryptText(t);this.displayResult(e),this.outputCopyAlert.classList.add("hidden"),this.alertText.classList.add("hidden")}else this.alertText.classList.remove("hidden")},t.prototype.handleDecrypt=function(){var t=this.inputText.value;if(this.isValidText(t)){var e=this.decryptText(t);this.displayResult(e),this.outputCopyAlert.classList.add("hidden"),this.alertText.classList.add("hidden")}else this.alertText.classList.remove("hidden")},t.prototype.handleCopy=function(){var t=this;this.outputText.textContent&&navigator.clipboard.writeText(this.outputText.textContent).then((function(){t.outputCopyAlert.classList.remove("hidden")})).catch((function(t){console.error("Falha ao copiar o texto: ",t)}))},t.prototype.handleCleanResult=function(){this.textDiv.classList.remove("hidden"),this.outputDiv.classList.add("hidden"),this.outputDiv.classList.remove("flex"),this.imageDiv.classList.add("lg:flex"),this.outputCopyAlert.classList.add("hidden")},t}();e.TextEncryptor=i},173:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getElementById=function(t){var e=document.getElementById(t);if(!e)throw new Error("Element with id ".concat(t," not found"));return e},e.querySelector=function(t){var e=document.querySelector(t);if(!e)throw new Error("Element with selector ".concat(t," not found"));return e}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{n(277);var t=n(534);document.addEventListener("DOMContentLoaded",(function(){new t.App}))})()})();