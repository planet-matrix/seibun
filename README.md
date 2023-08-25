# @hyoban/config

> check [demo setup](./demo/vite-react/) for more details.

[![npm](https://img.shields.io/npm/v/@hyoban/eslint-config-react?color=444&label=)](https://npmjs.com/package/@hyoban/eslint-config-react)

Use this with React, tailwindcss, typescript, eslint, prettier.

## Install

```bash
ni -D eslint @hyoban/eslint-config-react
ni -D prettier @hyoban/prettier-config
```

## Usage

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix .",
    "format": "prettier --cache --write **/*.astro ."
  },
  "eslintConfig": {
    "extends": ["@hyoban/eslint-config-react"]
  },
  "prettier": "@hyoban/prettier-config"
}
```

`.vscode/settings.json`

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript", "typescriptreact"],
  "typescript.preferences.importModuleSpecifier": "non-relative",

  // optional
  "eslint.workingDirectories": ["./packages/web"],

  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // for astro
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  }
}
```

## Troubleshooting

If you get an error like `eslint: ClassName 'xxx' is not a Tailwind CSS class!` in a monorepo, and it's not correct.

Try to set `eslint.workingDirectories` in your VSCode settings, or you can set tailwind config path explicitly.

```js
const path = require("path")

module.exports = {
  extends: "@hyoban/eslint-config-react",
  settings: {
    tailwindcss: {
      config: path.resolve(__dirname, "./tailwind.config.cjs"),
    },
  },
}
```
