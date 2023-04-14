import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout", () => {
  it("should remove token and profile keys from storage", () => {
    logout();
    expect(remove).toHaveBeenCalledTimes(2);
    expect(remove).toHaveBeenNthCalledWith(1, "token");
    expect(remove).toHaveBeenNthCalledWith(2, "profile");
  });
});
