import { createPost } from './create'
const post = {
  title: 'test title',
  body: 'test body',
  media: 'test-Link.com',
  tags: ['test', 'test2'],
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        ...post,
      }),
    status: 200,
    statusText: 'OK',
    ok: true,
  })
)
describe('create post', () => {
  it('creates a post', async () => {
    const result = await createPost(
      post.title,
      post.body,
      post.media,
      post.tags
    )
    expect(result.title).toEqual(post.title)
    expect(result.body).toEqual(post.body)
    expect(result.media).toEqual(post.media)
    expect(result.tags).toEqual(post.tags)
  })
})
