export interface EncryptionRules {
  [key: string]: string;
}

export const encryptionRules: EncryptionRules = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

export const decryptRules: EncryptionRules = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};
