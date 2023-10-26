import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

import { login } from "/src/js/api/auth/login.js"; // Replace with the actual import path
import { save } from "/src/js/storage/save.js";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "your-test-token" }),
    statusText: "OK",
  })
);

// Mock the storage functions
jest.mock("/src/js/storage/save.js", () => ({
  save: jest.fn(),
}));

describe("login function", () => {
  it("fetches and stores a token in browser storage", async () => {
    const email = "cypressTest@noroff.no";
    const password = "cypresstest";

    const result = await login(email, password);

    // Verify that the fetch function was called with the expected URL and data
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("social/auth/login"),
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Verify that the storage function save was called with the token
    expect(save).toHaveBeenCalledWith("token", "your-test-token");

    // Verify that the token was deleted from the profile object
    expect(save).toHaveBeenCalledWith("profile", {
      /* your profile data without accessToken */
    });

    // Verify that the function returns the profile object
    expect(result).toEqual({
      /* your profile data without accessToken */
    });
  });
});
