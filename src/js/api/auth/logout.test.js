import { logout } from "./logout.js";
import * as storage from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout function", () => {
  beforeEach(() => {
    storage.remove.mockClear();
  });

  it("should remove the token and profile from storage", () => {
    // Act
    logout();
    // Assert
    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
    // expect(storage.remove).toHaveBeenCalled();
  });
});
