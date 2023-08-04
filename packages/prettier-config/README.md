# @hyoban/prettier-config

## Install

```bash
ni -D prettier @hyoban/prettier-config
```

## Usage

Edit `package.json`

```jsonc
{
  "scripts": {
    "format": "prettier --cache --write **/*.astro ."
  },
  "prettier": "@hyoban/prettier-config"
}
```

Edit `.vscode/settings.json`

```jsonc
{
  "editor.formatOnSave": true,
  "prettier.documentSelectors": ["**/*.astro"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  }
}
```
