import { login } from "../js/api/auth/login.js";

// Real login for test function
const username = "kptest1@noroff.no";
const realPassword = "Passord1234*";
const real_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const user = {
  name: "Kp",
  email: username,
};
// Mock login for test function
const wrongUsername = "wrongUsername";
const wrongPassword = "wrongPassword";

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
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...user, real_token }),
  });
}

function fetchFailure(status = 404, statusText = "Wrong username or password") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  test("should return a user object when login is successful", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await login(username, realPassword);
    expect(username).toMatch("@noroff.no");
    expect(realPassword).toHaveLength(12);
    expect(result.real_token).toEqual(real_token);
  });

  test("should return an error when login is unsuccessful", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(wrongUsername, wrongPassword)).rejects.toThrow(
      "Wrong username or password"
    );
  });
});
