## 获取排行榜列表

#### 全路径

```
http://localhost:8080/music/api/top_list
```

#### 前置条件

> 无
>

#### 参数说明

> 无
>

#### 请求方式

参数结构和名称不可改变，只能修改参数值

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
  data:[
    {
      id: 4,
      top_pic: "http://y.gtimg.cn/music/photo_new/T003R300x300M000002ds7XQ1NQlW2.jpg",
      top_title: "巅峰榜·流行指数",
      listen_num: 19500000,
      listen_str: "1950.0万",
      song_list: [
        {
          song_name: "好想大声说爱你 (Live)",
          singer_name: "声入人心男团"
        },
        ......
      ]
    },
    ......
  ]
}
```

