/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  plugins: ["prettier-plugin-astro"],
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
}
