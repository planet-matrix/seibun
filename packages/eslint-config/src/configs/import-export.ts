import type { FlatESLintConfigItem } from "eslint-define-config"
import { GLOB_TS, GLOB_TSX } from "../globs"
import { pluginImport } from "../plugins"

export function importExport(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        import: pluginImport,
      },
      rules: {
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      },
    },
  ]
}
