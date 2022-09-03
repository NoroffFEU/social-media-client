import { renderView } from "../ui/renderView.js"
import * as views from "../views/index.js"
import { searchParams } from "./searchParams.js"

function route() {
  const { view, postId, profileId } = searchParams()
  switch (view) {
    case "post":
      return views.postPage(postId)

    case "profile":
      return views.profilePage(profileId)

    default:
      return views.postList()
  }
}

export default async () => {
  const view = await route()
  renderView(view);
}