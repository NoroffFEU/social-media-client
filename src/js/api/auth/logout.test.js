import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

// Mock
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should clear the token from the browser", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
