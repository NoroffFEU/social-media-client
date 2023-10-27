import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

import { login } from "./src/js/api/auth/login.js";
// Import fetchMock only when running Jest tests
if (process.env.NODE_ENV === "test") {
  const fetchMock = require("jest-fetch-mock");
  fetchMock.enableMocks();
}

describe("login function", () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches and stores a token in local storage", async () => {
    // Mock the global localStorage object
    const localStorageMock = {
      setItem: jest.fn(),
    };

    // Replace the real localStorage with the mock
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    // Mock the fetch response
    fetchMock.mockResponse(JSON.stringify({ accessToken: "your-test-token" }), {
      status: 200,
    });

    const email = "cypressTest@noroff.no";
    const password = "cypresstest";

    const result = await login(email, password);

    // Verify that the "token" key was set in local storage as a string
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "token",
      expect.any(String)
    );

    // Verify that the "profile" key was set in local storage as a JSON string
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "profile",
      expect.any(String)
    );

    // Verify that the function returns the profile object
    expect(result).toEqual(
      expect.objectContaining({ accessToken: "your-test-token" })
    );
  });

  it("throws an error when the response is not OK", async () => {
    // Mock the fetch response with an error status
    fetchMock.mockResponse(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });

    const email = "invalid@test.com";
    const password = "invalidpassword";

    await expect(login(email, password)).rejects.toThrow("Invalid credentials");
  });
});
