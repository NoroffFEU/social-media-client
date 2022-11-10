import { createPost } from './create';

const TITLE = 'test title';
const BODY = 'test body';
const MEDIA = 'https://unsplash.com/photos/2LowviVHZ-E';
const TAG = 'test tag';

const response = {
  title: TITLE,
  body: BODY,
  media: MEDIA,
  tag: TAG,
};

function postSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Created a post!',
    json: () => Promise.resolve({ ...response }),
  });
}

function postFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Create post failed',
  });
}

describe('create', () => {
  it('creates a new item on the API', async () => {
    global.fetch = jest.fn(() => postSuccess());
    const post = await createPost(TITLE, BODY, MEDIA, TAG);
    expect(post).toEqual(response);
    expect(post.title).toEqual(TITLE);
    expect(post.body).toEqual(BODY);
    expect(post.media).toEqual(MEDIA);
    expect(post.tag).toEqual(TAG);
  });

  it('failed to create post', async () => {
    global.fetch = jest.fn(() => postFailure());
    await expect(createPost(TITLE, BODY, MEDIA, TAG)).rejects.toThrow(
      'Create post failed'
    );
  });
});
