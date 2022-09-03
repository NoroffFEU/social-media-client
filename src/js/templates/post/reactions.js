import { templateInstance } from "../instance.js";
import { emojiSubset } from "../../tools/index.js"
import { reactionListener } from "../../listeners/index.js"

export const postReactionMenu = (post) => {
  const clone = templateInstance('reactionMenu');

  if (post.reactions && post.reactions.length) {
    const sortedReactions = post.reactions.sort((a, b) => {
      return b.count - a.count;
    }).map(reactionTemplate);
    clone.querySelector('.reactions').prepend(...sortedReactions)
  }

  const emojis = emojiSubset(post.reactions)
  clone.querySelector('.dropdown-menu').append(...emojis.map(reactionOptionTemplate))

  const reactions = clone.querySelectorAll("[data-reaction]")
  reactions.forEach(reaction => {
    reaction.addEventListener("click", reactionListener)
  })

  return clone;
}

export const reactionTemplate = ({ symbol, count }) => {
  const clone = templateInstance('reactionButton');
  clone.querySelector(".symbol").innerText = `${symbol}`;
  clone.querySelector(".badge").innerText = count;
  return clone;
}

export const reactionOptionTemplate = (symbol) => {
  const clone = templateInstance('reactionOption');
  clone.querySelector('.dropdown-item').innerText = symbol
  return clone;
}