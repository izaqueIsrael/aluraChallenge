import { encryptionRules, decryptRules } from './../src/components/EncryptionRules';

describe('Encryption and Decryption Rules', () => {
  test('encrypts text correctly', () => {
    const text = 'gato';
    const encryptedText = text
      .split('')
      .map((char) => encryptionRules[char] || char)
      .join('');
    expect(encryptedText).toBe('gaitober');
  });

  test('decrypts text correctly', () => {
    let text = 'gaitober';
    for (const key in decryptRules) {
      const regex = new RegExp(key, 'g');
      text = text.replace(regex, decryptRules[key]);
    }
    expect(text).toBe('gato');
  });
});
