const isInEditor =
  (process.env["VSCODE_PID"] || process.env["JETBRAINS_IDE"]) &&
  !process.env["CI"]
const offInEditor = isInEditor ? "off" : "error"

export default {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "prettier",
  ],
  ignorePatterns: [
    // only lint for typescript files
    "*.*",
    "!*.tsx",
    "!*.ts",
  ],
  plugins: ["@typescript-eslint", "import", "unused-imports", "@cspell"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [
      "./tsconfig.json",
      "./packages/*/tsconfig.json",
      "./apps/*/tsconfig.json",
    ],
  },
  root: true,
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@cspell/spellchecker": offInEditor,

    //#region snippet
    "no-console": "warn",

    // https://vitejs.dev/guide/features.html#typescript
    "@typescript-eslint/consistent-type-imports": "error",

    // formatting
    "prefer-template": "warn",

    "import/no-anonymous-default-export": "warn",
    //#endregion snippet
  },
}
