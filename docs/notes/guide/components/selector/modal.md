---
title:  弹出列表
createTime: 2025/04/17 15:46:26
permalink: /guide/selector/modal/
---
## 在线预览
::: info 地址

modal弹出层选择器，支持单选，多选，自定义显示字段，自定义弹出列表的列字段展示。对比 `searchSelect` 更丰富的展示选择数据，检索体验也更好。稍微复杂一些，需要配置一些参数。

[点击查看](https://echoyl.com/antadmin/components/selector/modal)
:::



## 参数配置

### 读取数据所存储的字段名

::: info 说明
模型字段如果有关联，会自动生成 `relationname` 的配置。没有配置该值的话直接读取当前dataIndex字段的值。

比如关联了user,后台数据 `with->(['user'])` 后数据默认去读取当前 `record.user` 中的 `fieldNames`
:::
```json
{
  "fieldProps":{
    "relationname":"user"
  }
}
```
### size
配置选择后的数据展示框的大小，最大为100%宽度，不会超过父容器宽度。
```json
{
  "fieldProps":{
    "size":"small | default | large"
  }
}
```

### fieldNames
自定义显示字段信息 有 avatar图片，title标题，description描述字段，默认字段名
```json
{
  "fieldProps":{
    "fieldNames":{
      "title": "标题字段 默认 title",
      "description": "描述字段 默认 desc",
      "avatar": "头像字段 默认 ['titlepic', 0, 'url'] 支持数组模式手动指定对象中的字段，如果是字符串会默认读取 字段.0.url"
    }
  }
}
```

### 关联菜单选择

::: info 说明
直接在配置关联页面中选择已有的菜单，也可以手动配置 fieldProps.page.path 关联页面路径。建议直接选择关联页面。
:::
### 弹层页面列表项
::: info 说明
如果不配置默认就是直接使用关联页面的列表项，如果配置了则使用配置的列表项。如果关联页面没有其它地方展示，只是作为数据源来选取，那么配置好关联页面后，这里就不用在自定义列了。
:::
 ```json
{
  "fieldProps":{
    "page": {
      "columns": [//弹层需要展示的列字段集合，如果设置按照设置的显示，未设置则使用关联页面的列表列显示
      ],
      "path":"关联的页面路径，如果设置了模型关联会自动生成，或在编辑项中选择关联页面指定的菜单"
    },
  }
}

```

### 提交数据字段
::: info 说明
默认只会提交 `id` 和 `fieldNames` 中的字段。如果想在提交数据中增加数据的其它字段需要配置 `fieldProps.extColumns` 字段。

这样表单提交后会包含这些额外的字段信息，后端可以获取到。

主要是获取记录的全部字段信息，如果record的数据量很大的话，那么post的数据也将会很大
:::

```json
{
  "fieldProps":{
    "extColumns":["字段1","字段2"]//提交数据中增加的字段
  }
}
```

### 多选

::: info 说明
多选的话后端返回反选数据暂时没有添加，所以请在数据接口的地方自行读取数据返回

多选时数据放到了[{data:record}]data中。data名称可以配置{dataName:"data"}
:::

```json
{
  "fieldProps":{
    "multiple":true,//是否开启多选
    "max":9,//最大选择数量
  }
}
```

### 使用示例配置

```json
{
  "fieldNames": {
    "title": "username",
    "description": "desc",
    "avatar": "avatar"
  },
  "page": {
    "columns": [
      "username",
      "avatar",
      "desc",
      "keyword"
    ]
  }
}
```