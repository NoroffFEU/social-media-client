import { logout } from "./logout";
global.localStorage = {
              removeItem: jest.fn(),
            };

describe("logout", () => {
        it("it removes token from browser", () => {
        logout();
        expect(localStorage.removeItem).toHaveBeenCalledWith("token"); 

    })
})
