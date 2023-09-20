import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.tsx", "src/button/index.tsx", "src/input/index.tsx"],
  external: ["react"],
  dts: true,
  format: ["esm", "cjs"],
  injectStyle: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
