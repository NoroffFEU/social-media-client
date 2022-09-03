import { comment } from "../api/index.js";
import { searchParams } from "../router/searchParams.js";

export async function commentListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form)
  const body = data.get('body');
  const postId = form.dataset.postId || searchParams().postId;
  await comment(postId, body);
  form.remove();
  location.reload()
}