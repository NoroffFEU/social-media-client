// logout.test.js

import { logout } from './logout';
import { remove } from '../../storage';

jest.mock('../../storage', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Should logout and remove token from localstorage', async () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
  });
});
