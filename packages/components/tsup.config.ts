import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/hooks/index.ts", "src/**/*.ts", "src/**/*.tsx"],
  external: ["react"],
  dts: true,
  format: ["esm", "cjs"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
