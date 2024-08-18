import { logout } from "./logout";

// LOCALSTORAGE MOCK
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

global.localStorage = localStorageMock;

// TEST
describe("Logout", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("removes the token from localstorage", () => {
    localStorageMock.setItem("token", "testToken");

    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(localStorage.getItem("token")).toBe(null);
  });
});
