import { logout } from './logout.js';

const localStorageMock = {
  getItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Logout Function', () => {
  it('clears the token from browser storage', async () => {
    jest.spyOn(global.storage, 'clear').mockImplementation(() => {});

    await logout();

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
    expect(global.storage.clear).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
