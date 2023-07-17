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
    // 'standard-with-typescript',
    'plugin:react/recommended',
    // 'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended'
  ],
  // "overrides": [
  //     {
  //         "env": {
  //             "node": true
  //         },
  //         "files": [
  //             ".eslintrc.{js,cjs}",
  //             '*.js',
  //             '*.jsx',
  //             '*.ts',
  //             '*.tsx'
  //         ],
  //         "parserOptions": {
  //             "sourceType": "script",
  //         }
  //     }
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: '__dirname/../..'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
