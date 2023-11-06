import { profile } from "../auth/state.js";
import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function updatePost(id, title, body, media, tags) {
  const { name: owner } = profile();
  const response = await fetch(`${apiPath}/social/posts/${id}`, {
    method: "put",
    body: JSON.stringify({ title, body, media, tags, owner }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
