# 设置 Prettier

## 配置详情

1. 设置 `semi` 为 `false`，不使用分号
1. 修复 `pnpm-lock.yaml` 的格式化偏好，与 `pnpm install` 保持一致
1. 引入 `prettier-plugin-astro` 来支持 `.astro` 文件的格式化
1. 引入 `@ianvs/prettier-plugin-sort-imports` 来排序 import
1. 引入 `prettier-plugin-packagejson` 来排序 package.json 的 key

得益于 Prettier 3.0 默认忽略 `.gitignore`
中指定的文件，大多数情况下你不需要创建 `.prettierignore` 文件。

## 安装依赖

```sh
ni -D prettier @hyoban/prettier-config
```

## 添加设置

在 `package.json` 中添加。

```json
{
  "scripts": {
    "format": "prettier --cache --write **/*.astro ."
  },
  "prettier": "@hyoban/prettier-config"
}
```

如果你不需要格式化 astro，请移除 `**/*.astro` 。

在 `.vscode/settings.json` 中添加。

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // for astro
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  }
}
```
