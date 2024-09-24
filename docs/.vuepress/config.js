import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  bundler: viteBundler(),
  
  theme: hopeTheme({
    // 自定义你的主题配置
    //logo: '/images/logo.png',
    //sidebar: 'auto',
    navbar: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
    ],
  }),

  title: 'TOE Document',
  description: 'TOE 文档主页',
})

