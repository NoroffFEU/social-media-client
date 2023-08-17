import * as auth from '../../api/auth/index.js';

export async function registerListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  const email = data.get('email');
  if (!email.endsWith('@stud.noroff.no') && !email.endsWith('@noroff.no')) {
    return alert('Email must be a valid stud.noroff.no or noroff.no address');
  }

  const name = data.get('name');
  if (/[^a-zA-Z0-9_]/.test(name)) {
    return alert('Name should not contain punctuation except for underscores');
  }

  const password = data.get('password');
  if (password.length < 8) {
    return alert('Password must be at least 8 characters long');
  }

  const avatar = data.get('avatar'); // this is optional

  // Proceed with the registration
  try {
    const response = await auth.register(name, email, password, avatar);
    if (!response.ok) {
      const responseBody = await response.json();
      console.error('Registration Error:', responseBody);
      return alert('There was a problem creating your account');
    }

    // Attempt to log in after successful registration
    try {
      await auth.login(email, password);
      location.reload();
    } catch {
      return alert('There was a problem logging into your new account');
    }
  } catch (error) {
    console.error('Error:', error);
    return alert('There was a problem creating your account');
  }
}
