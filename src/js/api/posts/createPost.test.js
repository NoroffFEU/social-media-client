import { createPost } from './create';

const formTitle = 'Hiding';
const formBody = 'Little girl';
const formMedia = 'https://unsplash.com/photos/VZILDYoqn_U';
const formTag = 'Tag';

const formData = {
  title: formTitle,
  body: formBody,
  media: formMedia,
  tag: formTag,
};

const UserFormData = JSON.stringify(formData);

function postSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'A post has been created',
    json: () => Promise.resolve(formData),
  });
}

function postFailed() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Failed when creating a post',
  });
}

describe('create', () => {
  it('creates a new post or item data', async () => {
    global.fetch = jest.fn(() => postSuccess());
    const form = await createPost(formTitle, formBody, formMedia, formTag);
    const profileFormData = JSON.stringify(form);
    expect(profileFormData).toMatch(UserFormData);
    expect(formTitle).toEqual(formTitle);
    expect(formBody).toEqual(formBody);
    expect(formMedia).toEqual(formMedia);
    expect(formTag).toEqual(formTag);
  });

  it('throws an error when no data or post provided', async () => {
    global.fetch = jest.fn(() => postFailed());
    await expect(
      createPost(formTitle, formBody, formMedia, formTag)
    ).rejects.toThrow('Failed when creating a post');
  });
});
