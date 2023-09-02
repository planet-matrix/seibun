import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.tsx", "src/button/index.tsx", "src/input/index.tsx"],
  minify: false,
  target: "es2018",
  external: ["react"],
  sourcemap: false,
  dts: true,
  format: ["esm", "cjs"],
  injectStyle: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
