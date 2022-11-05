import * as storage from "./index";

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

describe("Storing authtoken, email and password to localstorage for future use", () => {
  it("Save token, email and password to storage", () => {
    const key = "token";
    const value = ["email", "password"];
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it("Loads an array of stored data from localStorage", () => {
    const key = "token";
    const value = ["email", "password"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });

  it("Removes all data from localStorage", () => {
    const key = "token";
    const value = ["email", "password"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.load(key)).toEqual(undefined || null);
  });
});
