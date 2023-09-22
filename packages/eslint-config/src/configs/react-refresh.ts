import type { FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_TS, GLOB_TSX } from "../globs"
import { pluginReactRefresh } from "../plugins"

export function reactRefresh(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        "react-refresh": pluginReactRefresh,
      },
      rules: {
        "react-refresh/only-export-components": "warn",
      },
    },
  ]
}
