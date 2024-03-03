/*global global*/
import { login } from "./login.js";

// Mock localstorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

// Mock data for successful response
const mockResponse = {
  name: "mockName",
  email: "validuser@noroff.no",
  banner: "",
  avatar: "",
  accessToken: "mockAccessToken",
};

// Mock a successful response from the API
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "authorization ok",
    json: () => Promise.resolve(mockResponse),
  });
}

// Mock a failed response from the API
function fetchFailure(status, statusText) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  beforeEach(() => {
    global.localStorage.clear();
  });

  it("should fetch and store a token and profile in browser storage for a valid user", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const profile = await login("validuser@noroff.no", "validpassword");

    expect(profile).toEqual(mockResponse);
    expect(JSON.parse(global.localStorage.getItem("token"))).toEqual(
      "mockAccessToken"
    );
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(profile);
  });

  it("should throw an error for an invalid user", async () => {
    global.fetch = jest.fn(() => fetchFailure(401, "Unauthorized"));
    await expect(
      login("invaliduser@noroff.no", "invalidpassword")
    ).rejects.toThrow("Unauthorized");
  });

  it("should throw an error for a server error", async () => {
    global.fetch = jest.fn(() => fetchFailure(500, "Server Error"));
    await expect(
      login("validuser@example.com", "validpassword")
    ).rejects.toThrow("Server Error");
  });
});
