import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export function logoutListener() {
<<<<<<< HEAD
  auth.logout();
  updateLoginVisibility();
  window.location.href = "/";
}
=======
  try {
    auth.logout()
    updateLoginVisibility()
    location.href = "./"
  } catch {
    return alert("There was a problem logging out");
  }
}
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
