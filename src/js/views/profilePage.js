import { isLoggedIn } from "../api/index.js";
import { getProfile } from "../api/profiles/read.js";
import { profilePageTemplate } from "../templates/index.js";

export const profilePage = async (name) => {
  if (!isLoggedIn()) {
<<<<<<< HEAD
    location.href = "/";
=======
    location.href = "./"
>>>>>>> 7c917f213c9f7b35c6bce15c87782a5beb84569c
  } else {
    return profilePageTemplate(await getProfile(name));
  }
};
