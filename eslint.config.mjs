import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactBaseConfig from '@tata-v/eslint-config-react-base';

const { env, parserOptions, ...flatReactBase } = reactBaseConfig;

export default tseslint.config(
  { ignores: ['dist', 'README.md'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      flatReactBase,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);