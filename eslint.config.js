import css from '@eslint/css';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },

  {
    plugins: {
      stylistic,
      import: importPlugin,
    },
    rules: {
      'stylistic/quotes': ['error', 'single'],
      'stylistic/indent': ['error', 2],
      'stylistic/semi': ['error', 'always'],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/no-multi-spaces': 'error',
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'stylistic/comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
        'enums': 'always-multiline',
        'generics': 'always-multiline',
      }],
      'stylistic/padding-line-between-statements': ['error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'never', prev: 'function', next: 'return' },
      ],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'object-shorthand': ['error', 'always'],

      'import/order': ['error', {
        'groups': [
          ['builtin'],
          ['external'],
          ['internal'],
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      }],

    },
  },
]);
