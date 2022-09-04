import { profile } from "../auth/state.js";
import { apiPath } from "../constants.js";
import { headers } from "../headers.js";

export async function updateProfileImage(avatar) {
  const me = profile()

  const response = await fetch(`${apiPath}/social/profiles/${id}`, {
    method: "put",
    body: JSON.stringify({ ...me, avatar }),
    headers: headers("application/json")
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText)
}