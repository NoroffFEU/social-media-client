import { logout } from "./logout";
import { LocalStorageMock } from "../../mocks/localStorageMock";

global.localStorage = new LocalStorageMock();

describe("Log out", () => {
  it("Clears token at log out", async () => {
    localStorage.setItem("token", "1234");
    logout();
    const token = localStorage.getItem("token");
    expect(token).toBe(null);
  });
});
