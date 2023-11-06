import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function getPosts(limit = 20, offset = 0) {
  const response = await fetch(
    `${apiPath}/social/posts?limit=${limit}&offset=${offset}&_reactions=true&_author=true&_comments=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  const response = await fetch(
    `${apiPath}/social/posts/${id}?_reactions=true&_author=true&_comments=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
