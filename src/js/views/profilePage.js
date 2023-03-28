import { isLoggedIn } from '../api/index.js';
import { getProfile } from '../api/profiles/read.js';
import { profilePageTemplate } from '../templates/index.js';

export const profilePage = async (name) => {
  if (!isLoggedIn()) {

  } else {
    return profilePageTemplate(await getProfile(name));
  }
};
