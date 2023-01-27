import { logout } from "../auth/logout.js";

export default class LocalStorageMock {
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

global.localStorage = new LocalStorageMock;

const mail = "test@test.test";
const password = "abcd";
const username = "test1";
const token = "lksjadhfkljsdahfjlk";
const profile = JSON.stringify({
  name: username,
  email: mail,
  accessToken: token,
});

describe("logout", () => {
    it("removes the token and profile from localstorage", async () => {
    global.localStorage.setItem("profile", profile);
    global.localStorage.setItem("token", token);
    expect(global.localStorage.getItem("profile")).toEqual(profile);
    expect(global.localStorage.getItem("token")).toEqual(token);
    logout();
    const resultProfile = global.localStorage.getItem("profile");
    const resultToken = global.localStorage.getItem("token");
    expect(resultProfile).toEqual(null);
    expect(resultToken).toEqual(null);
    })
})