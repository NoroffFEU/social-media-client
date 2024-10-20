import { jest } from '@jest/globals';

// Mock global localStorage to avoid 'localStorage is not defined' errors
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
