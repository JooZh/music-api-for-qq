## 获取分类歌单详情

#### 全路径

```
http://localhost:8080/music/api/menu_detail
```

#### 前置条件

> 需要得到歌手 mid    
>
> 相关接口：[http://localhost:8080/music/menu_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/menu_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数          | 说明               |
| :-------- | -------------- | ------ | ---- | ----------------- | ------------------ |
| disstid | 6916344291 | number | *    | 无                | 歌单的唯一标识     |

#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    disstid: 6916344291
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
    info:[...],
    song_list:[...],
    song_ids:[...]
  }
}
```

