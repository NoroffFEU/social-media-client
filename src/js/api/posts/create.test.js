import { createPost } from './create';

const createTestPost = {
  title: 'Blog post title',
  body: 'Hello everyone, this is my new post!',
  media: 'https://picsum.photos/id/237/200/300',
  tags: ['newpost', 'test', 'dog'],
};

const { title, body, media, tags } = createTestPost;

const postData = {
  title: title,
  body: body,
  media: media,
  tags: tags,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'success',
    json: () => Promise.resolve(createTestPost),
  });
}

describe('createPost', () => {
  it('Creates a new item on the API', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const test = await createPost(postData);
    expect(test).toEqual(createTestPost);
  });
});
