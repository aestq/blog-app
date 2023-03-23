module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'i18next'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-key': 'error',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }]
  },
  globals: {
    __IS_DEV__: true
  }
}
