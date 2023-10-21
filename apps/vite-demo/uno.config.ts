import { presetPlanetMatrix } from "@planet-matrix/unocss-preset"
import { defineConfig } from "unocss"

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.([jt]sx|html)($|\?)/,
        /.*components.*\.js/,
      ],
    },
  },

  presets: [presetPlanetMatrix()],
})
