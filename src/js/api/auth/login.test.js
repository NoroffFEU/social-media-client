import { login } from "./login";

const NAME = "Marianne";
const EMAIL = "test@noroff.no";
const BAD_EMAIL = "bad@email.no";
const PASSWORD = "Password1";
const TOKEN = "a1b2c43d4";

const profile = { name: NAME, email: EMAIL, token: TOKEN };

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

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: "OK",
    json: () => Promise.resolve(profile),
  });
}

function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Invalid",
  });
}

describe("login", () => {
  it("Returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await login(EMAIL, PASSWORD);
    expect(result).toEqual(profile);
    global.localStorage.setItem("token", TOKEN);
    expect(result.token).toEqual(localStorage.getItem("token"));
  });
  it("throws an error when provided credentials are NOT valid", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(BAD_EMAIL, PASSWORD)).rejects.toThrow("Invalid");
  });
});
