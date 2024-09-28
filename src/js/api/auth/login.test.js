import { login } from "./login";
import { LocalStorageMock } from "../../storage/localStorageMock";

/* global global */

const testEmail = "oletest@noroff.no";
const testPassword = "ThisIsMyPassword123";
const wrongTestPassword = "NotThePassword2121";
const testToken = "testToken";
const profile = {
  email: testEmail,
  password: testPassword,
  token: testToken,
};

global.localStorage = new LocalStorageMock();

function successfullLogin() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(profile),
  });
}

function unsuccessfullLogin() {
  return Promise.resolve({
    ok: false,
    staus: 404,
    statusText: "Not valid login",
  });
}

describe("loginProfile", () => {
  it("logs a value and stores it in localStorage with valid login-information", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => successfullLogin());
    await login(profile);
    expect(testToken).toBeDefined();
  });

  it("throws an error when trying to log in with invalid login-information", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => unsuccessfullLogin());
    await expect(login(testEmail, wrongTestPassword)).rejects.toThrow(
      "Not valid login"
    );
  });
});
