import { login } from "./login";

/**
 * create LocalStorage Mock to simulte local storage for testing
 * https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
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

const test_email = "caTester@noroff.no";
const test_password = "LeahogUlf";

const test_profile = {
  name: "CaTester",
  email: "caTester@noroff.no",
};

const test_user = JSON.stringify(test_profile);

/**
 *
 * A successful mock function fetch
 */

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(test_profile),
  });
}

/**
 * An unsuccessful mock function fetch
 */

function invalidFetch() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("login", () => {
  it("Returns valid token and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await login(test_email, test_password);
    const profile = JSON.stringify(response);
    expect(test_email).toMatch(/^[\w\-.]+@(stud.)?noroff.no$/);
    expect(test_password).toHaveLength(9);
    expect(profile).toMatch(test_user);
  });

  it("Throw error on invalid credentials", async () => {
    global.fetch = jest.fn(() => invalidFetch());
    await expect(login(test_email, test_password)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
