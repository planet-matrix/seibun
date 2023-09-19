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
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: true,
  },
  root: true,
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    //#region snippet
    "no-console": "warn",
    //#endregion snippet
  },
}
