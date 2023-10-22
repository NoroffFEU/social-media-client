import { login } from "../src/js/api/index.js";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("Login Functionality", () => {
  test("fetches and stores a token in browser storage", () => {
    login("username", "password");
    expect(localStorageMock.setItem).toHaveBeenCalledWith("token", "dummy-token");
  });
});

