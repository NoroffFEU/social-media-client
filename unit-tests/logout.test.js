/* eslint-disable no-undef */
import 'jest-localstorage-mock';

describe('Logout', () => {
  const logout = () => {
    localStorage.removeItem('token');
  };

  beforeEach(() => {
    localStorage.setItem('token', '1234');
  });

  it('should clear the token from local storage on logout', () => {
    logout();
    expect(localStorage.getItem('token')).toBeNull();
  });
});

