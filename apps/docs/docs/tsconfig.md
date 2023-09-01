# TS Config

## 快速使用

### 安装依赖

```bash
ni -D @hyoban/tsconfig
```

### 继承配置并添加自定义别名

不管是 Vite 还是 Next.js，都使用 src 目录作为源码目录。

```jsonc filename="tsconfig.json"
{
  "extends": "@hyoban/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

## 配置详情

以下为默认开启的配置，对于 Vite 环境，直接继承即可。对于 Next.js 环境，先继承它，然后 `next dev` 启动时，会自动追加额外的配置。

<<< ../../../packages/tsconfig/tsconfig.json
