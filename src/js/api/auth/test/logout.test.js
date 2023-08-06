import { logout } from "../logout.js";
import * as storage from "../../../storage/index.js";

// Mock the 'remove' function from the 'storage' module
jest.mock("../../../storage/index.js", () => ({
  ...jest.requireActual("../../../storage/index.js"),
  remove: jest.fn(),
}));

describe("logout function", () => {
  it("clears the token and profile from browser storage", () => {
    // Call the logout function
    logout();

    // Check if the remove function was called with the correct arguments
    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
