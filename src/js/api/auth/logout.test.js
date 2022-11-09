import logout from "./logout.js";

describe("logout", () => {
  it("should remove the token and profile from storage", () => {
    const remove = jest.fn();
    jest.mock("../../storage/index.js", () => ({ remove }));
    logout();
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
