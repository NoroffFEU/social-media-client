{/* <img src="https://i.pravatar.cc/300?img=69" class="rounded-circle avatar border" width="80"></img> */}

export const profileThumbnail = (profile) => {
  const element = document.createElement("a");
  element.classList.add("profile", "thumbnail");
  element.href = `/?view=profile&name=${profile.name}`;
  const img = new Image()
  img.src = profile.avatar;
  img.alt = profile.name;
  img.classList.add("rounded-circle", "avatar", "border");
  element.title = `${profile.name}'s Profile`;
  element.append(img);
  return element;
}