import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  // ...
  {
    text: '指南',
    link: '/notes/guide/quick-start/index.md',
    activeMatch: '^/guide/',
  },
  {
    text: '更新日志',
    link: '/changelog.md',
    activeMatch: '^/changelog/',
  },
])