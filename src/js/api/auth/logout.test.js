import { logout } from "./logout";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

const global = globalThis;

//const token = "token";

global.localStorage = localStorageMock;

describe("logout", () => {
  it("clears the token from browser storage", async () => {
    const mockToken = "token";
    localStorage.removeItem("token", mockToken);
    logout();
    expect(localStorage.getItem("token")).toBeUndefined();
  });
});
