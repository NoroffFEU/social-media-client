import { react } from "../../api/posts/index.js";

export async function reactionListener(event) {
  const button = event.srcElement;
  const symbol = button.dataset.symbol;
  const postId = button.dataset.postId;

  if (postId && symbol) {
    await react(postId, symbol);
    location.reload()
  }
}