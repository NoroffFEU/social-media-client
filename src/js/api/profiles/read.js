import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function getProfiles() {
  const response = await fetch(`${apiPath}/social/profiles`, {
    headers: headers(),
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  const response = await fetch(
    `${apiPath}/social/profiles/${name}?&_followers=true&_posts=true&_following=true`,
    { headers: headers() }
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
