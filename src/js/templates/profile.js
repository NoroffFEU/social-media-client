import { templateInstance } from "./instance.js";

export const profileAvatar = (profile) => {
  const clone = templateInstance('postThumbnail')
  clone.querySelector('img').src = profile.avatar;
  clone.querySelector('.name').innerText = profile.name;
  clone.querySelector('a').href = `/?view=profile&user=${profile.id}`;
}