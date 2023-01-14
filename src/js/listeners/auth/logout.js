import * as auth from '../../api/auth/index.js';
import { updateLoginVisibility } from '../../ui/auth.js';

export function logoutListener() {
  try {
    auth.logout();
    updateLoginVisibility();
    location.href = './';
  } catch {
    return alert('There was a problem logging out');
  }
}
