import { login } from '../login';
import localStorageMock from './localStorage.mock';
import {
  emailValid,
  passwordValid,
  token,
  emailInvalid,
  passwordInvalid,
  userLogin,
} from './testConstants';

global.localStorage = localStorageMock;

function successfulFetch() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'Success',
    json: () => Promise.resolve({ userLogin, token }),
  });
}

function failedFetch() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Unsuccessful',
  });
}

describe('localStorage', () => {
  it('should store a token when valid credentials are provided', async () => {
    global.fetch = jest.fn(() => successfulFetch());
    const loginResult = await login(emailValid, passwordValid);
    expect(loginResult.token).toEqual(token);
  });

  it('should throw error when invalid credentials are provided', async () => {
    global.fetch = jest.fn(() => failedFetch());
    await expect(() => login(emailInvalid, passwordInvalid)).rejects.toThrow(
      'Unsuccessful',
    );
  });
});
