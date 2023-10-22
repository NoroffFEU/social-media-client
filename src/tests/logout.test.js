import { logout } from "../js/api/auth/logout.js";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

describe("logout user", () => {
  it("should remove token from localStorage", () => {
    const token = "mockToken";

    localStorageMock.setItem("token", token);

    logout();

    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});
