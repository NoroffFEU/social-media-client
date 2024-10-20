import { BLANK_POST } from '../../data/blank/post.js';
import { postThumbnailTemplate } from './thumbnail.js';

export const postLoaderTemplate = (post = {}) => {
  post = {
    ...BLANK_POST,
    ...post,
  };

  const thumbnail = postThumbnailTemplate(post);
  thumbnail.querySelector('.post').classList.add('loader');
  return thumbnail;
};
