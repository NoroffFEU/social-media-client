import { logout } from "../api/auth/logout";

const TEST_TOKEN = "ab12cd34ef56gh78";

// Mock class for local storage
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

// Test function for logout
describe("logout", () => {
  it("checks that the logout function clears the token from browser storage", () => {
    localStorage.setItem(
      "token",
      JSON.stringify(TEST_TOKEN)
    );
    logout();
    expect(localStorage.getItem("token")).toEqual(
      null
    );
  });
});
