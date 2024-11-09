import { followProfile } from '../../api/profiles/index.js';

export async function followListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;

  if (name) {
    try {
      await followProfile(name);
      location.reload();
    } catch {
      return alert('There was a problem following this profile');
    }
  }
}
