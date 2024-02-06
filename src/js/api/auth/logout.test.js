import { logout } from "../auth/logout.js";
import { locationMock } from "../../jest-mock/mock.js";

// eslint-disable-next-line no-undef
global.localStorage = {
  clear: jest.fn(),
};

describe("Logout Function", () => {
  it("should clear local storage  and update window.location", () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };

    logout(mockEvent);

    expect(localStorage.clear).toHaveBeenCalled();
    expect(locationMock.href).toBe("../index.html");
  });
});
