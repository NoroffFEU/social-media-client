const { logout } = require('../../src/js/api/auth/logout');
const storage = require('../../src/js/storage');

jest.mock('../../src/js/storage', () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn(),
}));

describe('Logout function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should remove the access token and profile from browser storage', () => {
        logout();
        expect(storage.remove).toHaveBeenCalledWith('token');
        expect(storage.remove).toHaveBeenCalledWith('profile');
        expect(storage.remove).toHaveBeenCalledTimes(2);
    });

    it('should not throw errors when storage is already empty', () => {
        // if no token or/and  profile
        storage.remove.mockImplementation(() => {});
        expect(() => logout()).not.toThrow();
    });
});
