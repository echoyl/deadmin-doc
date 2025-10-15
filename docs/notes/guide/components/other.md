---
title: form其它项
createTime: 2025/04/29 15:41:54
permalink: /guide/other/
---
## 在线预览
::: info 说明

其它一些使用较少的组件和 自定义组件中的其它项一样，自定义组件中的是显示类型的，这里是form表单类型的

[点击查看](https://echoyl.com/antadmin/components/other)

:::


## AutoComplete

AutoComplete 自动完成，与select选择器类似

## Icon选择器

Icon选择器，选择图标。多用于菜单的图标选择


## 颜色选择器

颜色选择器，选择颜色。返回16进制颜色值

## 滑动条
滑动条，用于选择数值区间

## 显示html

后端数据返回html后在页面中展示。自定义强一点，可以自定义展示样式

## FormList

分两种使用情况 
- 1.直接使用，整体配置columns
- 2.引用已有的菜单，在菜单中直接配置好列字段，然后选中该菜单（更多参看1对多编辑）

::: info
开启箭头排序后如果宽度变形需要如下配置,96px是4个icon的宽度，刚好可以占一行，也可以自行调节这个宽度值
:::
`fieldProps`
```json
{
  "arrowSort": true,
  "containerStyle": {
    "width": "calc(100% - 96px)"
  }
}
```
整体配置中配置columns

```json
{
  "columns": [
    {
      "valueType": "group",
      "columns": [
        {
          "title": "名称",
          "dataIndex": "name",
          "colProps": {
            "span": 12
          }
        },
        {
          "title": "链接地址",
          "dataIndex": "link",
          "colProps": {
            "span": 12
          }
        }
      ]
    }
  ],
  "rowProps": {
    "gutter": 0
  }
}
```
