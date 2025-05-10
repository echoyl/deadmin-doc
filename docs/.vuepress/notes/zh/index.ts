import { defineNotesConfig } from 'vuepress-theme-plume'
// import { plugins } from './plugins'
import { guide } from './guide'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    guide
  ],
})
