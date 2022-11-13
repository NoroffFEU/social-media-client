import { logout } from "./logout";

const token = "tokenValue";

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
  it("clears the token from browser storage", () => {
    localStorage.setItem("token", JSON.stringify(token));
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
