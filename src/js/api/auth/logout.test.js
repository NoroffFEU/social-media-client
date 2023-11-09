import { logout } from "../auth/logout";

globalThis.localStorage = { removeItem: jest.fn() };

describe("logout", () => {
  it("Removes token from local storage", () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
