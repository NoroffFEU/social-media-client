import { login } from "./login";

const TEST_PROFILE = { email: "test@email.no", password: "password" };
const TOKEN = "token";

function fetchOk() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...TEST_PROFILE, TOKEN }),
  });
}

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

describe("login", () => {
  it("returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchOk());
    const profile = await login(TEST_PROFILE.email, TEST_PROFILE.password);
    expect(profile.TOKEN).toEqual(TOKEN);
  });
});
