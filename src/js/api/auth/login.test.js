import { login } from "./login";

const TEST_EMAIL = "bushra@noroff.no";
const TEST_PASSWORD = "bushra123456";
const TEST_OBJECT = {
  name: "Bushra",
  email: "bushra@noroff.no",
  accessToken: "eyJhbGcidjhgjUzI1NiIsInyyc....",
};

/**
 * A mock localstorage
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
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_OBJECT),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 */
function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "undifiend",
  });
}

describe("login", () => {
  it("Returns a valid token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const expectedToken = TEST_OBJECT.accessToken;
    const response = await login(TEST_EMAIL, TEST_PASSWORD);
    const savedToken = JSON.parse(localStorage.getItem("token"));
    expect(savedToken).toEqual(expectedToken);
    expect(response).toEqual(TEST_OBJECT);
    expect(TEST_EMAIL).toMatch("@noroff.no" || "@stud.noroff.no");
  });

  it("Throws error message on invalid details", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(TEST_EMAIL, TEST_PASSWORD)).rejects.toThrow("undifiend");
  });
});
