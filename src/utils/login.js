// Function to log in a user
export async function login(email, password) {
  try {
    const response = await fetch('YOUR_AUTH_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || response.statusText);
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Function to log out a user
export function logout() {
  localStorage.removeItem('token');
}
