# ESLint

## 快速使用

### 移除项目预置 ESLint 配置和依赖（如果有）

```sh
nun @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
rm .eslintrc.cjs
```

### 安装依赖

取决于你在写纯 React 还是 Next.js 项目，安装不同的 config 包。

```sh
ni -D eslint @hyoban/eslint-config-react
```

### 添加配置

需要注意，默认配置中只对 ts 和 tsx 文件进行检查。

添加脚本和使用的配置到你的 `package.json`。

```json
{
  "scripts": {
    "lint": "eslint --fix ."
  },
  "eslintConfig": {
    "extends": "@hyoban/eslint-config-react"
  }
}
```

添加 vscode 设置到 `.vscode/settings.json`。如果创建的项目处于 monorepo 中，需要添加正确的 `eslint.workingDirectories` 配置。

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

1. 使用 [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) 的预设
1. 添加 [prettier](https://github.com/prettier/eslint-config-prettier) 预设，处理 prettier 和 eslint 的冲突
1. 添加 [cspell](https://github.com/streetsidesoftware/cspell) 插件，处理拼写检查
   1. 在编辑器中关闭，假定你已经安装了 [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 插件

### eslint-config-react

1. 使用 eslint-config-ts 的预设
1. 添加 [tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) 插件，校验 tailwindcss 的类名
1. 添加 [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [react](https://github.com/jsx-eslint/eslint-plugin-react), [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) 等相关插件，校验 react 代码
1. 添加 [react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) 插件，校验 Vite 环境中组件的热更新效果

### eslint-config-next

1. 使用 eslint-config-react 的预设
1. 添加 [next](https://www.npmjs.com/package/@next/eslint-plugin-next) 插件，校验 next 环境中的代码