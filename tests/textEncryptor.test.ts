import { TextEncryptor } from '../src/components/textEncryptor';
import { JSDOM } from 'jsdom';

declare global {
  namespace NodeJS {
    interface Global {
      window: Window & typeof globalThis;
      document: Document;
      navigator: Navigator;
    }
  }
}

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: "http://localhost/",
});
global.window = window as unknown as Window & typeof globalThis;
global.document = window.document;
global.navigator = window.navigator;

describe('TextEncryptor', () => {
  let textEncryptor: TextEncryptor;

  beforeEach(() => {
    document.body.innerHTML = `
      <textarea id="input-text"></textarea>
      <button id="encrypt-btn"></button>
      <button id="decrypt-btn"></button>
      <div id="image-div"></div>
      <div id="text-div"></div>
      <div id="output-div"></div>
      <p id="output-text"></p>
      <button id="copy-btn"></button>
      <button id="clean-btn"></button>
      <p id="outputCopyAlert"></p>
      <p id="alert-text"></p>
    `;
    textEncryptor = new TextEncryptor();
  });

  test('validates text correctly', () => {
    const validText = 'texto valido';
    const invalidText = 'Texto Invalido!';
    expect(textEncryptor['isValidText'](validText)).toBe(true);
    expect(textEncryptor['isValidText'](invalidText)).toBe(false);
  });

  test('encrypts and decrypts text correctly', () => {
    const inputText = document.getElementById('input-text') as HTMLTextAreaElement;
    inputText.value = 'gato';

    const encryptBtn = document.getElementById('encrypt-btn') as HTMLButtonElement;
    encryptBtn.click();

    const outputText = document.getElementById('output-text') as HTMLParagraphElement;
    expect(outputText.textContent).toBe('gaitober');

    inputText.value = 'gaitober';
    const decryptBtn = document.getElementById('decrypt-btn') as HTMLButtonElement;
    decryptBtn.click();

    expect(outputText.textContent).toBe('gato');
  });

  test('handles copy correctly', () => {
    const outputText = document.getElementById('output-text') as HTMLParagraphElement;
    outputText.textContent = 'gaitober';

    const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement;
    copyBtn.click();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('gaitober');
  });

  test('handles clean result correctly', () => {
    const textDiv = document.getElementById('text-div') as HTMLDivElement;
    const outputDiv = document.getElementById('output-div') as HTMLDivElement;
    textEncryptor['handleCleanResult']();

    expect(textDiv.classList.contains('hidden')).toBe(false);
    expect(outputDiv.classList.contains('hidden')).toBe(true);
  });
});
