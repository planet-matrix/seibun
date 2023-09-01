# Vite

## 快速使用

### 安装依赖

```bash
ni -D @types/node @hyoban/vite-config
```

### 继承配置并添加自定义别名

```ts filename="vite.config.ts"
import path from "node:path"
import { defineConfig } from "vite"
import config from "@hyoban/vite-config"

export default defineConfig({
  ...config,
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
    ],
  },
})
```

## 配置详情

除了 react 的插件，还使用 vite-plugin-checker 来做类型和 lint 检查。

<<< ../../../packages/vite-config/src/index.ts
