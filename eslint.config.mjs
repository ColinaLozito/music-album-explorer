// @ts-check

import js from "@eslint/js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ["node_modules"],
    rules: {
      // your rules here
      "max-len": ["warn", { code: 100 }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
