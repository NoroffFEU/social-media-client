import { profileButton } from "../templates/index.js";

export const profileList = async (profiles) => {
  const element = document.createElement("div");
  element.classList.add("profile", "list")
  element.append(...profiles.map(profile => profileButton(profile)))
  return element
}