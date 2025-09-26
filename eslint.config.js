/** @type {import("eslint").Linter.Config} */
import prettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import ts from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,ts,astro}'],
    rules: {
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
      "astro/prefer-object-class-list": "warn",
      "astro/sort-attributes": 'warn',
    },
  },
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  prettier, // Turn off all rules that might conflict with Prettier
]);
