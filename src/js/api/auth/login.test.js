import { login } from "./login";

/**
 * LocalStorage Mock for testing
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

const testEmail = "Robert@noroff.no";
const testPass = "robert123";

const testProfile = {
  name: "Test",
  email: "Robert@noroff.no",
};

const testUser = JSON.stringify(testProfile);

/**
 * Successful mock login
 */

function loginSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testProfile),
  });
}

/**
 *  Unsuccessful mock login
 */

function loginUnsuccessful() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("login", () => {
  it("Returns a valid token if provided with valid credentials", async () => {
    global.fetch = jest.fn(() => loginSuccessful());
    const response = await login(testEmail, testPass);
    const profile = JSON.stringify(response);
    expect(testEmail).toMatch("@noroff.no");
    expect(testPass).toHaveLength(9);
    expect(profile).toMatch(testUser);
  });

  it("Throwing error if credentials are invalid", async () => {
    global.fetch = jest.fn(() => loginUnsuccessful());
    await expect(login(testEmail, testPass)).rejects.toThrow("Unauthorized");
  });
});
