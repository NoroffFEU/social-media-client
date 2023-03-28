import { unfollowProfile } from '../../api/profiles/index.js';

export async function unfollowListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;

  if (name) {
    try {
      await unfollowProfile(name);

    }
  }
}
