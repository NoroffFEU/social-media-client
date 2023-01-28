import { createPost } from './create';

const title = 'This is a unit test';
const body = 'Hurray it worked';
const media = null;

const data = { title, body, media };

function fetchSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'Hey ho, lets go. Its working',
    json: () => Promise.resolve(data),
  });
}

describe('Create post', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccessful());
    const test = await createPost(data);
    expect(test).toBe(data);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});