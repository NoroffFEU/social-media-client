import { logout } from "./logout";
import * as storage from "../../storage/index";

jest.mock("../../storage/index");

//test suit
describe("logout function", () => {
  //test case
  it("successfully removes user data from local storage", () => {
    logout();
    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.load("token")).toEqual(undefined);
  });
});
