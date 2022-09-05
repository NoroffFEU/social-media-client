export const getSearchParams = () => {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams)
}

export const setSearchParams = (params) => {
  const newParams = {
    ...getSearchParams(),
    ...params
  }

  const searchParams = new URLSearchParams(newParams);
  window.location.search = searchParams.toString();
}