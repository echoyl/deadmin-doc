---
title: 省市区
createTime: 2025/04/29 15:41:54
permalink: /guide/selector/pca/
---
## 在线预览
::: info 地址
[点击查看](https://echoyl.com/antadmin/components/selector/pca)
:::


## 简介

省市区选择器，数据源为数据表`pca`,更新数据后记得清除下缓存，IndexedDb.localforage.keyvaluepairs.pca_ 前缀所有的数据

支持级数,指定上级

后端数据默认存储在 `['province','city','area']` 三个字段中 ,存储的值为表中的 `code` 字段

## 参数配置

### 默认用法

直接选择该组件即可，默认为 `3` 层级选择器

### 层级

level 为 1，2，3 默认为3 。 配置 1 为选省，2 为选到市，3 为选到区

```json
{
  "fieldProps":{
    "level": "1 | 2 | 3"
  }
}
```

### 上级

指定某个上级，多个以逗号分隔。例如 `330000,330100` 指定上级为浙江省杭州市，现在只能选到杭州市下的区县了

```json
{
  "fieldProps":{
    "topCode":"330000,330100"
  }
}
```

### 配合topCode和level使用

配合使用可以做到只选某个省下的城市,例如 `330000` 只选浙江省下的城市

```json
{
  "fieldProps": {
    "topCode": "330000",
    "level": 1
  },
}
```

### 多选

多选的话后端数据需要自行保存

```json
{
  "fieldProps":{
    "multiple": true
  }
}
```