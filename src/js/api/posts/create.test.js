import { createPost } from './create';

const TEST_TITLE = 'This is title';
const TEST_BODY = 'This is body';
const TEST_MEDIA = 'This is media';
const TEST_TAGS = 'This is tags';

const TEST_ITEM = {
  title: TEST_TITLE,
  body: TEST_BODY,
  media: TEST_MEDIA,
  tags: TEST_TAGS,
};

function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(TEST_ITEM),
  });
}

function createFail(status = 404, statusText = 'Not Found') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('createPost', () => {
  it('test to see if function creates a new post', async () => {
    global.fetch = jest.fn(() => createSuccess());
    const item = await createPost(TEST_ITEM);
    expect(item).toEqual(TEST_ITEM);
  });

  it('checks to see if error is sent if function fails to create post', async () => {
    global.fetch = jest.fn(() => createFail());
    const item = await createPost(TEST_ITEM);
    expect(item).toEqual(null);
  });
});
