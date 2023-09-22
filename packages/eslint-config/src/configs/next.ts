import type { FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_TS, GLOB_TSX } from "../globs"
import { pluginNext } from "../plugins"

export function next(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        "@next/next": pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
      },
    },
  ]
}
