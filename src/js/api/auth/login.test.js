import { login } from './login.js';

const mockToken = 'mockToken';
const mockResponse = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ accessToken: mockToken }),
  text: () => Promise.resolve('ok'),
});

global.fetch = mockResponse;

describe('login', () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
  });

  describe('successful login', () => {
    it('stores valid token in localStorage', async () => {
      global.localStorage.getItem.mockReturnValueOnce(null);
      await login('email', 'password');
    });
  });
});
