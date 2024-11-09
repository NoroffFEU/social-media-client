import { templateInstance } from '../instance.js';

export function postFooter() {
  const clone = templateInstance('postFooter');
  clone.querySelector('.card-footer').append(...arguments);
  return clone;
}
