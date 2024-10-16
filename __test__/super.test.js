import {login} from "../src/js/api/auth/login";
import {logout} from "../src/js/api/auth/logout";
import {save, remove} from "../src/js/storage/index";

// mock the save, load and remove function from storage/index.js (mock local storage)
jest.mock('../src/js/storage/index.js', () => ({
    save: jest.fn(),
    load: jest.fn(() => 'mockToken'),
    remove: jest.fn()
}));

describe('At login', () => {
    beforeEach(() => {
        // clear all mocks before each test
        jest.clearAllMocks();
    });

    it('should store the token and profile when provided the valid credentials', async () => {
        const mockToken = 'mockToken123';
        const mockProfile = {accessToken: mockToken, name: 'mockUser', email: 'mockUser@stud.noroff.no'};

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockProfile),
            })
        );

        const email = 'mockUser@stud.noroff.no';
        const password = 'password123';

        // call the login function
        const profile = await login(email, password);

        // ensure the token is saved to local storage
        expect(save).toHaveBeenCalledWith('token', mockToken);

        // ensure the profile is saved without accessToken
        const expectProfile = {name: 'mockUser', email: 'mockUser@stud.noroff.no'};
        expect(save).toHaveBeenCalledWith('profile', expectProfile);

        // check that the login function returns the correct profile (without the accesstoken)
        expect(profile).toEqual(expectProfile);
    });

    it('should throw an error when the response is not ok', async () => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: false,
            statusText: 'Unauthorized'
        })
        );

        const email = 'invalid@example.com';
        const password = 'wrongPassword';

        // expect login to throw an error when the credentials are invalid
        await expect(login(email, password)).rejects.toThrow('Unauthorized');
    });
});

describe('At logout', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // clear all mocks before each test
    });

    it('should remove the token and profile from storage', () => {
        // call logout function
        logout();

        // ensure that the token and profile are removed from storage
        expect(remove).toHaveBeenCalledWith('token');
        expect(remove).toHaveBeenCalledWith('profile');
    });
});