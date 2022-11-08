import { logout } from "./logout";

const TEST_TOKEN = "access";
const TEST_USER = {
  avatar: "https://picsum.photos/id/718/2274/1440",
  banner: null,
  email: "TestGuy56@noroff.no",
  name: "Shaindal",
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
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("profile")).toEqual(null);
  });
});
