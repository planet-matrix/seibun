# ESLint

## 快速使用

::: tip
移除项目预置 ESLint 配置和依赖（如果有）
:::

### 安装依赖

取决于你在写纯 React 还是 Next.js 项目，安装不同的预设。

```sh
ni -D eslint @hyoban/eslint-config-react
```

### 添加配置

::: tip
需要注意，默认配置中只对 ts 和 tsx 文件进行检查。
:::

添加脚本和要使用的预设到你的 `package.json`。

```json
{
  "scripts": {
    "lint": "eslint ."
  },
  "eslintConfig": {
    "extends": "@hyoban/eslint-config-react"
  }
}
```

添加 vscode 设置到 `.vscode/settings.json`。
如果创建的项目处于 monorepo 中，需要添加正确的 `eslint.workingDirectories` 配置。

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // optional
  "eslint.workingDirectories": ["./packages/web"]
}
```

## 配置详情

### eslint-config-ts

1. 使用 [typescript-eslint][] `strict-type-checked` 预设
1. 添加 [eslint-config-prettier][] 预设，处理 prettier 和 eslint 的冲突
1. 假定配合 [tsconfig](tsconfig.md) 使用

::: details 其它开启的规则
<<< ../../../packages/eslint-config-ts/index.ts#snippet
:::

### eslint-config-react

1. 基于 eslint-config-ts 预设
1. 添加 [eslint-plugin-tailwindcss][] 插件，校验 className 是否为 tailwindcss 的有效类名
1. 添加 [eslint-plugin-jsx-a11y][], [eslint-plugin-react][], [eslint-plugin-react-hooks][] 等相关插件，校验 react jsx 代码
1. 添加 [eslint-plugin-react-refresh][]，校验 Vite 环境中组件的热更新效果

::: details 其它开启的规则
<<< ../../../packages/eslint-config-react/index.ts#snippet
:::

### eslint-config-next

1. 基于 eslint-config-react 预设
1. 添加 [eslint-plugin-next][] 插件，校验 Next.js 环境中的代码
1. 禁用 `react-refresh/only-export-components`

[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[eslint-plugin-tailwindcss]: https://github.com/francoismassart/eslint-plugin-tailwindcss
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-react-refresh]: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
[eslint-plugin-next]: https://www.npmjs.com/package/@next/eslint-plugin-next
