const localStorageMock = {
    mockedStorage: {},
    setItem: jest.fn(function (key, value) {
        this.mockedStorage[key] = JSON.parse(value);
        console.log('localStorage.setItem called. Stored values: ', this.mockedStorage);
    }),
    getItem: jest.fn(function (key) {
        return this.mockedStorage[key];
    }),
    removeItem: jest.fn(),
};

export default localStorageMock;
