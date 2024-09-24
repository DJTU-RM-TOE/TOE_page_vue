import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  bundler: viteBundler(),

  theme: hopeTheme({
    //引入icon
    iconAssets: [
      "//at.alicdn.com/t/c/font_4693668_2lpv5x1ucb3.css"
    ],

    // 自定义你的主题配置
    //logo: '/images/logo.png',
    //sidebar: 'auto',
    logo: "/images/toe_logo.svg",

    themeColor: true,

    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
    },

    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "flag",
        // 仅在 `/zh/guide/` 激活
      },

      {
        text: "项目",
        link: "/projects/",
        icon: "project",
        // 仅在 `/zh/guide/` 激活
      },

      {
        text: "资料站",
        link: "/learning/",
        icon: "book",
        // 仅在 `/zh/guide/` 激活
      },
    ],

    sidebar: {
      "/learning/": [
        "",
        "Summary_of_Excellent_Bloggers_and_Tutorials",
        "course_outline",
        "How_to_ask_questions",
        "how_to_learn_by_youself",
      ],

      "/projects/": [
        "",
        "OpenSource"
      ],
    },
  }),

  title: 'TOE Document',
  description: 'TOE 文档主页',
})

