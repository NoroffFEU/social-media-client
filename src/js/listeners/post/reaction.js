import { react } from "../../api/posts/index.js";

export async function reactionListener(event) {
  const button = event.srcElement;
  const symbol = button.dataset.symbol;
  const postId = button.dataset.postId;

  if (postId && symbol) {
<<<<<<< HEAD
    await react(postId, symbol);
    location.reload();
=======
    try {
      await react(postId, symbol);
      location.reload()
    } catch {
      return alert("There was a problem reacting to this post");
    }
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
  }
}
