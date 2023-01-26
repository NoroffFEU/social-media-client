/* eslint-disable no-undef */
// login.test.js
import { login } from './login';

describe('Login', () => {
  it('stores a token when provided with valid credentials', () => {
    const result = login('test@example.com', 'password123');
    expect(result).toEqual({ token: 'abc123' });
  });
});
