import { logout } from "./logout";

const TEST_ACCESS_TOKEN = "asjdkhfjkgsdjkhaslj";
const TEST_PROFILE = {
  Email: "bushra@noroff.no",
  Password: "bushra12345",
};

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
    localStorage.setItem("token", JSON.stringify(TEST_ACCESS_TOKEN));
    localStorage.setItem("profile", JSON.stringify(TEST_PROFILE));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
