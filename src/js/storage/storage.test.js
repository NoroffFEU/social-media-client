/* eslint-disable no-undef */
import * as storage from './index';

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

describe('storage functionality', () => {
  it('saves data to localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    const item = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(item);
  });
  it('loads data from localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });
  it('removes data from localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.load(key)).toEqual(undefined || null);
  });
});
