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
        {
          text: '选择器',
          prefix: 'selector',
          collapsed:true,
          items:[
            'search','modal','pca'
          ]
        },
        {
          text: '自定义组件',
          prefix: 'customer',
          collapsed:true,
          items:[
            'actions','confirm','tableinform','confirmform','modaltable','dropdown','other'
          ]
        },
        'editor',
        'uploader',
        'map',
        'dragSort',
        'other',
        'calendar',
        'dependencyOn',
        //'dselect',
        'relationMany',
        //'dropdownAction',
        'export',
        //'customerTable'
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
