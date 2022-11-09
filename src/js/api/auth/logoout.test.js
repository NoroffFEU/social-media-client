/* global global */
import { describe, expect } from '@jest/globals';
import { logout } from './logout.js';

const MOCK_TOKEN_KEY = 'token';
const MOCK_TOKEN = 'abcdef123456';

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

describe('Test that the logout function clears the token from browser storage', () => {
  it('logout is successful', async () => {
    global.localStorage = new LocalStorageMock();
    localStorage.setItem(MOCK_TOKEN_KEY, MOCK_TOKEN);
    expect(localStorage.getItem(MOCK_TOKEN_KEY)).toEqual(MOCK_TOKEN);
    logout();
    console.log(localStorage.getItem(MOCK_TOKEN_KEY));
    expect(localStorage.getItem(MOCK_TOKEN_KEY)).toBeNull();
  });
});
