import { logout } from './logout';

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('logout', () => {
  it('removes the token from localStorage when logout function runs', () => {
    logout();
    expect(localStorage.getItem('token')).toEqual(null);
    expect(localStorage.getItem('profile')).toEqual(null);
  });
});
