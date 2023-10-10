import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Hyoban's Config",
  description: "Hyoban 开启一个新项目的起手配置",
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
})
