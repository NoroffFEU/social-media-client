import { login } from "./login.js";
import { localStorageMock } from "../../test/localStorageMock.js";
import { load } from "../../storage/load.js";

function mockSuccessfulResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        email: "johndoes@gmail.com",
        password: "john123",
        token: "accessToken",
        value: "accessTokenMockValueScript",
      }),
  });
}

function mockUnsuccessfulResponse() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Invalid credentials",
  });
}

global.localStorage = new localStorageMock();

describe("Login function", () => {
  it("fetches and saves token key", async () => {
    global.fetch = jest.fn(() => mockSuccessfulResponse());
    const data = await login();
    expect(load(data.token)).toBeDefined();
  });

  it("deletes the token value", async () => {
    global.fetch = jest.fn(() => mockSuccessfulResponse());
    const data = await login();
    expect(load(data.token)).toEqual(null);
  });

  it("throws error on invalid credentials", async () => {
    global.fetch = jest.fn(() => mockUnsuccessfulResponse());
    await expect(login("johndoes@gmail.com", "john321")).rejects.toThrow(
      "Invalid credentials"
    );
  });
});
