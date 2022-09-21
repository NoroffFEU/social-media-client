import { isLoggedIn } from "../api/index.js"
import { postThumbnailTemplate } from "../templates/index.js";

export const postList = (posts, preview = false) => {
  if (isLoggedIn()) {
    const element = document.createElement("div");
    element.classList.add("post", "list")
    element.append(...posts.map(post => postThumbnailTemplate(post, preview)))
    return element
  } else {
    document.querySelector('[data-auth=register]').click()
    return "\r\n"
  }
}