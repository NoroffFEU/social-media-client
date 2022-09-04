import { templateInstance } from "../instance.js";

export const profileFollowing = (profile) => {
  if (profile.following && profile.following.length) {
    const clone = templateInstance('profileFollowing');
    clone.querySelector(".name").innerText = profile.name;
    clone.querySelector(".number").innerText = profile.following.length;
    return clone
  }

  return "\r\n"
}