function mockFetchSuccess(returnValue) {
  return jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(returnValue),
  });
}

export default mockFetchSuccess;
