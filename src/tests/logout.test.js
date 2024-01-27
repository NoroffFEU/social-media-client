import { logout } from "../js/api/auth/logout";

const localStorageMock = {
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe("Logout", () => {
  it("The logout function clears the token from browser storage", async () => {
    logout();
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});
