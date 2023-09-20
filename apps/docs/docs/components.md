# 组件库

## 快速使用

```sh
ni -D @hyoban/components
```

::: warning
你需要结合 `@hyoban/tailwind-config` 一同使用
:::

## 组件列表

### 深色模式切换

```tsx
import { AppearanceSwitch } from "@hyoban/components"

function Page() {
  return <AppearanceSwitch enableTransition />
}
```

`enableTransition` 表示使用 View Transition API 来进行动画过渡。

对于 Vite，在 `index.html` 中注入如下脚本来处理页面首次加载闪烁。

```html
<script>
  !(function () {
    var e =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      t = localStorage.getItem("use-dark") || "system"
    ;('"dark"' === t || (e && '"light"' !== t)) &&
      document.documentElement.classList.toggle("dark", !0)
  })()
</script>
```

对于 Next.js，可以在 Layout 中包裹 `ThemeProvider`。

```tsx
import { ThemeProvider } from "@hyoban/components"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

### 包含的 shandcn ui 组件

1. [Button](https://ui.shadcn.com/docs/components/button)
1. [Input](https://ui.shadcn.com/docs/components/input)
