import type { Config } from "prettier"
import type { PluginConfig } from "@ianvs/prettier-plugin-sort-imports"

const config: Config & PluginConfig = {
  semi: false,
  plugins: [
    "prettier-plugin-pkgsort",
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

export = config
