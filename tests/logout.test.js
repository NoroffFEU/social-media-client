import { logout } from "../src/js/api/index.js";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("Logout Functionality", () => {
  it("clears the token from browser storage", () => {

    localStorageMock.getItem.mockReturnValue("token);
    logout();
    
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});
