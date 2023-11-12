import { logout } from "./logout";

const localStorageCheck = {
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key, value) => (localStorage[key] = value)),
};

global.localStorage = localStorageCheck;

describe("Logout function", () => {
  it("Removes token from the local storage", () => {
    logout();
    expect(localStorageCheck.removeItem).toHaveBeenCalledWith("token");
    expect(localStorageCheck.removeItem).toHaveBeenCalledWith("profile");
    expect(localStorageCheck.removeItem).toHaveBeenCalledTimes(2);
  });

  it("Checks that the local storage is cleared", () => {
    expect(localStorageCheck.getItem("token")).toBeNull();
    expect(localStorageCheck.getItem("profile")).toBeNull();
    expect(localStorageCheck.getItem).toHaveBeenCalledTimes(2);
  });
});
