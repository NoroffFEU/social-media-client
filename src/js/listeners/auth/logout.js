import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export function logoutListener() {
  auth.logout();
  updateLoginVisibility();
}
