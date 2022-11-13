import { logout } from "./logout.js";
import LocalStorageMock from "../../storage/mocks/localstorage.js";
import { login } from "./login.js";

global.localStorage = new LocalStorageMock();

const apiResponse = {
  name: "noroffStud",
  email: "noroffStud@noroff.no",
  accessToken: "hyp0th3t1c4lt0k3n",
};

const { name, email } = apiResponse;
const profile = { name, email };

describe("logoutFunction", () => {
  it("clears the token from browser storage", () => {
    localStorage.setItem("profile", profile);
    localStorage.setItem("token", apiResponse.accessToken);
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
