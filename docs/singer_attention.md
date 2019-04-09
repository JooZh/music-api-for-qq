## 获取歌手关注度

#### 全路径

```
http://localhost:8080/music/api/singer_attention
```

#### 前置条件

> 需要得到歌手 mid    
>
> 相关接口：[http://localhost:8080/music/singer_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数 | 说明               |
| :-------- | -------------- | ------ | ---- | -------- | ------------------ |
| singer_mid | 002J4UUk29y8BY | string | *    | 无       | 歌手的唯一标识     |

#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    singer_mid: '002J4UUk29y8BY',
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
    num: 13443111,
    str: "1344.3万"
  }
}
```

