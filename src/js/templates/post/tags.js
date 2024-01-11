import { templateInstance } from '../instance.js';

export const postTags = (post) => {
  if (post.tags) {
    const element = document.createElement('span');
    element.classList.add('post-tags');

    const tags = post.tags.map((tag) => {
      const clone = templateInstance('postTag');
      clone.querySelector('.badge').innerText = tag;
      return clone;
    });

    element.append(...tags);
    return element;
  }

  return '\r\n';
};
