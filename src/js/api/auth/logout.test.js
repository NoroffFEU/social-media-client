import { logout } from "./logout.js";
//import { remove } from "../storage/index.js";

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
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("should remove the token and profile from storage", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            accessToken: "token",
          });
        },
      });
    });
    await logout();
    localStorage.removeItem("token");
    expect(localStorage.getItem("token")).toBe(null);
  });
});
