import * as storage from "../../storage/index.js";
import { logout } from "./logout.js";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(), // Mock the load function
  remove: jest.fn(), // Mock the remove function
}));

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    remove: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(global, "localStorage", { value: localStorageMock });

describe("logout working", () => {
  it("deletes profile and token", async () => {
    // Call the login function
    await logout();

    expect(storage.remove).toHaveBeenCalledWith("profile");
    expect(storage.remove).toHaveBeenCalledWith("token");
  });
});
