---
title: 表格显示
createTime: 2025/04/17 15:46:48
permalink: /guide/xbuk3cie/
---
## 用法
当详情页需要使用table展示商品等数据详情的时候

- 选择使用自定义组件 
- 后台传输数据字段需要包含列表数据
- 配置item.fieldProps?.value?.columns
- 或者事先创建好列表菜单然后直接选择该菜单
- dom排列方式选择none（不选none默认会放到space组件中导致宽度失效无100%）

### 配置后的json示例

```json
{
  "dataIndex": "goodss",
  "uid": "PpDxwxI0nU",
  "title": "商品详情",
  "valueType": "customerColumn",
  "fieldProps": {
    "items": [
      {
        "uid": "or1zrdwkz4h",
        "domtype": "table",
        "page": 10012
      }
    ],
    "direction": "none",
    "placeholder": "{{t('form.pleasetypein')}}商品详情"
  },
  "colProps": {
    "span": 24
  }
}
```