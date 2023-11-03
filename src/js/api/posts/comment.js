import { apiPath } from "../constants.js";
import { headers } from "../headers.js";
import fetch from 'node-fetch';

export async function comment(postId, body, replyToId) {
  const response = await fetch(`${apiPath}/social/posts/${postId}/comment`, {
    method: "post",
    body: JSON.stringify({ body, replyToId }),
    headers: headers("application/json")
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText)
}