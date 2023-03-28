import { templateInstance } from '../instance.js';

export const profileButton = (profile) => {
  const clone = templateInstance('profileButton');
  clone.querySelector('img').src = profile.avatar;

