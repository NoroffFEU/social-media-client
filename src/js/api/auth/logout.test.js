import { logout } from "../auth/logout.js";
import { createMockLocation } from "../../jest-mock/mock.js";

describe("Logout Function", () => {
  beforeEach(() => {
    global.localStorage = {
      clear: jest.fn(),
    };
  });

  afterEach(() => {
    // Reset global.localStorage after each test
    global.localStorage = undefined;
  });
  it("should clear local storage and update window.location", () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };

    const mockLocation = createMockLocation("");

    logout(mockEvent);

    expect(localStorage.clear).toHaveBeenCalledTimes(1);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(mockLocation.href).toBe("");
  });
});
