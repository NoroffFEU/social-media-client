import { commentTemplate } from './comment.js';

jest.mock('../../api/index.js', () => ({
  profile: jest.fn(),
}));
jest.mock('../../router/searchParams.js', () => ({
  setSearchParams: jest.fn(),
}));
jest.mock('../instance.js', () => ({
  templateInstance: jest.fn(),
}));

describe('commentTemplate', () => {
  const mockComment = { id: '1', body: 'Test comment', owner: 'JohnDoe' };

  beforeEach(() => {
    jest.resetAllMocks();

    document.body.innerHTML = `<template id="comment"><div class="comment"><div class="comment-header"></div><div class="comment-body"></div><div class="owner"></div></div></template>`;
    require('../instance.js').templateInstance.mockImplementation(
      templateId => {
        return document.getElementById(templateId).content.cloneNode(true);
      }
    );
  });

  it('should create a comment element with the correct content', () => {
    require('../../api/index.js').profile.mockReturnValue({ name: 'JaneDoe' });
    const commentElement = commentTemplate(mockComment);

    expect(commentElement.querySelector('.comment-body').innerText).toBe(
      'Test comment'
    );
    expect(commentElement.querySelector('.owner').innerText).toBe('JohnDoe');
    expect(commentElement.querySelector('.owner').href).toContain(
      `./?view=profile&name=JohnDoe`
    );
  });

  it('should add the "me" class if the commenter is the profile owner', () => {
    require('../../api/index.js').profile.mockReturnValue({ name: 'JohnDoe' });
    const commentElement = commentTemplate(mockComment);

    expect(commentElement.querySelector('.comment').classList).toContain('me');
  });
});
