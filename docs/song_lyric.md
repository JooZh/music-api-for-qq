## 获取歌曲歌词

#### 全路径:

```
http://localhost:8080/music/api/song_lyric
```

#### 前置条件

> 需要获得歌曲的 mid 
> 获取歌曲相关接口。

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| songmid | 001Qu4I30eVFYb | number | *    | 无 | 歌曲的标识 |


#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    songmid:'001Qu4I30eVFYb'
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
    tags: {
      ti: "演员",
      ar: "薛之谦",
      al: "绅士",
      by: "",
      offset: "0"
    },
    lines:[
      {
        time: 0,
        text: "演员(Performer) - 薛之谦 (Joker)"
      }, {
        time: 1560,
        text: "词：薛之谦"
      }, {
        time: 3920,
        text: "曲：薛之谦"
      },
      ......
    ],
  }
}
```

