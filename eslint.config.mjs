import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import stylisticJs from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js','**/*.jsx'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
    },
    settings: {
      react: { version: 'detect'},
    },
  },
  {
    ignores: ['dist/**', 'webpack.config.js', 'node_modules'],
  },
]