import testLogin from './login';
const MOCK_TOKEN = 1;

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([{ MOCK_TOKEN }]),
});

global.fetch = mockFetchSuccess;

describe('login user', () => {
  it('returns the token', async () => {
    const data = await testLogin();
    expect(data.length).toEqual(MOCK_TOKEN);
  });

  let store = {};
  global.localStorage = {
    setItem: jest.fn().mockImplementation((key, MOCK_TOKEN) => {
      JSON.stringify((store[key] = MOCK_TOKEN));
    }),
    getItem: jest.fn().mockImplementation((key) => store[key]),
  };
});
