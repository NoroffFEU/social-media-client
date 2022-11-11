import { logout } from './logout.js';

test('removes accesstoken on logout', async () => {
    await logout();
    expect(localStorage.getItem('token')).toBeNull();
});
