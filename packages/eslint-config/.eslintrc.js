module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  env: {
    'jest/globals': true
  },
  overrides: [
    {
      files: ['test/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
      }
    },
    {
      files: ['web/**'],
      extends: ['next/core-web-vitals']
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: '__dirname/../..'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    },
    jest: {
      version: 'detect'
    }
  }
}
