# ESLint

## 安装依赖

```sh
ni -D eslint @hyoban/eslint-config
```

## 添加配置

::: code-group

```json [package.json]
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

```js [eslint.config.js]
import hyoban from "@hyoban/eslint-config"

export default hyoban()
```

```json [.vscode/settings.json]
{
  "eslint.experimental.useFlatConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript", "typescriptreact"],

  // optional, if you are using monorepo
  "eslint.workingDirectories": [
    { "pattern": "apps/*/" },
    { "pattern": "packages/*/" }
  ]
}
```

:::

## 配置详情

此预设会按照当前环境自动使用合适的规则。
比如，如果是纯 TS 项目，则不会有 react 的相关规则。

1. 假定配合 [tsconfig](tsconfig.md) 使用
1. 使用 [typescript-eslint][] `strict-type-checked` 预设
1. 添加 [eslint-config-prettier][] 预设，处理 prettier 和 eslint 的冲突
1. 添加 [eslint-plugin-tailwindcss][] 插件，校验 className 是否为 tailwindcss 的有效类名
1. 添加 [eslint-plugin-jsx-a11y][], [eslint-plugin-react][], [eslint-plugin-react-hooks][] 等相关插件，校验 react jsx 代码
1. 添加 [eslint-plugin-react-refresh][]，校验 Vite 环境中组件的热更新效果
1. 添加 [eslint-plugin-next][] 插件，校验 Next.js 环境中的代码

[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[eslint-plugin-tailwindcss]: https://github.com/francoismassart/eslint-plugin-tailwindcss
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-react-refresh]: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
[eslint-plugin-next]: https://www.npmjs.com/package/@next/eslint-plugin-next
