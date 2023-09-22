export const GLOB_TS = "**/*.?([cm])ts"
export const GLOB_TSX = "**/*.?([cm])tsx"

export const GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",

  "**/output",
  "**/coverage",
  "**/temp",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.output",
  "**/.vite-inspect",

  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts",
]
