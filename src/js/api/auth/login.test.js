// import { expressionStatement } from "@babel/types";
import { login } from "./login";

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

const TEST_ITEM = {
  name: "randomName",
  email: "random@noroff.no",
  banner: "bannerURL",
  accessToken: "testToken",
  avatar: "avatarURL",
};

/**
 * Mocks a fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example = global.fetch = jest.fn(() => fetchSuccess())
 */

function fetchSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_ITEM),
  });
}

/**
 * Mocks a fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"))
 */

function fetchUnsuccessful(status = 401, statusText = "Error") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("Returns a valid item object when new user-post is created", async () => {
    global.fetch = jest.fn(() => fetchSuccessful());
    const item = await login();
    expect(item).toEqual(TEST_ITEM);
  });
});
