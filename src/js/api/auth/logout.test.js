import { logout } from "./logout";
import { remove } from "../../storage";

// Mock local storage
jest.mock("../../storage", () => ({
  remove: jest.fn(),
}));

// Test
describe("Logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("remove the token from localStorage after logout", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
