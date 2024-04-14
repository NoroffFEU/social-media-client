import { templateInstance } from "../instance.js";
import { emojiSubset } from "../../tools/index.js";
import { reactionListener } from "../../listeners/index.js";

export const postReactionMenu = (post) => {
  const clone = templateInstance("reactionMenu");

  if (post.reactions && post.reactions.length) {
    const sortedReactions = post.reactions
      .sort((a, b) => {
        return b.count - a.count;
      })
      .map((reaction) => reactionTemplate(reaction));
    clone.querySelector(".reactions").prepend(...sortedReactions);
  }

  const emojis = emojiSubset(post.reactions);
  clone
    .querySelector(".dropdown-menu")
    .append(...emojis.map((emoji) => reactionOptionTemplate(emoji, post.id)));

  const reactions = clone.querySelectorAll("[data-reaction]");
  reactions.forEach((reaction) => {
    reaction.addEventListener("click", reactionListener);
  });

  return clone;
};

export const reactionTemplate = ({ symbol, count, postId }) => {
  const clone = templateInstance("reactionButton");
  clone.querySelector(".btn").dataset.symbol = symbol;
  clone.querySelector(".btn").prepend(`${symbol}`);
  clone.querySelector(".badge").innerText = count;
  clone.querySelector(".btn").dataset.postId = postId;
  return clone;
};

export const reactionOptionTemplate = (symbol, postId) => {
  const clone = templateInstance("reactionOption");
  clone.querySelector(".dropdown-item").dataset.symbol = symbol;
  clone.querySelector(".dropdown-item").dataset.postId = postId;
  clone.querySelector(".dropdown-item").innerText = symbol;
  return clone;
};
