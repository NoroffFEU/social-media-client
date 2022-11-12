import { login } from "./login";

const email = "name@noroff.no";
const badEmail = "badname@email.com";
const password = "Password1";
const badPassword = "badpassword";
const name = "userName";
const token = "1234567890";

const profile = {
  email: email,
  name: name,
  token: token,
};

// Mock the fetch function that succeeds
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: "Created",
    json: () => Promise.resolve({ ...profile, token }),
  });
}
// Mock the fetch function that fails
function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Invalid email or password",
  });
}

// Mock localStorage to store the token and profile
class LocalStorageMock {
  constructor() {
    this.value = {};
  }
  clear() {
    this.value = {};
  }
  getItem(key) {
    return this.value[key] || null;
  }
  setItem(key, value) {
    this.value[key] = String(value);
  }
  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

// Test that the login function returns a profile
describe("login", () => {
  it("returns a profile when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await login(email, password);
    expect(email).toMatch("@noroff.no");
    expect(result).toHaveProperty("token");
  });
  // Test that the login function throws an error when provided with invalid credentials
  it("throws an error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    expect(badEmail).not.toMatch("@noroff.no");

    await expect(login(badEmail, badPassword)).rejects.toThrow(
      "Invalid email or password"
    );
  });
});
