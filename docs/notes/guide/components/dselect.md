---
title: 联动
createTime: 2025/04/17 15:41:54
permalink: /guide/dselect/
---

## 简介

场景：当一个或多个表单项的值改变时，当前的组件展示可选数据改变

这个功能我们使用 `异步下拉选择器` + `dependencyOn` 实现

### 使用条件
- 1.组件类型选择 `异步下拉选择器`
- 2.依赖于哪些项在dependencyOn中选择该字段
- 3.配置下拉组件的 `params` 该参数使用 `{{record.fieldName}}` 可以获取到当前表单的某个值

### 组件配置示例

```json
{
  "fetchOptions": "web/menu/category",
  "params": {
    "admin_model_id": "{{record.admin_model_id}}",
    "pagetype": "{{record.pagetype}}"
  },
  "fieldNames": {
    "value": "id",
    "label": "title",
    "children": "children"
  },
  "type": "cascader",
  "changeOnSelect": true,
  "extColumns": [
    "content",
    "example"
  ]
}
```

注释 - dependencyOn 再勾选上admin_model_id 和 pagetype后每次这两个字段的值变动后组件都会重新读取数据重置组件的值

```json
{
  "fetchOptions": "组件的请求地址",
  "params": {
    "admin_model_id": "请求参数依赖于admin_model_id",
    "pagetype": "不适用{{}}包裹后为固定值"
  },
  "fieldNames": {
    "value": "id",
    "label": "title",
    "children": "children"
  },//当前组件select 或 cascader 字段自定义值
  "type": "select | cascader",//默认使用select
  "extColumns":"更多加入到options中数据的字段名称"
   //...其它参数
}
```

### Label自定义模板显示

::: info 现在在模型的字段配置中可以自定义输入label模板，字段的配置form类型选择搜索select，和之前的 `异步下拉选择器 ` 已经独立分开，如果要使用cascader类型的话就选择之前的选择器。如果是纯select 就选择当前的搜索select
:::
例如：关联的用户信息显示为 用户名和手机号 使用 ` - ` 拼接数据

设置label为 `{{record.username + ' - ' + record.mobile}}`

record为当前关联数据信息

::: info 列表只读模式下选择当前字段 也支持该模板写法的渲染显示
:::