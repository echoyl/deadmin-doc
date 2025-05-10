---
title: 1对多编辑
createTime: 2025/04/17 15:56:04
permalink: /guide/h7s6gdgz/
---
## 简介

::: info 当模型关系中有1对多时。一般有两种方法实现，

1.在表单中直接使用表格组件每次都是独立创建或编辑，缺点是当新增数据时因为没有主数据id所以不能使用，只有编辑主数据时可以使用

2.在表单中直接使用formlist组件直接编辑信息。缺点是在数据量不大的情况下使用。
:::
这里我们使用第二种方法 无代码实现

## 实现步骤

### 创建关联模型

![image](https://echoyl.com/storage/images/202409/YWhSywfG4KXyTBIjybS0s5kA1qzfhnpay75Sl3pG.png)

### 创建1对多关联

![image](https://echoyl.com/storage/images/202409/TaHu8RcPHtLlZinL9mYoyiSWz57f6emKkQELRhAE.png)

### 创建一个菜单

![image](https://echoyl.com/storage/images/202409/TC5TgVYTATRorhn5OhKUiSPjKqjl4owaUWgM0oVb.png)

### 配置该菜单

![image](https://echoyl.com/storage/images/202409/GLVoKNbxlmbX1zfP01NavX3NG3Ipl3ZEPNFieDAB.png)

### 编辑主模型的表单

![image](https://echoyl.com/storage/images/202409/Gmfm1irGO0uOWPSrtFCCBivgwdN5oIBeK8jie7rS.png)

![image](https://echoyl.com/storage/images/202409/lmN4ebfRNqhklBvpVwTuI88J8Xcdv6nHNFVWkX2p.png)

## 效果

![image](https://echoyl.com/storage/images/202409/1dodcg8ODhsZguFmURdMVeEOKGdjO01x1RXjf1ZA.png)