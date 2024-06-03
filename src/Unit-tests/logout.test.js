import { logout } from "../js/api/auth/logout.js";

const mockLocalStorage = {
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => {
    delete localStorage[key];
  }),
  setItem: jest.fn((key, value) => {
    localStorage[key] = value;
  }),
  clear: jest.fn(() => {
    for (let key in localStorage) {
      delete localStorage[key];
    }
  })
};

global.localStorage = mockLocalStorage;

describe("Logout Function Tests", () => {
  beforeEach(() => {
    localStorage.token = "mockToken";
    localStorage.profile = "mockProfile";
    jest.clearAllMocks();
  });

  afterEach(() => {
    mockLocalStorage.clear();
  });

  it("Removes token and profile from the local storage", () => {
    logout();

    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("profile");

    expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(2);
  });

  it("Checks that the local storage is cleared", () => {
    logout();

    expect(mockLocalStorage.getItem("token")).toBeNull();
    expect(mockLocalStorage.getItem("profile")).toBeNull();

    expect(mockLocalStorage.getItem).toHaveBeenCalledWith("token");
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith("profile");
    expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(2);
  });
});