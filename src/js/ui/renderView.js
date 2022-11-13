import { clear } from "../tools/index.js";

export function renderView() {
  const main = document.querySelector("main");
  clear(main);
  main.append(...arguments);
}
