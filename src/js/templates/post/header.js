import { commentsBadgeTemplate } from "../comment/badge.js";
import { templateInstance } from "../instance.js";
import { profileThumbnail } from "../profile/thumbnail.js";
import { postTags } from "./tags.js";

export const postHeader = (post) => {
  const clone = templateInstance('postHeader')

  clone.querySelector('.card-header').href = `/?view=post&postId=${post.id}`;
  clone.querySelector('b').innerText = post.title;
  if (post.body) {
    clone.querySelector('span').innerText = post.body;
  } else {
    clone.querySelector('span').remove()
  }

  const commentsBadge = commentsBadgeTemplate(post.comments)
  const tagsBadges = postTags(post)
  const children = [commentsBadge, tagsBadges];

  if (post.author) {
    children.push(profileThumbnail(post.author))
  }
  clone.querySelector('.card-header').append(...children)

  return clone
}