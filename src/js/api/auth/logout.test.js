import { save, load } from "../../storage/index.js";
import { logout } from "../../api/auth/logout.js";
import localStorageMock from "./localStorage.mock";

global.localStorage = localStorageMock;

describe("storage", () => {
  const key = "token";
  const value = ["qwertyqwerty1234"];
  it("saves, gets, and removes token from localStorage", () => {
    save(key, value);
    expect(load(key)).toEqual(value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
    logout();
    expect(localStorage.getItem(key)).toBeNull();
  });
});
