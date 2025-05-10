import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import { zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/favicon.ico',
  profile: {
    name: 'echoyl',
  },
  navbar,
  locales: {
    '/': {
      notes: zhNotes,
      navbar: navbar,
    },
  },
  
  social: [
    { icon: 'github', link: 'https://github.com/echoyl/deadmin' }
  ],
  navbarSocialInclude: ['github'],
  footer: {
    copyright: 'Copyright echoyl <a href="https://beian.miit.gov.cn/" target="_blank" style="color: inherit; font-weight: normal; text-decoration: none;">赣ICP备2023012985号-1</a>',
  },
  // ... more
})