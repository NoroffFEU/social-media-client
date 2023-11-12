import { login } from './login';

// Mock values

const email = 'mock-test@mail.com';
const password = 'abcd1234';

// Mock funcions

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    token: 'abcd1234',
  }),
});

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

global.fetch = mockFetchSuccess;

describe('login', () => {
  it('returns the correct maximum of items', async () => {
    const data = await login(email, password);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify(data.json),
    );
  });
});
