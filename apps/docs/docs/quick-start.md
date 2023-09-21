# Quick Start

## Vite

```tsx filename="app.tsx"
import { Toaster } from "sonner"
import { TailwindIndicator } from "@hyoban/components"
import { useDark } from "@hyoban/utils/hooks"

import { useRoutes } from "~/libs/route"

export default function App() {
  const { isDark } = useDark()
  const routes = useRoutes()

  return (
    <>
      {routes}
      <Toaster
        theme={isDark ? "dark" : "light"}
        position="top-right"
        richColors
        closeButton
      />
      <TailwindIndicator />
    </>
  )
}
```

```tsx filename="main.tsx"
import "@hyoban/tailwind-config/globals.css"
import "~/libs/i18n"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("root element not found")

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
