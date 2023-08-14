/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  plugins: [
    require.resolve("prettier-package-json"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-astro"),
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
