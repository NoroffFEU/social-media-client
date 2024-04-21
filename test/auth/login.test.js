// login.test.js
import { login } from "../../src/js/api/auth/login.js";
import * as storage from "../../src/js/storage/index.js";

// Mock the storage module
jest.mock("../../src/js/storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(), 
  remove: jest.fn(),
}));
// Mock fetch
global.fetch = jest.fn();

beforeEach(() => {
  // Clear all mocks before each test
  global.fetch.mockClear();
  storage.save.mockClear();
});

test('login function saves profile and token when credentials are valid', async () => {
  const mockProfile = { accessToken: 'mockToken', name: 'John Doe' };
  // Mock a successful response
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockProfile),
  });

  const profile = await login('john@example.com', 'password');

  expect(storage.save).toHaveBeenCalledTimes(2);
  expect(storage.save).toHaveBeenCalledWith('token', 'mockToken');
  expect(storage.save).toHaveBeenCalledWith('profile', expect.objectContaining({ name: 'John Doe' }));
  expect(profile).toEqual(expect.objectContaining({ name: 'John Doe' }));
});

test('login function throws an error when credentials are invalid', async () => {
  const mockResponse = { statusText: 'Unauthorized' };
  // Mock a failed response
  global.fetch.mockResolvedValueOnce({
    ok: false,
    statusText: 'Unauthorized',
    json: () => Promise.resolve(mockResponse),
  });

  await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow('Unauthorized');
  expect(storage.save).not.toHaveBeenCalled();
});
