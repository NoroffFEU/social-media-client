import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function unfollowProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/unfollow`, {
    headers: headers(),
    method: 'put',
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
