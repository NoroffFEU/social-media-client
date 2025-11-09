import { login } from "../src/js/api/auth/login";

global.localStorage = {
    setItem: (key, val) => {
        global.localStorage[key] = val;
    },
    getItem: (key) => global.localStorage[key]

}
describe('login function', () => {
    it('should save token when logging in', async () => {

        const mockFetchSuccess = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue( { accessToken: 'mockToken' } )
        });

        global.fetch = mockFetchSuccess;

        const email = 'test@example.com';
        const password = 'password123';

        await login(email, password);   
        expect(mockFetchSuccess).toHaveBeenCalledTimes(1);
        expect(JSON.parse(localStorage.getItem('token'))).toBe('mockToken')
    });





})
