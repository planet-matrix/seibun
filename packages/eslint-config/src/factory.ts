import type { FlatESLintConfigItem } from "eslint-define-config"

import { prettier, typescript } from "./configs"

export function hyoban() {
  const configs: FlatESLintConfigItem[] = [...typescript(), ...prettier]
  return configs
}
