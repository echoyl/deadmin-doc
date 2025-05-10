---
title: 使用API
createTime: 2025/04/17 15:54:27
permalink: /guide/344haqkt/
---
::: info 需求：操作记录中有ip地址，现在需要在列表中增加获取归属地的功能，调用的方法不写在操作记录的控制器中
:::
## 创建API公用模型

- 模型页面中新建模型API,是一个空的模型，不需要配置字段信息
- 在生成的控制器文件中加入获取地址归属地的方法
- 示例代码如下

```php

<?php
namespace App\Http\Controllers\admin\echoyl;
use Echoyl\Sa\Http\Controllers\admin\CrudController;
use App\Models\echoyl\Api;
use Echoyl\Sa\Models\perm\Log;
use Echoyl\Sa\Services\HelperService;

//customer namespace start

//customer namespace end

/**
 * @property \App\Services\echoyl\AdminAppService $service
 */
class ApiController extends CrudController
{
	//customer property start
	
	//customer property end
    public function __construct()
	{
		parent::__construct();
		
		$this->model = new Api();
		$this->model_class = Api::class;
		//customer construct start
		
		//customer construct end
	}

	//customer code start
	public function ipaddress()
	{
		$ip = request('ip');

		$id = request('id');

		if(!$id || !$ip)
		{
			return $this->fail([1,'参数错误']);
		}

		$ak = env('bmap_key');

		$url = 'https://api.map.baidu.com/location/ip';

		[$code,$data] = HelperService::get($url,['ip'=>$ip,'coor'=>'bd09ll','ak'=>$ak]);

		if($code)
		{
			return $this->fail([$code,$data]);
		}

		if($data['status'])
		{
			return $this->fail([$data['status'],$data['message']]);
		}

		$update = ['ipaddr'=>$data['address']];

		$model = new Log();

		$model->where(['id'=>$id])->update($update);

		return $this->success();
	}
	//customer code end
	
}



```

## 新增菜单指向该控制器

- 创建菜单

![image](https://echoyl.com/storage/images/202409/3WsF469xcUbksdtECEyKpnxm9XcKRDi43FBs1SjH.png)

- 配置子权限 声明方法名

![image](https://echoyl.com/storage/images/202409/YxWibaTAQQmN35hJWM5vMdwFjhf45nMMuJqghAgU.png)

## 在目标页面中添加调用按钮

- 增加一列 类型选择 customerColumn
- 配置该列更多设置

![image](https://echoyl.com/storage/images/202409/gaEb0UIASonk9MLdPrDvFUQkLDfMSJ8FGwKgRkT5.png)

- 第一组件直接显示文字展示 dom 为 `{{record?.ipaddr}}`
- 第二个组件选择按钮，条件为 `{{!record?.ipaddr}}`没有归属地才展示按钮
- 配置按钮为confirm类型，增加request的url为刚创建的菜单路径
![image](https://echoyl.com/storage/images/202409/HOt9maLxbFUrezhdvrk41v4OeZlb3tMG0SFQGNSP.png)

## 完成效果图
![image](https://echoyl.com/storage/images/202409/oXy9EAdX7UTgWk7275y2V4jDXra8ntP7dWqOHUxl.png)