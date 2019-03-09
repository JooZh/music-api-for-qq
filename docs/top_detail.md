## 获取排行榜详情

#### 全路径:

```
http://localhost:8080/music/api/top_detail
```

#### 前置条件

> 需要得到 排行ID    
>
> 相关接口：[http://localhost:8080/music/top_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/top_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数 | 说明               |
| :-------- | -------------- | ------ | ---- | -------- | ------------------ |
| topid | 26 | number | *    | 无       | 排行榜 id     |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    topid: 26  
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
    total: 300,
    list_name: "巅峰榜·热歌",
    list_info: "一周最具人气歌曲排行榜，....",
    listen_num": 19200000,
    listen_str: "1920.0万",
    update_time: "2019-03-07",
    week: "9",
    song_list:[
      {
        song_id: 225716644,
        song_mid: "002krvKI4Jgvq9",
        song_name: "知否知否",
        album_id: 5868415,
        album_mid: "003hzX7h4Flbcb",
        album_name: "知否知否应是绿肥红瘦 电视剧原声带",
        album_desc: "《知否知否应是绿肥红瘦》电视剧主题曲",
        mv_mid: "",
        interval_num: 276,
        interval_str: "04.60",
        is_pay: 0,                // 绿钻才能播放
        singers: [
          {
            id: 24833,
            mid: "002mze3U0NYXOM",
            name: "胡夏"
          },
          ......
        ]
      },
      ......
    ]
  }
}
```

