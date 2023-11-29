import { apiPath } from '../js/api/constants';

export default async function testLogin() {
  const response = await fetch(`${apiPath}/social/auth/login`);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Unable to fetch data');
  }
}
