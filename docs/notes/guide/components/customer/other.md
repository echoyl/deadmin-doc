---
title: 其它项
createTime: 2025/05/14 11:14:44
permalink: /guide/customer/other/
---
## 在线预览
::: info 地址

包含一些可能不是特别常用的组件

[点击查看](https://echoyl.com/antadmin/components/customer/other)
:::


## 弹出信息

- 二维码
- 文本
- string 文本显示

### 二维码

设定二维码内容后，可以自动生成二维码图片，通过popover弹出展示

### 文本

通过popover弹出展示文本内容

## 二维码
选择元素类型为`qrcode`后，配置dom的文本内容即可自动生成二维码图片（支持tpl模板写法直接读取当前record内容，动态显示信息）

## 打印

通过设定url请求后台发送html后，前端展示html内容，然后点击打印按钮唤起打印功能

请求url在request配置中设定

支持打印后回调请求，在列表中回调后会触发刷新列表数据，这样通过回调设定数据的打印状态后，列表也能及时更新数据的打印状态

```json
{
  "callbackUrl":"打印后回调地址"
}
```

## 请求按钮

设定request.url后直接发起请求，请求后可以设定反馈方式，系统自动message或notification信息或者设置为静默方式无任何反馈

支持loading的icon变化效果，即当请求期间icon会变成loading状态，请求结束后会自动恢复

默认的 get请求成功不会提示信息 post 或 delete 请求成功会提示信息

## 链接
::: info 说明
在fieldProps中分别配置 to 和 href 来实现链接跳转

站内链接直接配置路由地址不要添加antadmin前缀

外链的话直接配置网址即可
:::


### 站内链接

```json
{
  "to":"example"
}
```

### 站外链接

```json
{
  "href":"https://www.echoyl.com/doc"
}
```

## 时间轴

元素类型选择 `时间线`，数据由后台返回，前端自定义配置。同[ant design timeline的配置](https://ant-design.antgroup.com/components/timeline-cn) 只有dot换成了icon

下面是返回数据示例
```json
[
  {
    "icon": "ClockCircleOutlined",
    "children": "正式版任务进行中",
    "color": "red",
    "label": "2025-05-16"
  },
  {
    "children": "beta版本发布",
    "color": "blue",
    "label": "2025-05-15"
  },
  {
    "children": "项目立项",
    "color": "green",
    "label": "2025-05-14"
  }
]
```

配置示例
```json
{
  "mode":"left | right | alternate",//时间轴和内容的相对位置
}
```

## Tag展示信息

后端可返回 string [string] 或者 {title,color,icon} 对象或数组 

只返回string类型的话会通过前端设定显示一样的tag标签

返回对象的话根据对象的属性显示tag标签。如果每个数据的样式不一样的话就需要后台计算后返回对象数据

返回示例
 ```json
[
  {
    "color": "red",
    "title": "警告"
  },
  {
    "color": "blue",
    "title": "正确",
    "icon": "ClockCircleOutlined"
  }
]
 ```

 ## Badge展示信息

数据由后端返回 最好是在模型字段就配置json可选数据，会根据值自动读取响应的状态数据

返回示例
```json
{
  "status":"processing",
  "title":"警告"
}
```

## 时间距离

通过时间明文计算出距离现在的时间距离，如：1天前、1小时前、刚刚等
