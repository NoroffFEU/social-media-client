import { logout } from "./logout";
import { remove } from "../../storage/index";

// 🧪 Mock hele storage-modulen
jest.mock("../../storage/index", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    // 🔄 Nullstill mock før hver test
    remove.mockClear();
  });

  it("should remove token and profile from storage", () => {
    logout();

    // ✅ Sjekk at remove ble kalt riktig
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
