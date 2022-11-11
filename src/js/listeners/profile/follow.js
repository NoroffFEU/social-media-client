import { followProfile } from "../../api/profiles/index.js";

export async function followListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;

  if (name) {
    await followProfile(name);
    location.reload()
  }
}