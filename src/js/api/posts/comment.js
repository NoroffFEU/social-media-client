import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function comment(postId, body) {
  const response = await fetch(`${apiPath}/social/posts/${postId}/comment/`, {
    method: "post",
    body: JSON.stringify({ body }),
    headers: headers()
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText)
}