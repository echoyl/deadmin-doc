---
title: 一对多列表
createTime: 2025/04/17 15:42:19
permalink: /guide/relationMany/
---
## 简介

场景：一篇文章需要展示多个评价的时候使用

这个功能我们使用 `自定义组件` + `modalTable` 实现

### 使用步骤
- 1.先创建评论的模型 `news_id` 和文章模型的`id`管理，创建搜索条件中加入 news_id的检索，modalTable读取数据时会传入 关联字段
- 2.在文章模型下创建关联 `1对多` 关联至刚才创建的评论模型
- 3.创建评论的菜单 配置下列表和表单显示
- 4.文章列表页面中插入 `自定义组件` ，字段选择自定义字段，如果选关联的字段的话，当没有数据的时候是不会渲染的，Dom设置添加button，action类型选择modalTable，选择好关联模型和菜单
- 5.按钮的显示数据可以加入评论的条数展示 例如设置 `{{ '评价管理' + (record.comments_count  > 0?'('+record.comments_count+')':'') }}`

### 效果展示
![image](https://echoyl.com/storage/images/202403/CmLovurPATGy5Yy54m6e9jsPGRQD2NZbWI4dFHYC.gif)