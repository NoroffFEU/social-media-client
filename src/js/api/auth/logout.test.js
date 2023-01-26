import { logout } from "./logout";

/*
Import from https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
*/

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

global.localStorage = new LocalStorageMock();

// The login function stores a token when provided with valid credentials

const TEST_EMAIL = "jester@noroff.no";
const TEST_PROFILE_NAME = "Jester_Tester";
const TEST_TOKEN =
  "SDA2E2E224329FOSDLKAAASDA23wadwa34wkksdkawkdjgdJ4OT5J34RLFDJ3WPRJØA";
const TEST_PROFILE = JSON.stringify({
  name: TEST_PROFILE_NAME,
  email: TEST_EMAIL,
});

describe("logout", () => {
  it("clears the accessToken from localStorage", () => {
    global.localStorage.setItem("profile", TEST_PROFILE);
    global.localStorage.setItem("token", TEST_TOKEN);
    expect(global.localStorage.getItem("profile")).toEqual(TEST_PROFILE);
    expect(global.localStorage.getItem("token")).toEqual(TEST_TOKEN);
    logout();
    const resultProfile = global.localStorage.getItem("profile");
    const resultToken = global.localStorage.getItem("token");
    expect(resultProfile).toEqual(null);
    expect(resultToken).toEqual(null);
  });
});
