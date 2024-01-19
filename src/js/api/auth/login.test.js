import { login } from "./login";

// LocalStorageMock is from Olivers youtube-video "https://www.youtube.com/watch?v=7gF_0WqeQW8&t=5015s"
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

const token = "qwertyqwerty1234";
const valid_email = "user@noroff.no";
const valid_password = "password";

const invalid_email = "user@email.com";
const invalid_password = "12345";

const userLogin = {
  email: valid_email,
  password: valid_password,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ userLogin, token }),
  });
}

function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Unsuccessful login",
  });
}

describe("storage", () => {
  it("stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(valid_email, valid_password);
    expect(valid_email).toMatch("@noroff.no");
    expect(valid_password).toHaveLength(8);
    expect(data.token).toEqual(token);
  });

  it("throws an error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(() => login(invalid_email, invalid_password)).rejects.toThrow(
      "Unsuccessful login",
    );
  });
});
