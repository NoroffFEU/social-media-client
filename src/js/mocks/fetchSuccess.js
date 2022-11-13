export function fetchSuccess() {
  const testItem = {
    name: "Test user",
    email: "test@test.no",
    accessToken: "asd123qwe456",
  };

  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testItem),
  });
}
