import * as storage from "./index";

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
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("Save, load and remove token to localStorage", () => {
  it("Saves token to storage", () => {
    const key = "token";
    const value = ["1234"];
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });
  it("Cleares token from storage", () => {
    const key = "token";
    const value = ["321"];
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
    storage.remove(key);
    expect(localStorage.getItem(key)).toEqual(undefined || null);
  });
});
