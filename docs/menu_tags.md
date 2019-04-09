##  获取分类歌单标签
#### 全路径

```
http://localhost:8080/music/api/menu_tags
```

#### 前置条件

> 无
>

#### 参数说明

> 无
>

#### 请求方式

参数名称不可改变

```js
axios.get(url).then((response)=>{
  response.data
})
```

#### 返回数据

```js
{
  message: "ok",
  status: 0,
  data:{
    all_sorts:[
      {
        "id": 2,
        "name": "最新"
      },
    ],
    tags:[
      {
        "id": 2,
        "name": "最新"
      },
    ]
  }
}
```

