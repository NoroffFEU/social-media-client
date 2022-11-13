/* eslint-disable no-undef */
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

const TEST_NAME = "akeek";
const TEST_VALID_EMAIL = "sveek-29353@stud.noroff.no";
const TEST_TOKEN = "token";
const TEST_PASSWORD = "passord123";
const TEST_INVALID_EMAIL = "ola@nordmann.no";
const JSON_RESPONSE = {
  name: TEST_NAME,
  email: TEST_VALID_EMAIL,
  token: TEST_TOKEN,
};

function loginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(JSON_RESPONSE),
  });
}

function loginFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Invalid email or password",
  });
}

describe("Login", () => {
  it("Logs in successfully", async () => {
    global.fetch = jest.fn(() => loginSuccess());
    const profile = await login(TEST_VALID_EMAIL, TEST_PASSWORD);
    global.localStorage.setItem("token", TEST_TOKEN);
    expect(profile).toEqual(JSON_RESPONSE);
    expect(profile.token).toEqual(global.localStorage.getItem("token"));
  });

  it("Fails to login", async () => {
    global.fetch = jest.fn(() => loginFailure());
    await expect(login(TEST_INVALID_EMAIL, TEST_PASSWORD)).rejects.toThrow(
      "Invalid email or password"
    );
  });
});
