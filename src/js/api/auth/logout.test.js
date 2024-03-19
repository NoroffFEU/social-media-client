import { logout } from "./logout";
import * as storage from "../../storage/index.js";

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
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("Log out", () => {
  it("Clears token at log out", async () => {
    localStorage.setItem("token", "1234");
    logout();
    const token = localStorage.getItem("token");
    expect(token).toBe(null);
  });
});
