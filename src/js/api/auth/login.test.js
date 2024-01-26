import { login } from './login';
import LocalStorageMock from '../../storage/localStorage.mock';

const USER_DATA = {
    name: 'Student Name',
    email: 'studentemail@stud.noroff.no',
    token: '1234567890',
};

const fetchsuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(USER_DATA),
});

beforeAll(() => {
    global.localStorage = new LocalStorageMock();
});

describe('login function', () => {
    it('fetch and store token in browser storage', async () => {
        global.fetch = fetchsuccess;
        const data =await login({});
        expect(data).toEqual(USER_DATA)
    });
});