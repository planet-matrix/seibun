const baseConfig = require("@hyoban/tailwind-config")
const path = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    path.join(
      path.dirname(require.resolve("@hyoban/components")),
      "**/*.{js,cjs,mjs}",
    ),
  ],
}
