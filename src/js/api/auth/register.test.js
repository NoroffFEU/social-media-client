// register.test.js

import { register } from './register';
import { save } from '../../storage';
import { headers } from '../headers';
import { apiPath } from '../constants';
import { validUser, invalidUser } from '../../mocks/user.mock.js';
import { emailValidation } from './register';

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
    statusText: 'Missing password',
  }),
);

// Assign this to the global fetch function by default
global.fetch = mockFetchSuccess;

describe('register', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully register and save the token and profile', async () => {
    const profile = await register(
      validUser.name,
      validUser.email,
      validUser.password,
      validUser.avatar,
    );

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/register`, {
      method: 'post',
      body: JSON.stringify({
        name: validUser.name,
        email: validUser.email,
        password: validUser.password,
        avatar: validUser.avatar,
      }),
      headers: headers('application/json'),
    });

    expect(profile).toEqual({
      accessToken: 'testToken',
      profileData: 'testData',
    });
  });

  it('should throw an error when missing password', async () => {
    // Mock fetch to simulate a failed registration
    global.fetch = mockFetchFailure;

    await expect(
      register(
        invalidUser.name,
        invalidUser.email,
        invalidUser.password,
        invalidUser.avatar,
      ),
    ).rejects.toThrow('Missing password');

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/register`, {
      method: 'post',
      body: JSON.stringify({
        name: invalidUser.name,
        email: invalidUser.email,
        password: invalidUser.password,
        avatar: invalidUser.avatar,
      }),
      headers: headers('application/json'),
    });

    expect(save).not.toHaveBeenCalled();
  });
});

// Email validator when register

describe('Validate email', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Should validate successful email', () => {
    const validEmail = validUser.email;
    expect(emailValidation(validEmail)).toBe(true);
  });
  it('Should return unsuccessful email', () => {
    const invalidEmail = invalidUser.email;
    expect(emailValidation(invalidEmail)).toBe(false);
  });
});
