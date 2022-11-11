/**
 * Creates mock local storage to simulate local storage in tests
 * https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
 */
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
