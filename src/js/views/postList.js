import { postThumbnailTemplate } from "../templates/index.js";

export const postList = (posts, preview = false) => {
  const element = document.createElement("div");
  element.classList.add("post", "list");
  element.append(...posts.map((post) => postThumbnailTemplate(post, preview)));
  return element;
};
