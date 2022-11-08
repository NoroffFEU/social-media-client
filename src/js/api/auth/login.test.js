import { login } from "./login";

const profile = {
  name: "my_username",
  email: "first.last@noroff.no",
  avatar: "https://img.service.com/avatar.jpg",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
};

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

/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchSuccess());
 * ```
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(profile.accessToken),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"));
 * ```
 */
/*function fetchFailure(status = 401, statusText = "Unsuccessful") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}*/

describe("login", () => {
  it("Returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const localStorageToken = JSON.parse(localStorage.getItem("token"));
    const response = await login(profile);
    expect(localStorageToken).toEqual(profile.accessToken);
    expect(response.email).toEqual(profile.email);
    expect(response.password).toEqual(profile.password);
  });
});
