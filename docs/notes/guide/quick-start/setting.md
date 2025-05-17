---
title: 配置
createTime: 2025/04/17 11:25:58
permalink: /guide/setting/
---
## 基础配置

 - 1.后台名称
 - 2.底部版权信息
 - 3.后台水印设置  水印文字 或 username后台账户名称
 - 4.logo设置
 - 5.开启开发模式，开启后可以自定义编辑页面显示

## 地图设置

配置后可以使用后台地图组件，包括地图选择经纬度，地图展示信息等。使用于门店，地址等需要经纬度的地方，是一个必不可少的需求

支持百度地图，高德地图，腾讯地图，天地图四种地图api

## 主题配置

常用配置 也就是示例网站上的配置
```json
{
  "splitMenus": true,// 是否开启菜单分割 开启后最外层菜单显示于顶部
  "layout": "mix",//布局类型 mix混合布局顶部+左右布局，side为左侧菜单布局
  "fixedHeader": true
}
```



 - 1.是否启动自动暗色配置，可设置时间段
 - 2.主题色配置
 - 3.antdpro配置
- 4.Antd主题配置 详见antd官网
- 5.支持远程iconfont图标在iconselect的使用

antd自带的主题配置后拷贝后复制到 ==antdpro配置==中

::: info
备注：拷贝配置 需要网站的剪切板权限，如果在本地的话chrome浏览器没有https的话是没有权限的,域名是==localhost==没问题

需要打开 chrome://flags/#unsafely-treat-insecure-origin-as-secure 将当前的域名设置到Insecure origins treated as secure并启用后重启chrome后生效。
:::

## 登录设置
 - 1.登录页背景图片
 - 2.登录框背景色 如果设置了背景图就需要设置一个背景色不然就是透明的
 - 3.登录方式选择 默认只支持账号密码登录，手机登录的话需要配置短信验证码参数
 - 4.是否开启微信扫码登录，需要公众号网页授权 + 后台启用websocket配置
 - 5.登录失败最大次数后显示图像验证码 默认3次后显示
 - 6.支持开启登录后是否自动跳转url中记住的redirect页面
 - 7.支持配置登录后默认跳转的页面，默认是第一个大菜单的第一个子菜单

## Socket配置
需要使用后台发送即时通知的时候配置
- 1.是否开启websocket
- 2.配置ws地址 ping数据等

```bash
#备注：启用后后台可以使用service提供的方法发送动作到前端，包括 各种提示显示，打开页面等动作

#服务器运行命令

nohup php artisan gateway-worker:server start --d > output.log 2>&1 &

#如果还是启动不了 请检查下 output.log中的记录，可能是因为你的php禁用了某个函数
```

## IconFont
想要自己使用iconfont图标的话可以配置，在iconselect组件中就可以切换到IconFont tab选项后选择

- 1.配置url，支持多个url
- 2.将iconfont网站项目中查看json配置中数据复制到 ==JSON配置== 中

## 悬浮按钮

自定义悬浮按钮，可以配置多个按钮，包括按钮图标，按钮名称

按钮事件包括跳转外链，打开站内页面，弹出图片，弹出二级菜单等
