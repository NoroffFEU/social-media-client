import { logout } from "./logout.js";

const testToken = "token"

class storageMock {
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

global.localStorage = new storageMock();

describe("log out", () => {
  it("clears token when user logs out", () => {
    global.localStorage.setItem("token", testToken);
    logout();
    
    expect(localStorage.getItem("token")).toBeFalsy();
    expect(localStorage.getItem("profile")).toBeFalsy();
  });
});