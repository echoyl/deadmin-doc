import { defineNoteConfig } from 'vuepress-theme-plume'

export const guide = defineNoteConfig({
  dir: 'guide',
  link: '/guide/',
  sidebar: [
    {
      text: '从这里开始',
      collapsed: false,
      //icon: 'carbon:idea',
      prefix: 'quick-start',
      items: [
        'index',
        'intro',
        'setting',
        'crud',
      ],
    },
    {
      text: '组件',
      //icon: 'fluent-mdl2:edit-create',
      prefix: 'components',
      collapsed: false,
      items: [
        'searchSelect',
        'uploader',
        'map',
        'customerColumn',
        'confirmForm',
        'dependencyOn',
        'dselect',
        'relationMany',
        'dropdownAction',
        'export',
        'calendar',
        'modalSelect',
        'customerTable'
      ],
    },
    {
      text: '模型',
      //icon: 'fluent-mdl2:edit-create',
      prefix: 'model',
      collapsed: false,
      items: [
        'relation',
        'api',
        'globalSearch',
        'locale',
        'hasOne',
        'hasMany',
      ],
    },
  ],
})
