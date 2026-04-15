---
title: 快速开始
createTime: 2025/04/17 10:16:16
permalink: /guide/quickstart/
---

## 安装

::: info 3 种方式安装

- 1.安装 [laravel](https://laravel.com/docs/12.x) 项目后 composer require echoyl/sa
- 2.克隆 [deadmin](https://github.com/echoyl/deadmin.git) 项目后 composer update 安装
- 3.docke安装

:::
::: code-tabs
@tab bash

```bash
$ laravel new example-app

$ cd example-app

#修改配置文件中 ./.env

#APP_NAME=你的项目名称如：echoyl 必须英文，生成表名使用该名称作为前缀
#DB_DATABASE=你的数据库名称如：echoyl 并创建该数据库配置数据库账号及密码
#修改文件系统类型
#FILESYSTEM_DISK=public

#修改数据库配置文件 表前缀 ./config/database.php
# 'connections.mysql.prefix'=>'la_'

$ composer require echoyl/sa

#迁移前端静态文件 及 配置文件
$ php artisan deadmin:publish --force

#如果使用的laravel版本 >= 11，还需要额外运行下列命令
$ php artisan vendor:publish --tag=sanctum-migrations

#生成基础的数据文件
$ php artisan migrate

#生成文件文件夹超链
$ php artisan storage:link
```

@tab docker

```bash
$ git clone https://github.com/echoyl/deadmin-docker.git .
# build 拉去镜像
$ docker compose up -d
# run create deadmin 创建项目
$ docker compose run --rm app

### 访问 http://localhost:8080/antadmin 或者反向代理到本地8080端口

```

@tab github

```bash
#github
$ git clone https://github.com/echoyl/deadmin.git
#或码云
$ git clone https://gitee.com/deadmin/deadmin.git

$ cd deadmin
#复制配置文件

$ cp .env.backup .env
#修改配置文件中
#APP_NAME=你的项目名称如：echoyl 必须英文，生成表名使用该名称作为前缀
#DB_DATABASE=你的数据库名称如：echoyl 并创建该数据库
#数据库账号及密码

#设置composer源 aliyun的不知道为什么更新速度很慢
$ composer config repo.packagist composer https://mirrors.cloud.tencent.com/composer/

#安装拓展包
$ composer update

#线上安装拓展包
$ composer update --no-dev

#迁移前端静态文件 及 配置文件
$ php artisan deadmin:publish

#如果使用的laravel版本 >= 11，还需要额外运行下列命令
$ php artisan vendor:publish --tag=sanctum-migrations

#生成基础的数据文件
$ php artisan migrate

#生成文件文件夹超链
$ php artisan storage:link

```

:::

## 更新

```bash
#更新拓展包
$ composer update echoyl/sa
#发布前端静态文件(强制移除旧文件)
$ php artisan deadmin:publish --update

```

因为 composer 镜像同步速度比较慢 可以手动拉取 [包源码 github 地址](https://github.com/echoyl/sa) 后覆盖 echoyl/sa 文件夹后执行上面的
php artisan deadmin:publish --update 命令覆盖 dist 文件

## 服务器配置

需要在 `nginx` 服务器或 web 服务器中配置 rewrite

```nginx
# laravel配置
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
# 默认图片转发 根据配置图片size大小返回图片 可不配置
location /img {
    try_files $uri $uri/ /index.php?$query_string;
}
#后台前端配置
location /antadmin/ {
    # 用于配合 browserHistory使用
    try_files $uri $uri/index.html /antadmin/index.html;
}
```

## 前端

安装完毕后 直接访问 `http://域名/antadmin`

默认账号密码 admin 123456

## 修改前端

拉取 [deadmindev](https://github.com/echoyl/deadmindev.git) 这个前端仓库后

```bash
tyarn
npm run start
```
