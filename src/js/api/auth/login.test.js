import { login } from "./login.js";
import { save } from "../../storage/index.js";

global.fetch = jest.fn();
jest.mock("../../storage/index.js");

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should store a token on successful login", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "mockToken", someOtherData: "data" }),
      })
    );

    await login("Bart@noroff.no", "strongpassword");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith("token", "mockToken");
    expect(save).toHaveBeenCalledWith("profile", { someOtherData: "data" });
  });

  it("must handle failed login", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      })
    );

    await expect(login("unauthorizedUser@noroff.no", "invalidpass")).rejects.toThrow("Unauthorized");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).not.toHaveBeenCalled();
  });
});
