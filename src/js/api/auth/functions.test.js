import { login } from './login.js';
import { save, load, remove } from '../../storage/index.js';

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

const body = { email: 'tomhardy@noroff.no', password: '1234512345' };

function fetchSuccess(status = 200) {
  return Promise.resolve({
    ok: true,
    status,
    json: () => Promise.resolve(body),
  });
}

describe('login', () => {
  it('Successful login', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(body);
    expect(item).toEqual(body);
  });
});

describe('Saving token to localstorage', () => {
  it('Save token to storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    const serializedValue = JSON.stringify(value);
    save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it('Loads an array from local storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
  });

  it('Removes an array from storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});
