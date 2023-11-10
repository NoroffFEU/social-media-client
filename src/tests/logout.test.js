import { logout } from "../js/api/auth/logout";
import * as storage from "../js/storage/index";

jest.mock("../js/storage/index", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("should clear the token and profile from storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
