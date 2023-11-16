import { logout } from "./logout.js";
import { save, remove, load } from "../../storage/index.js";

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
  it("Removes an array from storage", () => {
    const key = "test";
    const value = ["testName", "testPassword"];
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});

describe("logOut", () => {
  it("Logout function clears the token from browser storage ", async () => {
    const token = await logout();
    expect(token).toEqual(undefined);
  });
});
