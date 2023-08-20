import LocalStorageMock from "./localStorage.mock";
import { logout } from "./logout";

describe("logout function", () => {
  it("clears the token from local storage", () => {
    const removeItemMock = jest.spyOn(localStorage, "removeItem");

    logout();

    expect(removeItemMock).toHaveBeenCalledTimes(2);
    expect(removeItemMock).toHaveBeenCalledWith("token");
  });
});
