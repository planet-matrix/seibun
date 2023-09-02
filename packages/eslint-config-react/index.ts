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
    // https://twitter.com/Brooooook_lyn/status/1666637274757595141
    "react/jsx-no-leaked-render": "error",

    // tailwind
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "warn",

    "react/prop-types": "off",

    // dev
    "react-refresh/only-export-components": "warn",

    // formatting
    "react/jsx-curly-brace-presence": ["warn", "never"],
  },
}
