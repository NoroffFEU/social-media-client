import { profileFollowers } from "./followers.js";
import { profileFollowing } from "./following.js";

export const profileFollows = (profile) => {
  const element = document.createElement("div");
  element.classList.add("profile", "follows");
  const children = [profileFollowers(profile), profileFollowing(profile)]
  element.append(...children)
  return element
}