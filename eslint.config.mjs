import globals from 'globals'
import pluginJs from '@eslint/js'
import {
  configs as tsConfigs,
  parser as tsParser
} from '@typescript-eslint/eslint-plugin'

export default [
  {
    // Apply these settings to both JavaScript and TypeScript files
    files: ['**/*.{js,mjs,cjs,ts}'],

    // Specify parser for TypeScript files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Point to your tsconfig.json
        tsconfigRootDir: __dirname, // Define the root directory
        sourceType: 'module'
      },
      globals: globals.node // Use Node.js globals
    },

    // Enable TypeScript ESLint recommended config
    plugins: {
      '@typescript-eslint': tsConfigs.recommended
    },

    // Include ESLint's recommended config for JS and the one for TypeScript
    rules: {
      ...pluginJs.configs.recommended.rules, // JS rules
      ...tsConfigs.recommended.rules, // TS rules
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'off'
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended']
  }
]
