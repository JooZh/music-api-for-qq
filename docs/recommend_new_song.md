## 获取推荐新歌列表

#### 全路径

```
http://localhost:8080/music/api/recommend_new_song
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| type | 2 | string | *    | [1,2,3,4,5] | 唯一标识 |



#### 请求方式

参数名称不可改变

```js
axios.get(url,{
  params:{
    type:2
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
  	total: 100,
  	list:[
      {
        "song_id": 230544400,
        "song_url": "http://stream0.qqmusic.qq.com/242544400.wma",
        "song_name": "罗志祥",
        "song_title": "罗志祥",
        "song_mid": "004NTEZ70W953M",
        "album_mid": "003ZTSn32YTO6c",
        "album_name": "罗志祥",
        "album_pic": "http://y.gtimg.cn/music/photo_new/T002R300x300M000003ZTSn32YTO6c.jpg",
        "interval_num": 278,
        "interval_str": "04:38",
        "time_public": "2019-03-26",
        "sub_title": "",
        "singers": [{
          "id": 4651,
          "mid": "003jECh24XL3yh",
          "name": "罗志祥"
        }]
      },
      ......
    ]
  }
}
```

