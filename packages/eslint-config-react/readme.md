# @hyoban/eslint-config-react

Use this with [prettier](https://github.com/hyoban/prettier-config), typescript, tailwindcss.

## Install

```bash
ni -D eslint @hyoban/eslint-config-react
```

## Usage

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix ."
  },
  "eslintConfig": {
    "extends": ["@hyoban/eslint-config-react"]
  }
}
```

`.vscode/settings.json`

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.validate": ["typescript", "typescriptreact"],
  "typescript.preferences.importModuleSpecifier": "non-relative",

  // optional
  "eslint.workingDirectories": ["./packages/web"]
}
```
