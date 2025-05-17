---
title: 下拉搜索
createTime: 2025/04/29 15:41:54
permalink: /guide/selector/search/
---
## 在线预览
::: info 地址
[点击查看](https://echoyl.com/antadmin/components/selector/search)
:::


## 简介

异步搜索数据 select 组件，当选择器中的数据量过大时，搜索select组件可能是一个好的解决方案
`以下配置都是在 右键 -> 编辑 -> 更多 -> fieldProps 中配置`

## 默认用法

::: info 原理说明
模型字段关联另一个模型，关联字段form类型选择搜索select类型，配置关联模型中的lable 与 value 字段名称，然后系统会自动生成searchSelect组件需要的配置。
关联模型检索的关键字为keyword，所以在关联模型中记得配置keyword的搜索配置
:::

默认生成的配置为
```json
{
  "fetchOptions": "example/user/user",//请求地址，通过关联关系自动生成
  "fieldNames": {
    "value": "id",
    "label": "username"
  }
}
```

## 设置label模板

::: info 说明
当选择器中展示的信息需要定制显示时，可以使用labe设置为模板格式。例如 `{{[record.username,record.mobile].join(' + ')}}`
在模型字段配置中就可以这样设置label，设置后会自动生成到配置中的label
:::
示例配置
更多展示字段，默认只会读取value与label字段，所以要展示别的字段先将字段配置到extColumns中，然后在label中设置模板
```json
{
  "fetchOptions": "example/user/user",
  "fieldNames": {
    "value": "id",
    "label": "{{[record.username,record.mobile].join(' + ')}}"
  },
  "extColumns": [
    "mobile"
  ]
}
```

## 设置请求参数
::: info 说明
当需要传递其他参数时，可以在配置中添加params字段，`params`字段为对象类型，例如{level_id:2}，设置为会员等级id为2的过滤数据
:::
示例配置
参数也支持模板格式配置 例如 `{"level_id": "{{record?.level_id}}"}` 读取当前记录的level_id字段作为参数传递，需要设置依赖level_id字段来获取数据
```json
{
  "fetchOptions": "example/user/user",
  "fieldNames": {
    "value": "id",
    "label": "{{[record.username,record.mobile].join(' + ')}}"
  },
  "params": {
    "level_id": 2
  },
  "extColumns": [
    "mobile"
  ]
}
```

## 联动用法

::: info 说明
当需要联动其他字段时，可以在dependencyOn配置中设置渲染显示类型中增加该字段名称，并且`params`配置中使用模板格式，例如`{"level_id": "{{record?.level_id}}"}`，这样就可以实现联动效果
:::
示例配置
```json
{
  "fetchOptions": "example/user/user",
  "fieldNames": {
    "value": "id",
    "label": "{{[record.level?.title,record.username].join(' : ')}}"
  },
  "params": {
    "level_id": "{{record?.level_id}}"
  },
  "extColumns": [
    "mobile",
    "level"
  ]
}
```

## 数据传输到后端
::: info 说明

组件开启了`labelInValue`，所以传输的数据都是对象格式，如果使用了字段关联，后台默认会读取value字段保存。如果没有关联模型，默认是直接保存json格式的数据

例如在配置中需要选择某个数据，提交后数据会以json格式保存
:::
