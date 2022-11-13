export function fetchSuccess(testItem) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testItem),
  });
}
