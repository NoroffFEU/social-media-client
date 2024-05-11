import * as storage from '../../../js/storage/index.js';
import { login, isLoggedIn, profile } from '../../../js/api/auth/index.js';

jest.mock('../../../js/storage/index.js', () => ({
    load: jest.fn(),
    save: jest.fn(),
    remove: jest.fn()
}));
jest.mock('../../../js/api/constants.js');
jest.mock('../../../js/api/headers.js');

describe('login.js', () => {
    let mockSave;

    beforeEach(() => {
        mockSave = jest.fn();
        storage.save.mockImplementation(mockSave);
    });

    it('should store a token when login is successful', async () => {
        const validEmail = 'valid@email.com';
        const validPassword = 'secret123';
        const mockProfile = { username: 'johndoe', accessToken: 'valid-token' };

        // Mock API response
        const mockResponse = { ok: true, json: jest.fn().mockReturnValue(mockProfile) };
        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        const returnedProfile = await login(validEmail, validPassword);

        expect(returnedProfile).toEqual(mockProfile);
        expect(mockSave).toHaveBeenCalledWith('token', 'valid-token');
    });

    it('should not save a token on login error', async () => {
        const mockResponse = { ok: false, statusText: 'unAuthorized' }; 
        global.fetch = jest.fn().mockResolvedValue(mockResponse);
        
        try {
            await login('invalid@email.com', 'wrongPassword');
            fail('Expected login to throw an error');
        } catch (error) {
            expect(error.message).toBe('unAuthorized');
        } finally {
            expect(mockSave).not.toHaveBeenCalled();
        }
    });
});

describe('state.js', () => {
    it('isLoggedIn should return true with a token in storage', () => {
        storage.load.mockReturnValueOnce('some-token');
        expect(isLoggedIn()).toBe(true);
    });

    it('isLoggedIn should return false with no token in storage', () => {
        storage.load.mockReturnValueOnce(null);
        expect(isLoggedIn()).toBe(false);
    });

    it('profile should return a profile object', () => {
        const mockProfile = { username: 'janedoe' };
        storage.load.mockReturnValueOnce(mockProfile);
        expect(profile()).toEqual(mockProfile);
    });

    it('profile should return null when no profile is stored', () => {
        storage.load.mockReturnValueOnce(null);
        expect(profile()).toBeNull();
    });
});