export class StorageMock {
  constructor() {
    this.store = {};

    this.setItem = jest.fn((key, value) => {
      this.store[key] = value.toString();
    });

    this.getItem = jest.fn((key) => {
      return this.store[key] || null;
    });

    this.removeItem = jest.fn((key) => {
      delete this.store[key];
    });

    this.clear = jest.fn(() => {
      this.store = {};
    });

    this.key = jest.fn((index) => {
      return Object.keys(this.store)[index] || null;
    });
  }

  get length() {
    return Object.keys(this.store).length;
  }
}
