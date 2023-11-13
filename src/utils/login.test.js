import { login } from './login.js';
import { logout } from './login.js';

describe('Auth utility functions', () => {
  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test the login function
  describe('login function', () => {
    it('stores the token in local storage on successful login', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: 'test',
          email: 'test@example.com',
          token: 'wqqsszkkkjjddddddddddff1ssddd',
        }),
      };

      global.fetch = jest.fn().mockResolvedValue(mockResponse);

      const email = 'test@example.com';
      const password = 'password123';
      const userData = await login(email, password);

      expect(userData).toEqual({
        name: 'test',
        email: 'test@example.com',
        token: 'wqqsszkkkjjddddddddddff1ssddd',
      });
      expect(global.localStorage.setItem).toHaveBeenCalledWith(
        'token',
        'wqqsszkkkjjddddddddddff1ssddd',
      );
    });

    it('throws an error on failed login', async () => {
      const mockResponse = {
        ok: false,
        json: jest.fn().mockResolvedValue({ message: 'Unauthorized' }),
      };

      global.fetch = jest.fn().mockResolvedValue(mockResponse);

      await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow(
        'Unauthorized',
      );
    });
  });

  // Test the logout function
  describe('logout function', () => {
    it('clears the token from local storage', () => {
      logout();
      expect(global.localStorage.removeItem).toHaveBeenCalledWith('token');
    });
  });
});
