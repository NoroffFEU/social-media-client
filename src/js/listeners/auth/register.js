import * as auth from "../../api/auth/index.js";

export async function registerListener(event) {
<<<<<<< HEAD
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
=======
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)
  const email = data.get("email")
  const name = data.get("name")
  const password = data.get("password")
  const avatar = data.get("avatar")

  try {
    await auth.register(name, email, password, avatar)
  } catch {
    return alert("There was a problem creating your account")
  }

  try {
    await auth.login(email, password)
    location.reload()
  } catch {
    return alert("There was a problem logging into your new account")
  }
}
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
