## 获取移动版焦点图

#### 全路径

```
http://localhost:8080/music/api/banner_h5
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
    {
      "pic": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1234416.jpg",
      "url": "https://y.qq.com/m/digitalbum/gold/index.html
    }, {
      "pic": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1232048.jpg",
      "url": "https://y.qq.com/m/act/classic2/index.html
    }, {
      "pic": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1232576.jpg",
      "url": "https://y.qq.com/msa/362/198_7079.html?openinqqmusic=1"
    }, {
      "pic": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1220009.jpg",
      "url": "https://y.qq.com/portal/headline/detail.html?zid=1197699"
    }, {
      "pic": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1230092.jpg",
      "url": "https://y.qq.com/portal/headline/detail.html?zid=1207497"
    }
  ]
}
```

