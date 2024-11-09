import { login, logout } from '../js/api/auth/index';
import { save, remove } from '../js/storage/index';

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

jest.mock('../js/storage/index', () => ({
  save: jest.fn(),
  remove: jest.fn(),
  load: jest.fn(),
}));

global.fetch = jest.fn();

describe('Authentication Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should store a token when provided with valid credentials', async () => {
      const mockToken = 'mockedAccessToken';
      const mockProfile = { accessToken: mockToken, name: 'John Doe' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockProfile,
      });

      const result = await login('ingrid@test.no', 'superadminpassord');

      expect(save).toHaveBeenCalledWith('token', mockToken);
      expect(save).toHaveBeenCalledWith('profile', { name: 'John Doe' });
      expect(result).toEqual({ name: 'John Doe' });
    });

    it('should throw an error if login fails', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        statusText: 'Unauthorized',
      });

      await expect(
        login('ingrid@feil.no', 'kjedeligbrukerpassord'),
      ).rejects.toThrow('Unauthorized');
    });
  });

  describe('logout', () => {
    it('should clear the token from browser storage', () => {
      logout();

      expect(remove).toHaveBeenCalledWith('token');
      expect(remove).toHaveBeenCalledWith('profile');
    });
  });
});
