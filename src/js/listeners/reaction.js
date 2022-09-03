import { react } from "../api/index.js";

export async function reactionListener(event) {
  const button = event.srcElement;
  const symbol = button.innerText;
  const url = new URL(window.location);
  const postId = url.searchParams.get("postId");

  if (postId && symbol) {
    await react(postId, symbol);
    location.reload()
  }
}