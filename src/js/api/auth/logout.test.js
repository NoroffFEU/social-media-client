import { logout } from "./logout";

// Using localStorage mock example from video going through the CA ( https://www.youtube.com/watch?v=7gF_0WqeQW8&ab_channel=Noroff-Frontend )

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

const accessToken = "8008135wriT3aRand0Mt0k3n.#iSn1CE1337";

describe("logout", () => {
  it("clears the access token from local storage", () => {
    localStorage.setItem("token", accessToken);
    expect(localStorage.getItem("token")).toEqual(accessToken);

    logout();

    expect(localStorage.getItem("token")).toEqual(null);
  });
});
