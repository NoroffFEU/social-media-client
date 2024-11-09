/* eslint-disable no-undef */
import { logout } from './logout';

const localStorageMock = {
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe('logging out', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('logsout the user and removes the token from localStorage', () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');

    expect(localStorage.removeItem).toHaveBeenCalledWith('profile');
  });
});
