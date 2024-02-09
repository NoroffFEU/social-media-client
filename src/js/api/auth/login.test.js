import { login } from "./login.js";
import StorageMock from "../../jest-mock/storage-mock.js";

const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};

global.localStorage = new StorageMock();

function mockSuccessfulResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        email: "steinnes@gmail.com",
        password: "bhs123",
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
    await expect(login("steinnes@gmail.com", "bhs123")).rejects.toThrow(
      "Invalid credentials",
    );
  });
});
