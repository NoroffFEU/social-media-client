import { logout } from "../js/api/auth/logout";
import { remove } from "../js/storage";

// Mock the remove function from "../../storage/index.js"
jest.mock("../js/storage", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("should call remove function with correct parameters", () => {
    // Call the logout function
    logout();

    // Assert that remove function was called with "token" and "profile"
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");

    // Assert that remove function was called twice
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
