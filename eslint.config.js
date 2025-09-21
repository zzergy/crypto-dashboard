import { defineConfig, globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
    globalIgnores(['dist', 'build']),

    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                process: 'readonly',
            },
        },
        ignores: ['**/node_modules/**', 'public/**', 'demo-frontend/**'],
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            import: pluginImport,
            'unused-imports': pluginUnusedImports,
            react: pluginReact,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommended,
            pluginReact.configs.flat.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        rules: {
            // Allow `any`
            '@typescript-eslint/no-explicit-any': 'off',

            // React
            'react/react-in-jsx-scope': 'off',
            'react/no-array-index-key': 'error',
            'react/self-closing-comp': 'error',

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
]);
