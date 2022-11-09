import { login } from './login.js';

// Adding several variable for using with the unit testing.

const TEST_EMAIL = 'testing@stud.noroff.no';
const TEST_PASSWORD = 'Password10';
const TEST_TOKEN = 'sadasdfdsf324223';
const TEST_LOGIN = {
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  accessToken: TEST_TOKEN,
};

// Created a fake LocalStorage to be using for unit testing simulation.

class LocalStorageFakeTest {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageFakeTest();

/**
 * Creating a fake login success to the API
 * @param fetchLoginSuccess
 * @returns
 */

function fetchLoginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    token: 'myToken',
    json: () => Promise.resolve(TEST_LOGIN),
  });
}

/**
 * Creating a fake login error/fail to the API
 * @param fetchLoginFail
 * @returns
 */

function fetchLoginFail() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    token: 'myToken',
  });
}

describe('login', () => {
  it('Login is successful and provide an token of string', async () => {
    global.fetch = jest.fn(() => fetchLoginSuccess());
    const item = await login(TEST_EMAIL, TEST_PASSWORD);
    expect(item).toEqual(TEST_LOGIN);
  });
});
