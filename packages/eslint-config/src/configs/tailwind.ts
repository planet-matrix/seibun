import type { FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from "../globs"
import { pluginTailwindcss } from "../plugins"

export function tailwind(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      ignores: GLOB_EXCLUDE,
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        tailwindcss: {
          callees: ["classnames", "cn", "cva"],
        },
      },
      rules: {
        "tailwindcss/classnames-order": "off",
        "tailwindcss/enforces-negative-arbitrary-values": "warn",
        "tailwindcss/enforces-shorthand": "warn",
        "tailwindcss/migration-from-tailwind-2": "warn",
        "tailwindcss/no-arbitrary-value": "off",
        "tailwindcss/no-custom-classname": "warn",
        "tailwindcss/no-contradicting-classname": "error",
      },
    },
  ]
}
