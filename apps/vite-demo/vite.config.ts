import path from "node:path"

import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import Inspect from "vite-plugin-inspect"

export default defineConfig({
  plugins: [UnoCSS(), react(), Inspect()],
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
    ],
  },
})
