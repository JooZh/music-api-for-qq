## 获取歌曲播放资源列表

#### 全路径

```
http://localhost:8080/music/api/song_play
```

#### 前置条件

> 需要获得歌曲的 mid 
> 获取歌曲相关接口。

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| song_mid | 003jjoM94WLiTf | string | *    | 无 | 唯一标识 |
| guid | 9449044610 | number | *    | 无 | 未知 |


#### 请求方式

参数名称不可改变
该接口目前只支持单个歌曲的数据返回。

```js
axios.get(url, {
  params:{
    songmid: "003jjoM94WLiTf",
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
    user_ip:'0.0.0.0',
    recommend_url: "http://dl.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
    play_urls: [
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://dl.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://175.6.52.25/amobile.music.tc.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610.....",
      "http://isure.stream.qqmusic.qq.com/C400002Jbzn235xaQZ.m4a?guid=9449044610....."
    ]
  }
}
```

