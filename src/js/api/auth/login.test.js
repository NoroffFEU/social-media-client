/* global global */
import { describe, expect } from '@jest/globals';
import { login } from './login.js';

const MOCK_TOKEN = 'abcdef123456';
const MOCK_PROFILE = { token: MOCK_TOKEN };
const MOCK_NOT_FOUND = 'Not Found';

// Mock user
const MOCK_EMAIL = 'test-email@stud.noroff.no';
const MOCK_PASSWORD = 'test1234!!';
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(MOCK_PROFILE),
  });
}

function fetchFailure(status = 404, statusText = MOCK_NOT_FOUND) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('Test that the login function returns a valid token when provided with valid credentials', () => {
  it('login is successful', async () => {
    // Creating browser mock
    global.fetch = jest.fn(() => fetchSuccess());
    global.localStorage = {};
    global.localStorage.setItem = jest.fn(() => null);
    const result = await login(MOCK_EMAIL, MOCK_PASSWORD);
    expect(result).toEqual(MOCK_PROFILE);
  });

  it('login is unsuccessful', async () => {
    // Creating browser mock
    global.fetch = jest.fn(() => fetchFailure());
    global.localStorage = {};
    global.localStorage.setItem = jest.fn(() => null);
    await expect(login(MOCK_EMAIL, MOCK_PASSWORD)).rejects.toThrow(
      MOCK_NOT_FOUND
    );
  });
});
