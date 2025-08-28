---
title: 面板
createTime: 2025/08/28 10:15:14
permalink: /guide/page/panel/
---

## 在线预览
::: info 地址
[点击查看](https://echoyl.com/antadmin/dashboard/panel2)

封装一些常用的图表chart
:::

## 通用配置

```json
{
    "label": {
      "text": "{{ d.y + ' 份' }}",// 标签显示内容 如柱状图为柱状顶部显示内容
    },
    "colorField": "name",// 归类字段名称，如柱状图hover后显示的数据类型名称，未设置则直接显示y轴字段名称。后台数据需要返回name字段
}
```

## 类型

支持类型
- 柱状图
- 折线图
- 饼图
- 水平柱状图
- 地图点图

