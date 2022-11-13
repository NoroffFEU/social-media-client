export function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}
