export const imageTemplate = (src, alt) => {
  try {
    const img = new Image();
    img.alt = alt;
    img.src = src;
    return img
  } catch {
    return "oops"
  }
}