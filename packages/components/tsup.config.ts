import { defineConfig } from "tsup"

export default defineConfig({
  minify: false,
  target: "es2018",
  external: ["react"],
  sourcemap: false,
  dts: true,
  format: ["esm", "cjs"],
  injectStyle: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
