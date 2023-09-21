import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  external: ["react"],
  dts: true,
  format: ["esm", "cjs"],
  injectStyle: true,
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
