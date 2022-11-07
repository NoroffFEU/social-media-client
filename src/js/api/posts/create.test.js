import { createPost } from './create.js';

const postItem = {
  title: 'Title',
  body: 'Body text',
  media: 'https://picsum.photos/id/237/200/300',
  tags: ['example-tag'],
};

function createPostSuccess(status = 201) {
  return Promise.resolve({
    ok: true,
    status,
    json: () => Promise.resolve(postItem),
  });
}

describe('Create post', () => {
  it('creates successfull post', async () => {
    global.fetch = jest.fn(() => createPostSuccess());
    const item = await createPost();
    expect(item).toEqual(postItem);
  });
});
