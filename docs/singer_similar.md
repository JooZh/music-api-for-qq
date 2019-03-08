## 获取相似歌手列表

#### 全路径:

```
http://localhost:8080/music/api/singer_similar
```

#### 前置条件

> 需要得到歌手 mid    
>
> 相关接口：[http://localhost:8080/music/singer_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数 | 说明               |
| :-------- | -------------- | ------ | ---- | -------- | ------------------ |
| picSize | 150 | number |  | [150,300,500,800] | 头像尺寸大小 |
| singer_mid | 002J4UUk29y8BY | string | *    | 无       | 歌手的唯一标识     |
| start     | 0              | number | *    | 无       | 开始查询位置       |
| num       | 30             | number | *    | 无       | 每次查询返回的条数 |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    singer_mid: '002J4UUk29y8BY',
    start: 0,
    num: 20,
    picSize: 300
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
  data:{
    total: 208,                        
    list:[
      {
        singer_id: 265,
        singer_mid: "001JDzPT3JdvqK",
        singer_name: "王力宏",
        singer_avatar: "http://imgcache.qq.com/music/photo/mid_singer_300/q/K/001JDzPT3JdvqK.jpg"
      },
      ......
    ]
  }
}
```

