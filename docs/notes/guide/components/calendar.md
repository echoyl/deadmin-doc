---
title: 日历
createTime: 2025/04/17 15:45:08
permalink: /guide/li9znrxu/
---
## 介绍

::: info 适用于需要以日历形式展示数据的时候。比如门票时间段剩余票数，每日活动数据等。
:::
### 实现逻辑

- 创建日历数据的模型
- 创建日历表单菜单，类型选择为page，当点击日历的时候会展示该表单
- 创建日历组件，配置path为之前添加的日历表单菜单
- 日历组件会根据当前的月份通过菜单获取列表数据，点击日期会弹出日历表单新增或更新数据

### 配置
fieldProps
```json
//示例
{
  "path": "example/user/huodong",
  "colors": [
    "#e90b3a",
    "#a0ff03",
    "#1ad5de"
  ],
  "onlyFuture": false,
  "defaultContent":"-",
  "idName": "user_id"
}
//说明
{
  "path": "对应的菜单路径",
  "colors":"多行数据显示的色值数组",
  "onlyFuture": "是否只有今日之后的数据可以打开表单",
  "defaultContent":"无数据时的默认显示内容",
  "idName": "当前数据id值传输数据的键值名称"
}
```

### 后台代码示例
```php
<?php
namespace App\Http\Controllers\admin\echoyl\user;
use App\Http\Controllers\admin\BaseController;
use App\Models\echoyl\user\Huodong;


//customer namespace start

//customer namespace end

class HuodongController extends BaseController
{
	//customer property start
	
	//customer property end
    public function __construct()
	{
		parent::__construct();
		$this->search_config = [
		    [
		        'name' => 'user_id',
		        'columns' => [
		            'user_id',
		        ],
		        'where_type' => '=',
		    ],
		    [
		        'name' => 'date',
		        'columns' => [
		            'date',
		        ],
		        'where_type' => 'whereBetween',
		    ],
		];
		$this->model = new Huodong();
		$this->model_class = Huodong::class;
		//customer construct start
		//通过日期获取id 设置到request当中
		$date = request('date',request('base.date'));
		$user_id = request('user_id',request('base.user_id'));
		if($date)
		{
			$item = $this->model->where(['date'=>$date,'user_id'=>$user_id])->first();
			if($item)
			{
				request()->offsetSet('id',$item['id']);
			}
		}
		//customer construct end
	}

	//customer code start
	public function postData(&$item)
	{
		$item['date'] = request('date', '');
	}
	public function listData(&$list)
	{
		//d($list);
		foreach($list as $key=>$val)
		{
			if($val['state'])
			{
				$content = [];
				$content[] = '活动：'.$val['huodong'].' / 160 千卡';
				$content[] = '锻炼：'.$val['duanlian'].' / 30 分钟';
				$content[] = '站立：'.$val['zhanli'].' / 12 小时';
				if($val['desc'])
				{
					$content[] = $val['desc'];
				}
			}else
			{
				$content = '<p style="text-align:center;color:gray">今日躺平</p>';
			}
			$list[$key]['content'] = $content;
		}
		return $list;
	}
	public function handleSearch($search = [])
	{
		$m = $this->model;
		$month = request('month',date("Y-m"));
		$range = [$month.'-01',$month.'-'.date('t',strtotime($month))];
		$m = $m->whereBetween('date',$range);
		return [$m,$search];
	}
	//customer code end
	
}


```