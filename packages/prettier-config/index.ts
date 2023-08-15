import type { PluginConfig } from "@ianvs/prettier-plugin-sort-imports"
import type { Config } from "prettier"

const config: Config & PluginConfig = {
  semi: false,
  plugins: [
    "prettier-package-json",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
  ],
  overrides: [
    {
      files: "pnpm-lock.yaml",
      options: {
        requirePragma: true,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript",
    "jsx",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^@([^/]+?)/(.*)$",
    "",
    "^shared/(.*)$",
    "",
    "^~/(.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
}

export default config
