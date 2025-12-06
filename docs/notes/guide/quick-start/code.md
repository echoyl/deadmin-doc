---
title: 代码生成
createTime: 2025/11/08 10:32:16
permalink: /guide/code/
---

## 简介

::: info
代码生成在一般简单的需求情况下是不需要手写或修改代码的，如果需要在可以在自定义代码块中添加自定义代码

配置 `模型` 后自动生成`控制器`和`模型文件`

生成的文件中包含自定块，可自行修改，修改模型后不会覆盖该块的内容
:::

## 生成示例

这是一个文章模块通过创建模型生成的文件

### 目录机构

::: file-tree icon="simple"
`echoyl`为项目名称

`news`为上级目录，创建模型时可选择类型为目录或模型

- app
  - Http
    - Controllers
      - admin
        - echoyl
          - news
            - NewsController.php
  - Models
    - echoyl
      - news
        - News.php

:::

### 生成后的代码

::: code-tabs
@tab 控制器文件

```php
<?php

namespace App\Http\Controllers\admin\echoyl\news;

use App\Http\Controllers\admin\BaseController;
use App\Models\echoyl\news\News;


//customer namespace start

//customer namespace end

class NewsController extends BaseController
{
	//customer property start

	//customer property end
	public function __construct()
	{
		parent::__construct();
		$this->with_column = [
			'category',
			'comments',
		];
		$this->with_count = ["comments"];
		$this->can_be_null_columns = ["author", "desc", "link", "tag_id"];
		$this->model = new News();
		$this->model_class = News::class;
		//customer construct start
		$this->default_post = ['score_range' => [50, 70]];
		//customer construct end
	}

	//customer code start
	public function handleSearch($search = [])
	{
		$m = $this->getModel();
		$search['summary'] = '<span style="color:red">合计 ：可以是一段自定义html</span>';
		return [$m, $search];
	}
	public function recommend()
	{
		$this->model->whereIn('id', request('ids'))->update(['is_recommend' => 1]);
		return $this->success('操作成功');
		//d(request('ids'));
	}
	public function shenhe()
	{
		return $this->success([]);
	}
	//customer code end

}

```

@tab 模型文件

```php
<?php
namespace App\Models\echoyl\news;
use App\Models\echoyl\news\Category;
use App\Models\echoyl\news\Tag;
use App\Models\echoyl\news\Comment;
use Echoyl\Sa\Models\Base;

//customer namespace start

//customer namespace end

class News extends Base
{

    /**
     * 与模型关联的数据表
     *
     * @var string
     */
    protected $table = 'echoyl_news_news';

    /**
     * 在模型表中的id
     *
     * @var int
     */
    public $model_id = 10024;

    /**
     * 模型存在多语言的字段
     *
     * @var array
     */
    public $locale_columns = [];

    public function getParseColumns()
    {
        static $data = [];
        if(empty($data))
        {
            $data = [
			    [
			        'name' => 'category',
			        'type' => 'model',
			        'class' => Category::class,
			        'foreign_key' => 'id',
			    ],
			    [
			        'name' => 'comments',
			        'type' => 'models',
			        'class' => Comment::class,
			        'foreign_key' => 'news_id',
			    ],
			    [
			        'name' => 'aliyun',
			        'type' => 'aliyunVideo',
			        'default' => '',
			    ],
			    [
			        'name' => 'category_id',
			        'type' => 'cascader',
			        'default' => '',
			        'class' => Category::class,
			        'with' => true,
			    ],
			    [
			        'name' => 'content',
			        'type' => 'tinyEditor',
			        'default' => '',
			    ],
			    [
			        'name' => 'fujian',
			        'type' => 'file',
			        'default' => '',
			    ],
			    [
			        'name' => 'is_recommend',
			        'type' => 'switch',
			        'default' => 0,
			        'with' => true,
			        'data' => [
			            [
			                'label' => '否',
			                'value' => 0,
			            ],
			            [
			                'label' => '是',
			                'value' => 1,
			            ],
			        ],
			    ],
			    [
			        'name' => 'pics',
			        'type' => 'image',
			        'default' => '',
			    ],
			    [
			        'name' => 'score_range',
			        'type' => 'saSlider',
			        'default' => '5,50',
			    ],
			    [
			        'name' => 'specs',
			        'type' => 'json',
			        'default' => '',
			    ],
			    [
			        'name' => 'state',
			        'type' => 'switch',
			        'default' => 1,
			        'table_menu' => true,
			        'with' => true,
			        'data' => [
			            [
			                'label' => '禁用',
			                'value' => 0,
			            ],
			            [
			                'label' => '启用',
			                'value' => 1,
			            ],
			        ],
			    ],
			    [
			        'name' => 'tag_id',
			        'type' => 'selects',
			        'default' => '',
			        'class' => Tag::class,
			        'no_category' => true,
			        'columns' => [
			            'color',
			            'id',
			            'title',
			        ],
			        'with' => true,
			    ],
			    [
			        'name' => 'titlepic',
			        'type' => 'image',
			        'default' => '',
			    ],
			];
        }
        return $data;
    }

    //relationship start

    public function category()
    {
        return $this->hasOne(Category::class,'id','category_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class,'news_id','id');
    }

    //relationship end

    //customer code start

	//customer code end

}
```

:::
