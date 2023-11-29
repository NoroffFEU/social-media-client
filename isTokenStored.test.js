import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

/* SEE IF TOKEN IS SAVED IN LOCAL STORAGE AFTER LOGIN */

import { login } from "./src/js/api/auth/login.js";
if (process.env.NODE_ENV === "test") {
  require("jest-localstorage-mock");
}
describe("login function", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear local storage before each test
  });

  it('should save a "token" in local storage', async () => {
    const email = "cypressTest@noroff.no";
    const password = "cypresstest";

    // Mock the fetch function to return a successful response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "your-access-token" }),
        text: () => Promise.resolve("OK"),
      })
    );

    // Call the login function
    await login(email, password);

    // Check if "token" key exists in local storage
    expect(localStorage.getItem("token")).not.toBeNull();
  });

  it("should throw an error for unsuccessful login", async () => {
    // Mock the fetch function to return an error response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      })
    );

    // Call the login function and expect it to throw an error
    await expect(login("invalid@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized"
    );

    // Check if "token" key doesn't exist in local storage
    expect(localStorage.getItem("token")).toBeNull();
  });
});
