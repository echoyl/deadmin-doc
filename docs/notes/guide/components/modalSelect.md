---
title:  弹层选择器
createTime: 2025/04/17 15:46:26
permalink: /guide/j78ddkh9/
---
### 参数说明
支持显示头像 标题 和描述 数据中不存在该字段则不显示
 ```json
{
  "fieldNames": {
    "title": "标题字段",
    "description": "描述字段",
    "avatar": "头像字段"
  },
  "page": {
    "columns": [//弹层需要展示的列字段集合，如果设置按照设置的显示，未设置则使用关联页面的列表列显示
    ],
    "path":"关联的页面路径，如果设置了模型关联会自动生成，或在编辑项中选择关联页面指定的菜单"
  },
  "multiple":false,//是否开启多选
  "max":9,//最大选择数量
}
```
默认字段名
```js
  const defaultFieldNames = {
    avatar: ['titlepic', 0, 'url'],//读取avatar字段后如果数据是数组会使用第一个值的url字段，如果是字符串则直接使用字符串
    description: 'desc',
    title: 'title',
  };
```
### 使用示例配置

```json
{
  "fieldNames": {
    "title": "username",
    "description": "desc",
    "avatar": "avatar"
  },
  "page": {
    "columns": [
      "username",
      "avatar",
      "desc",
      "keyword"
    ]
  }
}
```