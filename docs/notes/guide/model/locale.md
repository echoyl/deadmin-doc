---
title: 多语言
createTime: 2025/04/17 15:55:27
permalink: /guide/qbo0d10m/
---
## 简介

系统支持一键开启字段多语言设置

## 逻辑思路

以下为代码实现字段多语言的逻辑，没有用translate的包，因为mysql版本要求 >= 5.7。以创建每个语言一个字段的方式实现。

- 1.自定义系统多语言种类
- 2.勾选字段是否开启多语言支持
- 3.生成表时检测字段如果开启多语言后，生成系统开启的多语言多个字段
- 4.前端页面在form表单检测开启了多语言的字段加入编辑多语言内容的入口，弹层实现多语言内容的编辑
- 5.优化后台检索多语言内容能力
- 6.多语言service提供获取指定语言的数据信息

## 示例一键完成

每个语言字段的form表单类型和主字段是一样的
测试过了 input ， tinyeditor，textarea

开启字段多语言后勾选生成表后提交

![image](https://echoyl.com/storage/images/202409/AAA7dtBzlUPdgIQo5TFPAa1TpNScAYGwpkjaEqKR.png)

编辑入口位置

![image](https://echoyl.com/storage/images/202409/onWxivtqIARZg1Vn5koXZOlbdr8LM8GqQbAQpNQg.png)

编辑每个语言内容

![image](https://echoyl.com/storage/images/202409/vEBQN7pPZJAYdAk8PJAGXp435cf14YVBLg9OZIia.png)

搜索内容如果多个语言中包含检测内容也会搜索出来

![image](https://echoyl.com/storage/images/202409/KYCAdOSuttQ95pllmdLk6v7XYn4l0E5sttwE64dK.png)

## Service Api

### 获取指定语言的内容
```php
<?php

use Echoyl\Sa\Services\admin\LocaleService;

$data = $model->first();
$data = LocaleService::getData($class,$data,$locale);

```

### 搜索某个字段

```php
<?php

use Echoyl\Sa\Services\admin\LocaleService;
$origin_model  = new Model;
$query = (new Model)->where(["state"=>1]);
$query = LocaleService::search($query,['title', '=', $title],$origin_model);

$data = $query->get();

```