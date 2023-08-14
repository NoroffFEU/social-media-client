import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function register(name, email, password, avatar) {
  console.log('Sending registration data:', { name, email, password, avatar });

  const response = await fetch(`${apiPath}/social/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers('application/json'),
  });

  console.log('Received response:', response);

  if (response.ok) {
    return await response.json();
  }

  const responseBody = await response.json();
  throw new Error(responseBody.message || response.statusText);
}
