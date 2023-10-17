import { defineConfig } from "tsup"

const rscPlugin = {
  name: "clean use client",
  setup(build: any) {
    build.onEnd(async ({ metafile, outputFiles }: any) => {
      for (const [path, output] of Object.entries(metafile.outputs)) {
        if (!(output as any).imports.some((i: any) => i.path === "react")) {
          console.log("clean use client", path)
          const file = outputFiles.find((f: any) => f.path.includes(path))
          const modified = file.text.replace('"use client"', "")
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
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client"',
    }
  },
})
