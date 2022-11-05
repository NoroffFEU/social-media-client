import { login } from "./login";

const TEST_EMAIL = "jester@noroff.no";
const TEST_PASSWORD = "PASSWORD";
const TEST_SUCCESS_RESPONSE = {
  name: "Jester",
  email: "jester@noroff.no",
  banner: null,
  avatar:
    "https://cdn.pixabay.com/photo/2016/03/31/20/07/bells-1295520_960_720.png",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5c....",
};

/**
 * Creates mock local storage to simulate local storage in tests
 * https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
 */
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
 * global.fetch = jest.fn(() => fetchSuccess())
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_SUCCESS_RESPONSE),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 * @example
 * global.fetch = jest.fn(() => fetchInvalidLogin())
 */
function fetchInvalidLogin() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("login", () => {
  it("Returns a valid access token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    //login removes the accessToken from test object
    const expectedToken = TEST_SUCCESS_RESPONSE.accessToken;
    const response = await login(TEST_EMAIL, TEST_PASSWORD);
    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toEqual(expectedToken);
    expect(response).toEqual(TEST_SUCCESS_RESPONSE);
  });

  it("Throws error message on invalid details", async () => {
    global.fetch = jest.fn(() => fetchInvalidLogin());
    await expect(login(TEST_EMAIL, TEST_PASSWORD)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
