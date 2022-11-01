import { profile } from "../../api/index.js";
import { followListener, unfollowListener } from "../../listeners/index.js";
import { postList } from "../../views/postList.js";
import { templateInstance } from "../instance.js"
import { profileFollows } from "./follows.js";

export const profilePageTemplate = (data) => {
  const clone = templateInstance("profilePagePrivate")
  const { name } = profile()
  clone.querySelector("img.avatar").src = data.avatar;
  clone.querySelector(".profile-name").innerText = data.name
  clone.querySelector(".profile-email").innerText = data.email
  clone.querySelector(".upper").prepend(profileFollows(data))

  if (data.posts && data.posts.length) {
    const posts = postList(data.posts);
    clone.querySelector(".profile-posts").append(posts)
  } else {
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-info");
    alert.innerText = "There are no posts yet...";
    clone.querySelector(".profile-posts").append(alert)
  }

  if (data.name !== name) {
    if (data.followers.find(follower => follower.name === name)) {
      clone.querySelector("[data-action=follow]").remove()
      clone.querySelector("[data-action=unfollow]").dataset.name = data.name;
      clone.querySelector("[data-action=unfollow]").addEventListener("click", unfollowListener)
    } else {
      clone.querySelector("[data-action=unfollow]").remove()
      clone.querySelector("[data-action=follow]").dataset.name = data.name;
      clone.querySelector("[data-action=follow]").addEventListener("click", followListener)
    }
  } else {
    clone.querySelector("[data-action=follow]").remove()
    clone.querySelector("[data-action=unfollow]").remove()
  }
  
  return clone
}