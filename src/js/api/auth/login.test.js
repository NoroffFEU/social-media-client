import { login } from "./login.js";
import * as storage from "../../storage/index.js";

// Mock the save function from the storage module
jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(), // Mock the load function
}));

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(global, "localStorage", { value: localStorageMock });

// Mock the fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ token: "token return" }),
});
global.fetch = mockFetchSuccess;

describe("login token", () => {
  it("login token saved", async () => {
    // Call the login function
    await login("test@example.com", "password");

    expect(storage.save).toHaveBeenCalledWith("profile", {
      token: "token return",
    });
  });
});
