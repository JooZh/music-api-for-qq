## 获取推荐歌曲列表

#### 全路径

```
http://localhost:8080/music/api/recommend_songlist_hot
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| picSize | 300 | string |     | 无 | 图片尺寸 |



#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url).then((response)=>{
  response.data
})
```

#### 返回数据

```js
{
  message: "ok",
  status: 0,
  data:[
    {
      "disstid": 6754701031,
      "title": "每日新歌：丝丝写给妈妈的抒情信",
      "pic": "http://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY...../500?n=1",
      "listen_num": 15928,
      "listen_str": "1.6万"
    },
    ......
  ]
}
```

