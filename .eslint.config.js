import { defineConfig } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      'dist/**',
      'public/**',
      'demo-frontend/**',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
      react: pluginReact,
    },
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      prettierConfig,
    ],
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'error',
      'react/self-closing-comp': 'error',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',

      // Imports
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
        },
      ],

      // Unused imports/vars
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // General
      eqeqeq: ['error', 'always'],
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-var': 'error',
      'no-console': 'warn',
      'no-alert': 'error',

      // Formatting
      quotes: ['error', 'single', { avoidEscape: true }],
      'object-curly-spacing': ['warn', 'always'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'function' },
      ],

      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
        },
      ],
    },
  },
  // Ignore build/dist
  {
    files: ['dist/**/*', 'build/**/*'],
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
]);
