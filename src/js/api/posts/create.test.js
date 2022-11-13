/* global global */

import { describe, expect } from '@jest/globals';
import { createPost } from './create.js';

const MOCK_TITLE = 'THIS IS A MOCK TITLE';
const MOCK_BODY = 'THIS IS A MOCK BODY';
const MOCK_MEDIA = 'https://via.placeholder.com/150';
const MOCK_TAGS = ['TAG1', 'TAG2', 'TAG3'];

const MOCK_BAD_REQUEST = 'BAD REQUEST';

const MOCK_RESPONSE_SUCCESS = {
  id: 1,
  title: MOCK_TITLE,
  body: MOCK_BODY,
  tags: MOCK_TAGS,
  media: MOCK_MEDIA,
  _count: { comments: 10, reactions: 20 },
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    statusText: 'OK',
    status: 200,
    json: () => Promise.resolve(MOCK_RESPONSE_SUCCESS),
  });
}

function createBadRequest() {
  return Promise.resolve({
    ok: false,
    statusText: MOCK_BAD_REQUEST,
    status: 400,
  });
}

describe('Test that the createPost (createItem) function creates a new post (item) on the API', () => {
  it('should createPost successfully', async () => {
    global.fetch = jest.fn(() => fetchSuccess());

    const result = await createPost(
      MOCK_TITLE,
      MOCK_BODY,
      MOCK_MEDIA,
      MOCK_TAGS
    );

    expect(result.title).toEqual(MOCK_TITLE);
    expect(result.body).toEqual(MOCK_BODY);
    expect(result.media).toEqual(MOCK_MEDIA);
    expect(result.tags.length).toEqual(MOCK_TAGS.length);
    expect(result.tags).toEqual(MOCK_TAGS);
    expect(result).toEqual(MOCK_RESPONSE_SUCCESS);
  });

  it('should createPost unsuccessfully because of a bad request', async () => {
    global.fetch = jest.fn(() => createBadRequest());

    await expect(
      createPost(MOCK_TITLE, MOCK_BODY, MOCK_MEDIA, MOCK_TAGS)
    ).rejects.toThrow(MOCK_BAD_REQUEST);
  });
});
