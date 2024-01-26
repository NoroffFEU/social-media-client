import { createPost } from './create';

const createTestPost =  {
    title: 'Blog post title',
    body: 'Hey There, welcome to my first post',
    media: 'https://media.istockphoto.com/id/1271163410',
    tags: ['post', 'climate', 'test'],
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
    it('create a new item on the API', async() => {
        global.fetch = jest.fn(() =>fetchSuccess());
        const test = await createPost(postData);
        expect(test).toEqual(createTestPost);
    });
});