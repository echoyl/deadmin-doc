---
title: 字段dependencyOn
createTime: 2025/04/17 15:41:20
permalink: /guide/aialbt3a/
---
## 简介

当某个组件字段需要切换显示的时候，`dependencyOn` 设置可以快速完成这个功能

## 支持类型
- 1.切换显示 根据某个字段的值判断是否显示此组件
- 2.渲染显示 根据某个字段的值的变动改变当前组件的显示内容

切换显示支持多个条件判断，支持 全部满足或单个满足判断
切换显示支持值 或者 表达式 判断值是否满足条件，值支持逗号拼接形式表示数组模式

## 示例

需求：以审核商品，如果审核失败则备注信息必填，其它状态备注信息为非必填

审核字段的字典信息为
```json
{
    "1":"待审",//可设置颜色值，选择标签的时候自动显示该色值
    "2":"已审",
    "3":"失败"
}
```

- 审核表单中插入两个 备注字段的组件
- 第一个组件基础信息中勾选必填， `dependencyOn`中设置 字段选择 `shenhe_id`  值输入 3
- 第二个组件基础信息不用勾选必填了， `dependencyOn`中设置 字段选择 `shenhe_id`  值输入 1,2

完成查看效果展示

## 效果示例

![image](https://echoyl.com/storage/images/202401/teBpjJZ8yRuiWOGbP5NnsSXbdon0Uqp6XzPUj7P5.gif)

## 渲染及切换显示内容

::: info 当前显示依赖于其它字段值时使用
:::
- 组件选择自定义显示
- 添加dependencyOn配置，选择切换显示，添加依赖的字段
- 添加自定义dom，设置需要显示的内容。可以添加多个dom

可在后台 - 微信 - 公众号 - 消息事件 菜单中选择相应的模板消息id后，下方切换显示模板消息的内容及例子

在开发模式下所有条件显示都为真，所以需要关闭开发模式后才可以看到真实条件切换显示