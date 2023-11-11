import { load } from "../storage/index.js"

export function updateLoginVisibility() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}