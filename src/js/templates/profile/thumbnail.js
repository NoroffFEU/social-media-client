export const profileThumbnail = (profile) => {
  const element = document.createElement('a');
  element.classList.add('profile', 'thumbnail');
  element.href = `./?view=profile&name=${profile.name}`;
  const img = new Image();
  img.src =
    profile.avatar ||
    'https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg';
  img.alt = profile.name;
  img.classList.add('rounded-circle', 'avatar', 'border');
  element.title = `${profile.name}'s Profile`;
  element.append(img);
  return element;
};
