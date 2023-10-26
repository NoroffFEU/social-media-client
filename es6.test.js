import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

import { login } from "./src/js/api/auth/login.js";
import fetchMock from "jest-fetch-mock";

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
    fetchMock.mockResponse(JSON.stringify({ accessToken: "your-test-token" }));

    const email = "cypressTest@noroff.no";
    const password = "cypresstest";

    await login(email, password);

    // Verify that the "token" key was set in local storage
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "token",
      "your-test-token"
    );
  });
});
