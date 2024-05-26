import { logout } from "../js/api/auth/logout.js";
import { remove } from "../js/storage/index.js";

let localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

jest.mock("../js/storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("Logout Function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("clears the token from browser storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");

    expect(remove).toHaveBeenCalledWith("profile");
  });
});
