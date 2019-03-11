## 获取歌手单曲列表

#### 全路径

```
http://localhost:8080/music/api/singer_song
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
| num       | 30             | number | *    | 无                | 每次查询返回的条数 |
| order     | listen         | string | *    | ['listen','time'] | 列表的排序方式     |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    singer_mid: '002J4UUk29y8BY',
    begin: 0,
    num: 30,
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
    singer_id: "5062",                  //  歌手 id
    singer_mid: "002J4UUk29y8BY",       //  歌手 mid 
    singer_name: "薛之谦",               //  歌手名称
    total: 208,                         //  单曲总数
    list:[
      {
        index: 1,                       //  序号
        interval_num: 248,              //  歌曲总时长
        interval_str: "04.13",          //  歌曲格式化时长
        album_id: 5724335,              //  所属专辑 id
        album_mid: "0015rUVB2OUdGA",    //  所属专辑 mid
        album_desc: "",                 //  所属专辑描述
        album_name: "怪咖",              //  所属专辑名称
        song_id: 225584334,             //  歌曲 id
        song_mid: "000Qepff3UyUWO",     //  歌曲 mid
        song_name: "天份",               //  歌曲名称
        song_orig: "天份",               //  
        song_type: 0,                   //  歌曲类型
        mv_mid: "a0029621gkf"           //  MV的 mid
      },
      ......
    ]
  }
}
```

