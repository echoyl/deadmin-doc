import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import path from 'node:path'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: plumeTheme({
    codeHighlighter: {
      theme:'github-dark'
      //themes: { light: 'github-dark', dark: 'github-dark' }, 
      //themes: { light: 'github-dark', dark: 'vitesse-dark' }, 
    }
  }),
  lang: 'zh-CN',
  title: 'DeAdmin',
  description: '基于antdesign laravel 的后台管理系统',
  source: path.resolve(__dirname, '../'),
  base:'/doc/'
})