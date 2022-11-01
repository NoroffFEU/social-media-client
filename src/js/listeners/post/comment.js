import { comment } from "../../api/index.js";
import { getSearchParams } from "../../router/searchParams.js";

export async function commentListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const body = data.get("body");
  const postId = form.dataset.postId;
  const replyToId = getSearchParams().replyToId;
  await comment(postId, body, replyToId);
  form.remove();
  location.reload();
}
