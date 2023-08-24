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
