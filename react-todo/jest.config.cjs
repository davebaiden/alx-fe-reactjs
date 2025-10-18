module.exports = {
  // Use jsdom for simulating the browser environment
  testEnvironment: 'jest-environment-jsdom',

  // Run setup files after the environment is set up
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // Transform JS and JSX files using babel-jest
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },

  // Map CSS imports to a proxy to avoid errors during tests
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Optional: Ignore transforming node_modules except if needed
  transformIgnorePatterns: ['/node_modules/'],

  // Optional: Specify test file patterns
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
