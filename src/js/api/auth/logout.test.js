/*
 * Test: The logout function clears the token from browser storage
 */

import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });

  it("clears the profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("profile");
  });

  it("clears both token and profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
