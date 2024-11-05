import { logout } from '../src/js/api/auth/logout.js';
import { login } from '../src/js/api/auth/login.js';
import * as storage from '../src/js/storage/index.js';

jest.mock('../src/js/storage/index.js', () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn()
}));

describe('jest tests', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      global.fetch = jest.fn();
    });

test('stores token if valid credentials', async () => {

    fetch.mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({ accessToken: 'myToken', name: 'Frankie' }),
        }),
      );

    const profile = await login('frankie@stud.noroff.no', 'password123');
    expect(storage.save).toHaveBeenCalledWith('token', 'myToken');
    expect(storage.save).toHaveBeenCalledWith('profile', { name: 'Frankie' });
    expect(profile).toEqual({ name: 'Frankie' });
});

test('clears token when logging out', () => {
    logout();
    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');
});

});