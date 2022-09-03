import { postList } from "../../views/postList.js";
import { templateInstance } from "../instance.js"

export const profilePageTemplate = async (profile) => {
  const clone = templateInstance("profilePagePrivate")
  clone.querySelector("img.avatar").src = profile.avatar;
  clone.querySelector(".profile-name").innerText = profile.name
  clone.querySelector(".profile-email").innerText = profile.email

  if (profile.posts && profile.posts.length) {
    const posts = await postList(profile.posts);
    clone.querySelector(".profile-posts").append(posts)
  }

  return clone
}