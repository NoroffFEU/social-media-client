import { login } from './login';
import { fetchMockFalse, fetchMockTrue } from '../mocks/fetch.mock';
import localStorageMock from '../mocks/localStorage.mock';

describe('Login', () => {
    global.localStorage = localStorageMock;
    it('should store the valid token in localStorage', async () => {
        global.fetch = fetchMockTrue;
        await login('not important', 'here');
        expect(localStorage.getItem('token')).toBe('mockedToken');
    });
    it('should throw an exception when response from fetch is false', async () => {
        global.fetch = fetchMockFalse;
        await expect(login('not important', 'here')).rejects.toThrow('Login failed');
    });
});
