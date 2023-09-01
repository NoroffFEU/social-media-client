import { logout } from "../logout.js";

// Mocked data
const accessToken = "11111";
const mockProfile = {
  name: "victoria",
  email: "victoria@stud.noroff.no",
};

// Mocked localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

describe("logout", () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("removes profile and token from LocalStorage", () => {
    localStorageMock.getItem
      .mockReturnValueOnce(JSON.stringify(mockProfile))
      .mockReturnValueOnce(JSON.stringify(accessToken));

    logout();

    expect(localStorageMock.setItem).not.toHaveBeenCalled();
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("profile");
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});