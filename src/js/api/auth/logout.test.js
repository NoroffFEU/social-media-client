import { logout } from "./logout";
import localStorageMock from "../../mocks/localStorage.mock";

global.localStorage = localStorageMock;

describe("logout", () => {
  it("deletes the token from local storage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
