## 获取PC版焦点图

#### 全路径

```
http://localhost:8080/music/api/banner_index
```

#### 前置条件

> 无
>

#### 参数说明

> 无
>

#### 请求方式

参数名称不可改变

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
    "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1230177.jpg",
    "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1230131.jpg",
    "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1230486.jpg",
    "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1233464.jpg"
  ]
}
```

