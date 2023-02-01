export class MockLocalStorage {
  constructor() {
    this.value = new Map();
  }

  clear() {
    this.value.clear();
  }

  removeItem(key) {
    this.value.delete(key);
  }

  getItem(key) {
    return this.value.get(key) || null;
  }

  setItem(key, value) {
    this.value.set(key, value);
  }
}
