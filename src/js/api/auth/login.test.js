import { login } from "./login.js";
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

const validEmail = "helloworld@noroff.no";
const invalidEmail = "nonono.gmail.com";
const emailRegEx = /\w+@noroff.no|\w+@stud.noroff.no/;
const password = "password";

const TEST_ITEM = {
  name: "testing",
  email: validEmail,
  banner: "bannerURL",
  accesToken: "987h46734vggv",
  avatar: "avatarURL",
};

/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchSuccess())
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_ITEM),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"))
 */
function fetchFailure(status = 401, statusText = "Error") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("Login functionality", () => {
  it("Returns a valid item object when on successeful login", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(validEmail, password);
    expect(validEmail).toMatch(emailRegEx);
    expect(item).toEqual(TEST_ITEM);
  });

  it("Should throw an error if email or password are incorect", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidEmail, password)).rejects.toThrow(Error);
  });
});
