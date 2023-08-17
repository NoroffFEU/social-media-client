import { login } from './login';
import LocalStorageMock from '../../mocks/localStorage.mock';

const USER_DATA = {
  name: 'Student Name',
  email: 'test@test.com',
  token: '1234567890',
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

// const mockFetchFailure = jest.fn().mockResolvedValue({
// 	ok: false,
// });

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

describe('login function', () => {
  it('should fetch and store a token in browser storage', async () => {
    global.fetch = mockFetchSuccess;
    const data = await login({});
    expect(data).toEqual(USER_DATA);
  });

  // Add more test cases if needed
});
