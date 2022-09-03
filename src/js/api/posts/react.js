import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function react(postId, symbol) {
  const response = await fetch(`${apiPath}/social/posts/${postId}/react/${symbol}`, {
    headers: headers()
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}