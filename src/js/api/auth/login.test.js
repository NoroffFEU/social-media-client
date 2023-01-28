import { login } from "./login";

const USER_NAME = "sjur";
const USER_EMAIL = "sjur@noroff.no";
const USER_PASSWORD = "12345678";
const USER_PASSWORD_BAD = "33333333"
const USER_CRED = { name: USER_NAME, email: USER_EMAIL };
const TEST_USER = JSON.stringify(USER_EMAIL, USER_PASSWORD);
const USER_TOKEN = "Invalid Token";


class LocalStorageMock {
  constructor() {
    this.value = {};
  }
   
  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  clear() {
    this.value = {};
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

function validLogin() {
  return Promise.resolve({
    ok: true,
    staus: 200,
    statusText: "OK",
    json: () => Promise.resolve(USER_CRED)
  });
}

function invalidLogin() {
  return Promise.resolve({
    ok: false,
    staus: 404,
    statusText: "Not valid login"
  });
}

describe("Login Test", () => {
  it("The login function stores a token when provided with valid credentials", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => validLogin());
    await login(TEST_USER);
    expect(USER_TOKEN).toBeDefined();
  });

  it("Error when invalid login", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => invalidLogin());
    await expect(login(USER_EMAIL, USER_PASSWORD_BAD)).rejects.toThrow("Not valid login");
  });
})
