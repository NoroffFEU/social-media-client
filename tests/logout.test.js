import { logout } from "../src/js/api/auth/logout.js";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("Logout Functionality", () => {
  test("clears the token from browser storage", () => {
    localStorageMock.getItem.mockReturnValue("dummy-token");
    logout();
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});
