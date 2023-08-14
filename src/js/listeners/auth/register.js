import * as auth from '../../api/auth/index.js';

export async function registerListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get('email');
  const name = data.get('name');
  const password = data.get('password');
  const avatar = data.get('avatar');

  try {
    const response = await auth.register(name, email, password, avatar);
    if (!response.ok) {
      const responseBody = await response.json();
      console.error('Registration Error:', responseBody);
      return alert('There was a problem creating your account');
    }
  } catch (error) {
    console.error('Error:', error);
    return alert('There was a problem creating your account');
  }
}
