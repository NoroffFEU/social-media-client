import { logout } from "./logout.js";

const MOCK_TOKEN_KEY = "token";
const MOCK_TOKEN = "helloworld123123";

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

describe("Testing the logout function removes the token from browser storage", () => {
  it("should logout successfully", async () => {
    global.localStorage = new LocalStorageMock();

    localStorage.setItem(MOCK_TOKEN_KEY, MOCK_TOKEN);
    expect(localStorage.getItem(MOCK_TOKEN_KEY)).toEqual(MOCK_TOKEN);

    logout();
    expect(localStorage.getItem(MOCK_TOKEN_KEY)).toBeNull();
  });
});
