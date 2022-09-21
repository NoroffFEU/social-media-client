export const imageTemplate = (src, alt) => {
  try {
    const img = new Image();
    img.alt = alt;
    img.addEventListener('load', ({ target }) => {
      console.log(target.naturalWidth);
      console.log(target.complete && target.naturalWidth !== 0)
      console.log(target.src);
    })
    img.src = src;
    return img
  } catch {
    console.log('oops');
    return "oops"
  }
}