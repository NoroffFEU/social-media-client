import { logout } from './logout';
import localStorageMock from '../mocks/localStorage.mock';

describe('logout', () => {
    global.localStorage = localStorageMock;
    it('should remove token and profile from localStorage', () => {
        localStorageMock.setItem('token', JSON.stringify('mockedToken'));
        logout();
        expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
        expect(localStorageMock.removeItem).toHaveBeenCalledWith('profile');
        expect(localStorageMock.removeItem).toHaveBeenCalledTimes(2);
    });
});
