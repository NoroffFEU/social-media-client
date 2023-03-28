import * as storage from '../../storage';

export class LocalStorageMock {
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

describe('storage', () => {
  it('Saves an array to storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it('Loads an array from storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });

  it('Removes an array from storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.load(key)).toEqual(null);
  });
});
