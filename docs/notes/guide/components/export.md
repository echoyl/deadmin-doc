---
title: 导出设置
createTime: 2025/04/17 15:43:37
permalink: /guide/grj2jc4t/
---
## 简介

::: info 不设置导出模板，导出功能将直接使用当前table的列作为导出模板
:::
- 1.在模型编辑中设置 导出模板。支持多个模板，如果有多个导出按钮需要在fieldProps中设置
```
{
  "post": {
    "export_index": "模板的标识"
  }
}
```

- 2.使用[xlswriter](https://xlswriter-docs.viest.me) 作为导出库，支持顶部头部合计等设置。可以快速完成一个导出功能
- 3.需要安装php的 xlswriter的拓展
- 4.备注 之前用Maatwebsite\Excel效率太低了，所有切换成这个导出