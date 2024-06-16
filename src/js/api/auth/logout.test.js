import MockLocalStorage from '../../mocks/MockLocalStorage';
import { save, load } from '../../storage/index';
import { logout } from './logout';

beforeEach(() => {
  global.localStorage = new MockLocalStorage();
});

describe('logout', () => {
  it('should remove the token from storage', async () => {
    // mock existing value
    save('token', 'mockToken');

    await logout();

    expect(load('token')).toBe(null);
  });
});
