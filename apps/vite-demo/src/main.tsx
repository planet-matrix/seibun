import "@unocss/reset/tailwind.css"
import "virtual:uno.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const root = document.getElementById("root")
if (!root) throw new Error("root element not found")

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
