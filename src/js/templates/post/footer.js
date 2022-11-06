import { templateInstance } from "../instance.js";

export function postFooter(child) {
  const clone = templateInstance("postFooter");
  clone.querySelector(".card-footer").append(...arguments);
  return clone;
}
