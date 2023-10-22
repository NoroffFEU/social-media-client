import { login } from "./login.js";
import { save } from "../../storage/index.js";

global.fetch = jest.fn();
jest.mock("../../storage/index.js");

describe("login function", () => {
  it("should store a token", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ accessToken: "mockToken", someOtherData: "data" }),
      }),
    );

    await login("marius@noroff.no", "testpass");

    expect(save).toHaveBeenCalledWith("token", "mockToken");
  });
});
