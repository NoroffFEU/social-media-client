// // login.test.js
import { login } from "../js/api/auth/login.js";
import * as a from "../js/storage/save.js";
const localStorageMock = {
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe("Login", () => {
  it("The login function stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "Morten" }),
      }),
    );
    const saveSpy = jest.spyOn(a, "save");
    await login("email", "password");
    expect(saveSpy).toHaveBeenCalledWith("token", "Morten");
  });
});
