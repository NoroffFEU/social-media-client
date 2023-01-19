import { login } from "./login";

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
const TEST_PASSWORD = "12345678";
const TEST_PROFILE_NAME = "Jester_Tester";
const TEST_TOKEN =
  "SDA2E2E224329FOSDLKAAASDA23wadwa34wkksdkawkdjgdJ4OT5J34RLFDJ3WPRJØA";
const TEST_PROFILE = JSON.stringify({
  name: TEST_PROFILE_NAME,
  email: TEST_EMAIL,
  accessToken: TEST_TOKEN,
});

/**
 * A function that mimicks an approved API fetch call
 */
function fetchMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(TEST_PROFILE),
  });
}

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchMockSuccess());
    const result = await login(TEST_EMAIL, TEST_PASSWORD);
    global.localStorage.setItem("token", TEST_TOKEN);
    global.localStorage.setItem("profile", TEST_PROFILE);
    expect(result).toEqual(TEST_PROFILE);
    expect(TEST_TOKEN).toEqual(global.localStorage.getItem("token"));
    expect(localStorage.getItem("profile")).toEqual(TEST_PROFILE);
  });
});
