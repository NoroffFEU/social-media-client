import MockLocalStorage from '../../mocks/MockLocalStorage';
import { load } from '../../storage/index';
import { login } from './login';

beforeEach(() => {
  global.localStorage = new MockLocalStorage();
});

describe('login', () => {
  it('should save the token correctly', async () => {
    const mockToken = 'mockToken';
    const mockProfile = { accessToken: mockToken };

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockProfile),
    });

    // Call the login function
    await login('test@example.com', 'password');

    expect(load('token')).toBe(mockToken);
  });
});
