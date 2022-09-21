import { getPosts } from "../api/index.js"
import { getProfiles } from "../api/profiles/read.js"
import { BLANK_POST } from "../data/blank/post.js"
import { load } from "../storage/load.js"
import { save } from "../storage/save.js"
import { postLoaderTemplate, postThumbnailTemplate } from "../templates/index.js"
import { renderView } from "../ui/renderView.js"
import * as views from "../views/index.js"
import { getSearchParams } from "./searchParams.js"

async function route() {
  const { view, postId, name } = getSearchParams()
  switch (view) {
    case "post":
      const loader = postLoaderTemplate()
      renderView(loader)
      return views.postPage(postId)

    case "profile":
      return views.profilePage(name)

    case "profiles":
      const profiles = await getProfiles()
      return views.profileList(profiles)

    case "posts":
    default:
      const loaders = Array.from({ length: load("posts:lastTime") || 3 }, () => postLoaderTemplate())
      renderView(...loaders)
      const posts = await getPosts()
      save("posts:lastTime", posts.length)
      return views.postList(posts)
  }
}

export default async () => {
  const view = await route()
  renderView(view);
}