import { login } from "../../src/js/api/auth/login.js";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    accessToken: 1234567890,
  }),
});

const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

global.fetch = mockFetchSuccess;
global.localStorage = localStorageMock;

describe("login", () => {
  it("should store a token in local storage after successful fetch", async () => {
    const email = "student@stud.noroff.no";
    const password = "1234567890";
    await login(email, password);
    expect(localStorage.getItem("token")).toBe("1234567890");
    localStorage.clear();
  });
});
