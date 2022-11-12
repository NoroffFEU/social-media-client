import { login } from '../api/auth/login.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  getItem(key) {
    return this.store[key] || null;
  }

  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();

const TEST_USERNAME = 'mr_random';
const TEST_EMAIL = 'mrrandom@noroff.no';
const TEST_PASSWORD = 'MisterRandom';
const TEST_TOKEN = 'token123';
const TEST_RESPONSE = {
  name: TEST_USERNAME,
  email: TEST_EMAIL,
  token: TEST_TOKEN,
};

function loginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(TEST_RESPONSE),
  });
}

function loginError() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: 'Unauthorized',
  });
}

describe('Login', () => {
  it('Checks that the login function is successful.', async () => {
    global.fetch = jest.fn(() => loginSuccess());
    const response = await login(TEST_EMAIL, TEST_PASSWORD);
    global.localStorage.setItem('token', TEST_TOKEN);
    expect(response).toEqual(TEST_RESPONSE);
    expect(response.token).toEqual(global.localStorage.getItem('token'));
  });

  it('Throws error message on invalid inputs', async () => {
    global.fetch = jest.fn(() => loginError());
    await expect(login(TEST_EMAIL, TEST_PASSWORD)).rejects.toThrow(
      'Unauthorized'
    );
  });
});
