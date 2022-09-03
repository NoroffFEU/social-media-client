import { reactionListener } from "../listeners/index.js"

export function reactions() {
  const reactions = document.querySelectorAll("[data-reaction]")
  reactions.forEach(reaction => {
    reaction.addEventListener("click", reactionListener)
  })
}