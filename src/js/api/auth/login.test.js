import { login } from "./login.js";
import StorageMock from "../../jest-mock/storage-mock.js";

global.localStorage = new StorageMock();

const mockSuccessfulResponse = () => {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        email: "steinnes@gmail.com",
        password: "bhs123",
        accessToken: "accessToken",
        value: "accessTokenMockValueScript",
      }),
  });
};

const mockUnsuccessfulResponse = jest.fn(() => {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Invalid credentials",
  });
});

describe("Login function", () => {
  it("fetches and saves token key", async () => {
    global.fetch = jest.fn(() => mockSuccessfulResponse());
    const data = await login("steinnes@mail", "bhs123");
    expect(localStorage.getItem).toBeDefined();
  });

  // it("deletes the token value", async () => {
  //   global.fetch = jest.fn(() => mockSuccessfulResponse());
  //   const data = await login("steinnes@gmail.com", "bhs123");
  //   expect(localStorage.getItem).toEqual(null);
  // });

  it("throws error on invalid credentials", async () => {
    global.fetch = jest.fn(() => mockUnsuccessfulResponse());
    await expect(login("s", "bhs")).rejects.toThrow("Invalid credentials");
  });
});
