import { logout } from "./logout";
import { remove } from "../../storage";

const TOKEN_KEY = "token";
const PROFILE_KEY = "profile";

jest.mock("../../storage", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes the token and profile from storage", () => {
    logout();
    expect(remove).toHaveBeenCalledWith(TOKEN_KEY);
    expect(remove).toHaveBeenCalledWith(PROFILE_KEY);
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
