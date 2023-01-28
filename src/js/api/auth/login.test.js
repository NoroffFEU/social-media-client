import { login } from "./login";

const testEmail = "heppa@noroff.no";
const testPassword = "heppa123";
const token = "testToken";
const testProfile = {
  email: testEmail,
  password: testPassword,
  token: token,
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

function fetchSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(testProfile),
  });
}

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await login(testEmail, testPassword);
    expect(result).toEqual(testProfile);
  });
});
