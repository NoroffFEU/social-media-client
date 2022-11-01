import * as auth from "../../api/auth/index.js";

export async function registerListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  const avatar = data.get("avatar");
  await auth.register(name, email, password, avatar);
  await auth.login(email, password);
  location.reload();
}
