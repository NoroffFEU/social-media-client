export const profileThumbnail = (profile) => {

  img.alt = profile.name;
  img.classList.add('rounded-circle', 'avatar', 'border');
  element.title = `${profile.name}'s Profile`;
  element.append(img);
  return element;
};
