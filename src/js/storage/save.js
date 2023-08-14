export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const login = async (username, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        save('authToken', data.token);
      } else {
        console.error('Token not found in response');
      }
    } else {
      console.error('Login failed', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
