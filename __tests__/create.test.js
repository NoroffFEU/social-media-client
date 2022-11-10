import { createPost } from '../src/js/api/posts/create';

const title = 'I love warmth';
const body = "Which I don't have right now, It's cold.";
const media = 'https://image.png';
const tags = 'warmth';

const dummy_post = {
  title: 'I love warmth',
  body: "Which I don't have right now, It's cold.",
  media: 'https://image.png',
  tags: 'warmth',
};

const data = JSON.stringify(dummy_post);

function createPostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'fetch is OK',
    json: () => Promise.resolve(dummy_post),
  });
}

function createPostFails() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Failed to create new post',
  });
}

describe('Create new post', () => {
  it('Successfully creates a new post', async () => {
    global.fetch = jest.fn(() => createPostSuccess());
    const response = await createPost(title, body, media, tags);
    const post = JSON.stringify(response);
    expect(typeof title).toBe('string');
    expect(typeof body).toBe('string');
    expect(typeof media).toBe('string');
    expect(post).toEqual(data);
  });

  it('Fails to create a new post', async () => {
    global.fetch = jest.fn(() => createPostFails());
    await expect(createPost(title, body, media, tags)).rejects.toThrow(
      'Failed'
    );
  });
});
