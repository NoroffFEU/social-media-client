import { logout } from './logout.js';

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  clear() {
    this.value = {};
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('logout', () => {
  it('removes/delete the token from browsers localStorage', () => {
    logout();
    expect(localStorage.getItem('token')).toEqual(null);
    expect(localStorage.getItem('profile')).toEqual(null);
  });
});
