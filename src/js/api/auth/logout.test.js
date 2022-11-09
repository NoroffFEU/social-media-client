/* eslint-disable no-undef */
import { logout } from './logout.js';
import * as storage from '../../storage/index.js';

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

const TEST_TOKEN = 'token';
const TEST_PROFILE = { name: 'cocomarcia', email: 'cocomarcia@noroff.no' };

describe('Logs user out', () => {
  it('Removes data from localStorage', () => {
    const profileSerialized = JSON.stringify(TEST_PROFILE);

    storage.save('token', TEST_TOKEN);
    storage.save('profile', TEST_PROFILE);

    expect(storage.load('token')).toEqual(TEST_TOKEN);
    expect(localStorage.getItem('profile')).toEqual(profileSerialized);

    logout();
    expect(storage.load('token')).toEqual(null);
    expect(storage.load('profile')).toEqual(null);
  });
});
