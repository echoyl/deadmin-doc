---
title: 上传组件
createTime: 2025/04/17 15:42:44
permalink: /guide/uploader/
---
## 在线预览
::: info 地址
[点击查看](https://echoyl.com/antadmin/components/uploader)
:::
## 简介

- 1.支持文件 及 图片上传
- 2.后台设置系统配置中可设置上传相关参数包括文件后缀，文件大小，图片尺寸，文字水印或图片水印等设置
- 3.支持裁剪功能
- 4.支持上传图片先保存至tmp文件夹，提交数据后再移动到正式目录中，需要在系统config/sa.php文件夹中配置开启

## 参数设置
设置在fieldProps

```json
{
  max: 2,//上传图片数量，默认1
  size:2000,//上传图片最大尺寸数字表示长宽都不超过这个值,[1000,2000]数组表示[宽,高] ,默认1000
  type:"file"//上传文件类型 file:文件 image:'默认图片',
  buttonType:'card' | 'table' | 'text'//默认card展示,
  crop?:boolean;//是否开启图片裁剪
  cropProps?:Record<string,any>;//裁剪参数配置见下方
}
```

## 图片裁剪

在模型字段配置中开启裁剪选项后会自动开启图片裁剪功能，只支持图片，单图上传

默认裁剪比例为1:1

可以访问 [antd-img-crop](https://github.com/nanxiaobei/antd-img-crop)查看支持的选项配置

常用配置
```json
{
    quality?: number;//质量
    fillColor?: string;
    zoomSlider?: boolean;//开启缩放
    rotationSlider?: boolean;//开启旋转
    aspectSlider?: boolean;//开启裁剪框
    aspect?: number;//默认宽高比例
    minAspect?: number;//最小宽高比例
    maxAspect?: number;//最大宽高比例
}
```