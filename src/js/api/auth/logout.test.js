import { logout } from './logout';
import LocalStorageMock from '../../storage/localStorage.mock';

const wrongtoken = 'token';
const wrongprofile = {
    name: 'Student Name',
    email: 'studentemail@stud.noroff.no',
};

beforeAll(() => {
    global.localStorage = new LocalStorageMock();
});

describe('logout function', () => {
    it('this action clears the token from the browser', () => {
        localStorage.setItem('token', JSON.stringify(wrongtoken));
        localStorage.setItem('profile', JSON.stringify(wrongprofile));

        logout();

        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('profile')).toBeNull();
    });
});
