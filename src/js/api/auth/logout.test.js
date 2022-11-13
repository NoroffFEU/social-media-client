import { logout } from "./logout";
import { LocalStorageMock } from "../../mocks/storage";

const TEST_ACCESS_TOKEN = "access";
const TEST_PROFILE = {
  name: "Jester",
  email: "jester@noroff.no",
  banner: null,
  avatar:
    "https://cdn.pixabay.com/photo/2016/03/31/20/07/bells-1295520_960_720.png",
};

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("Returns a valid access token in local storage and valid response object", () => {
    localStorage.setItem("profile", JSON.stringify(TEST_PROFILE));
    localStorage.setItem("token", JSON.stringify(TEST_ACCESS_TOKEN));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
