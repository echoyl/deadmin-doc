---
title: 操作表单
createTime: 2025/04/17 15:40:48
permalink: /guide/ijsmutq4/
---
## 简介
可复用已创建的表单

## 操作流程

这里以商品添加一个审核流程为示例

- 1.商品模型添加字段 `shenhe_id` 选择select类型 ，`shenhe_msg` 选择textarea类型 后生成表
- 2.创建审核状态的模型 包含字段 `id` `title` 后生成表
- 3.商品模型创建关联 字段 `shenhe_id` 对应到 审核状态模型，类型为hasOne
- 4.创建`商品审核表单`菜单 命名为`shenhe`，页面类型选择表单，对应到商品模型，隐藏该菜单后不会在主菜单中展示
- 5.编辑 商品审核表单 该菜单的form输入项 添加两个字段 `shenhe_id` `shenhe_msg`
- 6.在商品列表中插入自定义组件后 增加按钮 Action类型选择 confirmForm ,modal配置中表单选择刚创建的 商品审核表单
- 7.后台`GoodsController`中创建 shenhe 函数处理审核逻辑

后台php代码示例

```php
public function shenhe()
{
	if(request()->isMethod('post'))
	{
		//处理参数
		$base = [
			'id'=>request('base.id'),
			'shenhe_id'=>request('base.shenhe_id'),
			'shenhe_msg'=>request('base.shenhe_msg')
		];
		request()->offsetSet('base',$base);
	}
	return $this->post();
}
```

## 效果图

![image](https://echoyl.com/storage/images/202401/Fs6M9t67VgqpfQCpq87DbKZUo5RCfpirBkiCIVjm.png)