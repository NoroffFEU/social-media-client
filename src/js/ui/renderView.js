import { clear } from "../tools/index.js";
import { reactions } from "./reactions.js";

export function renderView(child) {
  const main = document.querySelector('main');
  clear(main)
  main.append(...arguments);
  reactions()
}