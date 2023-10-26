import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

import { loginListener } from "/src/js/listeners/auth/login"; // Replace with the actual import path

describe("loginListener function", () => {
  it("checks for 'token' in local storage after a successful login", async () => {
    // Mock a successful login scenario
    const event = {
      preventDefault: jest.fn(),
      target: document.createElement("form"),
    };

    // Mock the auth.login function to simulate a successful login
    const loginResult = { name: "Test User" };
    const authMock = {
      login: jest.fn().mockResolvedValue(loginResult),
    };

    // Mock the localStorage getItem method
    const localStorageMock = {
      getItem: jest.fn(),
    };

    // Replace the real localStorage with the mock
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    // Call the loginListener function
    await loginListener(event);

    // Verify that preventDefault was called
    expect(event.preventDefault).toHaveBeenCalled();

    // Verify that auth.login was called
    expect(authMock.login).toHaveBeenCalled();

    // Verify that local storage getItem was called with "token"
    expect(localStorageMock.getItem).toHaveBeenCalledWith("token");
  });
});
