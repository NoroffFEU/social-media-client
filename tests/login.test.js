import { login } from "../src/js/api/index.js";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("Login Functionality", () => {
  it("fetches and stores a token in browser storage", () => {

    login("username", "password");

        expect(localStorageMock.setItem).toHaveBeenCalledWith("token", "your-token-value");
  });
});
