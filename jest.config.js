module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.build.json',
      },
    ],
  },
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  testRegex: '((src|file))/.*(test|spec)\\.(ts)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '((src)|(file))/**/*.{ts,js}',
    '!src/**/*.d.ts',
  ],
  setupFiles: [
    '<rootDir>/src/__tests__/setup.jest.js',
  ],
  moduleNameMapper: {
    '^\\$/utils$': 'src/nodeUtils.ts',
  },
  modulePaths: [
    '<rootDir>',
  ],
}
