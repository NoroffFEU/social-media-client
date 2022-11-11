import { profile } from "../../api/index.js";
import { setSearchParams } from "../../router/searchParams.js";
import { templateInstance } from "../instance.js"

export const commentTemplate = (comment, postOwner = "") => {
  const { name } = profile()
  const clone = templateInstance("comment");
  
  clone.querySelector(".comment-body").innerText = comment.body;
  clone.querySelector(".owner").innerText = comment.owner;
  clone.querySelector(".owner").href = `/?view=profile&name=${comment.owner}`;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-sm", "btn-success");
  button.innerText = "Reply";
  button.addEventListener("click", () => {
    setSearchParams({ replyToId: comment.id })
  })

  clone.querySelector('.comment-header').prepend(button)

  if (name === comment.owner) {
    clone.querySelector(".comment").classList.add("me");
  }

  if (name === postOwner) {
    clone.querySelector(".comment").classList.add("op");
  }


  return clone;
}