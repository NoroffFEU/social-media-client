// Mock dependencies used in logout function
import { logout } from "../js/api/auth/logout.js";
import { remove } from "../js/storage/index";

jest.mock("../js/storage/index", () => ({
  save: jest.fn(),
  load: jest.fn(),
  remove: jest.fn(),
}));

describe("Logout API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should clear the token from browser storage", async () => {
    // Call the logout function
    await logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});
