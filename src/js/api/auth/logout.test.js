import { logout } from "./logout";

const testEmail = "heppa@noroff.no";
const testPassword = "heppa123";
const token = "testToken";

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
const testProfile = JSON.stringify({
  email: testEmail,
  password: testPassword,
});

describe("logout", () => {
  it("removes the accessToken from localStorage", () => {
    global.localStorage.setItem("profile", testProfile);
    global.localStorage.setItem("token", token);
    expect(global.localStorage.getItem("profile")).toEqual(testProfile);
    expect(global.localStorage.getItem("token")).toEqual(token);
    logout();
    const resultProfile = global.localStorage.getItem("profile");
    const resultToken = global.localStorage.getItem("token");
    expect(resultProfile).toEqual(null);
    expect(resultToken).toEqual(null);
  });
});
