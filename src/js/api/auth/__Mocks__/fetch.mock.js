export function mockFetch(fetchMock) {
      global.fetch.mockResolvedValueOnce({
            ok: fetchMock.ok,
            json: fetchMock.json,
      })
}
