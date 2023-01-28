import { logout } from "./logout.js";
import { LocalStorageMock } from "../../storage/mock";

global.localStorage = new LocalStorageMock();

describe("Logout Test", () => {
  it("The logout function clears the token from browser storage", () => {
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("profile")).toEqual(null);
  })
})