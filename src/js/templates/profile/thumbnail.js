import { imageTemplate } from "../image/index.js";

export const profileThumbnail = (profile) => {
  const element = document.createElement("a");
  element.classList.add("profile", "thumbnail");
  element.href = `/?view=profile&name=${profile.name}`;
  const img = new Image()
  const img2 = imageTemplate(profile.avatar, "test")
  img.src = profile.avatar;
  img.alt = profile.name;
  img.classList.add("rounded-circle", "avatar", "border");
  element.title = `${profile.name}'s Profile`;
  element.append(img);
  return element;
}