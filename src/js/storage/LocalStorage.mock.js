
export default {
    setItem: jest.fn((key, value) => (localStorage[key] = value)),
    getItem: jest.fn((key) => localStorage[key] || null),
    removeItem: jest.fn((key) => delete localStorage[key]),
    clear: jest.fn(() => Object.keys(this).forEach((key) => delete this[key])),
};


globals.localStorage = localStorageMock;

describe("LocalStorageMock", () => {
    it("allows for mock call detection on storage methods", () => {
        localStorage.setItem("test", "hello world")
        expect(localStorage.setItem).toHaveBeenCalled()
    })
})