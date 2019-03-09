## 获取歌单详情

#### 全路径:

```
http://localhost:8080/music/api/album_detail
```

#### 前置条件

> 需要得到歌单的 mid    
>
> 相关接口：[http://localhost:8080/music/album_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/album_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数 | 说明               |
| :-------- | -------------- | ------ | ---- | -------- | ------------------ |
| albummid | 003ui8B10AtGES | string | *    | 无       | 歌单的唯一标识     |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    albummid: '003ui8B10AtGES'
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
    time: "2019-02-20",
    total: 2,
    lan: "国语",
    genre: "Alternative 另类",
    company: "StreetVoice",
    album_id: 6258437,
    album_mid: "003ui8B10AtGES",
    album_desc: "浅堤的第一张Demo早已于2016年释出，....",
    album_name: "Demo.1",
    singer_id: 1445238,
    singer_mid: "001OheqL4dhfwv",
    singer_name: "浅堤",
    list:[
      {
        interval_num: 313,
        interval_str: "05:13",
        song_id: 228781203,
        song_mid: "000ZeTzd4So3Dz",
        song_name: "怪手",
        song_orig: "怪手",
        mv_mid: "r0029wwo8hd",
        singers: [
          {
            id: 1445238,
            mid: "001OheqL4dhfwv",
            name: "浅堤"
          }
        ]
      },
      ......
    ]
  }
}
```

