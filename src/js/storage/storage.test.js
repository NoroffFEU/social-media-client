import * as storage from "./index.js";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}

window.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Save an array to storage", () => {
    const key = "profile";
    const value = ["email", "token"];
    const serilizedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serilizedValue);
  });

  it("Loads an array from storage", () => {
    const key = "profile";
    const value = ["email", "token"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });

  it("Removes an array from storage", () => {
    const key = "profile";
    const value = ["email", "token"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.remove(key)).toEqual(undefined);
  });
});
