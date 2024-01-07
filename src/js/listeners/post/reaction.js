import { react } from "../../api/posts/index.js";

export async function reactionListener(event) {
  const button = event.srcElement;
  const { symbol } = button.dataset;
  const { postId } = button.dataset;

  if (postId && symbol) {
    try {
      await react(postId, symbol);
      location.reload();
    } catch {
      return alert("There was a problem reacting to this post");
    }
  }
}
