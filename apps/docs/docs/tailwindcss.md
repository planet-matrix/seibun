# Tailwind CSS

## 安装依赖

```bash
ni -D tailwindcss postcss autoprefixer @planet-matrix/tailwind-preset @iconify-json/lucide @iconify-json/simple-icons @iconify-json/mdi
npx tailwindcss init --ts
```

## 加载配置

```js
// tailwind.config.ts
import config from "@planet-matrix/tailwind-preset"

export default config
```

## 引入样式文件

```js
import "@planet-matrix/tailwind-preset/globals.css"
```

## 配置详情

1. 基于 [shandcn ui](https://ui.shadcn.com/docs/installation/manual#configure-tailwindconfigjs) 的 tailwind css 配置
1. 预置 [tailwindcss icons](https://github.com/egoist/tailwindcss-icons) 和 [tailwindcss typography](https://tailwindcss.com/docs/typography-plugin) 插件
