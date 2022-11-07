import { login } from './login.js';
import { save, load } from '../../storage/index.js';

class LocalStorageMock {
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

global.localStorage = new LocalStorageMock();

const validLoginCredentials = {
  email: 'tomhardy@noroff.no',
  password: '1234512345',
};

const invalidLoginCredentials = {
  email: 1,
  password: '1234512345',
};

function fetchSuccess(status = 200, statusText = 'Login is successful!') {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(validLoginCredentials),
  });
}

function fetchFailure(status = 404, statusText = 'Login not successful!') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
    json: () => Promise.resolve(invalidLoginCredentials),
  });
}

describe('Login', () => {
  it('logs user in with valid credentials', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(validLoginCredentials);
    expect(item).toEqual(validLoginCredentials);
  });

  it('saves array to localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    const serializedValue = JSON.stringify(value);
    save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it('loads array from localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
  });

  it('returns undefined when receiving status code 404', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidLoginCredentials)).rejects.toThrow(
      'Login not successful!'
    );
  });
});
