import { logout } from "../api/auth/logout";

const testLogout = (logoutFn, keyToRemove, testDescription) => {
    it(testDescription, () => {
        global.localStorage = {
            removeItem: jest.fn(),
        };
        logoutFn();
        expect(localStorage.removeItem).toHaveBeenCalledWith(keyToRemove);
    });
};

describe("logout", () => {
    testLogout(logout, "token", "Removes accessToken from local storage");
    testLogout(logout, "profile", "Removes user profile from local storage");
});

describe("secondLogout", () => {
    testLogout(logout, "token", "Removes accessToken from local storage");
    testLogout(logout, "profile", "Removes user profile from local storage");
});
