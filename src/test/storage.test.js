import * as storage from '../js/storage';
import { LocalStorageMock } from '../mocks/localStorage.mock';

describe('storage', () => {
  globalThis.localStorage = new LocalStorageMock();
  it('Saves an array to storage', () => {
    const key = 'basket';
    const value = ['item1', 'item2'];
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it('Loads and array from storage', () => {
    const key = 'basket';
    const value = ['item1', 'item2'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });

  it('Removes an array from storage', () => {
    const key = 'basket';
    const value = ['item1', 'item2'];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.load(key)).toEqual(null);
  });

  it('Returns null if key does not exist', () => {
    const key = 'basket';
    expect(storage.load(key)).toEqual(null);
  });
});
