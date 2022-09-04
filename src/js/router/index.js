import { getPosts } from "../api/index.js"
import { getProfiles } from "../api/profiles/read.js"
import { renderView } from "../ui/renderView.js"
import * as views from "../views/index.js"
import { searchParams } from "./searchParams.js"

async function route() {
  const { view, postId, name } = searchParams()
  switch (view) {
    case "post":
      return views.postPage(postId)

    case "profile":
      return views.profilePage(name)

    case "profiles":
      const profiles = await getProfiles()
      return views.profileList(profiles)

    case "posts":
    default:
      const posts = await getPosts()
      return views.postList(posts)
  }
}

export default async () => {
  const view = await route()
  renderView(view);
}