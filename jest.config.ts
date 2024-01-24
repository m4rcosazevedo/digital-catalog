export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
    // process `*.tsx` files with `ts-jest`
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/main.tsx',
    '!<rootDir>/src/**/index.{ts,tsx}',
    '!<rootDir>/src/main/config/*.{ts,tsx}',
    '!<rootDir>/src/presentation/assets/**/*.{ts,tsx}'
  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/main/config/jest-setup-mock.ts',
    '\\.(css|scss)': 'identity-obj-proxy',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts']
}
