const isInEditor =
  (process.env["VSCODE_PID"] || process.env["JETBRAINS_IDE"]) &&
  !process.env["CI"]
const offInEditor = isInEditor ? "off" : "error"

export default {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    // only lint for typescript files
    "*.*",
    "!*.tsx",
    "!*.ts",
  ],
  plugins: ["@typescript-eslint", "import", "@cspell"],
  parser: "@typescript-eslint/parser",
  root: true,
  rules: {
    // https://vitejs.dev/guide/features.html#typescript
    "@typescript-eslint/consistent-type-imports": "error",

    // ts config
    // TypeScript provides noUnusedLocals and noUnusedParameters compiler options
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // formatting
    "prefer-template": "warn",

    "import/no-anonymous-default-export": "warn",

    "@cspell/spellchecker": offInEditor,
  },
}
