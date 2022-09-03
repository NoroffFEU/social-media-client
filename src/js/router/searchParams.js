export const searchParams = () => {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams)
}