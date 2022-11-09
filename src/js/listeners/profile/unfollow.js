import { unfollowProfile } from "../../api/profiles/index.js";

export async function unfollowListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;

  if (name) {
<<<<<<< HEAD
    await unfollowProfile(name);
    location.reload();
=======
    try {
      await unfollowProfile(name);
      location.reload()
    } catch {
      return alert("There was a problem unfollowing this profile");
    }
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
  }
}
