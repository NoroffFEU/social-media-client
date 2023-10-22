import { authGuard } from "../src/js/router/index.js";

jest.mock("../src/js/api/index.js", () => {
  return {
    isLoggedIn: jest.fn(() => true)
  };
});

describe("AuthGuard", () => {
  it("should call the callback when the user is logged in", () => {
    const callback = jest.fn();
    const result = authGuard(callback);

    expect(result).toEqual(callback);
    expect(callback).toHaveBeenCalled();
  });

  it("should show a message and redirect when the user is not logged in", () => {
    const callback = jest.fn();
    const message = authGuard(callback, "post");

    expect(callback).not.toHaveBeenCalled();
    expect(message).toMatchSnapshot();
  });
});
