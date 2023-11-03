import { apiPath } from "../constants.js";
import { headers } from "../headers.js";
import fetch from 'node-fetch';

export async function followProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/follow`, {
    headers: headers(),
    method: "put"
  });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}
