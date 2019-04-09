## 获取歌手专辑列表

#### 全路径

```
http://localhost:8080/music/api/singer_album
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
| begin     | 0              | number | *    | 无       | 开始查询位置       |
| num       | 30             | number | *    | 无       | 每次查询返回的条数 |
| order     | time         | string | * | ['listen','time'] | 列表的排序方式     |

#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    singer_mid: "002J4UUk29y8BY",
    order: "time",
    begin: 0,
    num: 30,
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
    total: 101,
    singer_id: 143,
    singer_mid: "003Nz2So3XXYek",
    singer_name: "陈奕迅",
    list:[
      {
        album_id: 4987028,
        album_mid: "002hU81Y0FOVki",
        album_name: "L.O.V.E.",
        album_type: "录音室专辑",
        album_pic: "http://y.gtimg.cn/music/photo_new/...Vki.jpg",
        album_desc: "刻划来自团队间深厚的爱...",
        pub_time: "2018-12-12",
        listen_num: 30333976,
        listen_str: "3033.4万"
        attribute5: "0",
        score: "0",
        lan: "粤语"
      },
      ......
    ]
  }
}
```

