import { logout } from "./logout";

const user = {
  username: "Adrian",
  userEmail: "adrianB@.com",
  userToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
};
const { username, userEmail, userToken } = user;

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
  it("removes the token and profile form local storage", () => {
    localStorage.setItem("token", userToken);
    localStorage.setItem("profile", username + userEmail);
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("profile")).toEqual(null);
  });
});
