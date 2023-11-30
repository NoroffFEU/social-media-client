import testLogin from './login';
const MOCK_TOKEN = 1;

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([{ MOCK_TOKEN }]),
});

global.fetch = mockFetchSuccess;

describe('login user', () => {
  it('logs the user in', async () => {
    const data = await testLogin();
    expect(data.length).toEqual(MOCK_TOKEN);
  });
});

let store = {};
const mockLocalStorage = {
  setItem: jest.fn().mockImplementation((key, MOCK_TOKEN) => {
    JSON.stringify((store[key] = MOCK_TOKEN));
  }),
  getItem: jest.fn().mockImplementation((key) => store[key]),
};

global.localStorage = mockLocalStorage;

describe('set token', () => {
  it('saves the access token', () => {
    mockLocalStorage.setItem(MOCK_TOKEN);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(MOCK_TOKEN);
  });
});
