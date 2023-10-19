import { login } from "./index.js";
import { save } from "../../storage/index.js";

global.fetch = jest.fn(() => Promise.resolve({}));
jest.mock("../../storage/index.js");

describe("Login", () => {
  it("fetches and stores token in browser storage", async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ name: "username", accessToken: "12345" }),
    });
    await login("user@email.com", "Password1");
    expect(save).toHaveBeenCalledWith("token", "12345");
  });
});
