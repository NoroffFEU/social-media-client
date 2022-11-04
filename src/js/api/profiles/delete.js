import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function deleteProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}`, {
    method: 'delete',
    headers: headers(),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
