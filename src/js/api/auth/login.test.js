// login.test.js

import { login } from './login';
import { save } from '../../storage';
import { headers } from '../headers';
import { apiPath } from '../constants';
import { validUser, invalidUser } from '../../mocks/user.mock';

jest.mock('../../storage', () => ({
  save: jest.fn(),
}));

jest.mock('../headers', () => ({
  headers: jest.fn(() => ({})),
}));

const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ accessToken: 'testToken', profileData: 'testData' }),
  }),
);

const mockFetchFailure = jest.fn(() =>
  Promise.resolve({
    ok: false,
    statusText: 'Unauthorized',
  }),
);

// Assign this to the global fetch function by default
global.fetch = mockFetchSuccess;

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully log in and save the token and profile', async () => {
    const profile = await login(validUser.email, validUser.password);

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({
        email: validUser.email,
        password: validUser.password,
      }),
      headers: headers('application/json'),
    });

    expect(save).toHaveBeenCalledWith('token', 'testToken');
    expect(save).toHaveBeenCalledWith('profile', { profileData: 'testData' });
    expect(profile).toEqual({ profileData: 'testData' });
  });

  it('should throw an error when logging in with an invalid user', async () => {
    // Mock fetch to simulate a failed login
    global.fetch = mockFetchFailure;

    await expect(
      login(invalidUser.email, invalidUser.password),
    ).rejects.toThrow('Unauthorized');

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({
        email: invalidUser.email,
        password: invalidUser.password,
      }),
      headers: headers('application/json'),
    });

    expect(save).not.toHaveBeenCalled();
  });
});
