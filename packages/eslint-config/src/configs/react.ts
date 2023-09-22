import type { FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from "../globs"
import { pluginJsxA11y, pluginReact, pluginReactHooks } from "../plugins"

export function react(): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      ignores: GLOB_EXCLUDE,
      plugins: {
        react: pluginReact,
        "react-hooks": pluginReactHooks,
        "jsx-a11y": pluginJsxA11y,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        ...pluginJsxA11y.configs.recommended.rules,
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs["jsx-runtime"].rules,
        ...pluginReactHooks.configs.recommended.rules,
        "react/jsx-no-leaked-render": "error",
        "react/prop-types": "off",
        "react/jsx-curly-brace-presence": ["warn", "never"],
      },
    },
  ]
}
