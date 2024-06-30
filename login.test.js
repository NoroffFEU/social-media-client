import { login } from './src/js/api/auth/login.js';

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: 'mockedToken' }),
});
global.fetch = mockFetchSuccess;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

test('login function should save accessToken in localStorage on successful login', async () => {
  await login('test@example.com', 'password123');

  expect(localStorageMock.setItem).toHaveBeenCalledWith(
    'token',
    JSON.stringify('mockedToken'),
  );
});
