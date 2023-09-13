export default {
  extends: [
    "@hyoban/eslint-config-ts",
    "plugin:tailwindcss/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["classnames", "cn", "cva"],
    },
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "warn",

    //#region snippet
    // https://twitter.com/Brooooook_lyn/status/1666637274757595141
    "react/jsx-no-leaked-render": "error",

    "react/prop-types": "off",

    // formatting
    "react/jsx-curly-brace-presence": ["warn", "never"],
    //#endregion snippet
  },
}
