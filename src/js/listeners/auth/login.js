import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  await auth.login(email, password);
  updateLoginVisibility();
}
