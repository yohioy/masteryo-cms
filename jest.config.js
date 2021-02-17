const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

//@todo - testcoverage
module.exports = {
  roots: ['<rootDir>/src/components/'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(jsx?|js?|tsx?|ts?)?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['.', 'node_modules'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!node_modules/!**',
  ],/**/
};
