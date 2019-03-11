## 获取歌单列表

#### 全路径

```
http://localhost:8080/music/api/song_detail
```

#### 前置条件

> 需要获得歌曲的 mid 
> 获取歌曲相关接口。

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| song_mid | 002E3MtF0IAMMY | number | *    | 无 | 筛选 |
| song_id | 200255722 | number | *    | 无 | 歌曲 id |


#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    song_mid: "002E3MtF0IAMMY",
    song_id: 200255722
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
    song_mv: [
      {
        mv_id: 1067783,
        mv_mid: "g0022q7z0um",
        mv_pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M10100038AaM2GLWRT.jpg",
        mv_title: "光年之外 (《太空旅客》电影中国区主题曲)",
        singers: [
          {
            id: 13948,
            mid: "001fNHEf1SFEFN",
            name: "G.E.M. 邓紫棋"
          }
        ]
      }
    ],
    song_gedan:[
      {
        tid: 6617869446,
        listen_num: 125275,
        listen_str: "12.5万",
        imgurl: "http://p.qpic.cn/music_cover/8HhavvWNIicpyjlv0U/600",
        dissname: "2019微视热门BGM全收录",
        creator: "顾念晨",
        song_num: 82
      },
      ......
    ],
    song_track:{
      // 结构稍复杂请看线上
    }
  }
}
```

