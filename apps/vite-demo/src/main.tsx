import React from "react"
import ReactDOM from "react-dom/client"

import App from "~/App"

import "@hyoban/components/index.css"
import "@hyoban/tailwind-config/globals.css"

const root = document.getElementById("root")
if (!root) throw new Error("root element not found")

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
