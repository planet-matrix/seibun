// @ts-ignore
import config from "eslint-config-prettier"
import { type FlatESLintConfigItem } from "eslint-define-config"

import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from "../globs"

export const prettier: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TS, GLOB_TSX],
    ignores: GLOB_EXCLUDE,
    rules: config.rules,
  },
]
