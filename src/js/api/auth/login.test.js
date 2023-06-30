import { login } from './login';
import { LocalStorageMock } from '../../storage/localStorageMock';

global.localStorage = new LocalStorageMock();

const validEmail = 'email@stud.noroff.no';
const invalidEmail = 'email@something.no';
const password = '12345678';

const userProfile = {
  name: 'Jane Doe',
  email: validEmail,
  accessToken: 12345,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'Successful login',
    json: () => Promise.resolve(userProfile),
  });
}
function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Invalid credentials',
  });
}

describe('login', () => {
  it('Returns a valid token when provided with valid credentials', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(validEmail, password);
    expect(data).toEqual(userProfile);
  });
  it('Returns an error when provided with invalid credentials', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidEmail, password)).rejects.toThrow(
      'Invalid credentials'
    );
  });
});
