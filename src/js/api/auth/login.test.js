import { login } from './login.js';
import { LocalStorageMock } from './storage.test';

global.localStorage = new LocalStorageMock();

const TEST_ID = 'login email';
const TEST_ITEM = { id: TEST_ID, password: 'login password' };

function tokenValid() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(TEST_ITEM),
  });
}

it('returns valid token when provided with valid ID', async () => {
  global.fetch = jest.fn(() => tokenValid());
  const item = await login(1);
  expect(item).toEqual(TEST_ITEM);
});
