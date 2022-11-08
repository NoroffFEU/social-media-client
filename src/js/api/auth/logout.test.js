import { logout } from "./logout";

/**
 * create LocalStorage Mock to simulte local storage for testing
 * https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
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

const test_token = "accessToken";
const test_profile = {
  name: "CaTester",
  email: "caTester@noroff.no",
};

describe("logout", () => {
  it("Returns valid token and valid response object", () => {
    localStorage.setItem("profile", JSON.stringify(test_profile));
    localStorage.setItem("token", JSON.stringify(test_token));
    logout();
    expect(localStorage.setItem("profile")).toEqual(undefined);
    expect(localStorage.setItem("token")).toEqual(undefined);
  });
});
