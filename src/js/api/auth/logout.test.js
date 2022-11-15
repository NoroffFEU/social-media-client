import { logout } from "./logout";

const token = "tokenValue";
const profile = "profileValue";

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
    // stores profile and token in the local storage mock
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("token", JSON.stringify(token));

    // loads profile and token from the local storage mock - to see/test if what's returned is whats expected.
    expect(JSON.parse(localStorage.getItem("profile"))).toEqual(profile);
    expect(JSON.parse(localStorage.getItem("token"))).toEqual(token);

    // runs the logout function, which should clear the local storage mock.
    logout();

    // tests if profile and token got cleared from local storage, by trying to load them and see if they equal null.
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
