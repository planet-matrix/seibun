// @ts-ignore
import config from "eslint-config-prettier"
import { type FlatESLintConfigItem } from "eslint-define-config"

export const prettier: FlatESLintConfigItem[] = [
  {
    rules: config.rules,
  },
]
