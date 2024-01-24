import { login } from './login';
import LocalStorageMock from '../Mocks/localstorage.mock.js';

global.localStorage = new LocalStorageMock();

const email = 'marius@stud.noroff.no';
const password = '12345678';

const userProfile = {
  name: 'Marius',
  email: 'marius@stud.noroff.no',
  accessToken: 12345,
};
function fetched() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'Successful login',
    json: () => Promise.resolve(userProfile),
  });
}

describe('login', () => {
  it('Returns token', async () => {
    global.fetch = jest.fn(() => fetched());
    const data = await login(email, password);
    expect(data).toEqual(userProfile);
  });
});
