/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("@hyoban/tailwind-config"),
  corePlugins: {
    preflight: false,
  },
}