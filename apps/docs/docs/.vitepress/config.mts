import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Hyoban's Config",
  description: "My personal config to start a new project.",
  themeConfig: {
    sidebar: [
      { text: "Prettier", link: "/prettier" },
      { text: "Tailwind CSS", link: "/tailwindcss" },
      { text: "ESLint", link: "/eslint" },
      { text: "TS Config", link: "/tsconfig" },
      { text: "Vite", link: "/vite" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/hyoban/config" },
      {
        icon: "twitter",
        link: "https://twitter.com/0xhyoban",
      },
    ],
  },
  cleanUrls: true,
})
