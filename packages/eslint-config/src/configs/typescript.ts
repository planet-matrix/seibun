import process from "node:process"
import type { FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_TS, GLOB_TSX } from "../globs"
import { parserTs, pluginTs } from "../plugins"

/**
 * @see https://eslint.org/docs/latest/rules/
 * @see https://typescript-eslint.io/rules/
 */
export function typescript(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          project: true,
          tsconfigRootDir: process.cwd(),
          sourceType: "module",
        },
      },
      plugins: {
        "@typescript-eslint": pluginTs,
      },
      rules: {
        ...pluginTs.configs["eslint-recommended"]?.overrides?.[0]?.rules,
        ...pluginTs.configs["strict-type-checked"]?.rules,

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",

        "no-console": "warn",

        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: {
              arguments: false,
              attributes: false,
            },
          },
        ],

        "@typescript-eslint/no-import-type-side-effects": "error",
      },
    },
  ]
}
