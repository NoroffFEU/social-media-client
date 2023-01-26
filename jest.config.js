module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
};
