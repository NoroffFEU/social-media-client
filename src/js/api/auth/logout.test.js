import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes the token from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });

  it("removes the user profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("profile");
  });

  it("removes both token and user profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
