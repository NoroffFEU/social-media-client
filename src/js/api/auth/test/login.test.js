import * as storage from "../../../storage/index.js";
import { login } from "../login.js";

// Mock the 'fetch' function
globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ accessToken: "your-token", profile: { name: "User" } }),
  }),
);

// Mock the 'save' function from the 'storage' module
jest.mock("../../../storage/index.js", () => ({
  ...jest.requireActual("../../../storage/index.js"),
  save: jest.fn(),
}));

describe("login function", () => {
  it("fetches and stores a token in storage", async () => {
    const profile = await login("user@example.com", "password");

    // Check if the save function was called with the correct arguments for token
    expect(storage.save).toHaveBeenCalledWith("token", "your-token");

    // Check if the save function was called to save the profile (minus the token)
    expect(storage.save).toHaveBeenCalledWith("profile", {
      profile: { name: "User" },
    });

    // Check if the returned profile is correct
    expect(profile).toEqual({ profile: { name: "User" } });
  });
});
