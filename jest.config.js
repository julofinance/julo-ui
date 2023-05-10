/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.{ts,tsx}'],
  /**
   * @description temporary add this config
   * @todo remove this config after finish migrate all component to packages
   */
  modulePathIgnorePatterns: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['./scripts/setup-test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '^@julo-ui/rtl-utils$': '<rootDir>/node_modules/@julo-ui/rtl-utils',
  },
};
