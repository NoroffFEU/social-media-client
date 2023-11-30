import { remove } from '../js/storage';

export function logOut() {
  remove('token');
}
