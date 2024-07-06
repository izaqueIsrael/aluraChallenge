export function getElementById<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  return element;
}

export function querySelector<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector(selector) as T;
  if (!element) {
    throw new Error(`Element with selector ${selector} not found`);
  }
  return element;
}
