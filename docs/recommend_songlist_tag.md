## 获取标签推荐列表

#### 全路径

```
http://localhost:8080/music/api/recommend_songlist_tag
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| picSize | 300 | number |     | 无 | 图片尺寸 |
| id | 64 | number |     | 无 |  |
| curPage | 1 | number |     | 无 | 分页 |
| size | 20 | number |     | 无 | 返回多少个 |
| order | 5 | number |     | 无 | 排序方式 |
| titleid | 64 | number |     | 无 | 图片尺寸 |

#### 请求方式

参数名称不可改变

```js
axios.get(url,{
  params:{
    id: 64,
    curPage: 1,
    size: 20,
    order: 5,
    titleid: 64
  }
}).then((response)=>{
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
      "disstid": 1136459077,
      "title": "KTV聚会必唱的正能量金曲",
      "pic": "http://p.qpic.cn/music_cover/PiaZ..../300?n=1",
      "listen_num": 1819232,
      "listen_str": "181.9万"
    },
    ......
  ]
}
```

