# Tailwind CSS

## 快速使用

### 配置 pnpm hoist 规则

在 `.npmrc` 中添加以下内容：

```ini
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*prettier*
public-hoist-pattern[]=@iconify*
```

### 安装依赖

安装好 Tailwind CSS 和 Tailwind Config

```bash
ni -D tailwindcss postcss autoprefixer @hyoban/tailwind-config
npx tailwindcss init -p
```

### 重命名配置文件

重命名 `tailwind.config.js` 为 `tailwind.config.cjs`，并修改 `tailwind.config.cjs` 内容为：

```js filename="tailwind.config.cjs"
module.exports = require("@hyoban/tailwind-config")
```

### 引入样式文件

```js
import "@hyoban/tailwind-config/globals.css"
```

## 配置详情

1. 基于 [shandcn ui](https://ui.shadcn.com) 的 tailwind css 配置
1. 预置 [tailwindcss icons](https://github.com/egoist/tailwindcss-icons) 插件和 lucide、mdi、simple-icons 图标库
1. 预置 [tailwindcss typography](https://tailwindcss.com/docs/typography-plugin) 插件
