import { load } from "../storage/index.js";

export function updateLoginVisibility(mmooo) {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}
