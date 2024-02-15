import { login } from "./login.js";
import localStorageMock from "../../jest-mock/storage-mock.js";

global.localStorage = localStorageMock;

const mockSuccessfulResponse = () => {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        email: "steinnes@gmail.com",
        password: "bhs12",
        accessToken: "accessToken",
        value: "accessTokenMockValue",
      }),
  });
};

const mockUnsuccessfulResponse = jest.fn(() => {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Invalid credentials",
  });
});

describe("Login function test", () => {
  it("fetches and saves token key and ", async () => {
    global.fetch = jest.fn(() => mockSuccessfulResponse());
    const data = await login("steinnes@gmail", "bhs12");
    expect(localStorage.getItem("token")).toEqual('"accessToken"');
    expect(JSON.parse(localStorage.getItem("profile")).email).toBe(data.email);
  });

  // it("deletes the token value", async () => {
  //   global.fetch = jest.fn(() => mockSuccessfulResponse());
  //   const data = await login("steinnes@gmail.com", "bhs12");
  //   expect(localStorage.getItem("token")).toEqual(null);
  // });

  // it("fails when you pass a number in as email", () => {
  //   // expect login(123, "password") to throw an error
  // });

  it("throws error on invalid credentials", async () => {
    global.fetch = jest.fn(() => mockUnsuccessfulResponse());
    await expect(login("wrong@thing.com", "bhssdsds")).rejects.toThrow(
      "Invalid credentials",
    );
  });
});
