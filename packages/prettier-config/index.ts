import type { Config } from "prettier"
import PrettierPackageJson from "prettier-package-json"
import PrettierPluginSortImports, {
  PluginConfig,
} from "@ianvs/prettier-plugin-sort-imports"
// @ts-ignore
import * as PrettierPluginAstro from "prettier-plugin-astro"

const config: Config & PluginConfig = {
  semi: false,
  plugins: [
    PrettierPackageJson,
    PrettierPluginSortImports,
    PrettierPluginAstro,
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
