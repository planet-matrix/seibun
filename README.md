# @hyoban/config

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
