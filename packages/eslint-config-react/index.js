let next
try {
  next = require("next")
} catch (e) {
  next = null
}

const nextOnlyExtends = next !== null ? ["plugin:@next/next/recommended"] : []

module.exports = {
  extends: [
    "plugin:tailwindcss/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    ...nextOnlyExtends,
    "prettier",
  ],
  ignorePatterns: [
    // only lint for typescript files
    "*.*",
    "!*.tsx",
    "!*.ts",
  ],
  plugins: ["@typescript-eslint", "react-refresh", "import"],
  parser: "@typescript-eslint/parser",
  root: true,
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
    // https://vitejs.dev/guide/features.html#typescript
    "@typescript-eslint/consistent-type-imports": "error",

    // ts config
    // TypeScript provides noUnusedLocals and noUnusedParameters compiler options
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // tailwind
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "warn",

    "react/prop-types": "off",

    // dev
    "react-refresh/only-export-components": next === null ? "warn" : "off",

    // formatting
    "prefer-template": "warn",
    "react/jsx-curly-brace-presence": ["warn", "never"],

    "import/no-anonymous-default-export": "warn",
  },
}
