export default class LocalStorageMock {
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
  
    get length() {
      return Object.keys(this.store).length;
    }
  
    key(n) {
      const keys = Object.keys(this.store);
      return keys[n] || null;
    }
  }
  