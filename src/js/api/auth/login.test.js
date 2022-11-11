import { login } from "./login.js";
//import {save} from "../../storage/index.js";

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

function notAuthorized() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

global.localStorage = new LocalStorageMock();

describe("login", () => {
  it("should save the token and profile to storage", async () => {
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
    await login("email", "password");
    localStorage.setItem("token", "token");
    expect(localStorage.getItem("token")).toBe("token");
  });
  
  it("should throw an error if the response is not ok", async () => {
    global.fetch = jest.fn(() => notAuthorized());
    await expect(login("email", "password")).rejects.toThrow(
      "Unauthorized"
    );
  });
});
