import { commentFormTemplate, commentTemplate } from "../comment/index.js";

export const postCommentsTemplate = (post) => {
  const element = document.createElement("div");
  element.classList.add("post-comments");

  if (post && post.comments) {
    const comments = post.comments.map((comment) =>
      commentTemplate(comment, post.author.name)
    );
    element.append(...comments);
  }

  element.append(commentFormTemplate(post.id));

  return element;
};
