import { logout } from '../../../js/api/auth/logout.js';

// Mock the storage module
jest.mock('../../../js/storage/index.js', () => ({
    remove: jest.fn()
}));

// import the mocked storage module
import * as storage from '../../../js/storage/index.js';

describe('logout function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should clear the token and profile from storage when logout is called', () => {
        logout();

        expect(storage.remove).toHaveBeenCalledWith('token');
        expect(storage.remove).toHaveBeenCalledTimes(2);
        expect(storage.remove).toHaveBeenCalledWith('profile');
    });
});