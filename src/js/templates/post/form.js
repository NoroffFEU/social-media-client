import { createPost, updatePost } from '../../api/index.js';
import { clear } from '../../tools/clear.js';
import { templateInstance } from '../instance.js';
import { postThumbnailTemplate } from './thumbnail.js';

function populateForm(post, form) {
  form.title.value = post.title;
  form.body.value = post.body;
  form.media.value = post.media;
  form.tags.value = post.tags.join(', ');
}

function populatePreview(post, preview) {
  const page = postThumbnailTemplate(post, false);
  clear(preview);
  preview.append(page);
}

export const postFormTemplate = (post) => {
  const clone = templateInstance('postForm');
  const form = clone.querySelector('#postForm');
  const button = clone.querySelector('[data-action=submit]');
  const preview = clone.querySelector('#postPreview');

  if (post && post.id) {
    populateForm(post, form);
    populatePreview(post, preview);
    button.querySelector('[data-action=publish]').style.display = 'none';
  } else {
    button.querySelector('[data-action=update]').style.display = 'none';
  }

  form.addEventListener('input', () => {
    const post = {
      title: form.title.value,
      body: form.body.value,
      media: form.media.value,
      tags: form.tags.value.split(', '),
    };
    populatePreview(post, preview);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    const id = url.searchParams.get('postId');
    const form = event.target;
    const data = new FormData(form);
    const title = data.get('title');
    const body = data.get('body');
    const media = data.get('media');
    const tags = data.get('tags').split(', ');
    let post;

    if (!id) {
      post = await createPost(title, body, media, tags);
    } else {
      post = await updatePost(id, title, body, media, tags);
    }

    location.href = `./?view=post&postId=${post.id}`;
  });

  return clone;
};
