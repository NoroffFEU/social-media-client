import { logout } from "./logout";

/**
 * LocalStorage Mock for testing
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

const testToken = "accessToken";
const testProfile = {
  name: "Test",
  email: "Robert@noroff.no",
};

describe("logout", () => {
  it("Clears the token from browser storage", () => {
    localStorage.setItem("profile", JSON.stringify(testProfile));
    localStorage.setItem("token", JSON.stringify(testToken));
    logout();
    expect(localStorage.setItem("profile")).toEqual(undefined);
    expect(localStorage.setItem("token")).toEqual(undefined);
  });
});
