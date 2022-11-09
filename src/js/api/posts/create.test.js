import { createPost } from './create';

const TEST_TITLE = 'Blue Cornfields Exist';
const TEST_BODY = 'A file of bluecorn doodles';
const TEST_MEDIA =
  'https://www.dreamstime.com/stock-photo-blue-corns-close-up-some-image34319130';
const TEST_TAG = 'bluecorns';
const JSON_RESPONSE = {
  title: TEST_TITLE,
  body: TEST_BODY,
  media: TEST_MEDIA,
  tags: TEST_TAG,
};

function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(JSON_RESPONSE),
  });
}

function createFails() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Failed to create post',
  });
}

describe('Creates new post', () => {
  it('creates it successfully', async () => {
    global.fetch = jest.fn(() => createSuccess());
    const post = await createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAG);
    expect(post).toEqual(JSON_RESPONSE);
    expect(post.title).toEqual(TEST_TITLE);
    expect(post.body).toEqual(TEST_BODY);
    expect(post.media).toEqual(TEST_MEDIA);
    expect(post.tags).toEqual(TEST_TAG);
  });

  it('fails to create post', async () => {
    global.fetch = jest.fn(() => createFails());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAG)
    ).rejects.toThrow('Failed to create post');
  });
});
