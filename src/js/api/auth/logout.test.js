import { logout } from "./logout";

/* import mock localStorage function from stackoverflow.com */

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

const Test_Access_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

const Test_profile = JSON.stringify({
  name: "Anny",
  email: "anny.mark@noroff.no",
});

/** login function stores token and profile into localstorage and
 logout function removes that token and profile from localstorage */

describe("logout", () => {
  it("clears the access token from localStorage", () => {
    global.localStorage.setItem("token", Test_Access_Token);
    global.localStorage.setItem("profile", Test_profile);
    expect(global.localStorage.getItem("token")).toEqual(Test_Access_Token);
    expect(global.localStorage.getItem("profile")).toEqual(Test_profile);
    logout();
    const resultProfile = global.localStorage.getItem("profile");
    expect(resultProfile).toEqual(null);
  });
});
