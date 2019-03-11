## 获取MV详情信息

#### 全路径

```
http://localhost:8080/music/api/mv_info
```

#### 前置条件

> 需要获得mv的 mid 
> 获取歌曲相关接口。

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| mv_mid | v00149ipnk5 | string | *    | 无 | 唯一标识 |


#### 请求方式

参数结构和名称不可改变，只能修改参数值。
该接口目前只支持单个歌曲的数据返回。

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
    mv_name: "喜欢你",
    mv_pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M101004EyEGU1Z2O9b.jpg",
    mv_mid: "v00149ipnk5",
    mv_desc: "G.E.M. 邓紫棋 - 喜欢你",
    interval_num: 269,
    interval_str: "04.48",
    play_num: 28349344,
    play_str: "2834.9万",
    pub_date: "2014-08-14",
    singers: "G.E.M. 邓紫棋"
}
```

