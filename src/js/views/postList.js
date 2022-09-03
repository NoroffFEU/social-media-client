import { getPosts, isLoggedIn } from "../api/index.js"
import { postThumbnailTemplate } from "../templates/index.js";

export const postList = async () => {
  console.log(document.querySelector("#loginModal"));
  if (isLoggedIn()) {
    const element = document.createElement("div");
    element.classList.add("post", "list")
    const posts = await getPosts();
    element.append(...posts.map(postThumbnailTemplate))
    return element
  } else {
    document.querySelector('[data-auth=register]').click()
    return "\r\n"
  }
}