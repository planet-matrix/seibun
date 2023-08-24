import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import react from "@vitejs/plugin-react-swc"

const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint .",
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `${path.resolve(_dirname, "src")}/`,
      },
    ],
  },
})
