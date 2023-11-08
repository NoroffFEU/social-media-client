// Tests of login.js
require('dotenv/config');
/* import login from '../../../js/api/auth/login.js'; */
/* import { load } from '../../../js/storage/load.js'; */

describe('Tests of login.js', () => {
  test('Logs the user in if credentials are valid', () => {});
  console.log('Not implemented');
});

/* export async function login(email, password) {
  const response = await fetch(`${apiPath}/social/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: headers('application/json'),
  });

  if (response.ok) {
    const profile = await response.json();
    save('token', profile.accessToken);
    delete profile.accessToken;
    save('profile', profile);
    return profile;
  }

  throw new Error(response.statusText);
}
 */
