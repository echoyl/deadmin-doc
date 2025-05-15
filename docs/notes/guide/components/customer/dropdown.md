---
title: DropdownAction
createTime: 2025/05/14 11:14:44
permalink: /guide/customer/dropdown/
---
## 在线预览
::: info 地址

属于操作Action类型，点击后dropdown展示操作按钮

[点击查看](https://echoyl.com/antadmin/components/customer/dropdown)
:::


## 支持类型

- badge 状态标识
- tag 标签
- string 文本显示

## 配置

默认使用字段名称 + 's' 作为数据源，例如字段名称为 `action`，则数据源为 `actions`，后台需要返回actions的数据

也可以在request配置中的数据源名称配置使用下拉菜单的数据，例如配置为 `actionxx`,那么后台返回的数据中需要在 `actionxxs` 中返回数据源

::: info 自动返回数据源

如果模型中的字段配置了`json可选数据`,该数据格式为[{id,title,color,icon,status}] ,数据接口会自动返回该字段 + 's' 字段作为数据源。
:::

```json
{
  "showType": "tag | string | badge"
}

```

## 请求

### 地址
如果是在table中且未设置request.url 那么会自动使用table的数据请求地址

如果在form中使用那么必须设定request.url，否则action默认不会发起请求

### 数据

点击操作后会提交 {modelName:data.id} 的数据,未设置modelName会使用当前的dataindex作为字段名称

### 示例
设置 modelName 为 `action`

数据源 `actions`
```json
[
  {
    "title": "编辑",
    "id": "edit",
    "icon": "EditOutlined",
    "color": "blue",
    "status": "success"
  },
  {
    "title": "审核",
    "id": "shenhe",
    "icon": "CheckSquareOutlined",
    "color": "green",
    "status": "processing"
  },
  {
    "title": "删除",
    "id": "delete",
    "icon": "DeleteOutlined",
    "color": "red",
    "status": "error"
  }
]
```

点击审核操作后提交数据为
```json
{
  "action": "shenhe",
  "id":"record.id"
}
```