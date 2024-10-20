import { templateInstance } from '../instance.js';

export const commentsBadgeTemplate = (comments) => {
  if (comments && comments.length) {
    const clone = templateInstance('commentsTag');
    clone.querySelector('.badge').innerText =
      `${comments.length} comment${comments.length > 1 ? 's' : ''}`;
    return clone;
  }

  return '\r\n';
};
