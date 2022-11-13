import { templateInstance } from "../instance.js";

export const profileButton = (profile) => {
  const clone = templateInstance("profileButton");
  clone.querySelector("img").src = profile.avatar;
  clone.querySelector(".btn").innerText = profile.name;
  clone.querySelector("a").href = `./?view=profile&name=${profile.name}`;
  return clone;
};
