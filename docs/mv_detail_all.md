## 获取MV详情页集合信息

#### 全路径

```
http://localhost:8080/music/api/mv_detail
```

#### 前置条件

> 需要获得mv的 mid 
> 获取歌曲相关接口。

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| mv_mid | v00149ipnk5 | string | *    | 无 | 唯一标识 |


#### 请求方式

参数名称不可改变。

```js
axios.get(url, {
  params:{
    mv_mid:"v00149ipnk5"
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
    recommend_url: "http://dl.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
    play_urls: [
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://dl.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://isure.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610....."
    ],
    mv_info:{
      mv_title: "喜欢你",
      mv_pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M101004EyEGU1Z2O9b.jpg",
      mv_mid: "v00149ipnk5",
      mv_desc: "G.E.M. 邓紫棋 - 喜欢你",
      interval_num: 269,
      interval_str: "04.48",
      play_num: 28349344,
      play_str: "2834.9万",
      pub_date: "2014-08-14",
      singers: "G.E.M. 邓紫棋"
    },
    other_list:[
      {
        mv_title: "浙江卫视秋季盛典节目单出炉，......",
        mv_pic: "http://y.gtimg.cn/music/photo_new/T023R750x750M000001uzMOD0UbAj5.jpg",
        mv_mid: "0125H8iA3uIW52",
        mv_desc: "",
        interval_num: 226,
        interval_str: "03.77",
        play_num: 175563,
        play_str: "17.6万",
        pub_date: "2018-10-17",
        uploader_nick: "华语现场"
      },
      .......
    ]
  }
}
```

