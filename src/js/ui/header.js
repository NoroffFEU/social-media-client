import { logoutListener } from "../listeners/auth/index.js";

export function header() {
  document.querySelectorAll('[data-auth=logout]').forEach(e => e.addEventListener("click", logoutListener));
}