import { logout } from "../src/js/api/auth/index.js";
import { remove } from "../src/js/storage/index.js";

jest.mock("../src/js/storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    remove.mockClear();
  });

  test("token and profile is cleared from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
    expect(remove).toHaveBeenCalledTimes(2);
  });
});