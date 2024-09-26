import { login } from './login.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'mockToken' }),
  })
);

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Login Function', () => {
  it('fetches and stores a token in browser storage', async () => {
    jest.spyOn(global.storage, 'save').mockImplementation(() => {});

    await login('test@example.com', 'password123');

    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', 'mockToken');
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
    expect(global.storage.save).toHaveBeenCalledWith('token', 'mockToken');

    jest.restoreAllMocks();
  });

  it('throws an error for invalid credentials', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('invalid@example.com', 'wrongPassword')).rejects.toThrowError('Unauthorized');

    expect(localStorageMock.setItem).not.toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
  });
});
