import { login } from "../api/auth/login.js";

const TEST_USERNAME = "test_username";
const TEST_EMAIL = "testuser@noroff.no";
const TEST_MEDIA =
  "https://themenewyork.mystore4.no/users/themenewyork_mystore_no/images/54099_Gucci_demo1111_1.png";
const TEST_PASSWORD = "abcdefghi123456789";
const TEST_TOKEN = "ab12cd34ef56gh78";

const TEST_OBJECT = {
  name: TEST_USERNAME,
  email: TEST_EMAIL,
  banner: null,
  avatar: TEST_MEDIA,
  accessToken: TEST_TOKEN,
};

// Mock class for local storage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  getItem(key) {
    return this.store[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

// Mock function for fetch login success
function fetchLoginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_OBJECT),
  });
}

// Mock function for fetch error
function fetchLoginError() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

// Test function for login
describe("login", () => {
  it("checks that the login function returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() =>
      fetchLoginSuccess()
    );
    const expectedToken = TEST_OBJECT.accessToken;
    const response = await login(
      TEST_EMAIL,
      TEST_PASSWORD
    );
    const browserToken = JSON.parse(
      localStorage.getItem("token")
    );
    expect(browserToken).toEqual(expectedToken);
    expect(response).toEqual(TEST_OBJECT);
  });

  it("Throws error message on invalid inputs", async () => {
    global.fetch = jest.fn(() =>
      fetchLoginError()
    );
    await expect(
      login(TEST_EMAIL, TEST_PASSWORD)
    ).rejects.toThrow("Unauthorized");
  });
});
