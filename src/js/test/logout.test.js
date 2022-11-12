import { logout } from '../api/auth/logout';

const TEST_TOKEN = 'ab12cd34ef56gh78';

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

describe('Logout', () => {
  it('checks when logging out that it clears the token.', () => {
    localStorage.setItem('token', JSON.stringify(TEST_TOKEN));
    logout();
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
