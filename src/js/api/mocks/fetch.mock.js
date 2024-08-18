export const fetchMockTrue = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: 'mockedToken' }),
    })
);

export const fetchMockFalse = jest.fn(() =>
    Promise.resolve({
        ok: false,
        statusText: 'Login failed',
        json: () => Promise.resolve({}),
    })
);
