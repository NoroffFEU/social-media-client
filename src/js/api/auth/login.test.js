import { login } from "./login";

/*
Import from stackoverflow.com
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

// The login function stores a token when provided with valid credentials

const test_user_email = "mark.robinson@noroff.no";
const test_user_password = "mark1234";
const test_user_name = "mark_robinson";
const test_access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const test_profile = {
  name: test_user_name,
  email: test_user_email,
  accessToken: test_access_token,
};

/**
 * A function that fakes an approved API fetch call
 */
function fetchMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(test_profile),
  });
}

global.fetch = jest.fn(() => fetchMockSuccess());

describe("login", () => {
  it("should store a token when provided valid email id and password", async () => {
    const result = await login(test_user_email, test_user_password);
    expect(result).toEqual(test_profile);
    expect(JSON.parse(global.localStorage.getItem("token"))).toEqual(
      test_access_token
    );
  });
});
