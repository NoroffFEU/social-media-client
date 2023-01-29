//The logout function clears the token from browser storage

import { logout } from './logout';

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

const MOCK_TOKEN = 'poiuqweporiuqweproiuqwerpi';

global.localStorage.setItem('token', JSON.stringify(MOCK_TOKEN));

describe('logout', () => {
  it('clears token from storage on logout', async () => {
    logout();
    var token = global.localStorage.getItem('token');
    expect(token).toEqual(null);
  });
});
