import { postThumbnailTemplate } from "../templates/index.js";

export const postList = (posts, preview = false) => {
  const element = document.createElement("div");
  element.classList.add("post", "list", "d-flex", "align-items-center", "flex-column");
  element.append(...posts.map((post) => postThumbnailTemplate(post, preview)));
  return element;
};
