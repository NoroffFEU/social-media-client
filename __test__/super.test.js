import {login} from "../src/js/api/auth/login";
import {logout} from "../src/js/api/auth/logout";
import {save, remove} from "../src/js/storage/index";

jest.mock('../src/js/storage/index.js', () => ({
    save: jest.fn(),
    load: jest.fn(() => 'mockToken'),
    remove: jest.fn()
}));

describe('At login', () => {
    beforeEach(() => {
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

        const profile = await login(email, password);

        expect(save).toHaveBeenCalledWith('token', mockToken);

        const expectProfile = {name: 'mockUser', email: 'mockUser@stud.noroff.no'};
        expect(save).toHaveBeenCalledWith('profile', expectProfile);

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

        await expect(login(email, password)).rejects.toThrow('Unauthorized');
    });
});

describe('At logout', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should remove the token and profile from storage', () => {
        logout();

        expect(remove).toHaveBeenCalledWith('token');
        expect(remove).toHaveBeenCalledWith('profile');
    });
});