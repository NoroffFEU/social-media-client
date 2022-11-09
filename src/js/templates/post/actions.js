import { deletePost } from "../../api/index.js";
import { getSearchParams } from "../../router/searchParams.js";
import { load } from "../../storage/load.js";
import { templateInstance } from "../instance.js";

export const postActions = (post) => {
  const profile = load("profile");
  const clone = templateInstance("postActions");
  const owned = post.author && profile.name === post.author.name;
  const { postId } = getSearchParams();
  const viewing = postId == post.id;

  const viewButton = clone.querySelector("a[data-action=view]");
  const deleteButton = clone.querySelector("button[data-action=delete]");

  if (viewing) {
    viewButton.remove();
  } else {
    viewButton.href = `/?view=post&postId=${post.id}`;
  }

  if (owned) {
    deleteButton.addEventListener("click", async () => {
<<<<<<< HEAD
      await deletePost(post.id);
      location.href = "/";
    });
=======
      await deletePost(post.id)
      location.href = "./";
    })
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
  } else {
    deleteButton.remove();
  }

  return clone;
};
