import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function createPost(title, body, media, tags) {
  const response = await fetch(`${apiPath}/social/posts/`, {
    method: "post",
    body: JSON.stringify({ title, body, media, tags }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
