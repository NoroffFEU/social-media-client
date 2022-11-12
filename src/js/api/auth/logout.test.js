import { logout } from "./logout";

class LocalStorageMock {
  constructor() {
    this.value = {};
  }
  clear() {
    this.value = {};
  }
  getItem(key) {
    return this.value[key] || null;
  }
  setItem(key, value) {
    this.value[key] = String(value);
  }
  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("remove the token and profile from localStorage", async () => {
    logout();
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("profile")).toBeNull();
  });
});
