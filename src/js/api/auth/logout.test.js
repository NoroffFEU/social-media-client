import { logout } from "./logout";

/**
 * Mock function of localStorage used from live session
 */
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
  it("Clears the token from browser storage", async () => {
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
