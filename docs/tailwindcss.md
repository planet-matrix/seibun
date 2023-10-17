# Tailwind CSS Preset

## 安装依赖

```bash
ni -D tailwindcss postcss autoprefixer @planet-matrix/tailwind-preset @iconify-json/lucide @iconify-json/simple-icons @iconify-json/mdi
npx tailwindcss init --esm
```

## 加载配置

```js
// tailwind.config.js
import preset from "@planet-matrix/tailwind-preset"

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
}
```

## 引入样式文件

```js
import "@planet-matrix/tailwind-preset/index.css"
```

## 配置详情

1. 基于 [shandcn ui](https://ui.shadcn.com/docs/installation/manual#configure-tailwindconfigjs) 的 tailwind css 配置
1. 预置 [tailwindcss icons](https://github.com/egoist/tailwindcss-icons) 和 [tailwindcss typography](https://tailwindcss.com/docs/typography-plugin) 插件
