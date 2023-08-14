module.exports = {
  plugins: [
    'jest',
    '@typescript-eslint',
    'testing-library',
    'unused-imports',
    'react-hooks',
  ],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useSafeLayoutEffect)',
      },
    ],
    eqeqeq: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'semi-spacing': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'computed-property-spacing': ['error', 'never'],
    'keyword-spacing': ['error'],
    semi: ['warn', 'always'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              `You can set '() => void', '() => boolean', ''() => number, or etc. instead.`,
            ].join('\n'),
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value"',
              'If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            ].join('\n'),
          },
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              'If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              'If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
            ].join('\n'),
          },
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  overrides: [
    {
      files: ['packages/**/*.{ts,tsx}', 'tooling/**/*/*.ts', 'scripts/**/*.ts'],
    },
  ],
};
