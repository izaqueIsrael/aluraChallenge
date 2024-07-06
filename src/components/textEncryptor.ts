import { encryptionRules, decryptRules } from "./encryptionRules";
import { getElementById, querySelector } from "../utils/domUtils";

export class TextEncryptor {
  private inputText: HTMLInputElement;
  private encryptBtn: HTMLButtonElement;
  private decryptBtn: HTMLButtonElement;
  private imageDiv: HTMLDivElement;
  private textDiv: HTMLDivElement;
  private outputDiv: HTMLDivElement;
  private outputText: HTMLParagraphElement;
  private copyBtn: HTMLButtonElement;
  private cleanBtn: HTMLButtonElement;
  private outputCopyAlert: HTMLParagraphElement;
  private alertText: HTMLParagraphElement;

  constructor() {
    this.inputText = getElementById<HTMLInputElement>("input-text");
    this.encryptBtn = getElementById<HTMLButtonElement>("encrypt-btn");
    this.decryptBtn = getElementById<HTMLButtonElement>("decrypt-btn");
    this.imageDiv = getElementById<HTMLDivElement>("image-div");
    this.textDiv = getElementById<HTMLDivElement>("text-div");
    this.outputDiv = getElementById<HTMLDivElement>("output-div");
    this.outputText = getElementById<HTMLParagraphElement>("output-text");
    this.copyBtn = querySelector<HTMLButtonElement>("#copy-btn");
    this.cleanBtn = querySelector<HTMLButtonElement>("#clean-btn");
    this.outputCopyAlert = querySelector<HTMLParagraphElement>("#outputCopyAlert");
    this.alertText = querySelector<HTMLParagraphElement>("#alert-text");

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.encryptBtn.addEventListener("click", () => this.handleEncrypt());
    this.decryptBtn.addEventListener("click", () => this.handleDecrypt());
    this.copyBtn.addEventListener("click", () => this.handleCopy());
    this.cleanBtn.addEventListener("click", () => this.handleCleanResult());
  }

  private isValidText(text: string): boolean {
    return /^[a-z\s]+$/.test(text);
  }

  private encryptText(text: string): string {
    return text
      .split("")
      .map((char) => encryptionRules[char] || char)
      .join("");
  }

  private decryptText(text: string): string {
    let result = text;
    for (const key in decryptRules) {
      const regex = new RegExp(key, "g");
      result = result.replace(regex, decryptRules[key]);
    }
    return result;
  }

  private displayResult(result: string): void {
    this.textDiv.classList.add("hidden");
    this.outputDiv.classList.remove("hidden");
    this.outputDiv.classList.add("flex");
    this.imageDiv.classList.remove("lg:flex");
    this.outputText.textContent = result;
  }

  private handleEncrypt(): void {
    const text = this.inputText.value;
    if (this.isValidText(text)) {
      const encryptedText = this.encryptText(text);
      this.displayResult(encryptedText);
      this.outputCopyAlert.classList.add("hidden");
      this.alertText.classList.add("hidden");
    } else {
      this.alertText.classList.remove("hidden");
    }
  }

  private handleDecrypt(): void {
    const text = this.inputText.value;
    if (this.isValidText(text)) {
      const decryptedText = this.decryptText(text);
      this.displayResult(decryptedText);
      this.outputCopyAlert.classList.add("hidden");
      this.alertText.classList.add("hidden");
    } else {
      this.alertText.classList.remove("hidden");
    }
  }

  private handleCopy(): void {
    if (this.outputText.textContent) {
      navigator.clipboard
        .writeText(this.outputText.textContent)
        .then(() => {
          this.outputCopyAlert.classList.remove("hidden");
        })
        .catch((err) => {
          console.error("Falha ao copiar o texto: ", err);
        });
    }
  }

  private handleCleanResult(): void {
    this.textDiv.classList.remove("hidden");
    this.outputDiv.classList.add("hidden");
    this.outputDiv.classList.remove("flex");
    this.imageDiv.classList.add("lg:flex");
    this.outputCopyAlert.classList.add("hidden");
  }
}
