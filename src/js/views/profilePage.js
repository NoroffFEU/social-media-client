import { isLoggedIn, profile } from "../api/index.js"
import { getProfile } from "../api/profiles/read.js"
import { profilePageTemplate } from "../templates/index.js"

export const profilePage = async (name) => {
  if (!isLoggedIn()) {
    location.href = "/"
  } else {
    const me = profile()

    if (me.name === name) {
      return profilePageTemplate(me)
    } else {
      const user = await getProfile(name)
      return profilePageTemplate(user)
    }
  }
}