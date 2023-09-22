import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
    ],
  },
})
