import { login } from "./login";

const TEST_PROFILE = { email: "test@email.no", password: "password" };
const TOKEN = "token";

// fetch mock - for fetch success - with TEST_PROFILE and TOKEN vars as the return.
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

// local storage needed for the login() function.
global.localStorage = new LocalStorageMock();

describe("login", () => {
  it("returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchOk());
    //running the login function with the TEST_PROFILE email and password as arguments.
    const profile = await login(TEST_PROFILE.email, TEST_PROFILE.password);
    expect(profile.TOKEN).toEqual(TOKEN);
  });
});
