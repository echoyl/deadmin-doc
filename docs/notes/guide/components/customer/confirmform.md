---
title: 弹出form
createTime: 2025/05/14 11:14:44
permalink: /guide/customer/confirmform/
---
## 在线预览
::: info 地址
1.默认弹出当前列表配置的form：编辑或查看

2.选择已有的菜单配置作为form的配置


[点击查看](https://echoyl.com/antadmin/components/customer/confirmform)
:::

## 默认

- 编辑 有提交操作按钮
- 查看 没有提交操作按钮

## 自定义

选择已有的菜单作为弹出form的配置

默认读取当前record的id字段数据添加至form的请求参数中
```json
{
    "id":1
}
```

可以自定义idName字段名,读取当前record[idName]当作请求中的id参数，示例如果设置news_id
```json
{
    "id":"record.news_id"
}
```


请求参数分为post 和 get两个部分，可以自定义添加