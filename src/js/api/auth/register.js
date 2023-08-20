import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function register(name, email, password, avatar) {
  console.log('Sending registration data:', { name, email, password, avatar });

  const response = await fetch(`${apiPath}/social/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers('application/json'),
  });

  let responseBody;
  try {
    responseBody = await response.json();
    console.log('Received response body:', responseBody);
  } catch (err) {
    console.error('Error parsing response:', err);
    throw new Error('Error parsing server response.');
  }

  if (response.ok) {
    return responseBody;
  }

  throw new Error(responseBody.message || response.statusText);
}
