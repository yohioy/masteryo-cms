const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  roots: [
    '<rootDir>/src/components/',
    '<rootDir>/src/lib/',
    '<rootDir>/src/pages/'
  ],
  testRegex: TEST_REGEX,
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(jsx?|js?|tsx?|ts?)?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/lib/*.{js,jsx,ts,tsx}',
    'src/pages/*.{js,jsx,ts,tsx}',
    '!node_modules/**'
  ],
  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testEnvironment: 'jsdom'
};
