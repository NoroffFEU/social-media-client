import emojis from "../data/emoji.js";

export const emojiSubset = (reactions = []) => emojis.filter(emoji => !reactions.map(reaction => reaction.symbol).includes(emoji))