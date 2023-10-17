import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Planet Matrix's Components",
  lang: "zh-CN",
  themeConfig: {
    sidebar: [
      { text: "Tailwind CSS", link: "/tailwindcss" },
      { text: "Components", link: "/components" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/planet-matrix/seibun" },
      {
        icon: "twitter",
        link: "https://twitter.com/0xhyoban",
      },
    ],
  },
  cleanUrls: true,
  base: "seibun",
})
