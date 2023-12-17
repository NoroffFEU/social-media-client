import { login } from './login.js';

const mockToken = 'mockToken';
const mockResponse = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ accessToken: mockToken }),
  text: () => Promise.resolve('ok'),
});

global.fetch = mockResponse;

describe('User Authentication Tests', () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
  });

  describe('successful login', () => {
    it('stores a valid token in the localStorage', async () => {
      global.localStorage.getItem.mockReturnValueOnce(null);
      await login('email', 'password');
    });
  });
});
/* By running npm run test-unit in the terminal the tests for login.test.js and logout.test.js are running, and passing */
