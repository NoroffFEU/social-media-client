import * as auth from '../js/api/auth';
import { LocalStorageMock } from '../mocks/localStorage.mock';
import {
  TEST_ID,
  TEST_STRING,
  TEST_TOKEN,
  TEST_PROFILE,
  TEST_BAD_ID,
  fetchFailure,
  fetchSuccess,
} from '../mocks/fetchMock.mock';

describe('auth', () => {
  globalThis.localStorage = new LocalStorageMock();
  it('Saves valid token and profile to localStorage when provided with valid credentials', async () => {
    globalThis.fetch = jest.fn(() => fetchSuccess());
    await auth.login(TEST_ID, TEST_STRING);
    expect(JSON.parse(localStorage.getItem('token'))).toEqual(TEST_TOKEN);
    expect(JSON.parse(localStorage.getItem('profile'))).toEqual(TEST_PROFILE);
  });

  it('Clears token from localStorage', async () => {
    auth.logout();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
    localStorage.clear();
  });

  it("Throws error when provided with invalid credentials and doesn't save anything to localStorage", async () => {
    localStorage.clear();
    globalThis.fetch = jest.fn(() => fetchFailure());
    await expect(auth.login(TEST_BAD_ID, TEST_STRING)).rejects.toThrow();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
    localStorage.clear();
  });
});
