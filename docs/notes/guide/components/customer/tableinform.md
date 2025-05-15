---
title: 表单中table
createTime: 2025/05/14 11:14:44
permalink: /guide/customer/tableinform/
---
## 在线预览
::: info 地址
1.直接选择saFormTable组件，表现和普通菜单table一样

2.选择自定义组件中的table，表现为antd table。展示简单的列表数据时使用


[点击查看](https://echoyl.com/antadmin/components/customer/tableinform)
:::

## saFormTable

一般用于1对多数据时使用，例如：订单详情中的商品列表。选择的字段需要已经设置了关联，默认会读取第一个关联菜单的菜单配置来展示table。如果手动选择已有菜单，即为自定义指定菜单配置（当关联模型创建了多个菜单后需要手动指定）。

关联后table在request数据时会将关联字段的值添加到请求参数
```json
{
    "foreign_key":"record.local_key"
}
```

示例 关联字段为 local_key:'id' foreign_key:'order_id'
那么请求会增加参数
```json
{
    "order_id":"record.id"
}
```
这样后台获取order_id来筛选数据展示

## 自定义组件中的table

可以选择已有的列表菜单作为table的列配置（主要是方便可是话查看列表列的效果，不需要手动添加columns的配置）

主要table配置有关闭分页，设置row的id,其它配置查看antdesign table的配置
```json
{
    "pagination": false,
    "rowKey": "fake_id",
}
```

为了能够使table中的数据动态更新的效果，可以使用自定义 `运算表达式` 的配置返回table的data数据，该表达式使用双括号首位1个空格包裹