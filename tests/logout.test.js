import { logout } from "../src/js/api/index.js";

jest.mock("../src/js/router/index.js", () => {
  return {
    authGuard: jest.fn((callback) => callback())
  };
});

describe("Logout", () => {
  it("logs out the user and redirects", () => {
    const callback = jest.fn();
    logout(callback);

    expect(callback).toHaveBeenCalled();
  });

  it("does not log out if user is not logged in", () => {
    const callback = jest.fn();
    jest.spyOn(jest.requireActual("../src/js/api/index.js"), "isLoggedIn").mockReturnValue(false);

    logout(callback);

    expect(callback).not.toHaveBeenCalled();
  });
});
