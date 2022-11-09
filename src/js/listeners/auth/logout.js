import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export function logoutListener() {
  try {
    auth.logout()
    updateLoginVisibility()
    location.href = "./"
  } catch {
    alert("There was a problem logging out");
  }
}