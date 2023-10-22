import { authGuard } from "../src/js/router/index.js";

jest.mock("../src/js/api/index.js", () => {
  return {
    isLoggedIn: jest.fn(() => true)
  };
});

describe("AuthGuard for Login"", () => {
  it("call t callback when user is logged in", () => {
    const callback = jest.fn();
    const result = authGuard(callback);

    expect(result).toEqual(callback);
    expect(callback).toHaveBeenCalled();
  });

  it("show message and redirect when user is not logged in", () => {
    const callback = jest.fn();
    const message = authGuard(callback, "post");

    expect(callback).not.toHaveBeenCalled();
    expect(message).toMatchSnapshot();
  });
});
