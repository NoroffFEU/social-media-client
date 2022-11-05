import { logout } from "./logout";

const TEST_TOKEN = "access";
const TEST_USER = {
  name: "Shaindal",
  email: "TestGuy56@noroff.no",
};

/**
 * * Creates a mock localStorage to simulate localStorage for the test
 * Reference dev blog
 * https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
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
  it("Removes all stored data in localStorage when logout is clicked", () => {
    localStorage.setItem("profile", JSON.stringify(TEST_USER));
    localStorage.setItem("token", JSON.stringify(TEST_TOKEN));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
