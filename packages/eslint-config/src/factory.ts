import type { FlatESLintConfigItem } from "eslint-define-config"

import { typescript } from "./configs"

export function hyoban() {
  const configs: FlatESLintConfigItem[] = [...typescript()]
  return configs
}
