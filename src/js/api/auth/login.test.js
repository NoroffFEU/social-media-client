import { login } from "./login";
import { save } from "../../storage";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "abc123" }),
  })
);

jest.mock("../../storage", () => ({
  save: jest.fn(),
}));

describe("login", () => {
  it("should save the token and profile to storage and return the profile when login is successful", async () => {
    const expectedProfile = {
      id: "123",
      name: "Test User",
      email: "test@example.com",
    };

    await login("test@example.com", "password");

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({
        email: "test@example.com",
        password: "password",
      }),
      headers: headers("application/json"),
    });

    expect(save).toHaveBeenCalledWith("token", "abc123");
    expect(save).toHaveBeenCalledWith("profile", expectedProfile);
  });
});
