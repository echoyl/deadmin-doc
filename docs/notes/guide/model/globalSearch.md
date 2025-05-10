---
title: 全局数据检索
createTime: 2025/04/17 15:55:01
permalink: /guide/0gx1i0wk/
---
::: info 模型支持是否开启全局数据检索及提交数据前置检测功能
我们这里以 用户创建数据后只有该用户和超级管理员才能看到数据作为示例
:::

## 开启模型设置

- 编辑需要开启的模型
- 在设置中勾选 `自动插入系统用户ID` `使用全局过滤数据`
- 保存后勾选 `生成表` 选项提交
- ![image](https://echoyl.com/storage/images/202409/ytLcFwcRZimgXDJ2016vxe8DfLW1mdLrjtvthEWh.png)

```
勾选 自动插入系统用户ID 后生成表会在该模型数据表中增加 sys_admin_id 字段
```

## 创建自定义adminAppService

- 在 app/Services 目录下创建 项目名称/AdminAppService.php 文件
- 以我的示例我的项目名称为 deadmininstall，所以我创建的是 app/Services/deadmininstall/AdminAppService.php 文件
文件内容 该service继承包中的 service

```php
<?php

namespace App\Services\deadmininstall;
use Echoyl\Sa\Services\AdminAppService as ServicesAdminAppService;
use Echoyl\Sa\Services\AdminService;
use Illuminate\Support\Arr;

class AdminAppService extends ServicesAdminAppService
{
    
    /**
     * 开启全局数据过滤检索
     *
     * @param [type] $m 当前模型
     * @param [type] $model 当前原始模型 可以获取table name写复杂的搜索逻辑
     * @return void
     */
    public function dataSearch($m,$model)
    {
        //这是一个包里自带的示例
        //\Echoyl\Sa\Services\admin\PlatformService::search($m,$model);

        
        $is_super = AdminService::isSuper();//是否是超级管理员
        
        if($is_super)
        {
            //超级管理员无需过滤数据
            return $m;
        }

        $admin = AdminService::user();//当前后台用户

        $m = $m->where(['sys_admin_id'=>$admin['id']]);

        return $m;
    }

    /**
     * 开启全局数据提交检测
     *
     * @param [type] $data
     * @return void
     */
    public function postCheck(&$data,$item,$model)
    {
        $is_super = AdminService::isSuper();//是否是超级管理员
        
        if($is_super)
        {
            //超级管理员无需过滤数据
            return true;
        }

        $admin = AdminService::user();//当前后台用户

        $sys_admin_id = Arr::get($item,'sys_admin_id');

        if($sys_admin_id != $admin['id'])
        {
            //数据用户id不一致返回错误
            return false;
        }

        return true;
    }

}

```

## 配置后台Service指向自定义service

在config/sa.php 配置中 `'adminAppService'=>AdminAppService::class,//后台通用service`
实际配置如下
```php
<?php

use App\Services\deadmininstall\AdminAppService;
use Echoyl\Sa\Models\perm\User;
use Echoyl\Sa\Models\User as ModelsUser;
use Echoyl\Sa\Services\AppApiService;

return [
    'service'=>AppApiService::class,
    'imageSize'=>[
        's'=>[
            'w' => 150,
            'h' => 150,
        ],
        'm'=>[
            'w' => 300,
            'h' => 300,
        ]
    ],
    'userModel'=>User::class,//后台用户使用数据模型
    'frontUserModel'=>ModelsUser::class,
    'adminAppService'=>AdminAppService::class,//后台通用service
    'admin_upload_max_wh'=>1000,//后台上传图片最大的宽高，超过该值后会压缩至该宽高
    'user_upload_max_wh'=>1200,//前台上传图片最大的宽高，超过该值后会压缩至该宽高
    'upload_tmp_enable'=>true,//上传是否开启tmp，开启后上传数据都会存在tmp中保存数据后才会移动文件（tmp文件过期后删除）
];

```

## 完成效果
```
现在单个非超级管理员创建的新闻模型数据只有自己及超级管理员可以看见了
```