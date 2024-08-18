import { login } from "./login";

// Mock local storage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  },
};

// Fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true, accessToken: "testToken" }),
  }),
);

// Test
describe("Login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("creates a token with a successful login", async () => {
    const email = "deepsalhan@nokas.com";
    const password = "Testing123";
    await login(email, password);

    const storedToken = localStorage.getItem("token");
    const parsedToken = storedToken && JSON.parse(storedToken);

    expect(parsedToken).toEqual("testToken");
  });
});
