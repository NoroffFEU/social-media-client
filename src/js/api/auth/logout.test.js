import storage from "./helpers/storage.js";
import { logout } from "../auth/logout.js";

global.localStorage = storage;

describe("logout", () => {
  it("removes the token from localstorage"),
    () => {
      logout();
    };
});
