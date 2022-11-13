import * as storage from "../../storage";
import { logout } from "./logout";

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

describe("logout", () => {
  it("Logs out and clears the token from storage", () => {
    const key = "token";
    const value = ["numbers"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    logout();
    expect(storage.load(key)).toEqual(null);
  });
});
