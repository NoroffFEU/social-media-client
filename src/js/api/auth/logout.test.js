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

describe('Logs out user by removing data from localStorage', () => {
  it('removes array from storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});
