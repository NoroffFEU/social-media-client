import { logout } from "./logout";
import { LocalStorageMock } from "../../storage/localStorageMock";

const accessToken = "access";
const fakeProfile = {
  name: "Bob Frida",
  email: "student@stud.noroff.no",
};

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("Erase all stored data in localStorage when logged out", () => {
    localStorage.setItem("profile", JSON.stringify(fakeProfile));
    localStorage.setItem("token", JSON.stringify(accessToken));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
