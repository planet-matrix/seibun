/** @type {import("prettier").Config} */
const config = {
  semi: false,
  plugins: [
    "prettier-plugin-packagejson",
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
    "^~/(.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
}

export default config
