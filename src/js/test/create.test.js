import { createPost } from '../api/posts/create';

const TEST_TITLE = 'Title Test';
const TEST_BODY = 'Body Test';
const TEST_MEDIA = '';
const TEST_TAG = 'UnitTest';
const TEST_RESPONSE = {
  title: TEST_TITLE,
  body: TEST_BODY,
  media: TEST_MEDIA,
  tags: TEST_TAG,
};

function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(TEST_RESPONSE),
  });
}

function createError() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Failed to create post',
  });
}

describe('Create Post', () => {
  it('Creates a post through the API', async () => {
    global.fetch = jest.fn(() => createSuccess());
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAG
    );
    expect(response).toEqual(TEST_RESPONSE);
    expect(response.title).toEqual(TEST_TITLE);
    expect(response.body).toEqual(TEST_BODY);
    expect(response.media).toEqual(TEST_MEDIA);
    expect(response.tags).toEqual(TEST_TAG);
  });

  it('Fails to create a post', async () => {
    global.fetch = jest.fn(() => createError());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAG)
    ).rejects.toThrow('Failed to create post');
  });
});
