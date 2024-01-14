/* Test to verify that the logout function removes the token from browser storage
 */

import { logout } from "./logout.js";
import * as storage from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token from storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("token");
  });

  it("clears the profile from storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("profile");
  });

  it("clears both token and profile from storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
