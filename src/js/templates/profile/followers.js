import { profileThumbnail } from "./thumbnail.js";

export const profileFollowers = (profile) => {
  if (profile && profile.followers && profile.followers.length) {
    const element = document.createElement("div");
    element.classList.add("followers");
    element.append("Followers", ...profile.followers.map(profileThumbnail));
    return element;
  }

  return "\r\n";
};
