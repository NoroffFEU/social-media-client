import { logout } from "../src/js/api/auth/logout";
import { remove } from "../src/js/storage";

global.localStorage = {
    setItem: (key, val) => {
        global.localStorage[key] = val;
    },
    getItem: (key) => global.localStorage[key],

    removeItem: (key) => {
        delete global.localStorage[key];
    }
}

describe('login function', () => {
    beforeEach(() => {
        // Set up token before each test
        localStorage.setItem('token', 'mockToken');
    });

    it('should remove token when logging out', async () => {
        await logout();   
        expect(localStorage.getItem('token')).not.toBe('mockToken')
    });

    it('should set token to undefined when logging out', async () => {
        await logout();
        expect(localStorage.getItem('token')).toBeUndefined();
    });
})
