import { logout } from "./logout";

class LocalStorageThing {
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

globalThis.localStorage = new LocalStorageThing();

const testToken = "accessToken";
const testProfile = {
  name: "villa",
  email: "villakilla@noroff.no",
};

describe("logout", () => {
  it("Deletes the token from browser storage", () => {
    localStorage.setItem("profile", JSON.stringify(testProfile));
    localStorage.setItem("token", JSON.stringify(testToken));
    logout();
    expect(localStorage.setItem("profile")).toEqual(undefined);
    expect(localStorage.setItem("token")).toEqual(undefined);
  });
});
