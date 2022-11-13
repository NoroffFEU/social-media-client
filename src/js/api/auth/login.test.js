import { login } from "./login";

const validEmail = "adiranB@noroff.no";
const invalidEmail = "adrianB@.com";
const password = "12345678";

const SuccessResponse = {
  name: "Adrian",
  email: "adiranB@noroff.no",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
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
    ok: true,
    status: 200,
    statusText: "success",
    json: () => Promise.resolve(SuccessResponse),
  });
}

function fetchFail(status = 404, statusText = "invalid") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  it("Returns a valid token and a valid response object when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const token = SuccessResponse.accessToken;
    const response = await login(validEmail, password);
    const savedToken = JSON.parse(localStorage.getItem("token"));
    expect(savedToken).toEqual(token);
    expect(response).toEqual(SuccessResponse);
    expect(validEmail).toMatch("@noroff.no");
    expect(password).toHaveLength(8);
  });

  it("Throws an error if the provided credentials are invalid", async () => {
    global.fetch = jest.fn(() => fetchFail());
    await expect(login(invalidEmail, password)).rejects.toThrow("invalid");
  });
});
