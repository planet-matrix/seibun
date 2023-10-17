import { defineConfig } from "tsup"

const rscPlugin = {
  name: "add-use-client",
  setup(build: any) {
    build.onEnd(async ({ metafile, outputFiles }: any) => {
      for (const [path, output] of Object.entries(metafile.outputs)) {
        if ((output as any).imports.some((i: any) => i.path === "react")) {
          console.log("add use client directive", path)
          const file = outputFiles.find((f: any) => f.path.includes(path))
          const modified = `"use client"\n${file.text}`
          file.contents = Buffer.from(modified)
        }
      }
    })
  },
}

export default defineConfig({
  entry: ["src/hooks/index.ts", "src/index.ts", "src/utils/index.ts"],
  dts: true,
  format: ["esm"],
  esbuildPlugins: [rscPlugin],
})
