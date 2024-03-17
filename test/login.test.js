import { login } from "../src/js/api/auth/login.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "123456789" }),
    statusText: "OK",
  })
);

const mockStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, "localStorage", { value: mockStorage });

describe("login", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Stores the token in localStorage", async () => {
    const email = "mail@example.com";
    const password = "password";

    await login(email, password);

    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toBe("123456789");
  });
});