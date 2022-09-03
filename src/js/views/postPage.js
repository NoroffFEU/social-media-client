import { getPost, isLoggedIn, profile } from "../api/index.js"
import { postFormTemplate, postPageTemplate } from "../templates/index.js";

export const postPage = async (postId) => {
  if (!isLoggedIn()) {
    location.href = "/"
  } else {
    const me = profile()

    if (postId) {
      const post = await getPost(postId);
      const owner = post.author.name === me.name;

      if (owner) {
        const page = postPageTemplate(post);
        const postForm = postFormTemplate(post);
        page.querySelector('#nav-edit').append(postForm);
        return page
      }

      return "Public Post Page"

    }

    return postFormTemplate()
  }
}