/* eslint-disable no-undef */
import { createItem } from './createItem';

describe('Create Item', () => {
  it('returns a valid item with valid input', () => {
    const item = createItem('Test Item', 'This is a test item.');
    expect(item).toEqual({
      id: 1,
      name: 'Test Item',
      description: 'This is a test item.',
    });
  });
});
