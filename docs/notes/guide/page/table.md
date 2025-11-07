---
title: 表格
createTime: 2025/11/07 10:15:14
permalink: /guide/page/table/
---

## 在线预览

::: info 地址
[点击查看](https://echoyl.com/antadmin/example/news/news)

:::

## 基础

### 简介

表格列表页面是后台管理系统中最常见的页面之一，用于展示和管理数据列表。在 DeAdmin 中，我们提供了灵活且强大的表格组件，支持自定义表头、列宽、排序等功能，满足各种业务需求。
支持大部分常见的需求功能，如：搜索栏、头部操作栏、底部操作栏、内置列、默认请求参数、合计等。

### 开发时编辑

::: info 快速的开发体验，一个表格只要勾选字段即可完成开发，无需编写任何代码

支持快速勾选需要选择的字段，拖拽排序字段显示顺序，拖动列宽，单个列头右键菜单后编辑详细自定义等。
更多配置还可以菜单设置中进行设置，比如设置表格的大小，滚动宽度，分页配置等

:::

### 列的条件显示

编辑该列设置`显示条件`

```json
{ "record": "当前请求返回search数据", "user": "当前登录用户" }
```

示例 `{{user.role_id == 1}}` 表示如果用户的角色 id 为 1 则显示该列

### 搜索栏

编辑需要搜索的列，勾选`可搜索`，如果只要搜索不展示在列表中，勾选`表中隐藏`即可

### Toolbar 头部操作栏

位于表头头部的操作栏展示，提交数据默认带入 ids:[] 所勾选的表格数据

- 1.插入字段类型选择 `头部操作栏 - toolbar`
- 2.更多设置中编辑自定义 dom（自定义组件设置）
- 3.提供`导出`及`导入`两种字段类型，快速展示出该两个功能按钮，默认 url + export | import 后台逻辑需要自行实现

### Selectbar 底部操作栏

位于表格底部操作栏展示，需要勾选表格数据后才会展示，提交数据默认带入 ids:[] 所勾选的表格数据

- 1.插入字段类型选择 `底部选择操作栏 - selectbar`
- 2.更多设置中编辑自定义 dom（自定义组件设置）
- 3.默认加入批量删除功能，菜单编辑中关闭可删除后不展示该按钮
- 4.默认保留字段名称 请求返回数据 search.states 有数据的话会展示该批量设置按钮，如`启用` `禁用`

### 内置列

- 1.排序功能 字段 `displayorder` 默认在列表中展示排序输入框 输入后修改该记录排序值
- 2.操作栏 默认包含 `编辑` `删除` 3 个功能按键，菜单关闭 `可编辑` `可删除`后 隐藏 `编辑`和`删除`
- 3.可添加自定义列，在 dom 中添加 `查看` 按钮。或其它操作按钮

### 默认请求参数

当前页面需要自带自定义参数时使用
在编辑菜单页面 - 其他配置中加入下方设置

```json
{
	"paramExtra": {
		"key_name": "key_value"
	}
}
```

### summary 合计

在数据接口中返回 `search.summary` 字段

```php

public function handleSearch($search = [])
{
    $m = $this->getModel();
    $search['summary'] = '<span style="color:red">合计 ：可以是一段自定义html</span>';
    return [$m, $search];
}

```

## 搜索

::: info
这里我们使用搜索会员性别为例
:::

### 编辑模型添加搜项

这里添加设置后会在 php 文件中自动加入该项的搜索设置，如果取消这部的话需要自己在 php 控制器中加入搜索逻辑代码

- 添加一行搜索配置 url 参数名称 填入 gender（url 名称就是请求后台的参数名，可以自由设置）
- 搜索类型选择 `=`，这里支持 `=`,`like`,`whereBetween`,`whereIn`,`has`,`doesntHave`
- 字段选择 gender 字段,字段支持选择多个

- ![image](https://echoyl.com/storage/images/202408/rn7SVDPRiq0JkkkHo4i1Z6pb66mrg3rC3sttbeyJ.png)

保存后 php 代码会变成这样

```php
$this->search_config = [
		    [
		        'name' => 'gender',
		        'columns' => [
		            'gender',
		        ],
		        'where_type' => '=',
		    ],
		];

```

### 在列表页面加入搜索设置

因为当前性别列在列表中已经以自定义组件显示，所以搜索字段需要新增一列

![image](https://echoyl.com/storage/images/202408/YAbT0LSgm9tzLuKJ9hB1bgfguU2gTcQHfUAIjWO6.png)

### 设置默认的表单值

在当前项设置中，整体配置加入 `initialValue` 值即可设置默认搜索值
加入默认值后点击重置按钮搜索项默认会使用该默认值，只有点击搜索项的 × 按钮后再点击搜索才不会使用默认值搜索。
之前使用 ret.search.values 后配置这个默认值，导致必须 1.后台获取搜索值的时候前端未传值后会使用默认值，导致无法清空搜索值。
ps：现在直接在配置中设置默认值。日期的话使用 dayjs 代码后程序直接会进行格式化。

```json
{
	"initialValue": 1
}
```

日期格式化 使用`dayjs`组件自行设置

```json
{
	"initialValue": "{{dayjs().format('YYYY-MM-DD')}}"
}
```

### 搜索功能完成 效果图

![image](https://echoyl.com/storage/images/202408/jFLi9SY6GaRyQ94fxKCJyjR8O1wO3Q5i1lFNWLhP.png)

## Tab 筛选

::: info
tab 筛选一般是列表中优先级最高的快捷检索，一般默认都会是数据的启用与禁用的状态，这次我们以会员的`性别`和`启用禁用`状态作为示例来设置列表页的`tab筛选`
:::

### 设置模型字段支持 tab

可以设置多个字段是否支持 tab，开启后列表返回数据会将可选数据放入到 table_menu 数据中以供前端消费

![image](https://echoyl.com/storage/images/202408/7Ca8tDxpT4IJ9b1xyZeACeP3Uh4XtBg0MHbMINfS.png)

### 在列表中设置

::: info
备注 开启 tab 筛选至少要 在搜索表单中或者列表中有展示，不然下次找不到设置的地方了。
:::

- 先设置状态字段 点击开启 tab
- ![image](https://echoyl.com/storage/images/202408/gVBmTUN9SyPlHoCVtIiZ6jIKtplJUUeHVDkK579i.png)
- 效果如下
- ![image](https://echoyl.com/storage/images/202408/vUX6KlAAfd3HDXgZc04UuMP1RLboxVonVUeu2Jv6.png)

### 切换为性别筛选

- 关闭刚才勾选的状态 tab
- 在性别设置中开启 tab
- 效果如下
- ![image](https://echoyl.com/storage/images/202408/RbxkAyvd11bHphg4x5SuVaqTV75Fk5BjbUq5Hj9q.png)

### 设置默认选中项

- 假设我们默认要选中 女
- 编辑当前菜单在其它配置中加入`table_menu_default` 的配置 这里填入`female`
- ![image](https://echoyl.com/storage/images/202408/ki3eDXhBBRe3JiZZjLNAKtO2lCz6YH3cgeP3mVUm.png)
- 如果当前未选中或者刷新当前页面后默认选中的就是 female 的 tab 了
- ![image](https://echoyl.com/storage/images/202408/Kr94TSY0MlFObuCFqb0mhDy6UyvcNochlOYgR3UM.png)

### 去掉 tab 默认追加的 全部选项

默认开启 tab 后是会加入全部这个选项的，默认页是选中这个全部选项
关闭这个设置的话

- 编辑当前菜单，在其它配置中配置`table_menu_all`:`false`
- ![image](https://echoyl.com/storage/images/202408/ss6Zh5GoyvetKA1QRGc0rSFheM2ZCIIDoHQx1ncL.png)
- 效果如下图
- ![image](https://echoyl.com/storage/images/202408/nWSgRujlTJZiQwhARw1WdNYLQxYQgUkfKz4GXKNz.png)

## 卡片列表

### 简介

::: info
卡片式列表适用于显示字段较少，包含封面图，标题，描述，及个别显示字段的信息展示。常用于项目，会员等信息展示
:::

### 配置

配置和 table 差不多，需要额外的选项显示配置如下图所示

![image](https://echoyl.com/storage/images/202410/C8kuGeKfbl3KCPs7ACLCAOCXZQG14KandeUjb0yg.png)

### 支持功能

- 功能和 table 基本相同，下面是不同点
- 勾选 使用 checkcard 的样式展示
- 除了固定的封面，标题，描述外，最后一行展示是使用 flex 布局，可以插入自定显示信息。支持类型为 option 和 自定义组件，内容显示。

### 整体效果显示

![image](https://echoyl.com/storage/images/202410/3089suZKgkiWYNmUc4zqMieemTEo7uldvyFicGLR.png)

### 总结

::: info
该组件直接使用 ProList 封装，得益于 ProList 是基于 ProTable 的，所以我们实现这个功能只要继续向下拓展 SaTable，然后实现单个信息的 coverItem 卡片样式的显示即完成该功能
:::
