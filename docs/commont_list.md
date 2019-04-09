## 获取评论列表

#### 全路径

```
http://localhost:8080/music/api/commont_list
```

#### 前置条件

> 需要得到   MV mid  或者 专辑 id  或者 歌曲 id  
>
> 相关接口：[http://localhost:8080/music/singer_mv](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_mv.md)
> 相关接口：[http://localhost:8080/music/singer_song](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_song.md)
> 相关接口：[http://localhost:8080/music/singer_album](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_album.md)

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| id     | v00149ipnk5  | string / number | *    | 无 | MV mid  或者 专辑 id  或者 歌曲 id |
| pagenum | 0      | number | * | 无 | 开始加载的位置 |
| pagesize | 25   | number | * | 无 | 每次加载多少数量 |


#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    id: "v00149ipnk5",
    pagenum: 0,
    pagesize: 25,
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
    hot_comment:{
      total: 32,
      list:[
        {
          nick: "Sea",
          time: "2017-01-14",
          avatar: "http://thirdqq.qlogo.cn/g?b=sdk&k=iaYDJDOGLSic...",
          praisenum: 288,
          content: "你要知道这是家驹的歌 别搞错的 还拍个mv搞的跟你的歌一样.",
          reply: [
            {
              replyednick: "@阿宇小朋友ღ",
              replynick: "@Sea",
              replycontent: "有谁说不是家驹的歌了？拍个mv咋了，我觉得...."
            },
            ....
          ]
        },
        .....
      ]     
    },
    new_comment:{
      total: 32,
      list:[
        {
          nick: "Sea",
          time: "2017-01-14",
          avatar: "http://thirdqq.qlogo.cn/g?b=sdk&k=iaYDJDOGLSicUYZlC4c....",
          praisenum: 288,
          content: "你要知道这是家驹的歌 别搞错的 还拍个mv搞的跟你的歌一样.",
          reply: [
            {
              replyednick: "@阿宇小朋友ღ",
              replynick: "@Sea",
              replycontent: "有谁说不是家驹的歌了？拍个mv咋了，我觉得经典...."
            },
            ....
          ]
        },
        .....
      ]   
    }
  }
}
```

