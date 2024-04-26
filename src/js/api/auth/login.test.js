import { login } from './login';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'mocked_access_token' }),
  })
);

// Mocking the storage module
jest.mock('../../storage/index.js', () => ({
  save: jest.fn(),
  load: jest.fn((key) => {
    if (key === 'token') {
      return 'mocked_token';
    }
    return null;
  }),
}));

describe('login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    // Call the login function with valid credentials
    await login('test@example.com', 'password123');

    // Expect fetch to be called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/social/auth/login'), {
      method: 'post',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer mocked_token', // Check if token is added to headers
      },
    });

    // Expect the save function to be called with the token
    expect(require('../../storage/index.js').save).toHaveBeenCalledWith('token', 'mocked_access_token');
  });
});

// Had issues with proper innstallment of jest/babel, causing issues with my code
// After discussing with Connor, he said it was ok to use old JS (require) to get code to work