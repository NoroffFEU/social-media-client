// logout.test.js
import { logout } from "./logout";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("removes token and profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
