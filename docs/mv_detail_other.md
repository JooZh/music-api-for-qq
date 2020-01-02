## 获取MV详情其他

#### 全路径

```
http://localhost:8080/music/api/mv_other
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
  data:[
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
```

