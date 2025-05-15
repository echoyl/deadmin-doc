---
title: 操作栏
createTime: 2025/05/13 11:14:44
permalink: /guide/customer/actions/
---
## 在线预览
::: info 地址
操作栏主要用于表格中的按钮操作，可以自定义按钮，也可以使用内置的按钮

支持多种显示方式，自定义显示文字，icon，颜色等

[点击查看](https://echoyl.com/antadmin/components/customer/actions)
:::

## 支持显示类型
- 水平排列（默认）
- 垂直排列 ，每项为1行
- dropdown 设置展示数量后多余的点击后下拉展开

自定义元素，可以中间增加 ==分割线==

## dropdown设置

在 fieldProps 设置如下

```json
{
    "dropdown" : {
        "num" : 1,//显示项的数量
        "text" : "..."//dropdown触发的显示内容
    }
}
```