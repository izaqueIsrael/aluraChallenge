import "./styles/tailwind.css";

interface EncryptionRules {
  [key: string]: string;
}

class TextEncryptor {
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

  private encryptionRules: EncryptionRules = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  private decryptRules: EncryptionRules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  constructor() {
    this.inputText = document.getElementById("input-text") as HTMLInputElement;
    this.encryptBtn = document.getElementById(
      "encrypt-btn"
    ) as HTMLButtonElement;
    this.decryptBtn = document.getElementById(
      "decrypt-btn"
    ) as HTMLButtonElement;
    this.imageDiv = document.getElementById("image-div") as HTMLDivElement;
    this.textDiv = document.getElementById("text-div") as HTMLDivElement;
    this.outputDiv = document.getElementById("output-div") as HTMLDivElement;
    this.outputText = document.getElementById(
      "output-text"
    ) as HTMLParagraphElement;
    this.copyBtn = document.querySelector("#copy-btn") as HTMLButtonElement;
    this.cleanBtn = document.querySelector("#clean-btn") as HTMLButtonElement;
    this.outputCopyAlert = document.querySelector(
      "#outputCopyAlert"
    ) as HTMLParagraphElement;
    this.alertText = document.querySelector(
      "#alert-text"
    ) as HTMLParagraphElement;

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
      .map((char) => this.encryptionRules[char] || char)
      .join("");
  }

  private decryptText(text: string): string {
    let result = text;
    for (const key in this.decryptRules) {
      const regex = new RegExp(key, "g");
      result = result.replace(regex, this.decryptRules[key]);
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

document.addEventListener("DOMContentLoaded", () => {
  new TextEncryptor();
});
