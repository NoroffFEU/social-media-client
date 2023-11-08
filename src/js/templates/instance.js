export const templateInstance = (id = "404") => {
  const template = document.querySelector(`template#${id}`);
  if (template) {
    return template.content.cloneNode(true);
  }

  throw new Error(`Template #${id} not found`);
};
