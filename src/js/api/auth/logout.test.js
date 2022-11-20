import { logout } from "./logout";

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

const TEST_PROFILE = {
  name: "randomName",
  email: "random@noroff.no",
  banner: "bannerURL",
  token: "testToken",
  avatar: "avatarURL",
};

localStorage.setItem("token", JSON.stringify(TEST_PROFILE.token));
localStorage.setItem("profile", JSON.stringify(TEST_PROFILE));

describe("Clear storage", () => {
  it("Returns null if token was successfully cleared from the local storage after logout", () => {
    logout();
    const item = JSON.parse(localStorage.getItem("token"));
    expect(item).toEqual(null);
  });

  it("Returns null if the profile was cleared successfully from the local storage after logout", () => {
    logout();
    const item = JSON.parse(localStorage.getItem("profile"));
    expect(item).toEqual(null);
  });
});
