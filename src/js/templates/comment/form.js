import { commentListener } from "../../listeners/index.js";
import { templateInstance } from "../instance.js";

export const commentFormTemplate = (postId) => {
  const clone = templateInstance("commentForm");
  clone.querySelector("form").dataset.postId = postId;
  clone.querySelector("form").addEventListener("submit", commentListener);
  return clone;
};
