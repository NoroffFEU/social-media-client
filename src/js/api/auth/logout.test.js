import { logout } from "./logout";
import { LocalStorageMock } from "../../mock/localStorage.mock";

const accessToken = "12345";
const mockProfile = {
  name: "cor",
  email: "cor@stud.noroff.no",
};

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

describe("logout", () => {
  it("Returns a valid token and removes from Localstorage", () => {
    localStorage.setItem("profile", JSON.stringify(mockProfile));
    localStorage.setItem("token", JSON.stringify(accessToken));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
