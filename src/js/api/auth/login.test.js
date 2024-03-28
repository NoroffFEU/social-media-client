import { login } from './login';
import { LocalStorageMock } from '../../storage/localStorageMock';

const validEmail = 'student@stud.noroff.no';
const validpassword = 'password123';
const fakeApiResponse = {
  name: 'User Name',
  email: validEmail,
  accessToken: 'sometoken28289jhjh',
};

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Login successful',
    json: () => Promise.resolve(fakeApiResponse),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 */
function fetchInvalidLogin() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: 'Unauthorized',
  });
}

/**
 * It either return a valid response object and store token in local storage or it throws error message
 */
describe('login', () => {
  it('Returns a valid access token in local storage and valid response object', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const expectedToken = fakeApiResponse.accessToken;
    const response = await login(validEmail, validpassword);
    expect(JSON.parse(localStorage.getItem('token'))).toEqual(expectedToken);
    expect(response).toEqual(fakeApiResponse);
  });
  it('Throws error message on invalid login', async () => {
    global.fetch = jest.fn(() => fetchInvalidLogin());
    await expect(login(validEmail, validpassword)).rejects.toThrow(
      'Unauthorized'
    );
  });
});
