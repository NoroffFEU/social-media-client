import { logout } from "../js/api/auth/logout.js";

// Create Local Storage
// Source: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests from vs_lala answer on Dec 25, 2019 at 10:01
let localStorageMock = (function () {
  let store = new Map();
  return {
    getItem(key) {
      return store.get(key);
    },

    setItem: function (key, value) {
      store.set(key, value);
    },

    clear: function () {
      store = new Map();
    },

    removeItem: function (key) {
      store.delete(key);
    },
  };
})();
Object.defineProperty(global, "localStorage", { value: localStorageMock });

describe("Logout a user from the application", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  localStorageMock.setItem("profile", "true");
  localStorageMock.setItem("token", "fh32difh32dskjf");
  it("Should remove the token and profile from local storage", () => {
    const removeItemMock = jest
      .spyOn(global.localStorage, "removeItem")
      .mockImplementation(() => {});

    logout();

    expect(removeItemMock).toHaveBeenCalledWith("token");
    expect(removeItemMock).toHaveBeenCalledWith("profile");

    removeItemMock.mockRestore();
  });
});
