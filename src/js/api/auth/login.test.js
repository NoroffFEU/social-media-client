import { login } from './login';

// Mocking the localstorage set func
const localStorageMock = {
  setItem: jest.fn(),
};

/// Assigning localStorageMock to the actual localstorage
global.localStorage = localStorageMock;

// Mocking The API call
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ accessToken: 'fakeToken' }),
});

describe('login', () => {
  it('logs in the user and removes the token from localStorage', async () => {
    // Calling the login function
    await login('something@gmail.no', '1234');

    // Expecting to save the token to localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify('fakeToken'),
    );
  });
});
