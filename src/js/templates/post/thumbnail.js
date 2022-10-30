import { templateInstance } from "../instance.js";
import { postHeader } from "./header.js";
import { postMedia } from "./media.js";
import { postFooter } from "./footer.js";
import { postReactionMenu } from "./reactions.js";
import { postActions } from "./actions.js";

export const postThumbnailTemplate = (
  post,
  preview = false,
  comments = false
) => {
  const clone = templateInstance("postThumbnail");

  clone.querySelector(".post").id = post.id;

  const header = postHeader(post);
  const media = postMedia(post, preview ? "div" : "a");
  const footer = postFooter(postActions(post), postReactionMenu(post));
  const children = [header, media, footer];

  clone.querySelector(".thumbnail").append(...children);

  return clone;
};
