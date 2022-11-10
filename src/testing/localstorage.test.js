import { save, load } from "../js/storage/index.js";

import { logout } from "../js/api/auth/logout.js";

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

describe("storage", () => {
  it("let us save/remove a key value from local storage and delete it upon logging out", () => {
    // Save a key value pair to local storage
    const key = "token";
    const value = ["1234567890"];
    const stringified = JSON.stringify(value);
    save(key, value);

    // Check if the key value pair is saved in local storage
    expect(load(key)).toEqual(value);
    expect(localStorage.getItem(key)).toEqual(stringified);

    // Removing the key value when logging out
    logout();
    expect(localStorage.getItem(key)).toEqual(null);
  });
});
