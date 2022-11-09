import login from "./login.js";

describe("login", () => {
  it("should save the token and profile to storage", () => {
    const save = jest.fn();
    jest.mock("../../storage/index.js", () => ({ save }));
    login("email", "password");
    expect(save).toHaveBeenCalledWith("token", "accessToken");
    expect(save).toHaveBeenCalledWith("profile", "profile");
  });
});
