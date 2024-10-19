const { login } = require('../../src/js/api/auth/login');
const storage = require('../../src/js/storage');
const fetch = require('jest-fetch-mock');

jest.mock('../../src/js/storage', () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn(),
}));

fetch.enableMocks();

// randomUser1@stud.noroff.no
// /.,offThe12qw3p09/

describe('Auth functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should save token and profile when response is ok', async () => {
        const profile = { accessToken: 'mockToken', name: 'test-user' };
        fetch.mockResponseOnce(JSON.stringify(profile), { status: 200 });

        const result = await login(
            'randomUser1@stud.noroff.no',
            '/.,offThe12qw3p09/'
        );

        expect(storage.save).toHaveBeenCalledWith('token', profile.accessToken);
        expect(storage.save).toHaveBeenCalledWith('profile', {
            name: 'test-user',
        });
        expect(result).toEqual({ name: 'test-user' });
    });

    it('should throw an error when response is not ok', async () => {
        fetch.mockResponseOnce('Unauthorized', { status: 401 });

        await expect(
            login('randomUser1@stud.noroff.no', '/.,offThe12qw3p09/')
        ).rejects.toThrow('Unauthorized');
    });
});
