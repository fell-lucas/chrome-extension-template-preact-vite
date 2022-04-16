export default {
  moduleNameMapper: {
    '^@src/(.*)$': ['<rootDir>/src/$1'],
    '^@assets/(.*)$': ['<rootDir>/src/assets/$1'],
  },
  transform: {
    '\\.[jt]sx?$': './babel.js',
  },
  testEnvironment: 'jsdom',
};
