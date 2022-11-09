import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export async function loginListener(event) {
<<<<<<< HEAD
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  const { name } = await auth.login(email, password);
  updateLoginVisibility();
  location.href = `/?view=profile&name=${name}`;
}
=======
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)
  const email = data.get("email")
  const password = data.get("password")
  try {
    const { name } = await auth.login(email, password)
    updateLoginVisibility()
    location.href = `/?view=profile&name=${name}`
  } catch {
    return alert("Either your username was not found or your password is incorrect")
  }
}
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
