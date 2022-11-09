import { login } from '../js/api/auth/login.js';
import { profile } from '../js/api/auth/login.js';

test('The login function returns a valid token when provided with valid credentials', () => {
  login('oysRos99836@stud.noroff.no', 'Password98');
  expect(profile.accessToken).toBeTruthy();
});
