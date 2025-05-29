---
title: 拖拽排序Table
createTime: 2025/05/29 15:15:14
permalink: /guide/dragSort/
---

## 在线预览
::: info 地址
[点击查看](https://echoyl.com/antadmin/example/card/category)

因为没有修改权限,所以修改失败后会自动回滚
:::
## 介绍

::: info 说明

只支持一级拖拽排序,如果数据存在树形关系,如果开启排序的话只能排序最外一层

使用场景应该是分类列表中或者数据量不大的时候

后端数据的逻辑是没新增一条数据先读取最大的排序值 + 1赋值给新数据,拖拽排序操作为,active和over数据,将over的排序值赋值给active,然后将两者之间的数据排序值根据是否大于active的排序值 +1 或者 -1

:::

## 使用

- 模型中必须包含 `displayorder`字段,通过后台创建的模型默认包含该字段
- 在对应的模型设置中勾选 `开启拖拽排序`
- 在Table中增加拖拽列,选择类型为 `排序 - dragsort`