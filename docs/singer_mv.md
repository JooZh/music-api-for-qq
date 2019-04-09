## 获取歌手MV列表

#### 全路径

```
http://localhost:8080/music/api/singer_mv
```

#### 前置条件

> 需要得到歌手 mid    
>
> 相关接口：[http://localhost:8080/music/singer_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数          | 说明               |
| :-------- | -------------- | ------ | ---- | ----------------- | ------------------ |
| singer_mid | 002J4UUk29y8BY | string | *    | 无                | 歌手的唯一标识     |
| begin     | 0              | number | *    | 无                | 开始查询位置       |
| num       | 20             | number | *    | 无                | 每次查询返回的条数 |
| order     | listen         | string | *    | ['listen','time'] | 列表的排序方式     |

#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    singer_mid: '002J4UUk29y8BY',
    begin: 0,
    num: 20,
    order: 'listen'
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
    total: 208,                         //  单曲总数
    list:[
      {
        index: 1,                       //  序号
        score: 0,
        mv_mid: "o0016t2ucce",
        mv_id: 370246,
        mv_title: "演员",
        mv_desc: ,
        mv_pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M101000SDc5i3Z3ay6.jpg",
        singer_id: 5062,
        singer_name: "薛之谦",
        singer_mid: "002J4UUk29y8BY",
        upload_uin: 390180732,
        upload_nick: "單莼﹖",
        upload_pic: "http://thirdqq.qlogo.cn/g?b=sdk&k=wtQt3mzI2miap2PQcLwwtIw&s=100&t=0",
        upload_date: "2015-06-08",
        listen_num: 30333976,
        listen_str: "3033.4万"
      },
      ......
    ]
  }
}
```

