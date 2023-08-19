import { logout } from "./logout.js";
import { localStorageMock } from "../../mocks/localStorage.mock.js";

describe("logout function", () => {
  beforeEach(() => {
    localStorageMock();
    global.localStorage.removeItem.mockClear();
  });

  it("clears the token from browser storage", () => {
    logout();
    expect(global.localStorage.removeItem).toHaveBeenCalledWith("token");
  });

  it("clears the profile from browser storage", () => {
    logout();
    expect(global.localStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});
