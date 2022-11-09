import { followProfile } from "../../api/profiles/index.js";

export async function followListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;

  if (name) {
<<<<<<< HEAD
    await followProfile(name);
    location.reload();
=======
    try {
      await followProfile(name);
      location.reload()
    } catch {
      return alert("There was a problem following this profile");
    }
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
  }
}
