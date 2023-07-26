/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.test.ts', '*.test.tsx']
}
