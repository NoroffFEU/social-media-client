import { getPost, isLoggedIn, profile } from "../api/index.js"
import { postFormTemplate, postTabsTemplate, postThumbnailTemplate } from "../templates/index.js";
import { postCommentsTemplate } from "../templates/post/comments.js";

export const publicPostPage = async (post) => {
  const element = document.createElement("div");
  element.classList.add("post", "page", "mb-3");
  const thumbnail = postThumbnailTemplate(post, true)
  const comments = postCommentsTemplate(post)
  element.append(thumbnail, comments)
  return element
}

export const postPage = async (postId) => {
  if (!isLoggedIn()) {
    location.href = "./"
  } else {
    const me = profile()

    if (postId) {
      const post = await getPost(postId);
      const owner = post.author.name === me.name;

      if (owner) {
        const page = postTabsTemplate();
        const thumbnail = postThumbnailTemplate(post);
        const postForm = postFormTemplate(post);
        const comments = postCommentsTemplate(post)
        page.querySelector('#nav-default').append(thumbnail, comments);
        page.querySelector('#nav-edit').append(postForm);
        return page
      }

      return publicPostPage(post)
    }

    return postFormTemplate()
  }
}