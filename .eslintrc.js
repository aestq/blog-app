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
    },
    {
      files: ['*.stories.tsx', '*.stories.ts'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off'
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
    'i18next',
    'react-hooks'
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
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-key': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true
  }
}
