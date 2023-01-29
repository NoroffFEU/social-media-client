import { logout } from "./logout.js";
import { save, load } from "../../storage/index.js";
import storageMock from "../../storage/storageMock.js";

global.localStorage = storageMock;

describe("logout", () => {
  it("clears the token from browser storage", () => {
    save("token");
    logout();
    expect(load("token")).toBeNull();
  });
});
