import { templateInstance } from "../instance.js";
import { profileThumbnail } from "./thumbnail.js";

export const profileFollowers = (profile) => {
  if (profile.followers && profile.followers.length) {
    const clone = templateInstance('profileFollowers');
    const thumbs = profile.followers.map(profileThumbnail);
    clone.querySelector(".followers").append(...thumbs)
    return clone
  }

  return "\r\n"
}