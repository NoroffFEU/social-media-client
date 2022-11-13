import { logout } from "./logout.js";

const token = "abcdefg123456hijklmno789";

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

describe("Logout", () => {
  it("removes token when logging out", () => {
    localStorage.setItem("token", JSON.stringify(token));
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
