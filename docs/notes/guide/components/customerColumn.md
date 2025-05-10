---
title: 自定义组件
createTime: 2025/04/17 11:14:44
permalink: /guide/hbigl70z/
---
## 简介
实现自定义展示的核心组件，支持条件显示，自定义显示，写入js表达式，默认 record为当前数据 user 当前登录用户信息

## 显示类型

- 按钮
- 文字显示
- 分割线
- 时间线
- actions（再次嵌套自定义组件）
- qrcode 二维码
- tag 标签
- table 

## 动作

- confirm 弹出确定对话框
- confirmForm 弹出层form表单
- modalTable 弹出层table列表 modal展示
- drawerTable 弹出层table列表 drawer展示
- dropdown 下拉菜单
- popover 气泡卡片
- 打印功能 
- 查看 列表中查看 不适用默认table的操作栏可以使用这个
- 编辑 列表中编辑
- 删除 列表中删除

## 配置

- 弹出配置 title msg提示语
- form table 选择已有的菜单或关联的数据源作为展示
- 按钮配置显示，大小，icon等
- 其它

## 显示类型

::: info 在设置中 dom排列方式 选择
:::
- 水平排列（默认）
- 垂直排列 ，每项为1行
- dropdown 设置展示数量后多余的点击后下拉展开

dropdown 在 fieldProps 设置如下

```json
{
    "dropdown" : {
        "num" : 1,//显示项的数量
        "text" : "..."//dropdown触发的显示内容
    }
}
```